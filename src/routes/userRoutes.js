import express from 'express';

import UserController from '../controllers/UserController';

const router = express.Router();

router.get('/user', UserController.index); // exibição de usuários
router.get('/user/:id', UserController.show); // exibição de um usuário
router.post('/user/store', UserController.store); // criação de usuários
router.put('/user/update/:id', UserController.update); // atualização de usuários
router.delete('/user/delete/:id', UserController.delete); // deletar usuários

export default router;
