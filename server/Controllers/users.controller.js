const jwt = require('jsonwebtoken');
const userService = require('../Services/users.service');
require('dotenv').config()

const register = async (req, res) => {
    const isUserExist = await userService.isUserExist(req.body.email);
    if(isUserExist.length > 0) {
        return res.status(403).json({
            success: false,
            message: 'User already exist'
        })
    }
   try {
     const user = await userService.createUser(req.body);
     const payload = {
         id: user._id,
         email: user.email,
         username: user.username,
         role: user.role,
         address: user.address,
         firstname: user.firstname,
         lastname: user.lastname
     }
     const token = await jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '3d'});
    if(user) {
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            token
        })
    }else{
        return res.status(500).json({
            success: false,
            message: 'User not created'
        })
    }
   } catch (error) {
       console.log(error)
       return res.status(500).json({
           success: false,
           message: 'Something went wrong'
       })
   }
    
}

const userController = { register };
module.exports = userController