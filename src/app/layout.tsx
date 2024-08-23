import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import SEO from "@/components/seo";
import Head from 'next/head'; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
    <Head>
        
        <meta name="google-site-verification" content="QZ_eIyMR6Fze3QAJcCQcGwaFzbL3T-z4Cj6Y-B1PozM" />
      </Head>
      <SEO />
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