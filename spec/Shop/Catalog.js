const Catalog = require('../../src/Shop/Catalog');
const remoteListing = require('../../src/Shop/remoteListing');

describe('Catalog', function () {
    let catalog;

    beforeEach(function () {
        catalog = new Catalog();
        spyOn(remoteListing, 'fetch').and.returnValue([]);
    });

    it ('calls remote catalog fetch', function() {
        expect(catalog.remoteList()).toEqual([]);
        expect(remoteListing.fetch).toHaveBeenCalled();
    });
});
