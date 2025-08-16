export const TerminTabelle = () => {
    const termine = [
        { datum: "MI 24.09.25", zeit: "17:30-20:30", preis: "85,00 €" },
        { datum: "MI 22.10.25", zeit: "17:30-20:30", preis: "85,00 €" },
        { datum: "MI 19.11.25", zeit: "17:30-20:30", preis: "85,00 €" },
        { datum: "MI 17.12.25", zeit: "17:30-20:30", preis: "85,00 €" },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 bg-gray-50">
                    <h3 className="text-2xl font-bold text-center text-gray-800">Die nächsten Termine im Überblick</h3>
                </div>
                <div className="flex flex-col">
                    {/* Table Header */}
                    <div className="grid grid-cols-3 gap-4 px-6 py-4 font-bold text-lg text-left bg-gray-100 text-gray-600">
                        <div>Datum</div>
                        <div>Uhrzeit</div>
                        <div className="text-right">Preis</div>
                    </div>

                    {/* Table Body */}
                    {termine.map((termin, index) => (
                        <div key={index} className="grid grid-cols-3 gap-4 items-center px-6 py-5 border-t border-gray-200">
                            <div className="font-semibold">{termin.datum}</div>
                            <div>{termin.zeit}</div>
                            <div className="font-bold text-right">{termin.preis}</div>
                        </div>
                    ))}
                </div>
            </div>
             <div className="text-center mt-10">
                 <p className="text-lg mb-4">Mit deiner Buchung meldest du dich automatisch zum nächstmöglichen Termin an.</p>
                <a href="https://www.willenskraft.co.at/produkt/sachkundenachweis-niederoesterreich/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Jetzt Termin buchen
                </a>
            </div>
        </div>
    );
};