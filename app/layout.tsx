import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anouck AMAR — Praticienne PNL / Hypnose / Ennéagramme",
  description: "Séance de clarté et orientation. Cabinet / Visio — sur rendez-vous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">
        <Script
          defer
          data-domain="anouckamar.fr"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
