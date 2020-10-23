import { dbManager } from 'model/DBManager';
import Drink from 'model/Drink';

export default class Inventory {
    id;         // String
    name;       // String
    // availables; // List<(Drink, PairItem)>
    // assigned;   // List<(Drink, PairItem)>
    drinks;

    constructor(id) {
        this.id = id;
    }

    async getData() {
        var handle = dbManager.getInventoryHandle(this.id);
        var data = await handle.get();
        this.name = data.data().name;
        var drinks = await handle.collection("drinks").get();
        this.drinks = drinks.docs.map(drinkInfo => new Drink(drinkInfo.data()));
        await Promise.all(this.drinks.map(drink => drink.init()));
        return this;
    }
}