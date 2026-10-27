'use client';
import { useState } from 'react';
import { Shield, Lock, Cpu, Activity, ArrowRight, CheckCircle2, Terminal, Zap, Globe } from 'lucide-react';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'ai' | 'encryption' | 'telemetry'>('ai');

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-500 selection:text-white font-sans">
      
      {/* Navbar */}
      <nav className="border-b border-slate-800/80 bg-[#030712]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Inkloom Shield
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#architecture" className="hover:text-white transition">Architecture</a>
            <a href="#telemetry" className="hover:text-white transition">Telemetry</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#app"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition shadow-lg shadow-blue-600/25 flex items-center gap-2"
            >
              Launch Console <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <Zap className="h-3.5 w-3.5" /> Next-Gen Hybrid Neural Security Engine
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Secure Intelligence for <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Critical Digital Assets
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Protect institutional data and AI workflows against advanced prompt injection, document tampering, and unauthorized data extraction in real time.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="#app"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 text-base"
            >
              Access Dashboard <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#features"
              className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-semibold px-8 py-4 rounded-xl transition flex items-center justify-center text-base"
            >
              Explore Capabilities
            </a>
          </div>

          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-slate-800/80 max-w-4xl mx-auto text-left">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white font-mono">99.98%</p>
              <p className="text-xs text-slate-400 mt-1">Threat Detection Accuracy</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white font-mono">42ms</p>
              <p className="text-xs text-slate-400 mt-1">Average Response Latency</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white font-mono">24/7</p>
              <p className="text-xs text-slate-400 mt-1">Autonomous Monitoring</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white font-mono">Zero</p>
              <p className="text-xs text-slate-400 mt-1">Data Leakage Vulnerability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 px-6 bg-slate-950/50 border-t border-slate-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400">Advanced Architecture</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Engineered for absolute reliability</h3>
            <p className="text-slate-400 text-sm">Built with a high-performance FastAPI backend and reactive Next.js frontend framework.</p>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              onClick={() => setActiveTab('ai')}
              className={`cursor-pointer p-8 rounded-2xl border transition-all ${activeTab === 'ai' ? 'bg-slate-900/90 border-blue-500/50 shadow-xl shadow-blue-500/10' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'}`}
            >
              <div className="h-12 w-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Cpu className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Neural AI Shielding</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Inspects incoming document structures and query parameters against malicious injection vectors instantly.
              </p>
            </div>

            <div 
              onClick={() => setActiveTab('encryption')}
              className={`cursor-pointer p-8 rounded-2xl border transition-all ${activeTab === 'encryption' ? 'bg-slate-900/90 border-blue-500/50 shadow-xl shadow-blue-500/10' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'}`}
            >
              <div className="h-12 w-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Lock className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Secure Vault Integration</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Encrypted storage pipelines ensure zero unauthorized access to sensitive files and transmission logs.
              </p>
            </div>

            <div 
              onClick={() => setActiveTab('telemetry')}
              className={`cursor-pointer p-8 rounded-2xl border transition-all ${activeTab === 'telemetry' ? 'bg-slate-900/90 border-blue-500/50 shadow-xl shadow-blue-500/10' : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'}`}
            >
              <div className="h-12 w-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <Activity className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Live Node Telemetry</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Real-time stream monitoring across multiple distributed backend nodes with automated failover protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 px-6 bg-slate-950 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Inkloom Shield. Developed by Team tutu.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 transition">Privacy Policy</span>
            <span className="hover:text-slate-300 transition">Security Audit</span>
            <span className="hover:text-slate-300 transition">API Documentation</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
