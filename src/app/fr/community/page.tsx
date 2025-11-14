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
  { label: 'Accueil', href: '/fr' },
  { label: 'À propos', href: '/fr/about' },
  { label: 'Plugins', href: '/fr/plugins' },
  { label: 'Communauté', href: '/fr/community' },
  { label: 'Contact', href: '/fr/contact' },
];

const resourceLinks = [
  { label: "PlayerDataSync", href: "/fr/plugins/playerdatasync" },
  { label: "ItemDB", href: "/fr/plugins/itemdb-free" },
  { label: "BungeeSystem", href: "/fr/plugins/bungeesystem" },
];

const legalLinks = [
  { label: 'Mentions légales', href: '/fr/impressum' },
  { label: 'Confidentialité', href: '/fr/datenschutz' },
  { label: 'Conditions', href: '/fr/terms' },
];

const communityStats = [
  { icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />, label: "Membres Actifs", value: "3 000+" },
  { icon: <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />, label: "Messages Quotidiens", value: "500+" },
  { icon: <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />, label: "Plugins Communautaires", value: "50+" },
  { icon: <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />, label: "Contributions", value: "10k+" },
];

const platforms = [
  {
    name: "Discord",
    description: "Notre serveur Discord actif — support, discussions et événements communautaires",
    icon: <MessageSquare className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
    link: "https://discord.gg/fKgyae8R4e",
    color: "from-indigo-500 to-purple-600",
    features: ["Support en Direct", "Discussions de Plugins", "Événements Communautaires", "Chat Développeurs"],
  },
  {
    name: "GitHub",
    description: "Projets open source, issues et pull requests — développez avec nous",
    icon: <Github className="w-10 h-10 text-gray-700 dark:text-gray-300" />,
    link: "#",
    color: "from-gray-600 to-gray-800",
    features: ["Open Source", "Suivi des Issues", "Pull Requests", "Revues de Code"],
  },
  {
    name: "Documentation",
    description: "Guides complets, tutoriels et documentation API pour tous les plugins",
    icon: <BookOpen className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    link: "#",
    color: "from-blue-500 to-cyan-600",
    features: ["Tutoriels", "Docs API", "Configuration", "Exemples"],
  },
];

const communityRules = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />,
    title: "Rester Respectueux",
    description: "Traitez tous les membres de la communauté avec respect et gentillesse.",
  },
  {
    icon: <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />,
    title: "Être Serviable",
    description: "Soutenez les autres membres et partagez vos connaissances volontiers.",
  },
  {
    icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: "Qualité avant Quantité",
    description: "Partagez des publications de haute qualité et des solutions utiles.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: "Discuter de Manière Constructive",
    description: "Participez à des discussions constructives et des conversations de retour d'information.",
  },
];

const upcomingEvents = [
  {
    title: "Rencontre Communautaire",
    date: "15 janvier 2026",
    description: "Réunion communautaire virtuelle — discussions, Q&A et mises à jour",
    icon: <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Atelier de Développement de Plugins",
    date: "22 janvier 2026",
    description: "Apprenez à développer votre premier plugin Minecraft",
    icon: <Code className="w-6 h-6 text-green-600 dark:text-green-400" />,
  },
  {
    title: "Défi Communautaire",
    date: "1er février 2026",
    description: "Développez le meilleur plugin communautaire et gagnez des prix",
    icon: <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
  },
];

export default function Community() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="fr" />

      <main className="flex flex-col flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Communauté</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Bienvenue dans la Communauté DevVoxel
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 max-w-3xl mx-auto mb-8">
            Connectez-vous avec des développeurs, administrateurs de serveurs et joueurs du monde entier. 
            Partagez vos connaissances, obtenez du support et développez des projets innovants ensemble.
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
                Rejoindre Discord
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="py-3 px-6 flex items-center gap-2">
                <Github className="w-4 h-4" />
                Visiter GitHub
              </Button>
            </a>
          </div>
        </section>

        {/* Platforms */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos Plateformes</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Différentes façons d'interagir avec la communauté et d'obtenir du support
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
                  <div className="text-sm font-semibold mb-2">Fonctionnalités :</div>
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
                    Rejoindre Maintenant
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Règles de la Communauté</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Nos directives pour une communauté positive et productive
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Événements à Venir</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Participez à nos événements communautaires et apprenez de nouvelles choses
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pourquoi Rejoindre la Communauté ?</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              De nombreux avantages vous attendent dans notre communauté active
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <LifeBuoy className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Support Rapide</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Obtenez de l'aide de développeurs expérimentés et de membres de la communauté en quelques minutes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <BookOpen className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Apprendre et Grandir</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Accès à des tutoriels, guides et meilleures pratiques de développeurs expérimentés.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Rocket className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Accès Anticipé</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Testez de nouveaux plugins et fonctionnalités avant la sortie officielle et fournissez des commentaires.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Users className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Réseautage</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Connectez-vous avec d'autres développeurs, administrateurs de serveurs et joueurs du monde entier.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Code className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Open Source</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Contribuez à des projets open source et redonnez à la communauté.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Award className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Reconnaissance</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Obtenez une reconnaissance pour vos contributions et devenez membre de l'équipe DevVoxel.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Prêt à Rejoindre ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[var(--foreground)]/90">
              Devenez partie de notre communauté grandissante et profitez de tous les avantages. 
              Gratuit et ouvert à tous !
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer">
                <Button className="py-3 px-6 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Rejoindre Discord
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link href="/fr/plugins">
                <Button variant="secondary" className="py-3 px-6">
                  Découvrir les Plugins
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} currentLang="fr" />
    </div>
  );
}

