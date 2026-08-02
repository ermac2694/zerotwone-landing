import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Sparkles, Check, Shield, Cpu, Activity, Lock } from 'lucide-react';

interface HeroProps {
  onRequestBeta: () => void;
  onViewArchitecture: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestBeta, onViewArchitecture }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex flex-col items-center justify-center overflow-hidden bg-[#09090b] text-[#f4f4f5]">
      
      {/* Engineering Grid Background with Alignment Guides */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Faint Oversized "021" Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono font-black text-[22vw] text-white/[0.018] tracking-tighter select-none pointer-events-none z-0">
        021
      </div>

      {/* Crosshair Corner Marks for Architectural Engineering aesthetic */}
      <div className="absolute top-24 left-8 text-white/20 font-mono text-xs hidden sm:block pointer-events-none">+ 021.GRID.LAT 37.7749</div>
      <div className="absolute top-24 right-8 text-white/20 font-mono text-xs hidden sm:block pointer-events-none">+ 021.GRID.LNG -122.4194</div>
      <div className="absolute bottom-12 left-8 text-white/20 font-mono text-xs hidden sm:block pointer-events-none">+ ENCLAVE: ZERO-TRUST</div>
      <div className="absolute bottom-12 right-8 text-white/20 font-mono text-xs hidden sm:block pointer-events-none">+ SYSTEM: RUNNING</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8 my-auto">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(124,58,237,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">● BUILD STATUS</span>
          <span className="text-purple-400/60">|</span>
          <span className="text-purple-300">v0.1.0-alpha</span>
          <span className="text-purple-400/60">|</span>
          <span className="text-emerald-400">Private Beta</span>
          <span className="text-purple-400/60 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">Actively Developing</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.05] sm:leading-[1.02] uppercase">
            <span className="block text-slate-300 font-bold">YOUR OWN</span>
            <span className="block my-1 bg-gradient-to-r from-purple-300 via-purple-100 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(124,58,237,0.4)] tracking-tight">
              AI ORCHESTRATOR
            </span>
            <span className="block text-slate-100 font-bold">IS COMING SOON.</span>
          </h1>
        </motion.div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto font-normal"
        >
          A unified operating system for intelligent AI workflows. Build, orchestrate and manage complex AI pipelines through one beautifully engineered platform.
        </motion.p>

        {/* Email Waitlist Input */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-2 max-w-md mx-auto"
        >
          {!submitted ? (
            <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-black/60 border border-white/15 rounded-xl shadow-2xl focus-within:border-purple-500/80 transition-colors">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 bg-transparent text-xs font-mono text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto whitespace-nowrap px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs tracking-wider uppercase rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
              >
                {loading ? 'Submitting...' : 'Join Waitlist'}
                {!loading && <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </form>
          ) : (
            <div className="p-3 bg-purple-950/40 border border-purple-500/30 rounded-xl text-xs font-mono text-emerald-300 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Waitlist confirmed for {email}. Early key locked in!</span>
            </div>
          )}
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Request Beta Access commented out as requested */}
          {/*
          <button
            onClick={onRequestBeta}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono font-semibold text-xs tracking-wider uppercase rounded-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Request Beta Access</span>
          </button>
          */}

          <div className="w-full sm:w-auto px-8 py-3.5 bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono font-semibold text-xs tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.2)]">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Early Beta Access Coming Soon</span>
          </div>

          <button
            onClick={onViewArchitecture}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/5 border border-white/10 text-slate-300 hover:text-white font-mono font-semibold text-xs tracking-wider uppercase rounded-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>View Architecture</span>
          </button>
        </motion.div>

        {/* Engineering System Telemetry Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-10 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 text-left font-mono text-xs"
        >
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10">
            <span className="text-[10px] text-slate-500 uppercase block">ORCHESTRATION</span>
            <span className="font-bold text-purple-300">Multi-Model Graph</span>
          </div>

          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10">
            <span className="text-[10px] text-slate-500 uppercase block">COMPUTE</span>
            <span className="font-bold text-slate-200">Local & Cloud Enclave</span>
          </div>

          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10">
            <span className="text-[10px] text-slate-500 uppercase block">LATENCY</span>
            <span className="font-bold text-emerald-400">&lt; 12ms IPC Routing</span>
          </div>

          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10">
            <span className="text-[10px] text-slate-500 uppercase block">SECURITY</span>
            <span className="font-bold text-slate-200">Zero-Knowledge Vault</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

