/**
 * Lightweight analytics wrapper.
 * Replace the console.log with your real analytics SDK (e.g. Segment, Mixpanel, GA4).
 */
export function track(event: string, properties?: Record<string, unknown>): void {
  // In production, swap this for: analytics.track(event, properties)
  console.log(`[Analytics] ${event}`, properties ?? {});

  // Example GA4 integration (uncomment when gtag is loaded):
  // if (typeof window.gtag === 'function') {
  //   window.gtag('event', event, properties);
  // }
}
