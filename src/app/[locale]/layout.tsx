import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Zele Church — Itaquera, São Paulo",
  description: "Igreja Zele Church do Pastor Chandde Ramos, localizada no bairro de Itaquera em São Paulo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}