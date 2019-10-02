class Vehicle {
    constructor(type, size, make, model) {
        this.type = type
        this.size = size
        this.make = make
        this.model = model 
        this.driver = null
    }

    static create(obj) {
        return new Vehicle(obj.type, obj.size, obj.make, obj.model, obj.driver);
    }
}

module.exports = Vehicle