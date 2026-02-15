import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Portfolio Template",
    template: "%s | Portfolio Template",
  },
  description:
    "Reusable developer portfolio template with featured projects, experience, and accessible light/dark mode.",
  keywords: [
    "developer portfolio",
    "software engineer portfolio",
    "next.js portfolio template",
    "react portfolio",
    "typescript portfolio",
    "frontend developer profile",
  ],
  authors: [{ name: "Abhishek Tumula" }],
  creator: "Abhishek Tumula",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Portfolio Template",
    description:
      "Reusable developer portfolio template with featured projects, experience, and accessible light/dark mode.",
    url: "/",
    siteName: "Portfolio Template",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Template",
    description:
      "Reusable developer portfolio template with featured projects, experience, and accessible light/dark mode.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
