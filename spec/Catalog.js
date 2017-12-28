const Catalog = require('../src/Catalog');
const remoteListing = require('../src/remoteListing');

describe('Catalog', function () {
    let catalog;

    beforeEach(function () {
        catalog = new Catalog();
        spyOn(remoteListing, 'fetch').and.willReturn([]);
    });

    it ('calls remote catalog fetch', function() {
        expect(catalog.remoteList()).toEqual([]);
        expect(remoteListing.fetch).not.toHaveBeenCalled();
    });
});
