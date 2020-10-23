import { dbManager } from 'model/DBManager';

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
        this.drinks = drinks.docs.map(drink => drink.data());
        this.pairItems = pairItems.docs.map(pairItem => pairItem.data());
        return this;
    }

    static getStations(ids) {
        var promises = ids.map(id => {
            var station = new Station(id);
            return station.init();
        });
        return Promise.all(promises);
    }
}