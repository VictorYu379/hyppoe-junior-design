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

    static getDetailedData(inventory, stations) {
        var avail = [];
        var total = [];
        inventory.drinks.map(drink => {
            var item = {key: avail.length, name: drink.name, avail: drink.quantity, price: drink.pricePerUnit};
            total[item.key] = drink.quantity;
            avail[avail.length] = item;
        });
        var assign = [];
        stations.map(station => {
            var items = [];
            station.drinks.map(drink => {
                var index = avail.findIndex(item => item.name == drink.name);
                total[index] += drink.quantity;
                if (items[index] == undefined) {
                    items[index] = {key: index, name: drink.name, assign: drink.quantity, price: drink.pricePerUnit};
                } else {
                    items[index].assign += drink.quantity;
                }
            });
            station.servers.map(server => {
                server.soldDrinks.map(drink => {
                    var index = avail.findIndex(item => item.name == drink.name);
                    total[index] += drink.quantity;
                    items[index].assign += drink.quantity;
                })
            })
            assign[assign.length] = {stationKey: station.key, assign: items};
        });
        return [avail, assign, total];
    }
}