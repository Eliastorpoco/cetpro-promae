import React from 'react';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from "@/components/ui/button";
import { ChevronRight, GraduationCap, Book, Users, Award, ArrowRight, Facebook } from 'lucide-react';

const Index = () => {
  const courses = [
    {
      id: 1,
      title: 'Asistencia Técnica de Producción y Realización Audiovisual',
      description: 'Curso modular de formación continua en producción audiovisual. Aprende técnicas profesionales de grabación, edición y producción de contenidos audiovisuales.',
      category: 'Audiovisual',
      duration: 'Marzo - 2025',
      schedule: 'Lunes a Viernes, 8:30am-1:00pm',
      instructor: 'Lic. Renée Castro Morán',
      image: '/lovable-uploads/a53a85a4-dfca-47b2-b16b-7dfb6276fa5f.png',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '11 de agosto',
      modality: 'Presencial - Turno: MAÑANA',
      facebookPostUrl: 'https://www.facebook.com/cetpro.promaemagdalena'
    },
    {
      id: 2,
      title: 'Ilustración Digital',
      description: 'Programa de Formación Continua: Ilustración Digital con Corel Draw. Estudia Diseño Gráfico en CETPRO PROMAE MAGDALENA',
      category: 'Diseño',
      duration: 'Programa de Formación Continua',
      schedule: 'Lunes - Miércoles - Viernes (8:30am-1:00pm)',
      instructor: 'Lic. Hilda Alca León',
      image: '/lovable-uploads/4dbadc65-ce01-413d-86ef-b8183e78dd28.png',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 262-7395',
      startDate: '11 de agosto',
      modality: 'Presencial - Turno: Mañana',
      facebookPostUrl: 'https://www.facebook.com/cetpro.promaemagdalena'
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
    },
    {
      id: 7,
      title: 'Mantenimiento Preventivo y Correctivo de Motores de Combustión Interna',
      description: 'Curso modular de formación continua en mecánica automotriz. Aprende técnicas profesionales de diagnóstico y reparación de motores.',
      category: 'Mecánica Automotriz',
      duration: 'Marzo - 2025',
      schedule: 'Lunes a Viernes, 5:30-10:00pm',
      instructor: 'CETPRO PROMAE MAGDALENA',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '11 de agosto 2025',
      modality: 'Presencial',
      facebookPostUrl: 'https://www.facebook.com/cetpro.promaemagdalena/posts/pfbid02qWLqPr8NB3kFk5WQBwF5t1K6wueYXuCmNod768JhWqcvebw1ASDHayU8ijAtGry4l'
    }
  ];

  const testimonials = [
    {
      quote: "El programa de Desarrollo Web en CETPRO PROMAE cambió mi vida profesional. Ahora trabajo en una empresa de tecnología con un salario competitivo y perspectivas de crecimiento.",
      name: "María Sánchez",
      role: "Egresada",
      course: "Desarrollo Web Frontend",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
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
    { number: '50+', label: 'Años de experiencia', icon: <Award /> },
    { number: '30+', label: 'Cursos especializados', icon: <Book /> },
    { number: '30+', label: 'Profesores calificados', icon: <GraduationCap /> },
    { number: '20000+', label: 'Estudiantes egresados', icon: <Users /> }
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
    <div className="min-h-screen pt-16">
      <Hero />

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
              <div className="relative h-auto rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/8dfde572-9315-43c2-b314-70e8645ee240.png" 
                  alt="Matrícula 2025-II CETPRO PROMAE MAGDALENA"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                location={course.location}
                contact={course.contact}
                startDate={course.startDate}
                modality={course.modality}
                facebookPostUrl={course.facebookPostUrl}
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

      <section className="py-12 bg-white">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-8 animate-fade-in">
            <div className="inline-block bg-cetpro-blue/10 px-3 py-1 rounded-full text-cetpro-blue text-sm font-medium mb-3">
              Respaldo Institucional
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Trabajamos bajo la supervisión de</h2>
            <p className="text-gray-600">
              Somos una institución educativa reconocida por el Ministerio de Educación del Perú y operamos bajo la dirección de la UGEL 03.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 py-6">
            <div className="flex flex-col items-center">
              <div className="h-24 w-auto flex items-center justify-center mb-3">
                <img 
                  src="/lovable-uploads/b992c50e-f8ff-4d5f-a9bb-78178c16c177.png"
                  alt="Logo del Ministerio de Educación del Perú" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">Ministerio de Educación</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-24 w-auto flex items-center justify-center mb-3">
                <img 
                  src="/lovable-uploads/b5a8722e-e980-45d6-966f-8b764e81b8ec.png" 
                  alt="Logo de la UGEL 03" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">Unidad de Gestión Educativa Local 03</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-cetpro-darkblue to-cetpro-blue text-white">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para comenzar tu formación técnica?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Inscríbete ahora y forma parte de nuestra comunidad educativa. Tu futuro profesional comienza aquí.
            </p>
            <a 
              href="https://www.facebook.com/cetpro.promaemagdalena" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-white text-cetpro-blue hover:bg-gray-100 px-8 h-11 rounded-md text-sm font-medium transition-colors group"
            >
              <Facebook className="h-5 w-5" />
              <span>Facebook</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
