import { Booking, Service, BusinessConfig } from "./types";

export const SERVICES: Service[] = [
  {
    id: "precision-reset",
    name: "Precision Reset Pod™",
    duration: 10,
    price: 0,
    description: "Our signature 10-minute rapid intervention for cognitive recalibration."
  },
  {
    id: "operational-deep-dive",
    name: "Operational Deep Dive",
    duration: 45,
    price: 0,
    description: "Extended session targeting specific system failures and psychosocial triggers."
  }
];

export const BUSINESS_CONFIG: BusinessConfig = {
  workingHours: {
    start: "09:00",
    end: "18:00"
  },
  slotDuration: 15, // 10 min session + 5 min reset
  bufferTime: 5,
  twilioEnabled: true,
  googleCalendarEnabled: true
};

export const MOCK_BOOKINGS: Booking[] = [
  {
    id: "BK-7721",
    clientId: "CL-001",
    clientName: "Alexander Pierce",
    clientEmail: "alex@arup.com",
    clientPhone: "0400 123 456",
    company: "Arup",
    serviceId: "precision-reset",
    serviceName: "Precision Reset Pod™",
    date: "2024-05-11",
    time: "12:30 PM",
    status: "confirmed",
    createdAt: "2024-04-10T10:00:00Z"
  },
  {
    id: "BK-7722",
    clientId: "CL-002",
    clientName: "Sarah Jenkins",
    clientEmail: "sarah@kinetic.it",
    clientPhone: "0400 654 321",
    company: "Kinetic IT",
    serviceId: "precision-reset",
    serviceName: "Precision Reset Pod™",
    date: "2024-05-11",
    time: "01:15 PM",
    status: "pending",
    createdAt: "2024-04-11T09:00:00Z"
  }
];
