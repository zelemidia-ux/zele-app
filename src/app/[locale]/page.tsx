export default function Home() {
  return (
    <div className="flex flex-col">

      <section className="flex flex-col items-center justify-center text-center px-4 py-32 bg-white dark:bg-gray-950">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          Bem-vindo à Zele Church
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-xl mb-10">
          Uma igreja que transforma vidas no bairro de Itaquera, São Paulo.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/cultos" className="px-6 py-3 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity">
            Nossos Cultos
          </a>
          <a href="/contato" className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            Fale Conosco
          </a>
        </div>
      </section>

      <div className="border-t border-gray-100 dark:border-gray-800" />

      <section className="max-w-7xl mx-auto px-4 py-24 grid sm:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Nossa Missão
          </h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Amar a Deus e ao próximo, fazendo discípulos em todas as nações através do amor, da palavra e da comunidade.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Nossa Visão
          </h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Ser uma igreja relevante que impacta a comunidade de Itaquera e além, levando esperança e transformação.
          </p>
        </div>
      </section>

      <div className="border-t border-gray-100 dark:border-gray-800" />

      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Explore a Igreja
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/cultos" className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:underline">Cultos</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Horários e informações dos nossos cultos semanais.</p>
          </a>
          <a href="/agenda" className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:underline">Agenda</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Confira os próximos eventos e programações.</p>
          </a>
          <a href="/ministerios" className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:underline">Ministérios</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Conheça os ministérios e encontre o seu lugar.</p>
          </a>
          <a href="/pastor" className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:underline">Pastor Chandde</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Conheça a história e a visão do nosso pastor.</p>
          </a>
          <a href="/ao-vivo" className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:underline">Ao Vivo</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Assista às transmissões e pregações online.</p>
          </a>
          <a href="/dizimos" className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:underline">Dízimos</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Contribua e faça parte da obra de Deus.</p>
          </a>
        </div>
      </section>

    </div>
  );
}