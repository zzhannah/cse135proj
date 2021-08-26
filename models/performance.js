const mongoose = require('mongoose')


const performanceSchema = new mongoose.Schema({

    id: {
        type: Number
    },
    duration: {
        type: Number
    },
    transferSize: {
        type: Number
    },
    decodedBodySize: {
        type: Number
    },
    domContentLoadedEventStart: {
        type: Number 
    },
    domContentLoadedEventEnd: {
        type: Number
    }

})

module.exports = mongoose.model('Performance',performanceSchema)