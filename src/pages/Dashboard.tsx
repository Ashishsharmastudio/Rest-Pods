import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Settings, 
  User, 
  LogOut, 
  ChevronRight, 
  CheckCircle, 
  Clock3, 
  XCircle,
  Smartphone,
  MapPin
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { MOCK_BOOKINGS } from "../constants";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [activeBookings, setActiveBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    if (!user) return;

    const fetchBookings = async () => {
      try {
        console.log(`[Dashboard] Fetching operational activity for: ${user.email}`);
        const response = await fetch('/api/bookings/me');
        if (!response.ok) throw new Error('Failed to retrieve activity logs');
        const data = await response.json();
        console.log(`[Dashboard] Recovery history synchronized:`, data);
        setActiveBookings(data);
      } catch (err) {
        console.error(`[Dashboard] Synchronization error:`, err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface px-6">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
            <User size={40} />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-on-surface">Restricted Access</h1>
          <p className="text-on-surface-variant font-medium">Please login to manage your operational resets and activity logs.</p>
          <button 
            onClick={() => window.location.href = "/booking"}
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all"
          >
            Go to Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 md:py-24 px-6 md:px-16 min-h-screen bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary/40" />
              <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-secondary">Operational Dashboard</h2>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface">Precision Control.</h1>
            <p className="mt-4 text-on-surface-variant font-medium max-w-xl">Welcome back, <span className="text-on-surface font-bold">{user.name}</span>. Manage your recovery schedule beneath.</p>
          </div>
          <button 
            onClick={() => { logout(); window.location.href = "/"; }}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-outline-variant/10 rounded-xl text-xs font-black uppercase tracking-widest text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={16} />
            Terminate Session
          </button>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2rem] border border-outline-variant/10 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-outline-variant/5 bg-surface-container-low/30 flex justify-between items-center">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <CalendarIcon size={22} className="text-primary" />
                  Your Appointments
                </h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase">{activeBookings.length} Active</span>
              </div>
              
              <div className="divide-y divide-outline-variant/5">
                {activeBookings.length > 0 ? activeBookings.map((booking) => (
                  <div key={booking.id} className="p-8 hover:bg-surface-container-low/10 transition-colors group">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {booking.status === 'confirmed' ? <CheckCircle size={28} /> : <Clock3 size={28} />}
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Ref: {booking.id}</p>
                          <h4 className="text-xl font-black text-on-surface tracking-tighter">{booking.serviceName}</h4>
                          <div className="flex items-center gap-4 mt-2 text-on-surface-variant/60 text-xs font-medium">
                            <span className="flex items-center gap-1"><CalendarIcon size={14} /> {booking.date}</span>
                            <span className="flex items-center gap-1"><Clock size={14} /> {booking.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-5 py-2.5 bg-surface border border-outline-variant/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-outline-variant/5 transition-colors">Reschedule</button>
                        <button className="px-5 py-2.5 text-red-600 hover:bg-red-50 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors">Cancel</button>
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="p-12 text-center text-on-surface-variant/40 font-medium italic">
                    No active recovery protocols scheduled.
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-[2rem] border border-outline-variant/10 p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-8">System Activity Logs</h3>
              <div className="space-y-6">
                {[
                  { icon: <Smartphone size={16} />, text: "SMS Confirmation sent for Ref: BK-7721", date: "Yesterday, 10:30 AM" },
                  { icon: <CheckCircle size={16} />, text: "Operational Recalibration completed successfully", date: "Oct 12, 2024" },
                ].map((log, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 p-2 bg-surface rounded-lg text-primary">{log.icon}</div>
                    <div>
                      <p className="text-sm font-bold text-on-surface leading-tight">{log.text}</p>
                      <p className="text-[10px] font-black text-on-surface-variant/40 uppercase mt-1">{log.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-primary text-white rounded-[2rem] p-10 shadow-xl shadow-primary/20 relative overflow-hidden">
               <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
               <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-60 mb-8">Professional Profile</h3>
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center font-black text-2xl uppercase">{user.name[0]}</div>
                  <div>
                    <p className="text-2xl font-black tracking-tighter">{user.name}</p>
                    <p className="text-sm opacity-80 font-medium">Verified Practitioner</p>
                  </div>
               </div>
               <div className="space-y-4 pt-8 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase opacity-60">Loyalty Recalibration</span>
                    <span className="font-bold text-sm">Level 2</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-2/3" />
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-[2rem] border border-outline-variant/10 p-8 shadow-sm space-y-8">
              <h3 className="text-lg font-bold">Standard Hub</h3>
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-secondary shrink-0" />
                <div>
                   <p className="font-bold text-on-surface">80 Ann St Protocol</p>
                   <p className="text-xs text-on-surface-variant font-medium mt-1">Fortitude Valley, QLD</p>
                </div>
              </div>
              <button className="w-full py-4 border border-primary/20 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary/5 transition-colors">
                View Site Protocol
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
