module.exports = function Customer(system, directory) {
    let acmeSystem = system;
    let telephoneDirectory = directory;

    return new class Customer {

        /**
         * @param {string} name 
         */
        named(name) {
            let customer = new Customer();
            customer.name = name;

            return customer;
        }

        /**
         * Register customer on Acme system
         */
        register() {
            if (!telephoneDirectory.lists(this)) {
                throw new Error('Customer ' + this.name + ' is not in directory');
            }
            
            acmeSystem.register(this);
        }
    };
};
