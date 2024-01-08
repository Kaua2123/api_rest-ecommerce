import { Router } from 'express';

import userController from '../controllers/userController';

const router = new Router();

router.get('/user', userController.index); // exibição de usuários
router.post('/user/store', userController.store); // criação de usuários

export default router;
