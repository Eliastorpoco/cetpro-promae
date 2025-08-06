import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    { id: 'construction', name: 'Construcción' },
    { id: 'welding', name: 'Soldadura' },
    { id: 'electrical', name: 'Electricidad' },
    { id: 'textiles', name: 'Confección' },
    { id: 'audiovisual', name: 'Audiovisual' }
  ];

  const courses = [
    // Programas Técnicos Principales
    {
      id: 1,
      title: 'Asistencia de Contabilidad',
      description: 'Programa técnico que forma profesionales en procedimientos financieros, contables y liquidación de impuestos.',
      category: 'business',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'BARRIOS ESPERILLA, Orsa / ROJAS CAJA Sandra Patricia',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 2,
      title: 'Apoyo Administrativo',
      description: 'Formación técnica en atención al cliente y operaciones administrativas para empresas e instituciones.',
      category: 'business',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'NIÑO CALLE, Nestor Alonso / BRAVO LUNA, José Antonio',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 3,
      title: 'Mecánica de Motos y Vehículos Afines',
      description: 'Programa especializado en mantenimiento y reparación de motores y sistemas de vehículos menores.',
      category: 'automotive',
      duration: '8 meses',
      schedule: 'Lunes a Viernes - Turno Tarde',
      instructor: 'PONCE RODRIGUEZ, Jose Daniel',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 4,
      title: 'Panadería y Pastelería',
      description: 'Formación técnica en elaboración, acondicionamiento y decoración de productos de panadería y pastelería.',
      category: 'gastronomy',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'SALAZAR LEZMA María Violeta / CUBAS CAMACHO, Silvia / ALQUIZAR HUERTA, Maritza',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 5,
      title: 'Costura y Acabados',
      description: 'Programa técnico en confección de prendas de vestir, diseño y acabados textiles.',
      category: 'textiles',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'GALARZA CORILLA, Yhajaira',
      image: 'https://images.unsplash.com/photo-1529720317453-c8da503f2051?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 6,
      title: 'Corte y Ensamblaje',
      description: 'Especialización en técnicas de corte y ensamblaje en la industria textil y confección.',
      category: 'textiles',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'GALARZA CORILLA, Yhajaira',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 7,
      title: 'Planchado y Pintura en Vehículos Automotores',
      description: 'Formación técnica en reparación de carrocería, planchado y pintura automotriz.',
      category: 'automotive',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'JAIME SANCHEZ, Eduardo Teodoro',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 8,
      title: 'Soporte Técnico y Operaciones de Centros de Cómputo',
      description: 'Programa técnico en soporte informático, mantenimiento de equipos y administración de centros de cómputo.',
      category: 'tech',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'MEJIA CABALLERO, Jaime',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 9,
      title: 'Asistencia Técnica de Producción y Realización Audiovisual',
      description: 'Formación técnica en producción audiovisual, edición de video y realización de contenidos multimedia.',
      category: 'audiovisual',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'RENATO CASTRO MORAN',
      image: '/lovable-uploads/7cb5bfd5-bf57-438a-831a-4bc119c3a6f5.png',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 10,
      title: 'Confección de Artículos de Cuero y Marroquinería',
      description: 'Especialización en diseño y confección de productos de cuero, carteras, bolsos y artículos de marroquinería. 4 módulos disponibles con horarios de mañana y noche.',
      category: 'textiles',
      duration: '8 meses (528 horas por módulo)',
      schedule: 'Lunes a Viernes',
      instructor: 'SUSAYA LEÓN Marlene Patricia / TURPO COLQUI Fanny',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 11,
      title: 'Producción de Tejeduría',
      description: 'Programa técnico en técnicas de tejido tradicional y moderno, producción textil artesanal e industrial.',
      category: 'textiles',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'GAMONAL AVILÉS, Vilma',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 12,
      title: 'Albañilería',
      description: 'Formación técnica en construcción, albañilería general y técnicas de edificación.',
      category: 'construction',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'ABANTO CHAVEZ, Neider',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 13,
      title: 'Acabados en Edificaciones y Obras Civiles',
      description: 'Programa técnico especializado en acabados de construcción, revestimientos y obras civiles.',
      category: 'construction',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'ABANTO CHAVEZ, Neider',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 14,
      title: 'Peluquería y Barbería',
      description: 'Formación técnica en cortes de cabello, peinados, tratamientos capilares y técnicas de barbería moderna.',
      category: 'design',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'ROSALES VERA, Karina',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 15,
      title: 'Carpintería en Madera',
      description: 'Programa técnico en carpintería, ebanistería y trabajo en madera para muebles y estructuras.',
      category: 'construction',
      duration: '8 meses',
      schedule: 'Lunes a Viernes',
      instructor: 'SAAVEDRA MORALES, Carlos',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    
    // Cursos de Formación Continua
    {
      id: 16,
      title: 'Ilustración Digital (Corel Draw)',
      description: 'Curso especializado en ilustración digital con Corel Draw. Aprende técnicas profesionales de diseño.',
      category: 'design',
      duration: '4 meses',
      schedule: 'Lunes, Martes y Viernes - Turno Mañana',
      instructor: 'ALCA LEON, Hilda',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 17,
      title: 'Aplicaciones en Procesador de Texto (Windows - Word)',
      description: 'Curso práctico de Microsoft Word y herramientas de oficina para documentos profesionales.',
      category: 'tech',
      duration: '4 meses',
      schedule: 'Martes y Jueves',
      instructor: 'ALCA LEON, Hilda / SALAZAR ALBURQUEQUE, Franklin',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '18 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 18,
      title: 'Aplicaciones en Hoja de Cálculo (Excel)',
      description: 'Domina Microsoft Excel para análisis de datos, fórmulas avanzadas y reportes empresariales.',
      category: 'tech',
      duration: '4 meses',
      schedule: 'Lunes, Martes y Viernes - Turno Noche',
      instructor: 'SALAZAR ALBURQUEQUE, Franklin Lauro',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 19,
      title: 'Soldadura Eléctrica',
      description: 'Curso intensivo de soldadura eléctrica con técnicas profesionales para la industria.',
      category: 'welding',
      duration: '4 meses',
      schedule: 'Lunes, Martes y Viernes',
      instructor: 'QUISPE ANDRADE, Edwin / TOMASTO RODRIGUEZ, Benigno / BAUTISTA CALIXTRO, Rubes',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 20,
      title: 'Procesos de Soldadura MIG MAG TIG',
      description: 'Especialización en soldadura avanzada con técnicas MIG, MAG y TIG para aplicaciones industriales.',
      category: 'welding',
      duration: '4 meses',
      schedule: 'Martes y Jueves',
      instructor: 'QUISPE ANDRADE, Edwin / TOMASTO RODRIGUEZ, Benigno / BAUTISTA CALIXTRO, Rubes',
      image: 'https://images.unsplash.com/photo-1565911194071-17689cec6463?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '18 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 21,
      title: 'Instalaciones Eléctricas Domiciliarias',
      description: 'Curso técnico de instalaciones eléctricas residenciales, normativas y seguridad eléctrica.',
      category: 'electrical',
      duration: '4 meses',
      schedule: 'Lunes, Martes y Viernes',
      instructor: 'HUANCOLLO PULIDO, David / CHOQUEPATA MAMANI, Juan Carlos',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 22,
      title: 'Rebobinado de Motores Eléctricos',
      description: 'Especialización en reparación y rebobinado de motores eléctricos industriales y domésticos.',
      category: 'electrical',
      duration: '4 meses',
      schedule: 'Martes y Jueves',
      instructor: 'HUANCOLLO PULIDO, David / CHOQUEPATA MAMANI, Juan Carlos',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '18 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 23,
      title: 'Mantenimiento de Equipos Celulares',
      description: 'Curso técnico en diagnóstico y mantenimiento preventivo de teléfonos móviles y tablets.',
      category: 'tech',
      duration: '4 meses',
      schedule: 'Lunes, Martes y Viernes - Turno Noche',
      instructor: 'NIÑO CUEVA, Romel',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 24,
      title: 'Reparación de Equipos Celulares',
      description: 'Especialización en reparación avanzada de dispositivos móviles, cambio de componentes y software.',
      category: 'tech',
      duration: '4 meses',
      schedule: 'Martes y Jueves - Turno Noche',
      instructor: 'NIÑO CUEVA, Romel',
      image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80',
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '18 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 25,
      title: 'Mantenimiento Preventivo de Motores de Combustión Interna',
      description: 'Curso especializado en mantenimiento preventivo de motores automotrices e industriales.',
      category: 'automotive',
      duration: '2 meses',
      schedule: 'Lunes a Viernes - Turno Noche',
      instructor: 'QUISPE ORE, Rubén Felipe',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '17 de Marzo 2025',
      modality: 'Presencial'
    },
    {
      id: 26,
      title: 'Mantenimiento Correctivo de Motores de Combustión Interna',
      description: 'Especialización en reparación y mantenimiento correctivo de motores de combustión interna.',
      category: 'automotive',
      duration: '2 meses',
      schedule: 'Lunes a Viernes - Turno Noche',
      instructor: 'QUISPE ORE, Rubén Felipe',
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80',
      featured: true,
      location: 'Jr. Cuzco 620 Magdalena del Mar',
      contact: 'Tf. 2627395',
      startDate: '28 de Mayo 2025',
      modality: 'Presencial'
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
                  category={
                    course.category === 'tech' ? 'Tecnología' : 
                    course.category === 'design' ? 'Diseño' : 
                    course.category === 'business' ? 'Administración' : 
                    course.category === 'gastronomy' ? 'Gastronomía' :
                    course.category === 'automotive' ? 'Mecánica Automotriz' :
                    course.category === 'construction' ? 'Construcción' :
                    course.category === 'welding' ? 'Soldadura' :
                    course.category === 'electrical' ? 'Electricidad' :
                    course.category === 'textiles' ? 'Confección' :
                    course.category === 'audiovisual' ? 'Audiovisual' : course.category
                  }
                  duration={course.duration}
                  schedule={course.schedule}
                  instructor={course.instructor}
                  image={course.image}
                  featured={course.featured}
                  location={course.location}
                  contact={course.contact}
                  startDate={course.startDate}
                  modality={course.modality}
                  facebookPostUrl={(course as any).facebookPostUrl}
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
              <Link to="/contacto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Mensaje por correo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
