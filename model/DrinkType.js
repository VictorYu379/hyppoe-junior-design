export default class DrinkType {
    id;             // String
    icon;         // String
    name;           // String
    unitPerPack;    // int
    ouncePerUnit;   // float
    pricePerUnit;   // float
    alert;          // boolean

    constructor(data, id) {
        if (data === undefined) {
            this.id = "";
            this.icon = "";
            this.name = "",
            this.unitPerPack = 0,
            this.ouncePerUnit = 0.0,
            this.pricePerUnit = 0.0;
            this.alert = false;
        } else {
            Object.assign(this, data);
            this.id = id;
        }
    }
}