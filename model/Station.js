import { dbManager } from 'model/DBManager';
import Drink from 'model/Drink';
import PairItem from 'model/PairItem';

const STATION_KEY = "@station"

export default class Station {
    id;         // String
    name;       // String
    servers;    // List<Server> (ids)
    runners;    // List<Runner> (ids)
    details;    // String
    // availables; // List<(Drink, PairItem)>
    drinks;
    pairItems;  

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
        return this;
    }

    static getStations(ids) {
        var promises = ids.map(id => {
            var station = new Station(id);
            return station.init();
        });
        return Promise.all(promises);
    }

    static async setInstance(id) {
        dbManager.setStorage(STATION_KEY, id);
    }

    static async getInstance() {
        var stationID = await dbManager.getStorage(STATION_KEY);
        var station = new Station(stationID);
        return await station.init();
    }
}