
import React from 'react';

export const TrainingHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-cetpro-blue to-cetpro-darkblue text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
      </div>
      
      <div className="relative page-container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium mb-3">
            Plan de Estudios
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Oferta Formativa</h1>
          <p className="text-xl text-white/90">
            Conoce nuestros módulos formativos y programas de estudio
          </p>
        </div>
      </div>
    </section>
  );
};
