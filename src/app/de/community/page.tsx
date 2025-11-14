'use client';

import React from 'react';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import Link from "next/link";
import {
  Users,
  MessageSquare,
  Github,
  BookOpen,
  LifeBuoy,
  Calendar,
  Trophy,
  Star,
  Zap,
  ShieldCheck,
  Heart,
  ArrowRight,
  Code,
  Rocket,
  Award,
  TrendingUp,
} from "lucide-react";

const navLinks = [
  { label: 'Start', href: '/de' },
  { label: 'Über uns', href: '/de/about' },
  { label: 'Plugins', href: '/de/plugins' },
  { label: 'Community', href: '/de/community' },
  { label: 'Kontakt', href: '/de/contact' },
];

const resourceLinks = [
  { label: "PlayerDataSync", href: "/de/plugins/playerdatasync" },
  { label: "ItemDB", href: "/de/plugins/itemdb-free" },
  { label: "BungeeSystem", href: "/de/plugins/bungeesystem" },
];

const legalLinks = [
  { label: 'Impressum', href: '/de/impressum' },
  { label: 'Datenschutz', href: '/de/datenschutz' },
  { label: 'Nutzungsbedingungen', href: '/de/terms' },
];

const communityStats = [
  { icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />, label: "Aktive Mitglieder", value: "3.000+" },
  { icon: <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />, label: "Tägliche Nachrichten", value: "500+" },
  { icon: <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />, label: "Community-Plugins", value: "50+" },
  { icon: <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />, label: "Beiträge", value: "10k+" },
];

const platforms = [
  {
    name: "Discord",
    description: "Unser aktiver Discord-Server — Support, Diskussionen und Community-Events",
    icon: <MessageSquare className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
    link: "https://discord.gg/fKgyae8R4e",
    color: "from-indigo-500 to-purple-600",
    features: ["Live-Support", "Plugin-Diskussionen", "Community-Events", "Entwickler-Chat"],
  },
  {
    name: "GitHub",
    description: "Open Source Projekte, Issues und Pull Requests — entwickle mit uns",
    icon: <Github className="w-10 h-10 text-gray-700 dark:text-gray-300" />,
    link: "#",
    color: "from-gray-600 to-gray-800",
    features: ["Open Source", "Issue Tracking", "Pull Requests", "Code Reviews"],
  },
  {
    name: "Dokumentation",
    description: "Umfassende Guides, Tutorials und API-Dokumentation für alle Plugins",
    icon: <BookOpen className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    link: "#",
    color: "from-blue-500 to-cyan-600",
    features: ["Tutorials", "API-Docs", "Konfiguration", "Beispiele"],
  },
];

const communityRules = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />,
    title: "Respektvoll bleiben",
    description: "Behandle alle Community-Mitglieder mit Respekt und Freundlichkeit.",
  },
  {
    icon: <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />,
    title: "Hilfsbereit sein",
    description: "Unterstütze andere Mitglieder und teile dein Wissen gerne.",
  },
  {
    icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: "Qualität vor Quantität",
    description: "Teile qualitativ hochwertige Beiträge und hilfreiche Lösungen.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: "Konstruktiv diskutieren",
    description: "Führe konstruktive Diskussionen und Feedback-Gespräche.",
  },
];

const upcomingEvents = [
  {
    title: "Community Meetup",
    date: "15. Januar 2026",
    description: "Virtuelles Community-Treffen — Diskussionen, Q&A und Updates",
    icon: <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Plugin Development Workshop",
    date: "22. Januar 2026",
    description: "Lerne, wie du dein erstes Minecraft-Plugin entwickelst",
    icon: <Code className="w-6 h-6 text-green-600 dark:text-green-400" />,
  },
  {
    title: "Community Challenge",
    date: "1. Februar 2026",
    description: "Entwickle das beste Community-Plugin und gewinne Preise",
    icon: <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
  },
];

export default function Community() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="de" />

      <main className="flex flex-col flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Community</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Willkommen in der DevVoxel Community
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 max-w-3xl mx-auto mb-8">
            Verbinde dich mit Entwicklern, Server-Admins und Gamern aus aller Welt. 
            Teile Wissen, erhalte Support und entwickle gemeinsam innovative Projekte.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {communityStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 rounded-xl border border-[var(--foreground)]/10"
              >
                <div className="flex items-center justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-[var(--foreground)]/70">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer">
              <Button className="py-3 px-6 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Discord beitreten
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="py-3 px-6 flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub besuchen
              </Button>
            </a>
          </div>
        </section>

        {/* Platforms */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Unsere Plattformen</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Verschiedene Wege, um mit der Community zu interagieren und Unterstützung zu erhalten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${platform.color} mb-4 w-fit`}>
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-[var(--foreground)]/90 mb-4 flex-1">{platform.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold mb-2">Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {platform.features.map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs px-2 py-1 rounded bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="w-full py-2 px-4 flex items-center justify-center gap-2">
                    Jetzt beitreten
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Community Rules */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Community-Regeln</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Unsere Richtlinien für eine positive und produktive Community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {communityRules.map((rule, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:shadow-lg transition-all"
              >
                <div className="mb-3">{rule.icon}</div>
                <h3 className="font-semibold mb-2">{rule.title}</h3>
                <p className="text-sm text-[var(--foreground)]/90">{rule.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kommende Events</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Nimm an unseren Community-Events teil und lerne neue Dinge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--foreground)]/8 dark:bg-[var(--foreground)]/16">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <div className="text-sm text-[var(--foreground)]/70 mb-2">{event.date}</div>
                  </div>
                </div>
                <p className="text-sm text-[var(--foreground)]/90">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16 bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Warum der Community beitreten?</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Viele Vorteile warten auf dich in unserer aktiven Community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <LifeBuoy className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Schneller Support</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Erhalte Hilfe von erfahrenen Entwicklern und Community-Mitgliedern innerhalb von Minuten.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <BookOpen className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Lerne & Wachse</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Zugang zu Tutorials, Guides und Best Practices von erfahrenen Entwicklern.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Rocket className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Früher Zugang</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Teste neue Plugins und Features vor dem offiziellen Release und gib Feedback.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Users className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Netzwerken</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Verbinde dich mit anderen Entwicklern, Server-Admins und Gamern weltweit.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Code className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Open Source</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Beteilige dich an Open Source Projekten und trage zur Community bei.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Award className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Anerkennung</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Erhalte Anerkennung für deine Beiträge und werde Teil des DevVoxel Teams.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bereit beizutreten?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[var(--foreground)]/90">
              Werde Teil unserer wachsenden Community und profitiere von allen Vorteilen. 
              Kostenlos und für jeden offen!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer">
                <Button className="py-3 px-6 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Discord beitreten
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link href="/de/plugins">
                <Button variant="secondary" className="py-3 px-6">
                  Plugins entdecken
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} />
    </div>
  );
}

