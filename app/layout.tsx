import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
// import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Riskout Consults",
  description: "Best Travel Agency and Educational Consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
