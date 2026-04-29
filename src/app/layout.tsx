import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "elumalab",
  description: "WhatsApp-basierte SaaS Plattform für Vertrieb und Kundenservice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
