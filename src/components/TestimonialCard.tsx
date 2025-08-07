import React, { memo } from 'react';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  course?: string;
  image?: string;
  variant?: 'default' | 'featured';
}

const TestimonialCard: React.FC<TestimonialCardProps> = memo(({
  quote,
  name,
  role,
  course,
  image,
  variant = 'default'
}) => {
  const isFeatured = variant === 'featured';
  
  return (
    <article className={cn(
      "relative rounded-xl p-6 transition-all duration-300 animate-fade-in",
      isFeatured 
        ? 'bg-gradient-to-br from-cetpro-blue to-cetpro-darkblue text-white'
        : 'bg-white border border-gray-100 shadow-md hover:shadow-xl'
    )}>
      <div className="absolute -top-4 left-6">
        <div className={cn(
          "rounded-full p-2",
          isFeatured ? 'bg-white text-cetpro-blue' : 'bg-cetpro-blue text-white'
        )}>
          <Quote className="h-5 w-5" />
        </div>
      </div>
      
      <div className="pt-4">
        <blockquote className={cn(
          "text-base italic mb-6 line-clamp-4",
          isFeatured ? 'text-white/90' : 'text-gray-700'
        )}>
          "{quote}"
        </blockquote>
        
        <div className="flex items-center">
          {image && (
            <div className="flex-shrink-0 mr-3">
              <img 
                src={image} 
                alt={`Foto de ${name}`}
                className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
          
          <div>
            <h4 className={cn(
              "font-semibold",
              isFeatured ? 'text-white' : 'text-gray-900'
            )}>
              {name}
            </h4>
            
            <div className={cn(
              "text-sm",
              isFeatured ? 'text-white/80' : 'text-gray-600'
            )}>
              {role}
              {course && (
                <>
                  <span className="mx-1">•</span>
                  <span>{course}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;