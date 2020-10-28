import { dbManager } from 'model/DBManager';
import Drink from 'model/Drink';
import PairItem from 'model/PairItem';
import Server from 'model/Server';

const STATION_KEY = "@station"

export default class Station {
    id;         // String
    key;        // String
    name;       // String
    servers;    // List<Server> (ids)
    runners;    // List<Runner> (ids)
    details;    // String
    drinks;     // List<Drinks>
    pairItems;  // List<PairItems>

    constructor(id) {
        this.id = id;
    }

    async init() {
        var station = await dbManager.getStation(this.id);
        Object.assign(this, station.data());
        var [drinks, pairItems] = await Promise.all([
            dbManager.getDrinksInStation(this.id),
            dbManager.getPairItemsInStation(this.id)
        ]);
        this.drinks = drinks.docs.map(drink => new Drink(drink.data()));
        this.pairItems = pairItems.docs.map(pairItem => new PairItem(pairItem.data()));
        await Promise.all(this.drinks.map(drink => drink.init()));
        await Promise.all(this.pairItems.map(pairItem => pairItem.init()));
        this.servers = this.servers.map(server => new Server(server));
        await Promise.all(this.servers.map(server => server.init()));
        return this;
    }

    // Can be deprecated as now we have direct access to globalStations of an Event
    static getStations(ids) {
        var promises = ids.map(id => {
            var station = new Station(id);
            return station.init();
        });
        return Promise.all(promises);
    }

    static async setInstance(id) {
        dbManager.setStorage(STATION_KEY, id); // Not really used now that listeners are setup, to be deprecated
        stationID = id;
    }

    // To be deprecated, use getGlobalStation() instead
    static async getInstance() {
        var stationID = await dbManager.getStorage(STATION_KEY);
        var station = new Station(stationID);
        return await station.init();
    }

    static setStations(ids) {
        ids.map(id => {
            dbManager.getStationHandle(id).onSnapshot(update);
        })
    }

    // Returns the needed data for individual station detailed data screen
    static getDetailedData() {
        var station = getGlobalStation();
        var avail = [];
        var total = [];
        station.drinks.map(drink => {
            var item = {key: avail.length, name: drink.name, avail: drink.quantity, price: drink.pricePerUnit};
            total[item.key] = drink.quantity;
            avail[avail.length] = item;
        });
        var sold = [];
        station.servers.map(server => {
            var items = [];
            server.soldDrinks.map(drink => {
                var availItem = avail.find(item => item.name == drink.name);
                var soldItem = {key: availItem.key, name: drink.name, sold: drink.quantity, price: drink.pricePerUnit};
                total[availItem.key] += soldItem.sold;
                items[availItem.key] = soldItem;
            })
            sold[sold.length] = {tabletId: server.tabletId, sold: items};
        })
        return [avail, sold, total];
    }


    static getStationInventoryData() {
        var res = []
        var stations = getGlobalStations();
        stations.map(station => {
            var stationTotal = 0
            var stationAvail = 0
            var stationValue = 0
            station.drinks.map(drink => {
                stationTotal += drink.quantity
                stationAvail += drink.quantity
                stationValue += drink.quantity * drink.pricePerUnit
            });
            var item = {key: station.key, name: station.name, total: stationTotal, avail: stationAvail, value: stationValue, id: station.id};
            res.push(item)     
        });
        return res
    }

    static getTotalAvailableInventoryData() {
        var avail = [];
        var total = [];
        var stations = getGlobalStations();
        stations.map(station => {
            station.drinks.map(drink => {
                var index = avail.findIndex(item => item.name == drink.name);
                if (index == -1) {
                    var item = {key: avail.length, name: drink.name, avail: drink.quantity, price: drink.pricePerUnit, icon: drink.icon};
                    total[item.key] = drink.quantity;
                    avail[avail.length] = item;
                } else {
                    avail[index].avail += drink.quantity;
                    total[index] += drink.quantity;
                }
            });
        });
        var sold = [];
        stations.map(station => {
            var items = [];
            station.servers.map(server => {
                server.soldDrinks.map(drink => {
                    var index = avail.findIndex(item => item.name == drink.name);
                    total[index] += drink.quantity;
                    if (items[index] == undefined) {
                        items[index] = {key: index, name: drink.name, sold: drink.quantity, price: drink.pricePerUnit};
                    } else {
                        items[index].sold += drink.quantity;
                    }
                })
            })
            sold[sold.length] = {stationKey: station.key, sold: items};
        });
        return [avail, sold, total];
    }
    

    
    // Returns the needed data for total stations detailed data screen
    static getTotalDetailedData() {
        var avail = [];
        var total = [];
        var stations = getGlobalStations();
        stations.map(station => {
            station.drinks.map(drink => {
                var index = avail.findIndex(item => item.name == drink.name);
                if (index == -1) {
                    var item = {key: avail.length, name: drink.name, avail: drink.quantity, price: drink.pricePerUnit};
                    total[item.key] = drink.quantity;
                    avail[avail.length] = item;
                } else {
                    avail[index].avail += drink.quantity;
                    total[index] += drink.quantity;
                }
            });
        });
        var sold = [];
        stations.map(station => {
            var items = [];
            station.servers.map(server => {
                server.soldDrinks.map(drink => {
                    var index = avail.findIndex(item => item.name == drink.name);
                    total[index] += drink.quantity;
                    if (items[index] == undefined) {
                        items[index] = {key: index, name: drink.name, sold: drink.quantity, price: drink.pricePerUnit};
                    } else {
                        items[index].sold += drink.quantity;
                    }
                })
            })
            sold[sold.length] = {stationKey: station.key, sold: items};
        });
        return [avail, sold, total];
    }
}

async function update(data) {
    var station = new Station(data.id);
    Object.assign(station, data.data());
    var [drinks, pairItems] = await Promise.all([
        dbManager.getDrinksInStation(station.id),
        dbManager.getPairItemsInStation(station.id)
    ]);
    station.drinks = drinks.docs.map(drink => new Drink(drink.data()));
    station.pairItems = pairItems.docs.map(pairItem => new PairItem(pairItem.data()));
    await Promise.all(station.drinks.map(drink => drink.init()));
    await Promise.all(station.pairItems.map(pairItem => pairItem.init()));
    station.servers = station.servers.map(server => new Server(server));
    await Promise.all(station.servers.map(server => server.init()));
    globalStations[station.id] = station;
}

export function getGlobalStation() {
    return globalStations[stationID];
}

export function getGlobalStations() {
    var res = [];
    for (var id in globalStations) {
        res.push(globalStations[id]);
    }
    return res;
}

export var globalStations = {};
var stationID = "";