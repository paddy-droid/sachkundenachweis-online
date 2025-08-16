import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src="/hero/hero-image.webp"
          alt="Glücklicher Hund mit Ball auf einer Wiese"
          fill
          style={{objectFit: 'cover'}}
          className="absolute z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative z-10 text-center p-5 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-shadow-lg">
            Sachkundenachweis Online
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-shadow-md">
            Dein offizieller Kurs für Hundebesitzer in Österreich – bequem von zu Hause.
          </p>
        </div>
      </section>

      {/* Bundesland Auswahl Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Für welches Bundesland brauchst du den Nachweis?</h2>
          <p className="text-xl text-gray-700 mb-12">
            Wähle dein Bundesland, um alle spezifischen Informationen und Termine zu erhalten.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Card für Niederösterreich */}
            <Link href="/niederoesterreich" className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🇦🇹</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Niederösterreich</h3>
              <p className="text-gray-600 mb-6">
                Alle Informationen zum NÖ Hundehaltungsgesetz und dem seit 2023 verpflichtenden Hundeführerschein für dich als neuen Hundehalter.
              </p>
              <div className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all">
                Details für NÖ anzeigen
              </div>
            </Link>

            {/* Card für Salzburg */}
            <Link href="/salzburg" className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🇦🇹</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Salzburg</h3>
              <p className="text-gray-600 mb-6">
                Alles Wichtige zum Sachkundenachweis gemäß dem Salzburger Landessicherheitsgesetz, inklusive aller Kursinhalte und Termine für dich.
              </p>
              <div className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all">
                Details für Salzburg anzeigen
              </div>
            </Link>

          </div>
        </div>
      </section>
      
      {/* Allgemeine Infos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Warum ein Online-Kurs die beste Wahl für dich ist</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
                <p>
                    Unser zertifizierter Online-Sachkundenachweis bietet dir maximale Flexibilität. Spare dir die Anfahrt und lerne bequem von zu Hause. Unsere Live-Kurse via Google Meet garantieren dir Interaktivität und die Möglichkeit, direkt Fragen an unsere Expertinnen zu stellen.
                </p>
                <p>
                    Dein offiziell anerkanntes Zertifikat erhältst du unmittelbar nach dem Kurs per E-Mail.
                </p>
            </div>
        </div>
      </section>

    </main>
  );
}
