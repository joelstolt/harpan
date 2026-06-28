import type { Metadata, Viewport } from "next";
import { Quicksand, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://www.forskolanharpan.se";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Förskolan Harpan – Kristen förskola med musikprofil i Hässleholm",
    template: "%s – Förskolan Harpan",
  },
  description:
    "En liten förskola med 31 barn, musikprofil och kristen värdegrund. Finjagatan 19, Hässleholm. Sök plats idag!",
  keywords: [
    "förskola Hässleholm",
    "kristen förskola",
    "musikförskola Hässleholm",
    "förskola Finjagatan",
    "Pingstkyrkan Hässleholm förskola",
  ],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: SITE_URL,
    siteName: "Förskolan Harpan",
    title: "Förskolan Harpan – Kristen förskola med musikprofil i Hässleholm",
    description:
      "En liten förskola med 31 barn, musikprofil och kristen värdegrund i Hässleholm.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Förskolan Harpan",
    description:
      "Kristen förskola med musikprofil i Hässleholm. 31 barn på två avdelningar.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7C948",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "Förskolan Harpan",
  description:
    "Kristen förskola med musikprofil i Hässleholm. 31 barn på två avdelningar – Pärlan och Diamanten.",
  url: SITE_URL,
  telephone: "+46732646157",
  email: "info@forskolanharpan.se",
  image: `${SITE_URL}/opengraph-image.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Finjagatan 19",
    postalCode: "281 50",
    addressLocality: "Hässleholm",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 56.159,
    longitude: 13.7665,
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Pingstkyrkan i Hässleholm",
  },
  areaServed: "Hässleholm",
  sameAs: ["https://www.instagram.com/forskolan_harpan/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${quicksand.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
