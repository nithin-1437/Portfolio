import React from 'react';
import { 
  X, 
  ExternalLink, 
  Download, 
  ShieldCheck, 
  FileText, 
  Calendar,
  CheckCircle2
} from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#0b162f] border border-sky-500/30 shadow-2xl p-5 sm:p-8 z-10 max-h-[92vh] flex flex-col justify-between overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Issued by {certificate.issuer}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {certificate.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close certificate modal"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 ml-3"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="my-5 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center p-2 sm:p-4 max-h-[55vh]">
          <img
            src={certificate.image}
            alt={certificate.name}
            className="max-h-[50vh] w-auto object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Credential Details & Verification Bar */}
        <div className="pt-4 border-t border-slate-800 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block mb-0.5">Credential ID</span>
              <span className="text-sky-300 font-semibold">{certificate.credentialId}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block mb-0.5">Issue Date</span>
              <span className="text-white font-medium">{certificate.issueDate}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400 block mb-0.5">Validity Status</span>
              <span className="text-emerald-400 font-medium">{certificate.expiryDate}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-3">
              {certificate.verifyUrl && (
                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify on Official Portal</span>
                </a>
              )}

              {certificate.pdfUrl && (
                <a
                  href={certificate.pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Download PDF Document</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
