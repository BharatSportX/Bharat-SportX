const UserModel = require('../db/models/UserSchema');

async function checkEmail(req, res) {
  try {
    const { email } = req.body;
    const checkEmail = await UserModel.findOne({ email }).select('-password');
    if (!checkEmail) {
      return res.status(400).json({
        message: "User not exists",
        error: true
      });
    }
    return res.status(200).json({
      message: "Email verified",
      success: true,
      data: checkEmail
    });
  } catch (error) {
    console.log("Error in Check Email Controller",error?.message)
    return res.status(500).json({
      message: error.message || error,
      error: true
    });
  }
}

module.exports = checkEmail;
