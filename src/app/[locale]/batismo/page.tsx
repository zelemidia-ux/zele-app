'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function Batismo() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    toast.success('Solicitacao de batismo enviada! Entraremos em contato em breve.');
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
        Batismo
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg leading-relaxed">
        O batismo e um passo de fe e obediencia. Se voce ja entregou sua vida a Jesus e deseja ser batizado, preencha o formulario abaixo.
      </p>
      <p className="text-gray-500 dark:text-gray-400 mb-12 leading-relaxed">
        Nossa equipe entrara em contato para conversar com voce e agendar a proxima data de batismo.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Nome completo
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome completo"
            required
            className="px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
            className="px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Telefone / WhatsApp
          </label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="(11) 99999-9999"
            required
            className="px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Conte um pouco sobre sua historia com Jesus
          </label>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Como foi sua decisao por Jesus?"
            rows={4}
            className="px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 px-6 py-3 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Quero me batizar'}
        </button>
      </form>
    </div>
  );
}