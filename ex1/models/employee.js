const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OfficeSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 20
    },
    nationalId: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 10
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female'],
        default: 'male'
    },
    isManager: {
        type: Boolean,
        required: true,
        default: true
    },
    birthDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Office', OfficeSchema);