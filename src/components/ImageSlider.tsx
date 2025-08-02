import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin } from 'lucide-react';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
    location?: string;
  }[];
  className?: string;
}

const ImageSlider = ({ images, className }: ImageSliderProps) => {
  return (
    <div className={className}>
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cetpro-darkblue/40 to-transparent"></div>
                
                {/* Location badge */}
                {image.location && (
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-cetpro-blue" />
                    <span className="text-sm font-medium text-gray-800">{image.location}</span>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default ImageSlider;