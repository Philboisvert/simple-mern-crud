const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    position: {
        type: String,
        required: true, 
    },
    shoots: {
        type: String,
        required: false,
        default: "Unknown",
    },
    number: {
        type: Number,
        required: true,
    }

})

module.exports = mongoose.model('Player', playerSchema)