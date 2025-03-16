
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cetpro-darkblue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tight">
                CETPRO <span className="text-cetpro-red">PROMAE</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Centro de Educación Técnico-Productiva que forma profesionales técnicos 
              competentes para el mercado laboral.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm hover:translate-x-1 inline-block transition-transform">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-white text-sm hover:translate-x-1 inline-block transition-transform">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-gray-300 hover:text-white text-sm hover:translate-x-1 inline-block transition-transform">
                  Oferta Formativa
                </Link>
              </li>
              <li>
                <Link to="/aula-virtual" className="text-gray-300 hover:text-white text-sm hover:translate-x-1 inline-block transition-transform">
                  Aula Virtual
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-gray-300 hover:text-white text-sm hover:translate-x-1 inline-block transition-transform">
                  Noticias y Eventos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-white text-sm hover:translate-x-1 inline-block transition-transform">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-cetpro-red" />
                <span className="text-sm text-gray-300">
                  Jr. Cuzco 620 - Magdalena del Mar, Lima, Perú
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-cetpro-red" />
                <span className="text-sm text-gray-300">(01) 262-7395</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-cetpro-red" />
                <span className="text-sm text-gray-300">info@cetpropromaemagdalena.edu.pe</span>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h3 className="font-semibold text-lg mb-4">Horario de Atención</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">
                <span className="font-medium">Lunes a Viernes:</span>
                <br />
                8:00 AM - 8:00 PM
              </li>
              <li className="text-sm text-gray-300">
                <span className="font-medium">Sábados:</span>
                <br />
                9:00 AM - 2:00 PM
              </li>
              <li className="text-sm text-gray-300">
                <span className="font-medium">Domingos y Feriados:</span>
                <br />
                Cerrado
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} CETPRO PROMAE MAGDALENA. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
