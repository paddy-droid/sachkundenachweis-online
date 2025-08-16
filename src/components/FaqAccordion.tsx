"use client";
import { useState, ReactNode } from 'react';

type FaqItemProps = {
  question: string;
  children: ReactNode;
};

const FaqItem = ({ question, children }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <div className="pb-4 pr-8 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export const FaqAccordion = () => {
    const faqData = [
        {
            question: "Ist dieser Sachkundenachweis in ganz Niederösterreich gültig?",
            answer: "Ja, absolut. Unser Kurs wird von behördlich befugten Personen durchgeführt und das ausgestellte Zertifikat ist die offizielle Bestätigung gemäß der NÖ Hundehalte-Sachkundeverordnung 2023. Es wird in allen Gemeinden Niederösterreichs anerkannt."
        },
        {
            question: "Wann und wie erhalte ich meine Bestätigung?",
            answer: "Direkt nach erfolgreicher und vollständiger Teilnahme am 3-stündigen Online-Kurs senden wir dir deine personalisierte, offizielle Bestätigung als PDF-Dokument per E-Mail zu."
        },
        {
            question: "Was benötige ich für die Teilnahme am Online-Kurs?",
            answer: "Du benötigst lediglich einen Computer, ein Tablet oder ein Smartphone mit einer stabilen Internetverbindung und einem Mikrofon. Eine Kamera ist von Vorteil, aber nicht zwingend erforderlich. Der Kurs findet über Google Meet statt, du musst dafür nichts installieren."
        },
        {
            question: "Können auch Familienmitglieder am Online-Kurs teilnehmen?",
            answer: "Die Anmeldung und das Zertifikat gelten pro Person. Es ist jedoch absolut sinnvoll, wenn Partner oder Familienmitglieder, die im selben Haushalt leben, ebenfalls zuhören. Ein Zertifikat wird aber nur auf die angemeldete Person ausgestellt."
        },
        {
            question:"Ich habe schon jahrelang Hunde. Muss ich den Kurs trotzdem machen?",
            answer: "Das Gesetz ist hier eindeutig: Die Pflicht zur Absolvierung des Allgemeinen Sachkundenachweises gilt für alle Personen, die nach dem 1. Juni 2023 einen neuen Hund bei der Gemeinde anmelden und in den zwei Jahren davor keinen Hund gehalten haben."
        },
        {
            question: "Was passiert, wenn ich einen Termin verpasse?",
            answer: "Bitte gib uns so früh wie möglich Bescheid, wenn du nicht teilnehmen kannst. Wir finden sicher eine Lösung und können dich in der Regel unkompliziert auf einen der nächsten Termine umbuchen."
        }
    ];

  return (
    <div className="max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question}>
                <p>{faq.answer}</p>
            </FaqItem>
        ))}
    </div>
  );
};