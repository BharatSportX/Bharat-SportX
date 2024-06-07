const getUserDetailsFromToken = require('../helpers/getUserDetailsfromToken');
const UserModel = require('../db/models/UserSchema');
const bcryptjs = require('bcryptjs');

async function updateUserDetails(req, res) {
    try {
        const authHeader = req.headers.authorization;
        // console.log("Authorization Header:", authHeader); 

        if (!authHeader) {
            return res.status(401).json({
                message: "Authorization header is missing",
                logout: true,
                success: false,
            });
        }

        const token = authHeader.split(' ')[1]||"";
        // console.log("Token:", token); 

        const user = await getUserDetailsFromToken(token);
        // console.log("User from token:", user); 

        if (!user || user.logout) {
            return res.status(401).json({
                message: user ? user.message : "Invalid token",
                logout: true,
                success: false,
            });
        }

        const { name, profile_pic, email, password, phone } = req.body;
        if (!name && !profile_pic && !email && !password && !phone) {
            return res.status(400).json({
                message: "At least one of the fields (name, profile_pic, email, password, phone) is required for update",
                success: false,
            });
        }

        const updateUserFields = {};
        const updatedFields = [];

        if (name) {
            updateUserFields.name = name;
            updatedFields.push('name');
        }
        if (profile_pic) {
            updateUserFields.profile_pic = profile_pic;
            updatedFields.push('profile picture');
        }
        if (email) {
            updateUserFields.email = email;
            updatedFields.push('email');
        }
        if (password) {
            // Hash the password before saving
            updateUserFields.password = await bcryptjs.hash(password, 10);
            updatedFields.push('password');
        }
        if (phone) {
            updateUserFields.phone = phone;
            updatedFields.push('phone');
        }

        await UserModel.updateOne(
            { _id: user._id },
            { $set: updateUserFields } // Use $set operator to update only specified fields
        );

        const userInformation = await UserModel.findById(user._id).select('-password');
        const message = `User ${updatedFields.join(', ')} updated successfully`;
        return res.json({
            message: message,
            data: userInformation,
            success: true
        });
    } catch (error) {
        console.log("Error in update user controller", error);
        return res.status(500).json({
            message: error.message || error,
            error: true,
        });
    }
}

module.exports = updateUserDetails;
