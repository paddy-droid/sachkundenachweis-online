import Link from 'next/link';

export default function RechtlichesPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gray-100 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">Hundeschule Willenskraft</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Startseite</Link>
            <Link href="/rechtliches" className="text-gray-600 hover:text-gray-800 font-bold">Rechtliches</Link>
            <a href="https://www.willenskraft.co.at/produkt/sachkundenachweis-niederoesterreich/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105">
              Jetzt Kursplatz sichern
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Rechtliche Grundlagen zum NÖ Sachkundenachweis</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Verpflichtung seit 1. Juni 2023</h2>
            <p className="mb-4">
              Gemäß der NÖ Hundehalte-Sachkundeverordnung 2023 ist seit dem 1. Juni 2023 jeder, der sich in Niederösterreich einen neuen Hund anschafft und in den zwei Jahren zuvor keinen Hund gehalten hat, gesetzlich dazu verpflichtet, einen Allgemeinen Sachkundenachweis zu erbringen.
            </p>
            <p>
              Diese Regelung soll sicherstellen, dass alle neuen Hundehalter über das notwendige Grundwissen für eine tierschutzkonforme und sichere Hundehaltung verfügen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Inhalte des Sachkundenachweises</h2>
            <p className="mb-4">Der Gesetzgeber schreibt vor, dass der Kurs mindestens drei Stunden umfassen muss und von qualifizierten Personen abgehalten wird. Die Inhalte sind klar definiert:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Einstündiger Vortrag durch eine Tierärztin/einen Tierarzt:</strong> Behandelt Themen wie Gesundheit, artgerechte Haltung, Pflege und Ernährung.</li>
              <li><strong>Zweistündiger Vortrag durch eine fachkundige Person (z.B. Hundetrainer/in):</strong> Fokussiert auf Hundeverhalten, Körpersprache, Erziehung, Stressmanagement und rechtliche Aspekte im Alltag.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Wichtige rechtliche Aspekte für Hundehalter</h2>
            <ul className="list-disc list-inside space-y-3">
              <li><strong>Meldepflicht:</strong> Jeder Hund muss bei der zuständigen Gemeinde gemeldet werden. Bei der Anmeldung ist der Sachkundenachweis vorzulegen.</li>
              <li><strong>Haftpflichtversicherung:</strong> Für jeden Hund muss eine gültige Haftpflichtversicherung mit einer Mindestdeckungssumme von 725.000 € bestehen.</li>
               <li><strong>Chip- und Registrierungspflicht:</strong> Alle Hunde in Österreich müssen mittels eines zifferncodierten, elektronisch ablesbaren Mikrochips gekennzeichnet und in der Heimtierdatenbank registriert sein.</li>
              <li><strong>Leinen- und Maulkorbpflicht:</strong> An öffentlichen Orten besteht, je nach lokaler Verordnung, eine Leinen- oder Maulkorbpflicht. An manchen Orten auch beides.</li>
              <li><strong>Haftung & Versicherung:</strong> Eine Haftpflichtversicherung mit einer Deckungssumme von mindestens 725.000€ ist Pflicht.</li>
            </ul>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div>
              <p>&copy; {new Date().getFullYear()} Hundeschule Willenskraft</p>
            </div>
            <div className="flex space-x-4">
                <Link href="/impressum" className="hover:underline">Impressum</Link>
                <Link href="/datenschutz" className="hover:underline">Datenschutz</Link>
                <Link href="/agb" className="hover:underline">AGB</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}