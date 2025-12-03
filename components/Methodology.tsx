import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, PenTool, Rocket, BedDouble } from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Diagnosis",
      ar: "التشخيص",
      desc: "Analyze current manual workflow bottlenecks."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Design & Dev",
      ar: "التصميم والتطوير",
      desc: "Building the Manus-based architecture."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Pilot & Launch",
      ar: "التجربة والإطلاق",
      desc: "Implemented at Men's Ward."
    }
  ];

  return (
    <section className="py-10">
       <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">Methodology</h2>
        <p className="text-cyan-400 font-arabic text-xl">المنهجية</p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />

        <div className="space-y-16">
            {steps.map((step, index) => (
                <motion.div 
                    key={index}
                    className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.2 }}
                >
                    {/* Node Point */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-cyan-400 rounded-full z-10 shadow-[0_0_10px_#22d3ee]" />

                    {/* Content Card */}
                    <div className="ml-20 md:ml-0 md:w-[45%]">
                        <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-cyan-500 hover:translate-x-2 transition-transform duration-300">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-cyan-900/30 rounded-lg text-cyan-400">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                    <span className="text-sm text-cyan-300 font-arabic block">{step.ar}</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mt-2">{step.desc}</p>
                            
                            {index === 2 && (
                                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-green-900/30 border border-green-500/30 rounded-full text-xs text-green-300">
                                    <BedDouble className="w-3 h-3" />
                                    Trial done: Male Ward
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Empty div for spacing on the other side */}
                    <div className="hidden md:block md:w-[45%]" />
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};