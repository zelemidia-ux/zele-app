import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membros",
  description: "Acesse sua conta na Zele Church.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}