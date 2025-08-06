import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=51995437671&text=Hola,%20deseo%20más%20información%20sobre%20la%20institución.',
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* White container with soft bevel */}
      <div className="bg-white rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
           style={{ 
             boxShadow: '0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.1)' 
           }}>
        <button
          onClick={handleWhatsAppClick}
          className="group overflow-hidden rounded-full transition-all duration-300 transform hover:scale-105 flex items-center"
          aria-label="Contactar por WhatsApp"
        >
          {/* Main button with red background */}
          <div 
            className="px-6 py-3 text-white font-semibold text-sm rounded-full transition-all duration-300 group-hover:px-8"
            style={{ backgroundColor: '#c8104e' }}
          >
            Solicita más info
          </div>
          
          {/* WhatsApp icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full transition-all duration-300 group-hover:w-18 bg-white ml-2">
            <img 
              src="/lovable-uploads/9b5350b4-6ee4-42ea-9e75-7eefe6cbca86.png" 
              alt="WhatsApp" 
              className="w-10 h-10 transition-all duration-300 group-hover:scale-110"
            />
          </div>
        </button>
      </div>
      
      {/* Subtle pulse animation */}
      <div 
        className="absolute inset-0 rounded-full animate-ping opacity-10 pointer-events-none"
        style={{ backgroundColor: '#25D366' }}
      />
    </div>
  );
};

export default WhatsAppButton;