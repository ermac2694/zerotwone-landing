import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FooterProps {
  onRequestBeta: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestBeta, onNavigate }) => {
  return (
    <footer className="border-t border-white/10 relative bg-[#060608] pt-16 pb-12 overflow-hidden">
      
      {/* Ambient Purple Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Footer Hero Box */}
        <div className="glass-card p-8 sm:p-12 rounded-2xl border border-white/10 text-center space-y-6 max-w-3xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>ORCHESTRATE WITHOUT LIMITS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            The Future of AI Workflows Starts Here.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto font-normal">
            Join the private beta program to help build the next generation of AI orchestration infrastructure.
          </p>

          <div className="pt-2 flex justify-center">
            {/* Request Early Access commented out */}
            {/* 
            <button
              onClick={onRequestBeta}
              className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs tracking-wider uppercase rounded-lg shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all cursor-pointer flex items-center gap-2 group active:scale-95"
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            */}
            <div className="px-8 py-3.5 bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono font-bold text-xs tracking-wider uppercase rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.2)] inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Early Beta Access Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
              021
            </div>
            <span className="font-bold text-white tracking-wider">
              © 2026 Zerotwone Labs
            </span>
          </div>

          <div className="text-slate-400 text-center sm:text-right">
            Built for the next generation of AI workflows.
          </div>
        </div>

      </div>
    </footer>
  );
};

