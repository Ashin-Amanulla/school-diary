const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examTimetableSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    subjects: {
        type: [{
            subject: String,
            venue: String,
            date: Date
        }],
        required: true,
        // format: [{subject, venue, date, time, }]
    },

    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class',
        required: true
    },

    createdBy: {
        type: String,
        // default: userId
    },
}, {
    timestamps: true,
});

let examTimetableModel = mongoose.model('examTimetable', examTimetableSchema);

module.exports = examTimetableModel;