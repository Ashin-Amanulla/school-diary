const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pupilSchema = new Schema({


    fullName: { type: String },
    dateOfBirth: { type: String },
    gender: { type: String },
    address: { type: String },
    email: { type: String },
    password: { type: String },
    photo: { type: String },
    parentName: { type: String },
    parentPhoneNumber: { type: String },
    emergencyName: { type: String },
    emergencyPhoneNumber: { type: String },
    emergencyRelationship: { type: String }

},
    {
        timestamps: true,
    })

let pupilModel = mongoose.model('pupil', pupilSchema);

module.exports = pupilModel;