import { Chakra_Petch, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layout/header";
import Footer from "@/layout/footer";



const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://portfolio-cif.vercel.app";
const siteDescription =
  "Portfolio de Brandon VIRY présentant les projets réalisés pendant sa formation CIF et les compétences transversales développées au fil du parcours.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portfolio CIF | Brandon VIRY",
    template: "%s | Portfolio CIF",
  },
  description: siteDescription,
  applicationName: "Portfolio CIF",
  authors: [{ name: "Brandon VIRY" }],
  creator: "Brandon VIRY",
  publisher: "Brandon VIRY",
  keywords: [
    "Portfolio CIF",
    "Brandon VIRY",
    "formation CIF",
    "projets",
    "compétences transversales",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/assets/brand/favicon-bv.svg", type: "image/svg+xml" }],
    shortcut: "/assets/brand/favicon-bv.svg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Portfolio CIF | Brandon VIRY",
    title: "Portfolio CIF | Brandon VIRY",
    description: siteDescription,
    images: [
      {
        url: "/assets/brand/open-graph-portfolio.png",
        width: 1728,
        height: 910,
        alt: "Portfolio CIF de Brandon VIRY — Un parcours CIF, projet après projet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio CIF | Brandon VIRY",
    description: siteDescription,
    images: ["/assets/brand/open-graph-portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
    <head>
        
        <meta name="google-site-verification" content="QZ_eIyMR6Fze3QAJcCQcGwaFzbL3T-z4Cj6Y-B1PozM" />
      
      </head>

      <body className={`${inter.variable} ${chakraPetch.variable} font-sans`}>
     
        <Header />
        <main className="bg-brand-bg">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
