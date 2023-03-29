const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const circularSchema = new Schema({
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

    type: {
        type: String,
        required: true,
        enum: ['circular', 'events', 'assignment']
    },

    class: {
        type: String,
        required: true,
        // [general,class]
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    createdBy: {
        type: String,
        // default: userId
    },
}, {
    timestamps: true,
});

let circularModel = mongoose.model('circular', circularSchema);

module.exports = circularModel;