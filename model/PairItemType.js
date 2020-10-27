export default class PairItemType {
    id;     // String
    name;   // String
    iconId; // String
    alert;  // boolean

    constructor(data, id) {
        if (data === undefined) {
            this.id = "";
            this.icon = "";
            this.name = "";
            this.alert = false;
        } else {
            Object.assign(this, data);
            this.id = id;
        }
    }
}