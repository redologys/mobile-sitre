
import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 text-[11px] uppercase tracking-[0.2em]";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]",
    secondary: "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-blue-500/50",
    outline: "bg-transparent border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const ServiceCard: React.FC<{ icon: any; title: string; description: string; category: string }> = ({ icon: Icon, title, description, category }) => (
  <div className="group relative p-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-3 overflow-hidden">
    <div className="absolute -inset-20 bg-blue-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
    <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:scale-110 transition-all duration-500">
        <Icon className="text-blue-500 group-hover:text-white transition-colors duration-500" size={28} />
      </div>
      <span className="text-[10px] uppercase tracking-[0.4em] text-blue-500/80 font-black mb-3 block">{category}</span>
      <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors uppercase italic">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">{description}</p>
    </div>
  </div>
);

export const SectionHeader: React.FC<{ label: string; title: React.ReactNode; subtitle?: string }> = ({ label, title, subtitle }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
    <div className="max-w-2xl">
      <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.6em] mb-6">{label}</h2>
      <h3 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase italic tracking-tighter">
        {title}
      </h3>
    </div>
    {subtitle && (
      <p className="text-zinc-500 max-w-xs font-medium italic border-l border-zinc-800 pl-6 mb-2">
        {subtitle}
      </p>
    )}
  </div>
);
