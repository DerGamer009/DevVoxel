'use client';

import React from 'react';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import Link from "next/link";
import {
  BookOpen,
  Code,
  FileText,
  Settings,
  Play,
  ArrowRight,
  Search,
  Download,
  Github,
  MessageSquare,
  Zap,
  Database,
  Server,
  Cpu,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Users,
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

const pluginDocs = [
  {
    name: "PlayerDataSync",
    description: "Documentation complète pour PlayerDataSync — synchronisation multi-serveurs",
    icon: <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    link: "/fr/plugins/playerdatasync",
    category: "Synchronisation",
    features: ["Installation", "Configuration", "API", "Dépannage"],
    mcVersions: ["1.20.4", "1.21.x"],
  },
  {
    name: "ItemDB",
    description: "Documentation pour ItemDB Gratuit et Premium — gestion et stockage d'items",
    icon: <Wrench className="w-8 h-8 text-green-600 dark:text-green-400" />,
    link: "/fr/plugins/itemdb-free",
    category: "Gestion",
    features: ["Installation", "Commandes", "API", "Interface Web"],
    mcVersions: ["1.20+", "1.21.x"],
  },
  {
    name: "BungeeSystem",
    description: "Documentation pour BungeeSystem — modération et gestion pour BungeeCord/Velocity",
    icon: <ShieldCheck className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    link: "/fr/plugins/bungeesystem",
    category: "Modération",
    features: ["Configuration", "Commandes", "Tableau de Bord", "Intégration"],
    mcVersions: ["1.20+", "1.21.x"],
  },
];

const quickStartGuides = [
  {
    title: "Installation de Plugin",
    description: "Apprenez à installer des plugins sur votre serveur Spigot/Paper",
    icon: <Download className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    steps: [
      "Téléchargez le plugin depuis la page du plugin",
      "Placez le fichier .jar dans le dossier plugins",
      "Redémarrez le serveur",
      "Configurez le plugin selon vos besoins",
    ],
  },
  {
    title: "Configuration Initiale",
    description: "Configuration de base pour tous les plugins DevVoxel",
    icon: <Settings className="w-6 h-6 text-green-600 dark:text-green-400" />,
    steps: [
      "Ouvrez le config.yml dans le dossier du plugin",
      "Lisez les commentaires dans la configuration",
      "Ajustez les paramètres selon vos besoins",
      "Redémarrez le serveur pour appliquer les changements",
    ],
  },
  {
    title: "Intégration API",
    description: "Comment intégrer nos plugins dans vos propres projets",
    icon: <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    steps: [
      "Ajoutez la dépendance du plugin à votre projet",
      "Importez les classes API",
      "Utilisez les méthodes fournies",
      "Testez votre intégration minutieusement",
    ],
  },
];

const tutorials = [
  {
    title: "Configuration PlayerDataSync",
    description: "Tutoriel de configuration complet pour PlayerDataSync avec MySQL",
    icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    difficulty: "Intermédiaire",
    duration: "15 Min",
    link: "/fr/plugins/playerdatasync",
  },
  {
    title: "Tutoriel API ItemDB",
    description: "Apprenez à utiliser l'API ItemDB dans vos plugins",
    icon: <Code className="w-6 h-6 text-green-600 dark:text-green-400" />,
    difficulty: "Avancé",
    duration: "25 Min",
    link: "/fr/plugins/itemdb-free",
  },
  {
    title: "Tableau de Bord BungeeSystem",
    description: "Configuration et utilisation du tableau de bord BungeeSystem",
    icon: <Server className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    difficulty: "Facile",
    duration: "10 Min",
    link: "/fr/plugins/bungeesystem",
  },
];

const apiDocs = [
  {
    name: "API PlayerDataSync",
    description: "Référence API pour PlayerDataSync — contrôler la synchronisation par programmation",
    icon: <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    methods: ["syncPlayerData()", "getPlayerData()", "savePlayerData()"],
    link: "/fr/plugins/playerdatasync",
  },
  {
    name: "API ItemDB",
    description: "Référence API pour ItemDB — gérer les items par programmation",
    icon: <Wrench className="w-6 h-6 text-green-600 dark:text-green-400" />,
    methods: ["saveItem()", "getItem()", "searchItems()", "deleteItem()"],
    link: "/fr/plugins/itemdb-free",
  },
  {
    name: "API BungeeSystem",
    description: "Référence API pour BungeeSystem — contrôler la modération par programmation",
    icon: <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    methods: ["banPlayer()", "mutePlayer()", "createReport()", "getPlayerHistory()"],
    link: "/fr/plugins/bungeesystem",
  },
];

export default function Documentation() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="fr" />

      <main className="flex flex-col flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Documentation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Documentation DevVoxel
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 max-w-3xl mx-auto mb-8">
            Documentation complète, tutoriels et références API pour tous les plugins DevVoxel. 
            Tout ce dont vous avez besoin pour démarrer avec succès.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--foreground)]/50" />
              <input
                type="text"
                placeholder="Rechercher dans la documentation..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-[var(--foreground)]/10 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
              />
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="py-3 px-6 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Support sur Discord
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="py-3 px-6 flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </div>
        </section>

        {/* Plugin Documentation */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Documentation des Plugins</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Documentation détaillée pour tous les plugins DevVoxel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pluginDocs.map((doc, idx) => (
              <Link
                key={idx}
                href={doc.link}
                className="group p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-[var(--foreground)]/8 dark:bg-[var(--foreground)]/16">
                    {doc.icon}
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
                    {doc.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{doc.name}</h3>
                <p className="text-[var(--foreground)]/90 mb-4 flex-1">{doc.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold mb-2">Inclut :</div>
                  <div className="flex flex-wrap gap-2">
                    {doc.features.map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs px-2 py-1 rounded bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--foreground)]/10">
                  <div className="text-xs text-[var(--foreground)]/70">
                    MC : {doc.mcVersions.join(', ')}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    Lire la Documentation
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Start Guides */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Guides de Démarrage Rapide</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Guides de démarrage rapide pour les tâches les plus courantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickStartGuides.map((guide, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--foreground)]/8 dark:bg-[var(--foreground)]/16">
                    {guide.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{guide.title}</h3>
                </div>
                <p className="text-sm text-[var(--foreground)]/90 mb-4">{guide.description}</p>
                <ol className="space-y-2 text-sm">
                  {guide.steps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xs flex items-center justify-center font-semibold">
                        {sIdx + 1}
                      </span>
                      <span className="text-[var(--foreground)]/90">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* Tutorials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tutoriels et Guides</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Guides étape par étape pour divers scénarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((tutorial, idx) => (
              <Link
                key={idx}
                href={tutorial.link}
                className="group p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-[var(--foreground)]/8 dark:bg-[var(--foreground)]/16">
                    {tutorial.icon}
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
                      {tutorial.difficulty}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
                      {tutorial.duration}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{tutorial.title}</h3>
                <p className="text-sm text-[var(--foreground)]/90 mb-4">{tutorial.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                  Démarrer le Tutoriel
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* API Documentation */}
        <section className="mb-16 bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Documentation API</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Intégration programmatique de nos plugins dans vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apiDocs.map((api, idx) => (
              <Link
                key={idx}
                href={api.link}
                className="group p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--foreground)]/8 dark:bg-[var(--foreground)]/16">
                    {api.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{api.name}</h3>
                </div>
                <p className="text-sm text-[var(--foreground)]/90 mb-4">{api.description}</p>
                <div className="mb-4">
                  <div className="text-xs font-semibold mb-2 text-[var(--foreground)]/70">Méthodes Importantes :</div>
                  <div className="space-y-1">
                    {api.methods.map((method, mIdx) => (
                      <div key={mIdx} className="text-xs font-mono px-2 py-1 rounded bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
                        {method}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                  Ouvrir la Référence API
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ressources Supplémentaires</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Ressources et liens supplémentaires pour les développeurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://discord.gg/fKgyae8R4e"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-lg transition-all text-center"
            >
              <MessageSquare className="w-8 h-8 mx-auto mb-3 text-indigo-600 dark:text-indigo-400" />
              <h3 className="font-semibold mb-2">Support Discord</h3>
              <p className="text-xs text-[var(--foreground)]/80">Support communautaire et aide</p>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-lg transition-all text-center"
            >
              <Github className="w-8 h-8 mx-auto mb-3 text-gray-700 dark:text-gray-300" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-xs text-[var(--foreground)]/80">Code source et issues</p>
            </a>

            <Link
              href="/fr/plugins"
              className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-lg transition-all text-center"
            >
              <Download className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold mb-2">Plugins</h3>
              <p className="text-xs text-[var(--foreground)]/80">Voir tous les plugins</p>
            </Link>

            <Link
              href="/fr/community"
              className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-lg transition-all text-center"
            >
              <Users className="w-8 h-8 mx-auto mb-3 text-green-600 dark:text-green-400" />
              <h3 className="font-semibold mb-2">Communauté</h3>
              <p className="text-xs text-[var(--foreground)]/80">Rejoindre la communauté</p>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Besoin d'Aide ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[var(--foreground)]/90">
              Si vous avez des questions ou besoin d'aide, nous sommes là pour vous. 
              Contactez-nous sur Discord ou ouvrez une issue sur GitHub.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer">
                <Button className="py-3 px-6 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Support Discord
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

