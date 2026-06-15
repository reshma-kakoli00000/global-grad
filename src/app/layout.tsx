import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootClientProvider from "./RootClientProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlobalGrad Tracker - Master Your Global Education Journey",
  description:
    "The ultimate academic concierge for study abroad applications. Organize applications, track progress, and bridge the gap to your dream university.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <RootClientProvider>{children}</RootClientProvider>
      </body>
    </html>
  );
}
