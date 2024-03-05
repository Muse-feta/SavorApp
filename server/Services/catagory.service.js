const pool = require("../Config/db.Config");

const uploadFile = async (file, name) => {
  console.log(file);
  console.log(name);

  try {
    const query = `INSERT INTO Categories ( name, image_url ) VALUES (?, ?)`;
    const rows = await pool.query(query, [name, file]);
    console.log(rows[0]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const getFiles = async () => {
  try {
    const query = `SELECT * FROM Categories`;
    const rows = await pool.query(query);
    console.log(rows[0]);
    return rows[0];
  }catch{
    console.log(error);
  }
}

const catagoryService = {
  uploadFile,
  getFiles
};

module.exports = catagoryService;
