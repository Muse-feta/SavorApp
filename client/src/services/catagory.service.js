const api_url = import.meta.env.VITE_API_URL;
import axios from "axios";

const fileUpload = async (data) => {
  try {
    const response = await axios.post(
      `${api_url}/catagory/upload`,data
    );  
    
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};  


const getFiles = async () => {
  try {
      const response = await axios.get(
      `${api_url}/catagory`
    ); 
    return response.data;
  }catch (error) {
    console.log(error);
  }
}
const catagoryServices = {
  fileUpload,
  getFiles
};

export default catagoryServices;
