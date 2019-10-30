const OwnerModel = require('../model/owner')

async function findAll() {
    return OwnerModel.find()
}

async function add(person) {
    return OwnerModel.create(person)
}

async function del(_id) {
    return OwnerModel.remove({ _id })
}

async function find(_id) {
    return OwnerModel.findOne({ _id })
}

async function findByEmail(email) {
    return OwnerModel.findOne({ email })
}

module.exports = {
    findAll,
    find,
    findByEmail,
    add,
    del
}