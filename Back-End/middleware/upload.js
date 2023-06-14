const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});

const upload = multer({

    storage: storage,
    fileFilter: function(req, file, cb) {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
            cb(null, true);
        }
        else {
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 10
    }
}).single('image');

module.exports = upload;