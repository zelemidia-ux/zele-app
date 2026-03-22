'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

interface Perfil {
  id: string;
  nome: string;
  email: string;
  role: 'membro' | 'voluntario' | 'lider' | 'secretaria' | 'dev';
  avatar_url: string | null;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data } = await supabase
          .from('perfis')
          .select('*')
          .eq('id', user.id)
          .single();
        setPerfil(data);
      }
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        const { data } = await supabase
          .from('perfis')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setPerfil(data);
      } else {
        setPerfil(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const isDev = perfil?.role === 'dev';
  const isLider = ['dev', 'lider'].includes(perfil?.role ?? '');
  const isSecretaria = ['dev', 'secretaria'].includes(perfil?.role ?? '');

  return { user, perfil, loading, logout, isDev, isLider, isSecretaria };
}