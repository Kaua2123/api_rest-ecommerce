import express from 'express';

import ProductController from '../controllers/ProductController';
import admAuth from '../middlewares/admAuth';

const router = express.Router();

router.get('/product', ProductController.index); // exibição de produtos
router.get('/product/:id', ProductController.show); // exibição de um produto
router.post('/product/store', admAuth, ProductController.store); // criação de produtos
router.put('/product/update/:id', admAuth, ProductController.update); // atualização
router.delete('/product/delete/:id', admAuth, ProductController.delete); // deletando

export default router;
