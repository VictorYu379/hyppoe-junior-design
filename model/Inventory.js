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

    static setInventory(id) {
        dbManager.getInventoryHandle(id).onSnapshot(update);
    }

    static getDetailedData(inventory, stations) {
        var avail = [];
        var total = [];
        inventory.drinks.forEach((drink, index) => {
            var item = {key: index, name: drink.name, avail: drink.quantity, price: drink.pricePerUnit};
            total.push(drink.quantity);
            avail.push(item);
        });
        var assign = stations.map(station => {
            var items = [];
            station.drinks.forEach(drink => {
                var index = avail.findIndex(item => item.name == drink.name);
                total[index] += drink.quantity;
                if (items[index] == undefined) {
                    items[index] = {key: index, name: drink.name, assign: drink.quantity, price: drink.pricePerUnit};
                } else {
                    items[index].assign += drink.quantity;
                }
            });
            station.servers.forEach(server => {
                server.soldDrinks.forEach(drink => {
                    var index = avail.findIndex(item => item.name == drink.name);
                    total[index] += drink.quantity;
                    items[index].assign += drink.quantity;
                })
            })
            return {stationKey: station.key, assign: items};
        });
        return [avail, assign, total];
    }

    getTotalInventory() {
        var quantity = 0;
        var value = 0;
        this.drinks.forEach(drink => {
            quantity += drink.quantity;
            value += drink.pricePerUnit * drink.quantity;
        });
        return [quantity, value];
    }
}

async function update(data) {
    globalInventory.id = data.id;
    Object.assign(globalInventory, data.data());
    var [drinks, pairItems] = await Promise.all([
        dbManager.getDrinksInInventory(globalInventory.id),
        dbManager.getPairItemsInInventory(globalInventory.id)
    ]);
    globalInventory.drinks = drinks.docs.map(drink => new Drink(drink.data()));
    globalInventory.pairItems = pairItems.docs.map(pairItem => new PairItem(pairItem.data()));
    await Promise.all(globalInventory.drinks.map(drink => drink.init()));
    await Promise.all(globalInventory.pairItems.map(pairItem => pairItem.init()));
}

export var globalInventory = new Inventory("");
