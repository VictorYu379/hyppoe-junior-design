import { dbManager } from 'model/DBManager';
import DrinkType from 'model/DrinkType';


export default class Drink {
    drinkType;  // DrinkType
    quantity;   // int
    pack;       // int
    details;    // String
    iconURL;    // String

    constructor(drink) {
        Object.assign(this, drink);
    }

    async init() {
        // Here we are trying to change this.drinkType from a string to a DrinkType instance
        var drinkType = await dbManager.getDrinkType(this.drinkType);
        this.drinkType = new DrinkType(drinkType.data(), this.drinkType);
    }
}