const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const OwnerSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        address: String,
        postcode: String,
        email: { type: String, required: true, unique: true },
        password: String,
        dog: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dog'
        }]
    });

    /* addDog(dog) {
        this.dog.push(dog)
    } */

    OwnerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Owner', OwnerSchema);
