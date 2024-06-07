const UserModel = require("../db/models/UserSchema");
const bcryptjs = require('bcryptjs');

async function registerUser(req, res) {
    try {
        const { name, email, password, confirm_password, profile_pic, phone } = req.body;

        // Check if passwords match
        if (password !== confirm_password) {
            return res.status(400).json({
                message: "Passwords do not match",
                error: true
            });
        }

        // Check if the email is already registered
        const checkEmail = await UserModel.findOne({ email });
        if (checkEmail) {
            return res.status(400).json({
                message: "User Already Registered",
                error: true
            });
        }

        // Check if the phone number is already registered
        const checkPhone = await UserModel.findOne({ phone });
        if (checkPhone) {
            return res.status(400).json({
                message: "Phone number already registered",
                error: true
            });
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create the user payload
        const payload = {
            name,
            email,
            profile_pic,
            phone,
            password: hashedPassword
        };

        // Save the user to the database
        const user = new UserModel(payload);
        const userSave = await user.save();

        return res.status(201).json({
            message: "User created successfully",
            data: userSave,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
}

module.exports = registerUser;
