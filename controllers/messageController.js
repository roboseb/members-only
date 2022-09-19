const mongoose = require('mongoose');
const async = require('async');
const { body, validationResult } = require("express-validator");

const Message = require('../models/message');
const User = require('../models/user');

// POST request for adding a new message.
exports.new_message_post = [

    // Validate and sanitize message.
    body('message').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        console.log('writing message...')

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create temp user info in case of error without saving data.
        var message = new Message(
            {
                message: req.body.message,
                username: req.body.username,
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.

            res.render('index', { message: req.body.message });
            return;
        } else {
            // Data from form is valid.

            // Save user.
            message.save(function (err) {
                if (err) { return next(err); }
                // Successful
                res.redirect('/');
            });
        }
    }
];

// GET request for home/index page.
exports.index_get = (req, res, next) => {
    async.parallel({
        message_list(callback) {
            Message.find({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },

        user_list(callback) {
            User.find({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
    },
        (err, results) => {
            console.log(results.message_list[0].message);
            res.render('index', { error: err, data: results, user: req.user});
        });
};
