import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flyfe Developers — Building Tomorrow's Landmarks",
  description:
    "Premium luxury properties and resort developments in Wayanad, Kerala. Flyfe Developers crafts landmark real estate for discerning investors and homeowners.",
  keywords: [
    "Flyfe Developers",
    "luxury real estate",
    "Wayanad",
    "Kerala",
    "resort development",
    "NRI investment",
    "Balhiz Vista",
  ],
  authors: [{ name: "Flyfe Developers Pvt. Ltd." }],
  openGraph: {
    title: "Flyfe Developers — Building Tomorrow's Landmarks",
    description: "Premium luxury properties and resort developments in Wayanad, Kerala.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
