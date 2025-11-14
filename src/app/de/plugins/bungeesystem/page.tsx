'use client';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Link from 'next/link';
import { ShieldCheck, Wrench, Users, Zap, Calendar, GitMerge } from 'lucide-react';

const navLinks = [
  { label: 'Start', href: '/de' },
  { label: 'Über uns', href: '/de/about' },
  { label: 'Plugins', href: '/de/plugins' },
  { label: 'Community', href: '/de/community' },
  { label: 'Kontakt', href: '/de/contact' },
];

const resourceLinks=[
    { label: "PlayerDataSync", href: "/de/plugins/playerdatasync" },
    { label: "ItemDB", href: "/de/plugins/itemdb-free" },
    { label: "BungeeSystem", href: "/de/plugins/bungeesystem" },
];

const legalLinks = [
  { label: 'Impressum', href: '/de/impressum' },
  { label: 'Datenschutz', href: '/de/datenschutz' },
  { label: 'Nutzungsbedingungen', href: '/de/terms' },
];

export default function BungeeSystemPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        {/* Hero */}
        <section className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold">BungeeSystem</h1>
              <p className="text-sm text-[var(--foreground)]/80">The Ultimate BungeeCord & Velocity Utility Plugin — von DerGamer09 (DerBenxFan100)</p>
            </div>
          </div>

          <blockquote className="border-l-4 pl-4 italic text-[var(--foreground)]/85 mb-4">
            Boost your BungeeCord or Velocity network with essential features, powerful commands, and full customizability!
          </blockquote>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.spigotmc.org/resources/bungeesystem-powerful-proxy-addon-%E2%9A%A1-mysql-chat-commands.119339/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              Download (SpigotMC)
            </a>

            <Link
              href="/de/plugins"
              className="inline-block px-5 py-3 bg-[var(--foreground)]/10 dark:bg-[var(--foreground)]/20 rounded hover:bg-[var(--foreground)]/20 transition-colors"
            >
              Zur Plugin-Übersicht
            </Link>
          </div>
        </section>

        {/* Kurzbeschreibung & Features */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <h2 className="text-2xl font-semibold mb-3">Kurzbeschreibung</h2>
            <p className="text-[var(--foreground)]/90">
              BungeeSystem ist ein leichtgewichtiges, leistungsstarkes Utility-Plugin für BungeeCord und Velocity. Es bringt nützliche Befehle, ein privates Nachrichtensystem, MySQL-Integration für Online-Zeiterfassung, Discord-Webhook-Support für Reports und viele konfigurierbare Optionen mit.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <h2 className="text-2xl font-semibold mb-3">Highlights & Features</h2>
            <ul className="list-disc list-inside space-y-2 text-[var(--foreground)]/90">
              <li>Essentielle BungeeCord & Velocity Commands (z. B. /hub, /list, /ping)</li>
              <li>Voll anpassbare Konfiguration (config.yml)</li>
              <li>Leichtgewichtig & performant</li>
              <li>Discord Webhook Integration für Reports</li>
              <li>MySQL-Unterstützung speziell für /onlinetime</li>
              <li>Privates Nachrichtensystem: /msg, /reply, /ignore (mit Sound-Benachrichtigung)</li>
              <li>Experimentelle Features, per Config aktivier-/deaktivierbar</li>
            </ul>
          </div>
        </section>

        {/* Requirements & Installation */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <div className="flex items-center gap-3 mb-2">
              <Wrench className="w-6 h-6 text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-semibold">Installation</h3>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-[var(--foreground)]/90">
              <li>Download der JAR-Datei.</li>
              <li>Verschiebe die JAR in dein <code className="rounded bg-[var(--foreground)]/5 px-1">/plugins</code> Verzeichnis (Proxy).</li>
              <li>Proxy neu starten.</li>
              <li>config.yml nach Bedarf anpassen.</li>
              <li>Server starten & genießen.</li>
            </ol>
          </div>

          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-xl font-semibold">Anforderungen</h3>
            </div>
            <ul className="list-disc list-inside text-[var(--foreground)]/90">
              <li>Java 21 oder höher</li>
              <li>BungeeCord oder Velocity Proxy</li>
              <li>MySQL (optional — nur für /onlinetime erforderlich)</li>
            </ul>
          </div>
        </section>

        {/* Commands Table */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Commands & Permissions</h2>

          <div className="overflow-x-auto rounded-xl border border-[var(--foreground)]/10 dark:border-[var(--foreground)]/20">
            <table className="min-w-full table-auto divide-y divide-[var(--foreground)]/10 dark:divide-[var(--foreground)]/20">
              <thead className="bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12 text-left">
                <tr>
                  <th className="px-4 py-3">Command</th>
                  <th className="px-4 py-3">Usage</th>
                  <th className="px-4 py-3">Permission</th>
                  <th className="px-4 py-3">Group</th>
                </tr>
              </thead>
              <tbody className="bg-transparent divide-y divide-[var(--foreground)]/10 dark:divide-[var(--foreground)]/20">
                {[
                  ['HubCommand', '/hub, /lobby, /l', '–', 'Players'],
                  ['ListCommand', '/list', '–', 'Players'],
                  ['ToggleNotify', '/togglenotify', 'bungeesystem.notify', 'Staff'],
                  ['MSGCommand', '/msg', '–', 'Players'],
                  ['ReplyCommand', '/reply', '–', 'Players'],
                  ['IgnoreCommand', '/ignore', 'bungeesystem.ignore', 'Players'],
                  ['ReplayCommand (Soon)', '/replay', '–', 'Players'],
                  ['SpyCommand (Soon)', '/spy', 'bungeesystem.spy', 'Staff'],
                  ['TeamChatCommand', '/teamchat, /tc', 'bungeesystem.teamchat.use', 'Staff'],
                  ['JoinMeCommand', '/joinme', 'bungeesystem.joinme.use', 'Players'],
                  ['PingCommand', '/ping', '–', 'Players'],
                  ['ServerListCommand', '/serverlist', '–', 'Players'],
                  ['VanishCommand', '/vanish, /v', 'bungeesystem.vanish', 'Staff'],
                  ['PlayCommand', '/play', 'bungeesystem.play', 'Players'],
                  ['FindCommand', '/find', '–', 'Players'],
                  ['OnlineTimeCommand', '/onlinetime, /otime', 'bungeesystem.onlinetime', 'Players']
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="px-4 py-3 align-top">{row[0]}</td>
                    <td className="px-4 py-3 align-top">{row[1]}</td>
                    <td className="px-4 py-3 align-top">{row[2]}</td>
                    <td className="px-4 py-3 align-top">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Changelog */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Latest Changes — v1.2.1-BETA (29.06.2025)</h2>
          <ul className="list-disc list-inside text-[var(--foreground)]/90">
            <li>➕ Added: Full Velocity proxy support (Beta)</li>
            <li>⚙️ Improved: Better multi-language support (EN/DE)</li>
            <li>✨ New: Improved message notification sounds</li>
            <li>🔧 Fixed: Several small bugs and config issues</li>
            <li>⚡ Optimized: Overall performance and stability improvements</li>
            <li>🧹 Cleaned: Codebase refactoring for future features</li>
          </ul>
        </section>

        {/* Additional Info & Support */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <h3 className="text-xl font-semibold mb-2">Zusätzliche Infos</h3>
            <p className="text-[var(--foreground)]/90">
              MySQL wird nur für <code className="rounded bg-[var(--foreground)]/5 px-1">/onlinetime</code> benötigt. Experimentelle Features lassen sich in <code className="rounded bg-[var(--foreground)]/5 px-1">config.yml</code> aktivieren oder deaktivieren.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-[var(--foreground)]/90 mb-2">
              Bei Fragen oder Bugs: Tritt dem Discord-Server bei oder schau in die Dokumentation / Issues auf Spigot/GitHub.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.spigotmc.org/resources/bungeesystem-powerful-proxy-addon-%E2%9A%A1-mysql-chat-commands.119339/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[var(--foreground)]/10 dark:bg-[var(--foreground)]/20 rounded hover:bg-[var(--foreground)]/20 transition-colors"
              >
                Spigot-Seite
              </a>
              <Link
                href="/de/plugins"
                className="inline-block px-4 py-2 bg-[var(--foreground)]/10 dark:bg-[var(--foreground)]/20 rounded hover:bg-[var(--foreground)]/20 transition-colors"
              >
                Zur Plugin-Übersicht
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-3">Jetzt downloaden</h3>
          <p className="text-[var(--foreground)]/90 mb-4">
            Lade BungeeSystem herunter und bringe dein Proxy-Netzwerk auf das nächste Level.
          </p>
          <a
            href="https://www.spigotmc.org/resources/bungeesystem-powerful-proxy-addon-%E2%9A%A1-mysql-chat-commands.119339/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Download (SpigotMC)
          </a>
        </section>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} />
    </div>
  );
}
