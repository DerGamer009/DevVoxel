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
  { label: 'Start', href: '/de' },
  { label: 'Über uns', href: '/de/about' },
  { label: 'Plugins', href: '/de/plugins' },
  { label: 'Community', href: '/de/community' },
  { label: 'Kontakt', href: '/de/contact' },
];

const resourceLinks = [
  { label: 'PlayerDataSync', href: '/de/plugins/playerdatasync' },
  { label: 'ItemDB', href: '/de/plugins/itemdb-free' },
  { label: 'BungeeSystem', href: '/de/plugins/bungeesystem' },
];

const legalLinks = [
  { label: 'Impressum', href: '/de/impressum' },
  { label: 'Datenschutz', href: '/de/datenschutz' },
  { label: 'Nutzungsbedingungen', href: '/de/terms' },
];

/* ---------------------------
   Sample data used on page
   --------------------------- */
const testimonials = [
  { name: 'Max', role: 'Server-Admin', text: 'PlayerDataSync hat uns das Leben gerettet — nahtloser Wechsel zwischen Lobby und Game-Server.' },
  { name: 'Sophie', role: 'Plugin-Entwicklerin', text: 'Tolle Dokumentation & super Community-Support. Empfehle DevVoxel!' },
  { name: 'Lukas', role: 'Community-Manager', text: 'ItemDB Premium spart uns Stunden an Supportarbeit.' },
];

const plugins = [
  {
    id: 'pds',
    title: 'PlayerDataSync',
    desc: 'Echtzeit-Synchronisation: Inventory, XP, Health, Location & mehr.',
    price: 'Kostenlos',
    badge: 'Free',
    icon: <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    href: '/de/plugins/playerdatasync',
    details: `PlayerDataSync synchronisiert sämtliche Spielerdaten zwischen Servern. Unterstützte Versionen: 1.20.4 & 1.21.x. Unterstützte DB: MySQL/SQLite/Postgres.`,
    downloads: '10k+',
    rating: 4.9,
    mcVersions: ['1.20.4', '1.21.x'],
    platforms: ['Spigot', 'Paper'],
  },
  {
    id: 'itemdb-free',
    title: 'ItemDB (Free)',
    desc: 'Basis-Funktionen zum Speichern & Verwalten von Items.',
    price: 'Kostenlos',
    badge: 'Free',
    icon: <Wrench className="w-8 h-8 text-green-600 dark:text-green-400" />,
    href: '/de/plugins/itemdb-free',
    details: `ItemDB Free ermöglicht das einfache Speichern von Items und bietet Grundfunktionen für Server-Admins.`,
    downloads: '5k+',
    rating: 4.7,
    mcVersions: ['1.20+', '1.21.x'],
    platforms: ['Spigot', 'Paper'],
  },
  {
    id: 'itemdb-premium',
    title: 'ItemDB (Premium)',
    desc: 'Erweiterte Suche, Web-API & Prioritäts-Support.',
    price: '13.00€',
    badge: 'Premium',
    icon: <Wrench className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    href: '/de/plugins/itemdb-premium',
    details: `Premium-Funktionen: API-Zugriff, Team-Updates, erweiterte Filter und Prioritäts-Support.`,
    downloads: '2k+',
    rating: 4.8,
    mcVersions: ['1.20+', '1.21.x'],
    platforms: ['Spigot', 'Paper'],
  },
];

/* ---------------------------
   Page Component
   --------------------------- */
export default function Home() {
  const [modalPlugin, setModalPlugin] = useState<typeof plugins[0] | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="de" />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                <span>Minecraft Plugin-Entwicklung</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                DevVoxel — Dein Hub für Entwickler & Gamer
              </h1>
              <p className="text-lg sm:text-xl text-[var(--foreground)]/90 mb-8 max-w-2xl">
                Professionelle Minecraft-Plugins für Spigot, Paper, BungeeCord und Velocity. Entwickelt von erfahrenen Entwicklern, getestet von unserer Community.
              </p>

              <div className="flex gap-3 flex-wrap mb-8">
                <Link href="/de/plugins">
                  <Button className="py-3 px-6 flex items-center gap-2">
                    Plugins entdecken
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/de/community">
                  <Button variant="secondary" className="py-3 px-6">Community beitreten</Button>
                </Link>
              </div>

              {/* Stats */}
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
                  <div className="text-xs text-[var(--foreground)]/80">Bewertung</div>
                </div>
              </div>

              <div className="mt-8 text-sm text-[var(--foreground)]/80">
                <span className="mr-2 font-medium">Beliebt:</span>
                <span className="inline-flex gap-3 flex-wrap">
                  <Link href="/de/plugins/playerdatasync" className="hover:underline text-blue-600 dark:text-blue-400">PlayerDataSync</Link>
                  <span>·</span>
                  <Link href="/de/plugins/itemdb-free" className="hover:underline text-green-600 dark:text-green-400">ItemDB (Free)</Link>
                  <span>·</span>
                  <Link href="/de/plugins/bungeesystem" className="hover:underline text-purple-600 dark:text-purple-400">BungeeSystem</Link>
                </span>
              </div>
            </div>

            <aside className="bg-gradient-to-br from-white/30 to-[var(--foreground)]/6 dark:from-black/20 dark:to-[var(--foreground)]/12 rounded-2xl p-8 shadow-xl border border-[var(--foreground)]/10">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <StatCard icon={<Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />} title="Plugins" value="4+" />
                <StatCard icon={<Users className="w-6 h-6 text-green-600 dark:text-green-400" />} title="Community" value="3k+" />
                <StatCard icon={<Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />} title="Updates" value="regelmäßig" />
                <StatCard icon={<ShieldCheck className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />} title="Sicherheit" value="geprüft" />
              </div>

              <div className="pt-6 border-t border-[var(--foreground)]/10">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Warum DevVoxel?
                </h4>
                <p className="text-sm text-[var(--foreground)]/90">
                  Qualität, Transparenz & schneller Support — ideal für Serverbetreiber und Entwickler. Alle Plugins sind Open Source und Community-getestet.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
          {/* Features */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Unsere Kernfeatures</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                Alles, was du für deinen Minecraft-Server brauchst — von Plugins bis hin zu Developer-Tools
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Feature 
                icon={<Cpu className="w-10 h-10 text-blue-600 dark:text-blue-400" />} 
                title="Hochwertige Plugins" 
                desc="Spigot, Paper, BungeeCord & Velocity — zuverlässig, performant und umfassend dokumentiert. Alle Plugins sind Open Source und Community-getestet." 
              />
              <Feature 
                icon={<Code className="w-10 h-10 text-green-600 dark:text-green-400" />} 
                title="Developer Tools" 
                desc="APIs, Boilerplates und Utilities, damit du schneller produktiv bist. Vollständige Dokumentation und Code-Beispiele inklusive." 
              />
              <Feature 
                icon={<Users className="w-10 h-10 text-purple-600 dark:text-purple-400" />} 
                title="Community Support" 
                desc="Aktiver Discord, Foren und ausführliche Guides — Hilfe, wenn du sie brauchst. Unsere Community unterstützt dich gerne." 
              />
            </div>
          </section>

          {/* Plugins / Pricing */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Top-Plugins & Preise</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                Transparente Preise, kostenlose Versionen und Premium-Features für professionelle Server
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
              <Link href="/de/plugins">
                <Button variant="secondary" className="py-3 px-6 flex items-center gap-2 mx-auto">
                  Alle Plugins ansehen
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Roadmap */}
          <section className="bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Roadmap</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                Was wir für die Zukunft planen — transparent und Community-orientiert
              </p>
            </div>
            <ol className="border-l-2 border-blue-500/30 dark:border-blue-400/30 ml-4 pl-8 space-y-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-20" />
              <li>
                <RoadmapItem 
                  date="Q4 2025" 
                  title="ItemDB Premium Release" 
                  text="Finale Tests, umfassende Dokumentation & offizieller Release mit allen Premium-Features" 
                  icon={<Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />} 
                />
              </li>
              <li>
                <RoadmapItem 
                  date="Q1 2026" 
                  title="Marketplace" 
                  text="Marktplatz für Plugins & Addons — Community-Plugins entdecken und teilen" 
                  icon={<Globe className="w-6 h-6 text-green-600 dark:text-green-400" />} 
                />
              </li>
              <li>
                <RoadmapItem 
                  date="Q2 2026" 
                  title="SaaS Dashboard" 
                  text="Hosted Dashboard für Servermanagement — alles an einem Ort verwalten" 
                  icon={<Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />} 
                />
              </li>
            </ol>
          </section>

          {/* Team & Testimonials */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Unser Team</h2>
                <p className="text-[var(--foreground)]/80 mb-6">
                  Erfahrene Entwickler, die leidenschaftlich an Minecraft-Plugins arbeiten
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <TeamCard name="DerGamer09" role="Founder & Lead Developer" bio="Leitet Entwicklung & Community. Spezialisiert auf Multi-Server-Synchronisation und Performance-Optimierung." />
                  <TeamCard name="Tobi" role="Admin & Community Manager" bio="Community- & Support-Manager. Verantwortlich für Dokumentation, Support und Community-Aufbau." />
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold">Was unsere Nutzer sagen</h2>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">4.8/5</span>
                  </div>
                </div>
                <TestimonialsCarousel items={testimonials} />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Häufige Fragen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FAQItem q="Welche Minecraft-Versionen werden unterstützt?" a="PlayerDataSync: 1.20.4 & 1.21.x. Details in den Plugin-Seiten." />
              <FAQItem q="Gibt es Rückerstattungen für Premium-Plugins?" a="Digitale Güter sind nach Download meist vom Widerruf ausgeschlossen; kontaktiere Support bei Problemen." />
              <FAQItem q="Wie melde ich Bugs?" a="Öffne ein Issue auf GitHub oder schreibe im Support-Discord." />
              <FAQItem q="Brauche ich MySQL?" a="Nur für bestimmte Funktionen wie /onlinetime. Konfiguration in der Plugin-Docs." />
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Preise & Pläne</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PlanCard name="Free" price="0.00€" features={['Community Support', 'Basis-Funktionen']} highlight={false} />
              <PlanCard name="Pro" price="13.00€" features={['Priority Support', 'Web-API', 'Premium Features']} highlight />
              <PlanCard name="Enterprise" price="Custom" features={['SLA', 'On-Prem Support', 'Integrationen']} highlight={false} />
            </div>
          </section>

          {/* Contact / Newsletter / Discord */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kontakt & Community</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                Hast du Fragen? Tritt unserer Community bei oder kontaktiere uns direkt
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Contact Form */}
              <div className="lg:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Kontaktformular</h3>
                    <p className="text-sm text-[var(--foreground)]/70">Wir antworten innerhalb von 24–48 Stunden</p>
                  </div>
                </div>
                <ContactForm />
              </div>

              {/* Newsletter & Discord */}
              <div className="space-y-6">
                {/* Newsletter */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                      <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="font-semibold text-lg">Newsletter</h4>
                  </div>
                  <p className="text-sm text-[var(--foreground)]/80 mb-4">
                    Bleibe auf dem Laufenden mit Updates, neuen Plugins und Community-News.
                  </p>
                  <NewsletterForm />
                </div>

                {/* Contact Info */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                  <h4 className="font-semibold mb-4">Kontaktinformationen</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <a href="mailto:support@devvoxel.net" className="text-blue-600 dark:text-blue-400 hover:underline">
                        support@devvoxel.net
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-[var(--foreground)]/80">Antwortzeit: 24-48h</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        Discord (sofortige Hilfe)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Discord Widget Section */}
            <div className="mt-6 p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-500/20 dark:border-indigo-500/30">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <MessageSquare className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-2xl font-bold">Discord Community</h3>
                  </div>
                  <p className="text-[var(--foreground)]/90">
                    Tritt unserer aktiven Discord-Community bei und erhalte sofortige Hilfe von Entwicklern und anderen Community-Mitgliedern!
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
                      Discord beitreten
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

      {/* Plugin Modal */}
      {modalPlugin && <PluginModal plugin={modalPlugin} onClose={() => setModalPlugin(null)} />}
    </div>
  );
}

/* ====== UI Components ====== */

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
              aria-label={`Schnellübersicht ${title}`}
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

/* FAQ with native <details> for accessibility */
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="p-4 rounded-lg bg-[var(--foreground)]/4 dark:bg-[var(--foreground)]/10">
      <summary className="cursor-pointer font-semibold">{q}</summary>
      <div className="mt-2 text-[var(--foreground)]/90">{a}</div>
    </details>
  );
}

/* Testimonials Carousel */
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

      {/* controls */}
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

/* Contact form (frontend-only) */
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
    // Placeholder: integrate real API (Mailer, backend) here.
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
            placeholder="Dein Name"
            required
            className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
            E-Mail *
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.de"
            required
            className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">
          Betreff *
        </label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Worum geht es?"
          required
          className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
          Nachricht *
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Deine Nachricht..."
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
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Nachricht senden
            </>
          )}
        </Button>
        {status === 'success' && (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-300">
            <CheckCircle2 className="w-5 h-5" />
            <span>Erfolgreich gesendet!</span>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 dark:text-red-300">
            <AlertCircle className="w-5 h-5" />
            <span>Bitte überprüfe deine Eingaben.</span>
          </div>
        )}
      </div>
    </form>
  );
}

/* Newsletter form (frontend-only placeholder) */
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
          aria-label="Newsletter E-Mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="deine@email.de"
          type="email"
          className="flex-1 rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-green-500 dark:focus:border-green-400 text-sm transition-colors"
        />
        <Button type="submit" className="py-2 px-4 whitespace-nowrap">
          Abonnieren
        </Button>
      </div>
      {ok === 'sent' && (
        <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-300">
          <CheckCircle2 className="w-4 h-4" />
          <span>Erfolgreich abonniert!</span>
        </div>
      )}
      {ok === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-300">
          <AlertCircle className="w-4 h-4" />
          <span>Bitte gib eine gültige E-Mail-Adresse ein.</span>
        </div>
      )}
    </form>
  );
}

/* Plugin details modal */
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
    // focus trap start
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
          <button onClick={onClose} aria-label="Schließen" className="p-2 rounded hover:bg-[var(--foreground)]/6">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-4 text-[var(--foreground)]/90">{plugin.details}</div>

        <div className="flex gap-3">
          <Link href={plugin.href}><Button>Zur Plugin-Seite</Button></Link>
          <a href={`mailto:support@devvoxel.net?subject=Frage zu ${encodeURIComponent(plugin.title)}`}><Button variant="secondary">Support kontaktieren</Button></a>
        </div>
      </div>
    </div>
  );
}

/* Plan card */
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
      <Button className="w-full">{highlight ? 'Jetzt kaufen' : 'Mehr erfahren'}</Button>
    </div>
  );
}
