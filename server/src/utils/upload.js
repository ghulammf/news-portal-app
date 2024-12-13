import multer from "multer";

const imageFormat = {
    "image/png": "png",
    "image/jpg": "jpg",
    "image/jpeg": "jpeg"
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValidFormat = imageFormat[file.mimetype];
        let uploadError = new Error("Invalid image format");

        if (isValidFormat) {
            uploadError = null
        }

        cb(uploadError, 'public/images');
    },
    filename: function (req, file, cb) {
        const extention = imageFormat[file.mimetype];
        const uniqueFileName = `${file.fieldname}-${Date.now()}.${extention}`;

        cb(null, uniqueFileName);
    }
});

const uploadFile = multer({ storage: storage })

export default uploadFile;
