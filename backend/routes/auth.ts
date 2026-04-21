import express from 'express';
import passport from 'passport';
import * as authController from '../controllers/authController';

const router = express.Router();

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  authController.googleAuthCallback
);

// @desc    Logout user
// @route   GET /auth/logout
router.get('/logout', authController.logout);

// @desc    Get current user
// @route   GET /auth/user
router.get('/user', authController.getCurrentUser);

export default router;
