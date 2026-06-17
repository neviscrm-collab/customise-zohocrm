/**
 * Central config — all environment-driven values live here.
 * Set REACT_APP_ONBOARDING_URL in .env (or your hosting environment).
 */
export const config = {
  onboardingUrl:
    process.env.REACT_APP_ONBOARDING_URL ||
    'https://neviscrm-collab.github.io/zoho-crm-onboarding/',
} as const;
