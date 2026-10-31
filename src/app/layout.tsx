import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pushpendra Deegwal | Full Stack Developer & AI Enthusiast",
  description:
    "Personal Portfolio of Pushpendra Deegwal — Integrated Dual Degree (B.Tech + M.Tech) student in CS & AI at RGIPT. Full Stack & AI Developer.",
  keywords: [
    "Pushpendra Deegwal",
    "Full Stack Developer",
    "AI Developer",
    "RGIPT",
    "Next.js Portfolio",
    "React Developer",
    "Machine Learning",
  ],
  authors: [{ name: "Pushpendra Deegwal" }],
  openGraph: {
    title: "Pushpendra Deegwal | Full Stack Developer & AI Enthusiast",
    description: "Creative interactive portfolio of Pushpendra Deegwal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#05070c] text-slate-100 bg-noise selection:bg-blue-500 selection:text-white`}
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
