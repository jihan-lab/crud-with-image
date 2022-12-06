import express from "express";
import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";

const router = express();

router.get("/product", getProduct);
router.get("/product/:id", getProductById);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
