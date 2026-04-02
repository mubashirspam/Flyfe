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
  title: "FLYFE Developers Private Limited | Coming Soon",
  description: "Building the future of development. FLYFE Developers Private Limited - Premium software development services.",
  keywords: ["FLYFE", "developers", "software", "web development", "app development", "coming soon"],
  authors: [{ name: "FLYFE Developers Private Limited" }],
  openGraph: {
    title: "FLYFE Developers Private Limited | Coming Soon",
    description: "Building the future of development",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white">{children}</body>
    </html>
  );
}
