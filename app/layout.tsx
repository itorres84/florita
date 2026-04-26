import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Florita | Diseño floral para bodas y eventos",
  description:
    "Diseño floral y ambientación para bodas y eventos en Tepoztlán.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
