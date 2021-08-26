const mongoose = require('mongoose')


const activitySchema = new mongoose.Schema({

    id: {
        type: Number
    },
    mousePosition: {
        type: String
    },
    mouseClicks: {
        type: String
    },
    keydown: {
        type: String
    },
    keyup: {
        type: String 
    }
})

module.exports = mongoose.model('Activity', activitySchema)