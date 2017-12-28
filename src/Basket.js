const Catalog = require ('./Catalog');

module.exports = class Basket 
{
    constructor(catalog) {
        this.catalog = catalog;
        this.items = [];
    }

    add(product) {
        this.items.push(product);
    } 

    total() {
        return this.items
            .filter(item => item.price !== undefined)
            .reduce((total, item) => total + item.price, 0)
    }

    available() {
        return this.catalog.hasAll([{product: 'cd'}]);
    }
};
