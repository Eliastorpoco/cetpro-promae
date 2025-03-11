
import React from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Heart, Users, Award, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutUs = () => {
  const values = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Excelencia Académica',
      description: 'Buscamos la excelencia en cada aspecto de nuestra formación técnica y servicios.'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Innovación',
      description: 'Adoptamos nuevas tecnologías y metodologías para una educación relevante y actualizada.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Compromiso Social',
      description: 'Contribuimos al desarrollo sostenible de nuestra comunidad a través de la educación técnica.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Inclusión',
      description: 'Promovemos un ambiente educativo que respeta y valora la diversidad en todas sus formas.'
    }
  ];

  const team = [
    {
      name: 'Mg. Roberto Sánchez',
      role: 'Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    },
    {
      name: 'Lic. María Rodríguez',
      role: 'Coordinadora Académica',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    },
    {
      name: 'Ing. Carlos Mendoza',
      role: 'Jefe de Área Tecnológica',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    },
    {
      name: 'Lic. Ana García',
      role: 'Coordinadora de Prácticas',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80'
    }
  ];

  const history = [
    {
      year: '1990',
      title: 'Fundación',
      description: 'El CETPRO PROMAE MAGDALENA se funda como institución educativa técnica en Lima.'
    },
    {
      year: '2000',
      title: 'Expansión de Programas',
      description: 'Se amplía la oferta formativa con nuevos programas en tecnología y diseño.'
    },
    {
      year: '2010',
      title: 'Modernización Tecnológica',
      description: 'Implementación de laboratorios con equipos de última generación.'
    },
    {
      year: '2018',
      title: 'Acreditación de Calidad',
      description: 'Obtención de la acreditación que certifica nuestra calidad educativa.'
    },
    {
      year: '2023',
      title: 'Actualidad',
      description: 'Consolidados como líderes en formación técnica con enfoque en empleabilidad.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-cetpro-blue to-cetpro-darkblue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        
        <div className="relative page-container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium mb-3">
              Conócenos
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre CETPRO PROMAE MAGDALENA</h1>
            <p className="text-xl text-white/90">
              Formando profesionales técnicos de excelencia desde hace más de 30 años.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="cetpro-card animate-fade-in-left">
              <div className="mb-4 h-12 w-12 rounded-full bg-cetpro-blue/10 flex items-center justify-center text-cetpro-blue">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-gray-600">
                Formar profesionales técnicos altamente competentes y con valores éticos, 
                capaces de insertarse al mercado laboral y contribuir al desarrollo sostenible 
                de la sociedad, a través de una propuesta educativa innovadora y de calidad.
              </p>
            </div>
            
            <div className="cetpro-card animate-fade-in-right">
              <div className="mb-4 h-12 w-12 rounded-full bg-cetpro-blue/10 flex items-center justify-center text-cetpro-blue">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
              <p className="text-gray-600">
                Ser una institución educativa técnico-productiva líder y reconocida a nivel nacional, 
                por la formación integral y de calidad que brinda a sus estudiantes, impulsando 
                la innovación, el emprendimiento y la empleabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block bg-cetpro-blue/10 px-3 py-1 rounded-full text-cetpro-blue text-sm font-medium mb-3">
              Nuestra Historia
            </div>
            <h2 className="text-gradient mb-4">Una trayectoria de excelencia</h2>
            <p className="text-gray-600">
              Conoce los hitos más importantes en la historia de CETPRO PROMAE MAGDALENA.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cetpro-blue/20 rounded-full" />
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {history.map((item, index) => (
                <div 
                  key={item.year} 
                  className={cn(
                    "relative flex items-center animate-fade-in",
                    index % 2 === 0 ? "justify-start" : "justify-end flex-row-reverse"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cetpro-blue border-4 border-white" />
                  
                  {/* Content */}
                  <div className={cn(
                    "w-5/12",
                    index % 2 === 0 ? "pr-8" : "pl-8"
                  )}>
                    <div className="cetpro-card">
                      <div className="inline-block bg-cetpro-blue text-white px-2 py-1 rounded-md text-sm font-medium mb-3">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block bg-cetpro-blue/10 px-3 py-1 rounded-full text-cetpro-blue text-sm font-medium mb-3">
              Nuestros Valores
            </div>
            <h2 className="text-gradient mb-4">Los pilares que nos guían</h2>
            <p className="text-gray-600">
              Estos son los valores fundamentales que orientan nuestro trabajo educativo día a día.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="cetpro-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 h-12 w-12 rounded-full bg-cetpro-blue/10 flex items-center justify-center text-cetpro-blue">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block bg-cetpro-blue/10 px-3 py-1 rounded-full text-cetpro-blue text-sm font-medium mb-3">
              Nuestro Equipo
            </div>
            <h2 className="text-gradient mb-4">Profesionales comprometidos con la educación</h2>
            <p className="text-gray-600">
              Contamos con un equipo directivo y docente altamente calificado y comprometido con la excelencia educativa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-cetpro-blue font-medium">{member.role}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in">
            <Button className="bg-cetpro-blue hover:bg-cetpro-darkblue text-white group">
              Conoce a todo nuestro equipo
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cetpro-blue to-cetpro-darkblue text-white">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sé parte de nuestra comunidad educativa
            </h2>
            <p className="text-white/90 text-lg mb-8">
              En CETPRO PROMAE MAGDALENA te ofrecemos una formación técnica de calidad para tu desarrollo profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cetpro-blue hover:bg-gray-100 group">
                <span>Inscríbete Ahora</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
