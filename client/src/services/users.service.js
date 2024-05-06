const api_url = import.meta.env.VITE_API_URL;
import axios from "axios";


const getAllUsers = async () => {
    try {
        const response = await axios.get(`${api_url}/api/get-all-users`, {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const searchUsers = async (q) => {
    try {
        const response = await axios.get(`${api_url}/api/search-users/${q}`, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const usersService = {
    getAllUsers,
    searchUsers
};

export default usersService;