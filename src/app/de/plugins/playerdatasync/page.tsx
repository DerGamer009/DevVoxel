'use client';

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Link from "next/link";
import { Cpu, Database, ShieldCheck, Zap, GitMerge } from "lucide-react";

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

export default function PlayerDataSyncPage() {
  const configExample = `# =====================================
# PlayerDataSync Configuration
# Compatible with Minecraft 1.20.4 - 1.21.8
# =====================================

# Server Configuration
server:
  id: default  # Unique identifier for this server instance

database:
  type: mysql # Available options: mysql, sqlite, postgresql
 
  # MySQL Database Configuration
  mysql:
    host: localhost
    port: 3306
    database: minecraft
    user: root
    password: password
    ssl: false
    connection_timeout: 5000 # milliseconds
    max_connections: 10
 
  # SQLite Database Configuration
  sqlite:
    file: plugins/PlayerDataSync/playerdata.db
 
  # PostgreSQL Database Configuration (experimental)
  postgresql:
    host: localhost
    port: 5432
    database: minecraft
    user: postgres
    password: password
    ssl: false

# Player Data Synchronization Settings
sync:
  coordinates: true
  position: true
  xp: true
  gamemode: true
  inventory: true
  enderchest: true
  armor: true
  offhand: true
  health: true
  hunger: true
  effects: true
  achievements: true
  statistics: true
  attributes: true
  permissions: false
  economy: true

# Automatic Save Configuration
autosave:
  enabled: true
  interval: 1
  on_world_change: true
  on_death: true
  on_server_switch: true
  on_kick: true
  async: true

# Data Management
data_management:
  cleanup:
    enabled: false
    days_inactive: 90
  backup:
    enabled: true
    interval: 1440
    keep_backups: 7
  validation:
    enabled: true
    strict_mode: false

# Performance Settings
performance:
  batch_size: 50
  cache_size: 100
  cache_ttl: 300000
  cache_compression: true
  connection_pooling: true
  async_loading: true
  disable_achievement_sync_on_large_amounts: true
  achievement_batch_size: 50
  achievement_timeout_ms: 5000
  max_achievements_per_player: 2000

# Security Settings
security:
  encrypt_data: false
  hash_uuids: false
  audit_log: true

# Integrations
integrations:
  bungeecord: false
  luckperms: false
  vault: true
  placeholderapi: false

# Messages & Logging
messages:
  enabled: true
  language: de
  prefix: "&8[&bPDS&8]"
  colors: true

logging:
  level: INFO
  log_database: false
  log_performance: false
  debug_mode: false

# Update Checker
update_checker:
  enabled: true
  notify_ops: true
  auto_download: false
  timeout: 10000

# Metrics
metrics:
  bstats: true
  custom_metrics: true
`;

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans transition-colors duration-300">
      <Header links={navLinks} />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        {/* Hero */}
        <section className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <Cpu className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl font-extrabold">PlayerDataSync</h1>
          </div>

          <p className="text-lg text-[var(--foreground)]/90 mb-4">
            Seamless Cross-Server Player Data Synchronization — synchronisiere Spielerdaten zuverlässig und performant über mehrere Server hinweg.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://pds.devvoxel.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Download (https://pds.devvoxel.de/)
            </a>

            <Link
              href="/de/plugins"
              className="inline-block px-5 py-3 bg-[var(--foreground)]/10 dark:bg-[var(--foreground)]/20 rounded hover:bg-[var(--foreground)]/20 transition-colors"
            >
              Zur Plugin-Übersicht
            </Link>
          </div>
        </section>

        {/* Kurzinfo / Merkmale */}
        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <h2 className="text-2xl font-semibold mb-3">Features</h2>
            <ul className="list-inside list-disc space-y-2 text-[var(--foreground)]/90">
              <li><strong>Complete Player Data Sync:</strong> Inventar & Ender Chest, XP, Health & Hunger, Gamemode, Position (World, Koordinaten & Blickrichtung), aktive Effekte.</li>
              <li><strong>Real-Time Synchronization:</strong> Sofortige Übertragung zwischen Servern, kein Datenverlust beim Wechsel, automatische Speicherung beim Verlassen.</li>
              <li><strong>Zuverlässig & Sicher:</strong> MySQL-Unterstützung, sichere Serialisierung, Error-Handling & Logging.</li>
              <li><strong>Einfache Einrichtung:</strong> Klare Konfiguration, mehrsprachig, aussagekräftige Fehlermeldungen.</li>
              <li><strong>Performance Monitoring:</strong> bStats-Integration, performance-optimiert, geringer Einfluss auf den Server.</li>
              <li><strong>Unterstützte Versionen:</strong> 1.20.4, 1.21.x (1.21 - 1.21.10)</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <h2 className="text-2xl font-semibold mb-3">Key Benefits</h2>
            <div className="space-y-3 text-[var(--foreground)]/90">
              <p><strong>Real-Time Synchronization:</strong> Sofortige Datensynchronisation, automatische Speicherung und minimaler Lag.</p>
              <p><strong>Reliable & Secure:</strong> Unterstützung für MySQL, optionale Verschlüsselung und Audit-Logs.</p>
              <p><strong>Easy Setup:</strong> Einfache, gut dokumentierte Konfiguration und Flexibilität für verschiedene Datenbanken (MySQL, SQLite, PostgreSQL).</p>
              <p><strong>Performance:</strong> Batch-Processing, Caching, asynchrones Laden und feingranulare Performance-Einstellungen.</p>
            </div>
          </div>
        </section>

        {/* Konfiguration */}
        <section className="mb-10">
          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
              <h2 className="text-2xl font-semibold">Konfiguration (Beispiel)</h2>
            </div>

            <p className="text-[var(--foreground)]/90 mb-4">
              Unten findest du eine Beispiel-Konfigurationsdatei. Passe Host, Datenbank-Zugang und weitere Optionen an deine Umgebung an.
            </p>

            <pre className="rounded-lg overflow-auto p-4 text-sm bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
              <code>{configExample}</code>
            </pre>
          </div>
        </section>

        {/* Commands & Support */}
        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <h3 className="text-xl font-semibold mb-2">Commands & Permissions</h3>
            <p className="text-[var(--foreground)]/90">
              Das Plugin arbeitet größtenteils automatisch. Standardmäßig sind keine speziellen Commands erforderlich und es werden keine besonderen Permissions benötigt.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-6 h-6 text-red-600 dark:text-red-400" />
              <h3 className="text-xl font-semibold">Support</h3>
            </div>
            <p className="text-[var(--foreground)]/90 mb-3">
              Brauchst du Hilfe, hast einen Bug oder möchtest eine Funktion vorschlagen?
            </p>
            <ul className="list-disc list-inside text-[var(--foreground)]/90">
              <li>Kommentar auf der Plugin-Seite hinterlassen</li>
              <li>Issue auf GitHub öffnen</li>
              <li>Kontakt über Discord</li>
            </ul>
            <div className="mt-4">
              <Link href="https://pds.devvoxel.de/" className="inline-block px-4 py-2 bg-[var(--foreground)]/10 dark:bg-[var(--foreground)]/20 rounded hover:bg-[var(--foreground)]/20 transition-colors">
                Support / Download
              </Link>
            </div>
          </div>
        </section>

        {/* Updates & Requirements */}
        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-xl font-semibold">Updates & Zukunftspläne</h3>
            </div>
            <ul className="list-disc list-inside text-[var(--foreground)]/90">
              <li>Regelmäßige Updates & Wartung</li>
              <li>Performance-Optimierungen</li>
              <li>Neue Features basierend auf Community-Feedback</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-[var(--foreground)]/6 dark:bg-[var(--foreground)]/12">
            <div className="flex items-center gap-3 mb-2">
              <GitMerge className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <h3 className="text-xl font-semibold">Anforderungen</h3>
            </div>
            <ul className="list-disc list-inside text-[var(--foreground)]/90">
              <li>Java 17 oder höher</li>
              <li>MySQL (oder alternative DB: SQLite / PostgreSQL)</li>
              <li>Spigot / Paper Server</li>
            </ul>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-3">Download</h3>
          <p className="text-[var(--foreground)]/90 mb-4">Lade PlayerDataSync herunter und halte die Spielerdaten deiner Server synchron.</p>
          <a
            href="https://pds.devvoxel.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Jetzt herunterladen (pds.devvoxel.de)
          </a>
        </section>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} />
    </div>
  );
}
