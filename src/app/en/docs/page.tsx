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
  { label: 'Home', href: '/en' },
  { label: 'About', href: '/en/about' },
  { label: 'Plugins', href: '/en/plugins' },
  { label: 'Community', href: '/en/community' },
  { label: 'Contact', href: '/en/contact' },
];

const resourceLinks = [
  { label: "PlayerDataSync", href: "/en/plugins/playerdatasync" },
  { label: "ItemDB", href: "/en/plugins/itemdb-free" },
  { label: "BungeeSystem", href: "/en/plugins/bungeesystem" },
];

const legalLinks = [
  { label: 'Imprint', href: '/en/impressum' },
  { label: 'Privacy', href: '/en/datenschutz' },
  { label: 'Terms', href: '/en/terms' },
];

const pluginDocs = [
  {
    name: "PlayerDataSync",
    description: "Complete documentation for PlayerDataSync — multi-server synchronization",
    icon: <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    link: "/en/plugins/playerdatasync",
    category: "Synchronization",
    features: ["Installation", "Configuration", "API", "Troubleshooting"],
    mcVersions: ["1.20.4", "1.21.x"],
  },
  {
    name: "ItemDB",
    description: "Documentation for ItemDB Free & Premium — item management and storage",
    icon: <Wrench className="w-8 h-8 text-green-600 dark:text-green-400" />,
    link: "/en/plugins/itemdb-free",
    category: "Management",
    features: ["Installation", "Commands", "API", "Web-Interface"],
    mcVersions: ["1.20+", "1.21.x"],
  },
  {
    name: "BungeeSystem",
    description: "Documentation for BungeeSystem — moderation & management for BungeeCord/Velocity",
    icon: <ShieldCheck className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    link: "/en/plugins/bungeesystem",
    category: "Moderation",
    features: ["Setup", "Commands", "Dashboard", "Integration"],
    mcVersions: ["1.20+", "1.21.x"],
  },
];

const quickStartGuides = [
  {
    title: "Plugin Installation",
    description: "Learn how to install plugins on your Spigot/Paper server",
    icon: <Download className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    steps: [
      "Download the plugin from the plugin page",
      "Place the .jar file in the plugins folder",
      "Restart the server",
      "Configure the plugin according to your needs",
    ],
  },
  {
    title: "Initial Configuration",
    description: "Basic configuration for all DevVoxel plugins",
    icon: <Settings className="w-6 h-6 text-green-600 dark:text-green-400" />,
    steps: [
      "Open the config.yml in the plugin folder",
      "Read the comments in the configuration",
      "Adjust the settings to your needs",
      "Restart the server to apply changes",
    ],
  },
  {
    title: "API Integration",
    description: "How to integrate our plugins into your own projects",
    icon: <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    steps: [
      "Add the plugin dependency to your project",
      "Import the API classes",
      "Use the provided methods",
      "Test your integration thoroughly",
    ],
  },
];

const tutorials = [
  {
    title: "PlayerDataSync Setup",
    description: "Complete setup tutorial for PlayerDataSync with MySQL",
    icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    difficulty: "Intermediate",
    duration: "15 Min",
    link: "/en/plugins/playerdatasync",
  },
  {
    title: "ItemDB API Tutorial",
    description: "Learn how to use the ItemDB API in your plugins",
    icon: <Code className="w-6 h-6 text-green-600 dark:text-green-400" />,
    difficulty: "Advanced",
    duration: "25 Min",
    link: "/en/plugins/itemdb-free",
  },
  {
    title: "BungeeSystem Dashboard",
    description: "Setup and usage of the BungeeSystem dashboard",
    icon: <Server className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    difficulty: "Easy",
    duration: "10 Min",
    link: "/en/plugins/bungeesystem",
  },
];

const apiDocs = [
  {
    name: "PlayerDataSync API",
    description: "API reference for PlayerDataSync — control synchronization programmatically",
    icon: <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    methods: ["syncPlayerData()", "getPlayerData()", "savePlayerData()"],
    link: "/en/plugins/playerdatasync",
  },
  {
    name: "ItemDB API",
    description: "API reference for ItemDB — manage items programmatically",
    icon: <Wrench className="w-6 h-6 text-green-600 dark:text-green-400" />,
    methods: ["saveItem()", "getItem()", "searchItems()", "deleteItem()"],
    link: "/en/plugins/itemdb-free",
  },
  {
    name: "BungeeSystem API",
    description: "API reference for BungeeSystem — control moderation programmatically",
    icon: <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    methods: ["banPlayer()", "mutePlayer()", "createReport()", "getPlayerHistory()"],
    link: "/en/plugins/bungeesystem",
  },
];

export default function Documentation() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="en" />

      <main className="flex flex-col flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Documentation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            DevVoxel Documentation
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 max-w-3xl mx-auto mb-8">
            Comprehensive documentation, tutorials, and API references for all DevVoxel plugins. 
            Everything you need to get started successfully.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--foreground)]/50" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-[var(--foreground)]/10 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
              />
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="py-3 px-6 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Support on Discord
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Plugin Documentation</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Detailed documentation for all DevVoxel plugins
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
                  <div className="text-sm font-semibold mb-2">Includes:</div>
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
                    MC: {doc.mcVersions.join(', ')}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    Read Documentation
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quick Start Guides</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Quick start guides for the most common tasks
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tutorials & Guides</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Step-by-step guides for various scenarios
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
                  Start Tutorial
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* API Documentation */}
        <section className="mb-16 bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">API Documentation</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Programmatic integration of our plugins into your projects
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
                  <div className="text-xs font-semibold mb-2 text-[var(--foreground)]/70">Important Methods:</div>
                  <div className="space-y-1">
                    {api.methods.map((method, mIdx) => (
                      <div key={mIdx} className="text-xs font-mono px-2 py-1 rounded bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
                        {method}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                  Open API Reference
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Additional Resources</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Additional resources and links for developers
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
              <h3 className="font-semibold mb-2">Discord Support</h3>
              <p className="text-xs text-[var(--foreground)]/80">Community support & help</p>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-lg transition-all text-center"
            >
              <Github className="w-8 h-8 mx-auto mb-3 text-gray-700 dark:text-gray-300" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-xs text-[var(--foreground)]/80">Source code & issues</p>
            </a>

            <Link
              href="/en/plugins"
              className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-lg transition-all text-center"
            >
              <Download className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold mb-2">Plugins</h3>
              <p className="text-xs text-[var(--foreground)]/80">View all plugins</p>
            </Link>

            <Link
              href="/en/community"
              className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-lg transition-all text-center"
            >
              <Users className="w-8 h-8 mx-auto mb-3 text-green-600 dark:text-green-400" />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-xs text-[var(--foreground)]/80">Join community</p>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Help?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[var(--foreground)]/90">
              If you have questions or need help, we're here for you. 
              Contact us on Discord or open an issue on GitHub.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer">
                <Button className="py-3 px-6 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Discord Support
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link href="/en/plugins">
                <Button variant="secondary" className="py-3 px-6">
                  Discover Plugins
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} currentLang="en" />
    </div>
  );
}

