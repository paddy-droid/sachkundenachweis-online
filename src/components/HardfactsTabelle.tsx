import React from 'react';

interface Fact {
  label: string;
  value: string;
}

interface HardfactsTabelleProps {
  items: Fact[];
}

const HardfactsTabelle = ({ items }: HardfactsTabelleProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Alle Fakten auf einen Blick</h2>
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <table className="w-full text-left" aria-label="Hardfacts zum Sachkundenachweis">
            <tbody className="divide-y divide-gray-200">
              {items.map((fact, index) => (
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