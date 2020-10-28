import { dbManager } from 'model/DBManager';
import Drink from 'model/Drink';
import PairItem from 'model/PairItem';

const SERVER_KEY = "@server"

export default class Server {
    id;             // String
    name;           // String
    stationId;      // String
    tabletId;       // String
    soldDrinks;     // List<Drink>
    usedPairItems;  // List<PairItem>

    constructor(id) {
        this.id = id;
    }

    async init() {
        var data = await dbManager.getServer(this.id);
        Object.assign(this, data.data());
        var [drinks, pairItems] = await Promise.all([
            dbManager.getDrinksInServer(this.id),
            dbManager.getPairItemsInServer(this.id)
        ]);
        this.soldDrinks = drinks.docs.map(drink => new Drink({
            ...drink.data(),
            id: drink.id
        }));
        this.usedPairItems = pairItems.docs.map(pairItem => new PairItem(pairItem.data()));
        await Promise.all(this.soldDrinks.map(drink => drink.init()));
        await Promise.all(this.usedPairItems.map(pairItem => pairItem.init()));
        return this;
    }

    static async setInstance(id) {
        dbManager.setStorage(SERVER_KEY, id);
    }

    static async getInstance() {
        var id = await dbManager.getStorage(SERVER_KEY);
        var server = new Server(id);
        return await server.init();
    }
}