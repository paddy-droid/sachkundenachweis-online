import Link from 'next/link';

export default function ImpressumPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gray-100 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">Hundeschule Willenskraft</Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/" className="text-gray-600 hover:text-[--highlight]">Startseite</Link>
            <Link href="/rechtliches" className="text-gray-600 hover:text-[--highlight]">Rechtliches</Link>
            <a href="https://www.willenskraft.co.at/produkt/sachkundenachweis-niederoesterreich/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105">
              Jetzt Kursplatz sichern
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>
          
          <p className="font-bold mb-4">Angaben gemäß § 5 TMG:</p>
          <p>NUR. Marketing GmbH</p>
          <p>Bogengasse 1, 9800 Spittal an der Drau</p>
          <br />

          <p className="font-bold mb-2">Kontakt:</p>
          <p>Telefon: +43 664 5322221</p>
          <p>E-Mail: kommunikation@nur.marketing</p>
          <br />

          <p><strong>UID-Nummer:</strong> ATU76522327</p>
          <p><strong>Firmenbuchnummer:</strong> FN 549728 z</p>

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
                <Link href="/impressum" className="hover:underline font-bold">Impressum</Link>
                <Link href="/datenschutz" className="hover:underline">Datenschutz</Link>
                <Link href="/agb" className="hover:underline">AGB</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}