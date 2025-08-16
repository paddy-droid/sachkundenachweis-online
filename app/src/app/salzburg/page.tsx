import { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';
import { TerminTabelle } from '@/components/TerminTabelle';
import GoogleReviews from '@/components/GoogleReviews';

export const metadata: Metadata = {
  title: 'Sachkundenachweis Salzburg - Online Kurs',
  description: 'Offizieller Sachkundenachweis für Salzburg gemäß S-LSG. Absolviere den 2-Stunden-Kurs bequem online und erhalte dein Zertifikat.',
  keywords: "Sachkundenachweis Salzburg, Hundekurs online, Hundeführerschein Salzburg, Gesetzlicher Nachweis Hundehaltung Salzburg",
};

const anmeldungPunkte = [
  "Dein vollständiger Name und deine aktuelle Anschrift (Hauptwohnsitz).",
  "Rasse, Farbe, Geschlecht und das genaue Geburtsdatum deines Hundes.",
  "Name und Anschrift der Person oder Einrichtung, von der du den Hund übernommen hast (Züchter*in, Tierheim, Vorbesitzer*in).",
  "Die 15-stellige Mikrochip-Nummer deines Hundes. Dieser Chip ist der Personalausweis deines Hundes und muss in der österreichischen Heimtierdatenbank registriert sein.",
];

const dokumente = [
  { title: "Dein Sachkundenachweis", text: "Die offizielle Teilnahmebestätigung dieses Online-Kurses, die belegt, dass du über das notwendige theoretische Wissen verfügst." },
  { title: "Der Nachweis einer Haftpflichtversicherung", text: "Eine gültige Versicherungspolizze, die Personen- und Sachschäden durch deinen Hund mit einer Deckungssumme von mindestens 725.000 € abdeckt. Diese Versicherung ist für JEDEN Hund Pflicht." }
];

const wissensSaeulen = [
    {
        icon: "🧠",
        title: "1. Wesen & Verhalten des Hundes",
        text: "Um eine echte Partnerschaft aufzubauen, musst du die Welt aus der Perspektive deines Hundes sehen. Wir tauchen tief in die Hundepsychologie ein und beleuchten angeborene Instinkte, rassetypische Veranlagungen und das komplexe Sozialverhalten."
    },
    {
        icon: "❤️",
        title: "2. Gesundheit, Ernährung & Impfung",
        text: "Die Gesundheit deines Vierbeiners liegt in deinen Händen. Wir geben dir einen klaren Leitfaden an die Hand: von der Auswahl des richtigen Futters bis hin zur Bedeutung der essenziellen Impfungen und der lückenlosen Prophylaxe gegen Parasiten."
    },
    {
        icon: "🗣️",
        title: "3. Hundesprache & Kommunikation",
        text: "Dein Hund spricht ständig mit dir – nur eben ohne Worte. Wir schärfen deinen Blick für die feinen Nuancen der Körpersprache und machen dich zum „Hundeflüsterer“. Eine klare, faire Kommunikation ist das Fundament für jedes erfolgreiche Training."
    },
    {
        icon: "🏡",
        title: "4. Pflege, Bewegung & Zeitaufwand",
        text: "Ein Hund braucht mehr als Futter und ein Dach über dem Kopf. Er braucht dich. Wir besprechen, wie du deinen Hund körperlich und geistig artgerecht auslastest und warum auch Ruhephasen entscheidend für sein Wohlbefinden sind."
    },
    {
        icon: "⚖️",
        title: "5. Der gesetzliche Rahmen in Salzburg",
        text: "Wissen schützt vor teuren Strafen. Wir klären alle Aspekte des Tierschutzrechts und die lokalen Vorschriften in Salzburg: Wo gilt Leinenpflicht? Wann muss ein Maulkorb getragen werden? Wer die Regeln kennt, bewegt sich sicher und souverän."
    },
    {
        icon: "💰",
        title: "6. Anschaffung, Kosten & Ausstattung",
        text: "Ein Hund ist eine Entscheidung fürs Leben – auch finanziell. Wir brechen die Kosten detailliert für dich auf, von der Erstausstattung bis zu den laufenden Ausgaben. Eine ehrliche Kostenaufstellung schützt vor bösen Überraschungen."
    }
];

export default function SalzburgPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="bg-gray-100 py-20 px-4">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Sachkundenachweis Salzburg - online 🐾</h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Dein offizieller Online-Kurs für ein starkes Team mit deinem Hund. Bequem, flexibel und gesetzeskonform gemäß § 21 Abs. 1 S.LSG.
                        </p>
                        <a href="#anmeldung" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            Jetzt für nur 55 € starten
                        </a>
                    </div>
                    <div className="text-center">
                      <Image src="/hero/hero-image.webp" alt="Glücklicher Hund spielt auf einer Wiese" width={500} height={500} className="rounded-xl shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* Was dich erwartet Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Die Säulen deines Wissens</h2>
                    <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">Was dich im Detail erwartet, um perfekt auf dein Leben mit Hund vorbereitet zu sein.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {wissensSaeulen.map((saeule) => (
                            <div key={saeule.title} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <div className="text-4xl mb-4">{saeule.icon}</div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">{saeule.title}</h3>
                                <p className="text-gray-600">{saeule.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Anmeldung bei der Gemeinde Section */}
            <section id="anmeldung" className="py-20 px-4 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Deine Anmeldung bei der Gemeinde</h2>
                     <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">Schritt für Schritt zum offiziellen Team (§ 16a S.LSG)</p>
                    <div className="text-left max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Folgende Angaben sind erforderlich:</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {anmeldungPunkte.map(punkt => <li key={punkt}>{punkt}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Diese zwei Dokumente musst du beilegen:</h3>
                            <div className="space-y-4">
                                {dokumente.map(doc => (
                                    <div key={doc.title}>
                                        <h4 className="font-bold text-gray-800">{doc.title}</h4>
                                        <p className="text-gray-700">{doc.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                     <div className="mt-12 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 max-w-4xl mx-auto text-left rounded-r-lg">
                        <p className="font-bold">Profi-Tipp für einen stressfreien Start:</p>
                        <p>Da der allgemeine Sachkundenachweis rein theoretisch ist, kannst (und solltest) du ihn schon vor dem Kauf deines Hundes absolvieren. So hast du alle Unterlagen griffbereit und kannst die Anmeldung völlig entspannt und fristgerecht erledigen.</p>
                    </div>
                </div>
            </section>
            
            {/* So läuft dein Online-Meeting ab Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">So läuft dein Online-Meeting ab</h2>
                    <div className="text-lg text-gray-700 space-y-4 text-left">
                        <p>Dein Sachkundenachweis ist nicht nur spielend leicht zugänglich, sondern auch straff organisiert. Einmal im Monat findet unser Live-Termin statt. Nach deiner Buchung erhältst du eine E-Mail mit deinem persönlichen Google-Meet-Link.</p>
                        <p>Am Kurstag selbst öffnen wir den virtuellen Seminarraum zehn Minuten vor Beginn, damit du deine Technik testen kannst. Der Vortrag dauert 120 Minuten und beinhaltet interaktive Abschnitte sowie eine moderierte Fragerunde. Deine Teilnahmebestätigung erhältst du direkt im Anschluss per E-Mail.</p>
                        <p>Solltest du einmal doch nicht teilnehmen können, kannst du deinen Termin bis 24 Stunden vorher kostenlos auf einen der Folgemonate umbuchen.</p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <TerminTabelle />
            </section>

           <section className="py-20 bg-gray-50">
               <GoogleReviews />
           </section>

             {/* CTA Section */}
            <section className="py-20 px-4 bg-white">
                <div className="container mx-auto text-center">
                   <img src="https://www.willenskraft.co.at/wp-content/uploads/2018/06/Final.-Logo-Hundeschule-Willenskraft.-Gute-Hundeschule-Graz-Gleisdorf.png" alt="Logo Hundeschule Willenskraft" className="w-48 mx-auto mb-8" />
                   <h2 className="text-4xl font-bold mb-4 text-gray-900">Dein Weg zum Traum-Team beginnt genau hier!</h2>
                   <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
                       Investiere in das Wissen, das dir und deinem Hund Sicherheit und tiefes Vertrauen schenkt. Sichere dir deinen Platz flexibel und bequem von zu Hause aus.
                    </p>
                    <a href="https://www.willenskraft.co.at/produkt/sachkundenachweis-salzburg/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        Jetzt Kurs für 55 € buchen
                    </a>
                </div>
            </section>
        </main>
    );
}
