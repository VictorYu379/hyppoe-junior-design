import { dbManager } from 'model/DBManager';

const RUNNER_KEY = "@runner"

export default class Runner {
    id;         // String
    name;       // String
    stationId;  // String
    key;        // String

    static async setInstance(id) {
        dbManager.setStorage(RUNNER_KEY, id);
        dbManager.getRunnerHandle(id).onSnapshot(update);
    }

    static async getInstance() {
        var id = await dbManager.getStorage(RUNNER_KEY);
        var runner = new Runner(id);
        return await runner.init();
    }

    constructor(id) {
        this.id = id;
    }

    async init() {
        var data = await dbManager.getRunner(this.id);
        Object.assign(this, data.data());
        return this;
    }
}

function update(data) {
    globalRunner.id = data.id;
    Object.assign(globalRunner, data.data());
}

export var globalRunner = new Runner("");