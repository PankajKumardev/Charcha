import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const AuthMiddelware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (authHeader === null || authHeader === undefined) {
    res.status(401).json({ status: 401, message: 'Token is required' });
  }

  const token = authHeader.split(' ')[1];

  //verify the token

  jwt.verify(token, process.env.JWT_SECRET, (err: any, user: any) => {
    if (err) {
      res.status(403).json({ status: 403, message: 'Invalid token' });
    }
    req.user = user as AuthUser;
    next();
  });
};

export default AuthMiddelware;
