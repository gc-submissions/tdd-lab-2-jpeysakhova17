"use strict";


class Product {
    constructor (name, price, taxable) {
        this.name = name;
        this.price = price;
        this.taxable = taxable;
    }
    getPriceWithTax() {
        if (this.taxable === true) {
            return this.price * 1.10;
        } else {
            return this.price;
        }
    }
}

const Apple = new Product("apple", 0.50, true);
const Orange = new Product("orange", 0.75, true);

//another if else statement for the getPriceWithTax method:
// if (this.taxable) {      --------------> dont need to add the true because if its taxable, its true
//     return this.price *1.10;     
// } else {
//     return this.price;
// }

//using a ternerary operator statement for the getPriceWithTax method:
// return this.taxable ? this.price * 1.10 : this.price;

module.exports =Product;