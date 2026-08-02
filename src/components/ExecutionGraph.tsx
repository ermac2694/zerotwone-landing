import React, { useState } from 'react';
import { ExecutionLog } from '../types';
import { Terminal, Activity, DollarSign, Clock, CheckCircle2, Filter, Download, ArrowUpRight, ShieldCheck, RefreshCw } from 'lucide-react';

const LOGS: ExecutionLog[] = [
  { timestamp: '13:34:01.002', stageId: 'STAGE_01', level: 'info', message: 'Workflow #RUN-8821 initiated via webhook' },
  { timestamp: '13:34:01.026', stageId: 'STAGE_01', level: 'success', message: 'Router matched 3 downstream provider workers' },
  { timestamp: '13:34:01.042', stageId: 'STAGE_02', level: 'info', message: 'High-Reasoning LLM context frame loaded (14.2k tokens)' },
  { timestamp: '13:34:01.454', stageId: 'STAGE_02', level: 'success', message: 'Generated structured schema JSON payload in 412ms' },
  { timestamp: '13:34:01.460', stageId: 'STAGE_03', level: 'warn', message: 'Human approval checkpoint reached. Awaiting operator token' },
  { timestamp: '13:34:01.890', stageId: 'STAGE_03', level: 'success', message: 'Approval signature verified [operator_01]. Proceeding' },
  { timestamp: '13:34:02.710', stageId: 'STAGE_04', level: 'info', message: 'High-Res Diffusion pipeline rendered 3840x2160 asset' },
  { timestamp: '13:34:03.020', stageId: 'STAGE_05', level: 'success', message: 'Neural voice synthesis stream completed. 0.022 credits billed' }
];

export const ExecutionGraph: React.FC = () => {
  const [filterLevel, setFilterLevel] = useState<string>('ALL');
  const [activeTab, setActiveTab] = useState<'timeline' | 'logs' | 'payload'>('timeline');

  const filteredLogs = filterLevel === 'ALL'
    ? LOGS
    : LOGS.filter(l => l.level === filterLevel.toLowerCase());

  return (
    <section id="graph" className="py-20 border-t border-white/5 relative bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5 text-purple-400" />
            <span>Execution Graph & Observability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Full Telemetry & Timeline for Every Execution.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Inspired by GitHub Actions and LangSmith. Inspect stage durations, credit consumption, raw API payloads, and streaming logs with sub-millisecond precision.
          </p>
        </div>

        {/* Execution Dashboard Container */}
        <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Header Bar */}
          <div className="px-6 py-4 bg-white/[0.02] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs font-bold text-white">EXECUTION: #RUN-8821</span>
              <span className="text-slate-600 font-mono text-xs">|</span>
              <span className="text-xs font-mono text-emerald-400">PASSED (1.26s)</span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5 font-mono text-xs">
              <button
                onClick={() => setActiveTab('timeline')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'timeline' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Timeline Graph
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'logs' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Stream Logs
              </button>
              <button
                onClick={() => setActiveTab('payload')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'payload' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Payload Schema
              </button>
            </div>
          </div>

          {/* Metrics Overview Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-black/30 border-b border-white/10">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                <Clock className="w-3 h-3 text-purple-400" /> TOTAL DURATION
              </span>
              <div className="text-lg font-mono font-bold text-white">1,266 ms</div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-emerald-400" /> CREDITS USED
              </span>
              <div className="text-lg font-mono font-bold text-emerald-400">$0.068</div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                <Activity className="w-3 h-3 text-indigo-400" /> PROVIDERS INVOLVED
              </span>
              <div className="text-lg font-mono font-bold text-slate-200">4 Active</div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-cyan-400" /> AUDIT COMPLIANCE
              </span>
              <div className="text-lg font-mono font-bold text-cyan-300">PASS (Zero-Knowledge)</div>
            </div>
          </div>

          {/* Tab Body Content */}
          <div className="p-6">
            {activeTab === 'timeline' && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-400 flex items-center justify-between pb-2">
                  <span>STAGE TIMELINE & LATENCY WATERFALL</span>
                  <span>TIME SCALE (0ms - 1300ms)</span>
                </div>

                {/* Waterfall Visual Bars */}
                <div className="space-y-3 font-mono text-xs">
                  {/* Stage 1 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span className="font-semibold text-white">Intent Router Engine</span>
                      <span className="text-purple-400">24ms • $0.001</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden flex">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: '4%' }} />
                    </div>
                  </div>

                  {/* Stage 2 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span className="font-semibold text-white">High-Reasoning LLM (Briefing)</span>
                      <span className="text-purple-400">412ms • $0.015</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden flex">
                      <div className="bg-white/0 h-full" style={{ width: '4%' }} />
                      <div className="bg-indigo-500 h-full rounded-full" style={{ width: '32%' }} />
                    </div>
                  </div>

                  {/* Stage 3 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span className="font-semibold text-amber-300">Human Approval Checkpoint</span>
                      <span className="text-amber-400">430ms (Gate Signoff)</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden flex">
                      <div className="bg-white/0 h-full" style={{ width: '36%' }} />
                      <div className="bg-amber-400 h-full rounded-full" style={{ width: '34%' }} />
                    </div>
                  </div>

                  {/* Stage 4 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span className="font-semibold text-white">High-Res Diffusion Pipeline</span>
                      <span className="text-purple-400">820ms • $0.030</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden flex">
                      <div className="bg-white/0 h-full" style={{ width: '36%' }} />
                      <div className="bg-cyan-500 h-full rounded-full" style={{ width: '64%' }} />
                    </div>
                  </div>

                  {/* Stage 5 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-300">
                      <span className="font-semibold text-white">Neural Voice Synthesizer</span>
                      <span className="text-purple-400">310ms • $0.022</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden flex">
                      <div className="bg-white/0 h-full" style={{ width: '70%' }} />
                      <div className="bg-purple-400 h-full rounded-full" style={{ width: '24%' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'logs' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Filter className="w-3.5 h-3.5 text-slate-400" />
                    {['ALL', 'INFO', 'WARN', 'SUCCESS'].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setFilterLevel(lvl)}
                        className={`px-2 py-0.5 rounded text-[10px] cursor-pointer ${
                          filterLevel === lvl ? 'bg-purple-600 text-white' : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                  <span className="text-slate-500 text-[10px]">REALTIME STREAMING ACTIVE</span>
                </div>

                <div className="p-4 bg-black/80 rounded-xl border border-white/5 space-y-2 max-h-64 overflow-y-auto">
                  {filteredLogs.map((log, index) => (
                    <div key={index} className="flex flex-wrap items-center gap-3 text-slate-300">
                      <span className="text-slate-500 text-[10px]">{log.timestamp}</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-purple-300">
                        {log.stageId}
                      </span>
                      <span
                        className={
                          log.level === 'success'
                            ? 'text-emerald-400 font-semibold'
                            : log.level === 'warn'
                            ? 'text-amber-400 font-semibold'
                            : 'text-slate-300'
                        }
                      >
                        {log.message}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'payload' && (
              <div className="p-4 bg-black/80 rounded-xl border border-white/5 font-mono text-xs text-slate-300 space-y-2 max-h-64 overflow-y-auto">
                <div className="text-purple-400 text-[10px] uppercase">// JSON INPUT & OUTPUT MANIFEST</div>
                <pre className="text-[11px] text-slate-300 leading-relaxed">
{`{
  "execution_id": "RUN-8821",
  "pipeline_version": "v1.4.2",
  "inputs": {
    "target_medium": ["web_landing", "social_video", "audio_podcast"],
    "brand": "zerotwone",
    "theme": "dark_minimalist"
  },
  "outputs": {
    "copy_brief": "s3://assets.zerotwone.io/briefs/8821.json",
    "rendered_image": "s3://assets.zerotwone.io/img/8821.png",
    "voiceover_wav": "s3://assets.zerotwone.io/audio/8821.wav"
  }
}`}
                </pre>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
