'use client';

import React, { useState } from 'react';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Button from "../../../components/Button";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Github,
  Users,
  LifeBuoy,
  ArrowRight,
  Phone,
  Globe,
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

const contactMethods = [
  {
    icon: <MessageSquare className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Support Discord",
    description: "Temps de réponse le plus rapide — généralement en quelques minutes",
    link: "https://discord.gg/fKgyae8R4e",
    linkText: "Rejoindre Discord",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: "Support Email",
    description: "Pour les demandes formelles et les demandes commerciales",
    link: "mailto:support@devvoxel.net",
    linkText: "Envoyer un Email",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    title: "Issues GitHub",
    description: "Pour les rapports de bugs et les demandes de fonctionnalités",
    link: "#",
    linkText: "Ouvrir une Issue",
    color: "from-gray-600 to-gray-800",
  },
];

const supportTopics = [
  {
    title: "Support Plugin",
    description: "Aide pour l'installation, la configuration ou les problèmes avec nos plugins",
    icon: <LifeBuoy className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Support Technique",
    description: "Questions techniques, intégration API ou support développeur",
    icon: <Github className="w-5 h-5 text-green-600 dark:text-green-400" />,
  },
  {
    title: "Demandes Commerciales",
    description: "Partenariats, développement personnalisé ou solutions d'entreprise",
    icon: <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
  },
  {
    title: "Questions Générales",
    description: "Questions sur DevVoxel, la communauté ou d'autres sujets",
    icon: <MessageSquare className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
  },
];

export default function Contact() {
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
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} currentLang="fr" />

      <main className="flex flex-col flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Contactez-nous
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 max-w-3xl mx-auto mb-8">
            Nous sommes heureux de vous aider. Choisissez la méthode de contact appropriée pour votre demande.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-6 rounded-xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color} mb-4 w-fit`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-[var(--foreground)]/90 mb-4 flex-1">{method.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                  {method.linkText}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
              <h2 className="text-2xl font-bold mb-4">Envoyer un Message</h2>
              <p className="text-[var(--foreground)]/80 mb-6">
                Remplissez le formulaire et nous vous répondrons dans les 24-48 heures.
              </p>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre Nom"
                      required
                      className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Sujet *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="De quoi s'agit-il ?"
                    required
                    className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Votre message..."
                    rows={6}
                    required
                    className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full py-3 flex items-center justify-center gap-2" disabled={status === 'sending'}>
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
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message envoyé avec succès ! Nous vous répondrons bientôt.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                    <AlertCircle className="w-5 h-5" />
                    <span>Veuillez vérifier vos saisies et réessayer.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:support@devvoxel.net" className="text-blue-600 dark:text-blue-400 hover:underline">
                        support@devvoxel.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                      <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Discord</div>
                      <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        discord.gg/fKgyae8R4e
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900/30">
                      <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">GitHub</div>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:underline">
                        github.com/devvoxel
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                      <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Temps de Réponse</div>
                      <div className="text-[var(--foreground)]/80">24-48 heures (Email)</div>
                      <div className="text-[var(--foreground)]/80">Généralement immédiatement (Discord)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Topics */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                <h3 className="text-xl font-bold mb-4">Domaines de Support</h3>
                <div className="space-y-3">
                  {supportTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--background)]/50 dark:bg-[var(--background)]/30">
                      <div className="mt-0.5">{topic.icon}</div>
                      <div>
                        <div className="font-semibold text-sm mb-1">{topic.title}</div>
                        <div className="text-xs text-[var(--foreground)]/70">{topic.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Help Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Questions Fréquemment Posées</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Vous pourriez trouver une réponse à votre question ici
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <details className="p-4 rounded-lg bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 border border-[var(--foreground)]/10">
              <summary className="cursor-pointer font-semibold mb-2">À quelle rapidité recevrai-je une réponse ?</summary>
              <div className="mt-2 text-sm text-[var(--foreground)]/90">
                Sur Discord, nous répondons généralement en quelques minutes. Par email dans les 24-48 heures.
              </div>
            </details>

            <details className="p-4 rounded-lg bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 border border-[var(--foreground)]/10">
              <summary className="cursor-pointer font-semibold mb-2">Comment signaler un bug ?</summary>
              <div className="mt-2 text-sm text-[var(--foreground)]/90">
                Ouvrez une issue sur GitHub ou signalez-le sur Discord. Veuillez décrire le bug aussi en détail que possible.
              </div>
            </details>

            <details className="p-4 rounded-lg bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 border border-[var(--foreground)]/10">
              <summary className="cursor-pointer font-semibold mb-2">Puis-je demander un plugin personnalisé ?</summary>
              <div className="mt-2 text-sm text-[var(--foreground)]/90">
                Oui ! Contactez-nous pour les demandes commerciales et le développement personnalisé. Nous sommes heureux de discuter de votre projet.
              </div>
            </details>

            <details className="p-4 rounded-lg bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 border border-[var(--foreground)]/10">
              <summary className="cursor-pointer font-semibold mb-2">Y a-t-il un support premium ?</summary>
              <div className="mt-2 text-sm text-[var(--foreground)]/90">
                Le support premium est disponible pour les clients ItemDB Premium. Contactez-nous pour plus d'informations.
              </div>
            </details>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Encore des Questions ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[var(--foreground)]/90">
              Visitez notre communauté sur Discord pour une aide rapide ou parcourez notre documentation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer">
                <Button className="py-3 px-6 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Communauté Discord
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link href="/fr/docs">
                <Button variant="secondary" className="py-3 px-6 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Documentation
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

