import * as firebase from 'firebase';
import 'firebase/firestore';
import { dbManager } from 'model/DBManager';
import Station from 'model/Station';
import Inventory from 'model/Inventory';
import Job from 'model/Job';

const EVENT_KEY = "@event"

export default class Event {
    id;             // String
    name;           // String
    inventory;      // String (id)
    stations;       // List<String> (ids)
    jobs;           // List<String> (ids)
    managers;       // List<String> (ids)
    alerts;         // Map<String, String>

    constructor(id) {
        this.id = id;
    }

    async init() {
        var data = await dbManager.getEvent(this.id);
        Object.assign(this, data.data());
        return this;
    }

    static async setInstance(id) {
        dbManager.setStorage(EVENT_KEY, id); // Not really used now that listeners are setup, to be deprecated
        dbManager.getEventHandle(id).onSnapshot(update);
    }

    // To be deprecated, use globalEvent instead
    static async getInstance() {
        var eventID = await dbManager.getStorage(EVENT_KEY);
        var event = new Event(eventID);
        return await event.init();
    }

    static getAlerts() {
        var alerts = [];
        if (globalEvent.alerts != undefined){
            Object.entries(globalEvent.alerts).map(([key, value]) => {
                alerts[alerts.length] = {key: alerts.length, name: key, type: 'Push Notification', rate: value};
            });
        }
        alerts.sort((a, b) => {
            if (a.rate == 'OFF' && b.rate == 'OFF') {
                return (a.key <= b.key) ? -1 : 1;
            }
            if (a.rate == 'OFF') {
                return 1;
            }
            if (b.rate == 'OFF') {
                return -1;
            }
            return (a.key <= b.key) ? -1 : 1;
        });
        return alerts;
    }

    static getNumOfAlerts() {
        var alerts = this.getAlerts();
        var res = 0;
        alerts.map(alert => {
            if (alert.rate != 'OFF') {
                res += 1;
            }
        });
        return res;
    }

    addJobToEvent(jobId) {
        return dbManager.getEventHandle(this.id).update({
            "jobs": this.jobs.concat([jobId])
        });
    }

    addStation(station) {
        return dbManager.getEventHandle(this.id).update({
            stations: this.stations.concat(station.id)
        });
    }
}

function update(data) {
    globalEvent.id = data.id;
    Object.assign(globalEvent, data.data());
    Station.setStations(globalEvent.stations);
    Inventory.setInventory(globalEvent.inventory);
    Job.setJobs(globalEvent.jobs);
}

export var globalEvent = new Event("");