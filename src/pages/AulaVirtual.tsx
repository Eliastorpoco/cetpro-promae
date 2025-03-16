
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, Monitor, Lock, AlertTriangle, Mail, KeyRound, Info, School } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AulaVirtual = () => {
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { toast } = useToast();
  
  const formSchema = z.object({
    email: z.string().email("Debe ser un correo electrónico válido").refine(
      (email) => email.endsWith("@cetpropromaemagdalena.edu.pe"), 
      { message: "Solo se permiten cuentas institucionales (@cetpropromaemagdalena.edu.pe)" }
    ),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  });

  const googleWorkspaceUrl = "https://workspace.google.com/dashboard";
  const googleClassroomUrl = "https://classroom.google.com";
  const googleGmailUrl = "https://mail.google.com";
  const googleDriveUrl = "https://drive.google.com";
  const googleCalendarUrl = "https://calendar.google.com";
  const googleAuthUrl = "https://accounts.google.com/ServiceLogin";

  const educationalPlatforms = [
    {
      id: 1,
      name: "Moodle",
      description: "Nuestra plataforma principal de aprendizaje virtual. Accede a todos los cursos, materiales y actividades.",
      url: "https://cetpropromaemagdalena.edu.pe/intranet/moodle",
      icon: <BookOpen className="h-10 w-10" />,
      requiresAuth: false
    },
    {
      id: 2,
      name: "Google Classroom",
      description: "Acceda a sus clases virtuales. Requiere autenticación con cuenta institucional.",
      url: googleClassroomUrl,
      icon: <Monitor className="h-10 w-10" />,
      requiresAuth: true,
      color: "bg-cetpro-blue hover:bg-cetpro-darkblue" // Changed to CETPRO blue color
    }
  ];

  const workspaceTools = [
    {
      id: 1,
      name: "Google Classroom",
      description: "Plataforma de aprendizaje virtual para gestionar clases, tareas y calificaciones.",
      url: googleClassroomUrl,
      icon: <Monitor className="h-10 w-10" />,
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      id: 2,
      name: "Gmail Institucional",
      description: "Acceda a su correo electrónico institucional para comunicación oficial.",
      url: googleGmailUrl,
      icon: <Mail className="h-10 w-10" />,
      color: "bg-cetpro-blue hover:bg-cetpro-darkblue" // Changed to CETPRO blue color
    },
    {
      id: 3,
      name: "Google Drive",
      description: "Almacenamiento en la nube para guardar y compartir archivos educativos.",
      url: googleDriveUrl,
      icon: <ExternalLink className="h-10 w-10" />,
      color: "bg-cetpro-blue hover:bg-cetpro-darkblue" // Changed to CETPRO blue color
    },
    {
      id: 4,
      name: "Google Calendar",
      description: "Calendario para organizar eventos, clases y fechas importantes.",
      url: googleCalendarUrl,
      icon: <ExternalLink className="h-10 w-10" />,
      color: "bg-yellow-600 hover:bg-yellow-700"
    }
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleGoogleSSO = () => {
    setIsAuthenticating(true);
    
    try {
      toast({
        title: "Iniciando sesión con Google Workspace for Education",
        description: "Redirigiendo al sistema de autenticación institucional...",
        duration: 3000,
      });
      
      const continueUrl = encodeURIComponent(googleWorkspaceUrl);
      const ssoUrl = `${googleAuthUrl}?continue=${continueUrl}&authuser=0&hd=cetpropromaemagdalena.edu.pe`;
      
      window.location.href = ssoUrl;
      
    } catch (error) {
      console.error("Error de autenticación SSO:", error);
      setIsError(true);
      setErrorMessage("Error al iniciar sesión con Google Workspace for Education. Contacte a soporte técnico.");
      setIsAuthenticating(false);
    }
  };

  const handlePlatformAccess = (platform) => {
    if (platform.requiresAuth) {
      handleGoogleSSO();
    } else {
      window.open(platform.url, "_blank");
    }
  };

  const handleWorkspaceToolAccess = (tool) => {
    const googleCookies = document.cookie.includes('SAPISID') || 
                        document.cookie.includes('APISID') || 
                        document.cookie.includes('SSID');
    
    if (googleCookies) {
      window.open(tool.url, "_blank");
    } else {
      handleGoogleSSO();
    }
  };

  const onSubmit = async (values) => {
    console.log("Intentando iniciar sesión con:", values);
    
    if (!values.email.endsWith('@cetpropromaemagdalena.edu.pe')) {
      setIsError(true);
      setErrorMessage("Solo se permiten cuentas institucionales (@cetpropromaemagdalena.edu.pe)");
      return;
    }
    
    setIsAuthenticating(true);
    setIsError(false);
    
    try {
      toast({
        title: "Conectando a Google Workspace for Education",
        description: "Redirigiendo al sistema de autenticación institucional...",
        duration: 3000,
      });
      
      const encodedEmail = encodeURIComponent(values.email);
      const workspaceAuthUrl = `${googleAuthUrl}?continue=${encodeURIComponent(googleWorkspaceUrl)}&authuser=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin&Email=${encodedEmail}&hd=cetpropromaemagdalena.edu.pe`;
      
      window.location.href = workspaceAuthUrl;
      
    } catch (error) {
      console.error("Error de autenticación en Google Workspace:", error);
      setIsError(true);
      setErrorMessage("Error al intentar conectar con Google Workspace for Education. Contacte a soporte técnico.");
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-cetpro-blue mb-4">Aula Virtual Institucional</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Accede a nuestras plataformas de aprendizaje virtual y a las herramientas de Google Workspace for Education con tu cuenta institucional.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          <Tabs defaultValue="platforms" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-8">
              <TabsTrigger value="platforms" className="text-lg py-3">Plataformas Educativas</TabsTrigger>
              <TabsTrigger value="workspace" className="text-lg py-3">Google Workspace Institucional</TabsTrigger>
            </TabsList>
            
            <TabsContent value="platforms">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {educationalPlatforms.map((platform) => (
                  <Card key={platform.id} className="border-2 hover:border-cetpro-blue/50 transition-all duration-300 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-cetpro-blue/10 text-cetpro-blue">
                          {platform.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{platform.name}</CardTitle>
                        </div>
                        {platform.requiresAuth && (
                          <div className="ml-auto p-2 rounded-full bg-amber-100 text-amber-600">
                            <Lock className="h-5 w-5" />
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600 min-h-[80px]">
                        {platform.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className={`w-full ${platform.color || "bg-cetpro-blue hover:bg-cetpro-darkblue"} group`}
                        onClick={() => handlePlatformAccess(platform)}
                      >
                        Acceder
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="workspace">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workspaceTools.map((tool) => (
                  <Card key={tool.id} className="border-2 hover:border-cetpro-blue/50 transition-all duration-300 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${tool.color ? tool.color.replace("hover:", "") + "/10" : "bg-cetpro-blue/10"} ${tool.color ? "text-" + tool.color.split("-")[1] + "-600" : "text-cetpro-blue"}`}>
                          {tool.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{tool.name}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600 min-h-[80px]">
                        {tool.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className={`w-full ${tool.color || "bg-cetpro-blue hover:bg-cetpro-darkblue"} group`}
                        onClick={() => handleWorkspaceToolAccess(tool)}
                      >
                        Acceder
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold flex items-center gap-2">
                <School className="h-5 w-5 text-cetpro-blue" /> 
                Acceso Institucional a Google Workspace for Education
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-500">
                Use el botón a continuación para acceder con su cuenta institucional
              </DialogDescription>
            </DialogHeader>
            
            {isError && (
              <Alert className="border-red-300 bg-red-50 text-red-800">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-600">
                    {errorMessage}
                  </AlertDescription>
                </div>
              </Alert>
            )}
            
            <div className="flex flex-col items-center gap-4 py-4">
              <Button
                onClick={handleGoogleSSO}
                className="w-full bg-cetpro-blue hover:bg-cetpro-darkblue flex items-center justify-center gap-3"
              >
                <div className="bg-white p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                Iniciar sesión con Google institucional
              </Button>
              
              <Alert className="border-amber-200 bg-amber-50 w-full">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-700 text-xs">
                    Solo se permite el acceso con cuentas institucionales (@cetpropromaemagdalena.edu.pe)
                  </AlertDescription>
                </div>
              </Alert>
            </div>
            
            <div className="text-center text-sm text-gray-500 mt-2">
              <p>
                Se conectará a Google Workspace for Education utilizando exclusivamente su cuenta institucional.
              </p>
            </div>
          </DialogContent>
        </Dialog>

        <div className="mt-16 bg-gray-50 p-8 rounded-2xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-cetpro-blue mb-4">¿Necesitas ayuda con tu cuenta institucional?</h2>
          <p className="text-gray-600 mb-6">
            Si tienes problemas para acceder a Google Workspace for Education con tu cuenta institucional, 
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
    </div>
  );
};

export default AulaVirtual;
