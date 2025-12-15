"use client";

interface Termin {


    datum: string;
    zeit: string;
    preis: string;
}

interface TerminTabelleProps {
    termine: Termin[];
    buchungslink: string;
}

export const TerminTabelle = ({ termine, buchungslink }: TerminTabelleProps) => {
    return (
        <div className="landing-table-container w-full max-w-[1200px] mx-auto p-5">
            <style jsx global>{`
                @media (max-width: 600px) {
                    .full-width-table th,
                    .full-width-table td {
                        padding: 14px !important;
                        font-size: 1.2em !important;
                        line-height: 1.6 !important;
                    }
                }
            `}</style>
            <div className="full-width-table-wrapper w-full overflow-x-auto">
                <table className="full-width-table w-full border-collapse table-fixed">
                    <thead>
                        <tr>
                            <th className="p-4 border border-[#ddd] text-center text-[1.4em] leading-[1.5] bg-[#f7941d] text-white">Datum</th>
                            <th className="p-4 border border-[#ddd] text-center text-[1.4em] leading-[1.5] bg-[#f7941d] text-white">Uhrzeit</th>
                            <th className="p-4 border border-[#ddd] text-center text-[1.4em] leading-[1.5] bg-[#f7941d] text-white">Kosten</th>
                        </tr>
                    </thead>
                    <tbody>
                        {termine.map((termin, index) => (
                            <tr key={index} className="cursor-pointer hover:bg-gray-50 transition-colors">
                                <td className="p-4 border border-[#ddd] text-center text-[1.4em] leading-[1.5] text-black bg-white">{termin.datum}</td>
                                <td className="p-4 border border-[#ddd] text-center text-[1.4em] leading-[1.5] text-black bg-white">{termin.zeit}</td>
                                <td className="p-4 border border-[#ddd] text-center text-[1.4em] leading-[1.5] text-black bg-white">{termin.preis}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-center mt-10">
                <p className="text-lg mb-4 text-black">Mit deiner Buchung meldest du dich automatisch zum nächstmöglichen Termin an.</p>
                <a href={buchungslink} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#f7941d] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Jetzt Termin buchen
                </a>
            </div>
        </div>
    );
};