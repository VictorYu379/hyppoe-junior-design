class Station {
    id;
    name;
    tablets;  // Tablets
    runners;  // Runners
    details;
    inventory;  // StationInventory

    constructor(id, name, stabletNum, runnersNum, details) {
        this.id = id;
        this.name = name;
        this.stabletNum = stabletNum;
        this.runnersNum = runnersNum;
        this.details = details;
    }
}