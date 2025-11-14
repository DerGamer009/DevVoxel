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

const values = [
  {
    icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Open Source",
    description: "Tous nos plugins sont open source et librement disponibles. La transparence et la participation communautaire sont nos priorités.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-400" />,
    title: "Qualité",
    description: "Nous maintenons des normes de qualité élevées, des tests approfondis et une documentation complète pour tous nos projets.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: "Communauté",
    description: "Notre communauté est au cœur de tout. Nous favorisons la collaboration, le partage des connaissances et l'entraide.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    title: "Innovation",
    description: "Nous développons continuellement de nouvelles fonctionnalités, améliorons les plugins existants et restons à jour avec les dernières technologies.",
  },
];

const teamMembers = [
  {
    name: "DerGamer09",
    role: "Fondateur & Développeur Principal",
    bio: "Dirige le développement et la communauté. Spécialisé dans la synchronisation multi-serveurs et l'optimisation des performances. Actif dans le développement de plugins Minecraft depuis plus de 5 ans.",
    skills: ["Java", "Développement de Plugins", "Performance", "Architecture"],
  },
  {
    name: "Tobi",
    role: "Administrateur & Gestionnaire de Communauté",
    bio: "Gestionnaire de communauté et support. Responsable de la documentation, du support et de la construction de la communauté. Expert en gestion de serveurs et expérience utilisateur.",
    skills: ["Gestion de Communauté", "Documentation", "Support", "UX"],
  },
];

const communityTypes = [
  {
    icon: <Code className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Développeurs",
    description: "Créez des plugins, outils et APIs pour Minecraft et d'autres plateformes. Partagez vos connaissances et apprenez des autres.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600 dark:text-green-400" />,
    title: "Administrateurs de Serveurs",
    description: "Trouvez des plugins, ressources et support pour vos serveurs. Optimisez les performances de votre serveur et l'expérience utilisateur.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Users className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
    title: "Membres de la Communauté",
    description: "Discutez, apprenez et réseauter avec d'autres développeurs et joueurs. Devenez partie d'une communauté active et serviable.",
    color: "from-purple-500 to-pink-600",
  },
];

const stats = [
  { label: "Plugins", value: "4+", icon: <Code className="w-5 h-5" /> },
  { label: "Téléchargements", value: "25k+", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Communauté", value: "3k+", icon: <Users className="w-5 h-5" /> },
  { label: "Note", value: "4.8★", icon: <Star className="w-5 h-5" /> },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="fr" />

      <main className="flex flex-col flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>À propos</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            À propos de DevVoxel
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 max-w-3xl mx-auto mb-8">
            DevVoxel est une organisation de développeurs Minecraft qui fournit des plugins de haute qualité, des outils, des tutoriels et une communauté active pour les développeurs et les joueurs.
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
                <h2 className="text-2xl font-semibold">Notre Mission</h2>
              </div>
              <p className="text-[var(--foreground)]/90 leading-relaxed">
                Nous voulons fournir aux développeurs et aux joueurs une plateforme centrale où ils peuvent trouver des plugins, outils et ressources de haute qualité et mettre en œuvre efficacement leurs projets. Notre objectif est de rendre le développement Minecraft plus accessible et productif.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/20 dark:border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-semibold">Notre Vision</h2>
              </div>
              <p className="text-[var(--foreground)]/90 leading-relaxed">
                DevVoxel devrait devenir la destination de premier plan pour les développeurs Minecraft créatifs du monde entier – une communauté qui partage les connaissances, se soutient mutuellement et permet des projets innovants. Nous visons à être la meilleure organisation de plugins open source.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Les principes qui guident notre travail et notre communauté
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Développeurs expérimentés passionnés par les plugins Minecraft
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Communauté et Groupes Cibles</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Notre communauté se compose de divers groupes qui bénéficient tous de DevVoxel
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Notre Histoire</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Comment DevVoxel est né et où nous allons
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-[var(--foreground)]/90">
            <p>
              DevVoxel a été fondé en 2024 avec pour objectif de développer des plugins Minecraft de haute qualité et de construire une communauté active. 
              Ce qui a commencé comme un petit projet est maintenant une organisation établie avec plusieurs plugins réussis et une communauté croissante.
            </p>
            <p>
              Notre premier grand projet était <strong>PlayerDataSync</strong> – un plugin qui révolutionne la synchronisation des données des joueurs entre serveurs. 
              Avec plus de 10 000 téléchargements et une note de 4,9 étoiles, il est rapidement devenu l'un des plugins les plus populaires de notre collection.
            </p>
            <p>
              Aujourd'hui, nous développons continuellement de nouveaux plugins, améliorons les existants et soutenons notre communauté avec une documentation complète, 
              des tutoriels et un support actif. Notre objectif est de devenir la meilleure organisation de plugins open source pour Minecraft.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Rejoignez Notre Communauté</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[var(--foreground)]/90">
              Rejoignez DevVoxel, découvrez de nouvelles ressources, apprenez d'autres développeurs et amenez vos projets au niveau supérieur.
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
                <Button variant="secondary" className="py-3 px-6 flex items-center gap-2">
                  <Code className="w-4 h-4" />
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

