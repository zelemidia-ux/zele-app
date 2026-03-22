import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Batismo",
  description: "Deseja se batizar na Zele Church? Preencha o formulario e nossa equipe entrara em contato para agendar sua data de batismo.",
};

export default function BatismoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}