import { dbManager } from 'model/DBManager';
import Drink from 'model/Drink';

export default class Inventory {
    id;         // String
    name;       // String
    // availables; // List<(Drink, PairItem)>
    // assigned;   // List<(Drink, PairItem)>
    drinks;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    async getData() {
        var handle = dbManager.getInventoryHandle(this.id);
        var drinks = await handle.collection("drinks").get();
        this.drinks = drinks.docs.map(drinkInfo => new Drink(drinkInfo.data()));
        await Promise.all(this.drinks.map(drink => drink.init()));
    }

    static async getInventoryInfo() {
        var inventories = await dbManager.getAllInventories();
        return inventories.docs.map(inventory => new Inventory(inventory.id, inventory.data().name));
    }
}