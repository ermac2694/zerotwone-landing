import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Cpu, Radio, Terminal, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const LiveTelemetry: React.FC = () => {
  const [nodes, setNodes] = useState(4812);
  const [latency, setLatency] = useState(1.8);
  const [expanded, setExpanded] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    'SYSTEM: Kernel initializing zero-trust mesh protocol...',
    'AGENT_01: Local NVMe cache synchronized (32GB available)',
    'AGENT_02: Cloud fallback bridge listening on port 3000',
    'SECURITY: Enclave keys generated successfully [0x8f...2a]'
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live fluctuating nodes & latency
      setNodes((prev) => prev + (Math.random() > 0.4 ? 1 : -1));
      setLatency((prev) => Number((1.6 + Math.random() * 0.4).toFixed(1)));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const addSimulatedLog = () => {
    const events = [
      'ORCHESTRATOR: Task #9401 routed to local neural engine',
      'PEER_MESH: Node #4813 established handshake',
      'ZERO_TRUST: Re-verifying agent cryptographic signatures',
      'MEMORY: Context window compressed with 99.4% fidelity'
    ];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    setLogs((prev) => [randomEvent, ...prev.slice(0, 5)]);
  };

  return (
    <div className="w-full mt-6 bg-[#0a0b0e] border border-white/10 rounded-lg overflow-hidden transition-all duration-300">
      {/* Header Bar */}
      <button 
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 bg-white/[0.02] hover:bg-white/[0.05] flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-semibold">LIVE MESH ENGINE</span>
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-300">NODES: {nodes.toLocaleString()}</span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-300">LATENCY: {latency}ms</span>
        </div>
        <div className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
          <span>{expanded ? 'Hide Telemetry' : 'Inspect Terminal'}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Expanded Console Body */}
      {expanded && (
        <div className="p-4 bg-black/60 font-mono text-xs text-slate-300 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-3 border-b border-white/5">
            <div className="p-2 bg-white/5 rounded border border-white/5">
              <span className="text-[10px] text-slate-500 block">CLUSTER HEALTH</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% SECURE
              </span>
            </div>
            <div className="p-2 bg-white/5 rounded border border-white/5">
              <span className="text-[10px] text-slate-500 block">COMPUTE ALLOCATION</span>
              <span className="text-indigo-300 font-semibold flex items-center gap-1 mt-0.5">
                <Cpu className="w-3.5 h-3.5" /> MULTI-AGENT
              </span>
            </div>
            <div className="p-2 bg-white/5 rounded border border-white/5">
              <span className="text-[10px] text-slate-500 block">ENCLAVE STATUS</span>
              <span className="text-cyan-300 font-semibold flex items-center gap-1 mt-0.5">
                <Radio className="w-3.5 h-3.5" /> ZERO-KNOWLEDGE
              </span>
            </div>
            <div className="p-2 bg-white/5 rounded border border-white/5">
              <span className="text-[10px] text-slate-500 block">ROUTING PROTOCOL</span>
              <span className="text-amber-300 font-semibold flex items-center gap-1 mt-0.5">
                <Activity className="w-3.5 h-3.5" /> gRPC SYNAPSE
              </span>
            </div>
          </div>

          {/* Terminal output log */}
          <div className="space-y-1 bg-black/80 p-3 rounded border border-white/5 text-[11px] font-mono leading-relaxed max-h-36 overflow-y-auto">
            <div className="text-slate-500 text-[10px] uppercase mb-1">--- REALTIME ORCHESTRATOR EVENT STREAM ---</div>
            {logs.map((log, idx) => (
              <div key={idx} className="flex gap-2 text-slate-300">
                <span className="text-indigo-400 select-none">&gt;</span>
                <span className={idx === 0 ? 'text-white font-medium' : 'text-slate-400'}>{log}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1">
            <span>PRESS '/' TO QUICK-FOCUS EMAIL INPUT</span>
            <button 
              onClick={addSimulatedLog}
              className="text-indigo-400 hover:text-indigo-300 underline flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" /> Trigger Agent Event
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
