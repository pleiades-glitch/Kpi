import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Zap, Star, QrCode } from 'lucide-react';

export const AddedValue: React.FC = () => {
  return (
    <section className="py-20 flex flex-col items-center">
       <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">Added Value</h2>
        <p className="text-cyan-400 font-arabic text-xl">القيمة المضافة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mb-20 w-full max-w-5xl">
        
        {/* Sphere 1 */}
        <motion.div 
            className="flex flex-col items-center text-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-900 flex items-center justify-center shadow-[0_0_40px_rgba(74,222,128,0.4)] border border-green-300/30 mb-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 blur-sm" />
                <Timer className="w-12 h-12 text-white relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-white">Time Saving</h3>
            <p className="text-green-400 font-arabic">توفير الوقت</p>
        </motion.div>

        {/* Sphere 2 */}
        <motion.div 
            className="flex flex-col items-center text-center"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-900 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.4)] border border-cyan-300/30 mb-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 blur-sm" />
                <Zap className="w-16 h-16 text-white relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Faster Response</h3>
            <p className="text-cyan-400 font-arabic">دقة القرار</p>
        </motion.div>

        {/* Sphere 3 */}
        <motion.div 
            className="flex flex-col items-center text-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-900 flex items-center justify-center shadow-[0_0_40px_rgba(250,204,21,0.4)] border border-yellow-300/30 mb-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 blur-sm" />
                <Star className="w-12 h-12 text-white relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-white">Higher Quality</h3>
            <p className="text-yellow-400 font-arabic">رضا الموظفين</p>
        </motion.div>

      </div>

      {/* QR Code Action */}
      <motion.div 
        className="glass-panel p-6 rounded-2xl flex flex-col items-center border border-cyan-500/50 shadow-2xl"
        whileHover={{ scale: 1.05 }}
      >
        <div className="bg-white p-2 rounded-lg mb-4">
            <QrCode className="w-24 h-24 text-black" />
        </div>
        <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">Scan to Access</p>
        <a href="https://vblvhtyl.manus.space/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 underline font-bold">
            vblvhtyl.manus.space
        </a>
      </motion.div>
    </section>
  );
};