const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({//create user Schema
    name: {
        type: String,
        required: true,
        trim: true
    },
    reason: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    day: {
        type: String,
        required: true,
        trim: true
    },
    user: [//reference appointment schema
        {
            type: Schema.Types.ObjectId,
            ref:'user'
        }
    ]
    
})

module.exports = mongoose.model('appointment', appointmentSchema)