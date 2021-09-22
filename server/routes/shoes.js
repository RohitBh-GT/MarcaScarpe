import express from 'express';
import { addProduct,getAllProducts } from '../controllers/shoes.js';
const router = express.Router();

router.post('/api/v1/addNewProduct',addProduct);
router.get('/api/v1/getProducts',getAllProducts);

export default router;