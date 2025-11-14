'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  links: { label: string; href: string }[];
  currentLang?: 'de' | 'en' | 'fr' | 'ru' | 'uk';
}

export const languages = [
  { code: 'de', label: 'Deutsch', href: '/de', flag: '/flags/de.svg' },
  { code: 'en', label: 'English', href: '/en', flag: '/flags/gb.svg' },
  { code: 'fr', label: 'Français', href: '/fr', flag: '/flags/fr.svg' },
  { code: 'uk', label: 'Українська', href: '/uk', flag: '/flags/uk.svg' },
  { code: 'ru', label: 'Русский', href: '/ru', flag: '/flags/ru.svg' },
];

export default function Header({ links, currentLang = 'de' }: HeaderProps) {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const currentLanguage = languages.find(lang => lang.code === currentLang)!;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }

    if (langDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langDropdownOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Get homepage URL based on current language
  const homepageUrl = `/${currentLang}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--foreground)]/10 bg-[var(--background)]/95 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={homepageUrl} className="flex items-center gap-2 group">
            <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              DevVoxel
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Language Dropdown - Desktop */}
            <div className="hidden md:block relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--foreground)]/5 transition-colors border border-[var(--foreground)]/10"
                aria-label="Select language"
              >
                <Image 
                  src={currentLanguage.flag} 
                  alt={currentLanguage.label} 
                  width={20} 
                  height={20}
                  className="rounded-sm"
                />
                <span className="text-sm font-medium hidden lg:inline">{currentLanguage.label}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[var(--background)] border border-[var(--foreground)]/10 rounded-lg shadow-xl z-50 overflow-hidden">
                  {languages.map(lang => {
                    const isActive = lang.code === currentLang;
                    return (
                      <Link
                        key={lang.code}
                        href={lang.href}
                        className={`flex items-center gap-3 px-4 py-3 hover:bg-[var(--foreground)]/5 transition-colors ${
                          isActive ? 'bg-blue-50 dark:bg-blue-900/20 border-l-2 border-blue-600 dark:border-blue-400' : ''
                        }`}
                        onClick={() => setLangDropdownOpen(false)}
                      >
                        <Image 
                          src={lang.flag} 
                          alt={lang.label} 
                          width={20} 
                          height={20}
                          className="rounded-sm"
                        />
                        <span className={`text-sm font-medium ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                          {lang.label}
                        </span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[var(--foreground)]/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-[var(--background)] z-40 overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-[var(--foreground)]/80 hover:bg-[var(--foreground)]/5 hover:text-[var(--foreground)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Divider */}
              <div className="border-t border-[var(--foreground)]/10 my-4" />

              {/* Mobile Language Selector */}
              <div className="px-4">
                <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-[var(--foreground)]/70">
                  <Globe className="w-4 h-4" />
                  <span>Language</span>
                </div>
                <div className="space-y-2">
                  {languages.map(lang => {
                    const isActive = lang.code === currentLang;
                    return (
                      <Link
                        key={lang.code}
                        href={lang.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-600 dark:border-blue-400' 
                            : 'hover:bg-[var(--foreground)]/5'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Image 
                          src={lang.flag} 
                          alt={lang.label} 
                          width={24} 
                          height={24}
                          className="rounded-sm"
                        />
                        <span className={`text-sm font-medium ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                          {lang.label}
                        </span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Theme Toggle */}
              <div className="px-4 pt-4 border-t border-[var(--foreground)]/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--foreground)]/70">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
