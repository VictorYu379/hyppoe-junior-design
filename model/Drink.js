class Drink {
    constructor(instance) {
        Object.assign(this, instance);
    }

    set currentQuantity(num) {
        this.currentQuantity = num;
        this.
    }

    set unit(num) {
        this.quantity = 0;
        this.unit = num;
        this.updatedQUantity = this.unit * this.pack;
    }

    set pack(num) {
        this.quantity = 0;
        this.pack = num;
        this.updatedQUantity = this.unit * this.pack;
    }

    set quantity(num) {
        this.unit = this.pack = 0;
        this.quantity = num;
    }
}