import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import LaunchEvent from "./pages/LaunchEvent";
import Philosophy from "./pages/Philosophy";
import Benefits from "./pages/Benefits";
import Corporate from "./pages/Corporate";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { AnimatePresence } from "motion/react";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LaunchEvent />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/book" element={<Booking />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </AuthProvider>
  );
}
