
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const images = ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&q=80"];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => <div key={index} className={cn("absolute inset-0 bg-cover bg-center transition-opacity duration-1000", currentImage === index ? "opacity-100" : "opacity-0")} style={{
      backgroundImage: `url(${image})`
    }} />)}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cetpro-darkblue/80 to-cetpro-blue/60" />

      {/* Content */}
      <div className={cn("absolute inset-0 flex flex-col justify-center items-center text-white p-6 transition-opacity duration-1000", loading ? "opacity-0" : "opacity-100")}>
        <div className="max-w-4xl text-center space-y-6 animate-fade-in">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Formación Tecnológica de Calidad
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-bold text-[#ffddaa]">
            En PROMAE MAGDALENA formamos profesionales técnicos con las competencias 
            necesarias para destacar en el mundo laboral actual.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-cetpro-red hover:bg-cetpro-red/90 text-white px-8 group">
              Inscríbete Ahora
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30">
              Conoce Nuestros Cursos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-bounce" />
        </div>
      </div>
    </div>;
};

export default Hero;
