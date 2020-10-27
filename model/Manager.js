import { dbManager } from 'model/DBManager';

const MANAGER_KEY = "@manager"

export default class Manager {
    id;         // String
    name;       // String
    eventId;    // String

    constructor(id) {
        this.id = id;
    }

    async init() {
        var data = await dbManager.getManager(this.id);
        Object.assign(this, data.data());
        return this;
    }

    static async setInstance(id) {
        dbManager.setStorage(MANAGER_KEY, id);
    }

    static async getInstance() {
        var id = await dbManager.getStorage(MANAGER_KEY);
        var manager = new Manager(id);
        return await manager.init();
    }
}