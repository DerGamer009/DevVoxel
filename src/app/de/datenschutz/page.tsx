'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
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

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Header links={navLinks} currentLang="de" />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

        <p className="text-[var(--foreground)]/90 mb-6">
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Erhebung und Verwendung personenbezogener Daten auf unserer Website.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Verantwortlicher</h2>
          <p className="text-[var(--foreground)]/90">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
            DevVoxel<br />
            E-Mail: <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Erhobene Daten und Zwecke</h2>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>IP-Adresse, Datum & Uhrzeit des Besuchs – für den Betrieb und die Sicherheit der Website</li>
            <li>Registrierungsdaten (Benutzername, E-Mail) – zur Nutzung von Services, Foren und Downloads</li>
            <li>Kontaktanfragen – zur Bearbeitung Ihrer Anfragen</li>
            <li>Cookies und Tracking-Daten – zur Analyse, Optimierung und Personalisierung der Website</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Cookies & Tracking</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Wir setzen Cookies ein, um die Nutzung unserer Website zu verbessern. Dazu gehören funktionale Cookies, Analyse-Cookies (z. B. Google Analytics anonymisiert) und optionale Tracking-Cookies. Sie können Cookies in Ihrem Browser deaktivieren, dies kann jedoch die Nutzung einschränken.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Weitergabe an Dritte</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Eine Weitergabe personenbezogener Daten erfolgt nur, wenn dies gesetzlich erlaubt oder zur Bereitstellung unserer Dienste notwendig ist. Dazu gehören:
          </p>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>Hosting-Provider (Serverbetrieb, Backups)</li>
            <li>Zahlungsdienstleister bei Premium-Inhalten</li>
            <li>Analyse- und Statistikdienste (anonymisierte Daten)</li>
            <li>Support- und Kommunikationsanbieter (z. B. Discord, E-Mail)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Social Media & Drittanbieter</h2>
          <p className="text-[var(--foreground)]/90">
            Unsere Website kann Links oder Inhalte von Social-Media-Plattformen enthalten. Beim Besuch dieser Inhalte können personenbezogene Daten an die Plattformen übertragen werden. Wir haben keinen Einfluss auf deren Datenerhebung und empfehlen, die Datenschutzhinweise der jeweiligen Anbieter zu lesen.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Sicherheit der Daten</h2>
          <p className="text-[var(--foreground)]/90">
            Wir schützen Ihre Daten durch technische und organisatorische Maßnahmen vor unbefugtem Zugriff, Verlust oder Missbrauch.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Speicherdauer und Löschung</h2>
          <p className="text-[var(--foreground)]/90">
            Personenbezogene Daten werden nur so lange gespeichert, wie dies für die angegebenen Zwecke erforderlich ist oder gesetzlich vorgeschrieben ist. Danach werden sie gelöscht oder anonymisiert.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Rechte der Nutzer</h2>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>Auskunft über die gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung oder Einschränkung der Verarbeitung</li>
            <li>Widerspruch gegen Verarbeitung</li>
            <li>Beschwerderecht bei der Aufsichtsbehörde</li>
          </ul>
          <p className="text-[var(--foreground)]/90 mt-2">
            Für Anfragen kontaktieren Sie uns: <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Änderungen der Datenschutzerklärung</h2>
          <p className="text-[var(--foreground)]/90">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen. Änderungen werden auf dieser Seite veröffentlicht. Bitte prüfen Sie regelmäßig die aktuelle Version.
          </p>
        </section>

        <section className="text-sm text-gray-500 dark:text-gray-400">
          <p>Stand: {new Date().getFullYear()}</p>
        </section>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} currentLang="de" />
    </div>
  );
}
