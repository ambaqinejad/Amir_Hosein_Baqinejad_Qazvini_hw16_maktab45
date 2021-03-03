const path = require('path');
const jalaali = require('jalaali-js');

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
    Employee.findById({ _id: req.params.id }, (err, employee) => {
        if (err) {
            return res.status(500).json({
                message: 'Server Error',
                error: err.message
            })
        }
        return res.status(200).json(employee);
    });
}

const create = (req, res, next) => {
    const newEmployee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nationalId: req.body.nationalId,
        gender: req.body.gender,
        isManager: req.body.isManager,
        birthDate: req.body.birthDate
    })

    newEmployee.save((err, employee) => {
        if (err) {
            return res.status(500).json({
                message: 'Server Error',
                error: err.message
            })
        }
        return res.status(200).json(employee);
    })
}

const update = (req, res, next) => {
    Employee.findOneAndUpdate({ _id: req.body.id },
        req.body, { new: true },
        (err, employee) => {
            if (err) {
                return res.status(500).json({
                    message: 'Server Error',
                    error: err.message
                })
            }
            return res.status(200).json(employee);
        });
}

const remove = (req, res, next) => {
    Employee.findOneAndDelete({ _id: req.body.id },
        (err, employee) => {
            if (err) {
                return res.status(500).json({
                    message: 'Server Error',
                    error: err.message
                })
            }
            return res.status(200).json(employee);
        });
}

const getSpecific = (req, res, next) => {
    let nowJalaaliDate = jalaali.toJalaali(new Date());
    nowJalaaliDate = Object.values(nowJalaaliDate).join('-');
    let date1 = new Date(nowJalaaliDate);
    let date2 = new Date(nowJalaaliDate);
    nowJalaaliDate = new Date(nowJalaaliDate);
    let greaterThan = +req.body.greaterThan;
    let lessThan = +req.body.lessThan;
    date1.setFullYear(date1.getFullYear() - lessThan);
    date2.setFullYear(date2.getFullYear() - greaterThan);
    Employee.find({ birthDate: { $gte: date1.toISOString(), $lte: date2.toISOString() } })
        .select({ _id: 0 })
        .exec((err, employees) => {
            if (err) {
                return res.status(500).json({
                    message: 'Server Error',
                    error: err.message
                })
            }
            return res.status(200).json(employees);
        });
}

const getManagers = (req, res, next) => {
    console.log('Hello');
    Employee.find({ isManager: true }, (err, offices) => {
        if (err) {
            return res.status(500).json({
                message: 'Server Error',
                error: err.message
            })
        }
        return res.status(200).json(offices);
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
    getSpecific,
    getManagers
}