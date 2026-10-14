import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://summer-holiday-redesign.vercel.app"),
  title: {
    default: "Summer Holiday — wakacje szyte na miarę",
    template: "%s | Summer Holiday",
  },
  description:
    "Biuro podróży Summer Holiday w Pszowie. Wakacje rodzinne, podróże dla par, wyjazdy firmowe i oferty szyte na miarę.",
  applicationName: "Summer Holiday",
  keywords: ["biuro podróży", "wakacje", "wczasy", "last minute", "Summer Holiday"],
  openGraph: {
    title: "Summer Holiday — wakacje szyte na miarę",
    description: "Odkryj starannie wybrane kierunki i zaplanuj swój wymarzony wyjazd.",
    type: "website",
    locale: "pl_PL",
    url: "/",
    images: ["/images/hero-mediterranean.webp"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
