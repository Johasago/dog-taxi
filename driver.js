const Driver = class {
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
}

module.exports = Driver