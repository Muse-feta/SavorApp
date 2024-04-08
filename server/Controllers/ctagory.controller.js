const catagoryService = require("../Services/catagory.service");


const uploadFile = async (req, res) => {
  
  const file = req.file.filename;
  
  try {  
      const result = await catagoryService.uploadFile(file, req.body.name);
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
    })
  }
  };

  const getFiles = async (req, res) => {
   try {
     const result = await catagoryService.getFiles();
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
   } catch (error) {
     return res.status(500).json({
       success: false,
       message: error.message,
     })
   }
  }

  const updateCatagory = async (req, res) => {
    const file = req.file.filename;
    const result = await catagoryService.updateCatagory(req.params.id, req.body, file);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Catagory updated successfully",
        data: result,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Catagory not updated",
      });
    }
  };

  const getFilesById = async (req, res) => {
    const result = await catagoryService.getFilesById(req.params.id);
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

  const deleteCatagory = async (req, res) => {
    const result = await catagoryService.deleteCatagory(req.params.id);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Catagory deleted successfully",
        data: result,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Catagory not deleted",
      });
    }
  };

  const catagoryController = {
    uploadFile,
    getFiles,
    getFilesById,
    updateCatagory,
    deleteCatagory
  };
  module.exports = catagoryController