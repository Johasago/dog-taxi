class Driver {
    constructor(name) {
        this.name = name
        this.vehicle = null
        this.passengers = []
    }

    drive(vehicle) {
        this.vehicle = vehicle
        vehicle.driver = this
    }

    pickUpPassenger(dog) {
        this.passengers.push(dog)
        dog.drivers.push(this)
    }

    static create(obj) {
        return new Driver(obj.name, obj.vehicle, obj.passengers);
    }
}

module.exports = Driver