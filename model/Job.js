import { dbManager } from 'model/DBManager';
import Drink from 'model/Drink';
import PairItem from 'model/PairItem';
import Runner from 'model/Runner';
import { globalStations } from 'model/Station';
import { globalEvent } from './Event';

export default class Job {
    id;         // String
    type;       // enum: { "Transfer", "Return" }
    status;     // enum: { "Unstarted", "In transit", "Complete", "Confirmed" }
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
        this.drinks = drinks.docs.map(drink => new Drink({
            ...drink.data(),
            id: drink.id
        }));
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

    static getRunnerHistorySummary(runnerId) {
        var total = 0
        var pending = 0
        var jobs = getGlobalJobs();
        jobs.map(job => {
            if (job.runnerId == runnerId) {
                total+=1
                if (job.status != "Complete" || job.status != "Confirmed") {
                    pending += 1
                }
            }
        })
        return [total, pending]
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
            tasks.push({key: tasks.length, runner: runner, drink: job.drinks[0], type: job.type, item: item, from: from, to: to, status: job.status});
        });
        tasks.sort((a, b) => {
            return (a.status <= b.status) ? 1 : -1;
        });
        return tasks;
    }

    // Returns the number of in-transit jobs from/to station and their total qty/value based on stationId.
    // Returns the total number of in-transit jobs and their total qty/value if stationId is omitted.
    static getNumOfJobsInTransit(stationId) {
        var jobs = getGlobalJobs();
        var res = 0;
        var qty = 0;
        var val = 0;
        if (stationId === undefined) {
            jobs.map(job => {
                if (job.status == "In transit") {
                    res += 1;
                    job.drinks.map(drink => {
                        qty += drink.quantity;
                        val += drink.quantity * drink.pricePerUnit;
                    });
                }
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                jobs.map(job => {
                    if (job.stationKey == station.key && job.status == "In transit") {
                        res += 1;
                        job.drinks.map(drink => {
                            qty += drink.quantity;
                            val += drink.quantity * drink.pricePerUnit;
                        });
                    }
                });
            }
        }
        return [res, qty, val];
    }

    // Returns the number of unstarted and in-transit jobs from/to station and their total qty/value based on stationId.
    // Returns the total number of unstarted and in-transit jobs and their total qty/value if stationId is omitted.
    static getNumOfRunnerJobsPending(stationId) {
        var jobs = getGlobalJobs();
        var res = 0;
        var qty = 0;
        var val = 0;
        if (stationId === undefined) {
            jobs.map(job => {
                if (job.status == "In transit" || job.status == "Unstarted") {
                    res += 1;
                    job.drinks.map(drink => {
                        qty += drink.quantity;
                        val += drink.quantity * drink.pricePerUnit;
                    });
                }
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                jobs.map(job => {
                    if (job.stationKey == station.key && (job.status == "In transit" || job.status == "Unstarted")) {
                        res += 1;
                        job.drinks.map(drink => {
                            qty += drink.quantity;
                            val += drink.quantity * drink.pricePerUnit;
                        });
                    }
                });
            }
        }
        return [res, qty, val];
    }

    // Returns the number of Completed yet not confirmed jobs from/to station and their total qty/value based on stationId.
    // Returns the total number of Completed yet not confirmed jobs and their total qty/value if stationId is omitted.
    static getNumOfJobsPendingConfirmation(stationId) {
        var jobs = getGlobalJobs();
        var res = 0;
        var qty = 0;
        var val = 0;
        if (stationId === undefined) {
            jobs.map(job => {
                if (job.status == "Complete") {
                    res += 1;
                    job.drinks.map(drink => {
                        qty += drink.quantity;
                        val += drink.quantity * drink.pricePerUnit;
                    });
                }
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                jobs.map(job => {
                    if (job.stationKey == station.key && job.status == "Complete") {
                        res += 1;
                        job.drinks.map(drink => {
                            qty += drink.quantity;
                            val += drink.quantity * drink.pricePerUnit;
                        });
                    }
                });
            }
        }
        return [res, qty, val];
    }

    // Returns the number of unconfirmed jobs from/to station and their total qty/value based on stationId.
    // Returns the total number of unconfirmed jobs and their total qty/value if stationId is omitted.
    static getNumOfJobsPending(stationId) {
        var jobs = getGlobalJobs();
        var res = 0;
        var qty = 0;
        var val = 0;
        if (stationId === undefined) {
            jobs.map(job => {
                if (job.status != "Confirmed") {
                    res += 1;
                    job.drinks.map(drink => {
                        qty += drink.quantity;
                        val += drink.quantity * drink.pricePerUnit;
                    });
                }
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                jobs.map(job => {
                    if (job.stationKey == station.key && job.status != "Confirmed") {
                        res += 1;
                        job.drinks.map(drink => {
                            qty += drink.quantity;
                            val += drink.quantity * drink.pricePerUnit;
                        });
                    }
                });
            }
        }
        return [res, qty, val];
    }

    // Returns the number of unstarted jobs from/to station and their total qty/value based on stationId.
    // Returns the total number of unstarted jobs and their total qty/value if stationId is omitted.
    static getNumOfRequests(stationId) {
        var jobs = getGlobalJobs();
        var res = 0;
        var qty = 0;
        var val = 0;
        if (stationId === undefined) {
            jobs.map(job => {
                if (job.status == "Unstarted") {
                    res += 1;
                    job.drinks.map(drink => {
                        qty += drink.quantity;
                        val += drink.quantity * drink.pricePerUnit;
                    });
                }
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                jobs.map(job => {
                    if (job.stationKey == station.key && job.status == "Unstarted") {
                        res += 1;
                        job.drinks.map(drink => {
                            qty += drink.quantity;
                            val += drink.quantity * drink.pricePerUnit;
                        });
                    }
                });
            }
        }
        return [res, qty, val];
    }


    static getPendingJobsDetailedData() {
        var returnListTotal = [];
        var returnList = [];
        var jobs = getGlobalJobs();
        var count = 0;
        jobs.map(job => {
            if (job.status !== 'Complete') {
                count = count + 1;
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
        return [returnListTotal, count];
    }

    static getReturnJobsDetailedData() {
        var returnListTotal = [];
        var returnList = [];
        var jobs = getGlobalJobs();
        jobs.map(job => {
            if (job.type == 'Return' && (job.status == 'Complete' || job.status == 'Confirmed')) {
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

    // Returns the number of returned items and their total value of station based on stationId.
    // Returns the total number of returned items and their total value if stationId is omitted.
    static getNumOfReturnItems(stationId) {
        var [returnListTotal, returnList] = this.getReturnJobsDetailedData();
        var res = 0;
        var val = 0;
        if (stationId === undefined) {
            returnListTotal.map(item => { 
                res += item.count;
                val += item.count * item.price;
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                var stationKey = station.key;
                returnList.map(station => {
                    if (station.name == stationKey) {
                        station.items.map(item => {
                            res += item.count;
                            val += item.count * item.price;
                        });
                    }
                });
            }
        }
        return [res, val];
    }

    static createNewJob(drink, stationKey, pairItems, typeName) {
        const job = {
            type: typeName,
            stationKey: stationKey,
            status: "Unstarted",
            runnerId: "",
            details: ""
        };
        drinks = [];
        drinks.push(Drink.parseDrink(drink));
        items = pairItems.map(item => {
            item = PairItem.parsePairItem(item);
            item.quantity = drink.quantity;
            return item;
        });
        dbManager.createNewJob(job, drinks, items)
            .then((id) => globalEvent.addJobToEvent(id))
            .catch(e => console.log(e)); 
    }

    static updateJob(drink, stationKey, status, runnerId) {
        drink = Drink.parseDrink(drink);
        dbManager.updateJob(drink, stationKey, status, runnerId);
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