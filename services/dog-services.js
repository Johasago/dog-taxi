const DogModel = require('../model/dog')



async function findAll() {

    return DogModel.find()

}



async function add(dog) {

    return DogModel.create(dog)

}



async function del(_id) {

    return DogModel.remove({ _id })

}



async function find(_id) {

    return PersonModel.findOne({ _id })

}



module.exports = {
    findAll,
    find,
    add,
    del,
    calculateAge
}

function addDriver(driver) {
    this.drivers.push(driver)
}

function calculateAge() {
    const today = new Date();
    const age = new Date(today - this.dob.getTime());
    console.log(Math.abs(age.getUTCFullYear() - 1970));
}
