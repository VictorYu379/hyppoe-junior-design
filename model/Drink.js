import { dbManager } from 'model/DBManager';
import DrinkType from 'model/DrinkType';


export default class Drink {
    drinkType;  // DrinkType
    quantity;   // int
    pack;       // int
    details;    // String
    iconURL;    // String

    constructor(drink) {
        if (drink === undefined) {
            this.drinkType = new DrinkType();
            this.quantity = 0;
            this.pack = 0;
            this.details = "";
            this.iconURL = "";
        } else {
            Object.assign(this, drink);
        }
    }

    async init() {
        // Here we are trying to change this.drinkType from a string to a DrinkType instance
        var drinkType = await dbManager.getDrinkType(this.drinkType);
        this.drinkType = new DrinkType(drinkType.data(), this.drinkType);
    }

    get icon() {
        return this.drinkType.icon;
    }

    get name() {
        return this.drinkType.name;
    }

    get unit() {
        return this.drinkType.unitPerPack;
    }

    get ouncePerUnit() {
        return this.drinkType.ouncePerUnit;
    }

    get pricePerUnit() {
        return this.drinkType.pricePerUnit;
    }
}