"use client";
import React from "react";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
// import "/node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

// import "https://fonts.googleapis.com/css?family=Lato:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7C
// Open+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7C
// Indie+Flower:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i%7C
// Oswald:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i";
// import { Lato,  } from "next/font/google";

// const lato = Lato({
//   weight: '400',
//   subsets: ['latin'],
// })
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
