import express from 'express';

import ProductController from '../controllers/ProductController';

const router = express.Router();

router.get('/product', ProductController.index); // exibição de produtos
router.get('/product/:id', ProductController.show); // exibição de um produto
router.post('/product/store', ProductController.store); // criação de produtos
router.put('/product/update/:id', ProductController.update); // atualização
router.delete('/product/delete/:id', ProductController.delete); // deletando

export default router;
