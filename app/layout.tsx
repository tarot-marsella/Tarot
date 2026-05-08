import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import AmbientAudio from "@/components/AmbientAudio";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-serif" });

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tarotdemarsella.cl";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Tarot de Marsella — Tirada de Tarot Gratis Online | Arcanos Mayores",
    template: "%s | Tarot de Marsella",
  },
  description:
    "Tirada de tarot gratis online con los 22 Arcanos Mayores del Tarot de Marsella. Lectura interactiva, significado profundo y consejo espiritual personalizado.",
  keywords: [
    "tarot gratis",
    "free tarot",
    "tarot de marsella",
    "leer cartas tarot",
    "tirada de tarot",
    "tarot online",
    "tarot",
    "marsella",
    "tarotistas",
    "arcanos mayores",
  ],
  authors: [{ name: "Tarot de Marsella", url: BASE_URL }],
  creator: "Tarot de Marsella",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: BASE_URL,
    siteName: "Tarot de Marsella",
    title: "Tarot de Marsella — Tirada de Tarot Gratis Online",
    description:
      "Descubre el significado de los 22 Arcanos Mayores. Tirada de tarot gratis con interpretación psicológica y espiritual.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarot de Marsella — Tirada Gratis Online",
    description:
      "Lectura interactiva de tarot gratis con los Arcanos Mayores del Tarot de Marsella.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tIEGEf-xn67c6taBEbCcwNDu2V6USyK_L0ZDVmUVaSc",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tarot de Marsella",
  url: BASE_URL,
  description:
    "Plataforma líder en lectura de Tarot de Marsella en español. Tiradas gratis, significado de arcanos y guías de aprendizaje.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tarot de Marsella",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/arcanos-mayores/{search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className={`${inter.variable} ${cinzel.variable}`}>
        <GoogleAnalytics />
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        <AmbientAudio />
      </body>
    </html>
  );
}
