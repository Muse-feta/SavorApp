const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    // console.log(token)
    if(!token) {
        return res.status(403).json({
            success: false,
            message: 'No token provided'
        });
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).json({
                success: false,
                message: 'Failed to authenticate token'
            });
        }

        next();
});
};

const isAdmin = (req, res, next) => {
    const token = req.headers['x-access-token'];
    
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        

        if(decoded.role !== 'admin') {
            return res.status(401).json({
                success: false,
                message: 'User is not an admin'
            });
        }

        next();
});
};

const authMidleware = {
    verifyToken,
    isAdmin
};
module.exports = authMidleware