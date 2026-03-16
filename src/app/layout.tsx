import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Melbourne Web Agency | Websites That Win Customers",
  description:
    "We build high-converting websites for Melbourne tradespeople and service businesses. Plumbers, electricians, and local businesses — get more leads, more calls, more jobs.",
  keywords:
    "web design Melbourne, websites for tradies, plumber website Melbourne, electrician website Melbourne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
