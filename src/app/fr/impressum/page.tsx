'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
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

export default function ImpressumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Header links={navLinks} currentLang="fr" />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Informations selon § 5 TMG</h2>
          <p className="text-[var(--foreground)]/90">
            Opérateur du site et responsable du contenu :<br />
            DevVoxel<br />
            Karl-Liebknecht-Ring 2<br />
            06679 Hohenmölsen<br />
            Allemagne
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-[var(--foreground)]/90">
            Email : <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link><br />
            Téléphone : +49 123 4567890 (optionnel)
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Responsable du contenu selon § 55 Abs. 2 RStV</h2>
          <p className="text-[var(--foreground)]/90">
            DevVoxel<br />
            Karl-Liebknecht-Ring 2<br />
            06679 Hohenmölsen<br />
            Allemagne
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Responsabilité du contenu</h2>
          <p className="text-[var(--foreground)]/90">
            Le contenu de nos pages a été créé avec le plus grand soin. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité et l'actualité du contenu. 
            En tant que prestataire de services, nous sommes responsables de notre propre contenu sur ces pages conformément aux lois générales en vertu de l'article 7, paragraphe 1 TMG.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Responsabilité des liens</h2>
          <p className="text-[var(--foreground)]/90">
            Nos pages peuvent contenir des liens vers des sites Web externes de tiers, sur le contenu desquels nous n'avons aucune influence. 
            Le fournisseur ou l'opérateur respectif des pages est toujours responsable du contenu des pages liées. 
            Les pages liées ont été vérifiées pour d'éventuelles violations légales au moment du lien. 
            Une surveillance permanente du contenu des pages liées n'est pas raisonnable sans preuve concrète d'une violation de la loi.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Règlement des litiges en ligne</h2>
          <p className="text-[var(--foreground)]/90">
            La Commission européenne fournit une plateforme pour le règlement des litiges en ligne (ODR) : 
            <Link href="https://ec.europa.eu/consumers/odr/" className="underline" target="_blank">https://ec.europa.eu/consumers/odr/</Link>.<br />
            Nous ne sommes ni obligés ni disposés à participer à une procédure de règlement des litiges devant un conseil d'arbitrage des consommateurs.
          </p>
        </section>

        <section className="text-sm text-gray-500 dark:text-gray-400">
          <p>Dernière mise à jour : {new Date().getFullYear()}</p>
        </section>
      </main>

      <Footer links={navLinks} resourceLinks={resourceLinks} legalLinks={legalLinks} currentLang="fr" />
    </div>
  );
}

