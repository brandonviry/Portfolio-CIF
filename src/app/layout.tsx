import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layout/header";
import Footer from "@/layout/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio CIF | VIRY Brandon",
  description: "Cette application web rassemble les projets faits lors de la formation CIF",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Portfolio CIF | VIRY Brandon',
    description: 'Découvrez les projets réalisés lors de la formation CIF par Brandon VIRY.',
    images: [
      {
        url: 'https://i.ibb.co/yg9ZgwB/Logo-Porfolio.png',
        width: 800,
        height: 600,
        alt: 'Logo Portfolio',
      },
    ],
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

      <body className={inter.className}>
     
        <Header />
        <main className="bg-sky-900">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}