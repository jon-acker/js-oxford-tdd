const jasmine = require('jasmine');

const Basket = require('../src/Basket');
const Catalog = require('../src/Catalog');
const remoteListing = require('../src/remoteListing');

describe('Adding products', function () {

  let basket;
  let catalog;

  beforeEach(function () {
    catalog = new Catalog();
    basket = new Basket(catalog);
    spyOn(catalog, 'hasAll');
  });

  it('is total products added to the basket', function () {
    basket.add({product: 'cd', price: 10 });
    basket.add({product: 'dvd', price: 15 });

    expect(basket.total()).toBe(25);
  });

  it('is ignores products that have no price', function () {
    basket.add({product: 'cd', price: 10 });
    basket.add({product: 'dvd', price: 15 });
    basket.add({product: 'tv' });

    expect(basket.total()).toBe(25);
    
  });

  it('returns true if all products in catalog', function() {

    basket.available();
    expect(catalog.hasAll).toHaveBeenCalled();
  }); 

});
