const api_url = import.meta.env.VITE_API_URL;
import axios from "axios";


const register = async (data) => {
    try {
        const response = await axios.post(`${api_url}/api/register`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

const forgotPassword = async (email) => {
    try {
        const response = await axios.post(`${api_url}/api/forgot-password`, {email: email});
        return response.data; 
    }catch (error) {
        return error.response.data
    }
}

const resetPassword = async (password, token) => {
    try {
        const response = await axios.put(`${api_url}/api/reset-password/${token}`, {
          password: password,
        });
        return response.data;
    }catch{
        return error.response.data
    }
}

const registerService = {
    register,
    forgotPassword,
    resetPassword
};

export default registerService