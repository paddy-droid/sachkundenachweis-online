import React from 'react';

const InfoCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
    <div className="space-y-3 text-gray-700">
      {children}
    </div>
  </div>
);

export const InfoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Der Sachkundenachweis für Hunde in Österreich
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alles, was Sie über die aktuellen Regelungen und die neue Gesetzesnovelle 2024 wissen müssen.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <InfoCard title="Was ist der Sachkundenachweis?">
            <p>
              In Bundesländern wie Niederösterreich und Salzburg ist ein Sachkundenachweis vor der Anschaffung eines Hundes gesetzlich vorgeschrieben. Dieser Kurs vermittelt Ihnen essenzielles Wissen über Hundehaltung, Verhalten, Gesundheit und die rechtlichen Rahmenbedingungen. Unser Online-Kurs macht es Ihnen einfach, diese Anforderung bequem von zu Hause aus zu erfüllen.
            </p>
          </InfoCard>

          <InfoCard title="Die große Neuerung: Tierschutzgesetz-Novelle 2024">
            <p>
              Ab dem <strong>1. Juli 2026</strong> wird ein bundesweit einheitlicher Sachkundenachweis für alle neuen Hundehalter:innen in Österreich zur Pflicht. Diese Maßnahme soll Spontankäufe verhindern und sicherstellen, dass jeder Hund in ein verantwortungsbewusstes Zuhause kommt.
            </p>
            <p>
              Der neue Nachweis umfasst einen <strong>4-stündigen Theorieteil</strong>, der vor der Anschaffung des Hundes absolviert werden muss, und eine <strong>2-stündige Praxiseinheit</strong> mit dem Hund.
            </p>
          </InfoCard>

          <InfoCard title="Was bedeutet das für Sie?">
            <p>
              <strong>Für Niederösterreich & Salzburg:</strong> Die bestehenden Kurse bleiben relevant. Es ist wahrscheinlich, dass die Länderregelungen angepasst und mit dem neuen Bundesgesetz kombiniert werden. Mit unserem aktuellen Kurs sind Sie bestens vorbereitet.
            </p>
            <p>
              <strong>Bundesweit ab 2026:</strong> Wer einen neuen Hund aufnimmt, muss den neuen bundesweiten Nachweis erbringen. Die Praxiseinheit ist dann mit jedem neuen Hund zu absolvieren.
            </p>
          </InfoCard>

          <InfoCard title="Weitere wichtige Änderungen">
            <p>
              Die Novelle verschärft auch die Regeln gegen <strong>Qualzucht</strong> und den <strong>illegalen Welpenhandel</strong>. Züchter werden stärker in die Verantwortung genommen und der Erwerb von wissentlich illegal angebotenen Tieren wird ebenfalls strafbar.
            </p>
            <p>
               Eine neue wissenschaftliche Kommission wird Zuchtprogramme prüfen und so das Tierwohl nachhaltig stärken.
            </p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
};