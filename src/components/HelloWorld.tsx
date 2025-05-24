
import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelloWorld = () => {
  return (
    <>
      <Helmet>
        <title>Hello World - Página Principal</title>
        <meta name="description" content="Bem-vindo ao nosso site Hello World otimizado para SEO. Exemplo de aplicação React com SSR para melhor indexação no Google." />
        <meta property="og:title" content="Hello World - Página Principal" />
        <meta property="og:description" content="Bem-vindo ao nosso site Hello World otimizado para SEO" />
        <link rel="canonical" href="https://lovable.dev/" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-gray-900">Hello World Site</h1>
              <nav>
                <ul className="flex space-x-6">
                  <li><a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
                  <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">Sobre</a></li>
                  <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contato</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section id="home" className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hello World!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Bem-vindo ao nosso site Hello World otimizado para SEO. Este é um exemplo de aplicação React 
              com renderização server-side (SSR) usando Vite, desenvolvida especialmente para garantir 
              excelente indexação no Google e outros motores de busca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
                Começar Agora
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold">
                Saiba Mais
              </button>
            </div>
          </section>

          <section id="about" className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre Este Projeto</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Este site demonstra como criar uma aplicação web moderna com foco em SEO. 
                  Utilizamos as melhores práticas para garantir que o conteúdo seja facilmente 
                  indexado pelos motores de busca.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    React com TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Vite para build otimizado
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Server-Side Rendering (SSR)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Meta tags otimizadas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Structured Data (JSON-LD)
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recursos de SEO</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Meta Description</span>
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Open Graph Tags</span>
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Twitter Cards</span>
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Structured Data</span>
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Canonical URLs</span>
                    <span className="text-green-600 font-semibold">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="text-center bg-white rounded-xl shadow-lg p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Tem alguma dúvida sobre SEO ou desenvolvimento web? Estamos aqui para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-600">
                <span>📧</span>
                <span>contato@helloworld.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span>📱</span>
                <span>+55 (11) 99999-9999</span>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Hello World Site</h3>
              <p className="text-gray-400 mb-6">
                Exemplo de site otimizado para SEO com React, Vite e SSR
              </p>
              <div className="flex justify-center space-x-6 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
                <p>&copy; 2025 Hello World Site. Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HelloWorld;
