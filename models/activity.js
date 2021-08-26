const mongoose = require('mongoose')


const activitySchema = new mongoose.Schema({

    id: String,
    mousePosition: Schema.Types.Mixed,
    mouseClicks: Schema.Types.Mixed,
    keystrokes: {
        keydown: Schema.Types.Mixed,
        keyup: Schema.Types.Mixed
    }
})

module.exports = mongoose.model('Activity', activitySchema)