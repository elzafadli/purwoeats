import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purwoeats | Food Delivery Lokal Purwokerto",
  description:
    "Pesan makanan lokal Purwokerto dari warung, kopi, dan dapur favorit lewat Purwoeats.",
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
