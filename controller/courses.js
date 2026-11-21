const Course = require('../models/courses');
const Department = require('../models/department');

exports.createCourses = async (req, res) => {
    try {
        const { departmentId } = req.params;
        const { courseCode, title, creditUnits } = req.body;

        const existingDepartment = await Department.findById(departmentId);
        if (!existingDepartment) {
            return res.status(404).json({
                message: 'Department does not exist.'
            });
        }

        const data = {
            courseCode,
            title,
            creditUnits,
            departmentId
        };

        const newCourses = new Course(data);

        existingDepartment.courses.push(newCourses._id);

        await newCourses.save();
        await existingDepartment.save();

        res.status(201).json({
            message: 'Courses created successfully',
            data: newCourses
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getAllCourses = async (req, res) => {
    try {
        const allCourses = await Course.find().populate('departmentId');
        res.status(200).json({
            message: `All courses fetched successfully and the total is ${allCourses.length}`,
            data: allCourses
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getOnecourse = async (req, res) => {
    try {
        const { id } = req.params;

        const course = await Course.findById(id).populate('departmentId');
        if (!course) {
            return res.status(404).json({
                message: 'course not found'
            });
        }

        res.status(200).json({
            message: 'course found',
            data: course
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.updatecourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { courseCode, title, creditUnits } = req.body;

    const course= await Course.findById(id);
    if (!course) {
      return res.status(404).json({
        message: 'course not found'
      })
    }


    const data = {
      courseCode, 
      title,
       creditUnits
    }

    const updatedcourse = await Course.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({
      message: ' course updated successfully',
      data: updatedcourse
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}


exports.deletecourse = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedcourses = await Course.findByIdAndDelete(id);
    if (!deletedcourses) {
      return res.status(404).json({
        message: 'course not found'
      });
    }

    res.status(200).json({
      message: 'course deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
