'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Cpu,
  Wrench,
  Users,
  ShieldCheck,
  Rocket,
  Globe,
  Github,
  BookOpen,
  LifeBuoy,
  Calendar,
  Mail,
  Clock,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Code,
  Database,
  Server,
  CheckCircle2,
  Star,
  TrendingUp,
  Zap,
  ArrowRight,
  AlertCircle,
  Send,
  MessageSquare,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/en' },
  { label: 'About', href: '/en/about' },
  { label: 'Plugins', href: '/en/plugins' },
  { label: 'Community', href: '/en/community' },
  { label: 'Contact', href: '/en/contact' },
];

const resourceLinks = [
  { label: 'PlayerDataSync', href: '/en/plugins/playerdatasync' },
  { label: 'ItemDB', href: '/en/plugins/itemdb-free' },
  { label: 'BungeeSystem', href: '/en/plugins/bungeesystem' },
];

const legalLinks = [
  { label: 'Imprint', href: '/en/impressum' },
  { label: 'Privacy Policy', href: '/en/datenschutz' },
  { label: 'Terms of Service', href: '/en/terms' },
];

const testimonials = [
  { name: 'Max', role: 'Server Admin', text: 'PlayerDataSync saved our lives — seamless switching between lobby and game server.' },
  { name: 'Sophie', role: 'Plugin Developer', text: 'Great documentation & super community support. Recommend DevVoxel!' },
  { name: 'Lukas', role: 'Community Manager', text: 'ItemDB Premium saves us hours of support work.' },
];

const plugins = [
  {
    id: 'pds',
    title: 'PlayerDataSync',
    desc: 'Real-time synchronization: Inventory, XP, Health, Location & more.',
    price: 'Free',
    badge: 'Free',
    icon: <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    href: '/en/plugins/playerdatasync',
    details: `PlayerDataSync synchronizes all player data between servers. Supported versions: 1.20.4 & 1.21.x. Supported DB: MySQL/SQLite/Postgres.`,
    downloads: '10k+',
    rating: 4.9,
    mcVersions: ['1.20.4', '1.21.x'],
    platforms: ['Spigot', 'Paper'],
  },
  {
    id: 'itemdb-free',
    title: 'ItemDB (Free)',
    desc: 'Basic features for storing & managing items.',
    price: 'Free',
    badge: 'Free',
    icon: <Wrench className="w-8 h-8 text-green-600 dark:text-green-400" />,
    href: '/en/plugins/itemdb-free',
    details: `ItemDB Free enables easy item storage and provides basic features for server admins.`,
    downloads: '5k+',
    rating: 4.7,
    mcVersions: ['1.20+', '1.21.x'],
    platforms: ['Spigot', 'Paper'],
  },
  {
    id: 'itemdb-premium',
    title: 'ItemDB (Premium)',
    desc: 'Advanced search, Web-API & priority support.',
    price: '€13.00',
    badge: 'Premium',
    icon: <Wrench className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    href: '/en/plugins/itemdb-premium',
    details: `Premium features: API access, team updates, advanced filters and priority support.`,
    downloads: '2k+',
    rating: 4.8,
    mcVersions: ['1.20+', '1.21.x'],
    platforms: ['Spigot', 'Paper'],
  },
];

export default function Home() {
  const [modalPlugin, setModalPlugin] = useState<typeof plugins[0] | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="en" />

      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                <span>Minecraft Plugin Development</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                DevVoxel — Your Hub for Developers & Gamers
              </h1>
              <p className="text-lg sm:text-xl text-[var(--foreground)]/90 mb-8 max-w-2xl">
                Professional Minecraft plugins for Spigot, Paper, BungeeCord and Velocity. Developed by experienced developers, tested by our community.
              </p>

              <div className="flex gap-3 flex-wrap mb-8">
                <Link href="/en/plugins">
                  <Button className="py-3 px-6 flex items-center gap-2">
                    Discover Plugins
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/en/community">
                  <Button variant="secondary" className="py-3 px-6">Join Community</Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-md">
                <div className="p-4 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 rounded-xl">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-xs text-[var(--foreground)]/80">Plugins</div>
                </div>
                <div className="p-4 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 rounded-xl">
                  <div className="text-2xl font-bold">25k+</div>
                  <div className="text-xs text-[var(--foreground)]/80">Downloads</div>
                </div>
                <div className="p-4 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 rounded-xl">
                  <div className="text-2xl font-bold">4.8 ★</div>
                  <div className="text-xs text-[var(--foreground)]/80">Rating</div>
                </div>
              </div>

              <div className="mt-8 text-sm text-[var(--foreground)]/80">
                <span className="mr-2 font-medium">Popular:</span>
                <span className="inline-flex gap-3 flex-wrap">
                  <Link href="/en/plugins/playerdatasync" className="hover:underline text-blue-600 dark:text-blue-400">PlayerDataSync</Link>
                  <span>·</span>
                  <Link href="/en/plugins/itemdb-free" className="hover:underline text-green-600 dark:text-green-400">ItemDB (Free)</Link>
                  <span>·</span>
                  <Link href="/en/plugins/bungeesystem" className="hover:underline text-purple-600 dark:text-purple-400">BungeeSystem</Link>
                </span>
              </div>
            </div>

            <aside className="bg-gradient-to-br from-white/30 to-[var(--foreground)]/6 dark:from-black/20 dark:to-[var(--foreground)]/12 rounded-2xl p-8 shadow-xl border border-[var(--foreground)]/10">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <StatCard icon={<Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />} title="Plugins" value="4+" />
                <StatCard icon={<Users className="w-6 h-6 text-green-600 dark:text-green-400" />} title="Community" value="3k+" />
                <StatCard icon={<Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />} title="Updates" value="regular" />
                <StatCard icon={<ShieldCheck className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />} title="Security" value="verified" />
              </div>

              <div className="pt-6 border-t border-[var(--foreground)]/10">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Why DevVoxel?
                </h4>
                <p className="text-sm text-[var(--foreground)]/90">
                  Quality, transparency & fast support — ideal for server operators and developers. All plugins are open source and community-tested.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Features</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                Everything you need for your Minecraft server — from plugins to developer tools
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Feature 
                icon={<Cpu className="w-10 h-10 text-blue-600 dark:text-blue-400" />} 
                title="High-Quality Plugins" 
                desc="Spigot, Paper, BungeeCord & Velocity — reliable, performant and comprehensively documented. All plugins are open source and community-tested." 
              />
              <Feature 
                icon={<Code className="w-10 h-10 text-green-600 dark:text-green-400" />} 
                title="Developer Tools" 
                desc="APIs, boilerplates and utilities to get you productive faster. Complete documentation and code examples included." 
              />
              <Feature 
                icon={<Users className="w-10 h-10 text-purple-600 dark:text-purple-400" />} 
                title="Community Support" 
                desc="Active Discord, forums and comprehensive guides — help when you need it. Our community is happy to support you." 
              />
            </div>
          </section>

          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Top Plugins & Pricing</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                Transparent pricing, free versions and premium features for professional servers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plugins.map((p) => (
                <PluginCard
                  key={p.id}
                  title={p.title}
                  desc={p.desc}
                  price={p.price}
                  badge={p.badge}
                  href={p.href}
                  icon={p.icon}
                  downloads={p.downloads}
                  rating={p.rating}
                  onDetails={() => setModalPlugin(p)}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/en/plugins">
                <Button variant="secondary" className="py-3 px-6 flex items-center gap-2 mx-auto">
                  View All Plugins
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Roadmap</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                What we're planning for the future — transparent and community-oriented
              </p>
            </div>
            <ol className="border-l-2 border-blue-500/30 dark:border-blue-400/30 ml-4 pl-8 space-y-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-20" />
              <li>
                <RoadmapItem 
                  date="Q4 2025" 
                  title="ItemDB Premium Release" 
                  text="Final tests, comprehensive documentation & official release with all premium features" 
                  icon={<Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />} 
                />
              </li>
              <li>
                <RoadmapItem 
                  date="Q1 2026" 
                  title="Marketplace" 
                  text="Marketplace for plugins & addons — discover and share community plugins" 
                  icon={<Globe className="w-6 h-6 text-green-600 dark:text-green-400" />} 
                />
              </li>
              <li>
                <RoadmapItem 
                  date="Q2 2026" 
                  title="SaaS Dashboard" 
                  text="Hosted dashboard for server management — manage everything in one place" 
                  icon={<Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />} 
                />
              </li>
            </ol>
          </section>

          <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-[var(--foreground)]/80 mb-6">
                  Experienced developers who are passionate about Minecraft plugins
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <TeamCard name="DerGamer09" role="Founder & Lead Developer" bio="Leads development & community. Specialized in multi-server synchronization and performance optimization." />
                  <TeamCard name="Tobi" role="Admin & Community Manager" bio="Community & support manager. Responsible for documentation, support and community building." />
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold">What Our Users Say</h2>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">4.8/5</span>
                  </div>
                </div>
                <TestimonialsCarousel items={testimonials} />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FAQItem q="Which Minecraft versions are supported?" a="PlayerDataSync: 1.20.4 & 1.21.x. Details on the plugin pages." />
              <FAQItem q="Are there refunds for premium plugins?" a="Digital goods are usually excluded from withdrawal after download; contact support if you have problems." />
              <FAQItem q="How do I report bugs?" a="Open an issue on GitHub or write in the support Discord." />
              <FAQItem q="Do I need MySQL?" a="Only for certain features like /onlinetime. Configuration in the plugin docs." />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Pricing & Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PlanCard name="Free" price="€0.00" features={['Community Support', 'Basic Features']} highlight={false} />
              <PlanCard name="Pro" price="€13.00" features={['Priority Support', 'Web-API', 'Premium Features']} highlight />
              <PlanCard name="Enterprise" price="Custom" features={['SLA', 'On-Prem Support', 'Integrations']} highlight={false} />
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact & Community</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                Have questions? Join our community or contact us directly
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Contact Form</h3>
                    <p className="text-sm text-[var(--foreground)]/70">We respond within 24–48 hours</p>
                  </div>
                </div>
                <ContactForm />
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                      <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="font-semibold text-lg">Newsletter</h4>
                  </div>
                  <p className="text-sm text-[var(--foreground)]/80 mb-4">
                    Stay up to date with updates, new plugins and community news.
                  </p>
                  <NewsletterForm />
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                  <h4 className="font-semibold mb-4">Contact Information</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <a href="mailto:support@devvoxel.net" className="text-blue-600 dark:text-blue-400 hover:underline">
                        support@devvoxel.net
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-[var(--foreground)]/80">Response time: 24-48h</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        Discord (instant help)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-500/20 dark:border-indigo-500/30">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <MessageSquare className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-2xl font-bold">Discord Community</h3>
                  </div>
                  <p className="text-[var(--foreground)]/90">
                    Join our active Discord community and get instant help from developers and other community members!
                  </p>
                </div>
                <div className="flex justify-center">
                  <iframe
                    src="https://discordapp.com/widget?id=1344325017676021851&theme=dark"
                    width="350"
                    height="500"
                    frameBorder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    className="rounded-lg shadow-xl"
                    {...({ allowTransparency: true } as any)}
                  />
                </div>
                <div className="text-center mt-4">
                  <a
                    href="https://discord.gg/fKgyae8R4e"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="py-3 px-6 flex items-center gap-2 mx-auto">
                      <MessageSquare className="w-4 h-4" />
                      Join Discord
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} />

      {modalPlugin && <PluginModal plugin={modalPlugin} onClose={() => setModalPlugin(null)} />}
    </div>
  );
}

function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 rounded-lg hover:bg-[var(--foreground)]/10 transition-colors">
      <div className="p-2 rounded-lg bg-[var(--foreground)]/8 dark:bg-[var(--foreground)]/16">
        {icon}
      </div>
      <div>
        <div className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide mb-1">{title}</div>
        <div className="font-bold text-xl">{value}</div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-xl transition-all duration-300">
      <div className="mb-4 p-3 rounded-lg bg-[var(--foreground)]/8 dark:bg-[var(--foreground)]/16 w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="font-semibold mb-3 text-lg">{title}</h4>
      <p className="text-[var(--foreground)]/90 leading-relaxed">{desc}</p>
    </div>
  );
}

function PluginCard({
  title,
  desc,
  price,
  badge,
  href,
  icon,
  downloads,
  rating,
  onDetails,
}: {
  title: string;
  desc: string;
  price: string;
  badge?: string;
  href: string;
  icon?: React.ReactNode;
  downloads?: string;
  rating?: number;
  onDetails?: () => void;
}) {
  return (
    <div className="group p-6 rounded-xl bg-gradient-to-br from-white/30 to-[var(--foreground)]/6 dark:from-black/20 dark:to-[var(--foreground)]/12 border border-[var(--foreground)]/6 hover:border-[var(--foreground)]/20 hover:shadow-xl hover:translate-y-1 transform transition-all duration-300 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[var(--foreground)]/8 dark:bg-[var(--foreground)]/16">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            {downloads && rating && (
              <div className="flex items-center gap-3 text-xs text-[var(--foreground)]/70 mt-1">
                <div className="flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  <span>{downloads}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  <span>{rating}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {badge && (
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              badge === "Free"
                ? "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200"
                : "bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
            }`}
          >
            {badge}
          </span>
        )}
      </div>

      <p className="text-[var(--foreground)]/90 mb-6 flex-1">{desc}</p>

      <div className="flex items-center justify-between pt-4 border-t border-[var(--foreground)]/10">
        <div className="text-lg font-bold">{price}</div>
        <div className="flex gap-2">
          <Link href={href}>
            <Button variant="secondary" className="py-2 px-4 text-sm">
              Details
            </Button>
          </Link>
          {onDetails && (
            <button
              onClick={onDetails}
              aria-label={`Quick view ${title}`}
              className="inline-flex items-center px-3 py-2 rounded-md border border-[var(--foreground)]/10 hover:bg-[var(--foreground)]/4 transition text-sm"
            >
              Info
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function RoadmapItem({ date, title, text, icon }: { date: string; title: string; text: string; icon?: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -left-12 top-0 p-2 rounded-full bg-[var(--background)] border-2 border-blue-500/30 dark:border-blue-400/30">
        {icon}
      </div>
      <div className="bg-[var(--background)]/50 dark:bg-[var(--background)]/30 rounded-xl p-6 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 transition">
        <div className="flex items-start justify-between mb-2">
          <div className="font-semibold text-lg">{title}</div>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
            {date}
          </span>
        </div>
        <div className="text-sm text-[var(--foreground)]/80">{text}</div>
      </div>
    </div>
  );
}

function TeamCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:shadow-lg transition-all">
      <div className="flex items-start gap-4">
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-lg shadow-lg">
          {name.split(' ')[0].charAt(0)}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-lg mb-1">{name}</div>
          <div className="text-sm text-[var(--foreground)]/70 mb-3">{role}</div>
          <p className="text-[var(--foreground)]/90 text-sm leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="p-4 rounded-lg bg-[var(--foreground)]/4 dark:bg-[var(--foreground)]/10">
      <summary className="cursor-pointer font-semibold">{q}</summary>
      <div className="mt-2 text-[var(--foreground)]/90">{a}</div>
    </details>
  );
}

function TestimonialsCarousel({ items }: { items: { name: string; role: string; text: string }[] }) {
  const [index, setIndex] = useState(0);
  const len = items.length;
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % len), 6000);
    return () => clearInterval(t);
  }, [len]);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <div 
            key={i} 
            className={`p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 shadow transition-all duration-300 ${
              i === index 
                ? 'scale-100 opacity-100 border-[var(--foreground)]/20 shadow-xl' 
                : 'scale-95 opacity-60'
            }`}
          >
            <div className="mb-4 text-[var(--foreground)]/90 text-sm leading-relaxed">"{it.text}"</div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                {it.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{it.name}</div>
                <div className="text-xs text-[var(--foreground)]/70">{it.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
        <button aria-label="previous" onClick={() => setIndex((i) => (i - 1 + len) % len)} className="p-2 rounded bg-[var(--foreground)]/8 hover:bg-[var(--foreground)]/12">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button aria-label="next" onClick={() => setIndex((i) => (i + 1) % len)} className="p-2 rounded bg-[var(--foreground)]/8 hover:bg-[var(--foreground)]/12">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function validateEmail(e: string) {
    return /\S+@\S+\.\S+/.test(e);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !validateEmail(email) || !subject || !message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('success');
    setName(''); setEmail(''); setSubject(''); setMessage('');
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">
          Subject *
        </label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="What's it about?"
          required
          className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message..."
          rows={5}
          required
          className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" className="py-3 px-6 flex items-center gap-2" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </Button>
        {status === 'success' && (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-300">
            <CheckCircle2 className="w-5 h-5" />
            <span>Successfully sent!</span>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 dark:text-red-300">
            <AlertCircle className="w-5 h-5" />
            <span>Please check your inputs.</span>
          </div>
        )}
      </div>
    </form>
  );
}

function NewsletterForm() {
  const [mail, setMail] = useState('');
  const [ok, setOk] = useState<'idle' | 'sent' | 'error'>('idle');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(mail)) { setOk('error'); return; }
    setOk('sent'); setMail('');
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="flex gap-2">
        <input
          aria-label="Newsletter Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="your@email.com"
          type="email"
          className="flex-1 rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-green-500 dark:focus:border-green-400 text-sm transition-colors"
        />
        <Button type="submit" className="py-2 px-4 whitespace-nowrap">
          Subscribe
        </Button>
      </div>
      {ok === 'sent' && (
        <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-300">
          <CheckCircle2 className="w-4 h-4" />
          <span>Successfully subscribed!</span>
        </div>
      )}
      {ok === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-300">
          <AlertCircle className="w-4 h-4" />
          <span>Please enter a valid email address.</span>
        </div>
      )}
    </form>
  );
}

function PluginModal({ plugin, onClose }: { plugin: (typeof plugins)[0]; onClose: () => void }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    return () => prev?.focus?.();
  }, []);

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      <div ref={ref} tabIndex={-1} className="relative z-10 max-w-3xl w-full bg-[var(--background)] text-[var(--foreground)] rounded-lg p-6 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">{plugin.title}</h3>
            <div className="text-sm text-[var(--foreground)]/80">{plugin.price}</div>
          </div>
          <button onClick={onClose} aria-label="Close" className="p-2 rounded hover:bg-[var(--foreground)]/6">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-4 text-[var(--foreground)]/90">{plugin.details}</div>

        <div className="flex gap-3">
          <Link href={plugin.href}><Button>Go to Plugin Page</Button></Link>
          <a href={`mailto:support@devvoxel.net?subject=Question about ${encodeURIComponent(plugin.title)}`}><Button variant="secondary">Contact Support</Button></a>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ name, price, features, highlight }: { name: string; price: string; features: string[]; highlight?: boolean }) {
  return (
    <div className={`p-6 rounded-xl ${highlight ? 'ring-2 ring-offset-2 ring-indigo-400 dark:ring-indigo-600' : 'bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-xl font-bold">{price}</div>
      </div>
      <ul className="mb-6 list-disc list-inside text-[var(--foreground)]/90 space-y-2">
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <Button className="w-full">{highlight ? 'Buy Now' : 'Learn More'}</Button>
    </div>
  );
}
