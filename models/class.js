const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    timeTable: {
        required: false,
        type: [
            {
                day: {type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']},
                timeStart: String,
                timeEnd: String,
                subject: String,
                // teacherId: String 
            }
        ]
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: false
    },
    createdBy: {
        type: String,
        // default: userId
    },
}, {
    timestamps: true,
});

let classModel = mongoose.model('class', classSchema);

module.exports = classModel;