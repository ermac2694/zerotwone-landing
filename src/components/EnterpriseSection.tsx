import React from 'react';
import { Shield, ShieldCheck, Lock, FileCode2, Key, Activity, Users, FileSearch } from 'lucide-react';

interface EnterpriseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}

const EnterpriseCard: React.FC<EnterpriseCardProps> = ({ icon, title, description, badge }) => (
  <div className="glass-card glass-card-hover p-6 rounded-xl border border-white/10 flex flex-col justify-between space-y-4">
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
          {icon}
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10 uppercase">
          {badge}
        </span>
      </div>
      <h3 className="text-lg font-display font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-xs text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
    <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-purple-400 flex items-center justify-between">
      <span>ENTERPRISE SPEC</span>
      <span>COMPLIANT</span>
    </div>
  </div>
);

export const EnterpriseSection: React.FC = () => {
  return (
    <section id="enterprise" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span>Enterprise Ready Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Security, Governance & Scale for Production Teams.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Built from the ground up for SOC 2 Type II compliance, granular team permissions, encrypted secrets management, and continuous multi-region health monitoring.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EnterpriseCard
            icon={<Users className="w-5 h-5" />}
            title="RBAC & Team Isolation"
            description="Role-based access controls for workspace owners, prompt engineers, compliance officers, and automated service accounts with fine-grained scoping."
            badge="Security"
          />

          <EnterpriseCard
            icon={<FileSearch className="w-5 h-5" />}
            title="Immutable Audit Logs"
            description="Complete tamper-evident trace logging for every prompt execution, human approval token, provider API call, and credit transaction."
            badge="Compliance"
          />

          <EnterpriseCard
            icon={<FileCode2 className="w-5 h-5" />}
            title="Versioned Workflow Templates"
            description="Git-like branching, tagging, and deployment pipelines for AI workflows. Instantly rollback broken stages or promote staging environments."
            badge="DevOps"
          />

          <EnterpriseCard
            icon={<Lock className="w-5 h-5" />}
            title="Programmatic API Access"
            description="Trigger workflows via REST, gRPC, or Webhooks. Integrate directly into CI/CD pipelines, backend servers, or Slack bot workflows."
            badge="Integration"
          />

          <EnterpriseCard
            icon={<Key className="w-5 h-5" />}
            title="Secure Vault & Secrets"
            description="Hardware-backed encryption (KMS / HashiCorp Vault) for external provider API keys, OAuth refresh tokens, and private database credentials."
            badge="Encryption"
          />

          <EnterpriseCard
            icon={<Activity className="w-5 h-5" />}
            title="Provider Health Monitoring"
            description="Real-time uptime tracking and automated failover across all connected cloud AI APIs and local fallbacks during provider outages."
            badge="Resilience"
          />
        </div>

      </div>
    </section>
  );
};
