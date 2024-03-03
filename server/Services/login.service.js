const userService = require("./users.service");
const bcrypt = require('bcrypt');


const login = async (data) => {
    try {
        const getUserByEmail = await userService.getUserByEmail(data.email);
        if(getUserByEmail.length === 0){ 
            const returnData = {
              success: false,
              message: "Invalid email",
            };
            return returnData;
        }

        const user = getUserByEmail[0];
        const isPasswordMatch = await bcrypt.compare(
          data.password,
          user.password
        );
        if(!isPasswordMatch){
            const returnData = {
              success: false,
              message: "Invalid password",
            };
            return returnData;
        }

        const returnData = {
          success: true,
          data: user,
        }

        return returnData;
    } catch (error) {
        console.log(error);
    }
}

const loginService = {
    login
}

module.exports = loginService