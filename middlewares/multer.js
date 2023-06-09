const multer = require('multer')

const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/images');
    },
    filename: (req, file, cb) => {
        cb(
            null,
            `${file.fieldname}-${+Date.now()}.${file.originalname.split('.')[1]}`
        );
    }
});


const pdfStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/pdfs');
    },
    filename: (req, file, cb) => {
        cb(
            null,
            `${file.fieldname}-${+Date.now()}.${file.originalname.split('.')[1]}`
        );
    }
});

const imgUpload = multer({ storage: imageStorage }).fields([
    { name: 'image', maxCount: 1 }
]);

const pdfUpload = multer({ storage: pdfStorage }).fields([
    { name: 'pdf', maxCount: 1 }
]);

module.exports = {imgUpload,pdfUpload}