const api_url = import.meta.env.VITE_API_URL;
import axios from "axios";


const fileUpload = async (data, token) => {
    try {
        const response = await axios.post(
          `${api_url}/api/menu_item/upload`,
          data,
          {
            headers: {
              "x-access-token": token,
            },
          }
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

const getFilesBymenuItemId = async (catagory_id) => {
  try {
    const response = await axios.get(`${api_url}/api/menu-item/${catagory_id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const editMenuItem = async (data, token, id) => {
  try {
    const response = await axios.put(
      `${api_url}/api/menu-item-update/${id}`,
      data,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getMenuItemsById = async (id, token) => {
  try {
    const response = await axios.get(`${api_url}/api/single-menu-item/${id}`, {
      headers: {
        "x-access-token": token,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const deleteMenuItem = async (id, token) => {
  try {
    const response = await axios.delete(`${api_url}/api/delete-menu-item/${id}`,
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

const menuItemsServices = {
  fileUpload,
  getFilesBymenuItemId,
  editMenuItem,
  getMenuItemsById,
  deleteMenuItem,
};
export default menuItemsServices