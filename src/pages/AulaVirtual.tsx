
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, Monitor, AlertTriangle, Lock } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const AulaVirtual = () => {
  const [openSecurityDialog, setOpenSecurityDialog] = useState(false);
  
  const platforms = [
    {
      id: 1,
      name: "Moodle",
      description: "Nuestra plataforma principal de aprendizaje virtual. Accede a todos los cursos, materiales y actividades.",
      url: "https://cetpropromaemagdalena.edu.pe/intranet/moodle",
      icon: <BookOpen className="h-10 w-10" />,
      requiresInvitation: false
    },
    {
      id: 2,
      name: "Google Classroom",
      description: "Acceso exclusivo. Solo podrán ingresar estudiantes que hayan recibido una invitación previa directamente de su instructor.",
      icon: <Monitor className="h-10 w-10" />,
      url: "https://classroom.google.com/c/NzU4NTAwODE4MDc5?cjc=ggs2cex",
      requiresInvitation: true
    }
  ];

  const handleClassroomAccess = (url, requiresInvitation) => {
    if (requiresInvitation) {
      setOpenSecurityDialog(true);
    } else {
      window.open(url, "_blank");
    }
  };

  const proceedToClassroom = () => {
    window.open(platforms[1].url, "_blank");
    setOpenSecurityDialog(false);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-cetpro-blue mb-4">Aula Virtual</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Accede a nuestras plataformas de aprendizaje virtual donde encontrarás recursos educativos, actividades y podrás interactuar con profesores y compañeros.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform) => (
            <Card key={platform.id} className="border-2 hover:border-cetpro-blue/50 transition-all duration-300 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-cetpro-blue/10 text-cetpro-blue">
                    {platform.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{platform.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 min-h-[80px]">
                  {platform.description}
                  {platform.requiresInvitation && (
                    <div className="flex items-center mt-2 text-amber-600 gap-1.5">
                      <Lock className="h-4 w-4" />
                      <span>Requiere autenticación con correo institucional</span>
                    </div>
                  )}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-cetpro-blue hover:bg-cetpro-darkblue group"
                  onClick={() => handleClassroomAccess(platform.url, platform.requiresInvitation)}
                >
                  Acceder
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-2xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-cetpro-blue mb-4">¿Necesitas ayuda?</h2>
          <p className="text-gray-600 mb-6">
            Si tienes problemas para acceder a las plataformas virtuales o necesitas recuperar tu contraseña, 
            contacta a soporte técnico o a tu profesor responsable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="border-cetpro-blue text-cetpro-blue hover:bg-cetpro-blue hover:text-white">
              Manual de Usuario
            </Button>
            <Button variant="outline" className="border-cetpro-blue text-cetpro-blue hover:bg-cetpro-blue hover:text-white">
              Contactar Soporte
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={openSecurityDialog} onOpenChange={setOpenSecurityDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-amber-600">
              <AlertTriangle className="h-5 w-5" />
              Acceso Restringido
            </DialogTitle>
            <DialogDescription>
              Este enlace es exclusivamente para estudiantes que recibieron una invitación directa de su instructor.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-700 border border-amber-200">
              <p className="font-medium mb-2">Información importante:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Necesitas iniciar sesión con tu correo institucional</li>
                <li>Solo podrás acceder si fuiste invitado previamente por tu instructor</li>
                <li>Este enlace no funcionará para usuarios no autorizados</li>
                <li>No compartas este enlace con otras personas</li>
              </ul>
            </div>
          </div>
          
          <DialogFooter className="sm:justify-between">
            <Button 
              variant="outline"
              onClick={() => setOpenSecurityDialog(false)}
            >
              Cancelar
            </Button>
            <Button 
              className="bg-cetpro-blue hover:bg-cetpro-darkblue"
              onClick={proceedToClassroom}
            >
              Continuar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AulaVirtual;
