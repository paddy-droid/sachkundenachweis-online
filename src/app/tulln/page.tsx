import { Metadata } from 'next';
import { BundeslandPage } from '../../components/BundeslandPage';
import { CitySeoContent } from '../../components/CitySeoContent';

export const metadata: Metadata = {
  title: 'Sachkundenachweis Tulln online | Jetzt starten',
  description: 'Absolviere den offiziellen Sachkundenachweis für Tulln online. Erhalte dein Zertifikat schnell und gesetzeskonform für die Anmeldung deines Hundes.',
  keywords: "Sachkundenachweis Tulln, Hundekurs online, Hundeführerschein Tulln, Gesetzlicher Nachweis Hundehaltung Tulln",
};

const tullnData = {
  pageTitle: "Sachkundenachweis Tulln",
  heroTitle: "Sachkundenachweis Tulln – online",
  heroSubtitle: "Gesetzeskonform, anerkannt in Tulln und stressfrei von zu Hause aus.",
  heroImage: "/hero/hero-image.webp",
  gesetzlicheGrundlageTitle: "Warum der Sachkundenachweis in Tulln so wichtig ist",
  gesetzlicheGrundlageText: (
    <>
      <h3 className="text-2xl font-bold text-[--highlight]">Der Hundeführerschein in Tulln: Ein Muss für neue Hundehalter</h3>
      <p className="text-lg">
        Für alle, die in der Gartenstadt Tulln einen neuen Hund in ihrer Familie begrüßen, ist der <strong>NÖ Hundeführerschein</strong> seit dem 1. Juni 2023 eine gesetzliche Anforderung. Der Abschluss dieses Kurses ist entscheidend für die reibungslose Anmeldung Ihres Hundes bei der Stadtgemeinde Tulln. Die Missachtung kann zu behördlichen Strafen führen.
      </p>
      <p className="text-lg">
        Der Kurs ist jedoch weit mehr als eine reine Vorschrift. Er bereitet Sie optimal auf ein sicheres und freudvolles Zusammenleben mit Ihrem neuen Begleiter in Tulln vor.
      </p>
    </>
  ),
  gesetzlicheGrundlageImage: "/hero/content-image-2.webp",
  kursinhalteTitle: "Was erwartet dich im Hunde-Sachkundekurs für Tulln?",
  kursinhalteSubtitle: "Ein tiefer Einblick in die zwei Säulen der Hundeexpertise.",
  vetTeilTitle: "Veterinärmedizinischer Teil (1 Stunde)",
  vetTeilText: "Eine Tierärztin vermittelt dir essenzielles Wissen rund um die Gesundheit deines Vierbeiners. Du lernst nicht nur die gesetzlichen Mindestanforderungen der Haltung kennen, sondern auch, wie du Anzeichen für Krankheiten frühzeitig erkennst. Ein Beispiel: Wie unterscheide ich einen harmlosen Huster von einem ernsten Atemwegsinfekt? Themen wie Ernährung, Impfschemata und routinemäßige Gesundheitschecks werden praxisnah erklärt.",
  kynoTeilTitle: "Kynologischer Teil (2 Stunden)",
  kynoTeilText: "Hier tauchst du tief in die Psyche und das Verhalten deines Hundes ein. Wir entschlüsseln die Körpersprache: Was bedeutet es wirklich, wenn dein Hund gähnt oder sich über die Schnauze leckt? Wir behandeln typische Herausforderungen und zeigen Lösungswege für unerwünschtes Verhalten auf. Ein klassisches Beispiel ist das Ziehen an der Leine – wir erklären die Ursachen und geben dir Werkzeuge für entspannte Spaziergänge an die Hand.",
  gueltigkeitTitle: "Gültigkeit in ganz Tulln und Umgebung",
  gueltigkeitText: (
    <>
      <p>Mit unserem Zertifikat weisen Sie Ihre Sachkunde in Tulln und im gesamten Bundesland Niederösterreich nach. Die Hundehaltungsgesetze sind in Österreich Ländersache. Unser Online-Kurs ist präzise auf die Vorgaben des <strong>NÖ Hundehaltungsgesetzes</strong> abgestimmt, sodass Ihr Nachweis in Tulln garantiert anerkannt wird.</p><br /><p>Falls Sie den Sachkundenachweis für ein anderes Bundesland benötigen, bieten wir auch den Kurs für <a href='/salzburg' style={{ textDecoration: 'underline' }}>Salzburg</a> an. Eine Übersicht aller Kurse in Niederösterreich finden Sie auf unserer <a href='/niederoesterreich' style={{ textDecoration: 'underline' }}>NÖ Übersichtsseite</a>.</p>
    </>
  ),
  ctaButtonText: "Jetzt für den Kurs in Tulln anmelden",
  veranstalterSection: (
    <section className="py-20 bg-gray-50 rounded-2xl">
      <div className="text-center">
        <img src="https://www.willenskraft.co.at/wp-content/uploads/2018/06/Final.-Logo-Hundeschule-Willenskraft.-Gute-Hundeschule-Graz-Gleisdorf.png" alt="Logo Hundeschule Willenskraft" className="w-48 mx-auto mb-8" />
        <h2 className="text-4xl font-bold mb-4">Veranstalter: Hundeschule Willenskraft</h2>
        <p className="text-xl text-gray-600 mb-12">Dein ganzheitlicher Wegbegleiter für ein harmonisches Leben mit Hund.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="p-10">
          <h3 className="text-3xl font-bold mb-6">Unsere Philosophie</h3>
          <p className="mb-4 text-lg">Wir stehen für tierschutzkonformes & modernes Hundetraining. Es geht darum, deinen Hund besser verstehen zu lernen und die richtigen Signale zu senden. Wenn du lernst die Signale deines Hundes zu lesen, ermöglicht das einen Kommunikationsfluss der für beide eindeutig lesbar ist.</p>
          <p>Missverständnisse werden aufgehoben und eine dauerhafte, auf gegenseitigem Verständnis beruhende Beziehung langfristig gefestigt.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow text-center transform hover:scale-105 transition-transform">✅ Mobiles Training</div>
          <div className="bg-white p-6 rounded-lg shadow text-center transform hover:scale-105 transition-transform">🐾 Online-Hundeschule</div>
          <div className="bg-white p-6 rounded-lg shadow text-center transform hover:scale-105 transition-transform">🎓 Zert. Ausbildung</div>
          <div className="bg-white p-6 rounded-lg shadow text-center transform hover:scale-105 transition-transform">❤️ Tierschutzkonform</div>
        </div>
      </div>
    </section>
  ),
  podcastSection: (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12">Hör dir unseren Podcast an</h2>
      <div className="flex justify-center">
        <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/episode/3SI0Yyc79sNiUeWTQOzluz?utm_source=generator" width="80%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </section>
  ),
  ablaufSection: (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="p-10 order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-6">Effizienter Ablauf, maximale Flexibilität</h2>
          <p className="mb-4 text-lg">Vergiss komplizierte Terminplanung! Unser gesamter Sachkundenachweis findet an einem einzigen Termin statt und ist in zwei logische Blöcke aufgeteilt:</p>
          <ul className="list-none space-y-4">
            <li><strong className="text-[--highlight]">1 Stunde: Veterinärmedizinischer Teil</strong><br />Eine erfahrene Tierärztin erklärt dir alles zu Gesundheit, gesetzlichen Mindestanforderungen, Impfungen und Ernährung.</li>
            <li><strong className="text-[--highlight]">2 Stunden: Kynologischer Teil</strong><br />Tauche tief in die Welt des Hundeverhaltens, der Körpersprache und der modernen Hundeerziehung ein.</li>
          </ul>
        </div>
        <div className="rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 order-1 md:order-2">
          <img
            src="/hero/content-image-1.webp"
            alt="Zwei Hunde spielen miteinander auf einer Wiese"
            width={600}
            height={400}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  ),
  termine: [
    { datum: "MI 19.11.25", zeit: "17:30-20:30", preis: "89,00 €" },
    { datum: "MI 17.12.25", zeit: "17:30-20:30", preis: "89,00 €" },
    { datum: "MI 14.01.26", zeit: "17:30-20:30", preis: "89,00 €" },
    { datum: "MI 11.02.26", zeit: "17:30-20:30", preis: "89,00 €" },
    { datum: "MI 11.03.26", zeit: "17:30-20:30", preis: "89,00 €" },
    { datum: "MI 15.04.26", zeit: "17:30-20:30", preis: "89,00 €" },
    { datum: "MI 13.05.26", zeit: "17:30-20:30", preis: "89,00 €" },
    { datum: "MI 17.06.26", zeit: "17:30-20:30", preis: "89,00 €" },
    { datum: "MI 15.07.26", zeit: "17:30-20:30", preis: "89,00 €" },
  ],
  buchungslink: "https://www.willenskraft.co.at/produkt/sachkundenachweis-niederoesterreich/",
  faqItems: [
    {
      question: "Benötige ich Vorwissen für den Kurs?",
      answer: "Nein, dieser Kurs ist speziell für Erst-Hundehalter konzipiert und vermittelt alle notwendigen Grundlagen."
    },
    {
      question: "Ist das Zertifikat auch in anderen Gemeinden gültig?",
      answer: "Ja, der NÖ Sachkundenachweis ist im gesamten Bundesland Niederösterreich gültig."
    },
    {
      question: "Wie läuft die Online-Teilnahme ab?",
      answer: "Ganz unkompliziert über Google Meet. Du erhältst rechtzeitig einen Link und kannst via PC, Tablet oder Smartphone teilnehmen."
    }
  ],
  hardFacts: [
    { label: 'Dauer', value: '3 Stunden' },
    { label: 'Ort', value: 'Online (Google Meet)' },
    { label: 'Gültigkeit', value: 'Unbefristet in NÖ' },
    { label: 'Vortragende', value: 'Tierärztin & Hundetrainerin' }
  ],
  terminIntro: (
    <div className="custom-content" style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.875rem', fontWeight: 'bold' }}>Termine Tulln 2025/2026</h2>
      <p style={{ marginBottom: '20px', fontSize: '1.125rem' }}>Der Sachkundenachweis für Tulln findet online statt, sodass Sie bequem von der Gartenstadt aus teilnehmen können.</p>
    </div>
  ),
  seoSection: (
    <CitySeoContent
      cityName="Tulln an der Donau"
      introText="Die Gartenstadt Tulln blüht auf – und mit ihr das Leben der Hundebesitzer. Entlang der Donaulände oder im Wasserpark: Tulln bietet fantastische Möglichkeiten für Mensch und Tier."
      subHeadline="Hundeglück in der Gartenstadt"
      mainText="Damit die Idylle an der Donau erhalten bleibt, setzt Tulln auf verantwortungsvolle Hundehalter. Der Sachkundenachweis ist nicht nur Pflicht, sondern eine Chance. Lernen Sie, wie Sie Ihren Hund sicher durch Begegnungen auf der Donaubühne führen oder wie Sie Stresssituationen bei Veranstaltungen vermeiden. Unser Kurs vermittelt Ihnen das nötige Rüstzeug für einen entspannten Alltag in einer der schönsten Städte Niederösterreichs."
      bulletPointsTitle="Hunde-Wissen für Tulln"
      bulletPoints={[
        "NÖ Sachkundenachweis (Pflicht)",
        "Für die Anmeldung im Rathaus Tulln",
        "Sicheres Führen an der Donaulände",
        "Respektvoller Umgang in Grünzonen",
        "Einfach & Online erledigen"
      ]}
      closingText="Sorgen Sie für ein harmonisches Miteinander in Tulln – mit Wissen und Verantwortung."
    />
  )
};

export default function TullnPage() {
  return <BundeslandPage {...tullnData} />;
}