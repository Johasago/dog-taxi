const DogModel = require('../model/dog')

async function findAll() {
    return DogModel.find()
}

async function add(person) {
    return DogModel.create(person)
}

async function del(_id) {
    return DogModel.remove({ _id })
}

async function find(_id) {
    return DogModel.findOne({ _id })
}

async function findByName(name) {
    return await DogModel.find({ "name" : name });
}

async function addDriver(dogId, driverId) {
    const dog = await DogModel.findOne({ _id: dogId })
    const driver = await Driver.findOne({ _id: driverId })

    dog.drivers.push(driver)

    await dog.save()

    return dog
}

module.exports = {
    findAll,
    find,
    add,
    del,
    findByName,
    addDriver
}