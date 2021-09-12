import express from 'express';
import {signup,signin,GoogleLogin,forgotPassword} from '../controllers/auth.js';

const router = express.Router();

router.post('/api/v1/signup',signup);
router.post('/api/v1/signin',signin);
router.post('/api/v1/googleLogin',GoogleLogin);
router.post('/api/v1/forgotPassword',forgotPassword);

export default router;