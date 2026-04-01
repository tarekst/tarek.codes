'use client'

import React, { useState, useEffect, useCallback } from "react";
import {Link} from "@heroui/react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems: { [pageName: string]: string } = {
    "Profile": "profile",
    "Current Projects": "current-projects"
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-lg border-b border-default-200 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex h-16 items-center px-6">
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block h-0.5 w-5 bg-foreground transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-default-200 py-4 px-6">
          <ul className="flex flex-col gap-3">
            {Object.entries(menuItems).map(([pageName, id]) => (
              <li key={id}>
                <Link
                  className="w-full text-lg text-foreground"
                  href={`/#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {pageName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
