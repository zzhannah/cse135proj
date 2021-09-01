const mongoose = require('mongoose')


const activitySchema = new mongoose.Schema({

    id: String,
    mousePosition: mongoose.Schema.Types.Mixed,
    mouseClicks: mongoose.Schema.Types.Mixed,
    keystrokes: {
        keydown: mongoose.Schema.Types.Mixed,
        keyup: mongoose.Schema.Types.Mixed
    }
})

module.exports = mongoose.model('Activity', activitySchema)