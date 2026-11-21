const router = require('express').Router()
const { validateCourse } = require('../middleware/validation')
const {createCourses, getOnecourse,  getAllCourses,updatecourse, deletecourse} = require('../controller/courses')

router.post('/courses/:departmentId', validateCourse ,createCourses); 

router.get('/allcourses', getAllCourses)

router.get('/getOnecourse/:id',  getOnecourse)

router.put('/updatecourses/:id',updatecourse)

router.delete('/deletecourses/:id', deletecourse)

module.exports = router