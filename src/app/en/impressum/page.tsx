'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
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
  { label: 'Privacy', href: '/en/datenschutz' },
  { label: 'Terms', href: '/en/terms' },
];

export default function ImpressumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Header links={navLinks} currentLang="en" />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Imprint</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Information according to § 5 TMG</h2>
          <p className="text-[var(--foreground)]/90">
            Website operator and responsible for content:<br />
            DevVoxel<br />
            Karl-Liebknecht-Ring 2<br />
            06679 Hohenmölsen<br />
            Germany
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-[var(--foreground)]/90">
            Email: <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link><br />
            Phone: +49 123 4567890 (optional)
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Responsible for content according to § 55 Abs. 2 RStV</h2>
          <p className="text-[var(--foreground)]/90">
            DevVoxel<br />
            Karl-Liebknecht-Ring 2<br />
            06679 Hohenmölsen<br />
            Germany
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Liability for Content</h2>
          <p className="text-[var(--foreground)]/90">
            The contents of our pages have been created with the greatest care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. 
            As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 para. 1 TMG.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Liability for Links</h2>
          <p className="text-[var(--foreground)]/90">
            Our pages may contain links to external websites of third parties, on whose contents we have no influence. 
            The respective provider or operator of the pages is always responsible for the contents of the linked pages. 
            The linked pages were checked for possible legal violations at the time of linking. 
            Permanent monitoring of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Online Dispute Resolution</h2>
          <p className="text-[var(--foreground)]/90">
            The European Commission provides a platform for online dispute resolution (ODR): 
            <Link href="https://ec.europa.eu/consumers/odr/" className="underline" target="_blank">https://ec.europa.eu/consumers/odr/</Link>.<br />
            We are neither obligated nor willing to participate in a dispute resolution procedure before a consumer arbitration board.
          </p>
        </section>

        <section className="text-sm text-gray-500 dark:text-gray-400">
          <p>Last updated: {new Date().getFullYear()}</p>
        </section>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} currentLang="en" />
    </div>
  );
}

