
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutUs = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-cetpro-blue to-cetpro-darkblue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium mb-3">
              Conócenos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre CETPRO PROMAE MAGDALENA</h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8 animate-fade-in-left">
              <div className="flex items-center gap-3">
                <div className="h-10 w-1 bg-cetpro-blue rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-900">Compromiso con la educación técnica y la excelencia</h2>
              </div>
              
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="leading-relaxed text-lg">
                  En CETPRO PROMAE MAGDALENA, nos dedicamos a la formación de profesionales competitivos, polivalentes y con valores, desarrollando competencias que responden a las demandas del mercado local, regional, nacional e internacional.
                </p>
                <p className="leading-relaxed text-lg mt-4">
                  Nuestra institución trabaja dentro del marco de la descentralización y el mejoramiento de la calidad de vida, ofreciendo una educación alineada con los estándares actuales de formación tecnológica y profesional.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 h-12 w-12 rounded-full bg-cetpro-blue/10 flex items-center justify-center text-cetpro-blue">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Excelencia Educativa</h3>
                  <p className="text-gray-600">Comprometidos con los más altos estándares de calidad en formación técnica profesional.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 h-12 w-12 rounded-full bg-cetpro-blue/10 flex items-center justify-center text-cetpro-blue">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Formación Integral</h3>
                  <p className="text-gray-600">Desarrollamos profesionales con valores éticos y competencias técnicas para el mundo laboral.</p>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="lg:w-1/2 animate-fade-in-right">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-cetpro-blue/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cetpro-gold/10 rounded-full"></div>
                
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1594312915251-48db9280c8f1?auto=format&fit=crop&q=80" 
                    alt="Estudiantes en taller" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cetpro-darkblue/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Extra Content */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-cetpro-blue/10 px-4 py-2 rounded-full text-cetpro-blue text-sm font-medium mb-4">
              Nuestra Misión
            </div>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light italic">
              "Formar profesionales técnicos con las competencias necesarias para destacar en un mundo laboral cambiante y competitivo."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
