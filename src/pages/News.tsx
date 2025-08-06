
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const allNewsItems = [
    {
      id: 1,
      title: "Inicio de Matrículas 2025",
      date: "10 de marzo, 2025",
      content: "Nos complace anunciar que las matrículas para el año académico 2025 ya están abiertas. Acércate a nuestra sede principal o regístrate en línea.",
      image: "/lovable-uploads/1eda8a9d-9b0f-4254-9167-9958b404cd91.png",
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
      image: "/lovable-uploads/a52c6be5-9e05-4c06-9e60-04f0faa2dcc3.png",
    },
    {
      id: 4,
      title: "Capacitación DUA 2025",
      date: "31 de Agosto, 2025",
      content: "Tiene como propósito fortalecer las competencias de los docentes de la educación básica para la atención de la variabilidad de los estudiantes con y sin discapacidad; así como la diversificación de la propuesta pedagógica en favor de todos los estudiantes, promoviendo un servicio educativo equitativo, con igualdad de oportunidades de participación y aprendizaje.",
      image: "/lovable-uploads/de5497b1-ef95-4161-b483-c27154639e32.png",
    },
    {
      id: 5,
      title: "Capacitación DUA 2025 - Segunda parte",
      date: "31 de Julio, 2025",
      content: "El Diseño Universal de Aprendizaje (DUA) es un enfoque educativo que garantiza igualdad de oportunidades para todos los estudiantes, considerando la diversidad de estilos y capacidades. Busca empoderar al estudiante dotándolo de herramientas y autonomía para un aprendizaje activo, intencional y reflexivo, promoviendo estudiantes ingeniosos, auténticos y estratégicos en su proceso educativo.",
      image: "/lovable-uploads/92c54797-2592-40e0-bbdd-e523121b2521.png",
    },
    {
      id: 6,
      title: "Taller de Innovación Tecnológica",
      date: "30 de enero, 2025",
      content: "Invitamos a todos los estudiantes a participar en nuestro taller especial sobre las últimas tendencias tecnológicas en el sector productivo.",
      image: "/lovable-uploads/ce6017cd-b1bb-4b6f-8668-addd017bcd83.png",
    },
  ];

  const [visibleNews, setVisibleNews] = useState(3);
  const [loading, setLoading] = useState(false);

  const loadMoreNews = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleNews(prev => Math.min(prev + 3, allNewsItems.length));
      setLoading(false);
    }, 500);
  };

  const newsItems = allNewsItems.slice(0, visibleNews);

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
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-contain max-h-[200px]"
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
                <Button 
                  variant="outline" 
                  className="w-full border-cetpro-blue text-cetpro-blue hover:bg-cetpro-blue hover:text-white group"
                  onClick={() => {
                    if (item.id === 1) {
                      window.open('https://youtu.be/KgfSRIuRONA', '_blank');
                    } else if (item.id === 3) {
                      window.open('https://youtu.be/_CLKy-RQ4fc', '_blank');
                    } else if (item.id === 4) {
                      // Abre ambos videos en pestañas separadas
                      const urls = ['https://youtu.be/YN3RodHRyko', 'https://youtu.be/KJAMAwsymAU'];
                      urls.forEach((url, index) => {
                        setTimeout(() => {
                          window.open(url, '_blank');
                        }, index * 300);
                      });
                    } else if (item.id === 5) {
                      window.open('https://youtu.be/KJAMAwsymAU', '_blank');
                    }
                  }}
                >
                  {item.id === 3 ? "Video de la feria" : "Leer más"} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-cetpro-blue text-cetpro-blue hover:bg-cetpro-blue hover:text-white"
            onClick={loadMoreNews}
            disabled={loading}
          >
            {loading ? "Cargando..." : "Cargar más noticias"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
