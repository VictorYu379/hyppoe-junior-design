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
}

function update(data) {
    globalEvent.id = data.id;
    Object.assign(globalEvent, data.data());
    Station.setStations(globalEvent.stations);
    Inventory.setInventory(globalEvent.inventory);
    Job.setJobs(globalEvent.jobs);
}

export var globalEvent = new Event("");