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

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Header links={navLinks} currentLang="fr" />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>

        <p className="text-[var(--foreground)]/90 mb-6">
          Nous prenons très au sérieux la protection de vos données personnelles. Cette politique de confidentialité vous informe sur le type, la portée et l'objectif de la collecte et de l'utilisation des données personnelles sur notre site Web.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Responsable du traitement</h2>
          <p className="text-[var(--foreground)]/90">
            Le responsable du traitement des données sur ce site Web est :<br />
            DevVoxel<br />
            Email : <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Données collectées et finalités</h2>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>Adresse IP, date et heure de visite – pour le fonctionnement et la sécurité du site Web</li>
            <li>Données d'inscription (nom d'utilisateur, email) – pour utiliser les services, forums et téléchargements</li>
            <li>Demandes de contact – pour traiter vos demandes</li>
            <li>Cookies et données de suivi – pour l'analyse, l'optimisation et la personnalisation du site Web</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Cookies et suivi</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Nous utilisons des cookies pour améliorer l'utilisation de notre site Web. Cela inclut les cookies fonctionnels, les cookies d'analyse (par exemple, Google Analytics anonymisé) et les cookies de suivi optionnels. Vous pouvez désactiver les cookies dans votre navigateur, mais cela peut limiter les fonctionnalités.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Communication à des tiers</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Les données personnelles ne sont communiquées que si cela est légalement autorisé ou nécessaire pour fournir nos services. Cela inclut :
          </p>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>Fournisseurs d'hébergement (exploitation du serveur, sauvegardes)</li>
            <li>Fournisseurs de services de paiement pour le contenu premium</li>
            <li>Services d'analyse et de statistiques (données anonymisées)</li>
            <li>Fournisseurs de support et de communication (par exemple, Discord, email)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Médias sociaux et services tiers</h2>
          <p className="text-[var(--foreground)]/90">
            Notre site Web peut contenir des liens ou du contenu provenant de plateformes de médias sociaux. Lors de la visite de ces contenus, des données personnelles peuvent être transmises aux plateformes. Nous n'avons aucune influence sur leur collecte de données et recommandons de lire les avis de confidentialité des fournisseurs respectifs.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Sécurité des données</h2>
          <p className="text-[var(--foreground)]/90">
            Nous protégeons vos données par des mesures techniques et organisationnelles contre l'accès non autorisé, la perte ou l'utilisation abusive.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Durée de conservation et suppression</h2>
          <p className="text-[var(--foreground)]/90">
            Les données personnelles ne sont conservées que le temps nécessaire aux finalités indiquées ou requis par la loi. Après cela, elles seront supprimées ou anonymisées.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Droits des utilisateurs</h2>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>Information sur les données stockées</li>
            <li>Correction des données incorrectes</li>
            <li>Suppression ou restriction du traitement</li>
            <li>Opposition au traitement</li>
            <li>Droit de déposer une plainte auprès de l'autorité de contrôle</li>
          </ul>
          <p className="text-[var(--foreground)]/90 mt-2">
            Pour les demandes, contactez-nous : <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Modifications de la politique de confidentialité</h2>
          <p className="text-[var(--foreground)]/90">
            Nous nous réservons le droit d'ajuster cette politique de confidentialité. Les modifications seront publiées sur cette page. Veuillez vérifier régulièrement la version actuelle.
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

