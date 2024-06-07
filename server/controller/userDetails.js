const getUserDetailsFromToken = require('../helpers/getUserDetailsfromToken');

async function userDetails(req, res) {
    try {
        const token = req.cookies && req.cookies.Token ? req.cookies.Token : "";
        
        if (!token) {
            return res.status(401).json({
                message: "Token not found in cookies",
                error: true
            });
        }

        const user = await getUserDetailsFromToken(token);
        if (user.logout) {
            return res.status(401).json({
                message: user.message,
                error: true
            });
        }

        return res.status(200).json({
            message: "User details",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
}

module.exports = userDetails;
