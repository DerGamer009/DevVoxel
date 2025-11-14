'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Globe, Loader2 } from "lucide-react";
import Image from "next/image";

const supportedLanguages = [
  { code: 'de', label: 'Deutsch', flag: '/flags/de.svg' },
  { code: 'en', label: 'English', flag: '/flags/gb.svg' },
  { code: 'fr', label: 'Français', flag: '/flags/fr.svg' },
  { code: 'ru', label: 'Русский', flag: '/flags/ru.svg' },
  { code: 'uk', label: 'Українська', flag: '/flags/uk.svg' },
];

// Language detection with fallback
function detectLanguage(): string {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  const langCode = browserLang.split('-')[0];
  
  // Direct match
  const directMatch = supportedLanguages.find(lang => lang.code === langCode);
  if (directMatch) return directMatch.code;
  
  // Regional variants
  if (browserLang.startsWith('de')) return 'de';
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('ru')) return 'ru';
  if (browserLang.startsWith('uk')) return 'uk';
  
  // Check localStorage for saved preference
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang && supportedLanguages.find(lang => lang.code === savedLang)) {
    return savedLang;
  }
  
  // Default fallback
  return 'en';
}

export default function Home() {
  const router = useRouter();
  const [detectedLang, setDetectedLang] = useState<string | null>(null);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  useEffect(() => {
    // Small delay to show loading state
    const timer = setTimeout(() => {
      const lang = detectLanguage();
      setDetectedLang(lang);
      
      // Auto-redirect after short delay
      const redirectTimer = setTimeout(() => {
        router.replace(`/${lang}`);
      }, 1500);
      
      return () => clearTimeout(redirectTimer);
    }, 300);

    return () => clearTimeout(timer);
  }, [router]);

  const handleLanguageSelect = (langCode: string) => {
    localStorage.setItem('preferred-language', langCode);
    router.replace(`/${langCode}`);
  };

  if (showLanguageSelector) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
              <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Select Language</h1>
            <p className="text-[var(--foreground)]/70">Choose your preferred language</p>
          </div>
          
          <div className="space-y-2">
            {supportedLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 transition-all duration-300 group"
              >
                <Image 
                  src={lang.flag} 
                  alt={lang.label} 
                  width={32} 
                  height={32}
                  className="rounded-sm"
                />
                <span className="flex-1 text-left font-medium">{lang.label}</span>
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
          
          <p className="text-center text-sm text-[var(--foreground)]/60 mt-6">
            Your selection will be saved for future visits
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
            <Loader2 className="w-10 h-10 text-white animate-spin" />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 animate-pulse" />
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          DevVoxel
        </h1>
        <p className="text-[var(--foreground)]/70 mb-6">
          {detectedLang 
            ? `Redirecting to ${supportedLanguages.find(l => l.code === detectedLang)?.label || 'English'}...`
            : 'Detecting your language...'
          }
        </p>
        
        <button
          onClick={() => setShowLanguageSelector(true)}
          className="text-sm text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors underline"
        >
          Or choose manually
        </button>
      </div>
    </div>
  );
}
