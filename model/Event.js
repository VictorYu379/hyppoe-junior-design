import { dbManager } from 'model/DBManager';

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
        dbManager.setStorage(EVENT_KEY, id);
    }

    static async getInstance() {
        var eventID = await dbManager.getStorage(EVENT_KEY);
        var event = new Event(eventID);
        return await event.init();
    }
}