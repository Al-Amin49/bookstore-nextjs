import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book store app",
  description: "For see different kind of books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
       <div className="min-h-screen"> 
       {children}
       </div>
       <Footer/>
        </body>
    </html>
  );
}
