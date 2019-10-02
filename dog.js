class Dog {
    constructor(name, breed, dob, weight, obedience) {
        this.name = name
        this.breed = breed
        this.dob = dob
        this.weight = weight
        this.obedience = obedience
        this.drivers = []
    }

    addDriver(driver) {
        this.drivers.push(driver)
    }

    calculateAge() {
        const today = new Date();
        const age = new Date(today - this.dob.getTime());
        console.log(Math.abs(age.getUTCFullYear() - 1970));
    }

    static create(obj) {
        return new Dog(obj.name, obj.breed, obj.dob, obj.weight, obj.obedience, obj.drivers);
    }

}

module.exports = Dog

