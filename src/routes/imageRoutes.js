import express from 'express';
// import multer from 'multer';

import ImageController from '../controllers/ImageController';

const router = express.Router();

router.post('/image', ImageController.store);

export default router;
