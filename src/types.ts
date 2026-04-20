export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
  id: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  company?: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  status: BookingStatus;
  notes?: string;
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  totalBookings: number;
  loyaltyPoints: number;
  lastBookingDate?: string;
}

export interface Service {
  id: string;
  name: string;
  duration: number; // in minutes
  price: number;
  description: string;
}

export interface BusinessConfig {
  workingHours: {
    start: string; // "HH:mm"
    end: string;
  };
  slotDuration: number;
  bufferTime: number;
  twilioEnabled: boolean;
  googleCalendarEnabled: boolean;
}
