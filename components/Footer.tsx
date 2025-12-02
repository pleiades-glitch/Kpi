import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black/40 border-t border-white/5 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div>
            <h4 className="text-lg font-bold text-white">Digital KPI Platform</h4>
            <p className="text-gray-500 text-sm font-arabic">Jal'an Bani Bu Ali Hospital</p>
        </div>
        
        <div className="text-sm text-gray-400">
            <p>Prepared by: <span className="text-cyan-400">Thuraya Al-Mata'ni</span></p>
            <p className="font-arabic text-xs mt-1">إعداد: ثريا السعيد حمد المطاعني</p>
        </div>
        
        <div className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Ministry of Health
        </div>
      </div>
    </footer>
  );
};