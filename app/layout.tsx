import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Tarot de Marsella",
  description: "Una experiencia inmersiva y mística para interactuar con los Arcanos Mayores del Tarot de Marsella.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cinzel.variable}`}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        <audio id="bg-audio" loop src="/audio/ambient.mp3" preload="none"></audio>
      </body>
    </html>
  );
}
