const remoteCatalog = require('./remoteListing');

module.exports = class Catalog
{
    hasAll() {
        
    }

    remoteList() {
        return remoteCatalog.fetch();
    }
};
