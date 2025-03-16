
import React from 'react';
import { Book, Clock, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { COURSE_MODULES } from '../data/courseModules';
import { CourseModule } from '../types';
import { getTurnoBadge, getTurnoName } from '../utils';
import { cn } from "@/lib/utils";

interface RegularProgramsProps {
  searchTerm: string;
  selectedCategory: string;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string) => void;
}

export const RegularPrograms: React.FC<RegularProgramsProps> = ({ 
  searchTerm, 
  selectedCategory,
  setSearchTerm,
  setSelectedCategory
}) => {
  // Filter courses based on search term and selected category
  const filteredCourses = COURSE_MODULES.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.planEstudio === selectedCategory;
    const matchesSearch = 
      course.modulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.planEstudio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.docente && course.docente.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Group courses by plan de estudio for better organization
  const groupedCourses = filteredCourses.reduce((acc, course) => {
    if (!acc[course.planEstudio]) {
      acc[course.planEstudio] = [];
    }
    acc[course.planEstudio].push(course);
    return acc;
  }, {} as Record<string, CourseModule[]>);

  // No results component
  const NoResults = () => (
    <div className="text-center py-16 animate-fade-in">
      <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 mb-6">
        <Book className="h-12 w-12 text-gray-400" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron módulos</h3>
      <p className="text-gray-600 mb-6">
        No hay módulos que coincidan con tu búsqueda. Intenta con otros términos o categorías.
      </p>
      <Button 
        variant="outline" 
        className="border-cetpro-blue text-cetpro-blue hover:bg-cetpro-blue hover:text-white"
        onClick={() => {
          setSearchTerm('');
          setSelectedCategory('all');
        }}
      >
        Ver todos los módulos
      </Button>
    </div>
  );

  return (
    <section className="section-padding bg-gray-50">
      <div className="page-container">
        {Object.keys(groupedCourses).length > 0 ? (
          <div className="space-y-12 animate-fade-in">
            {Object.entries(groupedCourses).map(([planEstudio, courses]) => (
              <Card key={planEstudio} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-cetpro-blue/10 to-transparent">
                  <CardTitle className="text-xl text-gray-900">{planEstudio}</CardTitle>
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
                              </div>
                            </TableCell>
                            <TableCell>
                              {course.docente || "Por asignar"}
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
        ) : (
          <NoResults />
        )}
      </div>
    </section>
  );
};
