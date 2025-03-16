
import React, { useState } from 'react';
import { Clock, Users, Calendar, ArrowRight, MapPin, Phone, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  duration: string;
  schedule: string;
  instructor: string;
  image: string;
  featured?: boolean;
  location?: string;
  contact?: string;
  startDate?: string;
  modality?: string;
  facebookPostUrl?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  category,
  duration,
  schedule,
  instructor,
  image,
  featured = false,
  location,
  contact,
  startDate,
  modality,
  facebookPostUrl
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    if (facebookPostUrl) {
      setDialogOpen(true);
    }
  };

  return (
    <div className={cn(
      "cetpro-card group overflow-hidden",
      featured ? "border-cetpro-gold/50" : "",
      "animate-fade-in"
    )}>
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        
        {featured && (
          <div className="absolute top-3 right-3 bg-cetpro-gold text-white text-xs font-medium px-2 py-1 rounded-full z-20">
            Destacado
          </div>
        )}
        
        <div className="absolute bottom-3 left-3 z-20">
          <span className="inline-block bg-cetpro-blue text-white text-xs px-2 py-1 rounded-md">
            {category}
          </span>
        </div>
        
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
      
      <div className="flex flex-col space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2 text-cetpro-blue" />
          <span>{duration}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2 text-cetpro-blue" />
          <span>{schedule}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <Users className="h-4 w-4 mr-2 text-cetpro-blue" />
          <span>{instructor}</span>
        </div>

        {startDate && (
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen className="h-4 w-4 mr-2 text-cetpro-blue" />
            <span>Inicio: {startDate}</span>
          </div>
        )}
        
        {modality && (
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen className="h-4 w-4 mr-2 text-cetpro-blue" />
            <span>Modalidad: {modality}</span>
          </div>
        )}
        
        {location && (
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2 text-cetpro-blue" />
            <span>{location}</span>
          </div>
        )}
        
        {contact && (
          <div className="flex items-center text-sm text-gray-500">
            <Phone className="h-4 w-4 mr-2 text-cetpro-blue" />
            <span>{contact}</span>
          </div>
        )}
      </div>
      
      <Button 
        className="w-full bg-cetpro-blue hover:bg-cetpro-darkblue text-white group"
        onClick={handleButtonClick}
      >
        <span>Ver Detalles</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>

      {facebookPostUrl && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-[550px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">{title}</DialogTitle>
            </DialogHeader>
            <div className="w-full overflow-hidden">
              <iframe 
                src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(facebookPostUrl)}&show_text=true&width=500`} 
                width="100%" 
                height="600" 
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CourseCard;
