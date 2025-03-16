
import React from 'react';
import { Clock, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TrainingInfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Clock className="h-5 w-5 mr-2 text-cetpro-blue" />
                Horarios de Atención
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Lunes a Viernes: 8:00 am - 6:00 pm<br />
                Sábados: 8:00 am - 12:00 pm
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Calendar className="h-5 w-5 mr-2 text-cetpro-blue" />
                Periodos de Matrícula
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Primer Periodo: Del 15 de Febrero al 10 de Marzo<br />
                Segundo Periodo: Del 15 de Julio al 10 de Agosto
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Users className="h-5 w-5 mr-2 text-cetpro-blue" />
                Requisitos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                - DNI o Carnet de Extranjería<br />
                - Certificado de estudios<br />
                - 2 fotografías tamaño carnet<br />
                - Pago de matrícula
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
