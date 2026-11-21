const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    faculty: {
        type: String,
        required: true
    },

    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]

}, { timestamps: true });

const department = mongoose.model('departments', departmentSchema);

module.exports = department;