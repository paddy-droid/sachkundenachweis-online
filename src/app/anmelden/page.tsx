import Link from 'next/link';

export default function AnmeldenPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gray-100 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">Hundeschule Willenskraft</Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Startseite</Link>
            <Link href="/rechtliches" className="text-gray-600 hover:text-gray-800">Rechtliches</Link>
            <a href="https://www.willenskraft.co.at/produkt/sachkundenachweis-niederoesterreich/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105">
              Jetzt Kursplatz sichern
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-6 text-center">Sichere dir deinen Platz im Online-Kurs</h1>
          
          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-[--highlight] mb-2">Preis: 85,00 € inkl. MwSt.</p>
            <p className="text-gray-600">Gesamtdauer: 3 Stunden, bequem von zu Hause aus.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">So einfach funktioniert die Anmeldung:</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li><strong>Kursplatz buchen:</strong> Klicke auf den Button &quot;Für nächsten Termin anmelden&quot;. Mit deiner Buchung sicherst du dir einen Platz im nächstmöglichen Kurs.</li>
              <li><strong>Bestätigung erhalten:</strong> Du erhältst sofort eine Bestätigungs-E-Mail mit allen Details und dem Link zum Google Meet-Raum.</li>
              <li><strong>Teilnehmen:</strong> Klicke zum vereinbarten Termin auf den Link. Du benötigst nur einen Computer oder ein Smartphone.</li>
               <li><strong>Zertifikat bekommen:</strong> Direkt nach dem Kurs senden wir dir dein offizielles Zertifikat per E-Mail als PDF zu.</li>
            </ol>
          </div>

          <div className="text-center">
            <a 
              href="https://www.willenskraft.co.at/produkt/sachkundenachweis-niederoesterreich/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 inline-block"
            >
              Für nächsten Termin anmelden
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Fragen zur Buchung? Kontaktiere uns unter +43 664 5322221.
            </p>
          </div>

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