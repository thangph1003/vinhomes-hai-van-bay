import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinhomes Hải Vân Bay - Căn hộ cao cấp ven biển Đà Nẵng",
  description: "Vinhomes Hải Vân Bay - Tổ hợp căn hộ cao cấp ven biển tại thành phố Đà Nẵng. Kiến tạo cuộc sống hiện đại và đẳng cấp.",
  keywords: "Vinhomes, Hải Vân Bay, căn hộ, Đà Nẵng, ven biển, cao cấp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
