'use client';
import Link from "next/link";
import { Github, MessageSquare, Mail, Code, BookOpen, Shield, FileText, ArrowRight, Heart } from 'lucide-react';

interface FooterProps {
  links?: { label: string; href: string }[];
  resourceLinks?: { label: string; href: string }[];
  legalLinks?: { label: string; href: string }[];
  currentLang?: 'de' | 'en' | 'fr' | 'ru' | 'uk';
}

const translations = {
  de: {
    navigation: 'Navigation',
    resources: 'Ressourcen',
    legal: 'Rechtliches',
    community: 'Community',
    followUs: 'Folge uns',
    copyright: 'Alle Rechte vorbehalten',
    designed: 'Entwickelt mit',
    by: 'von DevVoxel',
  },
  en: {
    navigation: 'Navigation',
    resources: 'Resources',
    legal: 'Legal',
    community: 'Community',
    followUs: 'Follow Us',
    copyright: 'All rights reserved',
    designed: 'Designed with',
    by: 'by DevVoxel',
  },
  fr: {
    navigation: 'Navigation',
    resources: 'Ressources',
    legal: 'Légal',
    community: 'Communauté',
    followUs: 'Suivez-nous',
    copyright: 'Tous droits réservés',
    designed: 'Conçu avec',
    by: 'par DevVoxel',
  },
  ru: {
    navigation: 'Навигация',
    resources: 'Ресурсы',
    legal: 'Правовая информация',
    community: 'Сообщество',
    followUs: 'Следуйте за нами',
    copyright: 'Все права защищены',
    designed: 'Разработано с',
    by: 'от DevVoxel',
  },
  uk: {
    navigation: 'Навігація',
    resources: 'Ресурси',
    legal: 'Правова інформація',
    community: 'Спільнота',
    followUs: 'Слідкуйте за нами',
    copyright: 'Всі права захищені',
    designed: 'Розроблено з',
    by: 'від DevVoxel',
  },
};

export default function Footer({
  links = [],
  resourceLinks = [],
  legalLinks = [],
  currentLang = 'de',
}: FooterProps) {
  const t = translations[currentLang] || translations.en;

  return (
    <footer className="mt-auto border-t border-[var(--foreground)]/10 bg-gradient-to-b from-[var(--background)] to-[var(--foreground)]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href={`/${currentLang}`} className="inline-block mb-4">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                DevVoxel
              </div>
            </Link>
            <p className="text-sm text-[var(--foreground)]/70 mb-4 leading-relaxed">
              Professional Minecraft plugins for developers and server operators. Open source, community-driven, and always improving.
            </p>
            <div className="flex gap-3">
              <a
                href="https://discord.gg/fKgyae8R4e"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 transition-colors group"
                aria-label="Discord"
              >
                <MessageSquare className="w-5 h-5 text-[var(--foreground)]/70 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
              </a>
              <a
                href="https://github.com/devvoxelv2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-[var(--foreground)]/70 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" />
              </a>
              <a
                href="mailto:support@devvoxel.net"
                className="p-2 rounded-lg bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-[var(--foreground)]/70 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          {links.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4 text-base flex items-center gap-2">
                <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                {t.navigation}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Resources */}
          {resourceLinks.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4 text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-green-600 dark:text-green-400" />
                {t.resources}
              </h3>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legal & Community */}
          <div>
            <h3 className="font-semibold mb-4 text-base flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              {t.legal}
            </h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors flex items-center gap-2 group"
                  >
                    <FileText className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Community Section */}
            <div>
              <h4 className="font-semibold mb-3 text-sm text-[var(--foreground)]/80">{t.community}</h4>
              <div className="space-y-2">
                <a
                  href="https://discord.gg/fKgyae8R4e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--foreground)]/70 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discord</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all ml-auto" />
                </a>
                <a
                  href="https://github.com/devvoxel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--foreground)]/70 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all ml-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--foreground)]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--foreground)]/60 text-center md:text-left">
              © 2024 - {new Date().getFullYear()} DevVoxel. {t.copyright}
            </p>
            <p className="text-sm text-[var(--foreground)]/60 flex items-center gap-1">
              {t.designed} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t.by}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
