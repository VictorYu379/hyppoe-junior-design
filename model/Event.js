import { dbManager } from 'model/DBManager';

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
}