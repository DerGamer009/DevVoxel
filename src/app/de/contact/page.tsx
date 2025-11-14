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
  { label: 'Start', href: '/de' },
  { label: 'Über uns', href: '/de/about' },
  { label: 'Plugins', href: '/de/plugins' },
  { label: 'Community', href: '/de/community' },
  { label: 'Kontakt', href: '/de/contact' },
];

const resourceLinks = [
  { label: "PlayerDataSync", href: "/de/plugins/playerdatasync" },
  { label: "ItemDB", href: "/de/plugins/itemdb-free" },
  { label: "BungeeSystem", href: "/de/plugins/bungeesystem" },
];

const legalLinks = [
  { label: 'Impressum', href: '/de/impressum' },
  { label: 'Datenschutz', href: '/de/datenschutz' },
  { label: 'Nutzungsbedingungen', href: '/de/terms' },
];

const contactMethods = [
  {
    icon: <MessageSquare className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Discord Support",
    description: "Schnellste Antwortzeit — normalerweise innerhalb von Minuten",
    link: "https://discord.gg/fKgyae8R4e",
    linkText: "Discord beitreten",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: "E-Mail Support",
    description: "Für formelle Anfragen und Business-Anfragen",
    link: "mailto:support@devvoxel.net",
    linkText: "E-Mail senden",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    title: "GitHub Issues",
    description: "Für Bug-Reports und Feature-Requests",
    link: "#",
    linkText: "Issue öffnen",
    color: "from-gray-600 to-gray-800",
  },
];

const supportTopics = [
  {
    title: "Plugin-Support",
    description: "Hilfe bei Installation, Konfiguration oder Problemen mit unseren Plugins",
    icon: <LifeBuoy className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Technischer Support",
    description: "Technische Fragen, API-Integration oder Entwickler-Support",
    icon: <Github className="w-5 h-5 text-green-600 dark:text-green-400" />,
  },
  {
    title: "Business-Anfragen",
    description: "Partnerschaften, Custom-Entwicklung oder Enterprise-Lösungen",
    icon: <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
  },
  {
    title: "Allgemeine Fragen",
    description: "Fragen zu DevVoxel, der Community oder anderen Themen",
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
      <Header links={navLinks} currentLang="de" />

      <main className="flex flex-col flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            <span>Kontakt</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Kontaktiere uns
          </h1>
          <p className="text-lg sm:text-xl text-[var(--foreground)]/90 max-w-3xl mx-auto mb-8">
            Wir helfen dir gerne weiter. Wähle die passende Kontaktmethode für deine Anfrage.
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
              <h2 className="text-2xl font-bold mb-4">Nachricht senden</h2>
              <p className="text-[var(--foreground)]/80 mb-6">
                Fülle das Formular aus und wir melden uns innerhalb von 24-48 Stunden bei dir.
              </p>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dein Name"
                      required
                      className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="deine@email.de"
                      required
                      className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Betreff *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Worum geht es?"
                    required
                    className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Deine Nachricht..."
                    rows={6}
                    required
                    className="w-full rounded-md px-4 py-2 border border-[var(--foreground)]/10 bg-[var(--background)] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full py-3 flex items-center justify-center gap-2" disabled={status === 'sending'}>
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
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Nachricht erfolgreich gesendet! Wir melden uns bald bei dir.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                    <AlertCircle className="w-5 h-5" />
                    <span>Bitte überprüfe deine Eingaben und versuche es erneut.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">E-Mail</div>
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
                      <div className="font-semibold mb-1">Antwortzeit</div>
                      <div className="text-[var(--foreground)]/80">24-48 Stunden (E-Mail)</div>
                      <div className="text-[var(--foreground)]/80">Normalerweise sofort (Discord)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Topics */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--foreground)]/6 to-[var(--foreground)]/12 dark:from-[var(--foreground)]/12 dark:to-[var(--foreground)]/20 border border-[var(--foreground)]/10">
                <h3 className="text-xl font-bold mb-4">Support-Bereiche</h3>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              Vielleicht findest du hier bereits eine Antwort auf deine Frage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <details className="p-4 rounded-lg bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 border border-[var(--foreground)]/10">
              <summary className="cursor-pointer font-semibold mb-2">Wie schnell erhalte ich eine Antwort?</summary>
              <div className="mt-2 text-sm text-[var(--foreground)]/90">
                Auf Discord antworten wir normalerweise innerhalb von Minuten. Per E-Mail innerhalb von 24-48 Stunden.
              </div>
            </details>

            <details className="p-4 rounded-lg bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 border border-[var(--foreground)]/10">
              <summary className="cursor-pointer font-semibold mb-2">Wie melde ich einen Bug?</summary>
              <div className="mt-2 text-sm text-[var(--foreground)]/90">
                Öffne ein Issue auf GitHub oder melde es auf Discord. Bitte beschreibe den Bug so detailliert wie möglich.
              </div>
            </details>

            <details className="p-4 rounded-lg bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 border border-[var(--foreground)]/10">
              <summary className="cursor-pointer font-semibold mb-2">Kann ich ein Custom-Plugin anfragen?</summary>
              <div className="mt-2 text-sm text-[var(--foreground)]/90">
                Ja! Kontaktiere uns für Business-Anfragen und Custom-Entwicklung. Wir besprechen gerne dein Projekt.
              </div>
            </details>

            <details className="p-4 rounded-lg bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 border border-[var(--foreground)]/10">
              <summary className="cursor-pointer font-semibold mb-2">Gibt es Premium-Support?</summary>
              <div className="mt-2 text-sm text-[var(--foreground)]/90">
                Premium-Support ist für ItemDB Premium-Kunden verfügbar. Kontaktiere uns für mehr Informationen.
              </div>
            </details>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Noch Fragen?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-[var(--foreground)]/90">
              Besuche unsere Community auf Discord für schnelle Hilfe oder durchstöbere unsere Dokumentation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://discord.gg/fKgyae8R4e" target="_blank" rel="noopener noreferrer">
                <Button className="py-3 px-6 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Discord Community
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link href="/de/docs">
                <Button variant="secondary" className="py-3 px-6 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Dokumentation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} />
    </div>
  );
}

