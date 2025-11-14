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

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Header links={navLinks} currentLang="en" />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-[var(--foreground)]/90 mb-6">
          We take the protection of your personal data very seriously. This privacy policy informs you about the type, scope, and purpose of the collection and use of personal data on our website.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Data Controller</h2>
          <p className="text-[var(--foreground)]/90">
            The data controller for data processing on this website is:<br />
            DevVoxel<br />
            Email: <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Data Collected and Purposes</h2>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>IP address, date & time of visit – for the operation and security of the website</li>
            <li>Registration data (username, email) – for using services, forums, and downloads</li>
            <li>Contact inquiries – for processing your requests</li>
            <li>Cookies and tracking data – for analysis, optimization, and personalization of the website</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Cookies & Tracking</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            We use cookies to improve the use of our website. This includes functional cookies, analytics cookies (e.g., anonymized Google Analytics), and optional tracking cookies. You can disable cookies in your browser, but this may limit functionality.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Disclosure to Third Parties</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Personal data is only disclosed if legally permitted or necessary to provide our services. This includes:
          </p>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>Hosting providers (server operation, backups)</li>
            <li>Payment service providers for premium content</li>
            <li>Analytics and statistics services (anonymized data)</li>
            <li>Support and communication providers (e.g., Discord, email)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Social Media & Third-Party Services</h2>
          <p className="text-[var(--foreground)]/90">
            Our website may contain links or content from social media platforms. When visiting these contents, personal data may be transmitted to the platforms. We have no influence on their data collection and recommend reading the privacy notices of the respective providers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
          <p className="text-[var(--foreground)]/90">
            We protect your data through technical and organizational measures against unauthorized access, loss, or misuse.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Storage Duration and Deletion</h2>
          <p className="text-[var(--foreground)]/90">
            Personal data is only stored for as long as necessary for the stated purposes or as required by law. After that, it will be deleted or anonymized.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. User Rights</h2>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>Information about stored data</li>
            <li>Correction of incorrect data</li>
            <li>Deletion or restriction of processing</li>
            <li>Objection to processing</li>
            <li>Right to lodge a complaint with the supervisory authority</li>
          </ul>
          <p className="text-[var(--foreground)]/90 mt-2">
            For inquiries, contact us: <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Changes to the Privacy Policy</h2>
          <p className="text-[var(--foreground)]/90">
            We reserve the right to adjust this privacy policy. Changes will be published on this page. Please check the current version regularly.
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

