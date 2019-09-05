const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');
const employeesController = require('./controllers/employees');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const port = 3002;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/users', employeesController.all);

app.get('/users/:id', employeesController.findById);

app.post('/users', employeesController.create);

app.put('/users/:id', employeesController.update);

app.delete('/users/:id', employeesController.delete);

db.connect('mongodb://localhost:27017/database', err => {
    if(err) {
        return console.log(err);
    }

    app.listen(port, () => {
        console.log('API app started');
    })
});