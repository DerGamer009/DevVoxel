'use client';

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Clock, Wrench, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Главная', href: '/ru' },
  { label: 'О нас', href: '/ru/about' },
  { label: 'Плагины', href: '/ru/plugins' },
  { label: 'Сообщество', href: '/ru/community' },
  { label: 'Контакты', href: '/ru/contact' },
];

const resourceLinks = [
  { label: 'PlayerDataSync', href: '/ru/plugins/playerdatasync' },
  { label: 'ItemDB', href: '/ru/plugins/itemdb-free' },
  { label: 'BungeeSystem', href: '/ru/plugins/bungeesystem' },
];

const legalLinks = [
  { label: 'Импрессум', href: '/ru/impressum' },
  { label: 'Конфиденциальность', href: '/ru/datenschutz' },
  { label: 'Условия', href: '/ru/terms' },
];

export default function MaintenancePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Target date: December 1, 2025, 00:00:00 Europe/Berlin
    const targetDate = new Date('2025-12-01T00:00:00+01:00'); // Europe/Berlin is UTC+1 in winter
    
    function updateCountdown() {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="ru" />

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="p-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 dark:border-blue-400/30">
              <Wrench className="w-16 h-16 text-blue-600 dark:text-blue-400 animate-pulse" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Ведутся технические работы
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 mb-12 max-w-2xl mx-auto">
            Мы работаем над улучшением сайта. Русская версия будет доступна в ближайшее время.
          </p>

          {/* Countdown */}
          {isClient && (
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                <span>Ожидаемое время запуска</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                  <div className="text-4xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-[var(--foreground)]/70 uppercase tracking-wide">
                    Дней
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                  <div className="text-4xl font-bold mb-2 text-green-600 dark:text-green-400">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-[var(--foreground)]/70 uppercase tracking-wide">
                    Часов
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                  <div className="text-4xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-[var(--foreground)]/70 uppercase tracking-wide">
                    Минут
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                  <div className="text-4xl font-bold mb-2 text-yellow-600 dark:text-yellow-400">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-[var(--foreground)]/70 uppercase tracking-wide">
                    Секунд
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-[var(--foreground)]/70 mt-6">
                До 1 декабря 2025 года, 00:00 (Europe/Berlin)
              </p>
            </div>
          )}

          {/* Alternative Links */}
          <div className="space-y-4">
            <p className="text-[var(--foreground)]/80 mb-6">
              Пока вы можете посетить другие версии сайта:
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <Link 
                href="/de" 
                className="px-6 py-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-blue-500/30 hover:border-blue-500/40 transition-colors flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Немецкая версия
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="/en" 
                className="px-6 py-3 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 border border-green-500/20 dark:border-green-500/30 hover:border-green-500/40 transition-colors flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Английская версия
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="/fr" 
                className="px-6 py-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/20 dark:border-purple-500/30 hover:border-purple-500/40 transition-colors flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Французская версия
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Discord Link */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-500/20 dark:border-indigo-500/30">
            <p className="text-sm text-[var(--foreground)]/80 mb-3">
              Присоединяйтесь к нашему Discord-сообществу для получения обновлений:
            </p>
            <a
              href="https://discord.gg/fKgyae8R4e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
            >
              <Zap className="w-4 h-4" />
              Присоединиться к Discord
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} currentLang="ru" />
    </div>
  );
}

