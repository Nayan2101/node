const express = require("express");
const router = express.Router();
const roleController = require("../controller/roleController");
const authMiddleware = require("../middleware/authMiddleware");
const authorizeMiddleware = require("../middleware/authorizeMiddleware");

router.get(
  "/role/",
  authMiddleware,
  authorizeMiddleware(["Admin"]),
  roleController.getAllRole
);
router.get("/role/:id", roleController.getById);
router.post("/role/", roleController.addRole);
router.put("/role/:id", roleController.updateRole);
router.delete("/role/:id", roleController.delete);

module.exports = router;
