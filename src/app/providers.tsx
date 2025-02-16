'use client';

import React, { useEffect, useState } from 'react';
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';

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
        <HeroUIProvider>
            <NextThemesProvider
                attribute="class"
                defaultTheme="dark"
                themes={['light', 'dark', 'modern']}
            >
                {children}
            </NextThemesProvider>
        </HeroUIProvider>
    );
}
