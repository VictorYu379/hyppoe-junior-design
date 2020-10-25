import { dbManager } from 'model/DBManager';
import Drink from 'model/Drink';
import PairItem from 'model/PairItem';

export default class Inventory {
    id;         // String
    name;       // String
    // availables; // List<(Drink, PairItem)>
    // assigned;   // List<(Drink, PairItem)>
    drinks;
    pairItems;

    constructor(id) {
        this.id = id;
    }

    async getData() {
        var handle = dbManager.getInventoryHandle(this.id);
        var data = await handle.get();
        this.name = data.data().name;
        var drinks = await handle.collection("drinks").get();
        var pairItems = await handle.collection("pairItems").get();
        this.drinks = drinks.docs.map(drinkInfo => new Drink(drinkInfo.data()));
        this.pairItems = pairItems.docs.map(pairItemInfo => new PairItem(pairItemInfo.data()));
        await Promise.all(this.drinks.map(drink => drink.init()));
        await Promise.all(this.pairItems.map(pairItem => pairItem.init()));
        return this;
    }
}