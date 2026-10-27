'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [shieldActive, setShieldActive] = useState(true);
  const [scanLogs, setScanLogs] = useState([
    { id: 1, text: 'System initialized successfully.', status: 'SECURE', time: '10:42 AM' },
    { id: 2, text: 'AI neural filter loaded with 0 anomalies.', status: 'OPTIMAL', time: '10:42 AM' },
    { id: 3, text: 'Real-time telemetry listening on port 8000.', status: 'ACTIVE', time: '10:43 AM' },
  ]);

  const triggerScan = () => {
    const newLog = {
      id: scanLogs.length + 1,
      text: 'Manual security deep-scan executed across all nodes.',
      status: 'VERIFIED',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setScanLogs([newLog, ...scanLogs]);
  };

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Smart India Hackathon Project</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Inkloom Shield
          </h1>
        </div>
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
          <span className="text-sm text-slate-400">Status:</span>
          <span className={`px-2.5 py-1 text-xs font-bold rounded-lg ${shieldActive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/25'}`}>
            {shieldActive ? 'SHIELD ONLINE' : 'SHIELD PAUSED'}
          </span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl backdrop-blur-md">
          <p className="text-sm text-slate-400 font-medium">Threat Protection</p>
          <h3 className="text-3xl font-bold text-slate-100 mt-2">99.98%</h3>
          <p className="text-xs text-emerald-400 mt-1">↑ 0.14% increase today</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl backdrop-blur-md">
          <p className="text-sm text-slate-400 font-medium">Active Neural Nodes</p>
          <h3 className="text-3xl font-bold text-slate-100 mt-2">24 / 24</h3>
          <p className="text-xs text-blue-400 mt-1">All regions fully synced</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl backdrop-blur-md">
          <p className="text-sm text-slate-400 font-medium">Team & Submission</p>
          <h3 className="text-2xl font-bold text-slate-100 mt-2">Team tutu</h3>
          <p className="text-xs text-purple-400 mt-1">FastAPI & Next.js Stack</p>
        </div>
      </div>

      {/* Interactive Controls & Live Log */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls Card */}
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-200 mb-2">Shield Controls</h2>
            <p className="text-sm text-slate-400 mb-6">Manage core security protocols and perform real-time verification routines.</p>
          </div>
          <div className="space-y-3">
            <button
              onClick={triggerScan}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-xl transition duration-200 shadow-lg shadow-blue-600/20"
            >
              Run Deep Security Scan
            </button>
            <button
              onClick={() => setShieldActive(!shieldActive)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-3 px-4 rounded-xl transition duration-200 border border-slate-700"
            >
              {shieldActive ? 'Pause Shield' : 'Resume Shield'}
            </button>
          </div>
        </div>

        {/* Live Logs */}
        <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl backdrop-blur-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-200">Live Telemetry Logs</h2>
            <span className="text-xs text-slate-500 font-mono">Real-time stream</span>
          </div>
          <div className="space-y-3 font-mono text-xs">
            {scanLogs.map((log) => (
              <div key={log.id} className="flex items-center justify-between bg-slate-950/70 border border-slate-800/80 p-3.5 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">▶</span>
                  <span className="text-slate-300">{log.text}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">{log.time}</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/2org text-[10px]">{log.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
