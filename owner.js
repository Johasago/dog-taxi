const Dog = require('./dog')

const Owner = class {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.dog = []
    }

    addDog(dog) {
        this.dog.push(dog)
    }
}

module.exports = Owner
