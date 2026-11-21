const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
departmentId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'departments',
    required: true
  },
    courseCode: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    creditUnits: {
        type: Number,
        required: true
    },

  

}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;