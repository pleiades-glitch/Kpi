import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Bot, Gavel, BatteryCharging, Search } from 'lucide-react';

export const Objectives: React.FC = () => {
  const items = [
    { 
        icon: <Monitor />, 
        title: "Digital Interface", 
        ar: "واجهة رقمية",
        color: "text-blue-400",
        pos: "top-[-80px] left-1/2 -translate-x-1/2" 
    },
    { 
        icon: <Bot />, 
        title: "AI Integration", 
        ar: "تكامل الذكاء الاصطناعي",
        color: "text-purple-400",
        pos: "top-[25%] right-[-60px]" 
    },
    { 
        icon: <Gavel />, 
        title: "Decision Support", 
        ar: "دعم القرار",
        color: "text-emerald-400",
        pos: "bottom-[10%] right-[-40px]" 
    },
    { 
        icon: <BatteryCharging />, 
        title: "Reduce Workload", 
        ar: "تقليل عبء العمل",
        color: "text-yellow-400",
        pos: "bottom-[10%] left-[-40px]" 
    },
    { 
        icon: <Search />, 
        title: "Transparency", 
        ar: "الشفافية",
        color: "text-pink-400",
        pos: "top-[25%] left-[-60px]" 
    },
  ];

  return (
    <section className="py-10 flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">Core Objectives</h2>
        <p className="text-cyan-400 font-arabic text-xl">الأهداف الرئيسية</p>
      </div>

      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
        {/* Central Spinning Pentagon visual */}
        <motion.div 
            className="absolute inset-0 flex items-center justify-center z-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
            <div className="w-[80%] h-[80%] border-2 border-cyan-500/20 rounded-full" />
            <div className="absolute w-[60%] h-[60%] border border-cyan-400/30 rotate-45" />
            <div className="absolute w-[60%] h-[60%] border border-cyan-400/30 -rotate-45" />
        </motion.div>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center bg-deep-bg/80 backdrop-blur-md p-4 rounded-full border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <h3 className="text-2xl font-black text-white">5</h3>
                <p className="text-xs text-cyan-300 uppercase tracking-widest">Pillars</p>
            </div>
        </div>

        {/* Orbiting Items */}
        {items.map((item, idx) => (
            <motion.div
                key={idx}
                className={`absolute ${item.pos} w-32 md:w-40 flex flex-col items-center text-center z-20`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
                <div className={`p-4 bg-gray-900/90 rounded-2xl border border-gray-700 shadow-xl mb-2 group hover:scale-110 transition-transform duration-300 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]`}>
                    <div className={`w-8 h-8 ${item.color}`}>
                        {item.icon}
                    </div>
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-gray-400 font-arabic">{item.ar}</p>
            </motion.div>
        ))}
      </div>
    </section>
  );
};