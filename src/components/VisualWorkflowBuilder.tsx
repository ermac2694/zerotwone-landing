import React, { useState } from 'react';
import { WorkflowStage } from '../types';
import { Play, RotateCcw, CheckCircle2, Clock, AlertTriangle, UserCheck, GitBranch, History, Edit3, Settings, ShieldAlert, Sparkles } from 'lucide-react';

const INITIAL_STAGES: WorkflowStage[] = [
  {
    id: 'stage-1',
    name: '1. Intent Analysis & Objective Router',
    provider: 'Inference Engine',
    model: 'Intent Router v1',
    type: 'prompt',
    status: 'completed',
    durationMs: 24,
    credits: 0.001,
    input: 'Goal: Create a complete launch campaign with multimodal visual assets & narration',
    output: 'Routing & Auto-Prompt: Extracted goals -> Generated 3 specialized stage prompts'
  },
  {
    id: 'stage-2',
    name: '2. Auto-Prompt Synthesis',
    provider: 'Reasoning Engine',
    model: 'High-Reasoning v2',
    type: 'prompt',
    status: 'completed',
    durationMs: 412,
    credits: 0.015,
    input: 'Auto-synthesizing domain-optimized prompts for diffusion & speech models...',
    output: 'Prompts generated automatically. Structured negative prompts and tone rules attached.'
  },
  {
    id: 'stage-3',
    name: '3. Human-in-the-Loop Quality Review',
    provider: 'Zerotwone Kernel',
    model: 'Human Approval Gate',
    type: 'approval',
    status: 'completed',
    durationMs: 0,
    credits: 0,
    input: 'Review synthesized prompt strategy & copy before triggering media renderers',
    output: 'Approved by lead operator at 13:28 UTC',
    requiresHumanApproval: true
  },
  {
    id: 'stage-4',
    name: '4. High-Res Image Generation',
    provider: 'Diffusion Engine',
    model: 'High-Res Synthesizer',
    type: 'vision',
    status: 'completed',
    durationMs: 820,
    credits: 0.030,
    input: 'Auto-prompt used: "Minimalist workstation setup, ultra-clean lighting, 8k render"',
    output: 'Asset asset_img_092.png generated (3840x2160, 4.2MB)'
  },
  {
    id: 'stage-5',
    name: '5. Audio Voiceover Synthesis',
    provider: 'Audio Engine',
    model: 'Neural Voice v2',
    type: 'audio',
    status: 'idle',
    durationMs: 0,
    credits: 0.020,
    input: 'Auto-prompt used: "Synthesize voice script in authoritative, calm tech voice..."',
    output: 'Pending execution'
  }
];

export const VisualWorkflowBuilder: React.FC = () => {
  const [stages, setStages] = useState<WorkflowStage[]>(INITIAL_STAGES);
  const [activeStageId, setActiveStageId] = useState<string>('stage-2');
  const [isRunning, setIsRunning] = useState(false);
  const [version, setVersion] = useState('v1.4.2');
  const [editedInput, setEditedInput] = useState(stages[1].input);

  const activeStage = stages.find(s => s.id === activeStageId) || stages[0];

  const handleRunPipeline = () => {
    setIsRunning(true);
    // Simulate multi-stage execution progress
    setStages(prev => prev.map(s => {
      if (s.id === 'stage-5') return { ...s, status: 'running' };
      return s;
    }));

    setTimeout(() => {
      setStages(prev => prev.map(s => {
        if (s.id === 'stage-5') return {
          ...s,
          status: 'completed',
          durationMs: 310,
          credits: 0.022,
          output: 'Audio track audio_voice_01.mp3 synthesized (24-bit 48kHz WAV)'
        };
        return s;
      }));
      setIsRunning(false);
    }, 1200);
  };

  const handleRetryStage = (stageId: string) => {
    setStages(prev => prev.map(s => {
      if (s.id === stageId) {
        return {
          ...s,
          status: 'running'
        };
      }
      return s;
    }));

    setTimeout(() => {
      setStages(prev => prev.map(s => {
        if (s.id === stageId) {
          return {
            ...s,
            status: 'completed',
            durationMs: Math.floor(100 + Math.random() * 400),
            output: `Retried successfully. Updated output generated at ${new Date().toLocaleTimeString()}`
          };
        }
        return s;
      }));
    }, 800);
  };

  const handleToggleApproval = (stageId: string) => {
    setStages(prev => prev.map(s => {
      if (s.id === stageId) {
        const nextStatus = s.status === 'completed' ? 'queued' : 'completed';
        return {
          ...s,
          status: nextStatus,
          output: nextStatus === 'completed' ? 'Approved by operator' : 'Awaiting manual approval checkpoint'
        };
      }
      return s;
    }));
  };

  return (
    <section id="workflow" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs uppercase tracking-widest">
            <GitBranch className="w-3.5 h-3.5 text-purple-400" />
            <span>Visual Workflow Builder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Design & Orchestrate AI Pipelines Visually.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            State what you want to accomplish. Zerotwone automatically generates optimized prompts, configures multi-stage execution trees, handles retries, and manages human approval gates.
          </p>
        </div>

        {/* Interactive Builder Window */}
        <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Builder Top Bar */}
          <div className="px-6 py-4 bg-white/[0.02] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-600 font-mono text-xs">|</span>
              <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                Pipeline: marketing_omni_v1.json
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/20 text-[10px] font-mono">
                {version}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setVersion(`v1.4.${Math.floor(Math.random() * 9 + 3)}`)}
                className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <History className="w-3.5 h-3.5 text-purple-400" />
                <span>Version History</span>
              </button>

              <button
                onClick={handleRunPipeline}
                disabled={isRunning}
                className="px-4 py-1.5 rounded bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? 'EXECUTING...' : 'TEST PIPELINE'}</span>
              </button>
            </div>
          </div>

          {/* Builder Workspace Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left Node Flow Diagram (7 cols) */}
            <div className="lg:col-span-7 p-6 bg-black/40 border-b lg:border-b-0 lg:border-r border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2">
                <span>STAGES & NODES ({stages.length})</span>
                <span className="text-slate-500">CLICK STAGE TO INSPECT GOAL / PROMPT</span>
              </div>

              {/* Connected Stage Cards */}
              <div className="space-y-3 relative">
                {stages.map((stage, index) => {
                  const isActive = stage.id === activeStageId;
                  return (
                    <div key={stage.id} className="relative">
                      {/* Connector Line */}
                      {index > 0 && (
                        <div className="w-[2px] h-3 bg-white/10 mx-auto -my-1 relative z-0" />
                      )}

                      <div
                        onClick={() => {
                          setActiveStageId(stage.id);
                          setEditedInput(stage.input);
                        }}
                        className={`p-4 rounded-xl border transition-all cursor-pointer relative z-10 ${
                          isActive
                            ? 'bg-purple-950/30 border-purple-500/50 shadow-[0_0_20px_rgba(124,58,237,0.2)]'
                            : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="p-2 rounded bg-white/5 border border-white/5">
                              {stage.type === 'prompt' && <Sparkles className="w-4 h-4 text-purple-400" />}
                              {stage.type === 'approval' && <UserCheck className="w-4 h-4 text-amber-400" />}
                              {stage.type === 'vision' && <Sparkles className="w-4 h-4 text-cyan-400" />}
                              {stage.type === 'audio' && <Sparkles className="w-4 h-4 text-indigo-400" />}
                            </span>

                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-display font-semibold text-sm text-white">
                                  {stage.name}
                                </span>
                                {stage.requiresHumanApproval && (
                                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                    HUMAN CHECKPOINT
                                  </span>
                                )}
                              </div>
                              <div className="text-xs font-mono text-slate-400 gap-2 flex items-center mt-0.5">
                                <span>{stage.provider}</span>
                                <span>•</span>
                                <span>{stage.model}</span>
                              </div>
                            </div>
                          </div>

                          {/* Status Badge & Actions */}
                          <div className="flex items-center gap-2">
                            {stage.status === 'completed' && (
                              <span className="flex items-center gap-1 text-xs font-mono text-emerald-400">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="hidden sm:inline">{stage.durationMs}ms</span>
                              </span>
                            )}
                            {stage.status === 'running' && (
                              <span className="flex items-center gap-1 text-xs font-mono text-purple-400 animate-pulse">
                                <Clock className="w-4 h-4 animate-spin" />
                                <span>Running</span>
                              </span>
                            )}
                            {stage.status === 'idle' && (
                              <span className="text-xs font-mono text-slate-500">Queued</span>
                            )}

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRetryStage(stage.id);
                              }}
                              className="p-1.5 hover:bg-white/10 rounded text-slate-400 hover:text-white"
                              title="Retry Stage"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Node Inspector & Prompt Editor (5 cols) */}
            <div className="lg:col-span-5 p-6 bg-[#090a0f] flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block">STAGE INSPECTOR</span>
                    <h3 className="font-display font-bold text-white text-base">
                      {activeStage.name}
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    {activeStage.provider}
                  </span>
                </div>

                {/* Prompt & Goal Editor */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 flex items-center justify-between">
                    <span>STAGE INTENT / GOAL (Auto-Generates Prompts)</span>
                    <span className="text-purple-400 flex items-center gap-1">
                      <Edit3 className="w-3 h-3" /> Auto-Generated
                    </span>
                  </label>
                  <textarea
                    rows={4}
                    value={editedInput}
                    onChange={(e) => setEditedInput(e.target.value)}
                    className="w-full p-3 rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-slate-200 focus:outline-none focus:border-purple-500/80 transition-colors"
                  />
                </div>

                {/* Human Approval Toggle if applicable */}
                {activeStage.requiresHumanApproval && (
                  <div className="p-3 bg-amber-950/20 border border-amber-500/30 rounded-lg flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono font-bold text-amber-300 block">HUMAN-IN-THE-LOOP CHECKPOINT</span>
                      <span className="text-[11px] text-slate-400 block">Requires explicit signoff before downstream steps trigger.</span>
                    </div>
                    <button
                      onClick={() => handleToggleApproval(activeStage.id)}
                      className={`px-3 py-1.5 rounded text-xs font-mono font-bold cursor-pointer transition-colors ${
                        activeStage.status === 'completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-amber-500 text-black'
                      }`}
                    >
                      {activeStage.status === 'completed' ? 'APPROVED' : 'APPROVE NOW'}
                    </button>
                  </div>
                )}

                {/* Output Inspection Box */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 block">LAST EXECUTION OUTPUT</span>
                  <div className="p-3 bg-black/80 rounded-lg border border-white/5 font-mono text-xs text-slate-300 space-y-1">
                    <p className="text-emerald-400 font-semibold">{activeStage.output}</p>
                    <div className="text-[10px] text-slate-500 flex justify-between pt-2 border-t border-white/5">
                      <span>DURATION: {activeStage.durationMs}ms</span>
                      <span>COST: ${activeStage.credits.toFixed(3)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>RETRY POLICY: EXPONENTIAL BACKOFF (3 MAX)</span>
                <span className="text-purple-400">ENFORCED</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
