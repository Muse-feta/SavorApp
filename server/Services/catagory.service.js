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

const updateCatagory = async (id, data, file) => {
  try {
    const query = `UPDATE Categories SET name = ?, image_url = ? WHERE category_id = ?`;
    const rows = await pool.query(query, [data.name, file, id]);
    console.log(rows[0]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const getFilesById = async (id) => {
  try {
    const query = `SELECT * FROM Categories WHERE category_id = ?`;
    const rows = await pool.query(query, [id]);
    console.log(rows[0]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
}

const deleteCatagory = async (id) => {
  try {
    const query = `DELETE FROM Categories WHERE category_id = ?`;
    const rows = await pool.query(query, [id]);
    if(rows.affectedRows > 0){
      const query2 = `DELETE FROM menu_items WHERE category_id = ?`;
      const rows2 = await pool.query(query2, [id]);
      // console.log(rows2[0]);
    }
    // console.log(rows[0]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
}

const catagoryService = {
  uploadFile,
  getFiles,
  updateCatagory,
  getFilesById,
  deleteCatagory
};

module.exports = catagoryService;
