import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, Menu, X, Shield, Sparkles, Compass } from 'lucide-react';

interface NavbarProps {
  onRequestBeta: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestBeta, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: 021 Icon + ZEROTWONE */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-[0_0_20px_rgba(124,58,237,0.5)] group-hover:scale-105 transition-transform">
            021
          </div>
          <span className="font-display font-extrabold text-lg text-white tracking-wider uppercase">
            ZEROTWONE
          </span>
        </a>

        {/* Right Nav Links: Vision, Architecture, Security, Beta */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-slate-300 uppercase">
          <button
            onClick={() => handleNavClick('philosophy')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Vision
          </button>
          <button
            onClick={() => handleNavClick('graph')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Architecture
          </button>
          <button
            onClick={() => handleNavClick('enterprise')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Security
          </button>
          {/* Request Beta Access commented out */}
          <span className="px-3 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 font-bold text-[10px] tracking-wider">
            Early Beta Access Coming Soon
          </span>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d12] border-b border-white/10 px-4 py-6 space-y-4 font-mono text-xs uppercase tracking-widest text-slate-200">
          <button
            onClick={() => handleNavClick('philosophy')}
            className="block w-full text-left py-2 hover:text-purple-400"
          >
            • Vision
          </button>
          <button
            onClick={() => handleNavClick('graph')}
            className="block w-full text-left py-2 hover:text-purple-400"
          >
            • Architecture
          </button>
          <button
            onClick={() => handleNavClick('enterprise')}
            className="block w-full text-left py-2 hover:text-purple-400"
          >
            • Security
          </button>
          <div className="w-full py-2.5 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-center font-bold rounded text-xs uppercase tracking-wider">
            Early Beta Access Coming Soon
          </div>
        </div>
      )}
    </header>
  );
};

