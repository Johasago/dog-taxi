const mongoose = require('mongoose');

const DriverSchema = mongoose.Schema({
    name: String,
    vehicle: String,
    passengers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dog'
    }]
});

module.exports = mongoose.model('Driver', DriverSchema);