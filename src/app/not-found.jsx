import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-800 gap-1">
      <h1 className="text-6xl text-white mb-12">404</h1>
      <h2 className="text-2xl text-white mb-12">Página não encontrada</h2>
      <p className="text-lg text-gray-300 mb-12 text-center">Desculpe, a página que você procura não foi encontrada.</p>
      <a
        href="/"
        className="px-20 py-10 bg-blue-500 text-white text-xl rounded-lg shadow hover:bg-blue-600 transition text-center mb-4"
      >
        Voltar para a página inicial
      </a>
    </div>
  );
}