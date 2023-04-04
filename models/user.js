const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    contactNo: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    bloodGroup: {
        type: String,
        validate: {
            validator: function (value) {
                return (this.type !== 'admin' && value) || this.type === 'admin' 
            },
            message: 'Field "bloodGroup" required when user type not "admin"'
        }
    },

    // type: {
    //     type: String,
    //     required: true,
    //     enum: ['student', 'teacher', 'admin']
    // },

    // class: {
    //     type: Array,
    //     validate: {
    //         validator: function (value) {
    //             return (this.type !== 'admin' && value && value.length > 0) || this.type === 'admin' 
    //         },
    //         message: 'Field "class" required when user type not "admin"'
    //     }
    // },

    father: {
        type: String,
        validate: {
            validator: function (value) {
                return (this.type === 'student' && value) || this.type !== 'student' 
            },
            message: 'Field "father" required'
        }
    },

    mother: {
        type: String,
        validate: {
            validator: function (value) {
                return (this.type === 'student' && value) || this.type !== 'student' 
            },
            message: 'Field "mother" required'
        }
    },
    createdBy: {
        type: String,
        // default: userId
    },
}, {
    timestamps: true,
});

let userModel = mongoose.model('user', userSchema);

module.exports = userModel;