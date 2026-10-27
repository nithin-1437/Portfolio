import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Eye, 
  Download, 
  ShieldCheck, 
  Calendar,
  Key
} from 'lucide-react';
import { certifications } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Official Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Industry Certifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Verifiable credentials earned across Microsoft Azure, Oracle Cloud Infrastructure, Aviatrix Multi-Cloud Networking, and Automation Anywhere RPA.
          </p>
        </div>

        {/* Certifications Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between rounded-2xl bg-[#0b162f]/80 border border-slate-800 hover:border-sky-500/40 p-6 sm:p-7 glass-card transition-all duration-300 group"
            >
              <div className="space-y-4">
                
                {/* Header row: Issuer & Verified status */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-semibold">
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Certificate Name */}
                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {cert.description}
                  </p>
                </div>

                {/* Thumbnail Preview Banner */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-44 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer group/img"
                  title="Click to zoom certificate image"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain p-2 group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 text-white text-xs font-semibold shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>Preview Full Certificate</span>
                    </span>
                  </div>
                </div>

                {/* Credential Metadata Box */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1.5 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Credential ID:</span>
                    <span className="text-sky-300 font-semibold select-all">{cert.credentialId}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Issue Date:</span>
                    <span className="text-slate-200">{cert.issueDate}</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span>Inspect Image</span>
                </button>

                <div className="flex items-center gap-2">
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download ${cert.name} PDF`}
                      className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                      title="Download PDF Certificate"
                    >
                      <Download className="w-4 h-4 text-sky-400" />
                    </a>
                  )}

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/20 transition-all hover:scale-[1.02]"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
