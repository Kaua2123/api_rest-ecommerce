import express from 'express';

import ProductController from '../controllers/ProductController';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.post('/product/store', loginRequired, ProductController.store);

export default router;
