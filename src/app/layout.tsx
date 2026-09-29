import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "The Sandbox — Technology Club",
  description:
    "An after-school technology club where students choose their own project and build it at their own pace, with a teacher on hand to help. For KS3 to A Level, no experience needed.",
  authors: [{ name: "The Sandbox" }],
  robots: "index, follow",
  alternates: { canonical: "/" },
  icons: {
    icon: "/assets/icons/favicon.ico",
    apple: "/assets/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "The Sandbox — Technology Club",
    description:
      "An after-school club where students choose their own project, work at their own pace, and leave with something real.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/assets/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "The Sandbox Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sandbox — Technology Club",
    description:
      "An after-school club where students choose their own project, work at their own pace, and leave with something real.",
    images: ["/assets/icons/icon-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmMono.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
