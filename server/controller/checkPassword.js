const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../db/models/UserSchema');

async function checkPassword(req, res) {
    try {
        const { password, userId } = req.body;

        // Find the user by userId
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true
            });
        }

        // Verify the password of that user
        const verifyPassword = await bcryptjs.compare(password, user.password);
        if (!verifyPassword) {
            return res.status(400).json({
                message: "Please check password",
                error: true
            });
        }

        // Create token data
        const tokenData = {
            id: user._id,
            email: user.email
        };

        // Sign the token
        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        // Set cookie options
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Secure in production
            sameSite: 'Strict' // CSRF protection
        };

        // Exclude password from user data before returning
        const { password: userPassword, ...userData } = user.toObject();

        // Return response with token and user data (excluding password)
        return res.cookie('Token', token, cookieOptions).status(200).json({
            message: "Login successfully",
            Token: token,
            data: userData,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
}

module.exports = checkPassword;
