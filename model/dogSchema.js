const mongoose = require('mongoose');

const DogSchema = mongoose.Schema({
    name: String,
    breed: String,
    dob: Date,
    weight: String,
    obedience: String,
    drivers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    }]
});

DogSchema.methods.calculateAge = function (dob) {
    const today = new Date();
    const age = new Date(today - dob.getTime());
    return Math.abs(age.getUTCFullYear() - 1970);
}

module.exports = mongoose.model('Dog', DogSchema);