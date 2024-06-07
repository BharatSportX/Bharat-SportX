const exprees=require('express')
const router=exprees.Router()
const registerUser=require('../controller/registerUser')
const checkEmail=require('../controller/CheckEmail')
const checkPassword=require('../controller/checkPassword')
const userDetails=require('../controller/userDetails')
const updateUser=require('../controller/updateUserDetails')
const logout=require('../controller/Logout')

//user create (register user)
router.post('/register',registerUser)
//check user email
router.post('/check-email',checkEmail)
//check password when login
router.post('/password',checkPassword)
//login user details
router.get('/user-detail',userDetails)
//update user details
router.post('/update-user',updateUser)
//logout
router.post('/logout',logout)
module.exports=router