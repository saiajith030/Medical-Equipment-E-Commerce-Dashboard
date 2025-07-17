const express = require("express");
const router = express.Router();

// Import controller functions
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Public Routes
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin/Protected Routes (add auth middleware later if needed)
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
