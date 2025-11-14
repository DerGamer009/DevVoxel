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

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Header links={navLinks} currentLang="fr" />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Conditions d'utilisation</h1>

        <p className="text-[var(--foreground)]/90 mb-6">
          Ces conditions d'utilisation régissent l'utilisation du site Web et des services DevVoxel. Veuillez lire attentivement les conditions. 
          En utilisant le site Web, vous acceptez ces conditions.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Définitions</h2>
          <p className="text-[var(--foreground)]/90">
            Dans ces conditions, "Site Web" ou "Service" désigne les offres de DevVoxel, "Utilisateur" désigne les visiteurs ou utilisateurs enregistrés 
            de la plateforme, "Contenu" désigne tous les textes, fichiers, plugins, images et autres médias fournis sur la plateforme.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Portée</h2>
          <p className="text-[var(--foreground)]/90">
            Ces conditions s'appliquent à toutes les utilisations du site Web ainsi qu'à tous les services, téléchargements et produits offerts via le site Web. 
            Les accords déviants doivent être conclus par écrit.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Utilisation du site Web</h2>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>Vous acceptez d'utiliser le site Web de manière légale et de ne pas publier de contenu ou d'effectuer des actions qui violent les droits de tiers ou mettent en danger la sécurité de la plateforme.</li>
            <li>Les activités interdites incluent le téléchargement de logiciels malveillants, la distribution de données personnelles de tiers sans consentement, le spam et les tentatives de piratage.</li>
            <li>En cas de violations, nous nous réservons le droit de prendre des mesures (par exemple, blocage, suppression, action en justice).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Inscription et comptes</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            L'inscription peut être requise pour certaines fonctions. Vous êtes responsable de la confidentialité de vos identifiants d'accès 
            et de toutes les activités qui se produisent sous votre compte.
          </p>
          <p className="text-[var(--foreground)]/90">
            En cas de suspicion d'abus, nous sommes autorisés à bloquer temporairement l'accès. Veuillez nous informer immédiatement en cas d'accès non autorisé.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Contenu utilisateur, licences et droits d'auteur</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Les utilisateurs conservent généralement les droits sur leur contenu. En téléchargeant, vous accordez à DevVoxel une licence non exclusive, 
            mondiale et gratuite pour utiliser, reproduire, afficher et distribuer le contenu dans le cadre de l'exploitation de la plateforme.
          </p>
          <p className="text-[var(--foreground)]/90">
            Vous garantissez que vous avez les droits nécessaires sur le contenu téléchargé et ne violez pas les droits de tiers. 
            En cas de violation du droit d'auteur, nous agirons sur notification et supprimerons le contenu illégal.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Contenu payant, paiements et remboursements</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Les plugins payants, licences premium ou services sont facturés via les fournisseurs de paiement spécifiés. Les prix sont 
            clairement affichés avant l'achat.
          </p>
          <p className="text-[var(--foreground)]/90 mb-2">
            Le contenu numérique (par exemple, le téléchargement de plugins premium) est généralement exclu du droit de rétractation après la livraison. 
            Les remboursements sont traités au cas par cas ; contactez le support en cas de problème avec un achat.
          </p>
          <p className="text-[var(--foreground)]/90">
            Nous recommandons d'observer les conditions de paiement du fournisseur respectif lors des achats.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Garantie et responsabilité</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            L'utilisation du site Web se fait à vos propres risques. Dans la mesure légalement permise, la fourniture est faite sans garantie concernant 
            la disponibilité, l'exactitude ou l'adéquation à un usage particulier.
          </p>
          <p className="text-[var(--foreground)]/90">
            DevVoxel n'est responsable des dommages qu'en cas d'intention ou de négligence grave ainsi que de violation d'obligations contractuelles essentielles ; 
            dans ces derniers cas, la responsabilité est limitée aux dommages contractuellement typiques et prévisibles.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Avis de confidentialité</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Des informations sur le traitement des données personnelles peuvent être trouvées dans notre <Link href="/fr/datenschutz" className="underline">Politique de confidentialité</Link>. 
            En utilisant le site Web, vous acceptez les procédures décrites ci-inclus.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Tiers et services externes</h2>
          <p className="text-[var(--foreground)]/90">
            Nous pouvons utiliser des tiers (par exemple, hébergement, fournisseurs de paiement, outils d'analyse). Ces services sont également soumis aux 
            conditions d'utilisation et politiques de confidentialité respectives des tiers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Restriction d'âge</h2>
          <p className="text-[var(--foreground)]/90">
            L'utilisation du site Web nécessite un âge minimum de 16 ans. Les mineurs nécessitent le consentement de leurs tuteurs légaux.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Résiliation / Blocage</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Nous pouvons bloquer temporairement ou supprimer définitivement les comptes utilisateurs en cas de violations ou de suspicion justifiée d'abus.
          </p>
          <p className="text-[var(--foreground)]/90">
            Après résiliation, les réclamations concernant le contenu stocké et les licences existantes peuvent être restreintes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">12. Modifications des conditions</h2>
          <p className="text-[var(--foreground)]/90">
            Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront annoncées sur cette page. 
            Pour les modifications importantes, nous fournirons, si possible, une notification supplémentaire. L'utilisation continue des services 
            après l'annonce est considérée comme une acceptation des conditions modifiées.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">13. Clause de sauvegarde</h2>
          <p className="text-[var(--foreground)]/90">
            Si des dispositions individuelles de ces conditions sont ou deviennent invalides, la validité des dispositions restantes reste inchangée. 
            À la place de la disposition invalide, une disposition valide s'applique qui se rapproche le plus de l'objectif économique de la disposition invalide.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">14. Droit applicable et juridiction</h2>
          <p className="text-[var(--foreground)]/90">
            Le droit allemand s'applique à ces conditions, à l'exclusion de la loi de vente des Nations Unies, sauf si des dispositions légales impératives s'appliquent. 
            Si l'utilisateur est un commerçant, une personne morale de droit public ou un fonds spécial de droit public, 
            le lieu de juridiction est le siège social du fournisseur.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">15. Contact</h2>
          <p className="text-[var(--foreground)]/90">
            Pour des questions sur ces conditions, veuillez nous contacter :
          </p>
          <p className="text-[var(--foreground)]/90 mt-2">
            DevVoxel<br />
            Email : <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link>
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

