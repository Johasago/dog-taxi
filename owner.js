const mongoose = require('mongoose');

const OwnerSchema = mongoose.Schema({
        name: String,
        address: String,
        dog: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dog'
        }]
    });

    /* addDog(dog) {
        this.dog.push(dog)
    } */

module.exports = mongoose.model('Owner', OwnerSchema);
