import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=51995437671&text=Hola,%20deseo%20más%20información%20sobre%20la%20institución.',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 group overflow-hidden rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative flex items-center">
        {/* Main button with red background */}
        <div 
          className="px-6 py-3 text-white font-semibold text-sm rounded-l-full transition-all duration-300 group-hover:px-8"
          style={{ backgroundColor: '#c8104e' }}
        >
          Solicita más info
        </div>
        
        {/* WhatsApp icon with green background */}
        <div 
          className="w-12 h-12 flex items-center justify-center rounded-r-full transition-all duration-300 group-hover:w-14"
          style={{ backgroundColor: '#25D366' }}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
      </div>
      
      {/* Subtle pulse animation */}
      <div 
        className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ backgroundColor: '#25D366' }}
      />
    </button>
  );
};

export default WhatsAppButton;