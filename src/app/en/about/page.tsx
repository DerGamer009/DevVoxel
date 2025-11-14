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

const values = [
  {
    icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Open Source",
    description: "All our plugins are open source and freely available. Transparency and community participation are our priorities.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-400" />,
    title: "Quality",
    description: "We maintain high quality standards, thorough testing, and comprehensive documentation for all our projects.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: "Community",
    description: "Our community is at the heart of everything. We promote collaboration, knowledge sharing, and mutual support.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    title: "Innovation",
    description: "We continuously develop new features, improve existing plugins, and stay up-to-date with the latest technology.",
  },
];

const teamMembers = [
  {
    name: "DerGamer09",
    role: "Founder & Lead Developer",
    bio: "Leads development & community. Specialized in multi-server synchronization and performance optimization. Active in Minecraft plugin development for over 5 years.",
    skills: ["Java", "Plugin Development", "Performance", "Architecture"],
  },
  {
    name: "Tobi",
    role: "Admin & Community Manager",
    bio: "Community & support manager. Responsible for documentation, support, and community building. Expert in server management and user experience.",
    skills: ["Community Management", "Documentation", "Support", "UX"],
  },
];

const communityTypes = [
  {
    icon: <Code className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Developers",
    description: "Create plugins, tools, and APIs for Minecraft and other platforms. Share your knowledge and learn from others.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600 dark:text-green-400" />,
    title: "Server Admins",
    description: "Find plugins, resources, and support for your servers. Optimize your server performance and user experience.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Users className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
    title: "Community Members",
    description: "Discuss, learn, and network with other developers and gamers. Become part of an active and helpful community.",
    color: "from-purple-500 to-pink-600",
  },
];

const stats = [
  { label: "Plugins", value: "4+", icon: <Code className="w-5 h-5" /> },
  { label: "Downloads", value: "25k+", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Community", value: "3k+", icon: <Users className="w-5 h-5" /> },
  { label: "Rating", value: "4.8★", icon: <Star className="w-5 h-5" /> },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="en" />

      <main className="flex flex-col flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>About</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            About DevVoxel
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 max-w-3xl mx-auto mb-8">
            DevVoxel is a Minecraft developer organization that provides high-quality plugins, tools, tutorials, and an active community for developers and gamers.
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
                <h2 className="text-2xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-[var(--foreground)]/90 leading-relaxed">
                We want to provide developers and gamers with a central platform where they can find high-quality plugins, tools, and resources and effectively implement their projects. Our goal is to make Minecraft development more accessible and productive.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/20 dark:border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  <Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-semibold">Our Vision</h2>
              </div>
              <p className="text-[var(--foreground)]/90 leading-relaxed">
                DevVoxel should become the leading destination for creative Minecraft developers worldwide – a community that shares knowledge, supports each other, and enables innovative projects. We strive to be the best open-source plugin organization.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              The principles that guide our work and our community
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Experienced developers who are passionate about Minecraft plugins
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Community & Target Groups</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Our community consists of various groups that all benefit from DevVoxel
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              How DevVoxel came to be and where we're going
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-[var(--foreground)]/90">
            <p>
              DevVoxel was founded in 2024 with the goal of developing high-quality Minecraft plugins and building an active community. 
              What started as a small project is now an established organization with several successful plugins and a growing community.
            </p>
            <p>
              Our first major project was <strong>PlayerDataSync</strong> – a plugin that revolutionizes the synchronization of player data between servers. 
              With over 10,000 downloads and a 4.9-star rating, it quickly became one of the most popular plugins in our collection.
            </p>
            <p>
              Today, we continuously develop new plugins, improve existing ones, and support our community with comprehensive documentation, 
              tutorials, and active support. Our goal is to become the best open-source plugin organization for Minecraft.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[var(--foreground)]/90">
              Join DevVoxel, discover new resources, learn from other developers, and take your projects to the next level.
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
                <Button variant="secondary" className="py-3 px-6 flex items-center gap-2">
                  <Code className="w-4 h-4" />
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

