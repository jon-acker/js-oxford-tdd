/* global console */

const Basket = require('./src/Basket');

let basket = new Basket();

basket.add({product: 'dvd', price: 22});
basket.add({product: 'cd', price: 2.11});

console.log('total: ' + basket.total());
