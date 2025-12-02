import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Building2, User } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-10 flex flex-col items-center justify-center text-center min-h-[80vh]">
      
      {/* Background Hologram effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] border border-cyan-500/20 rounded-full blur-3xl -z-10 bg-cyan-900/10" />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full glass-panel border-cyan-500/30">
            <Building2 className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-sm font-medium tracking-wide text-cyan-100 font-arabic">Ministry of Health | Jal'an Bani Bu Ali Hospital</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] mb-2">
          DIGITAL KPI
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-cyan-500 mb-6 drop-shadow-lg">
          PLATFORM
        </h2>
        
        <h3 className="text-2xl md:text-3xl font-arabic text-gray-300 font-light mb-8">
          نظام المؤشرات الرقمي
        </h3>

        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed font-arabic">
          A revolutionary system for Improving Performance Measurement.
          <br />
          نظام لتحسين قياس الأداء
        </p>

        <motion.div 
            className="flex items-center justify-center gap-4 glass-panel px-6 py-3 rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
        >
            <User className="w-10 h-10 text-cyan-400 bg-cyan-900/30 p-2 rounded-full" />
            <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Author / إعداد</p>
                <p className="text-sm font-bold text-white font-arabic">Thuraya Said Hamad Al-Mata'ni</p>
            </div>
        </motion.div>
      </motion.div>

      {/* Floating 3D Pulse Icon */}
      <motion.div
        className="absolute top-1/4 right-[10%] hidden lg:block opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
         <Activity size={200} className="text-cyan-500" strokeWidth={0.5} />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-cyan-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};