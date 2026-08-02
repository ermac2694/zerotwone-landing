import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MultiProviderSection } from './components/MultiProviderSection';
import { VisualWorkflowBuilder } from './components/VisualWorkflowBuilder';
import { ExecutionGraph } from './components/ExecutionGraph';
import { EnterpriseSection } from './components/EnterpriseSection';
import { PhilosophySection } from './components/PhilosophySection';
import { Footer } from './components/Footer';
import { BetaModal } from './components/BetaModal';

export default function App() {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-purple-500/30 selection:text-purple-200 font-sans relative overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar
        onRequestBeta={() => setIsBetaModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onRequestBeta={() => setIsBetaModalOpen(true)}
          onViewArchitecture={() => handleNavigate('graph')}
        />

        <MultiProviderSection />

        <VisualWorkflowBuilder />

        <ExecutionGraph />

        <EnterpriseSection />

        <PhilosophySection />
      </main>

      {/* Footer */}
      <Footer
        onRequestBeta={() => setIsBetaModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Request Beta Access Modal */}
      <BetaModal
        isOpen={isBetaModalOpen}
        onClose={() => setIsBetaModalOpen(false)}
      />
    </div>
  );
}
