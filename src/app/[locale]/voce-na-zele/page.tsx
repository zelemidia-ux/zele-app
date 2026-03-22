export default function VoceNaZele() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
        Voce na Zele
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-16 text-lg leading-relaxed">
        Fotografamos cada culto para guardar esses momentos especiais. Aqui voce pode acessar e baixar suas fotos ou gerenciar sua privacidade.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Ver minhas fotos
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Procure por data, culto ou horario e baixe as fotos que quiser.
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            Em breve
          </span>
        </div>

        <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Nao quero aparecer
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            E seu direito. Preencha o formulario e nenhuma foto sua sera divulgada.
          </p>
          <button className="text-sm font-medium px-4 py-2 rounded-md border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            Solicitar opt-out
          </button>
        </div>
      </div>

      <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          As fotos dos cultos estao sendo organizadas. Em breve voce podera acessar tudo por aqui.
        </p>
      </div>
    </div>
  );
}