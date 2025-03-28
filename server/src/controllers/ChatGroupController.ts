import { Request, Response } from 'express';
import prisma from '../config/db.config.js';

class ChatGroupController {
  static async store(req: Request, res: Response) {
    try {
      const body = req.body;
      const user = req.user;
      await prisma.chatGroup.create({
        data: {
          title: body.title,
          passcode: body.passcode,
          user_id: user.id,
        },
      });
      return res
        .status(201)
        .json({ message: 'Chat group created sucessfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error is  ' + error.message });
    }
  }
}

export default ChatGroupController;
