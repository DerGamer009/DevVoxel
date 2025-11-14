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

const communityStats = [
  { icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />, label: "Active Members", value: "3,000+" },
  { icon: <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />, label: "Daily Messages", value: "500+" },
  { icon: <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />, label: "Community Plugins", value: "50+" },
  { icon: <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />, label: "Contributions", value: "10k+" },
];

const platforms = [
  {
    name: "Discord",
    description: "Our active Discord server — support, discussions, and community events",
    icon: <MessageSquare className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
    link: "https://discord.gg/fKgyae8R4e",
    color: "from-indigo-500 to-purple-600",
    features: ["Live Support", "Plugin Discussions", "Community Events", "Developer Chat"],
  },
  {
    name: "GitHub",
    description: "Open source projects, issues, and pull requests — develop with us",
    icon: <Github className="w-10 h-10 text-gray-700 dark:text-gray-300" />,
    link: "#",
    color: "from-gray-600 to-gray-800",
    features: ["Open Source", "Issue Tracking", "Pull Requests", "Code Reviews"],
  },
  {
    name: "Documentation",
    description: "Comprehensive guides, tutorials, and API documentation for all plugins",
    icon: <BookOpen className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    link: "#",
    color: "from-blue-500 to-cyan-600",
    features: ["Tutorials", "API Docs", "Configuration", "Examples"],
  },
];

const communityRules = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />,
    title: "Stay Respectful",
    description: "Treat all community members with respect and kindness.",
  },
  {
    icon: <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />,
    title: "Be Helpful",
    description: "Support other members and share your knowledge willingly.",
  },
  {
    icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: "Quality over Quantity",
    description: "Share high-quality posts and helpful solutions.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: "Discuss Constructively",
    description: "Engage in constructive discussions and feedback conversations.",
  },
];

const upcomingEvents = [
  {
    title: "Community Meetup",
    date: "January 15, 2026",
    description: "Virtual community meeting — discussions, Q&A, and updates",
    icon: <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Plugin Development Workshop",
    date: "January 22, 2026",
    description: "Learn how to develop your first Minecraft plugin",
    icon: <Code className="w-6 h-6 text-green-600 dark:text-green-400" />,
  },
  {
    title: "Community Challenge",
    date: "February 1, 2026",
    description: "Develop the best community plugin and win prizes",
    icon: <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
  },
];

export default function Community() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="en" />

      <main className="flex flex-col flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Community</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Welcome to the DevVoxel Community
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 max-w-3xl mx-auto mb-8">
            Connect with developers, server admins, and gamers from around the world. 
            Share knowledge, get support, and develop innovative projects together.
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
                Join Discord
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="py-3 px-6 flex items-center gap-2">
                <Github className="w-4 h-4" />
                Visit GitHub
              </Button>
            </a>
          </div>
        </section>

        {/* Platforms */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Platforms</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Various ways to interact with the community and get support
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
                    Join Now
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Community Rules</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Our guidelines for a positive and productive community
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Participate in our community events and learn new things
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Join the Community?</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Many benefits await you in our active community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <LifeBuoy className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Fast Support</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Get help from experienced developers and community members within minutes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <BookOpen className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Learn & Grow</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Access to tutorials, guides, and best practices from experienced developers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Rocket className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Early Access</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Test new plugins and features before official release and provide feedback.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Users className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Networking</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Connect with other developers, server admins, and gamers worldwide.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Code className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Open Source</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Contribute to open source projects and give back to the community.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--background)]/50 dark:bg-[var(--background)]/30 border border-[var(--foreground)]/10">
              <div className="mb-4">
                <Award className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Recognition</h3>
              <p className="text-sm text-[var(--foreground)]/90">
                Get recognition for your contributions and become part of the DevVoxel team.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[var(--foreground)]/90">
              Become part of our growing community and benefit from all advantages. 
              Free and open to everyone!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer">
                <Button className="py-3 px-6 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Join Discord
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

