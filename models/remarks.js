const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment')

const remarksSchema = new Schema({
 

    review: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required:true,
        default: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
    },

    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pupil',
        required: true
    }
 
}, {
    timestamps: true,
});

let remarksModel = mongoose.model('remarks', remarksSchema);

module.exports = remarksModel;