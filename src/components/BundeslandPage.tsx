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
  buchungslink: string;
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
  buchungslink,
}) => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center text-white">
          <Image
            src={heroImage}
            alt={`Hero Image für ${pageTitle}`}
            fill
            style={{objectFit: 'cover'}}
            className="absolute z-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="relative z-10 text-center p-5 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-shadow-lg">{heroTitle}</h1>
            <p className="text-lg md:text-2xl mb-8 text-shadow-md">
              {heroSubtitle}
            </p>
            <a href="https://www.willenskraft.co.at/produkt/sachkundenachweis-niederoesterreich/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              {ctaButtonText}
            </a>
          </div>
        </section>

        <div className="container mx-auto px-6 py-20">
          
          {/* 3 Steps Section */}
          <section className="py-20 text-center">
            <h2 className="text-4xl font-bold mb-16">In 3 Schritten zu deinem Zertifikat</h2>
            <div className="grid md:grid-cols-3 gap-12">
                <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                    <div className="text-5xl font-bold text-[--highlight] mb-4">1.</div>
                    <h3 className="text-2xl font-bold mb-3">Online Buchen</h3>
                    <p className="text-gray-600">Sichere dir deinen Platz für den nächstmöglichen Termin mit nur wenigen Klicks.</p>
                </div>
                <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                    <div className="text-5xl font-bold text-[--highlight] mb-4">2.</div>
                    <h3 className="text-2xl font-bold mb-3">Kurs Teilnehmen</h3>
                    <p className="text-gray-600">Nimm bequem von zu Hause via Google Meet am 3-stündigen Live-Kurs teil.</p>
                </div>
                <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                    <div className="text-5xl font-bold text-[--highlight] mb-4">3.</div>
                    <h3 className="text-2xl font-bold mb-3">Zertifikat Erhalten</h3>
                    <p className="text-gray-600">Direkt nach dem Kurs erhältst du dein offizielles, landesweit gültiges Zertifikat per E-Mail.</p>
                </div>
            </div>
          </section>

          {/* Gesetzliche Grundlage & Mehrwert Section */}
          <section className="py-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">{gesetzlicheGrundlageTitle}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
              <div className="space-y-6">
                {gesetzlicheGrundlageText}
              </div>
              <div className="rounded-xl shadow-lg overflow-hidden">
                <Image
                  src={gesetzlicheGrundlageImage}
                  alt="Person streichelt einen Hund – Symbol für Vertrauen und die Beziehung zwischen Mensch und Tier"
                  width={600}
                  height={400}
                  style={{objectFit: 'cover'}}
                />
              </div>
            </div>
          </section>

          {/* Detaillierte Kursinhalte Section */}
          <section className="py-20 bg-gray-50 rounded-2xl">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold">{kursinhalteTitle}</h2>
                  <p className="text-xl text-gray-600 mt-4">{kursinhalteSubtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 text-lg">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold mb-4 text-[--highlight]">{vetTeilTitle}</h3>
                      <p>{vetTeilText}</p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold mb-4 text-[--highlight]">{kynoTeilTitle}</h3>
                      <p>{kynoTeilText}</p>
                  </div>
              </div>
          </section>

          {/* Lokaler Bezug & Gültigkeit Section */}
          <section className="py-20">
              <div className="text-center">
                  <h2 className="text-4xl font-bold mb-4">{gueltigkeitTitle}</h2>
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                    <p className="text-xl text-gray-600 max-w-xl">
                        {gueltigkeitText}
                    </p>
                    <a href={buchungslink} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-7 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                        {ctaButtonText}
                    </a>
                  </div>
              </div>
          </section>

          <HardfactsTabelle />
          <section className="py-20">
            <TerminTabelle termine={termine} buchungslink={buchungslink} />
          </section>

          {ablaufSection}

          {veranstalterSection}

          {podcastSection}
          
           <section className="py-20 text-center bg-gray-50 rounded-2xl">
            <h2 className="text-4xl font-bold mb-16">Deine Expertinnen</h2>
            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center group">
                <Image src="https://www.willenskraft.co.at/wp-content/uploads/2025/02/Mag.-Nicole-Nemeth-Sachkundenachweis.webp" alt="Tierärztin Mag. Nicole Nemeth für den Sachkundenachweis" width={200} height={200} className="rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"/>
                <h3 className="mt-6 text-2xl font-bold">Mag. Nicole Nemeth</h3>
                <p className="text-[--highlight] font-semibold">Tierärztin</p>
              </div>
               <div className="text-center group">
                <Image src="https://www.willenskraft.co.at/wp-content/uploads/2025/02/Jessy-Pusch-Hundeschule-Willenskraft-Sachkundenachweis.webp" alt="Hundetrainerin Jessy Pusch für den Sachkundenachweis" width={200} height={200} className="rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"/>
                <h3 className="mt-6 text-2xl font-bold">Jessy Pusch</h3>
                <p className="text-[--highlight] font-semibold">Hundetrainerin</p>
              </div>
              <div className="text-center group">
                <Image src="https://www.willenskraft.co.at/wp-content/uploads/2025/02/Bianca-Oriana-Willen-Sachkundenachweis.webp" alt="Hundetrainerin Bianca Oriana Willen für den Sachkundenachweis" width={200} height={200} className="rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"/>
                <h3 className="mt-6 text-2xl font-bold">Bianca Oriana Willen</h3>
                <p className="text-[--highlight] font-semibold">Hundetrainerin</p>
              </div>
            </div>
          </section>
          
          <section className="py-20">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-12">Häufig gestellte Fragen</h2>
            </div>
            <FaqAccordion />
          </section>

          <section className="py-20">
            <GoogleReviews />
          </section>
        </div>
      </main>
    </div>
  );
};