import type { Metadata } from "next";
import { Crimson_Text, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateMetadata } from "@/lib/generateMetadata";
import PopupForm from "@/components/PopupForm";

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${crimsonText.variable} ${montserrat.variable} font-crimson-text antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="grow">
          {children}
        </main>
        <PopupForm />
        <Footer />
      </body>
    </html>
  );
}
