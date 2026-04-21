import React, { useState } from "react";
import { motion } from "motion/react";
import { Menu, X, User as UserIcon, LogIn } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChatAssistant } from "./Chat/ChatInterface";
import { useAuth } from "../contexts/AuthContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const navLinks = [
    { name: "Philosophy", path: "/philosophy" },
    { name: "Benefits", path: "/benefits" },
    { name: "Launch Event", path: "/" },
    { name: "Corporate", path: "/corporate" },
    { name: "Booking", path: "/booking" },
    { name: "Admin", path: "/admin" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md flex justify-between items-center px-6 md:px-12 h-16 border-b border-outline-variant/10">
      <Link to="/" className="text-lg font-bold tracking-tighter text-primary">Reset Pods</Link>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-tight">
        {navLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            className={`${isActive(link.path) ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"} transition-colors`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-6">
        {isAuthenticated ? (
          <button 
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-3 text-sm font-bold text-on-surface hover:text-primary transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary uppercase">{user?.name[0]}</div>
            {user?.name.split(' ')[0]}
          </button>
        ) : (
          <button 
            onClick={() => navigate("/booking")}
            className="flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
          >
            <LogIn size={18} />
            Member Access
          </button>
        )}
        <button 
          onClick={() => navigate("/booking")}
          className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20"
        >
          Join Launch
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-background border-b border-outline-variant/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`${isActive(link.path) ? "text-primary font-bold" : "text-on-surface-variant"} font-medium`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-outline-variant/10 my-2" />
          {isAuthenticated ? (
            <button 
              onClick={() => { navigate("/dashboard"); setIsOpen(false); }}
              className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-outline-variant/10"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black uppercase">{user?.name[0]}</div>
              <div className="text-left">
                <p className="text-sm font-bold text-on-surface">{user?.name}</p>
                <p className="text-[10px] uppercase font-black text-on-surface-variant/40">Launch Member</p>
              </div>
            </button>
          ) : (
             <button 
                onClick={() => { navigate("/booking"); setIsOpen(false); }}
                className="flex items-center justify-center gap-2 p-3 text-sm font-bold text-on-surface-variant"
              >
                <LogIn size={18} />
                Member Login
              </button>
          )}
          <button 
            onClick={() => { navigate("/booking"); setIsOpen(false); }}
            className="bg-primary text-white px-5 py-3 rounded-lg font-semibold w-full shadow-lg shadow-primary/20"
          >
            Join Launch
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full border-t border-outline-variant/15 bg-surface-container-low px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm font-black text-primary tracking-widest uppercase">Reset Pods</div>
        <div className="flex flex-wrap justify-center gap-8 items-center text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">
          <Link className="hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link>
          <Link className="hover:text-primary transition-colors" to="/terms">Terms of Service</Link>
          <Link className="hover:text-primary transition-colors" to="/corporate">Corporate Partnerships</Link>
          <Link className="hover:text-primary transition-colors" to="/sustainability">Sustainability</Link>
        </div>
        <div className="text-[10px] text-on-surface-variant/60 font-medium text-center md:text-right">
          © 2024 CORPORATE RECOVERY CO. ARCHITECTURAL REST FOR THE MODERN PROFESSIONAL.
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <ChatAssistant />
      <Footer />
    </div>
  );
};
