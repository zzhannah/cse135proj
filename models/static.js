const { intersection, toInteger } = require('lodash')
const mongoose = require('mongoose')


const staticSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },
    userAgent: {
        type: String
    },
    language: {
        type: String
    },
    acceptsCookies: {
        type: String
    },
    innerWidth: {
        type: Number 
    },
    innerHeight: {
        type: Number
    }

})

module.exports = mongoose.model('Static',staticSchema)