import { Request, Response } from 'express';
import { Booking } from '../models/Booking';

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getMyBookings = async (req: any, res: Response) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const createBooking = async (req: any, res: Response) => {
  try {
    const bookingData = {
      ...req.body,
      userId: req.user?._id || null,
      status: 'confirmed'
    };

    const booking = await Booking.create(bookingData);
    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};
