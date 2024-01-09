import express from 'express';

import TokenController from '../controllers/TokenController';

const router = express.Router();

router.post('/login', TokenController.store);

export default router;
