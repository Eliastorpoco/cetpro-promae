
import React from 'react';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from "@/components/ui/button";
import { ChevronRight, GraduationCap, Book, Users, Award, ArrowRight } from 'lucide-react';

const Index = () => {
  const courses = [
    {
      id: 1,
      title: 'Desarrollo Web Frontend',
      description: 'Aprende a diseñar y construir sitios web con HTML, CSS y JavaScript. Curso completo para principiantes.',
      category: 'Tecnología',
      duration: '3 meses',
      schedule: 'Lunes y Miércoles, 6-9pm',
      instructor: 'Prof. Carlos Mendoza',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Administración de Redes',
      description: 'Domina la configuración, mantenimiento y seguridad de redes informáticas empresariales.',
      category: 'Redes',
      duration: '4 meses',
      schedule: 'Martes y Jueves, 6-9pm',
      instructor: 'Prof. Ana García',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Diseño Gráfico Digital',
      description: 'Desarrolla habilidades en Adobe Photoshop, Illustrator e InDesign para crear diseños profesionales.',
      category: 'Diseño',
      duration: '3 meses',
      schedule: 'Sábados, 9am-1pm',
      instructor: 'Prof. Luis Paredes',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80'
    }
  ];

  const testimonials = [
    {
      quote: "El programa de Desarrollo Web en CETPRO PROMAE cambió mi vida profesional. Ahora trabajo en una empresa de tecnología con un salario competitivo y perspectivas de crecimiento.",
      name: "María Sánchez",
      role: "Egresada",
      course: "Desarrollo Web Frontend",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      variant: 'featured'
    },
    {
      quote: "Los profesores son expertos en sus áreas y las instalaciones tienen equipos modernos. Recomiendo totalmente estudiar aquí si quieres formación técnica de calidad.",
      name: "Juan Carlos Medina",
      role: "Estudiante",
      course: "Administración de Redes",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    },
    {
      quote: "Gracias a la formación práctica que recibí, pude empezar mi propio emprendimiento de diseño gráfico. La inversión en mi educación valió completamente la pena.",
      name: "Claudia Benites",
      role: "Emprendedora",
      course: "Diseño Gráfico Digital",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
    }
  ];

  const stats = [
    { number: '15+', label: 'Años de experiencia', icon: <Award /> },
    { number: '30+', label: 'Cursos especializados', icon: <Book /> },
    { number: '50+', label: 'Profesores calificados', icon: <GraduationCap /> },
    { number: '2000+', label: 'Estudiantes graduados', icon: <Users /> }
  ];

  const news = [
    {
      id: 1,
      title: 'Nuevos cursos para el ciclo 2023-II',
      date: '15 Oct 2023',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Convenio con empresas del sector tecnológico',
      date: '5 Oct 2023',
      image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Feria laboral virtual para estudiantes',
      date: '28 Sep 2023',
      image: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen pt-16"> {/* Added pt-16 for fixed navbar spacing */}
      {/* Hero Section */}
      <Hero />

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div>
                <div className="inline-block bg-cetpro-blue/10 px-3 py-1 rounded-full text-cetpro-blue text-sm font-medium mb-3">
                  Nuestra Misión
                </div>
                <h2 className="text-gradient mb-4">Formando profesionales técnicos de excelencia</h2>
              </div>
              
              <p className="text-gray-600">
                En CETPRO PROMAE MAGDALENA estamos comprometidos con la formación técnica productiva de calidad. 
                Nuestro objetivo es desarrollar competencias laborales y capacidades emprendedoras para que 
                nuestros estudiantes respondan a los requerimientos del sector productivo.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="cetpro-card flex items-center p-4" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="h-10 w-10 rounded-full bg-cetpro-blue/10 flex items-center justify-center text-cetpro-blue mr-3">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-cetpro-blue">{stat.number}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="bg-cetpro-blue hover:bg-cetpro-darkblue text-white group">
                Conócenos
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80" 
                  alt="Estudiantes en CETPRO" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" 
                  alt="Laboratorio de computación" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <div className="inline-block bg-cetpro-blue/10 px-3 py-1 rounded-full text-cetpro-blue text-sm font-medium mb-3">
              Oferta Formativa
            </div>
            <h2 className="text-gradient mb-4">Cursos especializados para el mundo laboral actual</h2>
            <p className="text-gray-600">
              Nuestra oferta formativa está diseñada para brindarte las competencias técnicas 
              que demanda el mercado laboral en diferentes sectores productivos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard 
                key={course.id}
                title={course.title}
                description={course.description}
                category={course.category}
                duration={course.duration}
                schedule={course.schedule}
                instructor={course.instructor}
                image={course.image}
                featured={course.featured}
              />
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in">
            <Button variant="outline" className="border-cetpro-blue text-cetpro-blue hover:bg-cetpro-blue hover:text-white group">
              Ver todos los cursos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Virtual Classroom */}
      <section className="section-padding bg-gradient-to-r from-cetpro-blue to-cetpro-darkblue text-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="mb-4">Accede a nuestra Aula Virtual</h2>
              <p className="text-white/90">
                Complementa tu formación presencial con nuestras plataformas de aprendizaje 
                virtual. Accede a materiales de estudio, actividades interactivas y más.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <Button className="bg-white text-cetpro-blue hover:bg-gray-100 group">
                  <span>Google Classroom</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button className="bg-white text-cetpro-blue hover:bg-gray-100 group">
                  <span>Moodle</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm p-6">
                <img 
                  src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80" 
                  alt="Plataforma Virtual" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <div className="inline-block bg-cetpro-blue/10 px-3 py-1 rounded-full text-cetpro-blue text-sm font-medium mb-3">
              Testimonios
            </div>
            <h2 className="text-gradient mb-4">Lo que dicen nuestros estudiantes</h2>
            <p className="text-gray-600">
              Conoce las experiencias de los estudiantes y egresados que han pasado por nuestras aulas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                course={testimonial.course}
                image={testimonial.image}
                variant={testimonial.variant as any}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <div className="inline-block bg-cetpro-blue/10 px-3 py-1 rounded-full text-cetpro-blue text-sm font-medium mb-3">
              Noticias y Eventos
            </div>
            <h2 className="text-gradient mb-4">Mantente actualizado</h2>
            <p className="text-gray-600">
              Conoce las últimas novedades, eventos y actividades de nuestra institución.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={item.id} className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-52 rounded-xl overflow-hidden shadow-md mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-block bg-cetpro-red text-white text-xs px-2 py-1 rounded-md">
                      {item.date}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-cetpro-blue transition-colors">
                  {item.title}
                </h3>
                
                <a href="#" className="text-sm font-medium text-cetpro-blue flex items-center">
                  <span>Leer más</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in">
            <Button variant="outline" className="border-cetpro-blue text-cetpro-blue hover:bg-cetpro-blue hover:text-white group">
              Ver todas las noticias
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cetpro-darkblue to-cetpro-blue text-white">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para comenzar tu formación técnica?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Inscríbete ahora y forma parte de nuestra comunidad educativa. Tu futuro profesional comienza aquí.
            </p>
            <Button size="lg" className="bg-white text-cetpro-blue hover:bg-gray-100 px-8 group">
              <span>Inscríbete Ahora</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
