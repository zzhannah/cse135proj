const mongoose = require('mongoose')


const activitySchema = new mongoose.Schema({

    id: {
        type: Number
    },
    mousePosition: {
        type: Array
    },
    mouseClicks: {
        type: Array
    },
    keydown: {
        type: Array
    },
    keyup: {
        type: Array 
    }
})

module.exports = mongoose.model('Activity', activitySchema)