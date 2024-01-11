import express from 'express';

import loginRequired from '../middlewares/loginRequired';
import RequestController from '../controllers/RequestController';

const router = express.Router();

router.post('/request/store', loginRequired, RequestController.store);

export default router;
