import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Header from "./components/navbarup";
import Footer from "./components/footer";
/* import { WhatsAppWidget } from "react-whatsapp-widget";
import React from "react"; */

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "5 Estrellas - Inicio",
  description: "Esta es la página principal",
  keywords: [
    "tienda, online, paños, eccomerce, uruguay, paños de piso, 5 estrellas",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mt-24 pt-10 h-full bg-white">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
