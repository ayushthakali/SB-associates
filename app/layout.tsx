import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "S.B. Thakali & Associates | Accounting, Audit & Tax Services",
  description:
    "S.B. Thakali & Associates – Trusted Chartered Accountants in Pokhara specializing in Accounting, Taxation, Audit, and Business Advisory. Professional solutions delivered with integrity and excellence for businesses and individuals.",
  keywords: [
    "Accounting",
    "Audit",
    "Taxation",
    "Business Advisory",
    "Pokhara",
    "Samip Thakali",
    "CA",
    "Associates",
  ],
  authors: [{ name: "S.B. Thakali & Associates" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "S.B. Thakali & Associates | Accounting, Audit & Tax Services",
    description:
      "Trusted partners in Accounting, Taxation, Audit, and Business Advisory in Pokhara.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "S.B. Thakali & Associates preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.B. Thakali & Associates | Accounting, Audit & Tax Services",
    description:
      "Trusted partners in Accounting, Taxation, Audit, and Business Advisory in Pokhara.",
    images: ["/preview.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
