import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';
import AuthMiddelware from '../middelwares/AuthMiddelware.js';
import ChatGroupController from '../controllers/ChatGroupController.js';
const router = Router();

// Auth Routes
router.post('/auth/login', AuthController.login);


// Chat Group Routes
router.post('/chat-group' , AuthMiddelware, ChatGroupController.store);
router.get('/chat-group/:id', AuthMiddelware, ChatGroupController.show);
router.get('/chat-group', AuthMiddelware, ChatGroupController.index);
router.put('/chat-group/:id', AuthMiddelware, ChatGroupController.update);
router.delete('/chat-group/:id', AuthMiddelware, ChatGroupController.destroy);

export default router;
