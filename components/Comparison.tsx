import React from 'react';
import { motion } from 'framer-motion';
import { FileWarning, Clock, ArrowRight, BrainCircuit, BarChart3, Binary } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="relative w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Transformation</h2>
        <p className="text-cyan-400 font-arabic">التحول الرقمي</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center relative">
        
        {/* The Past */}
        <motion.div 
          className="group relative p-8 rounded-3xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-800 rounded-lg">
                    <FileWarning className="w-8 h-8 text-gray-400 group-hover:text-red-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-300">The Problem</h3>
            </div>
            
            <ul className="space-y-4">
                <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-gray-400 group-hover:text-gray-200">Manual Entry & Errors (إدخال يدوي)</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-gray-400 group-hover:text-gray-200">Monthly Delays (تأخير شهري)</span>
                </li>
                <li className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-gray-400 group-hover:text-gray-200">Disorganized Reporting</span>
                </li>
            </ul>
          </div>
        </motion.div>

        {/* Connector Arrow (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 justify-center items-center">
            <motion.div 
                className="bg-cyan-500 rounded-full p-3 shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>
        </div>

        {/* The Future */}
        <motion.div 
          className="relative p-8 rounded-3xl border border-cyan-500/30 bg-blue-900/20 backdrop-blur-md glass-card-3d overflow-hidden"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Animated Matrix Background */}
          <div className="absolute inset-0 opacity-20 overflow-hidden">
             <div className="absolute top-0 left-0 text-[10px] text-cyan-500 font-mono leading-none animate-pulse">
                01010101010101<br/>10100101011101<br/>00110101000101
             </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-900/50 rounded-lg border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <BrainCircuit className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Solution</h3>
            </div>
            
            <ul className="space-y-4">
                <li className="flex items-center gap-3">
                    <Binary className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-100">Real-time Data (بيانات فورية)</span>
                </li>
                <li className="flex items-center gap-3">
                    <BrainCircuit className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-100">AI Precision (دقة الذكاء الاصطناعي)</span>
                </li>
                <li className="flex items-center gap-3">
                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-100">Centralized Dashboard</span>
                </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};