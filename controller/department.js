const department = require('../models/department');

exports.suggestDepartment = async (req, res) => {
  try {
    const { name, faculty } = req.body;

    const thisdepartment = await department.findOne({ name })
    if (thisdepartment) {
      return res.status(400).json({
        message: `student with Name: ${name} already exists`
      })
    }

    const data = {
     name,
     faculty
    }

    const newDepartment = await department.create(data);

    res.status(201).json({
      message: "department created successfully",
      data: newDepartment
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

exports.getAlldepartment= async (req, res) => {
    try {
        const getAlldepartment= await department.find().populate('courses');
        res.status(200).json({
            message: `All deparment  fetched successfully and the total is ${getAlldepartment.length}`,
            data: getAlldepartment
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
exports.getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const difficultDepartment = await department.findById(id).populate('courses');

    if (!difficultDepartment) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.status(200).json({
      message: 'Department is found successfully successfully',
      data: difficultDepartment
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name , faculty } = req.body;

    const oldDepartment = await department.findById(id);
    if (!oldDepartment) {
      return res.status(404).json({
        message: 'Department not found not found'
      })
    }


    const data = {
      name,
      faculty
    }

    const updatedDepartment = await department.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({
      message: 'department updated successfully',
      data: updatedDepartment
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}



exports.deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDepartment = await department.findByIdAndDelete(id);
    if (!deletedDepartment) {
      return res.status(404).json({
        message: 'Department not found'
      });
    }

    res.status(200).json({
      message: 'Department deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
