"use client";
import { metadata } from "@/app/metadata";
import { Poppins } from "next/font/google";
import NavBar from "@/ui/NavBar/navbar";
import Footer from "@/ui/Footer/footer";
import { Mystyle } from "@/styles/mystyles";

const poppins = Poppins({ subsets: ["latin"], weight: ["700", "400"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Mystyle>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Mystyle>
      </body>
    </html>
  );
}

