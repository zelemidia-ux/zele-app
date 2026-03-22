import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  const valores = [
    { titulo: "Amor", desc: "Demonstramos o amor de Cristo em cada acao e palavra, refletindo Seu cuidado incondicional." },
    { titulo: "Zelo", desc: "Comprometidos a zelar por cada pessoa com dedicacao e paixao santa pelo Reino de Deus." },
    { titulo: "Proposito", desc: "Guiados pela palavra e direcao de Deus, vivendo com intencao e significado eterno." },
    { titulo: "Comunidade", desc: "Somos uma familia unida pela fe, onde cada pessoa e valorizada e tem seu lugar." },
  ];

  const ministerios = [
    { nome: "Zele Music", desc: "Louvor com proposito, presenca e santidade." },
    { nome: "Homens de Honra", desc: "Homens que zelam por sua fe, casa e chamado." },
    { nome: "PreciosaZ", desc: "Mulheres intensas, curadas e cheias de proposito." },
    { nome: "ZKids", desc: "Pequenos coracoes, grandes destinos." },
    { nome: "Next Teen", desc: "A proxima geracao ja esta aqui." },
    { nome: "Next Level", desc: "Fogo jovem, raizes firmes." },
    { nome: "Zele Family", desc: "Casas que honram a presenca." },
    { nome: "Zele Serve", desc: "Servir e a linguagem do ceu." },
    { nome: "Zele Impact", desc: "Zelo pela terra e pelo proximo." },
  ];

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section id="inicio" className="relative flex flex-col items-center justify-center text-center px-4 py-40 overflow-hidden min-h-screen">
        
        {/* Video de fundo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Conteudo */}
        <AnimatedSection className="relative z-20 flex flex-col items-center">
          <p className="text-sm font-medium text-white/60 uppercase tracking-widest mb-6">
            Itaquera - Sao Paulo
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Voce nao chegou<br />aqui por acaso.
          </h1>
          <p className="text-xl text-white/70 max-w-xl mb-10">
            Deus esta conduzindo seus passos.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mb-8">
            <a href="#agenda" className="px-6 py-3 rounded-md bg-white text-gray-900 font-medium hover:opacity-90 transition-opacity">
              Ver Agenda
            </a>
            <a href="https://www.waze.com/pt-BR/live-map/directions/br/sp/zele-church?to=place.ChIJkxeqHlZnzpQRGivBWDvGnfE" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-md border border-white/40 text-white font-medium hover:bg-white/10 transition-colors">
              Como Chegar
            </a>
          </div>
          <p className="text-sm text-white/40">
            Av. Jacu Pessego, 7639 - Domingo 10h e 18h30 - Quinta 20h
          </p>
        </AnimatedSection>
      </section>

      <div className="border-t border-gray-100 dark:border-gray-800" />

      {/* Sobre */}
      <section id="sobre" className="max-w-3xl mx-auto px-4 py-24 text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Vivendo o Novo de Deus
          </h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            Estamos vivendo um tempo onde o ordinario da lugar ao sobrenatural, e o coracao queima por aquilo que vem do alto.
          </p>
          <div className="flex flex-col gap-6 text-left">
            <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6">
              <p className="text-gray-700 dark:text-gray-300 italic text-lg">O zelo da Tua casa me consome.</p>
              <cite className="text-sm text-gray-400 dark:text-gray-500 mt-1 block">Salmo 69:9</cite>
            </blockquote>
            <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6">
              <p className="text-gray-700 dark:text-gray-300 italic text-lg">Ele nos purificou para sermos um povo seu, especial, zeloso de boas obras.</p>
              <cite className="text-sm text-gray-400 dark:text-gray-500 mt-1 block">Tito 2:14</cite>
            </blockquote>
          </div>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mt-8">
            A Zele Church nasce do coracao de Deus, em resposta a um tempo onde o mundo clama por cuidado, verdade e direcao. Seu nome vem da palavra Zelo, um chamado ao compromisso, a santidade e a dedicacao fervorosa. Zele e mais do que um nome: e uma cultura.
          </p>
        </AnimatedSection>
      </section>

      <div className="border-t border-gray-100 dark:border-gray-800" />

      {/* Lideranca */}
      <section className="max-w-4xl mx-auto px-4 py-24">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">Lideranca</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-2xl font-bold text-gray-500 mb-4">PR</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Pastor Chandde Ramos</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Pastor Presidente</p>
              <a href="https://www.instagram.com/chandde/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                @chandde
              </a>
            </div>
            <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-2xl font-bold text-gray-500 mb-4">PR</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Pastora Naide Ramos</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Pastora</p>
              <a href="https://www.instagram.com/naideramos_/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                @naideramos_
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <div className="border-t border-gray-100 dark:border-gray-800" />

      {/* Valores */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 text-center">Nossos Valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v, i) => (
              <AnimatedSection key={v.titulo} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 h-full">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{v.titulo}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <div className="border-t border-gray-100 dark:border-gray-800" />

      {/* Agenda */}
      <section id="agenda" className="max-w-4xl mx-auto px-4 py-24">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Agenda</h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-10">Nossos cultos semanais</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Domingo</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10h e 18h30</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Av. Jacu Pessego, 7639</p>
            </div>
            <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Quinta-feira</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">20h</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Av. Jacu Pessego, 7639</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <div className="border-t border-gray-100 dark:border-gray-800" />

      {/* Ministerios */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Ministerios</h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-10">Encontre o seu lugar e sirva com seus dons.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ministerios.map((m, i) => (
              <AnimatedSection key={m.nome} delay={i * 0.05}>
                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 h-full">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{m.nome}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <div className="border-t border-gray-100 dark:border-gray-800" />

      {/* CTA Voce na Zele */}
      <section className="max-w-3xl mx-auto px-4 py-24 text-center">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Voce na Zele</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Fotografamos cada culto para guardar esses momentos com voce. Acesse suas fotos, faca download ou gerencie sua privacidade.
          </p>
          <a href="/voce-na-zele" className="inline-block px-6 py-3 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity">
            Acessar Fotos
          </a>
        </AnimatedSection>
      </section>

    </div>
  );
}