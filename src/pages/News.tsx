
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Inicio de Matrículas 2025",
      date: "10 de marzo, 2025",
      content: "Nos complace anunciar que las matrículas para el año académico 2025 ya están abiertas. Acércate a nuestra sede principal o regístrate en línea.",
      image: "/lovable-uploads/f8b2a048-ba57-4b5f-aaa4-dab2205a5e37.png",
    },
    {
      id: 2,
      title: "Nuevos Cursos Disponibles",
      date: "15 de febrero, 2025",
      content: "Ampliamos nuestra oferta formativa con curso de auxiliar en técnico carpintería en madera y servicios básicos gastronómicos; en programación continua ilustración digital, aplicaciones en hoja de cálculo, procesos de soldadura mig mag tig",
      image: "/lovable-uploads/ce6017cd-b1bb-4b6f-8668-addd017bcd83.png",
    },
    {
      id: 3,
      title: "Feria de Emprendimiento 2025",
      date: "5 de abril, 2025",
      content: "Participa en nuestra Feria de Emprendimiento anual donde nuestros alumnos expondrán sus proyectos y servicios a la comunidad.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-cetpro-blue mb-4">Noticias y Eventos</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre las últimas novedades, eventos y anuncios importantes de nuestro centro educativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map(item => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.content}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-cetpro-blue text-cetpro-blue hover:bg-cetpro-blue hover:text-white group">
                  Leer más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-cetpro-blue text-cetpro-blue hover:bg-cetpro-blue hover:text-white">
            Cargar más noticias
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
