import { dbManager } from 'model/DBManager';

const RUNNER_KEY = "@runner"

export default class Runner {
    id;         // String
    name;       // String
    stationId;  // String
    key;        // String

    constructor(id) {
        this.id = id;
    }

    async init() {
        var data = await dbManager.getRunner(this.id);
        Object.assign(this, data.data());
        return this;
    }

    static async setInstance(id) {
        dbManager.setStorage(RUNNER_KEY, id);
        dbManager.getRunnerHandle(id).onSnapshot(update);
    }

    static async getInstance() {
        var id = await dbManager.getStorage(RUNNER_KEY);
        var runner = new Runner(id);
        return await runner.init();
    }
}

function update(data) {
    globalRunner.id = data.id;
    Object.assign(globalRunner, data.data());
}

export var globalRunner = new Runner("");