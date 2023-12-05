const multer = require("multer");
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    cb(null, "./src/uploads/");
  },
  filename: async (req, file, cb) => {
    cb(
      null,
      `${req.body.username}-${file.originalname.split(".")[0]}-${Date.now()}.${
        file.mimetype.split("/")[1]
      }`
    );
  },
});

module.exports = {
  uploadImg: multer({ storage: storage }).single("image"),
};
