import { Router } from 'express';

import userController from '../controllers/userController';

const router = new Router();

router.get('/user', userController.index); // exibição de usuários
router.get('/user/:id', userController.show);
router.post('/user/store', userController.store); // criação de usuários
router.put('/user/update/:id', userController.update);
router.delete('/user/delete/:id', userController.delete);

export default router;
