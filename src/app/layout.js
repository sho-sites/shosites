import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "sho sites — Websites for orgs, clubs, and businesses",
  description:
    "sho sites builds clean, fast, themed brochure sites for orgs, clubs, and businesses, $5–$25 depending on complexity.",
  metadataBase: new URL("https://shosites.example"), // update on deploy
  openGraph: {
    title: "sho sites — Websites for orgs, clubs, and businesses",
    description:
      "Clean, fast brochure sites showcasing who you are, what you do, and how to reach you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "sho sites",
    description:
      "Brochure websites for orgs, clubs, and businesses, $5–$25 depending on complexity.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
