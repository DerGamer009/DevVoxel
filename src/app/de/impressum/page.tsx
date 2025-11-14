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

export default function ImpressumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Header links={navLinks} currentLang="de" />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p className="text-[var(--foreground)]/90">
            Betreiber der Website und verantwortlich für den Inhalt:<br />
            DevVoxel<br />
            Karl-Liebknecht-Ring 2<br />
            06679 Hohenmölsen<br />
            Deutschland
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p className="text-[var(--foreground)]/90">
            E-Mail: <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link><br />
            Telefon: +49 123 4567890 (optional)
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p className="text-[var(--foreground)]/90">
            DevVoxel<br />
            Karl-Liebknecht-Ring 2<br />
            06679 Hohenmölsen<br />
            Deutschland
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Haftung für Inhalte</h2>
          <p className="text-[var(--foreground)]/90">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. 
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Haftung für Links</h2>
          <p className="text-[var(--foreground)]/90">
            Unsere Seiten können Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. 
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Betreiber verantwortlich. 
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
            Eine permanente Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Online-Streitbeilegung</h2>
          <p className="text-[var(--foreground)]/90">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <Link href="https://ec.europa.eu/consumers/odr/" className="underline" target="_blank">https://ec.europa.eu/consumers/odr/</Link>.<br />
            Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
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
