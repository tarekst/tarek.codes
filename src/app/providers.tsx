'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Suppress known upstream warnings from next-themes (script tag in React 19)
// and HeroUI v3 / React Aria (PressResponder without pressable child)
// See: https://github.com/pacocoursey/next-themes/issues/337
if (typeof window !== 'undefined') {
  const originalConsoleError = console.error;
  console.error = (...args: unknown[]) => {
    const msg = typeof args[0] === 'string' ? args[0] : '';
    if (
      msg.includes('Encountered a script tag while rendering React component') ||
      msg.includes('PressResponder was rendered without a pressable child') ||
      msg.includes('A tree hydrated but some attributes of the server rendered HTML')
    ) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="loader-container">
        <div className="loader-spinner" />
        <style jsx>{`
          .loader-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: white;
          }
          @media (prefers-color-scheme: dark) {
            .loader-container {
              background-color: black;
            }
          }
          .loader-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            border-top-color: black;
          }
          @media (prefers-color-scheme: dark) {
            .loader-spinner {
              border-top-color: white;
            }
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      themes={['light', 'dark', 'modern']}
    >
      {children}
    </NextThemesProvider>
  );
}
