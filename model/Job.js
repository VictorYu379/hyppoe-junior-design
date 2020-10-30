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
    drink;     // Drink
    pairItems;  // List<PairItems>

    constructor(id) {
        this.id = id;
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
                var [from, to] = ["", ""];
                if (job.type == "Transfer") {
                    from = "Inventory";
                    to = "Station " + job.stationKey;
                } else {
                    from = "Station " + job.stationKey;
                    to = "Inventory";
                }
                runnerTasks.push({key: runnerTasks.length, jobId: job.id, item: job.drink.name, from: from, to: to, status: job.status});
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
            tasks.push({key: tasks.length, jobId: job.id, runner: runner, drink: job.drink, type: job.type, item: job.drink.name, from: from, to: to, status: job.status});
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
                    qty += job.drink.quantity;
                    val += job.drink.quantity * job.drink.pricePerUnit;
                }
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                jobs.map(job => {
                    if (job.stationKey == station.key && job.status == "In transit") {
                        res += 1;
                        qty += job.drink.quantity;
                        val += job.drink.quantity * job.drink.pricePerUnit;
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
                    qty += job.drink.quantity;
                    val += job.drink.quantity * job.drink.pricePerUnit;
                }
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                jobs.map(job => {
                    if (job.stationKey == station.key && (job.status == "In transit" || job.status == "Unstarted")) {
                        res += 1;
                        qty += job.drink.quantity;
                        val += job.drink.quantity * job.drink.pricePerUnit;
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
                    qty += job.drink.quantity;
                    val += job.drink.quantity * job.drink.pricePerUnit;
                }
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                jobs.map(job => {
                    if (job.stationKey == station.key && job.status == "Complete") {
                        res += 1;
                        qty += job.drink.quantity;
                        val += job.drink.quantity * job.drink.pricePerUnit;
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
                    qty += job.drink.quantity;
                    val += job.drink.quantity * job.drink.pricePerUnit;
                }
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                //console.log(station.key)
                jobs.map(job => {
                    if (job.stationKey == station.key && job.status != "Confirmed") {
                        res += 1;
                        qty += job.drink.quantity;
                        val += job.drink.quantity * job.drink.pricePerUnit;
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
                    qty += job.drink.quantity;
                    val += job.drink.quantity * job.drink.pricePerUnit;
                }
            });
        } else {
            var station = globalStations[stationId];
            if (station != undefined) {
                jobs.map(job => {
                    if (job.stationKey == station.key && job.status == "Unstarted") {
                        res += 1;
                        qty += job.drink.quantity;
                        val += job.drink.quantity * job.drink.pricePerUnit;
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
            if (job.status == 'Unstarted' || job.status == 'In transit') {
                count = count + 1;
                var drink = job.drink;
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
                var drink = job.drink;
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
            drink: Drink.parseDrink(drink),
            runnerId: "",
            details: ""
        };
        items = pairItems.map(item => {
            item = PairItem.parsePairItem(item);
            item.quantity = drink.quantity;
            return item;
        });
        dbManager.createNewJob(job, items)
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
    job.drink = new Drink(job.drink);
    await job.drink.init();
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