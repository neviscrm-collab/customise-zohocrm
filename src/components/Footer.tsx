import React from 'react';

export const Footer: React.FC = () => (
  <footer className="w-full border-t border-gray-100 py-6 mt-auto">
    <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
      <span>© {new Date().getFullYear()} Zoho Corporation. All rights reserved.</span>
      <div className="flex items-center gap-4">
        <a
          href="https://www.zoho.com/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="https://www.zoho.com/terms.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="https://help.zoho.com/portal/en/kb/crm"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition-colors"
        >
          Help Center
        </a>
      </div>
    </div>
  </footer>
);
