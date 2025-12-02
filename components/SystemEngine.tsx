import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Bell, Puzzle, TrendingUp, Cpu } from 'lucide-react';

const data = [
  { name: 'Jan', uv: 40, pv: 24 },
  { name: 'Feb', uv: 30, pv: 13 },
  { name: 'Mar', uv: 20, pv: 98 },
  { name: 'Apr', uv: 27, pv: 39 },
  { name: 'May', uv: 18, pv: 48 },
  { name: 'Jun', uv: 23, pv: 38 },
  { name: 'Jul', uv: 34, pv: 43 },
];

export const SystemEngine: React.FC = () => {
  return (
    <section className="relative py-12">
      <div className="absolute -left-20 top-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl z-0" />
      
      <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: Description */}
        <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold">System Engine</h2>
            <h3 className="text-2xl text-cyan-400 font-arabic">مكونات النظام</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
                An integrated "Control Room" approach. Connect databases, forecast trends with AI, and alert staff instantly.
            </p>

            <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <TrendingUp className="text-green-400" />
                    <div>
                        <div className="font-bold">AI Forecast</div>
                        <div className="text-xs text-gray-400 font-arabic">توقعات الذكاء الاصطناعي</div>
                    </div>
                </div>
                <div className="glass-panel p-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <Bell className="text-red-400" />
                    <div>
                        <div className="font-bold">Smart Alerts</div>
                        <div className="text-xs text-gray-400 font-arabic">نظام الإنذار</div>
                    </div>
                </div>
                <div className="glass-panel p-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <Puzzle className="text-yellow-400" />
                    <div>
                        <div className="font-bold">Integration</div>
                        <div className="text-xs text-gray-400 font-arabic">التكامل</div>
                    </div>
                </div>
                <div className="glass-panel p-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <Cpu className="text-cyan-400" />
                    <div>
                        <div className="font-bold">Processing</div>
                        <div className="text-xs text-gray-400 font-arabic">المعالجة المركزية</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right: The Dashboard Visual */}
        <div className="flex-1 w-full max-w-lg perspective-1000">
            <motion.div 
                className="relative bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-2xl transform-style-3d rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-all duration-700"
                initial={{ rotateY: -10, rotateX: 10 }}
                whileInView={{ rotateY: -15, rotateX: 5 }}
                viewport={{ once: true }}
            >
                {/* Header of Mock Dashboard */}
                <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-gray-500 font-mono">LIVE_MONITOR_V2.0</div>
                </div>

                {/* Charts */}
                <div className="space-y-4">
                    <div className="h-32 w-full bg-gray-800/50 rounded-lg p-2 border border-gray-700/50">
                        <div className="text-xs text-cyan-400 mb-1">Patient Flow Prediction</div>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="uv" stroke="#06b6d4" fillOpacity={1} fill="url(#colorUv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                         <div className="h-24 bg-gray-800/50 rounded-lg p-3 border border-gray-700/50 flex flex-col justify-between">
                             <div className="text-xs text-gray-400">Wait Time</div>
                             <div className="text-2xl font-bold text-white">12<span className="text-sm font-normal text-gray-500">m</span></div>
                             <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                                <div className="bg-green-500 w-[70%] h-full" />
                             </div>
                         </div>
                         <div className="h-24 bg-gray-800/50 rounded-lg p-3 border border-gray-700/50 flex flex-col justify-between">
                             <div className="text-xs text-gray-400">Efficiency</div>
                             <div className="text-2xl font-bold text-white">94<span className="text-sm font-normal text-gray-500">%</span></div>
                             <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                                <div className="bg-cyan-500 w-[94%] h-full" />
                             </div>
                         </div>
                    </div>
                </div>

                {/* Decorative Glow */}
                <div className="absolute inset-0 bg-cyan-500/5 rounded-xl pointer-events-none" />
            </motion.div>
        </div>

      </div>
    </section>
  );
};