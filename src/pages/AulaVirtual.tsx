
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AulaVirtual = () => {
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { toast } = useToast();
  
  // Definir el esquema de validación para el formulario específicamente para Google Workspace
  const formSchema = z.object({
    email: z.string().email("Debe ser un correo electrónico válido").refine(
      (email) => email.endsWith("@cetpropromaemagdalena.edu.pe"), 
      { message: "Debe usar su correo institucional (@cetpropromaemagdalena.edu.pe)" }
    ),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  });
  
  // URLs institucionales para Google Workspace
  const institutionalWorkspaceUrl = "https://workspace.google.com/dashboard";
  const institutionalClassroomUrl = "https://classroom.google.com";
  const institutionalGmailUrl = "https://mail.google.com";
  const googleAuthUrl = "https://accounts.google.com/ServiceLogin";
  
  const platforms = [
    {
      id: 1,
      name: "Moodle",
      description: "Nuestra plataforma principal de aprendizaje virtual. Accede a todos los cursos, materiales y actividades.",
      url: "https://cetpropromaemagdalena.edu.pe/intranet/moodle",
      icon: <BookOpen className="h-10 w-10" />
    },
    {
      id: 2,
      name: "Google Classroom",
      description: "Acceso restringido solo para estudiantes con correo institucional. Inicie sesión con sus credenciales institucionales.",
      url: institutionalClassroomUrl,
      icon: <Monitor className="h-10 w-10" />,
      requiresAuth: true
    }
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handlePlatformAccess = (platform) => {
    if (platform.requiresAuth) {
      setShowAuthDialog(true);
      setIsError(false);
      form.reset();
    } else {
      window.open(platform.url, "_blank");
    }
  };

  const onSubmit = async (values) => {
    console.log("Intentando iniciar sesión con:", values);
    
    // Verificar que el correo sea institucional
    if (!values.email.endsWith('@cetpropromaemagdalena.edu.pe')) {
      setIsError(true);
      setErrorMessage("Debe usar su correo institucional (@cetpropromaemagdalena.edu.pe)");
      return;
    }
    
    setIsAuthenticating(true);
    setIsError(false);
    
    try {
      // Preparar la autenticación para Google Workspace for Education
      toast({
        title: "Conectando a Google Workspace for Education",
        description: "Redirigiendo al sistema de autenticación institucional...",
        duration: 3000,
      });
      
      // Construir URL específica para Google Workspace, asegurando que redireccione al login con el email institucional
      const encodedEmail = encodeURIComponent(values.email);
      
      // Usar login específico para Google Workspace Education
      // Esta URL dirige al usuario directamente al formulario de inicio de sesión de Workspace con el email prefijado
      const workspaceAuthUrl = `${googleAuthUrl}?continue=${encodeURIComponent(institutionalClassroomUrl)}&authuser=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin&Email=${encodedEmail}`;
      
      // Abrir la autenticación de Google Workspace en una nueva ventana
      window.open(workspaceAuthUrl, "_blank");
      
      // Cerrar el diálogo después de iniciar la autenticación
      setTimeout(() => {
        setShowAuthDialog(false);
        form.reset();
      }, 1000);
      
    } catch (error) {
      console.error("Error de autenticación en Google Workspace:", error);
      setIsError(true);
      setErrorMessage("Error al intentar conectar con Google Workspace for Education. Por favor, intente más tarde.");
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Función para abrir directamente el diálogo de login institucional
  const openInstitutionalLogin = () => {
    setShowAuthDialog(true);
    setIsError(false);
    form.reset();
  };

  // Lista de dominios de correo institucionales
  const emailDomains = [
    "@cetpropromaemagdalena.edu.pe",
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-cetpro-blue mb-4">Aula Virtual</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Accede a nuestras plataformas de aprendizaje virtual donde encontrarás recursos educativos, actividades y podrás interactuar con profesores y compañeros.
          </p>
        </div>
        
        {/* Botón principal para acceder al Google Workspace institucional */}
        <div className="text-center mb-10">
          <Button 
            onClick={openInstitutionalLogin}
            className="bg-cetpro-blue hover:bg-cetpro-darkblue group"
            size="lg"
          >
            <School className="mr-2 h-5 w-5" />
            Acceder a Google Workspace for Education
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            Inicie sesión con su correo institucional (@cetpropromaemagdalena.edu.pe)
          </p>
        </div>
        
        {/* Alerta informativa sobre cuentas institucionales */}
        <Alert className="mb-10 max-w-3xl mx-auto bg-amber-50 border-amber-200">
          <div className="flex items-start gap-2">
            <Info className="h-5 w-5 text-amber-600 mt-0.5" />
            <AlertDescription className="text-sm text-amber-700">
              <strong>Importante:</strong> Para acceder a Google Workspace for Education, debe utilizar su cuenta de correo electrónico oficial 
              de CETPRO Promae Magdalena (@cetpropromaemagdalena.edu.pe). Si tiene problemas para acceder, contacte al área de soporte técnico.
            </AlertDescription>
          </div>
        </Alert>
        
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
                  className="w-full bg-cetpro-blue hover:bg-cetpro-darkblue group"
                  onClick={() => handlePlatformAccess(platform)}
                >
                  Acceder
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Diálogo de autenticación institucional */}
        <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold flex items-center gap-2">
                <School className="h-5 w-5 text-cetpro-blue" /> 
                Acceso a Google Workspace for Education
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-500">
                Ingrese su correo y contraseña institucional para acceder a Google Workspace
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
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-md font-semibold">
                        <Mail className="h-4 w-4" /> Correo Electrónico
                      </FormLabel>
                      <div className="flex gap-2">
                        <FormControl>
                          <div className="border border-gray-300 rounded-l-md overflow-hidden flex-1">
                            <Input 
                              type="text"
                              placeholder="estudiante" 
                              className="border-0 rounded-l-md h-14 px-6 focus-visible:ring-0 focus-visible:ring-offset-0" 
                              value={field.value.split('@')[0] || ''}
                              onChange={(e) => {
                                const username = e.target.value;
                                const domain = field.value.includes('@') 
                                  ? '@' + field.value.split('@')[1]
                                  : '@cetpropromaemagdalena.edu.pe';
                                field.onChange(username + domain);
                              }}
                            />
                          </div>
                        </FormControl>
                        <div className="border border-gray-300 rounded-r-md bg-gray-50 px-4 flex items-center text-gray-700 min-w-[240px] justify-center">
                          @cetpropromaemagdalena.edu.pe
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-md font-semibold">
                        <KeyRound className="h-4 w-4" /> Contraseña
                      </FormLabel>
                      <FormControl>
                        <div className="border border-gray-300 rounded-md overflow-hidden">
                          <Input 
                            type="password" 
                            placeholder="Ingrese su contraseña" 
                            className="border-0 rounded-md h-14 px-6 focus-visible:ring-0 focus-visible:ring-offset-0" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-cetpro-blue hover:bg-cetpro-darkblue rounded-md h-11 text-md"
                    disabled={isAuthenticating}
                  >
                    {isAuthenticating ? "Conectando..." : "Ingresar a Google Workspace"}
                  </Button>
                </DialogFooter>

                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>
                    Se conectará a Google Workspace for Education utilizando su cuenta institucional.
                    Asegúrese de usar sus credenciales correctas.
                  </p>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        <div className="mt-16 bg-gray-50 p-8 rounded-2xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-cetpro-blue mb-4">¿Necesitas ayuda?</h2>
          <p className="text-gray-600 mb-6">
            Si tienes problemas para acceder a Google Workspace for Education o a las plataformas virtuales, 
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
