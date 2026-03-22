'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

const navCenter = [
  { href: '/#inicio', label: 'Inicio', scroll: true },
  { href: '/#sobre', label: 'Sobre', scroll: true },
  { href: '/#agenda', label: 'Agenda', scroll: true },
  { href: '/voce-na-zele', label: 'Voce na Zele', scroll: false },
  { href: '/batismo', label: 'Batismo', scroll: false },
  { href: '/contato', label: 'Contato', scroll: false },
];

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { user, perfil, logout } = useAuth();

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('darkMode', String(next));
    document.documentElement.classList.toggle('dark', next);
  };

  const handleNavClick = (href: string, scroll: boolean) => {
    setMenuOpen(false);
    if (scroll && pathname !== '/') {
      window.location.href = href;
      return;
    }
    if (scroll) {
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled
        ? 'border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm'
        : 'bg-white dark:bg-gray-950'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Esquerda — Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white tracking-tight shrink-0">
          Zele Church
        </Link>

        {/* Centro — Nav desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {navCenter.map((link) => (
            link.scroll ? (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, true)}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Direita — Acoes */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/ao-vivo"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Ao Vivo
          </Link>

          <button
            onClick={toggleDark}
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Alternar modo"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {perfil?.nome?.split(' ')[0] ?? 'Membro'}
              </span>
              <button
                onClick={logout}
                className="text-sm font-medium px-4 py-2 rounded-md border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                Sair
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="text-sm font-medium px-4 py-2 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
            >
              Membros
            </Link>
          )}
        </div>

        {/* Mobile — botao menu */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navCenter.map((link) => (
              link.scroll ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, true)}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2 text-left"
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="border-t border-gray-100 dark:border-gray-800 mt-2 pt-2 flex flex-col gap-1">
              <Link href="/ao-vivo" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 py-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Ao Vivo
              </Link>
              {user ? (
                <button
                  onClick={logout}
                  className="text-sm text-gray-600 dark:text-gray-300 py-2 text-left"
                >
                  Sair ({perfil?.nome?.split(' ')[0] ?? 'Membro'})
                </button>
              ) : (
                <Link href="/login" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 dark:text-gray-300 py-2">
                  Membros
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}