import type { Metadata } from "next";
import {Cormorant, Inter, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import Head from 'next/head';

const cormorant = Cormorant({
  variable: "--font-cormorant",
  weight: ['700', '700'], // Weight normal dan bold
  subsets: ["latin"],
  display: 'swap', // Hindari FOIT (Flash of Invisible Text)
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  fallback: ['Inter'], // Fallback jika font gagal load
});

const lora = Lora({
  variable: "--font-lora",
  weight: ['400', '700'], // Weight normal dan bold
  subsets: ["latin"],
  display: 'swap', // Hindari FOIT (Flash of Invisible Text)
});

export const metadata: Metadata = {
  title: "Nandavdl - Music Personal",
  description: "Built with love on Next.js by Reyhanadr",
  openGraph: {
    images: [
      {
        url: 'https://cuowbtgwbrnmtxtsdlrj.supabase.co/storage/v1/object/public/Song%20Cover/nandavdl.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.className}>
      <Head>  
        <meta name="robots" content="noindex" />
      </Head>
      <body
        className={`${lora.variable} ${inter.variable} antialiased`}
      >
        <Header/>
        <main className="min-h-[calc(100vh-4rem)] pt-16 pb-16 md:pb-0">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
