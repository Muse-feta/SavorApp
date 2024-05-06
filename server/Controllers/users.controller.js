const jwt = require('jsonwebtoken');
var nodemailer = require("nodemailer");
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
         id: user.user_id,
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

const forgotPassword = async (req, res) => {
    try {
        console.log(req.body)
        const user = await userService.getUserByEmail(req.body.email);
        console.log(user)
        if (!user.length > 0) {
          return res.status(403).json({
            success: false,
            message: "Invalid email",
          });
        }

        const token = jwt.sign({ email: user[0].email }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
          },
        });

        var mailOptions = {
          from: process.env.EMAIL,
          to: user[0].email,
          subject: "Password Reset",
          text: `Click here to reset your password: http://localhost:5173/reset-password/${token}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log("Error: " + error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });

        return res.status(200).json({
          success: true,
          message: "Password reset link sent to your email",
        })
    } catch (error) {
        console.log(error)
    }
}

const resetPassword = async (req, res) => {
    try {
        const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);
       // check if token is not verfied yet or expired token 
        if (!decoded) {
            return res.status(403).json({
                success: false,
                message: 'Invalid Token'
            })
        }

        const resetPassword = await userService.resetPassword(req.body.password, decoded.email);
        if(resetPassword) {
            return res.status(200).json({
                success: true,
                message: 'Password reset successfully'
            })
        }else {
            return res.status(500).json({
                success: false,
                message: 'Invalid Token'
            })
        }
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Invalid Token'
        })
       
    }
}

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    if(users) {
        return res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users
        })
    }else {
        return res.status(500).json({
            success: false,
            message: 'Users not retrieved'
        })
    }
}

const searchUsers = async (req, res) => {
    const users = await userService.searchUsers(req.params.q);
    if(users) {
        return res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users
        })
    }else {
        return res.status(500).json({
            success: false,
            message: 'Users not retrieved'
        })
    }
}

const userController = { register, forgotPassword, resetPassword, getAllUsers, searchUsers };
module.exports = userController