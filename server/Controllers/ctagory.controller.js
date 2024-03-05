const catagoryService = require("../Services/catagory.service");


const uploadFile = async (req, res) => {
  
  const file = req.file.filename;
  // console.log("file",file)
  // console.log("cat Name :)", req.body.name);
  
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

  const catagoryController = {
    uploadFile,
    getFiles
  };
  module.exports = catagoryController