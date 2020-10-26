import { dbManager } from 'model/DBManager';
import Drink from 'model/Drink';
import PairItem from 'model/PairItem';

export default class Job {
    id;         // String
    type;       // enum: { "Transfer", "Return" }
    status;     // enum: { "Unstarted", "In transit", "Complete" }
    runnerId;   // String
    details;    // String
    stationKey;    // String
    drinks;     // List<Drinks>
    pairItems;  // List<PairItems>

    constructor(id) {
        this.id = id;
    }

    async init() {
        var job = await dbManager.getJob(this.id);
        Object.assign(this, job.data());
        var [drinks, pairItems] = await Promise.all([
            dbManager.getDrinksInJob(this.id),
            dbManager.getPairItemsInJob(this.id)
        ]);
        this.drinks = drinks.docs.map(drink => new Drink(drink.data()));
        this.pairItems = pairItems.docs.map(pairItem => new PairItem(pairItem.data()));
        await Promise.all(this.drinks.map(drink => drink.init()));
        await Promise.all(this.pairItems.map(pairItem => pairItem.init()));
        return this;
    }

    static getJobs(ids) {
        var promises = ids.map(id => {
            var job = new Job(id);
            return job.init();
        });
        return Promise.all(promises);
    }

    static getReturnJobsDetailedData(jobs) {
        console.log("reached");
        var returnListTotal = [];
        var returnList = [];
        jobs.map(job => {
            if (job.type == 'Return' && job.status == 'Complete') {
                console.log(job);
                job.drinks.map(drink => {
                    var index = returnListTotal.findIndex(item => item.name == drink.name);
                    if (index == -1) {
                        returnListTotal[returnListTotal.length] = {key: returnListTotal.length, name: drink.name, count: drink.quantity, price: drink.pricePerUnit};
                    } else {
                        returnListTotal[index].count += drink.quantity;
                    }
                    index = returnList.findIndex(item => item.name == job.stationKey);
                    if (index == -1) {
                        var drinks = [{key: 0, name: drink.name, count: drink.quantity, price: drink.pricePerUnit}];
                        returnList[returnList.length] = {key: returnList.length, name: job.stationKey, items: drinks};
                    } else {
                        var drinks = [...returnList[index].items];
                        var drinkIndex = drinks.findIndex(item => item.name == drink.name);
                        if (drinkIndex == -1) {
                            drinks[drinks.length] = {key: drinks.length, name: drink.name, count: drink.quantity, price: drink.pricePerUnit};
                        } else {
                            drinks[drinkIndex].count += drink.quantity;
                        }
                        returnList[index] = {...returnList[index], items: drinks};
                    }
                });
            }
        })
        return [returnListTotal, returnList];
    }
}