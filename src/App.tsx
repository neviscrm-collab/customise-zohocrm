import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { Footer } from './components/Footer';

/**
 * Root application shell for customisemyzohocrm.com.
 * Renders: sticky header → landing page hero → footer.
 */
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Skip-to-content link for keyboard / screen-reader users */}
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only
          focus:fixed focus:top-4 focus:left-4 focus:z-50
          bg-red-600 text-white text-sm font-medium
          px-4 py-2 rounded-lg
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
        "
      >
        Skip to main content
      </a>

      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
