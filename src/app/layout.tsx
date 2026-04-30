import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Outfit } from "next/font/google";
import "./globals.css";

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
  title: "Built by Students — The Sandbox",
  description:
    "Real projects, built by real students. Browse the showcase of student work from The Sandbox technology club.",
  authors: [{ name: "The Sandbox" }],
  robots: "index, follow",
  alternates: { canonical: "https://thesandboxclub.netlify.app/showcase.html" },
  openGraph: {
    title: "Built by Students — The Sandbox",
    description:
      "Real projects, built by real students during Sandbox sessions. No templates, no shortcuts.",
    type: "website",
    url: "https://thesandboxclub.netlify.app/showcase.html",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built by Students — The Sandbox",
    description:
      "Real projects, built by real students during Sandbox sessions.",
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
        {children}
      </body>
    </html>
  );
}
