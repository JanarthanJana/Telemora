import React, { useState } from 'react';
import { X, AlertTriangle, CheckCircle2, UserCheck, Shield, Activity, Thermometer, Gauge, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import { ANOMALY_INVESTIGATION_DATA, ASSETS_DATA } from '../data/mockData';

interface InvestigationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvestigationModal: React.FC<InvestigationModalProps> = ({ isOpen, onClose }) => {
  const [engineerNote, setEngineerNote] = useState('');
  const [noteSubmitted, setNoteSubmitted] = useState(false);
  const asset = ASSETS_DATA[0]; // PUMP-204

  if (!isOpen) return null;

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!engineerNote.trim()) return;
    setNoteSubmitted(true);
    setTimeout(() => {
      setNoteSubmitted(false);
      setEngineerNote('');
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#252A27] text-[#F5F5F0] rounded-2xl border-2 border-[#5D866C] shadow-2xl overflow-y-auto font-mono text-xs">
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#1E2320] px-6 py-4 border-b border-[#303C35] flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded bg-[#C2A68C]/20 text-[#C2A68C]">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-[#F5F5F0]">
                  ENGINEERING INVESTIGATION // {ANOMALY_INVESTIGATION_DATA.id}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#C2A68C]/30 text-[#E6D8C3] text-[10px] font-bold">
                  {ANOMALY_INVESTIGATION_DATA.severity}
                </span>
              </div>
              <div className="text-[11px] text-[#A2A9A3]">
                Asset: {ANOMALY_INVESTIGATION_DATA.assetName} ({ANOMALY_INVESTIGATION_DATA.assetId}) • Detected: {ANOMALY_INVESTIGATION_DATA.detectedAt}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-[#A2A9A3] hover:text-[#F5F5F0] hover:bg-[#303C35] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Summary Box */}
          <div className="p-4 rounded-xl bg-[#1E2320] border border-[#303C35]">
            <div className="text-xs font-bold text-[#C2A68C] uppercase tracking-wider mb-1">
              INVESTIGATION SUMMARY
            </div>
            <p className="text-xs text-[#F5F5F0] font-sans leading-relaxed">
              {ANOMALY_INVESTIGATION_DATA.summary}
            </p>
          </div>

          {/* Evidence Grid & Correlated Signals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Correlated Evidence List */}
            <div className="p-4 rounded-xl bg-[#1E2320] border border-[#303C35] space-y-3">
              <div className="text-xs font-bold text-[#5D866C] uppercase tracking-wider">
                CORRELATED EVIDENCE BUNDLE
              </div>
              <ul className="space-y-2 text-[11px] text-[#A2A9A3]">
                {ANOMALY_INVESTIGATION_DATA.evidence.map((ev, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5D866C] shrink-0 mt-1.5"></span>
                    <span className="font-sans leading-relaxed">{ev}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signal Correlation Table */}
            <div className="p-4 rounded-xl bg-[#1E2320] border border-[#303C35] space-y-3">
              <div className="text-xs font-bold text-[#C2A68C] uppercase tracking-wider">
                MULTI-SIGNAL CORRELATIONS
              </div>
              <div className="space-y-2">
                {ANOMALY_INVESTIGATION_DATA.correlatedSignals.map((sig, i) => (
                  <div key={i} className="p-2.5 rounded bg-[#252A27] border border-[#303C35] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#F5F5F0]">{sig.name}</div>
                      <div className="text-[10px] text-[#687069]">Trend: {sig.trend}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#5D866C]/20 text-[#A8D5BA] font-bold text-[10px]">
                      {sig.correlation}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Proposed Decision Support Recommendation */}
          <div className="p-4 rounded-xl bg-[#2B342F] border border-[#5D866C]/60 space-y-2">
            <div className="flex items-center gap-2 text-[#A8D5BA] font-bold">
              <UserCheck className="w-4 h-4 text-[#5D866C]" />
              <span>RECOMMENDED ENGINEERING ACTION:</span>
            </div>
            <p className="text-xs text-[#F5F5F0] font-sans leading-relaxed">
              {ANOMALY_INVESTIGATION_DATA.recommendedAction}
            </p>
          </div>

          {/* Engineer Note / Sign-off Simulation */}
          <form onSubmit={handleSaveNote} className="p-4 rounded-xl bg-[#1E2320] border border-[#303C35] space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#E6D8C3] uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#5D866C]" />
                RELIABILITY ENGINEER AUDIT NOTE
              </span>
              <span className="text-[10px] text-[#687069]">HUMAN-IN-THE-LOOP</span>
            </div>

            <textarea
              rows={2}
              value={engineerNote}
              onChange={(e) => setEngineerNote(e.target.value)}
              placeholder="Record engineering assessment, acoustic probe findings, or scheduled inspection tag..."
              className="w-full p-2.5 rounded bg-[#252A27] border border-[#303C35] text-[#F5F5F0] text-xs font-mono focus:outline-none focus:ring-1 focus:ring-[#5D866C]"
            />

            <div className="flex items-center justify-between">
              {noteSubmitted ? (
                <span className="text-[#5D866C] font-bold text-xs flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Engineering note logged into asset audit trail.
                </span>
              ) : (
                <span className="text-[10px] text-[#687069]">
                  Logged with timestamp and user credential.
                </span>
              )}

              <button
                type="submit"
                className="px-4 py-2 rounded bg-[#5D866C] hover:bg-[#4d705a] text-[#F5F5F0] font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Log Assessment
              </button>
            </div>
          </form>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#1E2320] border-t border-[#303C35] flex items-center justify-between text-[11px] text-[#687069]">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#5D866C]" />
            <span>Decision Support Payload — No unreviewed machine actuation commands emitted.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#252A27] hover:bg-[#303C35] text-[#F5F5F0] border border-[#303C35]"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
