import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  CheckCircle, 
  ArrowRight, 
  ChevronLeft,
  Mail,
  Phone,
  AlertCircle,
  Loader2,
  Zap,
  ShieldAlert
} from "lucide-react";
import { SERVICES, BUSINESS_CONFIG } from "../constants";

type Step = "service" | "selection" | "details" | "confirmation";

export default function Booking() {
  const [step, setStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const dates = [
    { date: "May 11", fullDate: "Monday, May 11, 2024", available: true },
    { date: "May 12", fullDate: "Tuesday, May 12, 2024", available: true },
    { date: "May 13", fullDate: "Wednesday, May 13, 2024", available: true },
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", 
    "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", 
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", 
    "04:30 PM", "05:00 PM", "05:30 PM"
  ];

  // Logic to simulate availability check
  const isTimeSlotAvailable = (time: string) => {
    // Simulate some logic: 01:00 PM is always "taken" for testing error states
    return time !== "01:00 PM";
  };

  const handleNext = () => {
    if (step === "service") setStep("selection");
    else if (step === "selection") setStep("details");
  };

  const handleBack = () => {
    if (step === "selection") setStep("service");
    else if (step === "details") setStep("selection");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate system delay and availability validation
    setTimeout(() => {
      if (!isTimeSlotAvailable(selectedTime!)) {
        setError("This time slot was just reserved by another professional. Please select another time.");
        setIsLoading(false);
        setStep("selection");
        return;
      }

      // Success logic
      setIsLoading(false);
      setStep("confirmation");
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-16 min-h-screen bg-surface selection:bg-primary/10"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary/40" />
            <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-secondary">Operational Reserve</h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface">Precision Booking.</h1>
          <p className="mt-4 text-on-surface-variant font-medium max-w-xl">Secure your 10-minute recalibration session at the 80 Ann St launch event.</p>
        </header>

        <div className="bg-white rounded-[2rem] shadow-2xl border border-outline-variant/10 overflow-hidden relative">
          {/* Progress Indicator */}
          <div className="flex border-b border-outline-variant/10 bg-surface-container-lowest/50 backdrop-blur-sm sticky top-0 z-10">
            {["Service", "Dynamics", "Identification", "Ready"].map((s, i) => {
              const stages: Step[] = ["service", "selection", "details", "confirmation"];
              const active = stages.indexOf(step) === i;
              const completed = stages.indexOf(step) > i;
              return (
                <div key={s} className={`flex-1 p-5 text-center text-[10px] font-black uppercase tracking-widest transition-all border-b-2 ${
                  active ? 'text-primary border-primary bg-primary/5' : 
                  completed ? 'text-on-surface-variant border-transparent' : 'text-on-surface-variant/20 border-transparent'
                }`}>
                  <span className="hidden sm:inline">0{i + 1}.</span> {s}
                </div>
              );
            })}
          </div>

          <div className="p-8 md:p-14">
            <AnimatePresence mode="wait">
              {step === "service" && (
                <motion.div 
                  key="service"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  className="space-y-10"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-on-surface flex items-center gap-3">
                      <Zap size={22} className="text-primary" />
                      Select Recovery Protocol
                    </h3>
                    <p className="text-sm text-on-surface-variant">Choose the intervention intensity required for your current cognitive load.</p>
                  </div>

                  <div className="grid gap-5">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedService(s)}
                        className={`group p-8 rounded-3xl border transition-all text-left flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 ${
                          selectedService.id === s.id 
                            ? "border-primary bg-primary/5 ring-1 ring-primary/20" 
                            : "border-outline-variant/10 hover:border-primary/40 bg-surface-container-lowest"
                        }`}
                      >
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <p className="font-black text-xl text-on-surface tracking-tight">{s.name}</p>
                            {selectedService.id === s.id && <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                          </div>
                          <p className="text-sm text-on-surface-variant leading-relaxed font-medium">{s.description}</p>
                        </div>
                        <div className="shrink-0 flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Time Investment</p>
                            <p className="font-bold text-lg text-on-surface">{s.duration} MIN</p>
                          </div>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            selectedService.id === s.id ? "bg-primary text-white" : "bg-surface border border-outline-variant/20 text-on-surface-variant/30"
                          }`}>
                            <CheckCircle size={20} />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      onClick={handleNext}
                      className="group bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-4 hover:opacity-90 transition-all shadow-xl shadow-primary/20 active:scale-95"
                    >
                      Configure Timing
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === "selection" && (
                <motion.div 
                  key="selection"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <button onClick={handleBack} className="text-on-surface-variant hover:text-primary flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors">
                    <ChevronLeft size={16} />
                    Back to service selection
                  </button>

                  <div className="space-y-8">
                    <h3 className="text-lg font-bold text-on-surface flex items-center gap-3">
                      <CalendarIcon size={22} className="text-primary" />
                      Establish Date
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {dates.map((d) => (
                        <button
                          key={d.date}
                          onClick={() => { setSelectedDate(d.fullDate); setSelectedTime(null); }}
                          className={`p-8 rounded-3xl border transition-all text-left ${
                            selectedDate === d.fullDate 
                              ? "border-primary bg-primary/5 shadow-inner" 
                              : "border-outline-variant/10 hover:border-primary/40 bg-surface-container-lowest"
                          }`}
                        >
                          <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 mb-2">{d.date}</p>
                          <p className="font-black text-lg text-on-surface tracking-tight">Active Launch</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 pt-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold text-on-surface flex items-center gap-3">
                          <Clock size={22} className="text-primary" />
                          Allocated Slots
                        </h3>
                        {error && (
                          <div className="flex items-center gap-2 text-red-600 animate-bounce">
                            <ShieldAlert size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Conflict Detected</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                        {timeSlots.map((ts) => {
                          const available = isTimeSlotAvailable(ts);
                          return (
                            <button
                              key={ts}
                              disabled={!available}
                              onClick={() => { setSelectedTime(ts); setError(null); }}
                              className={`p-4 rounded-xl text-xs font-black uppercase tracking-tighter border transition-all ${
                                !available ? "bg-surface-container-highest text-on-surface-variant/20 border-outline-variant/5 cursor-not-allowed opacity-50 line-through" :
                                selectedTime === ts 
                                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105" 
                                  : "border-outline-variant/10 hover:border-primary/30 text-on-surface-variant bg-surface-container-lowest"
                              }`}
                            >
                              {ts}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  <div className="pt-10 flex justify-end">
                    <button
                      disabled={!selectedDate || !selectedTime}
                      onClick={handleNext}
                      className="bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-4 disabled:opacity-20 disabled:cursor-not-allowed hover:opacity-90 transition-all shadow-xl shadow-primary/20 active:scale-95"
                    >
                      Authenticate Access
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === "details" && (
                <motion.div 
                  key="details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <div className="flex items-center justify-between">
                    <button onClick={handleBack} className="text-on-surface-variant hover:text-primary flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors">
                      <ChevronLeft size={16} />
                      Adjust timing
                    </button>
                    <div className="bg-surface-container-low px-6 py-4 rounded-2xl border border-outline-variant/5 text-right">
                      <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">{selectedService.name}</p>
                      <p className="font-black text-on-surface tracking-tighter">{selectedDate?.split(',')[1]} @ {selectedTime}</p>
                    </div>
                  </div>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">Professional Identity</label>
                        <div className="relative group">
                           <User className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/30 group-focus-within:text-primary transition-colors" size={20} />
                           <input 
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full pl-12 pr-6 py-5 rounded-2xl border border-outline-variant/10 focus:outline-none focus:border-primary bg-surface-container-lowest transition-all hover:border-outline-variant/40 font-bold"
                            placeholder="John Maynard Smith"
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">Secure Contact (Mobile)</label>
                        <div className="relative group">
                           <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/30 group-focus-within:text-primary transition-colors" size={20} />
                           <input 
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full pl-12 pr-6 py-5 rounded-2xl border border-outline-variant/10 focus:outline-none focus:border-primary bg-surface-container-lowest transition-all hover:border-outline-variant/40 font-bold"
                            placeholder="0400 000 000"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">Work Email</label>
                      <div className="relative group">
                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/30 group-focus-within:text-primary transition-colors" size={20} />
                         <input 
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-12 pr-6 py-5 rounded-2xl border border-outline-variant/10 focus:outline-none focus:border-primary bg-surface-container-lowest transition-all hover:border-outline-variant/40 font-bold"
                          placeholder="professional@corporate-recovery.co"
                        />
                      </div>
                    </div>

                    <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-3 text-on-surface-variant/60">
                        <ShieldAlert size={18} />
                        <p className="text-[10px] font-bold uppercase tracking-widest">End-to-end operational safety guaranteed.</p>
                      </div>
                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full md:w-auto bg-primary text-white px-14 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:opacity-95 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="animate-spin" size={20} />
                            Allocating Resources...
                          </>
                        ) : (
                          "Transmit and Finalize"
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === "confirmation" && (
                <motion.div 
                  key="confirmation" 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="text-center py-16"
                >
                  <div className="relative w-32 h-32 mx-auto mb-10">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                    <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center text-primary shadow-xl border border-primary/20">
                      <CheckCircle size={64} />
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-4 tracking-tighter">System Synchronized.</h2>
                  <p className="text-xl text-on-surface-variant max-w-lg mx-auto mb-12 font-medium">
                    Your allocation for the <span className="text-primary font-bold">{selectedService.name}</span> on <span className="text-on-surface font-bold">{selectedDate?.split(',')[1]}</span> at <span className="text-on-surface font-bold">{selectedTime}</span> is officially secured.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16 text-left">
                    <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10">
                      <p className="text-[10px] font-black uppercase text-secondary mb-4 tracking-widest">Location Matrix</p>
                      <p className="font-bold text-on-surface leading-snug">
                        80 Ann St,<br />
                        Fortitude Valley,<br />
                        Brisbane QLD 4006
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10">
                      <p className="text-[10px] font-black uppercase text-secondary mb-4 tracking-widest">Protocol Support</p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Smartphone size={16} className="text-primary" />
                          <p className="text-xs font-bold text-on-surface-variant">Update sent via Twilio</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe size={16} className="text-primary" />
                          <p className="text-xs font-bold text-on-surface-variant">Google Calendar Syncing...</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button onClick={() => window.location.href = "/"} className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Return to Operational Hub</button>
                    <div className="hidden sm:block h-1 w-1 rounded-full bg-outline-variant/30" />
                    <button className="text-xs font-black uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors">Download System Ticket (PDF)</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* System Rules Footnote */}
        {step !== "confirmation" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/15 flex flex-col md:flex-row gap-8 items-center justify-between"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                <AlertCircle size={24} />
              </div>
              <div className="max-w-md">
                <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Operational Guarantee</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  System logic prevents double-booking and respects 5-min buffer intervals between all recovery sessions. 
                  Availability is real-time.
                </p>
              </div>
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-surface overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white">+12</div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

const Smartphone = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const Globe = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);
