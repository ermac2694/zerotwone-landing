import React from 'react';
import { ModalType } from '../types';
import { X, Cpu, Shield, Network, Key, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

interface InfoModalProps {
  type: ModalType;
  onClose: () => void;
  onOpenBeta: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose, onOpenBeta }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#12141a] border border-white/10 rounded-xl p-6 sm:p-8 text-slate-200 shadow-2xl tech-card-shadow overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle background tech accent */}
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-indigo-400">
              {type === 'OS' && <Cpu className="w-5 h-5" />}
              {type === 'NETWORK' && <Network className="w-5 h-5" />}
              {type === 'SECURITY' && <Shield className="w-5 h-5" />}
              {type === 'BETA' && <Key className="w-5 h-5" />}
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">SYSTEM ARCHITECTURE</span>
              <h3 className="text-xl font-display font-semibold text-white">
                {type === 'OS' && 'Multi-Agent Kernel & Orchestration'}
                {type === 'NETWORK' && 'Peer-to-Peer Mesh Compute'}
                {type === 'SECURITY' && 'Zero-Trust Local-First Enclaves'}
                {type === 'BETA' && 'Early Access Workstation Program'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-4 text-sm text-slate-300">
          {type === 'OS' && (
            <>
              <p className="leading-relaxed">
                <strong className="text-white">zerotwone OS</strong> is engineered from first principles to unify fragmented AI models, localized LLMs, and agentic micro-processes into a deterministic, single-kernel operating system.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <div className="font-mono text-xs text-indigo-300 mb-1">01 / DETERMINISTIC ROUTING</div>
                  <div className="text-xs text-slate-400">Dynamic model orchestration with sub-millisecond task dispatching.</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <div className="font-mono text-xs text-indigo-300 mb-1">02 / UNIFIED CONTEXT</div>
                  <div className="text-xs text-slate-400">Universal memory fabric bridging local NVMe caches with cloud endpoints.</div>
                </div>
              </div>
            </>
          )}

          {type === 'NETWORK' && (
            <>
              <p className="leading-relaxed">
                Connect your workstations, edge servers, and cloud instances into an autonomous multi-node mesh cluster designed for sovereign compute.
              </p>
              <div className="p-4 bg-black/40 border border-white/10 rounded-lg font-mono text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between text-indigo-400 border-b border-white/5 pb-1">
                  <span>NETWORK METRICS</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <div className="flex justify-between"><span>Distributed Nodes:</span> <span className="text-white">4,812 Online</span></div>
                <div className="flex justify-between"><span>Avg Latency:</span> <span className="text-white">1.8ms</span></div>
                <div className="flex justify-between"><span>Protocol:</span> <span className="text-white">gRPC / WebRTC PeerMesh</span></div>
              </div>
            </>
          )}

          {type === 'SECURITY' && (
            <>
              <p className="leading-relaxed">
                Your keys, weights, and agent contexts never leave your encrypted local memory enclaves without explicit zero-trust authorization.
              </p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Hardware-backed secure enclaves (Apple Silicon Neural Engine & NVIDIA TPM)</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>End-to-end encrypted telemetry and zero-knowledge model checkpoints</span>
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Granular permission manifests for autonomous agent execution</span>
                </li>
              </ul>
            </>
          )}

          {type === 'BETA' && (
            <>
              <p className="leading-relaxed">
                Priority access is being granted in batches to developers, AI researchers, and workstation power-users.
              </p>
              <div className="p-4 bg-indigo-950/40 border border-indigo-500/20 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs">
                  <Terminal className="w-4 h-4" />
                  <span>EARLY ACCESS WAVE 1 INCLUDES:</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Native Desktop Orchestrator Binary (macOS / Linux / Windows)</li>
                  <li>Direct access to multi-agent CLI & Rust bindings</li>
                  <li>Private Discord dev community & architecture roadmap</li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">zerotwone.io // build_0.3.1</span>
          {type !== 'BETA' ? (
            <button
              onClick={() => {
                onClose();
                onOpenBeta();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded hover:bg-slate-200 transition-colors"
            >
              Request Beta <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/10 text-white font-mono text-xs rounded hover:bg-white/20 transition-colors"
            >
              Acknowledge
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
