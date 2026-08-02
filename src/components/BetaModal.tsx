import React, { useState } from 'react';
import { WaitlistSubmission } from '../types';
import { X, Key, ArrowRight, Check, Sparkles, Terminal, Shield } from 'lucide-react';

interface BetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BetaModal: React.FC<BetaModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [useCase, setUseCase] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<WaitlistSubmission | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@')) {
      setErrorMsg('Please provide a valid workstation email.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const accessKey = `Z21-BETA-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmission({
        email,
        company,
        useCase,
        queuePosition: 4813 + Math.floor(Math.random() * 20),
        accessKey,
        timestamp: new Date().toLocaleTimeString(),
      });
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0e0f14] border border-white/10 rounded-2xl p-6 sm:p-8 text-slate-200 shadow-2xl tech-card-shadow overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle purple background glow */}
        <div className="absolute -right-16 -top-16 w-56 h-56 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Key className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">PRIVATE BETA PROGRAM</span>
              <h3 className="text-lg font-display font-bold text-white">
                Request Early Access
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6">
          {!submission ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-300 leading-relaxed">
                Join engineering teams and AI researchers building multi-stage workflows on Zerotwone. Priority allocation is granted weekly.
              </p>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400 block">
                  WORKSTATION EMAIL <span className="text-purple-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400 block">
                  ORGANIZATION / PROJECT (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Corp / Independent Lab"
                  className="w-full px-4 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400 block">
                  PRIMARY USE CASE
                </label>
                <select
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="w-full px-4 py-2.5 bg-black/60 border border-white/10 rounded-lg text-xs font-mono text-slate-300 focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">Select workflow focus...</option>
                  <option value="multimodal">Multimodal (LLM + Image + Video + Audio)</option>
                  <option value="local">Local First & Air-Gapped Execution</option>
                  <option value="enterprise">Enterprise Orchestration & Guardrails</option>
                  <option value="agentic">Agentic Automation & Code Generation</option>
                </select>
              </div>

              {errorMsg && (
                <p className="text-xs font-mono text-rose-400 pt-1">{errorMsg}</p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-spin">⌛ Generating Key...</span>
                  ) : (
                    <>
                      <span>Submit Access Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 justify-center pt-2">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>Zero spam. Direct architecture release updates only.</span>
              </div>
            </form>
          ) : (
            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Check className="w-5 h-5 p-0.5 bg-emerald-500/20 rounded-full text-emerald-400" />
                  <span>WAITLIST CONFIRMED</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Your reservation key <strong className="text-white">{submission.accessKey}</strong> is locked in position <strong className="text-white">#{submission.queuePosition.toLocaleString()}</strong>.
                </p>
                <div className="p-3 bg-black/60 rounded border border-white/5 space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Registered Email:</span>
                    <span className="text-white">{submission.email}</span>
                  </div>
                  {submission.company && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Organization:</span>
                      <span className="text-white">{submission.company}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-500">Timestamp:</span>
                    <span className="text-emerald-400">{submission.timestamp}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-white/10 hover:bg-white/15 text-white font-mono text-xs rounded-lg transition-colors cursor-pointer"
              >
                Return to Landing Page
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
