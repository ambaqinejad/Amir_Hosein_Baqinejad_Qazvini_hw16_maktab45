const path = require('path');

const express = require('express');

const router = express.Router();

const officeController = require(path.join(path.dirname(__dirname), 'controllers', 'office.js'));

router.get('/all', officeController.getAll);
router.get('/:id', officeController.getOne);
router.post('/create', officeController.create);
router.put('/update', officeController.update);
router.delete('/delete', officeController.remove);
router.post('/getSpecific', officeController.getSpecific)

module.exports = router;