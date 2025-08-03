import React, { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronRight, BookOpen, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'tech', name: 'Tecnología' },
    { id: 'design', name: 'Diseño' },
    { id: 'business', name: 'Administración' },
    { id: 'gastronomy', name: 'Gastronomía' },
    { id: 'automotive', name: 'Mecánica Automotriz' },
    { id: 'construction', name: 'Construcción' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Desarrollo Web Frontend',
      description: 'Aprende a diseñar y construir sitios web con HTML, CSS y JavaScript. Curso completo para principiantes.',
      category: 'tech',
      duration: '3 meses',
      schedule: 'Lunes y Miércoles, 6-9pm',
      instructor: 'Prof. Carlos Mendoza',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
      featured: true
    },
    {
      id: 3,
      title: 'AUXILIAR TÉCNICO ACABADOS EN EDIFICACIONES Y OBRAS CIVILES',
      description: 'Módulo: Revestimiento de superficies en edificaciones y obras civiles.',
      category: 'construction',
      duration: 'Marzo - 2025',
      schedule: 'TURNO NOCHE',
      instructor: 'Docente: Neider Abanto Chávez',
      image: 'public/lovable-uploads/992d700a-1208-40ca-8883-b116dcb74ca7.png',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '11 DE AGOSTO',
      modality: 'Presencial',
      facebookPostUrl: 'https://www.facebook.com/cetpro.promaemagdalena/posts/pfbid02W9o1C5DdtG9rZqhxaG1yQgNcS3uoMbGj8Q4L89C1MdViBHrjY7tzpSXnj3LS1Upal'
    },
    {
      id: 8,
      title: 'Ilustración Digital',
      description: 'Aprende técnicas de ilustración digital con profesionales del sector. Curso práctico con las últimas herramientas.',
      category: 'design',
      duration: '3 meses',
      schedule: 'Martes y Jueves, 5-8pm',
      instructor: 'CETPRO PROMAE MAGDALENA',
      image: 'https://invalid-image-url.jpg',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '15 de Abril 2025',
      modality: 'Presencial'
    },
    {
      id: 7,
      title: 'Mantenimiento Preventivo y Correctivo de Motores de Combustión Interna',
      description: 'Curso modular de formación continua en mecánica automotriz. Aprende técnicas profesionales de diagnóstico y reparación de motores.',
      category: 'automotive',
      duration: 'Marzo - 2025',
      schedule: 'Lunes a Viernes, 5:30-10:00pm',
      instructor: 'CETPRO PROMAE MAGDALENA',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '11 de agosto 2025',
      modality: 'Presencial'
    },
    {
      id: 2,
      title: 'Administración de Redes',
      description: 'Domina la configuración, mantenimiento y seguridad de redes informáticas empresariales.',
      category: 'tech',
      duration: '4 meses',
      schedule: 'Martes y Jueves, 6-9pm',
      instructor: 'Prof. Ana García',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Desarrollo de Aplicaciones Móviles',
      description: 'Aprende a desarrollar aplicaciones para iOS y Android utilizando React Native.',
      category: 'tech',
      duration: '4 meses',
      schedule: 'Martes y Jueves, 7-10pm',
      instructor: 'Prof. Roberto Gómez',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Marketing Digital',
      description: 'Estrategias de marketing online, SEO, redes sociales y publicidad digital para negocios.',
      category: 'business',
      duration: '2 meses',
      schedule: 'Lunes y Miércoles, 7-9pm',
      instructor: 'Prof. Carmen Salazar',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Cocina Internacional',
      description: 'Aprende técnicas y recetas de la gastronomía internacional con chefs profesionales.',
      category: 'gastronomy',
      duration: '3 meses',
      schedule: 'Sábados, 9am-1pm',
      instructor: 'Chef Juan Martínez',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-cetpro-blue to-cetpro-darkblue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        
        <div className="relative page-container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium mb-3">
              Formación Técnica
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Oferta Formativa</h1>
            <p className="text-xl text-white/90">
              Descubre los cursos y programas técnicos diseñados para el mundo laboral actual.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="page-container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between animate-fade-in">
            <div className="w-full md:w-auto flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cetpro-blue focus:border-transparent"
              />
            </div>
            
            <div className="w-full md:w-auto flex gap-2 flex-wrap justify-center">
              <div className="flex items-center mr-2">
                <Filter className="h-5 w-5 mr-1 text-cetpro-blue" />
                <span className="text-sm font-medium">Filtrar:</span>
              </div>
              
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={cn(
                    "text-sm",
                    selectedCategory === category.id
                      ? "bg-cetpro-blue hover:bg-cetpro-darkblue"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  )}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="section-padding">
        <div className="page-container">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  category={course.category === 'tech' ? 'Tecnología' : 
                             course.category === 'design' ? 'Diseño' : 
                             course.category === 'business' ? 'Administración' : 'Gastronomía'}
                  duration={course.duration}
                  schedule={course.schedule}
                  instructor={course.instructor}
                  image={course.image}
                  featured={course.featured}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 mb-6">
                <BookOpen className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron cursos</h3>
              <p className="text-gray-600 mb-6">
                No hay cursos que coincidan con tu búsqueda. Intenta con otros términos o categorías.
              </p>
              <Button 
                variant="outline" 
                className="border-cetpro-blue text-cetpro-blue hover:bg-cetpro-blue hover:text-white"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Ver todos los cursos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Registration Process */}
      <section className="section-padding bg-gray-50">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block bg-cetpro-blue/10 px-3 py-1 rounded-full text-cetpro-blue text-sm font-medium mb-3">
              Proceso de Inscripción
            </div>
            <h2 className="text-gradient mb-4">¿Cómo inscribirte en nuestros cursos?</h2>
            <p className="text-gray-600">
              Sigue estos sencillos pasos para formar parte de nuestra comunidad educativa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Selecciona tu curso',
                description: 'Explora nuestra oferta formativa y elige el curso que mejor se adapte a tus objetivos.'
              },
              {
                step: 2,
                title: 'Completa el formulario',
                description: 'Llena el formulario de inscripción con tus datos personales y académicos.'
              },
              {
                step: 3,
                title: 'Realiza el pago',
                description: 'Efectúa el pago de la matrícula a través de nuestros canales disponibles.'
              },
              {
                step: 4,
                title: '¡Comienza a aprender!',
                description: 'Recibe tu confirmación y comienza tu formación técnica con nosotros.'
              }
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="relative cetpro-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-cetpro-blue text-white flex items-center justify-center text-xl font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-3/4 -translate-y-1/2 text-cetpro-blue">
                    <ChevronRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cetpro-blue to-cetpro-darkblue text-white">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tienes dudas sobre nuestros cursos?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Nuestro equipo está listo para asesorarte y ayudarte a elegir el programa adecuado para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Solicitar Información
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
