export default class DrinkType {
    id;             // String
    icon;         // String
    name;           // String
    unitPerPack;    // int
    ouncePerUnit;   // float
    pricePerUnit;   // float
    alert;          // boolean

    constructor(data, id) {
        Object.assign(this, data);
        this.id = id;
    }
}