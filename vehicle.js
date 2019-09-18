const Driver = require('./driver')

const Vehicle = class {
    constructor(type, size, make, model) {
        this.type = type
        this.size = size
        this.make = make
        this.model = model 
        this.driver = null
    }
}

module.exports = Vehicle