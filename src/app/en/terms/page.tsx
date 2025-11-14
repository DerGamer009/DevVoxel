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

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Header links={navLinks} currentLang="en" />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <p className="text-[var(--foreground)]/90 mb-6">
          These terms of service govern the use of the DevVoxel website and services. Please read the terms carefully. 
          By using the website, you agree to these terms.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Definitions</h2>
          <p className="text-[var(--foreground)]/90">
            In these terms, "Website" or "Service" means the offerings of DevVoxel, "User" means visitors or registered 
            users of the platform, "Content" means all texts, files, plugins, images, and other media provided on the platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Scope</h2>
          <p className="text-[var(--foreground)]/90">
            These terms apply to all uses of the website as well as all services, downloads, and products offered through the website. 
            Deviating agreements must be made in writing.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Use of the Website</h2>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>You agree to use the website lawfully and not to post content or take actions that violate third-party rights or endanger the security of the platform.</li>
            <li>Prohibited activities include uploading malware, distributing personal data of third parties without consent, spam, and hacking attempts.</li>
            <li>In case of violations, we reserve the right to take measures (e.g., blocking, deletion, legal action).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Registration & Accounts</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Registration may be required for certain functions. You are responsible for keeping your access credentials confidential 
            and for all activities that occur under your account.
          </p>
          <p className="text-[var(--foreground)]/90">
            In case of suspected abuse, we are entitled to temporarily block access. Please inform us immediately of unauthorized access.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. User Content, Licenses & Copyright</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Users generally retain the rights to their content. By uploading, you grant DevVoxel a non-exclusive, 
            worldwide, royalty-free license to use, reproduce, display, and distribute the content in the context of operating the platform.
          </p>
          <p className="text-[var(--foreground)]/90">
            You warrant that you have the necessary rights to the uploaded content and do not violate third-party rights. 
            In case of copyright violations, we will act upon notice and remove unlawful content.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Paid Content, Payments & Refunds</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Paid plugins, premium licenses, or services are billed through the specified payment providers. Prices are 
            clearly displayed before purchase.
          </p>
          <p className="text-[var(--foreground)]/90 mb-2">
            Digital content (e.g., download of premium plugins) is generally excluded from the right of withdrawal after delivery. 
            Refunds are handled on a case-by-case basis; contact support if there are problems with a purchase.
          </p>
          <p className="text-[var(--foreground)]/90">
            We recommend observing the payment terms of the respective provider when making purchases.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Warranty & Liability</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Use of the website is at your own risk. To the extent legally permitted, provision is made without warranty regarding 
            availability, accuracy, or suitability for a particular purpose.
          </p>
          <p className="text-[var(--foreground)]/90">
            DevVoxel is only liable for damages in case of intent or gross negligence as well as violation of essential contractual obligations; 
            in the latter cases, liability is limited to the contractually typical, foreseeable damage.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Privacy Notice</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Information on the processing of personal data can be found in our <Link href="/en/datenschutz" className="underline">Privacy Policy</Link>. 
            By using the website, you agree to the procedures described therein.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Third Parties & External Services</h2>
          <p className="text-[var(--foreground)]/90">
            We may use third parties (e.g., hosting, payment providers, analytics tools). These services are additionally subject to the respective 
            terms of use and privacy policies of the third parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Age Restriction</h2>
          <p className="text-[var(--foreground)]/90">
            Use of the website requires a minimum age of 16 years. Minors require the consent of their legal guardians.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Termination / Blocking</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            We may temporarily block or permanently delete user accounts in case of violations or justified suspicion of abuse.
          </p>
          <p className="text-[var(--foreground)]/90">
            After termination, claims to stored content and existing licenses may be restricted.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">12. Changes to the Terms</h2>
          <p className="text-[var(--foreground)]/90">
            We reserve the right to change these terms at any time. Changes will be announced on this page. 
            For significant changes, we will, if possible, provide additional notification. Continued use of the services 
            after announcement is considered acceptance of the changed terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">13. Severability Clause</h2>
          <p className="text-[var(--foreground)]/90">
            Should individual provisions of these terms be or become invalid, the validity of the remaining provisions remains unaffected. 
            In place of the invalid provision, a valid provision applies that comes closest to the economic purpose of the invalid provision.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">14. Applicable Law & Jurisdiction</h2>
          <p className="text-[var(--foreground)]/90">
            German law applies to these terms, excluding the UN Sales Law, unless mandatory legal provisions apply. 
            If the user is a merchant, legal entity under public law, or special fund under public law, 
            the place of jurisdiction is the provider's registered office.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">15. Contact</h2>
          <p className="text-[var(--foreground)]/90">
            For questions about these terms, please contact us:
          </p>
          <p className="text-[var(--foreground)]/90 mt-2">
            DevVoxel<br />
            Email: <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link>
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

