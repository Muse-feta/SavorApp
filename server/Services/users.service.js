const pool = require('../Config/db.Config');
const bcrypt = require('bcrypt');

const isUserExist = async (email) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const rows = await pool.query(query, [email]);
    console.log(rows[0]);
    return rows[0]
}

const createUser = async (user) => {
    let createdUser = {}
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        const query =
          "INSERT INTO users ( username,phone, email, password ) VALUES (?, ?, ?, ?)";
        const rows = await pool.query(query, [
          user.username,
          user.phone,
          user.email,
          hashedPassword
        ]);

         const user_id = rows[0].insertId;

         if (rows[0].affectedRows !== 1) {
           return false;
         }

         const query2 = `INSERT INTO users_info ( user_id, firstname, lastname, address, role ) VALUES (?, ?, ?, ?, ?)`;
         const rows2 = await pool.query(query2, [
           user_id,
           user.firstname,
           user.lastname,
           user.address,
           user.role
         ])
         createdUser = {
           user_id,
           username: user.username,
           email: user.email,
           phone: user.phone,
           role: user.role,
           address: user.address,
         }
         return createdUser;
    } catch (error) {
        console.log(error)
    }

}

const getUserByEmail = async ( email ) => {
    const query = 'SELECT * FROM users INNER JOIN users_info ON users.user_id = users_info.user_id WHERE email = ?';
    const rows = await pool.query(query, [email]);
    return rows[0]
}

const resetPassword = async (password, email) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const query = 'UPDATE users SET password = ? WHERE email = ?';
    const rows = await pool.query(query, [hashedPassword, email]);
    return rows[0]
}


const userService = {
    isUserExist,
    createUser,
    getUserByEmail,
    resetPassword
}

module.exports = userService