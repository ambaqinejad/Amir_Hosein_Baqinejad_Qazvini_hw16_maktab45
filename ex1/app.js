const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const officeRouter = require(path.join(__dirname, 'routes', 'office.js'));
const employeeRouter = require(path.join(__dirname, 'routes', 'employee.js'));

const PORT = process.env.PORT || 3000;
const DB_URI = 'mongodb://localhost:27017/Office-Employee';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect(
    DB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, err => {
        if (err) return console.log('Can not connect to db.');
        return console.log('Server connected to db successfully');
    }
)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/office', officeRouter);
app.use('/employee', employeeRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})