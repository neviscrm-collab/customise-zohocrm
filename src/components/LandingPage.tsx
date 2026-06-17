import React, { useState } from 'react';
import { Disclaimer } from './Disclaimer';
import { config } from '../lib/config';
import { track } from '../lib/analytics';

/**
 * Main landing page for customisemyzohocrm.com.
 *
 * Clicking "Start" fires an analytics event then redirects the user to the
 * existing onboarding journey at REACT_APP_ONBOARDING_URL (set in .env).
 */
export const LandingPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    // Fire analytics event
    track('customize_crm_start_clicked', {
      destination: config.onboardingUrl,
      timestamp: new Date().toISOString(),
    });

    setLoading(true);

    // Redirect to the existing onboarding journey (configurable via env var)
    window.location.href = config.onboardingUrl;
  };

  return (
    <main
      id="main-content"
      className="flex-1 flex items-center justify-center px-4 py-12 sm:py-20"
    >
      <div className="w-full max-w-[800px] mx-auto">

        {/* ── Hero Section ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="hero-heading"
          className="text-center mb-10"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 select-none">
            <span
              className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"
              aria-hidden="true"
            />
            Zoho CRM · Customization Portal
          </div>

          {/* Main heading — h1 for correct hierarchy */}
          <h1
            id="hero-heading"
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-bold text-gray-900
              leading-tight tracking-tight
              mb-5
            "
          >
            Customize Your{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #e8252a 0%, #c0392b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Zoho CRM
            </span>{' '}
            Experience
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg text-gray-500 max-w-[580px] mx-auto leading-relaxed mb-10">
            Configure your organization, workflows, modules, and business
            requirements before entering Zoho CRM. We'll help tailor the CRM
            experience to better match your business processes.
          </p>

          {/* ── Feature pills ──────────────────────────────────────────── */}
          <div className="flex flex-wrap justify-center gap-2 mb-10" aria-label="Key features">
            {[
              { icon: '⚙️', label: 'Modules & Fields' },
              { icon: '🔄', label: 'Workflows' },
              { icon: '📊', label: 'Dashboards' },
              { icon: '🤖', label: 'Automation' },
              { icon: '🏢', label: 'Org Settings' },
            ].map((f) => (
              <span
                key={f.label}
                className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-sm px-3 py-1.5 rounded-full"
              >
                <span aria-hidden="true">{f.icon}</span>
                {f.label}
              </span>
            ))}
          </div>

          {/* ── Primary CTA ────────────────────────────────────────────── */}
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={handleStart}
              disabled={loading}
              aria-label="Start customizing your Zoho CRM"
              className="
                relative group
                inline-flex items-center justify-center gap-2.5
                px-10 py-4
                text-white font-semibold text-base
                rounded-2xl
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-red-400 focus-visible:ring-offset-2
                disabled:opacity-70 disabled:cursor-not-allowed
              "
              style={{
                background: loading
                  ? '#c0392b'
                  : 'linear-gradient(135deg, #e8252a 0%, #c0392b 100%)',
                boxShadow: loading
                  ? 'none'
                  : '0 8px 24px rgba(232,37,42,0.30)',
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    '0 12px 32px rgba(232,37,42,0.40)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  '0 8px 24px rgba(232,37,42,0.30)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
              }}
            >
              {loading ? (
                <>
                  {/* Spinner */}
                  <svg
                    className="animate-spin w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10"
                      stroke="currentColor" strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    />
                  </svg>
                  <span>Redirecting…</span>
                </>
              ) : (
                <>
                  <span>Start</span>
                  {/* Arrow icon */}
                  <svg
                    width="18" height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>

            <p className="text-xs text-gray-400">
              Takes less than 2 minutes · No credit card required
            </p>
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────────── */}
        <div
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"
          aria-hidden="true"
        />

        {/* ── Disclaimer Section ───────────────────────────────────────── */}
        <section aria-label="Important customization notice">
          <Disclaimer title="Important Notice">
            Customizations performed through{' '}
            <strong className="font-semibold text-amber-900">
              MCB (Multi-Configuration Builder)
            </strong>{' '}
            may impact your Zoho CRM setup. Once a custom CRM instance is
            created, certain configurations may not be reversible automatically.
            While modifications can be made later, we recommend{' '}
            <strong className="font-semibold text-amber-900">
              reviewing your selections carefully
            </strong>{' '}
            before proceeding.
          </Disclaimer>
        </section>

        {/* ── Trust signals ────────────────────────────────────────────── */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-gray-400"
          aria-label="Trust signals"
        >
          {[
            { icon: '🔒', text: 'Enterprise-grade security' },
            { icon: '🌍', text: 'GDPR compliant' },
            { icon: '⚡', text: '99.9% uptime SLA' },
            { icon: '🏆', text: 'Used by 250,000+ businesses' },
          ].map((t) => (
            <div key={t.text} className="flex items-center gap-1.5">
              <span aria-hidden="true">{t.icon}</span>
              <span>{t.text}</span>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};
