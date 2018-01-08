const directory = [
];

module.exports = new class TelephoneDirectory {
    
    list(name) {
        directory.push(name);
    }

    lists(customer) {
        return directory.includes(customer.name);
    }
}();