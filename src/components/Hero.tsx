import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Optimized image data with lazy loading
const imageData = [
  {
    url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1920",
    title: "Soldadura"
  },
  {
    url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1920",
    title: "Mecánica Automotriz"
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1920",
    title: "Planos Arquitectónicos"
  },
  {
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1920",
    title: "Soporte Técnico de Computadoras"
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1920",
    title: "Carpintería de Madera"
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Memoized image preloading
  const preloadImages = useCallback(() => {
    let loadedCount = 0;
    const totalImages = imageData.length;

    imageData.forEach((item) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = item.url;
    });
  }, []);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % imageData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  const handleImageSelect = useCallback((index: number) => {
    setCurrentImage(index);
  }, []);

  const memoizedLogos = useMemo(() => (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-lg z-10 flex items-center gap-4">
      <img 
        src="/lovable-uploads/571af9aa-165e-4176-8c72-dbc808adab16.png" 
        alt="Logo Ministerio de Educación y UGEL 03" 
        className="h-14 w-auto object-contain"
        loading="eager"
        decoding="sync"
      />
      <img 
        src="/lovable-uploads/4cb9c13e-f59b-4926-87f6-97248df9bec7.png" 
        alt="Logo CETPRO PROMAE MAGDALENA" 
        className="h-14 w-auto object-contain"
        loading="eager"
        decoding="sync"
      />
    </div>
  ), []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images with optimized rendering */}
      {imageData.map((item, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
            currentImage === index ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: imagesLoaded ? `url(${item.url})` : 'none',
            willChange: currentImage === index ? 'opacity' : 'auto'
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-cetpro-darkblue/80 to-cetpro-blue/60" />

      {memoizedLogos}

      <div className={cn(
        "absolute inset-0 flex flex-col justify-center items-center text-white p-6 transition-opacity duration-1000",
        imagesLoaded ? "opacity-100" : "opacity-0"
      )}>
        <div className="max-w-4xl text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Matrícula semestre 2025 – II Inicio de clases agosto
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-bold text-[#ffddaa]">
            En el CETPRO PROMAE MAGDALENA formamos profesionales técnicos con las competencias necesarias para destacar en el mundo laboral actual.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="https://www.facebook.com/cetpro.promaemagdalena" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 px-8 h-11 rounded-md text-sm font-medium transition-colors group"
            >
              <Facebook className="h-4 w-4" />
              <span>Facebook</span>
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/oferta-formativa">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30">
                Conoce Nuestros Cursos
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Optimized pagination dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imageData.map((item, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentImage === index ? "bg-white w-6" : "bg-white/50"
            )}
            onClick={() => handleImageSelect(index)}
            aria-label={`Ver imagen de ${item.title}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;