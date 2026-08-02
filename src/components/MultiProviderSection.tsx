import React, { useState } from 'react';
import { AIProvider } from '../types';
import { Cpu, CheckCircle2, Zap, Radio, Globe, Shield } from 'lucide-react';

const PROVIDERS: AIProvider[] = [
  {
    id: 'openai',
    name: 'OpenAI Provider',
    category: 'LLM',
    models: ['Reasoning Engine', 'Multimodal Vision', 'Realtime Voice'],
    latency: '180ms',
    status: 'operational',
    icon: '⚡',
    description: 'Reasoning and multimodal capabilities with structured JSON and function calling.'
  },
  {
    id: 'anthropic',
    name: 'Anthropic Provider',
    category: 'LLM',
    models: ['High-Reasoning Engine', 'Long-Context Engine', 'Agentic Execution'],
    latency: '140ms',
    status: 'operational',
    icon: '🧠',
    description: 'Advanced reasoning, long context window processing, and agentic workspace automation.'
  },
  {
    id: 'gemini',
    name: 'Multimodal Provider',
    category: 'Multimodal',
    models: ['Ultra-Context Engine', 'Fast Multimodal Flash', 'Visual Synthesis'],
    latency: '95ms',
    status: 'operational',
    icon: '✨',
    description: 'Native 1M+ token context, direct video/audio processing, and rapid multimodal response.'
  },
  {
    id: 'groq',
    name: 'Ultra-Fast Inference Provider',
    category: 'LLM',
    models: ['High-Throughput LPU Engine', 'Real-Time Router'],
    latency: '22ms',
    status: 'operational',
    icon: '🚀',
    description: 'Ultra-low latency LPU inference engine for instant multi-agent execution loops.'
  },
  {
    id: 'fal',
    name: 'Diffusion Image Provider',
    category: 'Image',
    models: ['High-Res Diffusion Pipeline', 'Real-Time Image Synthesis'],
    latency: '450ms',
    status: 'operational',
    icon: '🎨',
    description: 'High performance image generation pipelines for visual assets.'
  },
  {
    id: 'runway',
    name: 'Generative Video Provider',
    category: 'Video',
    models: ['Cinematic Video Pipeline', 'High-Res Motion Engine'],
    latency: '2.4s',
    status: 'operational',
    icon: '🎬',
    description: 'Cinematic video generation, camera motion controls, and temporal visual consistency.'
  },
  {
    id: 'elevenlabs',
    name: 'Neural Audio Provider',
    category: 'Audio',
    models: ['Neural Speech Engine', 'Voice Cloning Pipeline', 'Audio Cleanup'],
    latency: '120ms',
    status: 'operational',
    icon: '🎙️',
    description: 'Ultra-realistic speech synthesis, multilingual voice generation, and audio isolation.'
  },
  {
    id: 'stability',
    name: 'Open Synth Provider',
    category: 'Image',
    models: ['Open Weights Image Engine', '3D Mesh Generator'],
    latency: '680ms',
    status: 'operational',
    icon: '🌌',
    description: 'Open weight image synthesis, vector generation, and 3D mesh pipelines.'
  }
];

export const MultiProviderSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'LLM', 'Multimodal', 'Image', 'Video', 'Audio'];

  const filteredProviders = selectedCategory === 'ALL'
    ? PROVIDERS
    : PROVIDERS.filter(p => p.category === selectedCategory);

  return (
    <section id="providers" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5 text-purple-400" />
            <span>Multi Provider Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Connect Every AI Provider in One Unified Pipeline.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminate vendor lock-in. Combine specialized models for text, vision, speech, video, and transcription into a single execution graph.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white font-bold shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Provider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProviders.map((provider) => (
            <div
              key={provider.id}
              className="glass-card glass-card-hover p-6 rounded-xl border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 bg-white/5 rounded-lg border border-white/5">
                      {provider.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-white">
                        {provider.name}
                      </h3>
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">
                        {provider.category}
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {provider.latency}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {provider.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {provider.models.map((model) => (
                  <span
                    key={model}
                    className="px-2 py-1 rounded bg-white/5 text-[11px] font-mono text-slate-300 border border-white/5"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
