import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PurwoEats - Cari Kuliner Purworejo",
  description:
    "Platform kuliner lokal Purworejo. Temukan cafe, eatery, dan UMKM makanan terbaik.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
