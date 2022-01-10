const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');

// Chain the different http methods that we want to provide for the same route
router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;