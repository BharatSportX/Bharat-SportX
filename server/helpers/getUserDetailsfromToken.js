const jwt = require('jsonwebtoken');
const UserModel = require('../db/models/UserSchema');

const getUserDetailsFromToken = async (token) => {
    if (!token) {
        return {
            message: "Session out",
            logout: true,
        };
    }

    try {
        //for authetication with token
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // for getting user details
        const user = await UserModel.findById(decode.id).select('-password');
        if (!user) {
            return {
                message: "User not found",
                logout: true,
            };
        }
        return user;
    } catch (error) {
        return {
            message: "Invalid token",
            logout: true,
        };
    }
};

module.exports = getUserDetailsFromToken;
