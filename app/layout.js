import './globals.css';
import { Oswald } from 'next/font/google';
import Script from 'next/script';

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

        {/* Google Tag Manager (gtag.js) */}
        <Script 
          strategy="afterInteractive" 
          src="https://www.googletagmanager.com/gtag/js?id=AW-17052567926" 
          async 
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-17052567926');
            `,
          }}
        />
      </head>
      <body className={oswald.className}>
        {children}
      </body>
    </html>
  );
}
