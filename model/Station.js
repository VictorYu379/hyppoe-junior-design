import { dbManager } from 'model/DBManager';
import Drink from 'model/Drink';
import PairItem from 'model/PairItem';
import Server from 'model/Server';
import { globalEvent } from 'model/Event';
import Runner, { globalRunner } from 'model/Runner';
//import { get } from 'http';

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

    // Can be deprecated as now we have direct access to globalStations of an Event
    // static getStations(ids) {
    //     var promises = ids.map(id => {
    //         var station = new Station({id});
    //         return station.init();
    //     });
    //     return Promise.all(promises);
    // }

    // deprecated functions
    // static async setInstance(id) {
    //     dbManager.setStorage(STATION_KEY, id); // Not really used now that listeners are setup, to be deprecated
    // }

    // To be deprecated, use getGlobalStation() instead
    // static async getInstance() {
    //     var stationID = await dbManager.getStorage(STATION_KEY);
    //     var station = new Station({ id: stationID });
    //     return await station.init();
    // }

    static setStations(ids) {
        ids.map(id => {
            dbManager.getStationHandle(id).onSnapshot(update);
        })
    }

        static getDrinksSummary(){
        var stations = getGlobalStations();
        var res = []
        globalInventory.drinks.map(drink => {
            item = {
                icon: drink.icon, 
                name:drink.name, 
                avail:drink.quantity, 
                total:drink.quantity
            }
            res.push(item)
        })
        stations.map(station => {
            res.map(item => {
                station.drinks.map(drink => {
                    if(item.name == drink.name){
                        item.total += drink.quantity;
                    }
                })
                station.servers.map(server => {
                    server.soldDrinks.map(drink => {
                        if(item.name == drink.name){
                            item.total += drink.quantity;
                        }
                    })
                })
            })
        })
        return res
    }

    // Returns the needed data for individual station detailed data screen
    static getDetailedData(stationId) {
        var station = getGlobalStation(stationId);
        var avail = [];
        var total = [];
        if (station.drinks != undefined){
            station.drinks.map(drink => {
                var item = {key: avail.length, name: drink.name, avail: drink.quantity, price: drink.pricePerUnit};
                total[item.key] = drink.quantity;
                avail[avail.length] = item;
            });
        }
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
            station.servers.map(server =>{
                server.soldDrinks.map(drink => {
                    stationTotal += drink.quantity
                    stationValue += drink.quantity * drink.pricePerUnit
                })
            })
            var item = {key: station.key, name: station.name, total: stationTotal, avail: stationAvail, value: stationValue, id: station.id};
            res.push(item)     
        });
        return res
    }

    static getStationDrinksDataByID(ID) {
        var res = []
        var stations = getGlobalStations();
        station = stations.find(item => item.id == ID);
        station.drinks.map(drink1 => {
            var item = {
                icon: drink1.icon,
                name: drink1.name,
                avail: drink1.quantity,
                total: drink1.quantity,
            }
            station.servers.map(server => {
                server.soldDrinks.map(drink2 => {
                    if (drink1.name == drink2.name) {
                        item.total += drink2.quantity
                    }
                })
            })
            res.push(item)
        })
        return res
    }

    static getStationInventoryDataByID(ID) {
        var stations = getGlobalStations();
        station = stations.find(item => item.id == ID);
 
        var stationTotal = 0
        var stationAvail = 0
        var stationValue = 0
        station.drinks.map(drink => {
            stationTotal += drink.quantity
            stationAvail += drink.quantity
            stationValue += drink.quantity * drink.pricePerUnit
        });
        station.servers.map(server =>{
            server.soldDrinks.map(drink => {
                stationTotal += drink.quantity
                stationValue += drink.quantity * drink.pricePerUnit
            })
        })
        var item = {
            key: station.key, 
            name: station.name, 
            total: stationTotal, 
            avail: stationAvail, 
            value: stationValue, 
            id: station.id, 
            serverNum: station.servers.length,
            runnerNum: station.runners.length,
        };
         

        return item
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


    static getNumOfServers(stationId) {
        var res = 0;
        if (stationId === undefined) {
            var stations = getGlobalStations();
            stations.map(station => { res += station.servers.length });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                res = station.servers.length;
            }
        }
        return res;
    }
    
    static getNumOfRunners(stationId) {
        var res = 0;
        if (stationId === undefined) {
            var stations = getGlobalStations();
            stations.map(station => { res += station.runners.length });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                res = station.runners.length;
            }
        }
        return res;
    }

    static getServerDashboardHeaderData(stationId) {
        var res = 0;
        var key = 0;
        var name = "";
        var station = globalStations[stationId];
        if (station != undefined) {
            res = station.servers.length;
            key = station.key;
            name = station.name;
        }
        
        return [res, key, name];
    }


    //returns list of all stations with [id, name, stationkey]
    static getPickYourStationData() {
        var stations = getGlobalStations();
        var res = []
        stations.map(station => {
            var item = {id:station.id, name:station.name, stationkey:station.key}
            res.push(item)
        })
        return res
    }

    //return list of all servers with [id, serverkey] in station
    static getPickYourTabletData(stationId) {
        var station = globalStations[stationId];
        var res = []
        if (station != undefined) {
            station.servers.map(server => {
                var item = {id: server.id, key: server.tabletId}
                res.push(item)
            })
        }
        return res
    }

    //return list of all runners with [id, runnerkey] in station
    static getPickYourRunnerData(stationId) {
        var station = globalStations[stationId];
        var res = []
        if (station != undefined) {
            station.runners.map(runner => {
                var item = {id: runner.id, key: runner.key}
                res.push(item)
            })
        }
        return res
    }

    // Returns the station inventory details (avail of total qty, total available percentage) based on stationId.
    // Returns the all stations' inventory details if stationId is omitted.
    static getStationInventorySummary(stationId) {
        var avail = 0;
        var total = 0;
        if (stationId === undefined) {
            var stations = getGlobalStations();
            stations.map(station => {
                station.drinks.map(drink => {
                    avail += drink.quantity;
                    total += drink.quantity;
                });
                station.servers.map(server => {
                    server.soldDrinks.map(drink => {
                        total += drink.quantity;
                    })
                })
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                station.drinks.map(drink => {
                    avail += drink.quantity;
                    total += drink.quantity;
                });
                station.servers.map(server => {
                    server.soldDrinks.map(drink => {
                        total += drink.quantity;
                    })
                })
            }
        }
        var percent = (total == 0) ? 0 : Math.round(avail * 100 / total);
        return [avail, total, percent + "%"];
    }

    static getNumOfStationBelowInventory() {
        var rate = "OFF"
        if (globalEvent.alerts != undefined) {
            rate = globalEvent.alerts["Station Total Remaining"];
        }
        if (rate == 'OFF') {
            return 0;
        }
        var res = 0;
        rate = parseFloat(rate);
        for (var id in globalStations) {
            var percent = parseFloat(this.getStationInventorySummary(id)[2]);
            if (percent < rate) {
                res += 1;
            }
        }
        return res;
    }

    static getNumOfStations() {
        return getGlobalStations().length;
    }

    static createNewStation(data) {
        var newStation = new Station(data);
        return dbManager.getStationCollectionHandle().add({
            key: data.key,
            name: data.name,
            runners: data.runners,
            servers: data.servers
        }).then(stationDoc => {
            newStation.id = stationDoc.id;
            return newStation;
        });
    }
    
    constructor(data) {
        Object.assign(this, data);
    }

    // deprecated
    // async init() {
    //     var station = await dbManager.getStation(this.id);
    //     Object.assign(this, station.data());
    //     var [drinks, pairItems] = await Promise.all([
    //         dbManager.getDrinksInStation(this.id),
    //         dbManager.getPairItemsInStation(this.id)
    //     ]);
    //     this.drinks = drinks.docs.map(drink => new Drink({
    //         ...drink.data(),
    //         id: drink.id
    //     }));
    //     this.pairItems = pairItems.docs.map(pairItem => new PairItem(pairItem.data()));
    //     await Promise.all(this.drinks.map(drink => drink.init()));
    //     await Promise.all(this.pairItems.map(pairItem => pairItem.init()));
    //     this.servers = this.servers.filter(server => server !== "")
    //                                    .map(server => new Server(server));
    //     await Promise.all(this.servers.map(server => server.init()));
    //     return this;
    // }

    getTotalValue() {
        var totalValue = 0;
        if (this.drinks) {
            this.drinks.forEach(drink => {
                totalValue += drink.quantity * drink.pricePerUnit;
            });
        }
        return totalValue;
    }

    updateDrink(drink) {
        dbManager.updateDrinkInStation(this.id, Drink.parseDrink(drink)).catch(e => {
            console.log(e);
        });
    }

    findDrinkWithDrinkType(drinkTypeName) {
        return this.drinks.find(drink => drink.name === drinkTypeName);
    } 
}

async function update(data) {
    var station = new Station({ id: data.id });
    Object.assign(station, data.data());
    dbManager.getDrinksInStationHandle(station.id).onSnapshot(async (drinks) => {
        station.drinks = drinks.docs.map(drink => new Drink(drink.data()));
        await Promise.all(station.drinks.map(drink => drink.init()));
    });
    dbManager.getPairItemsInStationHandle(station.id).onSnapshot(async (pairItems) => {
        station.pairItems = pairItems.docs.map(pairItem => new PairItem(pairItem.data()));
        await Promise.all(station.pairItems.map(pairItem => pairItem.init()));
    });
    station.servers = station.servers.filter(server => server !== "")
                                     .map(server => new Server(server));
    station.runners = station.runners.filter(runner => runner !== "")
                                     .map(runner => new Runner(runner));
    await Promise.all(station.servers.map(server => server.init()));
    await Promise.all(station.runners.map(runner => runner.init()));
    globalStations[station.id] = station;
}

export function getGlobalStation(stationId) {
    return globalStations[stationId];
}

export function getGlobalStations() {
    var res = [];
    for (var id in globalStations) {
        res.push(globalStations[id]);
    }
    res.sort((a, b) => a.key - b.key);
    return res;
}

export var globalStations = {};
