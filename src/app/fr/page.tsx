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
  { label: 'Accueil', href: '/fr' },
  { label: 'À propos', href: '/fr/about' },
  { label: 'Plugins', href: '/fr/plugins' },
  { label: 'Communauté', href: '/fr/community' },
  { label: 'Contact', href: '/fr/contact' },
];

const resourceLinks = [
  { label: 'PlayerDataSync', href: '/fr/plugins/playerdatasync' },
  { label: 'ItemDB', href: '/fr/plugins/itemdb-free' },
  { label: 'BungeeSystem', href: '/fr/plugins/bungeesystem' },
];

const legalLinks = [
  { label: 'Mentions légales', href: '/fr/impressum' },
  { label: 'Confidentialité', href: '/fr/datenschutz' },
  { label: 'Conditions', href: '/fr/terms' },
];

const testimonials = [
  { name: 'Max', role: 'Administrateur Serveur', text: 'PlayerDataSync nous a sauvé la vie — basculement transparent entre le lobby et le serveur de jeu.' },
  { name: 'Sophie', role: 'Développeuse de Plugins', text: 'Excellente documentation et super support communautaire. Je recommande DevVoxel !' },
  { name: 'Lukas', role: 'Gestionnaire de Communauté', text: 'ItemDB Premium nous fait gagner des heures de travail de support.' },
];

const plugins = [
  {
    id: 'pds',
    title: 'PlayerDataSync',
    desc: 'Synchronisation en temps réel : Inventaire, XP, Santé, Localisation et plus.',
    price: 'Gratuit',
    badge: 'Free',
    icon: <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    href: '/fr/plugins/playerdatasync',
    details: `PlayerDataSync synchronise toutes les données des joueurs entre serveurs. Versions supportées : 1.20.4 et 1.21.x. Bases de données supportées : MySQL/SQLite/Postgres.`,
    downloads: '10k+',
    rating: 4.9,
    mcVersions: ['1.20.4', '1.21.x'],
    platforms: ['Spigot', 'Paper'],
  },
  {
    id: 'itemdb-free',
    title: 'ItemDB (Gratuit)',
    desc: 'Fonctionnalités de base pour stocker et gérer les items.',
    price: 'Gratuit',
    badge: 'Free',
    icon: <Wrench className="w-8 h-8 text-green-600 dark:text-green-400" />,
    href: '/fr/plugins/itemdb-free',
    details: `ItemDB Gratuit permet un stockage facile des items et fournit des fonctionnalités de base pour les administrateurs de serveurs.`,
    downloads: '5k+',
    rating: 4.7,
    mcVersions: ['1.20+', '1.21.x'],
    platforms: ['Spigot', 'Paper'],
  },
  {
    id: 'itemdb-premium',
    title: 'ItemDB (Premium)',
    desc: 'Recherche avancée, Web-API et support prioritaire.',
    price: '13,00€',
    badge: 'Premium',
    icon: <Wrench className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    href: '/fr/plugins/itemdb-premium',
    details: `Fonctionnalités premium : accès API, mises à jour d'équipe, filtres avancés et support prioritaire.`,
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
      <Header links={navLinks} currentLang="fr" />

      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                <span>Développement de Plugins Minecraft</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                DevVoxel — Votre Hub pour Développeurs et Joueurs
              </h1>
              <p className="text-lg sm:text-xl text-[var(--foreground)]/90 mb-8 max-w-2xl">
                Plugins Minecraft professionnels pour Spigot, Paper, BungeeCord et Velocity. Développés par des développeurs expérimentés, testés par notre communauté.
              </p>

              <div className="flex gap-3 flex-wrap mb-8">
                <Link href="/fr/plugins">
                  <Button className="py-3 px-6 flex items-center gap-2">
                    Découvrir les Plugins
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/fr/community">
                  <Button variant="secondary" className="py-3 px-6">Rejoindre la Communauté</Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-md">
                <div className="p-4 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 rounded-xl">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-xs text-[var(--foreground)]/80">Plugins</div>
                </div>
                <div className="p-4 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 rounded-xl">
                  <div className="text-2xl font-bold">25k+</div>
                  <div className="text-xs text-[var(--foreground)]/80">Téléchargements</div>
                </div>
                <div className="p-4 bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 rounded-xl">
                  <div className="text-2xl font-bold">4.8 ★</div>
                  <div className="text-xs text-[var(--foreground)]/80">Note</div>
                </div>
              </div>

              <div className="mt-8 text-sm text-[var(--foreground)]/80">
                <span className="mr-2 font-medium">Populaire :</span>
                <span className="inline-flex gap-3 flex-wrap">
                  <Link href="/fr/plugins/playerdatasync" className="hover:underline text-blue-600 dark:text-blue-400">PlayerDataSync</Link>
                  <span>·</span>
                  <Link href="/fr/plugins/itemdb-free" className="hover:underline text-green-600 dark:text-green-400">ItemDB (Gratuit)</Link>
                  <span>·</span>
                  <Link href="/fr/plugins/bungeesystem" className="hover:underline text-purple-600 dark:text-purple-400">BungeeSystem</Link>
                </span>
              </div>
            </div>

            <aside className="bg-gradient-to-br from-white/30 to-[var(--foreground)]/6 dark:from-black/20 dark:to-[var(--foreground)]/12 rounded-2xl p-8 shadow-xl border border-[var(--foreground)]/10">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <StatCard icon={<Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />} title="Plugins" value="4+" />
                <StatCard icon={<Users className="w-6 h-6 text-green-600 dark:text-green-400" />} title="Communauté" value="3k+" />
                <StatCard icon={<Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />} title="Mises à Jour" value="régulières" />
                <StatCard icon={<ShieldCheck className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />} title="Sécurité" value="vérifiée" />
              </div>

              <div className="pt-6 border-t border-[var(--foreground)]/10">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Pourquoi DevVoxel ?
                </h4>
                <p className="text-sm text-[var(--foreground)]/90">
                  Qualité, transparence et support rapide — idéal pour les opérateurs de serveurs et les développeurs. Tous les plugins sont open source et testés par la communauté.
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos Fonctionnalités Principales</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                Tout ce dont vous avez besoin pour votre serveur Minecraft — des plugins aux outils de développement
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Feature 
                icon={<Cpu className="w-10 h-10 text-blue-600 dark:text-blue-400" />} 
                title="Plugins de Haute Qualité" 
                desc="Spigot, Paper, BungeeCord et Velocity — fiables, performants et complètement documentés. Tous les plugins sont open source et testés par la communauté." 
              />
              <Feature 
                icon={<Code className="w-10 h-10 text-green-600 dark:text-green-400" />} 
                title="Outils de Développement" 
                desc="APIs, modèles et utilitaires pour vous rendre productif plus rapidement. Documentation complète et exemples de code inclus." 
              />
              <Feature 
                icon={<Users className="w-10 h-10 text-purple-600 dark:text-purple-400" />} 
                title="Support Communautaire" 
                desc="Discord actif, forums et guides complets — aide quand vous en avez besoin. Notre communauté est heureuse de vous soutenir." 
              />
            </div>
          </section>

          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meilleurs Plugins et Tarifs</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                Tarification transparente, versions gratuites et fonctionnalités premium pour serveurs professionnels
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
              <Link href="/fr/plugins">
                <Button variant="secondary" className="py-3 px-6 flex items-center gap-2 mx-auto">
                  Voir Tous les Plugins
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Feuille de Route</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                Ce que nous planifions pour l'avenir — transparent et orienté communauté
              </p>
            </div>
            <ol className="border-l-2 border-blue-500/30 dark:border-blue-400/30 ml-4 pl-8 space-y-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-20" />
              <li>
                <RoadmapItem 
                  date="Q4 2025" 
                  title="Sortie ItemDB Premium" 
                  text="Tests finaux, documentation complète et sortie officielle avec toutes les fonctionnalités premium" 
                  icon={<Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />} 
                />
              </li>
              <li>
                <RoadmapItem 
                  date="Q1 2026" 
                  title="Marketplace" 
                  text="Marketplace pour plugins et addons — découvrez et partagez des plugins communautaires" 
                  icon={<Globe className="w-6 h-6 text-green-600 dark:text-green-400" />} 
                />
              </li>
              <li>
                <RoadmapItem 
                  date="Q2 2026" 
                  title="Tableau de Bord SaaS" 
                  text="Tableau de bord hébergé pour la gestion de serveurs — gérez tout en un seul endroit" 
                  icon={<Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />} 
                />
              </li>
            </ol>
          </section>

          <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Équipe</h2>
                <p className="text-[var(--foreground)]/80 mb-6">
                  Développeurs expérimentés passionnés par les plugins Minecraft
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <TeamCard name="DerGamer09" role="Fondateur & Développeur Principal" bio="Dirige le développement et la communauté. Spécialisé dans la synchronisation multi-serveurs et l'optimisation des performances." />
                  <TeamCard name="Tobi" role="Administrateur & Gestionnaire de Communauté" bio="Gestionnaire de communauté et support. Responsable de la documentation, du support et de la construction de la communauté." />
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold">Ce que Disent Nos Utilisateurs</h2>
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
            <h2 className="text-3xl font-bold mb-6">Questions Fréquemment Posées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FAQItem q="Quelles versions Minecraft sont supportées ?" a="PlayerDataSync : 1.20.4 et 1.21.x. Détails sur les pages des plugins." />
              <FAQItem q="Y a-t-il des remboursements pour les plugins premium ?" a="Les biens numériques sont généralement exclus du droit de rétractation après téléchargement ; contactez le support si vous avez des problèmes." />
              <FAQItem q="Comment signaler des bugs ?" a="Ouvrez une issue sur GitHub ou écrivez dans le support Discord." />
              <FAQItem q="Ai-je besoin de MySQL ?" a="Seulement pour certaines fonctionnalités comme /onlinetime. Configuration dans la documentation du plugin." />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Tarification et Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PlanCard name="Gratuit" price="0,00€" features={['Support Communautaire', 'Fonctionnalités de Base']} highlight={false} />
              <PlanCard name="Pro" price="13,00€" features={['Support Prioritaire', 'Web-API', 'Fonctionnalités Premium']} highlight />
              <PlanCard name="Enterprise" price="Sur Mesure" features={['SLA', 'Support On-Prem', 'Intégrations']} highlight={false} />
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact et Communauté</h2>
              <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
                Des questions ? Rejoignez notre communauté ou contactez-nous directement
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Formulaire de Contact</h3>
                    <p className="text-sm text-[var(--foreground)]/70">Nous répondons dans les 24–48 heures</p>
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
                    Restez à jour avec les mises à jour, nouveaux plugins et actualités de la communauté.
                  </p>
                  <NewsletterForm />
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                  <h4 className="font-semibold mb-4">Informations de Contact</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <a href="mailto:support@devvoxel.net" className="text-blue-600 dark:text-blue-400 hover:underline">
                        support@devvoxel.net
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-[var(--foreground)]/80">Temps de réponse : 24-48h</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        Discord (aide instantanée)
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
                    <h3 className="text-2xl font-bold">Communauté Discord</h3>
                  </div>
                  <p className="text-[var(--foreground)]/90">
                    Rejoignez notre communauté Discord active et obtenez une aide instantanée de développeurs et d'autres membres de la communauté !
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
                      Rejoindre Discord
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} currentLang="fr" />

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
              Détails
            </Button>
          </Link>
          {onDetails && (
            <button
              onClick={onDetails}
              aria-label={`Aperçu rapide ${title}`}
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
        <button aria-label="précédent" onClick={() => setIndex((i) => (i - 1 + len) % len)} className="p-2 rounded bg-[var(--foreground)]/8 hover:bg-[var(--foreground)]/12">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button aria-label="suivant" onClick={() => setIndex((i) => (i + 1) % len)} className="p-2 rounded bg-[var(--foreground)]/8 hover:bg-[var(--foreground)]/12">
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
            Nom *
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre Nom"
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
            placeholder="votre@email.com"
            required
            className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">
          Sujet *
        </label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="De quoi s'agit-il ?"
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
          placeholder="Votre message..."
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
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Envoyer le Message
            </>
          )}
        </Button>
        {status === 'success' && (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-300">
            <CheckCircle2 className="w-5 h-5" />
            <span>Envoyé avec succès !</span>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 dark:text-red-300">
            <AlertCircle className="w-5 h-5" />
            <span>Veuillez vérifier vos saisies.</span>
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
          aria-label="Email Newsletter"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="votre@email.com"
          type="email"
          className="flex-1 rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-green-500 dark:focus:border-green-400 text-sm transition-colors"
        />
        <Button type="submit" className="py-2 px-4 whitespace-nowrap">
          S'abonner
        </Button>
      </div>
      {ok === 'sent' && (
        <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-300">
          <CheckCircle2 className="w-4 h-4" />
          <span>Abonnement réussi !</span>
        </div>
      )}
      {ok === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-300">
          <AlertCircle className="w-4 h-4" />
          <span>Veuillez entrer une adresse email valide.</span>
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
          <button onClick={onClose} aria-label="Fermer" className="p-2 rounded hover:bg-[var(--foreground)]/6">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-4 text-[var(--foreground)]/90">{plugin.details}</div>

        <div className="flex gap-3">
          <Link href={plugin.href}><Button>Aller à la Page du Plugin</Button></Link>
          <a href={`mailto:support@devvoxel.net?subject=Question sur ${encodeURIComponent(plugin.title)}`}><Button variant="secondary">Contacter le Support</Button></a>
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
      <Button className="w-full">{highlight ? 'Acheter Maintenant' : 'En Savoir Plus'}</Button>
    </div>
  );
}

