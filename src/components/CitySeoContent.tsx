import React from 'react';

interface CitySeoContentProps {
    cityName: string;
    introText: string;
    subHeadline: string;
    mainText: string;
    bulletPointsTitle: string;
    bulletPoints: string[];
    closingText: string;
}

export const CitySeoContent: React.FC<CitySeoContentProps> = ({
    cityName,
    introText,
    subHeadline,
    mainText,
    bulletPointsTitle,
    bulletPoints,
    closingText,
}) => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-orange-50/30">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <span className="inline-block py-2 px-4 rounded-full bg-orange-100 text-orange-600 text-sm font-bold tracking-wider uppercase mb-4">
                        Exklusiv für {cityName}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Der <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Sachkundenachweis</span> in {cityName}
                    </h2>
                    <div className="w-32 h-2 bg-orange-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        {introText}
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-7 bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">{subHeadline}</h3>
                            <div className="prose prose-lg text-gray-600 leading-relaxed">
                                <p>{mainText}</p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <p className="italic text-gray-500 font-medium">"{closingText}"</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5 space-y-8 sticky top-24">
                        <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-orange-500 rounded-full blur-2xl opacity-40"></div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span className="text-2xl">✨</span> {bulletPointsTitle}
                            </h3>
                            <ul className="space-y-4">
                                {bulletPoints.map((point, index) => (
                                    <li key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/10 transition-colors">
                                        <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                                        <span className="text-gray-200 font-medium leading-snug">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-orange-100 p-8 rounded-3xl border border-orange-200 text-center">
                            <h4 className="font-bold text-orange-900 mb-4">Noch Fragen offen?</h4>
                            <p className="text-orange-700 mb-6 text-sm">Unser Experten-Team hilft dir gerne weiter.</p>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:oriana.willen@willenskraft.co.at" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-xl shadow-sm hover:shadow-md transition-all border border-orange-100">
                                    📧 E-Mail senden
                                </a>
                                <a href="tel:+436645322221" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-xl shadow-sm hover:shadow-md transition-all border border-orange-100">
                                    📞 Anrufen (+43 664 532 22 21)
                                </a>
                                <a href="https://wa.me/436645322221" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl shadow-sm hover:shadow-md transition-all hover:bg-[#20bd5a]">
                                    💬 WhatsApp Chat
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
