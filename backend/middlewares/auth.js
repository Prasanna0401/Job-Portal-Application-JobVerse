const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
require('dotenv').config();

exports.createToken = (id, email) => {
    // Create payload object
    const payload = { id, email };

    // Generate the token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '5d', // Token will expire in 5 days
    });

    return token;
};

exports.isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]

        if (!token) {
            return res.status(401).json({
                success: false,
                isLogin: false,
                message: "Missing Token"
            })
        }

        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    isLogin: false,
                    message: err.message
                })
            }
            req.user = await User.findById(user.id)
            next()
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
};

exports.authorizationRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Role ${req.user.role} is not allowed to access this resource`
            });
        }

        next();
    };
};