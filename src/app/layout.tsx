import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio CIF | VIRY Brandon ",
  description: "Cette application web rassemble les projets fait lors de la formation CIF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className+" bg-teal-600"}>{children} 
       
      
      
      </body>
    </html>
  );
}
