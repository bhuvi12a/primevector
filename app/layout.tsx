import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PrimeCraft Interiors | Premier Interior Design Studio",
  description: "Transform your space with PrimeCraft Interiors' innovative interior design solutions. Specializing in residential, commercial, and renovation projects with cutting-edge 3D visualization.",
  keywords: ["interior design", "home design", "commercial design", "renovation", "3D visualization", "interior decorator"],
  authors: [{ name: "PrimeCraft Interiors" }],
  openGraph: {
    title: "PrimeCraft Interiors | Premier Interior Design Studio",
    description: "Transform your space with innovative interior design solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
