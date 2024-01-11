import express from 'express';

import loginRequired from '../middlewares/loginRequired';
import RequestController from '../controllers/RequestController';

const router = express.Router();

router.get('/request', loginRequired, RequestController.index);
router.get('/request/:id', loginRequired, RequestController.show);
router.post('/request/store', loginRequired, RequestController.store);
router.put('/request/update/:id', loginRequired, RequestController.update);

export default router;
