import type { Metadata } from "next";
import SparkClient from "./SparkClient";

export const metadata: Metadata = {
  title: "Project Spark Gallery — The Sandbox",
  description:
    "Browse 44+ project ideas across 6 categories. Filter by topic, level, and programming language. Find the project you can't stop thinking about.",
  authors: [{ name: "The Sandbox" }],
  robots: "index, follow",
  alternates: { canonical: "https://thesandboxclub.netlify.app/spark_gallery.html" },
  openGraph: {
    title: "Project Spark Gallery — The Sandbox",
    description:
      "44+ project ideas across Games, Web, AI, Data, Hardware, and Tools. Filter by level and language.",
    type: "website",
    url: "https://thesandboxclub.netlify.app/spark_gallery.html",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Spark Gallery — The Sandbox",
    description:
      "44+ project ideas across Games, Web, AI, Data, Hardware, and Tools.",
  },
};

export default function SparkPage() {
  return <SparkClient />;
}
