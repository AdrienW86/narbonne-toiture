import './globals.css'
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Narbonne Toiture',
  description: "Elite Couverture – Spécialiste en couverture et peinture dans le 66. Interventions rapides et travaux de qualité dans tout le département des Pyrénées-Orientales. Toitures, façades, intérieurs : votre expert local.",
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

