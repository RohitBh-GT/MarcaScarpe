import express from 'express';
import {signup,signin} from '../controllers/auth.js';

const router = express.Router();

router.post('/api/v1/signup',signup);
router.post('/api/v1/signin',signin);

export default router;