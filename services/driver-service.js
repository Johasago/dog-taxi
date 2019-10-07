const DriverModel = require('../model/dogSchema')

async function findAll() {
    return DriverModel.find()
}

async function add(person) {
    return DriverModel.create(person)
}

async function del(_id) {
    return DriverModel.remove({ _id })
}

async function find(_id) {
    return DriverModel.findOne({ _id })
}

async function findByName(name) {
    return await DriverModel.find({ "name" : name });
}

module.exports = {
    findAll,
    find,
    add,
    del,
    findByName
}