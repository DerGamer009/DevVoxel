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

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Header links={navLinks} currentLang="de" />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Nutzungsbedingungen (AGB)</h1>

        <p className="text-[var(--foreground)]/90 mb-6">
          Diese Nutzungsbedingungen regeln die Nutzung der Website und Dienste von DevVoxel. Bitte lesen Sie die Bedingungen
          sorgfältig durch. Durch die Nutzung der Website stimmen Sie diesen Bedingungen zu.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Begriffsbestimmungen</h2>
          <p className="text-[var(--foreground)]/90">
            In diesen Bedingungen bedeuten „Website” oder „Service“ die Angebote von DevVoxel, „Nutzer“ sind Besucher oder registrierte
            Benutzer der Plattform, „Inhalte“ sind sämtliche Texte, Dateien, Plugins, Bilder und sonstige Medien, die auf der Plattform
            bereitgestellt werden.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Geltungsbereich</h2>
          <p className="text-[var(--foreground)]/90">
            Diese Bedingungen gelten für alle Nutzungen der Website sowie für alle über die Website angebotenen Services, Downloads und
            Produkte. Abweichende Vereinbarungen müssen schriftlich getroffen werden.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Nutzung der Website</h2>
          <ul className="list-disc list-inside text-[var(--foreground)]/90 space-y-2">
            <li>Sie verpflichten sich, die Website rechtmäßig zu nutzen und keine Inhalte einzustellen oder Handlungen vorzunehmen, die Rechte Dritter verletzen oder die Sicherheit der Plattform gefährden.</li>
            <li>Unzulässig sind u. a. das Hochladen von Malware, das Verbreiten personenbezogener Daten Dritter ohne Einwilligung, Spam und Hacking-Versuche.</li>
            <li>Bei Verstößen behalten wir uns Maßnahmen vor (z. B. Sperrung, Löschung, rechtliche Schritte).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Registrierung & Accounts</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Für bestimmte Funktionen kann eine Registrierung erforderlich sein. Sie sind für die Geheimhaltung Ihrer Zugangsdaten verantwortlich
            und für alle Aktivitäten, die unter Ihrem Account erfolgen.
          </p>
          <p className="text-[var(--foreground)]/90">
            Bei Verdacht auf Missbrauch sind wir berechtigt, den Zugang vorübergehend zu sperren. Bitte informieren Sie uns umgehend bei
            unbefugtem Zugriff.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Nutzerinhalte, Lizenzen & Urheberrecht</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Nutzer behalten grundsätzlich die Rechte an ihren Inhalten. Durch das Hochladen gewähren Sie DevVoxel jedoch eine nicht-exklusive,
            weltweite, gebührenfreie Lizenz zur Nutzung, Vervielfältigung, Darstellung und Verbreitung der Inhalte im Rahmen des Betriebs der Plattform.
          </p>
          <p className="text-[var(--foreground)]/90">
            Sie versichern, dass Sie die erforderlichen Rechte an den hochgeladenen Inhalten besitzen und keine Rechte Dritter verletzen.
            Bei Urheberrechtsverletzungen werden wir auf Hinweis tätig und entfernen rechtswidrige Inhalte.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Bezahlinhalte, Zahlungen & Rückerstattungen</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Kostenpflichtige Plugins, Premium-Lizenzen oder Services werden über die angegebenen Zahlungsanbieter abgerechnet. Preise werden
            vor dem Kauf klar angezeigt.
          </p>
          <p className="text-[var(--foreground)]/90 mb-2">
            Digitale Inhalte (z. B. Download von Premium-Plugins) sind nach erfolgter Lieferung in der Regel vom Widerruf ausgeschlossen.
            Rückerstattungen richten sich nach dem Einzelfall; kontaktieren Sie den Support, wenn es Probleme mit einem Kauf gibt.
          </p>
          <p className="text-[var(--foreground)]/90">
            Wir empfehlen, bei Käufen die Zahlungsbedingungen des jeweiligen Anbieters zu beachten.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Gewährleistung & Haftung</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Die Nutzung der Website erfolgt auf eigene Gefahr. Soweit gesetzlich zulässig, erfolgt die Bereitstellung ohne Gewähr hinsichtlich
            der Verfügbarkeit, Richtigkeit oder Eignung für einen bestimmten Zweck.
          </p>
          <p className="text-[var(--foreground)]/90">
            Für Schäden haftet DevVoxel nur bei Vorsatz oder grober Fahrlässigkeit sowie bei Verletzung wesentlicher Vertragspflichten;
            in letzteren Fällen ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Datenschutzhinweis</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer <Link href="/de/datenschutz" className="underline">Datenschutzerklärung</Link>.
            Durch die Nutzung stimmen Sie den dort beschriebenen Verfahren zu.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Drittanbieter & externe Dienste</h2>
          <p className="text-[var(--foreground)]/90">
            Wir nutzen ggf. Drittanbieter (z. B. Hosting, Payment-Provider, Analyse-Tools). Für diese Dienste gelten zusätzlich die jeweiligen
            Nutzungs- und Datenschutzbedingungen der Drittanbieter.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Altersbeschränkung</h2>
          <p className="text-[var(--foreground)]/90">
            Die Nutzung der Website setzt ein Mindestalter von 16 Jahren voraus. Minderjährige benötigen die Einwilligung ihrer Erziehungsberechtigten.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Beendigung / Sperrung</h2>
          <p className="text-[var(--foreground)]/90 mb-2">
            Wir können Nutzerkonten bei Verstößen oder begründetem Verdacht auf Missbrauch vorübergehend sperren oder endgültig löschen.
          </p>
          <p className="text-[var(--foreground)]/90">
            Nach Beendigung können Anspruch auf gespeicherte Inhalte und aufrecht bestehende Lizenzen eingeschränkt sein.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">12. Änderungen der Bedingungen</h2>
          <p className="text-[var(--foreground)]/90">
            Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Änderungen werden auf dieser Seite bekanntgegeben.
            Bei wesentlichen Änderungen werden wir, sofern möglich, zusätzlich informieren. Die fortgesetzte Nutzung der Dienste
            nach Bekanntgabe gilt als Zustimmung zu den geänderten Bedingungen.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">13. Salvatorische Klausel</h2>
          <p className="text-[var(--foreground)]/90">
            Sollten einzelne Bestimmungen dieser Bedingungen unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            Anstelle der unwirksamen Regelung tritt eine zulässige Regelung, die dem wirtschaftlichen Zweck der unwirksamen Regelung am nächsten kommt.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">14. Anwendbares Recht & Gerichtsstand</h2>
          <p className="text-[var(--foreground)]/90">
            Deutsches Recht findet auf diese Bedingungen Anwendung unter Ausschluss des UN-Kaufrechts, sofern nicht zwingende gesetzliche Vorschriften
            entgegenstehen. Soweit der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist,
            ist Gerichtsstand der Sitz des Anbieters.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">15. Kontakt</h2>
          <p className="text-[var(--foreground)]/90">
            Bei Fragen zu diesen Bedingungen kontaktieren Sie uns bitte:
          </p>
          <p className="text-[var(--foreground)]/90 mt-2">
            DevVoxel<br />
            E-Mail: <Link href="mailto:support@devvoxel.net" className="underline">support@devvoxel.net</Link>
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
