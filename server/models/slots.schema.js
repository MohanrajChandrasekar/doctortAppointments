const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slotSchema = new Schema({
    slotSession: {
        type: String,
        required: true
    },
    slotDate: {
        type: Date,
        required: true
    },
    slots: [{
        startTime: {
            hh: Number,
            mm: Number,
            datetime: Date
        },
        endTime: {
            hh: Number,
            mm: Number,
            datetime: Date
        },
        appointment: {
            name: String,
            contact: Number,
            waited: String,
            checkedIn: {
                hh: Number,
                mm: Number
            }
        },
        isBooked: {
            type: Boolean,
            default: false
        }
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        default: 'Admin'
    }
});

const model = mongoose.model('slot', slotSchema, 'slot');
module.exports = model;