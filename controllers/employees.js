const Employees = require('../models/employees');

exports.all = function(req, res) {
    Employees.all(function(err, docs) {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
};

exports.findById = function(req, res) {
    Employees.findById(req.params.id, function (err, doc) {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    });
};

exports.create = function(req, res) {
    let user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email
    };

    Employees.create(user, function(err, result) {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(user);
    });
};

exports.update = function(req, res) {
    Employees.update(req.params.id, {name: req.body.name}, function(err, result) {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};

exports.delete = function(req, res) {
    Employees.delete(req.params.id, function(err, result) {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};