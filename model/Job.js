import { dbManager } from 'model/DBManager';
import Drink from 'model/Drink';
import PairItem from 'model/PairItem';
import Runner from 'model/Runner';

export default class Job {
    id;         // String
    type;       // enum: { "Transfer", "Return" }
    status;     // enum: { "Unstarted", "In transit", "Complete" }
    runner;     // runner
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
        this.runner = new Runner(runnerId);
        await this.runner.init();
        return this;
    }

    // Can be deprecated as now we have direct access to globalJobs of an Event
    static getJobs(ids) {
        var promises = ids.map(id => {
            var job = new Job(id);
            return job.init();
        });
        return Promise.all(promises);
    }

    static setJobs(ids) {
        ids.map(id => {
            dbManager.getJobHandle(id).onSnapshot(update);
        })
    }

    static getRunnerJobs(runnerId) {
        var runnerTasks = [];
        var jobs = getGlobalJobs();
        jobs.map(job => {
            if (job.runnerId == runnerId) {
                var item = "";
                job.drinks.map(drink => {
                    item = item.concat(", ", drink.name);
                })
                item = item.substr(2);
                if (item.length > 28) {
                    item = item.substr(0, 23);
                    item = item + "...";
                }
                var [from, to] = ["", ""];
                if (job.type == "Transfer") {
                    from = "Inventory";
                    to = "Station " + job.stationKey;
                } else {
                    from = "Station " + job.stationKey;
                    to = "Inventory";
                }
                runnerTasks.push({key: runnerTasks.length, item: item, from: from, to: to, status: job.status});
            }
        });
        runnerTasks.sort((a, b) => {
            return (a.status <= b.status) ? 1 : -1;
        });
        return runnerTasks;
    }

    static getJobs() {
        var tasks = [];
        var jobs = getGlobalJobs();
        jobs.map(job => {
            var item = "";
            job.drinks.map(drink => {
                item = item.concat(", ", drink.name);
            })
            item = item.substr(2);
            if (item.length > 28) {
                item = item.substr(0, 23);
                item = item + "...";
            }
            var [from, to] = ["", ""];
            if (job.type == "Transfer") {
                from = "Inventory";
                to = "Station " + job.stationKey;
            } else {
                from = "Station " + job.stationKey;
                to = "Inventory";
            }
            var runner = "Unassigned";
            if (job.runnerId != "") {
                runner = "Runner " + job.runner.key;
            }
            tasks.push({key: tasks.length, runner: runner, item: item, from: from, to: to, status: job.status});
        });
        tasks.sort((a, b) => {
            return (a.status <= b.status) ? 1 : -1;
        });
        return tasks;
    }

    static getReturnJobsDetailedData() {
        var returnListTotal = [];
        var returnList = [];
        var jobs = getGlobalJobs();
        jobs.map(job => {
            if (job.type == 'Return' && job.status == 'Complete') {
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

async function update(data) {
    var job = new Job(data.id);
    Object.assign(job, data.data());
    dbManager.getDrinksInJobHandle(job.id).onSnapshot(async (drinks) => {
        job.drinks = drinks.docs.map(drink => new Drink(drink.data()));
        await Promise.all(job.drinks.map(drink => drink.init()));
    });
    dbManager.getPairItemsInJobHandle(job.id).onSnapshot(async (pairItems) => {
        job.pairItems = pairItems.docs.map(pairItem => new PairItem(pairItem.data()));
        await Promise.all(job.pairItems.map(pairItem => pairItem.init()));
    });
    if (job.runnerId != "") {
        job.runner = new Runner(job.runnerId);
        await job.runner.init();
    }
    globalJobs[job.id] = job;
}

export function getGlobalJobs() {
    var res = [];
    for (var id in globalJobs) {
        res.push(globalJobs[id]);
    }
    return res;
}

export var globalJobs = {};