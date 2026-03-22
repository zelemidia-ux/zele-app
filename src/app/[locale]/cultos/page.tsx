export default function Cultos() {
  const cultos = [
    {
      dia: "Domingo",
      horarios: ["09h00 — Culto da Manhã", "19h00 — Culto da Noite"],
      descricao: "Culto principal da semana com louvor, palavra e comunhão.",
    },
    {
      dia: "Quarta-feira",
      horarios: ["20h00 — Culto de Ensino"],
      descricao: "Estudo aprofundado da Palavra de Deus.",
    },
    {
      dia: "Sexta-feira",
      horarios: ["20h00 — Culto de Oração"],
      descricao: "Noite dedicada à oração e intercessão.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
        Cultos
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-16 text-lg">
        Venha nos visitar! Nossos cultos acontecem presencialmente no bairro de Itaquera, São Paulo.
      </p>

      <div className="flex flex-col gap-6">
        {cultos.map((culto) => (
          <div
            key={culto.dia}
            className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {culto.dia}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {culto.descricao}
            </p>
            <div className="flex flex-col gap-2">
              {culto.horarios.map((h) => (
                <span
                  key={h}
                  className="inline-block text-sm font-medium px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 w-fit"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Como chegar
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Bairro de Itaquera, São Paulo — SP
        </p>
      </div>
    </div>
  );
}