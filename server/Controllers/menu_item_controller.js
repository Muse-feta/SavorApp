const menu_item_service = require("../Services/menu_item.service");

const uploadFile = async (req, res) => {
    const file = req.file.filename;
    const data = req.body;
    try {
        const result = await menu_item_service.uploadFile(file, data);
        if (result) {
            return res.status(200).json({
                success: true,
                message: "File uploaded successfully",
                data: result,
            });
        } else {
            return res.status(500).json({
                success: false,
                message: "File not uploaded",
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: error.message,
            error: error,
        });
    }
};

const getFilesByCatagoryId = async (req, res) => {
    const result = await menu_item_service.getFilesByCatagoryId(req.params.catagory_id);
    if (result) {
        return res.status(200).json({
            success: true,
            data: result,
        });
    } else {
        return res.status(500).json({
            success: false,
            message: "No files found",
        });
    }
};

const updateMenuItem = async (req, res) => {
    const file = req.file.filename;
    const result = await menu_item_service.updateMenuItem(req.params.id, req.body, file);
    if (result) {
        return res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            data: result,
        });
    } else {
        return res.status(500).json({
            success: false,
            message: "File not uploaded",
        });
    }
};

const getFilesByMenuId = async (req, res) => {
    const result = await menu_item_service.getFilesByMenuId(req.params.id);
    if (result) {
        return res.status(200).json({
            success: true,
            data: result,
        });
    } else {
        return res.status(500).json({
            success: false,
            message: "No files found",
        });
    }
};

const deleteMenuItem = async (req, res) => {
    const result = await menu_item_service.deleteMenuItem(req.params.id);
    if (result) {
        return res.status(200).json({
            success: true,
            message: "File deleted successfully",
            data: result,
        });
    } else {
        return res.status(500).json({
            success: false,
            message: "File not deleted",
        });
    }
};

const menu_item_controller = {
  uploadFile,
  getFilesByCatagoryId,
  updateMenuItem,
  getFilesByMenuId,
  deleteMenuItem,
};
module.exports = menu_item_controller