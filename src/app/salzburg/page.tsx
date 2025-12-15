import { Metadata } from 'next';
import { BundeslandPage } from '../../components/BundeslandPage';
import { CitySeoContent } from '../../components/CitySeoContent';

export const metadata: Metadata = {
    title: 'Sachkundenachweis Salzburg online | Kurs für Hundebesitzer',
    description: 'Absolviere den offiziellen Sachkundenachweis für Salzburg online. Dein Zertifikat, gesetzeskonform und flexibel von zu Hause aus.',
    keywords: "Sachkundenachweis Salzburg, Hundekurs online, Hundeführerschein Salzburg, Gesetzlicher Nachweis Hundehaltung Salzburg",
};

// Salzburg specfic data mapped to the unified layout
const salzburgData = {
    pageTitle: "Sachkundenachweis Salzburg",
    heroTitle: "Sachkundenachweis Salzburg – online",
    heroSubtitle: "Dein offizieller Online-Kurs gemäß § 21 S.LSG. Bequem, flexibel und anerkannt.",
    heroImage: "/hero/hero-image.webp", // Reusing hero image for internal consistency

    gesetzlicheGrundlageTitle: "Anmeldung & Gesetzliche Pflicht in Salzburg",
    gesetzlicheGrundlageText: (
        <>
            <h3 className="text-2xl font-bold text-[--highlight] mb-4">Der Weg zum offiziellen Hundehalter</h3>
            <p className="text-lg mb-4">
                Im Bundesland Salzburg ist der Nachweis der Sachkunde für Erst-Hundehalter gesetzlich vorgeschrieben (§ 21 Abs 1 S.LSG). Dieser Kurs vermittelt dir das geforderte theoretische Wissen, um einen Hund sicher und artgerecht zu halten.
            </p>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 my-6">
                <h4 className="font-bold text-gray-800 mb-3">Erforderliche Angaben für die Gemeinde:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Vollständiger Name & Hauptwohnsitz</li>
                    <li>Daten des Hundes (Rasse, Chipnummer, Geburtsdatum)</li>
                    <li>Herkunftsnachweis (Züchter, Vorbesitzer, Tierheim)</li>
                </ul>
            </div>

            <p className="text-lg">
                Zusätzlich zum Sachkundenachweis (unser Zertifikat) benötigst du für die Anmeldung eine <strong>Hundehaftpflichtversicherung</strong> mit einer Mindestdeckungssumme von 725.000 Euro. Beides zusammen bildet die Basis für eine problemlose Anmeldung auf deinem Gemeindeamt.
            </p>
        </>
    ),
    gesetzlicheGrundlageImage: "/hero/content-image-1.webp",

    kursinhalteTitle: "Expertenwissen auf den Punkt gebracht",
    kursinhalteSubtitle: "Fundiert, praxisnah und kompakt – alles, was du für den Start brauchst.",

    // Mapping the "6 Pillars" into the 2 main sections for layout consistency
    vetTeilTitle: "Veterinärmedizin & Haltung",
    vetTeilText: "Dieser Block widmet sich der körperlichen Gesundheit deines Hundes. Unsere Tierärztin erklärt dir anschaulich, worauf es bei der Ernährung ankommt, welche Impfungen (Staupe, Parvo, Tollwut) essentiell sind und wie du Parasiten effektiv vorbeugst. Zudem besprechen wir die Grundlagen der Ersten Hilfe beim Hund und die wichtigsten Aspekte der täglichen Pflege.",

    kynoTeilTitle: "Verhalten, Recht & Erziehung",
    kynoTeilText: "Hier steigen wir tief in das Wesen des Hundes ein. Lerne die Körpersprache richtig zu deuten: Beschwichtigungssignale, Angst oder Aggression. Wir behandeln das Salzburger Landessicherheitsgesetz (Leinenpflicht, Maulkorbzwang) und geben dir wertvolle Tipps für den Alltag – von der Stubenreinheit bis zum entspannten Alleinebleiben.",

    gueltigkeitTitle: "Gültigkeit in Salzburg",
    gueltigkeitText: (
        <>
            <p>Dieser Kurs erfüllt die Anforderungen des Salzburger Landessicherheitsgesetzes (§ 21 Abs. 1 S.LSG) für den theoretischen Sachkundenachweis. Er richtet sich an alle Personen, die erstmals einen Hund in Salzburg halten.</p>
            <br />
            <p className="font-bold">Hinweis:</p>
            <p>Da der Kurs rein theoretisch ist, kannst du ihn idealerweise schon VOR dem Einzug deines Hundes absolvieren. So hast du den Kopf frei für die Eingewöhnung.</p>
        </>
    ),
    ctaButtonText: "Jetzt für den Salzburg-Kurs anmelden",

    veranstalterSection: (
        <section className="py-20 bg-gray-50 rounded-[3rem]">
            <div className="text-center">
                <img src="https://www.willenskraft.co.at/wp-content/uploads/2018/06/Final.-Logo-Hundeschule-Willenskraft.-Gute-Hundeschule-Graz-Gleisdorf.png" alt="Logo Hundeschule Willenskraft" className="w-48 mx-auto mb-8" />
                <h2 className="text-4xl font-bold mb-4">Veranstalter: Hundeschule Willenskraft</h2>
                <p className="text-xl text-gray-600 mb-12">Dein ganzheitlicher Wegbegleiter für ein harmonisches Leben mit Hund.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center px-4 md:px-12">
                <div className="p-6 md:p-10">
                    <h3 className="text-3xl font-bold mb-6">Unsere Philosophie</h3>
                    <p className="mb-4 text-lg">Wir stehen für tierschutzkonformes & modernes Hundetraining. Es geht darum, deinen Hund besser verstehen zu lernen und die richtigen Signale zu senden. Wenn du lernst die Signale deines Hundes zu lesen, ermöglicht das einen Kommunikationsfluss, der für beide eindeutig lesbar ist.</p>
                    <p>Missverständnisse werden aufgehoben und eine dauerhafte, auf gegenseitigem Verständnis beruhende Beziehung langfristig gefestigt.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:scale-105 transition-transform border border-gray-100">✅ Mobiles Training</div>
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:scale-105 transition-transform border border-gray-100">🐾 Online-Hundeschule</div>
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:scale-105 transition-transform border border-gray-100">🎓 Zert. Ausbildung</div>
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center transform hover:scale-105 transition-transform border border-gray-100">❤️ Tierschutzkonform</div>
                </div>
            </div>
        </section>
    ),

    ablaufSection: (
        <section className="py-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="p-8 order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-6">Stressfrei zum Nachweis</h2>
                    <p className="mb-4 text-lg">Unser Online-Kurs ist die komfortabelste Art, deine gesetzliche Pflicht zu erfüllen. Keine Parkplatzsuche, keine Anfahrt – einfach einloggen und zuhören.</p>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-orange-500 mr-2 font-bold">✓</span>
                            <span><strong>Interaktiver Vortrag:</strong> Stelle deine Fragen direkt an unsere Experten.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-500 mr-2 font-bold">✓</span>
                            <span><strong>Zeitsparend:</strong> Der gesamte Kurs findet an einem Abend (3 Stunden) statt.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-500 mr-2 font-bold">✓</span>
                            <span><strong>Garantierte Durchführung:</strong> Einmal im Monat findet der Kurstermin verlässlich statt.</span>
                        </li>
                    </ul>
                </div>
                <div className="rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 order-1 md:order-2 ring-8 ring-gray-50">
                    <img
                        src="/hero/content-image-2.webp"
                        alt="Entspannter Hund zu Hause"
                        width={600}
                        height={400}
                        style={{ objectFit: 'cover' }}
                    />
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
    termine: [
        { datum: "MI 19.11.25", zeit: "17:30-20:30", preis: "59,00 €" },
        { datum: "MI 17.12.25", zeit: "17:30-20:30", preis: "59,00 €" },
        { datum: "MI 14.01.26", zeit: "17:30-20:30", preis: "59,00 €" },
        { datum: "MI 11.02.26", zeit: "17:30-20:30", preis: "59,00 €" },
        { datum: "MI 11.03.26", zeit: "17:30-20:30", preis: "59,00 €" },
        { datum: "MI 15.04.26", zeit: "17:30-20:30", preis: "59,00 €" },
        { datum: "MI 13.05.26", zeit: "17:30-20:30", preis: "59,00 €" },
        { datum: "MI 17.06.26", zeit: "17:30-20:30", preis: "59,00 €" },
        { datum: "MI 15.07.26", zeit: "17:30-20:30", preis: "59,00 €" },
    ],
    terminIntro: (
        <div className="custom-content text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-6">Termine Salzburg 2025</h2>
            <p className="text-lg text-gray-600 mb-4">
                Der Sachkundenachweis Salzburg kostet bei uns <strong>59 Euro</strong>.
                Suche dir einfach den passenden Termin aus der Tabelle aus.
            </p>
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                📍 100% Online via Google Meet
            </div>
        </div>
    ),
    buchungslink: "https://www.willenskraft.co.at/produkt/sachkundenachweis-salzburg/",
    faqItems: [
        {
            question: "Ist dieser Sachkundenachweis in ganz Salzburg gültig?",
            answer: "Ja, der Kurs entspricht den gesetzlichen Vorgaben des Salzburger Landessicherheitsgesetzes und wird von allen Gemeinden im Bundesland Salzburg anerkannt."
        },
        {
            question: "Welche Hundehalter müssen diesen Kurs machen?",
            answer: "Der Kurs ist für alle Personen verpflichtend, die sich einen Hund anschaffen möchten und noch keinen Nachweis über die erforderliche Sachkunde haben (Erst-Hundehalter)."
        },
        {
            question: "Gibt es eine abschließende Prüfung?",
            answer: "Nein, es ist keine Prüfung erforderlich. Die Bestätigung wird für die aktive Teilnahme an dem theoretischen Kurs ausgestellt."
        },
        {
            question: "Wann bekomme ich das Zertifikat?",
            answer: "Du erhältst deine Teilnahmebestätigung direkt nach dem Kurs per E-Mail als PDF. Diese kannst du dann zusammen mit dem Nachweis der Haftpflichtversicherung bei deiner Gemeinde vorlegen, um den Hund anzumelden."
        },
        {
            question: "Kann ich den Kurs machen, bevor ich den Hund habe?",
            answer: "Ja, das ist sogar sehr empfehlenswert! So hast du die nötigen Unterlagen schon vor dem Einzug des Hundes beisammen und kannst dich voll auf den neuen Mitbewohner konzentrieren."
        },
        {
            question: "Gilt dieser Kurs für Kampfhunde / Listenhunde?",
            answer: "Dieser Kurs vermittelt die allgemeine Sachkunde für das Halten von Hunden. Für das Halten von sogenannten 'gefährlichen Hunden' gelten in Salzburg gesonderte Bestimmungen (Wesenstest etc.). Bitte erkundige dich für diesen speziellen Fall bei deiner Gemeinde."
        },
        {
            question: "Was brauche ich technisch für die Teilnahme?",
            answer: "Einen PC, Laptop oder Tablet mit Internetverbindung und Lautsprechern. Eine Kamera und ein Mikrofon sind für die Interaktion von Vorteil."
        }
    ],
    hardFacts: [
        { label: 'Kursart', value: 'Online-Live-Kurs via Google Meet' },
        { label: 'Dauer', value: 'ca. 2 Stunden (120 Min)' }, // Aligned with text block
        { label: 'Gültigkeit', value: 'Salzburg-weit anerkannt' },
        { label: 'Zertifikat', value: 'Digitales Zertifikat direkt nach Kursende' },
        { label: 'Voraussetzung', value: 'Keine Vorkenntnisse notwendig' },
        { label: 'Trainer-Team', value: 'Zertifizierte Hundetrainer & Tierärztin' },
    ],
    seoSection: (
        <CitySeoContent
            cityName="Salzburg"
            introText="Vom Großglockner bis zur Mozartstadt – Salzburg ist ein Juwel. Damit das Zusammenleben von Mensch und Hund in diesem Naturparadies gelingt, setzt das Land Salzburg auf aufgeklärte Hundehalter."
            subHeadline="Kompetenznachweis in Salzburg"
            mainText="Das Salzburger Landeshundegesetz sieht vor, dass Hundehalter über das nötige Wissen verfügen müssen, um ihre Tiere artgerecht und sicher zu halten. Unser Kurs ist exakt auf diese Anforderungen abgestimmt. Wir vermitteln Ihnen nicht nur die rechtlichen Rahmenbedingungen für Salzburg und seine Gemeinden, sondern auch tiefgehendes Wissen über das Wesen des Hundes. So tragen alle dazu bei, die einzigartige Lebensqualität in Salzburg zu bewahren."
            bulletPointsTitle="Fakten für Salzburg"
            bulletPoints={[
                "Anerkannt in Stadt & Land Salzburg",
                "Erfüllt Vorgaben des Landeshundegesetzes",
                "Schutz von Alm- und Weidevieh",
                "Sicheres Verhalten in Tourismuszonen",
                "Zertifikat bequem von zu Hause"
            ]}
            closingText="Werden Sie Teil einer verantwortungsvollen Hunde-Community in Salzburg."
        />
    )
};

export default function SalzburgPage() {
    return <BundeslandPage {...salzburgData} />;
}
