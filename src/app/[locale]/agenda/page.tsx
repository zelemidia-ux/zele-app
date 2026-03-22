export default function Agenda() {
  const eventos = [
    { data: "30 Mar", titulo: "Culto de Páscoa", desc: "Celebração especial de Páscoa com toda a família.", horario: "18h00" },
    { data: "06 Abr", titulo: "Conferência de Jovens", desc: "Evento especial para jovens com louvor e palavra.", horario: "19h00" },
    { data: "13 Abr", titulo: "Dia das Mães", desc: "Culto especial em homenagem às mães da igreja.", horario: "10h00" },
    { data: "20 Abr", titulo: "Retiro de Casais", desc: "Retiro especial para casais fortalecerem o relacionamento.", horario: "08h00" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Agenda</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-16 text-lg">Fique por dentro dos próximos eventos da Zele Church.</p>
      <div className="flex flex-col gap-4">
        {eventos.map((e) => (
          <div key={e.titulo} className="flex gap-6 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="text-center min-w-16">
              <span className="text-2xl font-bold text-gray-900 dark:text-white block">{e.data.split(" ")[0]}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{e.data.split(" ")[1]}</span>
            </div>
            <div className="border-l border-gray-200 dark:border-gray-800 pl-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{e.titulo}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{e.desc}</p>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">{e.horario}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}