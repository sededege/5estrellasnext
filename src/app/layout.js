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
      <Header />
      <Navbar />
     {/*  <div className="z-[1000] fixed">
          <WhatsAppWidget
            className="z-[10000]"
            phoneNumber="+59898412760"
            sendButton="Enviar"
            message="Hola! 👋🏼 En que te podemos ayudar?"
            replyTimeText="Suele responder dentro de 1 hora"
            companyName="5 estrellas"
          />
        </div> */}
      <body className="p-10 mt-24 h-full bg-white">{children}</body>
      <Footer />
    </html>
  );
}
