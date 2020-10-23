export default class DrinkType {
    id;             // String
    icon;         // String
    name;           // String
    unitPerUnit;    // int
    ouncePerUnit;   // float
    pricePerUnit;   // float
    costPerUnit;     // float
    alert;          // boolean

    constructor(data, id) {
        //console.log(data);
        if (data === undefined) {
            this.id = "";
            this.icon = "";
            this.name = "",
            this.unitPerUnit = 0,
            this.ouncePerUnit = 0.0,
            this.pricePerUnit = 0.0;
            this.alert = false;
            this.costPerUnit = 0.0;
        } else {
            Object.assign(this, data);
            this.id = id;
        }
        //console.log(this.costPerUnit, this.ouncePerUnit);
    }
}