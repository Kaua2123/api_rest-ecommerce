import express from 'express';

import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/user', UserController.index); // exibição de usuários
router.get('/user/:id', UserController.show); // exibição de um usuário
router.post('/user/store', UserController.store); // criação de usuários
router.put('/user/update/:id', loginRequired, UserController.update); // atualização de usuários
router.delete('/user/delete/:id', loginRequired, UserController.delete); // deletar usuários

export default router;
