export default function Ministerios() {
  const ministerios = [
    { nome: "Louvor", desc: "Ministério de música e adoração que conduz a igreja à presença de Deus." },
    { nome: "Jovens", desc: "Ministério dedicado aos jovens com eventos, discipulado e comunhão." },
    { nome: "Crianças", desc: "Cuidado e ensino bíblico para as crianças da igreja." },
    { nome: "Intercessão", desc: "Ministério de oração e intercessão pela igreja e pela cidade." },
    { nome: "Ação Social", desc: "Servindo a comunidade de Itaquera com amor e cuidado prático." },
    { nome: "Comunicação", desc: "Transmissões, redes sociais e produção de conteúdo da igreja." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Ministérios</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-16 text-lg">Encontre o seu lugar e sirva com seus dons.</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {ministerios.map((m) => (
          <div key={m.nome} className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{m.nome}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}