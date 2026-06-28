import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhishek-chaudhri.vercel.app"),

  title: {
    default: "Abhishek Chaudhri",
    template: "%s | Abhishek Chaudhri",
  },

  description:
    "Frontend Software Engineer specializing in React, Next.js, TypeScript and enterprise frontend performance.",

  keywords: [
    "React",
    "Next.js",
    "Frontend Engineer",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Performance",
    "Goldman Sachs",
  ],

  authors: [
    {
      name: "Abhishek Chaudhri",
    },
  ],

  creator: "Abhishek Chaudhri",

  openGraph: {
    title: "Abhishek Chaudhri",

    description:
      "Frontend Software Engineer building performant enterprise applications.",

    url: "https://abhishek-chaudhri.vercel.app",

    siteName: "Abhishek Chaudhri",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Abhishek Chaudhri",

    description:
      "Frontend Software Engineer building performant enterprise applications.",
  },

  robots: {
    index: true,
    follow: true,
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
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}