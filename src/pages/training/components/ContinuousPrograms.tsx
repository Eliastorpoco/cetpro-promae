
import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { FORMACION_CONTINUA_COURSES } from '../data/formacionContinuaCourses';
import { FormacionContinuaCourse } from '../types';
import { getTurnoBadge, getTurnoName, getModuleIcon } from '../utils';
import { cn } from "@/lib/utils";
import CourseCard from '@/components/CourseCard';

interface ContinuousProgramsProps {
  searchTerm: string;
}

export const ContinuousPrograms: React.FC<ContinuousProgramsProps> = ({ searchTerm }) => {
  // Filter courses based on search term
  const filteredCourses = FORMACION_CONTINUA_COURSES.filter(course => {
    const matchesSearch = 
      course.modulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.familiaProductiva.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.docente.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  // Group courses by family
  const groupedCourses = filteredCourses.reduce((acc, course) => {
    if (!acc[course.familiaProductiva]) {
      acc[course.familiaProductiva] = [];
    }
    acc[course.familiaProductiva].push(course);
    return acc;
  }, {} as Record<string, FormacionContinuaCourse[]>);

  return (
    <section className="section-padding bg-gray-50">
      <div className="page-container">
        <div className="space-y-12 animate-fade-in">
          {Object.entries(groupedCourses).map(([familyName, courses]) => (
            <Card key={familyName} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-cetpro-blue/10 to-transparent">
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  {familyName === "COMPUTACIÓN E INFORMÁTICA" && getModuleIcon("computer")}
                  {familyName === "SOLDADURA" && getModuleIcon("welding")}
                  {familyName === "ELECTRICIDAD Y ELECTRÓNICA" && getModuleIcon("electric")}
                  {familyName === "MECÁNICA Y MOTORES" && getModuleIcon("mechanic")}
                  <span className="ml-2">{familyName}</span>
                </CardTitle>
                <CardDescription>
                  {courses.length} módulos disponibles
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>Módulo</TableHead>
                        <TableHead>Docente</TableHead>
                        <TableHead className="text-center">Horas</TableHead>
                        <TableHead className="text-center">Días</TableHead>
                        <TableHead className="text-center">Periodo</TableHead>
                        <TableHead className="text-center">Turno</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {courses.map((course) => (
                        <TableRow key={course.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">
                            <div className="max-w-md">
                              {course.modulo}
                              {course.convenio && 
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                  Convenio
                                </span>
                              }
                            </div>
                          </TableCell>
                          <TableCell>
                            {course.docente}
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <Clock className="h-4 w-4 mr-1 text-gray-500" />
                              {course.horas}
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                              {course.dias}
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            {course.fechaInicio} - {course.fechaFin}
                          </TableCell>
                          <TableCell className="text-center">
                            <span className={cn(
                              "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                              getTurnoBadge(course.turno)
                            )}>
                              {getTurnoName(course.turno)}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {FORMACION_CONTINUA_COURSES.slice(0, 6).map((course) => (
            <CourseCard
              key={course.id}
              title={course.modulo}
              description={`Módulo de formación continua en ${course.familiaProductiva.toLowerCase()}.`}
              category={course.familiaProductiva}
              duration={`${course.horas} HRS`}
              schedule={`${course.dias}, ${getTurnoName(course.turno)}`}
              instructor={course.docente}
              image={course.iconType === 'design' ? "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" :
                    course.iconType === 'computer' ? "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" :
                    course.iconType === 'welding' ? "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80" :
                    course.iconType === 'electric' ? "https://images.unsplash.com/photo-1544724569-5f74be9d2525?auto=format&fit=crop&q=80" :
                    course.iconType === 'phone' ? "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80" :
                    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80"}
              featured={course.id % 5 === 0}
              location="Jr. Cuzco 620 Magdalena del Mar"
              contact="Tf. 2627395"
              startDate={course.fechaInicio}
              modality="Presencial"
              facebookPostUrl="https://www.facebook.com/cetpro.promaemagdalena/posts/pfbid02qWLqPr8NB3kFk5WQBwF5t1K6wueYXuCmNod768JhWqcvebw1ASDHayU8ijAtGry4l"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
