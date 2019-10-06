const mongoose = require('mongoose')

const DogSchema = mongoose.Schema ({
        name: String,
        breed: String,
        dob: Date,
        weight: String,
        obedience: String,
        drivers: [{

            type: mongoose.Schema.Types.ObjectId,
    
            ref: 'Driver'
    
        }],
        image: String, 
    });

module.exports = mongoose.model('Dog', DogSchema);

