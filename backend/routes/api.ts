import express from 'express';
import * as bookingController from '../controllers/bookingController';
import * as chatController from '../controllers/chatController';

const router = express.Router();

const ensureAuth = (req: any, res: any, next: any) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
};

// Booking Routes
router.get('/bookings', bookingController.getAllBookings);
router.get('/bookings/me', ensureAuth, bookingController.getMyBookings);
router.post('/bookings', bookingController.createBooking);

// Chat Routes
router.post('/chat', chatController.handleChat);

export default router;
