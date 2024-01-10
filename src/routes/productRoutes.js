import express from 'express';

import ProductController from '../controllers/ProductController';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/product', ProductController.index); // exibição de produtos
router.get('/product/:id', ProductController.show); // exibição de um produto
router.post('/product/store', loginRequired, ProductController.store); // criação de produtos
router.put('/product/update/:id', loginRequired, ProductController.update); // atualização
router.delete('/product/delete/:id', loginRequired, ProductController.delete); // deletando

export default router;
