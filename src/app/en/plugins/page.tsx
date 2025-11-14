'use client';

import React, { useState } from 'react';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import Link from "next/link";
import { Cpu, Wrench, ShieldCheck, Download, Code, Database, Server, Filter, X, CheckCircle2, Sparkles } from "lucide-react";

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

// Extended plugin data
const plugins = [
  {
    id: 'pds',
    name: "PlayerDataSync",
    description: "Real-time synchronization of player data between servers: inventory, XP, health, location & more.",
    icon: <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    link: "/en/plugins/playerdatasync",
    version: "1.2.1",
    price: "Free",
    badge: "Free",
    category: "Synchronization",
    mcVersions: ["1.20.4", "1.21.x"],
    platforms: ["Spigot", "Paper"],
    features: ["Real-time Sync", "MySQL/SQLite/Postgres", "Multi-Server", "Auto-Save"],
    downloads: "10k+",
    rating: 4.9,
  },
  {
    id: 'itemdb-free',
    name: "ItemDB (Free)",
    description: "Basic features to save & manage items on your server.",
    icon: <Wrench className="w-8 h-8 text-green-600 dark:text-green-400" />,
    link: "/en/plugins/itemdb-free",
    version: "1.0.2",
    price: "Free",
    badge: "Free",
    category: "Management",
    mcVersions: ["1.20+", "1.21.x"],
    platforms: ["Spigot", "Paper"],
    features: ["Item Storage", "Basic Search", "API"],
    downloads: "5k+",
    rating: 4.7,
  },
  {
    id: 'itemdb-premium',
    name: "ItemDB (Premium)",
    description: "Advanced search, Web-API & priority support for professional servers.",
    icon: <Wrench className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    link: "/en/plugins/itemdb-premium",
    version: "1.0.0",
    price: "$13.00",
    badge: "Premium",
    category: "Management",
    mcVersions: ["1.20+", "1.21.x"],
    platforms: ["Spigot", "Paper"],
    features: ["Web-API", "Advanced Filters", "Team Updates", "Priority Support"],
    downloads: "2k+",
    rating: 4.8,
  },
  {
    id: 'bungeesystem',
    name: "BungeeSystem",
    description: "Comprehensive system for BungeeCord & Velocity: ban, mute, reports, dashboard & more.",
    icon: <ShieldCheck className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    link: "/en/plugins/bungeesystem",
    version: "1.2.2",
    price: "Free",
    badge: "Free",
    category: "Moderation",
    mcVersions: ["1.20+", "1.21.x"],
    platforms: ["BungeeCord", "Velocity"],
    features: ["Ban/Mute System", "Reports", "Dashboard", "Multi-Server"],
    downloads: "8k+",
    rating: 4.9,
  },
];

type FilterType = 'all' | 'free' | 'premium';

export default function Plugins() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedPlugin, setSelectedPlugin] = useState<typeof plugins[0] | null>(null);

  const filteredPlugins = filter === 'all' 
    ? plugins 
    : filter === 'free' 
    ? plugins.filter(p => p.badge === 'Free')
    : plugins.filter(p => p.badge === 'Premium');

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="en" />

      <main className="flex flex-col flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Our Plugins
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 max-w-3xl mx-auto mb-8">
            Professional Minecraft plugins from DevVoxel for Spigot, Paper, BungeeCord, and Velocity. 
            Developed by experienced developers, tested by our community.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="p-4 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 rounded-xl">
              <div className="text-2xl font-bold">{plugins.length}</div>
              <div className="text-sm text-[var(--foreground)]/80">Plugins</div>
            </div>
            <div className="p-4 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 rounded-xl">
              <div className="text-2xl font-bold">25k+</div>
              <div className="text-sm text-[var(--foreground)]/80">Downloads</div>
            </div>
            <div className="p-4 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 rounded-xl">
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-sm text-[var(--foreground)]/80">Average</div>
            </div>
            <div className="p-4 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 rounded-xl">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-[var(--foreground)]/80">Open Source</div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-[var(--foreground)]/80">
              <Filter className="w-4 h-4" />
              <span>Filter:</span>
            </div>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900'
                  : 'bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 hover:bg-[var(--foreground)]/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('free')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'free'
                  ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900'
                  : 'bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 hover:bg-[var(--foreground)]/10'
              }`}
            >
              Free
            </button>
            <button
              onClick={() => setFilter('premium')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'premium'
                  ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900'
                  : 'bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 hover:bg-[var(--foreground)]/10'
              }`}
            >
              Premium
            </button>
          </div>
        </section>

        {/* Plugin Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPlugins.map((plugin) => (
            <div
              key={plugin.id}
              className="group p-6 rounded-xl bg-gradient-to-br from-white/30 to-[var(--foreground)]/6 dark:from-black/20 dark:to-[var(--foreground)]/12 border border-[var(--foreground)]/6 hover:border-[var(--foreground)]/20 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[var(--foreground)]/8 dark:bg-[var(--foreground)]/16">
                    {plugin.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{plugin.name}</h3>
                    <div className="text-xs text-[var(--foreground)]/60">v{plugin.version}</div>
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    plugin.badge === "Free"
                      ? "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200"
                      : "bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
                  }`}
                >
                  {plugin.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-[var(--foreground)]/90 mb-4 flex-1">{plugin.description}</p>

              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {plugin.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-[var(--foreground)]/70">
                  <div className="flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    <span>{plugin.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{plugin.rating}★</span>
                  </div>
                </div>
              </div>

              {/* MC Versions & Platforms */}
              <div className="mb-4 text-xs text-[var(--foreground)]/70">
                <div className="flex items-center gap-2 mb-1">
                  <Server className="w-3 h-3" />
                  <span>{plugin.mcVersions.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-3 h-3" />
                  <span>{plugin.platforms.join(', ')}</span>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--foreground)]/10">
                <div className="text-lg font-bold">{plugin.price}</div>
                <div className="flex gap-2">
                  <Link href={plugin.link}>
                    <Button variant="secondary" className="py-2 px-4 text-sm">
                      Details
                    </Button>
                  </Link>
                  <button
                    onClick={() => setSelectedPlugin(plugin)}
                    className="px-3 py-2 rounded-md border border-[var(--foreground)]/10 hover:bg-[var(--foreground)]/4 transition text-sm"
                    aria-label={`Quick view ${plugin.name}`}
                  >
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Why Choose DevVoxel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why DevVoxel Plugins?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
              <div className="mb-4">
                <Code className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Professionally Developed</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                All plugins are developed by experienced Minecraft developers and regularly updated.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
              <div className="mb-4">
                <Database className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Comprehensively Documented</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Detailed documentation, configuration examples, and support for all plugins.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
              <div className="mb-4">
                <ShieldCheck className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Community-Tested</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Thousands of servers trust our plugins. Active community and fast support.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-[var(--foreground)]/90">
            Join our community and get access to all plugins, tutorials, updates, and exclusive resources.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/en/community">
              <Button className="py-3 px-6">Join Community</Button>
            </Link>
            <Link href="/en/contact">
              <Button variant="secondary" className="py-3 px-6">Contact Support</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} currentLang="en" />

      {/* Quick View Modal */}
      {selectedPlugin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPlugin(null)}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="relative z-10 max-w-2xl w-full bg-[var(--background)] rounded-xl p-6 shadow-xl border border-[var(--foreground)]/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--foreground)]/8">
                  {selectedPlugin.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{selectedPlugin.name}</h3>
                  <div className="text-sm text-[var(--foreground)]/70">Version {selectedPlugin.version}</div>
                </div>
              </div>
              <button
                onClick={() => setSelectedPlugin(null)}
                className="p-2 rounded hover:bg-[var(--foreground)]/6"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="mb-4 text-[var(--foreground)]/90">{selectedPlugin.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm font-semibold mb-2">Minecraft Versions</div>
                <div className="text-sm text-[var(--foreground)]/80">{selectedPlugin.mcVersions.join(', ')}</div>
              </div>
              <div>
                <div className="text-sm font-semibold mb-2">Platforms</div>
                <div className="text-sm text-[var(--foreground)]/80">{selectedPlugin.platforms.join(', ')}</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm font-semibold mb-2">Features</div>
              <div className="flex flex-wrap gap-2">
                {selectedPlugin.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Link href={selectedPlugin.link} className="flex-1">
                <Button className="w-full">Go to Plugin Page</Button>
              </Link>
              <Button
                variant="secondary"
                onClick={() => setSelectedPlugin(null)}
                className="px-6"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

