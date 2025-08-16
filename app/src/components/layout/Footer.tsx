import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-10 text-center">
        <p className="font-semibold text-lg">&copy; {new Date().getFullYear()} Sachkundenachweis Online</p>
        <p className="text-sm text-gray-400 mb-4">Alle Rechte vorbehalten.</p>
        <div className="flex justify-center space-x-6">
          <Link href="/impressum" className="hover:underline">Impressum</Link>
          <Link href="/datenschutz" className="hover:underline">Datenschutz</Link>
          <Link href="/agb" className="hover:underline">AGB</Link>
        </div>
      </div>
    </footer>
  );
};