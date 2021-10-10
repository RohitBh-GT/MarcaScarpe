import express from 'express';
import { addProduct,getAllProducts,addReview } from '../controllers/shoes.js';
const router = express.Router();

router.post('/api/v1/addNewProduct',addProduct);
router.get('/api/v1/getProducts',getAllProducts);
router.put('/api/v1/addReview/:id',addReview);

export default router;