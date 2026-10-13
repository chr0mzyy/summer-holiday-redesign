import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://summer-holiday-redesign.vercel.app"),
  title: {
    default: "Summer Holiday — wakacje szyte na miarę",
    template: "%s | Summer Holiday",
  },
  description:
    "Nowa koncepcja serwisu biura podróży Summer Holiday. Luksusowy interfejs inspirowany Morzem Śródziemnym.",
  applicationName: "Summer Holiday",
  keywords: ["biuro podróży", "wakacje", "wczasy", "last minute", "Summer Holiday"],
  openGraph: {
    title: "Summer Holiday — wakacje szyte na miarę",
    description: "Odkryj starannie wybrane kierunki i zaplanuj swój wymarzony wyjazd.",
    type: "website",
    locale: "pl_PL",
    images: ["/images/hero-mediterranean.webp"],
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
