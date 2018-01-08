const $ = require('jquery');
const Basket = require('./src/Shop/Basket');
const Page = require('./src/Shop/Page');

let basket = new Basket();

basket.add({product: 'dvd', price: 22});
basket.add({product: 'cd', price: 2.11});

$(() => {
    let page = new Page($('#main'));

    page.display(basket.total());
});


