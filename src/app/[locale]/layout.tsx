import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "sonner";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Zele Church — Itaquera, São Paulo",
    template: "%s | Zele Church",
  },
  description: "Igreja Zele Church do Pastor Chandde Ramos. Cultos aos Domingos 10h e 18h30 e Quintas 20h. Av. Jacu Pessego, 7639 — Itaquera, São Paulo.",
  keywords: ["igreja", "Zele Church", "Itaquera", "São Paulo", "culto", "Pastor Chandde Ramos", "evangelica"],
  authors: [{ name: "Zele Church" }],
  creator: "Zele Church",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://zelechurch.com.br",
    siteName: "Zele Church",
    title: "Zele Church — Itaquera, São Paulo",
    description: "Igreja Zele Church do Pastor Chandde Ramos. Cultos aos Domingos e Quintas em Itaquera, São Paulo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zele Church",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zele Church — Itaquera, São Paulo",
    description: "Igreja Zele Church do Pastor Chandde Ramos.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${geist.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors min-h-screen flex flex-col`}>
        <SmoothScroll>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster richColors position="bottom-right" />
        </SmoothScroll>
      </body>
    </html>
  );
}