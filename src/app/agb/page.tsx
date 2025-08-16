import Link from "next/link";

export default function AGBPage() {
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

          <p>
            Hier sollten Ihre Allgemeinen Geschäftsbedingungen stehen. Diese regeln die vertraglichen Beziehungen zwischen Ihnen und Ihren Kunden.
          </p>
          <br />
           <p>
            Wichtige Inhalte sind z.B.:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Geltungsbereich</li>
            <li>Vertragsabschluss</li>
            <li>Leistungen und Preise</li>
            <li>Zahlungsbedingungen</li>
            <li>Stornierungsbedingungen</li>
            <li>Haftung</li>
          </ul>
           <br />
          <p>
            Auch hier wird dringend empfohlen, für die Erstellung professionelle Hilfe in Anspruch zu nehmen.
          </p>

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
                <Link href="/agb" className="hover:underline font-bold">AGB</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}