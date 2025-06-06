
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import WelcomePage from '@/views/WelcomePage';
import LoginPage from '@/views/LoginPage';
import RegisterPage from '@/views/RegisterPage';
import DashboardPage from '@/views/DashboardPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-poppins">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </AnimatePresence>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
