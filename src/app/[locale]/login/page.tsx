'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { createClient } from '@/lib/supabase';

type Mode = 'login' | 'cadastro';

export default function Login() {
  const [mode, setMode] = useState<Mode>('login');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (mode === 'cadastro') {
      const { error } = await supabase.auth.signUp({
        email,
        password: senha,
        options: {
          data: { nome },
        },
      });
      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Cadastro realizado! Verifique seu email para confirmar.');
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: senha,
      });
      if (error) {
        toast.error('Email ou senha incorretos.');
      } else {
        toast.success('Bem-vindo de volta!');
        window.location.href = '/';
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight text-center">
          {mode === 'login' ? 'Entrar' : 'Criar conta'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-10">
          {mode === 'login'
            ? 'Acesse sua conta na Zele Church'
            : 'Cadastre-se como membro da Zele Church'}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === 'cadastro' && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Nome completo
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                required
                className="px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
              />
            </div>
          )}

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
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              required
              className="px-4 py-3 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-6 py-3 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Aguarde...' : mode === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          {mode === 'login' ? 'Ainda nao tem conta?' : 'Ja tem uma conta?'}{' '}
          <button
            onClick={() => setMode(mode === 'login' ? 'cadastro' : 'login')}
            className="text-gray-900 dark:text-white font-medium hover:underline"
          >
            {mode === 'login' ? 'Cadastre-se' : 'Entrar'}
          </button>
        </p>

      </div>
    </div>
  );
}