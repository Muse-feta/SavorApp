const pool = require("../Config/db.Config");

const uploadFile = async (file, data) => {
  try {
    const query = `INSERT INTO menu_items ( name, description, price, category_id, image_url ) VALUES (?, ?, ?, ?, ?)`;
    const rows = await pool.query(query, [
      data.name,
      data.description,
      data.price,
      data.category_id,
      file,
    ]);
    console.log(rows[0]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const getFilesByCatagoryId = async (catagory_id) => {
  try {
    const query = `SELECT * FROM menu_items WHERE category_id = ?`;
    const rows = await pool.query(query, [catagory_id]);
    console.log(rows[0]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const updateMenuItem = async (id, data, file) => {
  try {
    const query = `UPDATE menu_items SET name = ?, description = ?, price = ?, image_url = ? WHERE item_id = ?`;
    const rows = await pool.query(query, [
      data.name,
      data.description,
      data.price,
      file,
      id,
    ]);
    console.log(rows[0]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const getFilesByMenuId = async (menu_id) => {
  try {
    const query = `SELECT * FROM menu_items WHERE item_id = ?`;
    const rows = await pool.query(query, [menu_id]);
    console.log(rows[0]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const deleteMenuItem = async (id) => {
  try {
    const query = `DELETE FROM menu_items WHERE item_id = ?`;
    const rows = await pool.query(query, [id]);
    console.log(rows[0]);
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const menu_item_service = {
  uploadFile,
  getFilesByCatagoryId,
  updateMenuItem,
  getFilesByMenuId,
  deleteMenuItem,
};

module.exports = menu_item_service;
