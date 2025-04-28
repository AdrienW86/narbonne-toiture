import './globals.css'
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Narbonne Toiture',
  description: "Narbonne Toiture – Spécialiste de la couverture, rénovation et entretien de toitures à Narbonne et ses environs. Intervention rapide, travail de qualité et conseils personnalisés pour protéger votre habitation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={oswald.className}>

        {children}
      </body>
    </html>
  );
}

