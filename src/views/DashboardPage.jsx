
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, ChevronLeft, ChevronRight, Package, Megaphone, BarChart3, FileText } from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();

  const modules = [
    {
      id: 'stock',
      title: 'Stock',
      icon: Package,
      position: { top: '45%', left: '15%' }
    },
    {
      id: 'promo',
      title: 'Promo',
      icon: Megaphone,
      position: { top: '65%', left: '35%' }
    },
    {
      id: 'sales',
      title: 'Sales',
      icon: BarChart3,
      position: { top: '65%', right: '35%' }
    },
    {
      id: 'report',
      title: 'Report',
      icon: FileText,
      position: { top: '45%', right: '15%' }
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen gradient-bg-main relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.header 
        className="relative z-10 flex justify-between items-center p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
            <span className="text-red-500 font-bold text-xl">SD</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <motion.button
            onClick={handleLogout}
            className="text-white hover:text-white/80 transition-colors duration-200 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            log out
          </motion.button>
          
          <motion.button
            className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <User className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.header>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 min-h-[calc(100vh-120px)]">
        
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl font-bold text-white mb-4 tracking-wide">
            SD TECHNOLOGY
          </h1>
          <p className="text-xl text-white/90">
            Efficiency, Control and Quality
          </p>
        </motion.div>

        {/* Navigation arrows */}
        <motion.button
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Module icons */}
        <div className="relative w-full max-w-4xl h-96">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <motion.div
                key={module.id}
                className="absolute"
                style={module.position}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.button
                  className="flex flex-col items-center space-y-3 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-20 h-20 bg-black/80 rounded-2xl flex items-center justify-center group-hover:bg-black transition-all duration-200 shadow-2xl">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-white font-medium text-lg group-hover:text-white/80 transition-colors duration-200">
                    {module.title}
                  </span>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
