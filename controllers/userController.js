const User = require('../models/user');
const { validateConfirmPassword } = require('../validator')
const bcrypt = require('bcryptjs');
const passport = require("passport");

const mongoose = require('mongoose');
const async = require('async');
const { body, validationResult } = require("express-validator");

// Handle Author create on POST.
exports.user_create_post = [

    // Validate and sanitize fields.
    body('firstName').trim().isLength({ min: 1, max: 16 }).escape().withMessage('First name must be between 1 and 16 characters'),
    body('lastName').trim().isLength({ min: 1, max: 16 }).escape().withMessage('Family name must be between 1 and 16 characters.'),
    body('username').trim().isLength({ min: 3, max: 16 }).escape().withMessage('Username must contain at least 3 characters.'),
    [validateConfirmPassword],

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create temp user info in case of error without saving data.
        var tempUser = new User(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                password: req.body.password,
                member: false
            }
        );

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.

            res.render('sign-up', { title: 'Sign Up', user: tempUser, errors: errors.array() });
            return;
        } else {
            // Data from form is valid.

            // Encrypt password with bcrypt.
            bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
                if (err) {
                    // Error in hashing password. Rerender with data and error.
                    res.render('sign-up', { title: 'Sign Up', user: tempUser, errors: [err] });
                } else {
                    // Create Author object with escaped/trimmed/encrypted data.
                    var user = new User(
                        {
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            username: req.body.username,
                            password: hashedPassword,
                            member: false
                        }
                    );

                    // Save user.
                    user.save(function (err) {
                        if (err) { return next(err); }
                        // Successful - redirect to new author record.
                        res.redirect('/');
                    });
                }
            });
        }
    }
];

// Handle signing user in on POST.
exports.user_signin_post = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/sign-in"
})

// Handle signing user out.

exports.user_signout_post = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
}

