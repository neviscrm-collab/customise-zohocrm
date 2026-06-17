import React from 'react';

/**
 * Disclaimer card — light-yellow background, warning icon, WCAG-AA contrast.
 * Reusable: pass custom title/body via props if needed elsewhere.
 */
interface DisclaimerProps {
  title?: string;
  children: React.ReactNode;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({
  title = 'Important Notice',
  children,
}) => {
  return (
    <aside
      role="note"
      aria-label="Important notice about CRM customization"
      className="
        w-full rounded-2xl border border-amber-200
        bg-amber-50 px-6 py-5
        shadow-sm
      "
    >
      {/* Header row */}
      <div className="flex items-start gap-3">
        {/* Warning icon — pure SVG, no external deps */}
        <span aria-hidden="true" className="mt-0.5 flex-shrink-0">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              fill="#f59e0b"
              stroke="#d97706"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <line
              x1="12" y1="9" x2="12" y2="13"
              stroke="#92400e"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="17" r="1" fill="#92400e" />
          </svg>
        </span>

        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-semibold text-amber-900 mb-1.5">
            {title}
          </h2>
          <div className="text-sm text-amber-800 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
};
