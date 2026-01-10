import type { Metadata } from "next";
import { Outfit, Noto_Sans_JP } from "next/font/google"; // Updated fonts
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rimuru | Game Creator Portfolio",
  description: "Official portfolio of Rimuru, a 20-million-year-old game creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${outfit.variable} ${notoSansJP.variable} antialiased font-sans bg-background text-foreground overflow-x-hidden selection:bg-cyan-200 selection:text-cyan-900`}
      >
        {children}
      </body>
    </html>
  );
}
