const path = require('path');

const Employee = require(path.join(path.dirname(__dirname), 'models', 'employee.js'));

const getAll = (req, res, next) => {
    Employee.find({}, (err, employees) => {
        if (err) {
            return res.status(500).json({
                message: 'Server Error',
                error: err.message
            })
        }
        return res.status(200).json(employees)
    });
}

const getOne = (req, res, next) => {
    Model.findById({ _id: req.params.id }, (err, employee) => {
        if (err) {
            return res.status(500).json({
                message: 'Server Error',
                error: err.message
            })
        }
        return res.status(200).json(employees);
    });
}

module.exports = {
    getAll,
    getOne
}