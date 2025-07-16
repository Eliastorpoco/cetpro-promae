import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

const Matricula2025II = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <section className="text-center space-y-6 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-cetpro-blue">
            Oferta Formativa Matrícula 2025-II
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Consulta nuestra oferta de cursos y programas disponibles para el semestre 2025-II. 
            Para más detalles revisa el PDF informativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/oferta-2025-II.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-cetpro-blue text-cetpro-blue hover:bg-cetpro-blue hover:text-white">
                Ver PDF Informativo
              </Button>
            </a>
            <a
              href="https://www.facebook.com/cetpro.promaemagdalena"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-cetpro-blue text-white hover:bg-cetpro-darkblue" variant="default">
                <Facebook className="h-4 w-4 mr-2" /> Síguenos en Facebook
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Matricula2025II;
