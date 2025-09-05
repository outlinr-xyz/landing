import Navigation from "@/components/navbar";
import Footer from "@/components/footer";
import { siteConfig } from "./site-config";
import { spaceGrotesk, pressStart } from "@/app/fonts"
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://outlinr.xyz"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Interactive", "Presentation", "Software"],
  authors: [
    {
      name: "David Bakare",
      url: "https://3akare.vercel.app",
    },
  ],
  creator: "Outlinr inc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@3akare",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${pressStart.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html >
  );
}
