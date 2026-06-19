import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {

  title: "ACX | Digital Solutions & Web Development",

  description:
    "ACX creates modern websites, web applications and digital solutions combining technology, creativity and innovation.",


  keywords: [
    "ACX",
    "Web Development",
    "Full Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Flask",
    "Software Solutions",
    "Digital Agency",
  ],


  authors: [
    {
      name: "Adem Chebbi",
    },
  ],


  creator: "ACX",


  metadataBase: new URL(
    "https://acx.com"
  ),


  openGraph: {

    title:
      "ACX | Think, Believe, Make It Happen.",

    description:
      "Building premium digital experiences, websites and software solutions.",

    siteName: "ACX",

    locale: "en_US",

    type: "website",

  },


  twitter: {

    card: "summary_large_image",

    title:
      "ACX | Digital Solutions & Web Development",

    description:
      "Modern websites, applications and software solutions.",

  },


  themeColor: "#000000",

};


export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >


      <body
        className="
        min-h-screen
        flex
        flex-col
        bg-black
        text-white
        "
      >


        <Navbar />


        <main className="flex-1">
          {children}
        </main>


        <Footer />


      </body>


    </html>

  );

}
