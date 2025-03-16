
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-cetpro-blue mb-4">Contáctanos</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta o información adicional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-6 shadow-lg">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold text-cetpro-blue mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nombre completo</label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Correo electrónico</label>
                    <Input id="email" type="email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Asunto</label>
                  <Input id="subject" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                  <Textarea id="message" rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-cetpro-blue hover:bg-cetpro-darkblue">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-cetpro-blue mb-6">Información de contacto</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-cetpro-blue/10 text-cetpro-blue">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-gray-600">Jr. Cuzco 620 - Magdalena del Mar, Lima, Perú</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-cetpro-blue/10 text-cetpro-blue">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-gray-600">(01) 262-7395</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-cetpro-blue/10 text-cetpro-blue">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Correo electrónico</h3>
                    <p className="text-gray-600">info@cetpropromaemagdalena.edu.pe</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-cetpro-blue/10 text-cetpro-blue">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Horario de atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 am - 6:00 pm<br />Sábado: 9:00 am - 1:00 pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-cetpro-blue mb-6">Ubicación</h2>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4702033752016!2d-77.0740241!3d-12.0905311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c96fa8c47ed1%3A0x3bc0a5276bd1af36!2sJr.%20Cuzco%20620%2C%20Magdalena%20del%20Mar%2015086%2C%20Peru!5e0!3m2!1sen!2sus!4v1710466379212!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
