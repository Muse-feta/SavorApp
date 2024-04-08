const api_url = import.meta.env.VITE_API_URL;
import axios from "axios";

const fileUpload = async (data, token) => {
  try {
    const response = await axios.post(
      `${api_url}/api/catagory/upload`,data,
      {
      headers: {
        "x-access-token": token}
      },
    );  
    
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};  


const getFiles = async () => {
  try {
      const response = await axios.get(
      `${api_url}/api/catagory`
    ); 
    return response.data;
  }catch (error) {
    console.log(error);
  }
};

const updateCatagory = async (id,token, data) => {
  try {
    const response = await axios.put(`${api_url}/api/catagory/${id}`, data, {
      headers: {
        "x-access-token": token,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getCatagoryById = async (id, token) => {
  try {
    const response = await axios.get(`${api_url}/api/catagory/${id}`,
      {
        headers: {
          "x-access-token": token,
        },
      });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const deleteCatagory = async (id, token) => {
  try {
    const response = await axios.delete(`${api_url}/api/delete-catagory/${id}`,
      {
        headers: {
          "x-access-token": token,
        },
      });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
const catagoryServices = {
  fileUpload,
  getFiles,
  updateCatagory,
  getCatagoryById,
  deleteCatagory,
};

export default catagoryServices;
