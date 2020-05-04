const express = require('express');
const registrationRoutes = express.Router();
const bcrypt = require('bcryptjs');
let Registration = require('./schema/User');
// let RouteNames = require("./constants/constants");
//NOTE  Registration route

registrationRoutes.get('/test', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
registrationRoutes.route('/register').post(function(req, res) {
    let register = new Registration(req.body);
    register.save()
        .then(reg => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.status(400).send("Failed to store to database");
        });
});

// Login Router
registrationRoutes.route('/login').post(function(req, res) {
    console.log("RES",req)
    Registration.findOne({ user_name: req.body.user_name })
        .then(user => {
            console.log("User from login", user)
            if (!user) res.sendStatus(204);
            else {
                res.json(user)
                // bcrypt.compare(req.body.password, user.password)
                //     .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
            }
        });
});

// Username validation Router
registrationRoutes.route('/validateUsername')
    .post(function(req, res) {
        Registration.findOne({ user_name: req.body.user_name })
            .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
    });

// Get allData
registrationRoutes.route('/allData').get(function(req, res) {
    Registration.find((err, data) => err ? res.status(400).send("Error occured") : res.json(data));
});

module.exports = registrationRoutes;