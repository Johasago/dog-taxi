class Owner {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.dog = []
    }

    addDog(dog) {
        this.dog.push(dog)
    }

    static create(obj) {
        return new Owner(obj.name, obj.address, obj.dog)
    }
}

module.exports = Owner
