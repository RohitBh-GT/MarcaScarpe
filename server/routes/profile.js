import express from 'express';
import { getProfile } from '../controllers/profile.js';
const router = express.Router();

router.get('/api/v1/getParticularProfile/:email',getProfile);

export default router;