const path = require('path');

let jalaali = require('jalaali-js')

const Office = require(path.join(path.dirname(__dirname), 'models', 'office.js'));

const getAll = (req, res, next) => {
    Office.find({}, (err, offices) => {
        if (err) {
            return res.status(500).json({
                message: 'Server Error',
                error: err.message
            })
        }
        return res.status(200).json(offices)
    });
}

const getOne = (req, res, next) => {
    Office.findById({ _id: req.params.id }, (err, employee) => {
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
    const newOffice = new Office({
        name: req.body.name,
        registryNumber: req.body.registryNumber,
        city: req.body.city,
        province: req.body.province,
        registryDate: req.body.registryDate
    })

    newOffice.save((err, office) => {
        if (err) {
            return res.status(500).json({
                message: 'Server Error',
                error: err.message
            })
        }
        return res.status(200).json(office);
    })
}

const update = (req, res, next) => {
    Office.findOneAndUpdate({ _id: req.body.id },
        req.body, { new: true },
        (err, office) => {
            if (err) {
                return res.status(500).json({
                    message: 'Server Error',
                    error: err.message
                })
            }
            return res.status(200).json(office);
        });
}

const remove = (req, res, next) => {
    Office.findOneAndDelete({ _id: req.body.id },
        (err, office) => {
            if (err) {
                return res.status(500).json({
                    message: 'Server Error',
                    error: err.message
                })
            }
            return res.status(200).json(office);
        });
}

const getSpecific = (req, res, next) => {
    let nowJalaaliDate = jalaali.toJalaali(new Date());
    nowJalaaliDate = Object.values(nowJalaaliDate).join('-');
    let specificJalaaliDate = new Date(nowJalaaliDate);
    nowJalaaliDate = new Date(nowJalaaliDate);
    let fromSpecificPastYear = +req.body.fromSpecificPastYear;
    specificJalaaliDate.setFullYear(specificJalaaliDate.getFullYear() - fromSpecificPastYear);

    Office.find({ registryDate: { $gte: specificJalaaliDate.toISOString(), $lte: nowJalaaliDate.toISOString() } })
        .select({ name: 1, _id: 0 })
        .exec((err, offices) => {
            if (err) {
                return res.status(500).json({
                    message: 'Server Error',
                    error: err.message
                })
            }
            return res.status(200).json(offices);
        });
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
    getSpecific
}