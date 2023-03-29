const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const remarksSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    createdBy: {
        type: String,
        // default: userId
    },
}, {
    timestamps: true,
});

let remarksModel = mongoose.model('remarks', remarksSchema);

module.exports = remarksModel;