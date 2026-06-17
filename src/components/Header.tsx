import React from 'react';

/**
 * Minimal top nav bar — Zoho CRM brand mark + product name.
 */
export const Header: React.FC = () => (
  <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
    <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
      {/* Zoho CRM logo mark */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #e8252a 0%, #c0392b 100%)' }}
        aria-hidden="true"
      >
        <span className="text-white font-bold text-sm select-none">Z</span>
      </div>
      <span className="font-semibold text-gray-800 text-sm tracking-tight">
        Zoho CRM
      </span>
      <span className="text-gray-300 text-sm select-none">·</span>
      <span className="text-gray-500 text-sm">Customization Portal</span>
    </div>
  </header>
);
