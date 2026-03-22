'use client';

import { useState } from 'react';

const languages = [
  { code: 'pt-BR', label: 'Português (Brasil)', flag: '🇧🇷' },
  { code: 'en-US', label: 'English (USA)', flag: '🇺🇸' },
];

export default function Footer() {
  const [showLangs, setShowLangs] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        
        {/* Seletor de idioma — canto esquerdo */}
        <div className="relative">
          <button
            onClick={() => setShowLangs(!showLangs)}
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Selecionar idioma"
          >
            <span className="text-xl">{currentLang.flag}</span>
            <span className="hidden sm:inline">{currentLang.label}</span>
          </button>

          {/* Dropdown de idiomas */}
          {showLangs && (
            <div className="absolute bottom-10 left-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden min-w-48">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang);
                    setShowLangs(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Copyright — centro/direita */}
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Zele Church · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}