const path = require('path');

const express = require('express');

const employeeController = require(path.join(path.dirname(__dirname), 'controllers', 'employee.js'));

const router = express.Router();

router.get('/all', employeeController.getAll);
router.get('/:id', employeeController.getOne);
router.post('/create', employeeController.create);
router.put('/update', employeeController.update);
router.delete('/delete', employeeController.remove);

module.exports = router;