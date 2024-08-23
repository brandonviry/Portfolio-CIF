import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import SEO from "@/components/seo";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <SEO />
        <Header />
        <main className="bg-sky-900">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}