'use client';

import React from 'react';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import Link from "next/link";
import {
  Users,
  Target,
  Eye,
  Code,
  Heart,
  ShieldCheck,
  Rocket,
  Award,
  Zap,
  Globe,
  ArrowRight,
  Github,
  MessageSquare,
  Star,
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

const values = [
  {
    icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Open Source",
    description: "Alle unsere Plugins sind Open Source und frei verfügbar. Transparenz und Community-Beteiligung stehen im Vordergrund.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-400" />,
    title: "Qualität",
    description: "Wir setzen auf hohe Qualitätsstandards, gründliches Testing und umfassende Dokumentation für alle unsere Projekte.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: "Community",
    description: "Unsere Community steht im Mittelpunkt. Wir fördern Zusammenarbeit, Wissensaustausch und gegenseitige Unterstützung.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    title: "Innovation",
    description: "Wir entwickeln kontinuierlich neue Features, verbessern bestehende Plugins und bleiben auf dem neuesten Stand der Technik.",
  },
];

const teamMembers = [
  {
    name: "DerGamer09",
    role: "Founder & Lead Developer",
    bio: "Leitet Entwicklung & Community. Spezialisiert auf Multi-Server-Synchronisation und Performance-Optimierung. Seit über 5 Jahren in der Minecraft-Plugin-Entwicklung aktiv.",
    skills: ["Java", "Plugin Development", "Performance", "Architecture"],
  },
  {
    name: "Tobi",
    role: "Admin & Community Manager",
    bio: "Community- & Support-Manager. Verantwortlich für Dokumentation, Support und Community-Aufbau. Experte für Server-Management und User-Experience.",
    skills: ["Community Management", "Documentation", "Support", "UX"],
  },
];

const communityTypes = [
  {
    icon: <Code className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Entwickler",
    description: "Erstelle Plugins, Tools und APIs für Minecraft und andere Plattformen. Teile dein Wissen und lerne von anderen.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600 dark:text-green-400" />,
    title: "Server-Admins",
    description: "Finde Plugins, Ressourcen und Unterstützung für deine Server. Optimiere deine Server-Performance und User-Experience.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Users className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
    title: "Community-Mitglieder",
    description: "Diskutiere, lerne und vernetze dich mit anderen Entwicklern und Gamern. Werde Teil einer aktiven und hilfsbereiten Community.",
    color: "from-purple-500 to-pink-600",
  },
];

const stats = [
  { label: "Plugins", value: "4+", icon: <Code className="w-5 h-5" /> },
  { label: "Downloads", value: "25k+", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Community", value: "3k+", icon: <Users className="w-5 h-5" /> },
  { label: "Bewertung", value: "4.8★", icon: <Star className="w-5 h-5" /> },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="de" />

      <main className="flex flex-col flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Über uns</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Über DevVoxel
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 max-w-3xl mx-auto mb-8">
            DevVoxel ist eine Minecraft Developer-Organisation, die hochwertige Plugins, Tools, Tutorials und eine aktive Community für Entwickler und Gamer bietet.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 rounded-xl border border-[var(--foreground)]/10"
              >
                <div className="flex items-center justify-center mb-2 text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-[var(--foreground)]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-semibold">Unsere Mission</h2>
              </div>
              <p className="text-[var(--foreground)]/90 leading-relaxed">
                Wir möchten Entwicklern und Gamern eine zentrale Plattform bieten, auf der sie hochwertige Plugins, Tools und Ressourcen finden und ihre Projekte effektiv umsetzen können. Unser Ziel ist es, die Minecraft-Entwicklung zugänglicher und produktiver zu machen.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/20 dark:border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-semibold">Unsere Vision</h2>
              </div>
              <p className="text-[var(--foreground)]/90 leading-relaxed">
                DevVoxel soll die führende Anlaufstelle für kreative Minecraft-Entwickler weltweit werden – eine Community, die Wissen teilt, sich gegenseitig unterstützt und innovative Projekte ermöglicht. Wir streben danach, die beste Open-Source-Plugin-Organisation zu sein.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Unsere Werte</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Die Prinzipien, die unsere Arbeit und unsere Community leiten
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--foreground)]/90 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Unser Team</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Erfahrene Entwickler, die leidenschaftlich an Minecraft-Plugins arbeiten
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-xl shadow-lg flex-shrink-0">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-xl mb-1">{member.name}</div>
                    <div className="text-sm text-[var(--foreground)]/70 mb-3">{member.role}</div>
                    <p className="text-sm text-[var(--foreground)]/90 leading-relaxed mb-3">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs px-2 py-1 rounded-full bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Community & Zielgruppen</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Unsere Community besteht aus verschiedenen Gruppen, die alle von DevVoxel profitieren
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityTypes.map((type, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`p-4 rounded-lg bg-gradient-to-br ${type.color} mb-4 w-fit mx-auto group-hover:scale-110 transition-transform`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{type.title}</h3>
                <p className="text-[var(--foreground)]/90 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story / History */}
        <section className="mb-16 bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Unsere Geschichte</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Wie DevVoxel entstanden ist und wohin wir gehen
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-[var(--foreground)]/90">
            <p>
              DevVoxel wurde 2024 gegründet mit dem Ziel, hochwertige Minecraft-Plugins zu entwickeln und eine aktive Community aufzubauen. 
              Was als kleines Projekt begann, ist heute eine etablierte Organisation mit mehreren erfolgreichen Plugins und einer wachsenden Community.
            </p>
            <p>
              Unser erstes großes Projekt war <strong>PlayerDataSync</strong> – ein Plugin, das die Synchronisation von Spielerdaten zwischen Servern revolutioniert. 
              Mit über 10.000 Downloads und einer 4.9-Sterne-Bewertung wurde es schnell zu einem der beliebtesten Plugins in unserer Sammlung.
            </p>
            <p>
              Heute entwickeln wir kontinuierlich neue Plugins, verbessern bestehende und unterstützen unsere Community mit umfassender Dokumentation, 
              Tutorials und aktivem Support. Unser Ziel ist es, die beste Open-Source-Plugin-Organisation für Minecraft zu werden.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Werde Teil unserer Community</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[var(--foreground)]/90">
              Schließe dich DevVoxel an, entdecke neue Ressourcen, lerne von anderen Entwicklern und bringe deine Projekte auf das nächste Level.
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
                <Button variant="secondary" className="py-3 px-6 flex items-center gap-2">
                  <Code className="w-4 h-4" />
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
