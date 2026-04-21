import { Request, Response, NextFunction } from 'express';

export const googleAuth = (req: Request, res: Response) => {
  // Logic handled by passport middleware in routes
};

export const googleAuthCallback = (req: Request, res: Response) => {
  res.redirect('/dashboard');
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
};

export const getCurrentUser = (req: Request, res: Response) => {
  res.json(req.user || null);
};
