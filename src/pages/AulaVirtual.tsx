
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, Monitor, Lock, AlertTriangle, Mail, KeyRound } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AulaVirtual = () => {
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Definir el esquema de validación para el formulario - UPDATED EMAIL DOMAIN
  const formSchema = z.object({
    email: z.string().email("Debe ser un correo electrónico válido").refine(
      (email) => email.endsWith("@cetpropromaemagdalena.edu.pe"), 
      { message: "Debe usar su correo institucional (@cetpropromaemagdalena.edu.pe)" }
    ),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  });
  
  // Credenciales de ejemplo (en una aplicación real, esto estaría en el servidor)
  const validCredentials = [
    { email: "estudiante@cetpropromaemagdalena.edu.pe", password: "Cetpro2024" }
  ];
  
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
      url: "https://classroom.google.com/",
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

  const onSubmit = (values) => {
    const isValid = validCredentials.some(
      (cred) => cred.email === values.email && cred.password === values.password
    );
    
    if (isValid) {
      window.open(platforms[1].url, "_blank");
      setShowAuthDialog(false);
      form.reset();
    } else {
      setIsError(true);
      setErrorMessage("Credenciales incorrectas. Verifique su correo y contraseña.");
    }
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

        <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-cetpro-blue" /> 
                Acceso Institucional
              </DialogTitle>
              <DialogDescription>
                El acceso a Google Classroom está limitado solo a estudiantes registrados.
                Ingrese su correo institucional (@cetpropromaemagdalena.edu.pe) y contraseña.
              </DialogDescription>
            </DialogHeader>
            
            {isError && (
              <Alert className="border-red-300 bg-red-50 text-red-800">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  {errorMessage}
                </AlertDescription>
              </Alert>
            )}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Mail className="h-4 w-4" /> Correo Institucional
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="estudiante@cetpropromaemagdalena.edu.pe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <KeyRound className="h-4 w-4" /> Contraseña
                      </FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Ingrese su contraseña" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="bg-amber-50 p-3 rounded-md border border-amber-200 mt-4">
                  <div className="flex gap-2 text-amber-700">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">
                      Recuerde que necesitará iniciar sesión con su cuenta de Google
                      asociada a su correo institucional después de ingresar a Classroom.
                    </p>
                  </div>
                </div>

                <DialogFooter className="pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAuthDialog(false)}
                  >
                    Cancelar
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-cetpro-blue hover:bg-cetpro-darkblue"
                  >
                    Iniciar Sesión
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

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
    </div>
  );
};

export default AulaVirtual;
