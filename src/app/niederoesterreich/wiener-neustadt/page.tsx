import { Metadata } from 'next';
import { BundeslandPage } from '../../../components/BundeslandPage';

export const metadata: Metadata = {
  title: 'Sachkundenachweis Wiener Neustadt online | Jetzt starten',
  description: 'Absolviere den offiziellen Sachkundenachweis für Wiener Neustadt online. Erhalte dein Zertifikat schnell und gesetzeskonform für die Anmeldung deines Hundes.',
  keywords: "Sachkundenachweis Wiener Neustadt, Hundekurs online, Hundeführerschein Wiener Neustadt, Gesetzlicher Nachweis Hundehaltung Wiener Neustadt",
};

const wienerNeustadtData = {
  pageTitle: "Sachkundenachweis Wiener Neustadt",
  heroTitle: "Sachkundenachweis Wiener Neustadt – online",
  heroSubtitle: "Gesetzeskonform, anerkannt in Wiener Neustadt und stressfrei von zu Hause aus.",
  heroImage: "/hero/hero-image.webp",
  gesetzlicheGrundlageTitle: "Warum der Sachkundenachweis in Wiener Neustadt so wichtig ist",
  gesetzlicheGrundlageText: (
    <>
      <h3 className="text-2xl font-bold text-[--highlight]">Ihre Verpflichtung in Wiener Neustadt: Der Sachkundenachweis für Hunde</h3>
      <p className="text-lg">
        Für zukünftige Hundehalter in Wiener Neustadt ist der <strong>NÖ Hundeführerschein</strong> seit dem 1. Juni 2023 unerlässlich. Diese gesetzliche Vorgabe sichert nicht nur Ihre offizielle Hundeanmeldung im Magistrat, sondern legt auch den Grundstein für ein verantwortungsbewusstes Miteinander in der Stadt.
      </p>
      <p className="text-lg">
        Betrachten Sie den Kurs als wertvolle Investition in die Beziehung zu Ihrem Hund und als Beitrag für eine positive Gemeinschaft von Hundehaltern in Wiener Neustadt.
      </p>
    </>
  ),
  gesetzlicheGrundlageImage: "/hero/content-image-2.webp",
  kursinhalteTitle: "Was erwartet dich im Hunde-Sachkundekurs für Wiener Neustadt?",
  kursinhalteSubtitle: "Ein tiefer Einblick in die zwei Säulen der Hundeexpertise.",
  vetTeilTitle: "Veterinärmedizinischer Teil (1 Stunde)",
  vetTeilText: "Eine Tierärztin vermittelt dir essenzielles Wissen rund um die Gesundheit deines Vierbeiners. Du lernst nicht nur die gesetzlichen Mindestanforderungen der Haltung kennen, sondern auch, wie du Anzeichen für Krankheiten frühzeitig erkennst. Ein Beispiel: Wie unterscheide ich einen harmlosen Huster von einem ernsten Atemwegsinfekt? Themen wie Ernährung, Impfschemata und routinemäßige Gesundheitschecks werden praxisnah erklärt.",
  kynoTeilTitle: "Kynologischer Teil (2 Stunden)",
  kynoTeilText: "Hier tauchst du tief in die Psyche und das Verhalten deines Hundes ein. Wir entschlüsseln die Körpersprache: Was bedeutet es wirklich, wenn dein Hund gähnt oder sich über die Schnauze leckt? Wir behandeln typische Herausforderungen und zeigen Lungswege für unerwünschtes Verhalten auf. Ein klassisches Beispiel ist das Ziehen an der Leine – wir erklären die Ursachen und geben dir Werkzeuge für entspannte Spaziergänge an die Hand.",
  gueltigkeitTitle: "Gültigkeit in ganz Wiener Neustadt und Umgebung",
  gueltigkeitText: (
    <>
      <p>Unser Online-Zertifikat ist in Wiener Neustadt und in ganz Niederösterreich gültig. Da das Hundewesen in Österreich auf Landesebene geregelt ist, ist es wichtig, den richtigen Kurs zu wählen. Unser Angebot ist speziell für das <strong>NÖ Hundehaltungsgesetz</strong> konzipiert, sodass Sie in Wiener Neustadt alle Anforderungen erfüllen.</p><br/><p>Sollten Sie einen Nachweis für ein anderes Bundesland benötigen, informieren Sie sich über unseren <a href='/salzburg' style={{textDecoration: 'underline'}}>Sachkundenachweis für Salzburg</a>. Eine Übersicht aller Kurse in Niederösterreich finden Sie auf unserer <a href='/niederoesterreich' style={{textDecoration: 'underline'}}>NÖ Übersichtsseite</a>.</p>
    </>
  ),
  ctaButtonText: "Jetzt für den Kurs in Wiener Neustadt anmelden",
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
        <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/episode/3SI0Yyc79sNiUeWTQOzluz?utm_source=generator" width="80%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
            <li><strong className="text-[--highlight]">1 Stunde: Veterinärmedizinischer Teil</strong><br/>Eine erfahrene Tierärztin erklärt dir alles zu Gesundheit, gesetzlichen Mindestanforderungen, Impfungen und Ernährung.</li>
            <li><strong className="text-[--highlight]">2 Stunden: Kynologischer Teil</strong><br/>Tauche tief in die Welt des Hundeverhaltens, der Körpersprache und der modernen Hundeerziehung ein.</li>
          </ul>
        </div>
        <div className="rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 order-1 md:order-2">
          <img
            src="/hero/content-image-1.webp"
            alt="Zwei Hunde spielen miteinander auf einer Wiese"
            width={600}
            height={400}
            style={{objectFit: 'cover'}}
          />
        </div>
      </div>
    </section>
  ),
  termine: [
    { datum: "MI 24.09.25", zeit: "17:30-20:30", preis: "85,00 €" },
    { datum: "MI 22.10.25", zeit: "17:30-20:30", preis: "85,00 €" },
    { datum: "MI 19.11.25", zeit: "17:30-20:30", preis: "85,00 €" },
    { datum: "MI 17.12.25", zeit: "17:30-20:30", preis: "85,00 €" },
  ],
  buchungslink: "https://www.willenskraft.co.at/produkt/sachkundenachweis-niederoesterreich/"
};

export default function WienerNeustadtPage() {
  return <BundeslandPage {...wienerNeustadtData} />;
}