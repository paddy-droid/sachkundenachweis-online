import Image from "next/image";
import { FaqAccordion } from "./FaqAccordion";
import { TerminTabelle } from "./TerminTabelle";
import HardfactsTabelle from './HardfactsTabelle';
import GoogleReviews from './GoogleReviews';

interface BundeslandPageProps {
  pageTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  gesetzlicheGrundlageTitle: string;
  gesetzlicheGrundlageText: React.ReactNode;
  gesetzlicheGrundlageImage: string;
  kursinhalteTitle: string;
  kursinhalteSubtitle: string;
  vetTeilTitle: string;
  vetTeilText: string;
  kynoTeilTitle: string;
  kynoTeilText: string;
  gueltigkeitTitle: string;
  gueltigkeitText: React.ReactNode;
  ctaButtonText: string;
  veranstalterSection: React.ReactNode;
  podcastSection?: React.ReactNode;
  ablaufSection: React.ReactNode;
  termine: { datum: string; zeit: string; preis: string; }[];
  terminIntro?: React.ReactNode;
  buchungslink: string;
  faqItems: { question: string; answer: string; }[];
  hardFacts: { label: string; value: string; }[];
  seoSection?: React.ReactNode;
}

export const BundeslandPage: React.FC<BundeslandPageProps> = ({
  pageTitle,
  heroTitle,
  heroSubtitle,
  heroImage,
  gesetzlicheGrundlageTitle,
  gesetzlicheGrundlageText,
  gesetzlicheGrundlageImage,
  kursinhalteTitle,
  kursinhalteSubtitle,
  vetTeilTitle,
  vetTeilText,
  kynoTeilTitle,
  kynoTeilText,
  gueltigkeitTitle,
  gueltigkeitText,
  ctaButtonText,
  veranstalterSection,
  ablaufSection,
  podcastSection,
  termine,
  terminIntro,
  buchungslink,
  faqItems,
  hardFacts,
  seoSection
}) => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-orange-100 selection:text-orange-900">
      <main>
        {/* Premium Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
          <Image
            src={heroImage}
            alt={`Sachkundenachweis ${pageTitle} - Hero Bild`}
            fill
            style={{ objectFit: 'cover' }}
            className="absolute z-0 scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10 backdrop-blur-[2px]"></div>

          <div className="relative z-20 text-center p-6 max-w-5xl mx-auto animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-300 text-sm font-semibold mb-6 backdrop-blur-md uppercase tracking-wider">
              Offiziell anerkannt & Zertifiziert
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-2xl">
              {heroTitle}
            </h1>
            <p className="text-xl md::text-2xl mb-10 text-gray-200 font-light max-w-3xl mx-auto drop-shadow-lg">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={buchungslink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white font-bold text-lg shadow-[0_20px_50px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.5)] transform hover:scale-105 transition-all duration-300 ring-2 ring-orange-400/50 ring-offset-2 ring-offset-black"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {ctaButtonText}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
                <div className="absolute inset-0 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors blur-md"></div>
              </a>
              <a href="#termine" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold transition-all hover:scale-105">
                Termine ansehen
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Nächster Kursplatz verfügbar
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-16 -mt-20 relative z-30">

          {/* 3 Steps Section - Glassmorphism */}
          <section className="mb-24">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Online Buchen", desc: "Wähle deinen Wunschtermin und sichere dir deinen Platz in unter 2 Minuten.", icon: "📅" },
                { step: "02", title: "Live Teilnehmen", desc: "Logge dich bequem von zu Hause via Google Meet ein. Keine Anreise nötig.", icon: "💻" },
                { step: "03", title: "Zertifikat Erhalten", desc: "Dein offizielles Zertifikat kommt direkt nach dem Kurs per E-Mail zu dir.", icon: "🎓" }
              ].map((item, idx) => (
                <div key={idx} className="relative p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl font-black text-gray-900 select-none group-hover:scale-110 transition-transform duration-500">{item.step}</div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-sm text-orange-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Highlight / Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {["Behördlich anerkannt", "Erfahrene Experten", "100% Online", "Sichere Bezahlung"].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 hover:border-orange-200 transition-colors cursor-default">
                <span className="text-orange-500">✓</span>
                <span className="font-medium text-sm text-gray-600">{badge}</span>
              </div>
            ))}
          </div>

          {/* Gesetzliche Grundlage & Mehrwert Section */}
          <section className="py-12 md:py-24">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Rechtliches & Hintergrund</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-gray-900">{gesetzlicheGrundlageTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                {gesetzlicheGrundlageText}
              </div>
              <div className="relative rounded-3xl shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                <Image
                  src={gesetzlicheGrundlageImage}
                  alt="Glücklicher Hundebesitzer mit Hund"
                  width={600}
                  height={500}
                  style={{ objectFit: 'cover' }}
                  className="transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </section>

          {/* Detaillierte Kursinhalte Section with Bento Grid feel */}
          <section className="py-12 md:py-24 bg-white rounded-[3rem] shadow-sm border border-gray-100 p-8 md:p-16 my-12">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{kursinhalteTitle}</h2>
              <p className="text-xl text-gray-500 leading-relaxed">{kursinhalteSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🩺</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{vetTeilTitle}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{vetTeilText}</p>
              </div>
              <div className="bg-orange-50/50 p-10 rounded-3xl border border-orange-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🐕</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{kynoTeilTitle}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{kynoTeilText}</p>
              </div>
            </div>
          </section>

          {/* Lokaler Bezug & Gültigkeit Section */}
          <section className="py-16 md:py-24 text-center max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">{gueltigkeitTitle}</h2>
              <div className="text-xl text-gray-600 leading-relaxed space-y-6">
                {gueltigkeitText}
              </div>
            </div>
            <a href={buchungslink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:-translate-y-1 shadow-xl">
              {ctaButtonText}
            </a>
          </section>

          <HardfactsTabelle items={hardFacts} />

          {seoSection}

          <div id="termine">
            <section className="py-20">
              {terminIntro}
              <TerminTabelle termine={termine} buchungslink={buchungslink} />
            </section>
          </div>

          {ablaufSection}

          <div className="my-12">
            {veranstalterSection}
          </div>

          {podcastSection}

          <section className="py-20 text-center bg-white rounded-[3rem] shadow-sm border border-gray-100 my-12">
            <h2 className="text-4xl font-bold mb-4">Deine Expertinnen</h2>
            <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Lerne von den Besten: Jahrelange Erfahrung in Tiermedizin und modernem Hundetraining.</p>

            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              {/* Expert Card 1 */}
              <div className="text-center group w-64">
                <div className="relative mx-auto w-48 h-48 mb-6 rounded-full overflow-hidden shadow-xl ring-4 ring-white group-hover:ring-orange-200 transition-all duration-500">
                  <Image src="https://www.willenskraft.co.at/wp-content/uploads/2025/02/Mag.-Nicole-Nemeth-Sachkundenachweis.webp" alt="Tierärztin Mag. Nicole Nemeth" fill style={{ objectFit: 'cover' }} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mag. Nicole Nemeth</h3>
                <p className="text-orange-500 font-medium uppercase text-sm tracking-wide mt-1">Tierärztin</p>
              </div>
              {/* Expert Card 2 */}
              <div className="text-center group w-64">
                <div className="relative mx-auto w-48 h-48 mb-6 rounded-full overflow-hidden shadow-xl ring-4 ring-white group-hover:ring-orange-200 transition-all duration-500">
                  <Image src="https://www.willenskraft.co.at/wp-content/uploads/2025/02/Jessy-Pusch-Hundeschule-Willenskraft-Sachkundenachweis.webp" alt="Hundetrainerin Jessy Pusch" fill style={{ objectFit: 'cover' }} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Jessy Pusch</h3>
                <p className="text-orange-500 font-medium uppercase text-sm tracking-wide mt-1">Hundetrainerin</p>
              </div>
              {/* Expert Card 3 */}
              <div className="text-center group w-64">
                <div className="relative mx-auto w-48 h-48 mb-6 rounded-full overflow-hidden shadow-xl ring-4 ring-white group-hover:ring-orange-200 transition-all duration-500">
                  <Image src="https://www.willenskraft.co.at/wp-content/uploads/2025/02/Bianca-Oriana-Willen-Sachkundenachweis.webp" alt="Hundetrainerin Bianca Oriana Willen" fill style={{ objectFit: 'cover' }} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Bianca Oriana Willen</h3>
                <p className="text-orange-500 font-medium uppercase text-sm tracking-wide mt-1">Hundetrainerin</p>
              </div>
            </div>
          </section>

          <section className="py-20 max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Häufig gestellte Fragen</h2>
              <p className="text-xl text-gray-500">Alles, was du für deinen Start wissen musst.</p>
            </div>
            <FaqAccordion items={faqItems} />
          </section>

          <section className="py-20">
            <GoogleReviews />
          </section>
        </div>
      </main>
    </div>
  );
};