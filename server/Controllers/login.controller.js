const jwt = require('jsonwebtoken');
const loginService = require('../Services/login.service');
require('dotenv').config();

const login = async (req, res) => {
    try {
        console.log(req.body);
        const user = await loginService.login(req.body);
        console.log("user :)", user)
        if (user.success === false) {
          return res.status(401).json({
            success: false,
            message: user.message,
          });
        }

        const payload = {
            id: user.data.id,
            email: user.data.email,
            username: user.data.username,
            role: user.data.role,
            address: user.data.address,
            firstname: user.data.firstname,
            lastname: user.data.lastname
        }
        const token = await jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '3d'});

        return res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            token
        })
    } catch (error) {
        console.log(error);
    }
}

const loginController = {
    login
}

module.exports = loginController