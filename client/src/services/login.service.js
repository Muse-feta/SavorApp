const api_url = import.meta.env.VITE_API_URL;
import axios from "axios";


const login = async (data) => {
    try {
        const response = await axios.post(`${api_url}/api/login`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

const loginService = {
    login
}

export default loginService;