import express from 'express';

import UserProductController from '../controllers/UserProductController';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/userProduct', loginRequired, UserProductController.index);

export default router;
