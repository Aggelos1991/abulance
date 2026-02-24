import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IQ Driver Ambulette | Smart NEMT Platform",
  description:
    "One smart platform for all your medical transportation needs. AI-powered scheduling, dispatch, billing and more for non-emergency medical transportation.",
  keywords: [
    "NEMT",
    "medical transportation",
    "dispatch software",
    "paratransit",
    "MAS",
    "Modivcare",
    "MTM",
    "IQ Driver",
    "ambulette",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "IQ Driver Ambulette | Smart NEMT Platform",
    description:
      "AI-powered scheduling, dispatch, and billing — built for NEMT providers, brokers, and transportation companies.",
    siteName: "IQ Driver Ambulette",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IQ Driver Ambulette | Smart NEMT Platform",
    description:
      "AI-powered scheduling, dispatch, and billing — built for NEMT providers, brokers, and transportation companies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
