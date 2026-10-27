'use client';
import { useState } from 'react';
import { Shield, CheckCircle2, AlertTriangle, FileText, Users, BarChart3, BookOpen, ArrowRight, Sparkles, Send, Check, X } from 'lucide-react';

interface Violation {
  type: string;
  severity: 'high' | 'medium';
  issue: string;
  explanation: string;
  suggestion: string;
}

interface ApprovalItem {
  id: string;
  title: string;
  format: string;
  creator: string;
  status: 'Pending Review' | 'Changes Requested' | 'Approved';
  date: string;
  complianceScore: number;
}

export default function BrandGovernanceDashboard() {
  const [activeTab, setActiveTab] = useState<'studio' | 'workflow' | 'guidelines' | 'insights'>('studio');
  
  // Studio State
  const [contentType, setContentType] = useState('Blog Post');
  const [draftContent, setDraftContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    score: number;
    violations: Violation[];
    revisedContent: string;
  } | null>(null);

  // Workflow Queue State
  const [queue, setQueue] = useState<ApprovalItem[]>([
    { id: 'INC-104', title: 'Q3 Enterprise Product Launch Press Release', format: 'Press Release', creator: 'Ananya Sharma', status: 'Pending Review', date: '2026-10-27', complianceScore: 82 },
    { id: 'INC-103', title: 'Social Media Campaign: AI Security Best Practices', format: 'Social Media', creator: 'Rahul Verma', status: 'Changes Requested', date: '2026-10-26', complianceScore: 64 },
    { id: 'INC-102', title: 'Customer Success Case Study - Global Fintech', format: 'Case Study', creator: 'Priya Patel', status: 'Approved', date: '2026-10-25', complianceScore: 98 },
  ]);

  // Handle Guideline Audit
  const runBrandAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftContent.trim()) return;
    setIsAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      const lower = draftContent.toLowerCase();
      const violations: Violation[] = [];

      if (lower.includes('guaranteed') || lower.includes('best in the world') || lower.includes('100% safe')) {
        violations.push({
          type: 'Unsupported Promotional Claim',
          severity: 'high',
          issue: 'Unsubstantiated superlative or absolute guarantee used.',
          explanation: 'Brand guidelines prohibit absolute guarantees or unverified superlatives ("best in the world") without legal or empirical citation.',
          suggestion: 'Replace with verified metrics or qualified phrasing like "industry-leading architecture".'
        });
      }

      if (lower.includes('cheap') || lower.includes('budget') || lower.includes('hack')) {
        violations.push({
          type: 'Terminology & Tone Mismatch',
          severity: 'medium',
          issue: 'Informal or off-brand terminology detected.',
          explanation: 'Enterprise communication standards require professional, precise vocabulary rather than colloquial jargon.',
          suggestion: 'Use "cost-effective", "optimized", or "methodology" instead.'
        });
      }

      if (violations.length === 0) {
        violations.push({
          type: 'Minor Formatting',
          severity: 'medium',
          issue: 'Brand terminology capitalization check.',
          explanation: 'Ensure "Inkloom Shield" is always written in proper title case.',
          suggestion: 'Verify capitalization in secondary paragraphs.'
        });
      }

      const score = violations.length === 0 ? 100 : violations.some(v => v.severity === 'high') ? 72 : 88;
      
      let revised = draftContent;
      if (lower.includes('guaranteed')) revised = revised.replace(/guaranteed/gi, 'verified');
      if (lower.includes('best in the world')) revised = revised.replace(/best in the world/gi, 'highly scalable');
      if (lower.includes('cheap')) revised = revised.replace(/cheap/gi, 'cost-effective');

      setAnalysisResult({ score, violations, revisedContent: revised });
    }, 1200);
  };

  const updateStatus = (id: string, newStatus: 'Approved' | 'Changes Requested') => {
    setQueue(queue.map(item => item.id === id ? { ...item, status: newStatus } : item));
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Top Navigation */}
      <nav className="border-b border-slate-800 bg-[#030712]/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Inkloom Shield
              </h1>
              <p className="text-[10px] text-blue-400 font-mono">INTELLIGENT BRAND GOVERNANCE</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 text-xs font-medium">
            <button
              onClick={() => setActiveTab('studio')}
              className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${activeTab === 'studio' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <FileText className="h-3.5 w-3.5" /> Content Studio
            </button>
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${activeTab === 'workflow' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <Users className="h-3.5 w-3.5" /> Approvals & Queue
            </button>
            <button
              onClick={() => setActiveTab('guidelines')}
              className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${activeTab === 'guidelines' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <BookOpen className="h-3.5 w-3.5" /> Brand Rulebook
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${activeTab === 'insights' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <BarChart3 className="h-3.5 w-3.5" /> Insights & Analytics
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-8">
        
        {/* TAB 1: CONTENT STUDIO */}
        {activeTab === 'studio' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header info */}
            <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-blue-500/20 p-8 rounded-2xl relative overflow-hidden">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
                  <Sparkles className="h-3.5 w-3.5" /> Pre-Publication Brand Guard Active
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Intelligent Content Review & Correction</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Submit drafts, marketing copy, or press releases. The governance engine checks tone, terminology, promotional claims, and consistency against official brand guidelines before publication.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Draft Submission</h3>
                  <select
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                    className="bg-slate-950 text-xs text-slate-300 border border-slate-700 rounded-lg px-3 py-1.5 font-mono focus:outline-none focus:border-blue-500"
                  >
                    <option>Blog Post</option>
                    <option>Social Media</option>
                    <option>Press Release</option>
                    <option>Email Newsletter</option>
                  </select>
                </div>

                <form onSubmit={runBrandAudit} className="space-y-4">
                  <textarea
                    rows={8}
                    value={draftContent}
                    onChange={(e) => setDraftContent(e.target.value)}
                    placeholder="Paste your draft content here to verify tone, claims, and terminology compliance..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-slate-200 font-mono focus:outline-none focus:border-blue-500 leading-relaxed"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isAnalyzing || !draftContent.trim()}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium py-3 rounded-xl text-sm transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                  >
                    {isAnalyzing ? 'Auditing Against Brand Guidelines...' : 'Run Brand Compliance Audit'} <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>

              {/* Analysis & Explainable Corrections Result */}
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Compliance Audit Report</h3>
                    {analysisResult && (
                      <span className={`text-xs font-mono px-3 py-1 rounded-full font-bold ${analysisResult.score > 80 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                        Brand Score: {analysisResult.score}/100
                      </span>
                    )}
                  </div>

                  {analysisResult ? (
                    <div className="space-y-4 text-xs">
                      {analysisResult.violations.map((v, idx) => (
                        <div key={idx} className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-rose-400 flex items-center gap-1.5">
                              <AlertTriangle className="h-3.5 w-3.5" /> {v.type}
                            </span>
                            <span className="uppercase font-mono text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400 border border-slate-800">
                              {v.severity} priority
                            </span>
                          </div>
                          <p className="text-slate-300"><strong>Issue:</strong> {v.issue}</p>
                          <p className="text-slate-400 italic"><strong>Why:</strong> {v.explanation}</p>
                          <div className="pt-2 border-t border-slate-900 text-emerald-400 font-mono">
                            <strong>Suggested Correction:</strong> {v.suggestion}
                          </div>
                        </div>
                      ))}

                      <div className="bg-slate-950 border border-blue-500/30 p-4 rounded-xl space-y-2">
                        <span className="font-bold text-blue-400 block font-mono">Optimized Brand-Compliant Draft:</span>
                        <p className="text-slate-300 font-mono bg-slate-900 p-3 rounded-lg leading-relaxed">{analysisResult.revisedContent}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-20 text-slate-500 font-mono text-xs">
                      Awaiting draft submission. Enter text in the studio and run an audit to view explainable corrections.
                    </div>
                  )}
                </div>

                {analysisResult && (
                  <button
                    onClick={() => {
                      setDraftContent(analysisResult.revisedContent);
                      alert('Optimized brand-compliant text applied to editor!');
                    }}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-2.5 rounded-xl text-xs transition font-mono border border-slate-700"
                  >
                    Apply Approved Corrections to Editor
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WORKFLOW & APPROVAL QUEUE */}
        {activeTab === 'workflow' && (
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-6 animate-fadeIn">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-white">Review & Approval Workflow</h3>
                <p className="text-xs text-slate-400">Collaborative queue for creators, managers, and authorized reviewers to track status and approve publications.</p>
              </div>
              <span className="text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-lg">
                3 Active Submissions
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Content Title</th>
                    <th className="p-4">Format</th>
                    <th className="p-4">Creator</th>
                    <th className="p-4">Compliance</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Review Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {queue.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-950/50 transition">
                      <td className="p-4 font-bold text-slate-400">{item.id}</td>
                      <td className="p-4 font-semibold text-white">{item.title}</td>
                      <td className="p-4 text-slate-400">{item.format}</td>
                      <td className="p-4 text-slate-300">{item.creator}</td>
                      <td className="p-4">
                        <span className="text-emerald-400 font-bold">{item.complianceScore}%</span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                          item.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                          item.status === 'Changes Requested' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                          'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => updateStatus(item.id, 'Approved')}
                          className="bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-lg transition"
                          title="Approve Content"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateStatus(item.id, 'Changes Requested')}
                          className="bg-rose-600/20 hover:bg-rose-600/40 text-rose-400 border border-rose-500/30 px-3 py-1 rounded-lg transition"
                          title="Request Changes"
                        >
                          Revise
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: BRAND RULEBOOK */}
        {activeTab === 'guidelines' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-xs uppercase font-mono text-blue-400 font-semibold">Rule Category 01</span>
              <h3 className="text-lg font-bold text-white">Tone & Voice Profile</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Professional, authoritative yet approachable. Avoid overly casual slang or aggressive sales superlatives.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-400">✓ Enforced across all blog & social copy</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-xs uppercase font-mono text-indigo-400 font-semibold">Rule Category 02</span>
              <h3 className="text-lg font-bold text-white">Claim Verification</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                All performance metrics and security claims must be backed by verified telemetry data or official audit reports.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-400">✓ Prevents unverified promotional statements</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <span className="text-xs uppercase font-mono text-cyan-400 font-semibold">Rule Category 03</span>
              <h3 className="text-lg font-bold text-white">Terminology Glossary</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mandatory product naming conventions: "Inkloom Shield", "Neural Core", "Team tutu". Prohibits outdated terms.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-400">✓ Automated spelling & naming filter</div>
            </div>
          </div>
        )}

        {/* TAB 4: INSIGHTS & ANALYTICS */}
        {activeTab === 'insights' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
                <p className="text-xs text-slate-400 uppercase font-mono">Overall Brand Compliance</p>
                <h3 className="text-3xl font-bold text-white mt-2">94.6%</h3>
                <p className="text-xs text-emerald-400 mt-1">↑ 3.2% from last month</p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
                <p className="text-xs text-slate-400 uppercase font-mono">Most Frequent Violation</p>
                <h3 className="text-xl font-bold text-amber-400 mt-2">Superlative Claims</h3>
                <p className="text-xs text-slate-400 mt-1">38% of total flagged issues</p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
                <p className="text-xs text-slate-400 uppercase font-mono">Avg Review Turnaround</p>
                <h3 className="text-3xl font-bold text-white mt-2">14 mins</h3>
                <p className="text-xs text-emerald-400 mt-1">↓ 8 mins faster than baseline</p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
                <p className="text-xs text-slate-400 uppercase font-mono">Active Contributors</p>
                <h3 className="text-3xl font-bold text-white mt-2">12 Members</h3>
                <p className="text-xs text-blue-400 mt-1">Team tutu workspace</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Guideline Clarity & Mistakes Insight</h3>
              <p className="text-xs text-slate-400">Analytics indicate that creators frequently struggle with promotional claim boundaries in press releases. Consider updating guideline documentation in the Brand Rulebook.</p>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Inkloom Shield. Intelligent Brand Governance Platform • Developed by Team tutu.</p>
      </footer>

    </div>
  );
}
