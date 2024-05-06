// -- Create Users table
const Users = `CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT,
    username VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    password VARCHAR(255),
    PRIMARY KEY (user_id)
)`;

// -- Create user_info table
const Users_Info = `CREATE TABLE IF NOT EXISTS Users_Info (
    user_id INT,
    role VARCHAR(50),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
)`;

// -- Create Categories table with image_url column
const Categories = `CREATE TABLE IF NOT EXISTS Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    image_url VARCHAR(255) 
)`;

// -- Create Menu_Items table with image_url column
const Menu_Items = `CREATE TABLE IF NOT EXISTS Menu_Items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255) NOT NULL, 
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
)`;
 
// -- Create Orders table
const Orders = `CREATE TABLE IF NOT EXISTS Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    payment_method VARCHAR(50),
    phone VARCHAR(20),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    order_total_price DECIMAL(10, 2),
    currency VARCHAR(10),
    order_status VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
)`;

// -- Create Order_Items table
const Order_Items = `CREATE TABLE IF NOT EXISTS Order_Items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    item_id INT,
    quantity INT,
    total_item_price DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (item_id) REFERENCES Menu_Items(item_id)
)`;

// -- Create Online_Payments table
const Online_Payments = `CREATE TABLE IF NOT EXISTS Online_Payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    amount DECIMAL(10, 2),
    currency VARCHAR(10),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    transaction_id VARCHAR(100),
    payment_status VARCHAR(100), 
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
)`;



// -- Create Feedback table
const Feedback = `CREATE TABLE IF NOT EXISTS Feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    rating INT,
    comment TEXT, 
    feedback_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
)`;

module.exports = {
  Users,
  Users_Info,
  Categories,
  Menu_Items,
  Orders,
  Order_Items,
  Online_Payments,
//   Manual_Checkout_Information,
  Feedback,
};
