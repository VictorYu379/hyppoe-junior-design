import { dbManager } from 'model/DBManager';
import PairItemType from 'model/PairItemType';

export default class PairItem {
    pairItemType;   // PairItemType
    quantity;       // int
    ounces;         // float
    details;        // String

    constructor(pairItem) {
        if (pairItem === undefined) {
            this.pairItemType = new PairItemType();
            this.quantity = 0;
            this.ounces = 0;
            this.details = "";
        } else {
            Object.assign(this, pairItem);
        }
    }

    async init() {
        // Here we are trying to change this.pairItemType from a string to a PairItemType instance
        var pairItemType = await dbManager.getPairItemType(this.pairItemType);
        this.pairItemType = new PairItemType(pairItemType.data(), this.pairItemType);
    }

    get icon() {
        return this.pairItemType.icon;
    }

    get name() {
        return this.pairItemType.name;
    }

    static parsePairItem(item) {
        const obj = {
            details: item.details === undefined ? "" : item.details,
            pairItemType: item.pairItemType.name,
            quantity: item.quantity === undefined ? 0 : item.quantity,
            ounces: item.ounces === undefined ? 0 : item.ounces,
        };
        return obj;
    }
}