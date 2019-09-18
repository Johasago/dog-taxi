const Driver = require('./driver')

const Dog = class {
    constructor(name, breed, age, weight, obedience) {
        this.name = name
        this.breed = breed
        this.age = age
        this.weight = weight
        this.obedience = obedience
        this.drivers = []
    }

    addDriver(driver) {
        this.drivers.push(driver)
    }

}

module.exports = Dog

