import React from 'react';
import { Layers, Sparkles, Compass, Cpu, Check } from 'lucide-react';

const PRINCIPLES = [
  { name: 'Provider Agnostic', desc: 'Seamlessly interchange reasoning, vision, audio, and specialized AI models.' },
  { name: 'Auto-Prompt Synthesis', desc: 'Define high-level goals; Zerotwone automatically generates optimal stage prompts.' },
  { name: 'Human-in-the-Loop', desc: 'Native approval gates before triggering high-cost or user-facing actions.' },
  { name: 'Enterprise Ready', desc: 'SOC 2 compliant audit logging, RBAC, and secure hardware vault keys.' },
  { name: 'High Availability', desc: 'Multi-region routing with instant automated model failover.' },
  { name: 'Extensible Architecture', desc: 'Plugin-driven Python/TypeScript SDKs, custom node runners, and webhooks.' },
  { name: 'Production Scale', desc: 'High-throughput gRPC routing with automated retry and circuit-breaking.' },
  { name: 'Intent Driven', desc: 'Focus on what you want to achieve while the system handles prompt construction.' },
];

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 border-t border-white/5 relative bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>Product Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Why Zerotwone
          </h2>

          <div className="glass-card p-8 sm:p-10 rounded-2xl border border-white/10 text-slate-200 text-base sm:text-lg leading-relaxed space-y-6 text-left shadow-2xl">
            <p className="font-medium text-white text-xl sm:text-2xl font-display">
              Never spend time manual prompt engineering again.
            </p>
            <p className="text-slate-300">
              Simply state what you want to achieve. Zerotwone interprets your high-level objective, synthesizes optimized prompts for each step, and orchestrates specialized AI models into a seamless execution pipeline.
            </p>
            <p className="text-purple-300 font-semibold pt-2 border-t border-white/10">
              Zerotwone brings everything together into one unified operating layer.
            </p>
          </div>

          {/* Core Principles Grid */}
          <div className="pt-8">
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
              OUR CORE ARCHITECTURAL PRINCIPLES
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {PRINCIPLES.map((principle) => (
                <div
                  key={principle.name}
                  className="glass-card p-4 rounded-xl border border-white/5 space-y-1.5 hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2 text-purple-400">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span className="font-display font-bold text-sm text-white">
                      {principle.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal pl-6">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
