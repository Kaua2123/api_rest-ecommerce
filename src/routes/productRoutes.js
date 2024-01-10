import express from 'express';

import ProductController from '../controllers/ProductController';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/product', ProductController.index);
router.get('/product/:id', ProductController.show);
router.post('/product/store', loginRequired, ProductController.store);
router.put('/product/update/:id', loginRequired, ProductController.update);
router.delete('/product/delete/:id', loginRequired, ProductController.delete);

export default router;
