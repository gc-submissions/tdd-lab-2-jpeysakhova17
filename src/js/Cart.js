"use strict";

const Product = require("./Product");


class Cart {
    constructor() {
        this.items = [];
    }
    add(product) {
        this.items.push(product);
    }
    getItemCount() {
        return this.items.length;
    }
    getTotalBeforeTax() { 
        var total = 0;
        for (let i=0; i < this.items.length; i++) {
            total += this.items[i].price;
        }
        return total;
    }

    //can also do a for each:
    //var total = 0;
    //      total +=item.price;
    //      this.items.forEach(function(item) {
    // })
    //      return total;
    // }
    //can also do like this (???):
    // //for (let price of cart) {
    //     return(price);
    // }

    getTotalWithTax() {
        var prices = 0;
        for (let i=0; i<this.items.length; i++) {
            prices = prices + this.items[i].getPriceWithTax(); 
        }
        return prices;
    }

    getTax() {
        return this.getTotalWithTax() - this.getTotalBeforeTax();
    }

}



module.exports = Cart;