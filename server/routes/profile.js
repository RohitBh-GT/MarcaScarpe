import express from 'express';
import { getProfile,updateWishlist,deleteWishlistItem,addOrders } from '../controllers/profile.js';
const router = express.Router();

router.get('/api/v1/getParticularProfile/:email',getProfile);
router.put('/api/v1/updateWishlist/:email',updateWishlist);
router.put('/api/v1/removeWishlistItem/:email',deleteWishlistItem);

export default router;