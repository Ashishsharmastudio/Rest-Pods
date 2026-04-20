import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Users, 
  Calendar as CalendarIcon, 
  BarChart3, 
  Settings, 
  Search, 
  Filter, 
  MoreHorizontal,
  TrendingUp,
  Activity,
  AlertTriangle,
  Clock,
  LayoutDashboard,
  ShieldCheck,
  CheckCircle,
  Mail,
  Zap,
  Phone,
  Database,
  CloudLightning,
  Smartphone,
  Globe
} from "lucide-react";
import { MOCK_BOOKINGS, SERVICES, BUSINESS_CONFIG } from "../constants";

type AdminTab = "overview" | "appointments" | "calendar" | "clients" | "messaging" | "automation" | "settings";

export default function Admin() {
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={18} /> },
    { id: "calendar", label: "Calendar", icon: <CalendarIcon size={18} /> },
    { id: "appointments", label: "Appointments", icon: <Clock size={18} /> },
    { id: "clients", label: "Clients", icon: <Users size={18} /> },
    { id: "messaging", label: "Messages", icon: <Mail size={18} /> },
    { id: "automation", label: "Automation", icon: <CloudLightning size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col">
      {/* Admin Sidebar/Topnav */}
      <nav className="bg-white border-b border-outline-variant/10 px-6 md:px-12 h-20 flex items-center justify-between sticky top-16 z-40">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-bold text-sm whitespace-nowrap ${
                activeTab === tab.id 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-on-surface-variant hover:bg-surface"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs font-black uppercase text-secondary">System Admin</p>
            <p className="text-sm font-bold text-on-surface">Bradley Stiles</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black">BS</div>
        </div>
      </nav>

      <main className="flex-grow p-6 md:p-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && <OverviewTab />}
            {activeTab === "calendar" && <CalendarTab />}
            {activeTab === "appointments" && <AppointmentsTab />}
            {activeTab === "clients" && <ClientsTab />}
            {activeTab === "messaging" && <MessagingTab />}
            {activeTab === "automation" && <AutomationTab />}
            {activeTab === "settings" && <SettingsTab />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

const OverviewTab = () => {
  const stats = [
    { label: "Daily Throughput", value: "48", icon: <Zap className="text-yellow-600" />, trend: "+8%" },
    { label: "Active Professionals", value: "112", icon: <Users className="text-blue-600" />, trend: "+12%" },
    { label: "State Integrity", value: "99.8%", icon: <ShieldCheck className="text-green-600" />, trend: "Optimum" },
    { label: "Burnout Intercepts", value: "24", icon: <AlertTriangle className="text-orange-600" />, trend: "+5" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-outline-variant/5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-surface rounded-2xl">{s.icon}</div>
              <p className="text-[10px] font-black uppercase tracking-widest text-green-600">{s.trend}</p>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant/60 mb-1">{s.label}</p>
            <h3 className="text-4xl font-black text-on-surface tracking-tighter">{s.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-outline-variant/10 shadow-sm">
            <h3 className="text-xl font-bold text-on-surface mb-8">System Activity</h3>
            <div className="h-[240px] flex items-end gap-3 justify-between px-4">
              {[45, 60, 40, 80, 50, 90, 70, 85, 65, 95, 75, 40].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-primary/20 hover:bg-primary rounded-t-lg transition-all cursor-pointer group relative"
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-white p-2 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}% Load
                    </div>
                  </div>
                  <p className="text-[8px] font-black uppercase mt-3 text-on-surface-variant/40">{i+8}h</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-outline-variant/10 shadow-sm">
          <h3 className="text-xl font-bold text-on-surface mb-6">Live Feed</h3>
          <div className="space-y-6">
            {[
              { msg: "New booking confirmed for Alexander Pierce", time: "2m ago", icon: <CheckCircle className="text-green-500" /> },
              { msg: "System rule: Double booking prevented at 1PM", time: "15m ago", icon: <AlertTriangle className="text-orange-500" /> },
              { msg: "Twilio SMS sent to Sarah Jenkins", time: "22m ago", icon: <Smartphone className="text-blue-500" /> },
              { msg: "Loyalty reward triggered for Michael Chen", time: "1h ago", icon: <TrendingUp className="text-primary" /> },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 pt-1">{item.icon}</div>
                <div>
                  <p className="text-sm font-bold text-on-surface leading-snug">{item.msg}</p>
                  <p className="text-[10px] font-black text-on-surface-variant/40 uppercase mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CalendarTab = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = Array.from({ length: 10 }, (_, i) => `${i + 8}:00`);

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-8 border border-outline-variant/10 shadow-sm overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-on-surface">Allocated Schedule</h3>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-surface rounded-xl text-xs font-bold border border-outline-variant/10">Day</button>
          <button className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-md shadow-primary/20">Week</button>
          <button className="px-4 py-2 bg-surface rounded-xl text-xs font-bold border border-outline-variant/10">Month</button>
        </div>
      </div>
      
      <div className="grid grid-cols-[80px_1fr] border-l border-t border-outline-variant/5">
        <div className="bg-surface/30">
          <div className="h-14 border-b border-r border-outline-variant/5"></div>
          {hours.map(h => (
            <div key={h} className="h-20 border-b border-r border-outline-variant/5 px-2 py-4 text-[10px] font-black text-on-surface-variant/40 text-right uppercase tracking-tighter">
              {h}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days.map(d => (
            <div key={d} className="h-14 border-b border-r border-outline-variant/5 flex items-center justify-center font-black text-[10px] uppercase tracking-widest text-on-surface-variant/60 bg-surface/30">
              {d}
            </div>
          ))}
          {Array.from({ length: 70 }).map((_, i) => (
            <div key={i} className="h-20 border-b border-r border-outline-variant/5 relative group">
              {i === 11 && (
                <div className="absolute inset-1 bg-primary/10 border-l-4 border-primary p-2 rounded-lg z-10">
                  <p className="text-[10px] font-black text-primary uppercase leading-tight">Alexander Pierce</p>
                  <p className="text-[8px] font-bold text-primary/60 uppercase">Precision Reset</p>
                </div>
              )}
              {i === 24 && (
                <div className="absolute inset-1 bg-secondary/10 border-l-4 border-secondary p-2 rounded-lg z-10">
                  <p className="text-[10px] font-black text-secondary uppercase leading-tight">Sarah Jenkins</p>
                  <p className="text-[8px] font-bold text-secondary/60 uppercase">Deep Dive</p>
                </div>
              )}
              <button className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MessagingTab = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-3 gap-12">
      <div className="bg-white rounded-3xl border border-outline-variant/10 shadow-sm overflow-hidden flex flex-col h-[700px]">
        <div className="p-6 border-b border-outline-variant/10 bg-surface/10">
          <h3 className="text-lg font-bold text-on-surface mb-4">Transmission Logs</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={16} />
            <input type="text" placeholder="Search conversations..." className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-outline-variant/10 text-sm focus:outline-none focus:border-primary shadow-sm" />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {[
            { name: "Alexander Pierce", lastMsg: "Rescheduling confirmed for May 11", time: "2m ago", active: true },
            { name: "Sarah Jenkins", lastMsg: "Which day works better for your session?", time: "15m ago", active: false },
            { name: "Michael Chen", lastMsg: "I understand. Navigating political structures...", time: "1h ago", active: false },
            { name: "Emma Watson", lastMsg: "Your reset is confirmed. See you soon.", time: "3h ago", active: false },
          ].map((chat, i) => (
            <div key={i} className={`p-6 border-b border-outline-variant/5 cursor-pointer hover:bg-surface transition-colors flex gap-4 ${chat.active ? 'bg-primary/5 border-l-4 border-primary' : ''}`}>
              <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center font-black text-primary uppercase shadow-sm">
                {chat.name[0]}
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-bold text-sm text-on-surface truncate">{chat.name}</p>
                  <p className="text-[10px] font-black text-on-surface-variant/40 uppercase">{chat.time}</p>
                </div>
                <p className="text-xs text-on-surface-variant truncate font-medium">{chat.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2 bg-white rounded-3xl border border-outline-variant/10 shadow-sm overflow-hidden flex flex-col h-[700px]">
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black uppercase shadow-inner">AP</div>
            <div>
              <h4 className="font-bold text-on-surface">Alexander Pierce</h4>
              <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">Active Link Established</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-outline-variant/10 rounded-xl hover:bg-surface"><Phone size={18} /></button>
            <button className="p-2 border border-outline-variant/10 rounded-xl hover:bg-surface"><MoreHorizontal size={18} /></button>
          </div>
        </div>
        <div className="flex-grow p-8 overflow-y-auto space-y-6 bg-surface-container-low/20">
          <div className="flex flex-col items-start max-w-[80%]">
            <div className="p-4 bg-white border border-outline-variant/10 rounded-2xl rounded-tl-none text-sm text-on-surface font-medium shadow-sm">
              I'm the Reset Pods assistant. I can help you understand the intervention protocols or help you schedule a 10-minute reset.
            </div>
            <span className="text-[10px] font-black text-on-surface-variant/40 uppercase mt-2">Assistant • 10:15 AM</span>
          </div>
          <div className="flex flex-col items-end self-end max-w-[80%]">
            <div className="p-4 bg-primary text-white rounded-2xl rounded-tr-none text-sm font-medium shadow-md">
              I need to reschedule my Monday appointment.
            </div>
            <span className="text-[10px] font-black text-on-surface-variant/40 uppercase mt-2">User • 10:16 AM</span>
          </div>
          <div className="flex flex-col items-start max-w-[80%]">
            <div className="p-4 bg-white border border-outline-variant/10 rounded-2xl rounded-tl-none text-sm text-on-surface font-medium shadow-sm">
              Understood. I've initiated the rescheduling protocol for your appointment. Which day works better for your next reset?
            </div>
            <span className="text-[10px] font-black text-on-surface-variant/40 uppercase mt-2">Assistant • 10:16 AM</span>
          </div>
        </div>
        <div className="p-6 border-t border-outline-variant/10">
          <div className="flex gap-3">
             <input type="text" placeholder="Send operational update..." className="flex-grow px-6 py-4 rounded-2xl border border-outline-variant/10 focus:outline-none focus:border-primary bg-surface transition-all font-bold" />
             <button className="bg-primary text-white p-4 rounded-2xl shadow-lg shadow-primary/20 active:scale-95"><Zap size={20} /></button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AppointmentsTab = () => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h3 className="text-2xl font-black tracking-tighter text-on-surface">Manage Appointments</h3>
          <p className="text-on-surface-variant text-sm font-medium">Single source of truth for all resource states.</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={16} />
            <input type="text" placeholder="Search appointments..." className="pl-10 pr-4 py-2 bg-white rounded-xl border border-outline-variant/20 text-sm focus:outline-none focus:border-primary shadow-sm" />
          </div>
          <button className="p-2 bg-white border border-outline-variant/20 rounded-xl hover:bg-surface"><Filter size={18} /></button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-outline-variant/10 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface/50 border-b border-outline-variant/10">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Reference</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Client</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Service</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Time / Date</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Status</th>
                <th className="px-8 py-5"></th>
              </tr>
            </thead>
            <tbody>
              {MOCK_BOOKINGS.map((b) => (
                <tr key={b.id} className="border-b border-outline-variant/5 hover:bg-surface transition-colors">
                  <td className="px-8 py-6 font-mono text-xs font-bold text-secondary">{b.id}</td>
                  <td className="px-8 py-6">
                    <p className="font-bold text-on-surface">{b.clientName}</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">{b.clientEmail}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-bold text-on-surface-variant bg-surface px-2 py-1 rounded-md">{b.serviceName}</span>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-on-surface">{b.time}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-black">{b.date}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      b.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-2">
                       <button className="text-xs font-bold text-primary hover:bg-primary/5 px-3 py-1 rounded-lg">Reschedule</button>
                       <button className="text-xs font-bold text-red-600 hover:bg-red-50 px-3 py-1 rounded-lg">Cancel</button>
                       <button className="p-1 hover:bg-surface rounded-md"><MoreHorizontal size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

const ClientsTab = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-2xl font-black tracking-tighter text-on-surface">Client Directory</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Alexander Pierce", company: "Arup", email: "alex@arup.com", points: 120, bookings: 5 },
          { name: "Sarah Jenkins", company: "Kinetic IT", email: "sarah@kinetic.it", points: 45, bookings: 2 },
          { name: "Michael Chen", company: "Deloitte", email: "m.chen@deloitte.com", points: 0, bookings: 1 },
        ].map((c, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-outline-variant/10 shadow-sm flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-primary font-black uppercase">{c.name[0]}</div>
              <div>
                <p className="font-bold text-on-surface">{c.name}</p>
                <p className="text-[10px] text-on-surface-variant uppercase font-black tracking-widest">{c.company}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <Mail size={16} /> {c.email}
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/10">
                <div>
                  <p className="text-[10px] font-black uppercase text-on-surface-variant/40 mb-1">Bookings</p>
                  <p className="font-bold text-on-surface">{c.bookings}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-on-surface-variant/40 mb-1">Loyalty</p>
                  <p className="font-bold text-primary">{c.points} pts</p>
                </div>
              </div>
            </div>
            <button className="mt-2 w-full py-3 bg-surface rounded-xl text-xs font-bold hover:bg-surface-container-low transition-colors">View Profile</button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const AutomationTab = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div>
        <h3 className="text-2xl font-black tracking-tighter text-on-surface">Automation & Loyalty</h3>
        <p className="text-on-surface-variant text-sm font-medium">Trigger systemic recalibrations based on logic rules.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-outline-variant/10 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary"><TrendingUp size={24} /></div>
            <h4 className="text-lg font-bold">Loyalty Rule: Retention High</h4>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Automatically trigger a "Complimentary Deep Dive" notification when a client completes 5 Precision Reset sessions.
          </p>
          <div className="p-4 bg-surface rounded-2xl flex justify-between items-center">
            <span className="text-xs font-bold uppercase">Status</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase">Active</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-outline-variant/10 shadow-sm space-y-6 opacity-60">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-surface rounded-2xl text-on-surface-variant"><Zap size={24} /></div>
            <h4 className="text-lg font-bold">Workflow: Post-Reset Intake</h4>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Send structured n8n data payload 15 minutes after session completion to extract psychosocial impact notes.
          </p>
          <div className="p-4 bg-surface rounded-2xl flex justify-between items-center">
            <span className="text-xs font-bold uppercase">Status</span>
            <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant/40 rounded-full text-[10px] font-black uppercase">Disabled</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SettingsTab = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Business Settings */}
        <div className="space-y-8">
          <h3 className="text-2xl font-black tracking-tighter text-on-surface">System Configuration</h3>
          <div className="bg-white p-8 rounded-3xl border border-outline-variant/10 shadow-sm space-y-8">
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-on-surface-variant">Functional Hours</h4>
              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant/60 uppercase">Start Time</label>
                  <input type="time" defaultValue={BUSINESS_CONFIG.workingHours.start} className="w-full p-3 rounded-xl bg-surface border border-outline-variant/10 font-bold" />
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant/60 uppercase">End Time</label>
                  <input type="time" defaultValue={BUSINESS_CONFIG.workingHours.end} className="w-full p-3 rounded-xl bg-surface border border-outline-variant/10 font-bold" />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-outline-variant/10">
              <h4 className="text-sm font-black uppercase tracking-widest text-on-surface-variant">Slot Management</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant/60 uppercase">Duration (Min)</label>
                  <input type="number" defaultValue={BUSINESS_CONFIG.slotDuration} className="w-full p-3 rounded-xl bg-surface border border-outline-variant/10 font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant/60 uppercase">Buffer (Min)</label>
                  <input type="number" defaultValue={BUSINESS_CONFIG.bufferTime} className="w-full p-3 rounded-xl bg-surface border border-outline-variant/10 font-bold" />
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20">Update Global Rules</button>
          </div>
        </div>

        {/* Integration Settings */}
        <div className="space-y-8">
          <h3 className="text-2xl font-black tracking-tighter text-on-surface">Integrated stack</h3>
          <div className="space-y-6">
            {[
              { id: "twilio", name: "Twilio Connectivity", desc: "SMS alerts and number obfuscation for proxy sessions", icon: <Smartphone />, status: "Active" },
              { id: "gcal", name: "Google Calendar Bridge", desc: "Dual-sync bridge for availability and resource blocking", icon: <CalendarIcon />, status: "Active" },
              { id: "db", name: "ProstgreSQL / pgAdmin", desc: "Relational database mirroring for complex schema reporting", icon: <Database />, status: "Online" },
              { id: "n8n", name: "n8n Workflow Engine", desc: "Event-based automation hooks for loyalty and extraction", icon: <Globe />, status: "Online" },
            ].map((integ) => (
              <div key={integ.id} className="bg-white p-6 rounded-3xl border border-outline-variant/10 shadow-sm flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-surface rounded-2xl group-hover:bg-primary/5 transition-colors text-primary">{integ.icon}</div>
                  <div>
                    <h4 className="font-bold text-on-surface">{integ.name}</h4>
                    <p className="text-xs text-on-surface-variant line-clamp-1">{integ.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">{integ.status}</span>
                  <button className="block text-[10px] font-bold text-primary uppercase mt-1 hover:underline">Config</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
