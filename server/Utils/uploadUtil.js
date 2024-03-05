const multer = require('multer');
const path = require('path');
const pool = require('../Config/db.Config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/images');
    },
    

    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single('image');

module.exports = upload