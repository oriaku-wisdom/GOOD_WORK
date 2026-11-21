const router = require('express').Router();
const { validateDepartment } = require('../middleware/validation')
const { suggestDepartment, getDepartmentById, getAlldepartment, updateDepartment, deleteDepartment } = require('../controller/department');

router.post('/suggestDepartment', validateDepartment ,suggestDepartment);

router.get('/getOne/:id',  getDepartmentById )

router.get('/getalldepart',  getAlldepartment )

router.put('/update/:id', updateDepartment)

router.delete('/delete/:id', deleteDepartment)

module.exports = router;
