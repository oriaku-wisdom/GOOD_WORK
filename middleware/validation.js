const Joi = require('joi');


exports.validateDepartment = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(20).trim().required().messages({
      'string.base': 'Department name must be text',
      'string.empty': 'Department name cannot be empty',
      'string.min': 'Department name must be at least  4 characters long',
      'any.required': 'Department name is required'
    }),
    faculty: Joi.string().min(5).max(30).trim().required().messages({
      'string.base': 'Faculty must be text',
      'string.empty': 'Faculty cannot be empty',
      'string.min': 'Faculty must be at least 5 characters long',
      'any.required': 'Faculty is required'
    })
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  next();
};


exports.validateCourse = (req, res, next) => {
  const schema = Joi.object({
    courseCode: Joi.string().min(3).max(10).trim().required().messages({
      'string.base': 'Course code must be text',
      'string.empty': 'Course code cannot be empty',
      'string.min': 'Course code must be at least 3 characters',
      'any.required': 'Course code is required'
    }),
    title: Joi.string().min(3).max(100).trim().required().messages({
      'string.base': 'Course title must be text',
      'string.empty': 'Course title cannot be empty',
      'string.min': 'Course title must be at least 3 characters long',
      'any.required': 'Course title is required'
    }),
    creditUnits: Joi.number().min(1).max(6).required().messages({
      'number.base': 'Credit units must be a number',
      'number.min': 'Credit units must be at least 1',
      'number.max': 'Credit units cannot exceed 6',
      'any.required': 'Credit units are required'
    })
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  next();
};

