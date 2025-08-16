import React from 'react';

const hardFacts = [
  { label: 'Kursart', value: 'Online-Live-Kurs via Google Meet' },
  { label: 'Dauer', value: '3 Stunden' },
  { label: 'Gültigkeit', value: 'NÖ-weit und unbefristet' },
  { label: 'Zertifikat', value: 'Digitales Zertifikat direkt nach Kursende' },
  { label: 'Voraussetzung', value: 'Keine Vorkenntnisse notwendig' },
  { label: 'Trainer-Team', value: 'Zertifizierte Hundetrainer & Tierärztin' },
];

const HardfactsTabelle = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Alle Fakten auf einen Blick</h2>
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <table className="w-full text-left" aria-label="Hardfacts zum Sachkundenachweis">
            <tbody className="divide-y divide-gray-200">
              {hardFacts.map((fact, index) => (
                <tr key={fact.label} className={`transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <th scope="row" className="px-4 md:px-8 py-4 text-base md:text-lg font-semibold text-gray-800">
                    {fact.label}
                  </th>
                  <td className="px-4 md:px-8 py-4 text-base md:text-lg text-gray-600">
                    {fact.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default HardfactsTabelle;