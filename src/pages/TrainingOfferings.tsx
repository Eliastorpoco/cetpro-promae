import React, { useState } from 'react';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell,
  TableCaption
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, Search, Filter, Users, Clock, Calendar, Palette, Laptop, Wrench, Cpu, Zap } from 'lucide-react';
import { cn } from "@/lib/utils";
import CourseCard from '@/components/CourseCard';

// Define the interface for course modules
interface CourseModule {
  id: number;
  planEstudio: string;
  docente: string;
  docenteNombre?: string;
  modulo: string;
  horas: string;
  dias: string;
  fechaInicio: string;
  fechaFin: string;
  turno: 'M' | 'T' | 'N'; // Morning, Tarde, Night
}

// Define the interface for formación continua courses
interface FormacionContinuaCourse {
  id: number;
  familiaProductiva: string;
  docente: string;
  modulo: string;
  horas: string;
  dias: string;
  fechaInicio: string;
  fechaFin: string;
  turno: 'M' | 'T' | 'N';
  convenio?: boolean;
  bgColor: string;
  iconType: string;
}

const TrainingOfferings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('regular'); // 'regular' or 'continua'

  // Formación Continua modules data extracted from the image
  const formacionContinuaCourses: FormacionContinuaCourse[] = [
    // COMPUTACIÓN E INFORMÁTICA
    {
      id: 1,
      familiaProductiva: "COMPUTACIÓN E INFORMÁTICA",
      docente: "ALCA LEON, Hilda",
      modulo: "ILUSTRACIÓN DIGITAL (Corel Draw I)",
      horas: "288",
      dias: "L-M-V",
      fechaInicio: "17/03",
      fechaFin: "25/07",
      turno: "M",
      bgColor: "bg-blue-100",
      iconType: "design"
    },
    {
      id: 2,
      familiaProductiva: "COMPUTACIÓN E INFORMÁTICA",
      docente: "ALCA LEON, Hilda",
      modulo: "APLICACIONES EN PROCESADOR DE TEXTO (WINDOWS - WORD)",
      horas: "240",
      dias: "K-J",
      fechaInicio: "18/03",
      fechaFin: "24/07",
      turno: "M",
      bgColor: "bg-blue-100",
      iconType: "computer"
    },
    {
      id: 3,
      familiaProductiva: "COMPUTACIÓN E INFORMÁTICA",
      docente: "SALAZAR ALBURQUEQUE, Franklin Lauro",
      modulo: "APLICACIONES EN HOJA DE CÁLCULO (Excel)",
      horas: "288",
      dias: "L-M-V",
      fechaInicio: "17/03",
      fechaFin: "25/07",
      turno: "N",
      bgColor: "bg-blue-100",
      iconType: "computer"
    },
    {
      id: 4,
      familiaProductiva: "COMPUTACIÓN E INFORMÁTICA",
      docente: "SALAZAR ALBURQUEQUE, Franklin Lauro",
      modulo: "APLICACIONES EN PROCESADOR DE TEXTO (WINDOWS - WORD) (Convenio)",
      horas: "240",
      dias: "K-J",
      fechaInicio: "18/03",
      fechaFin: "24/07",
      turno: "N",
      convenio: true,
      bgColor: "bg-blue-100",
      iconType: "computer"
    },
    
    // SOLDADURA
    {
      id: 5,
      familiaProductiva: "SOLDADURA",
      docente: "QUISPE ANDRADE, Edwin Lennon",
      modulo: "SOLDADURA ELÉCTRICA",
      horas: "288",
      dias: "L-M-V",
      fechaInicio: "17/03",
      fechaFin: "25/07",
      turno: "M",
      bgColor: "bg-amber-100",
      iconType: "welding"
    },
    {
      id: 6,
      familiaProductiva: "SOLDADURA",
      docente: "QUISPE ANDRADE, Edwin Lennon",
      modulo: "PROCESOS DE SOLDADURA MIG MAG TIG",
      horas: "240",
      dias: "K-J",
      fechaInicio: "18/03",
      fechaFin: "24/07",
      turno: "M",
      bgColor: "bg-amber-100",
      iconType: "welding"
    },
    {
      id: 7,
      familiaProductiva: "SOLDADURA",
      docente: "TOMASTO RODRIGUEZ, Benigno Valentin",
      modulo: "SOLDADURA ELÉCTRICA (Convenio)",
      horas: "288",
      dias: "L-M-V",
      fechaInicio: "17/03",
      fechaFin: "25/07",
      turno: "M",
      convenio: true,
      bgColor: "bg-amber-100",
      iconType: "welding"
    },
    {
      id: 8,
      familiaProductiva: "SOLDADURA",
      docente: "TOMASTO RODRIGUEZ, Benigno Valentin",
      modulo: "PROCESOS DE SOLDADURA MIG MAG TIG (Convenio)",
      horas: "240",
      dias: "K-J",
      fechaInicio: "18/03",
      fechaFin: "24/07",
      turno: "M",
      convenio: true,
      bgColor: "bg-amber-100",
      iconType: "welding"
    },
    {
      id: 9,
      familiaProductiva: "SOLDADURA",
      docente: "BAUTISTA CALIXTRO, Rubes",
      modulo: "SOLDADURA ELÉCTRICA",
      horas: "288",
      dias: "L-M-V",
      fechaInicio: "17/03",
      fechaFin: "25/07",
      turno: "N",
      bgColor: "bg-amber-100",
      iconType: "welding"
    },
    {
      id: 10,
      familiaProductiva: "SOLDADURA",
      docente: "BAUTISTA CALIXTRO, Rubes",
      modulo: "PROCESOS DE SOLDADURA MIG MAG TIG",
      horas: "240",
      dias: "K-J",
      fechaInicio: "18/03",
      fechaFin: "24/07",
      turno: "N",
      bgColor: "bg-amber-100",
      iconType: "welding"
    },
    
    // ELECTRICIDAD Y ELECTRÓNICA
    {
      id: 11,
      familiaProductiva: "ELECTRICIDAD Y ELECTRÓNICA",
      docente: "HUANCOLLO PULIDO, David Willy",
      modulo: "INSTALACIONES ELÉCTRICAS DOMICILIARIAS (Convenio)",
      horas: "288",
      dias: "L-M-V",
      fechaInicio: "17/03",
      fechaFin: "25/07",
      turno: "M",
      convenio: true,
      bgColor: "bg-yellow-100",
      iconType: "electric"
    },
    {
      id: 12,
      familiaProductiva: "ELECTRICIDAD Y ELECTRÓNICA",
      docente: "HUANCOLLO PULIDO, David Willy",
      modulo: "REBOBINADO DE MOTORES ELÉCTRICOS",
      horas: "240",
      dias: "K-J",
      fechaInicio: "18/03",
      fechaFin: "24/07",
      turno: "M",
      bgColor: "bg-yellow-100",
      iconType: "electric"
    },
    {
      id: 13,
      familiaProductiva: "ELECTRICIDAD Y ELECTRÓNICA",
      docente: "NIÑO CUEVA, Romel",
      modulo: "MANTENIMIENTO DE EQUIPOS CELULARES",
      horas: "288",
      dias: "L-M-V",
      fechaInicio: "17/03",
      fechaFin: "25/07",
      turno: "N",
      bgColor: "bg-yellow-100",
      iconType: "phone"
    },
    {
      id: 14,
      familiaProductiva: "ELECTRICIDAD Y ELECTRÓNICA",
      docente: "NIÑO CUEVA, Romel",
      modulo: "REPARACIÓN DE EQUIPOS CELULARES",
      horas: "240",
      dias: "K-J",
      fechaInicio: "18/03",
      fechaFin: "24/07",
      turno: "N",
      bgColor: "bg-yellow-100",
      iconType: "phone"
    },
    {
      id: 15,
      familiaProductiva: "ELECTRICIDAD Y ELECTRÓNICA",
      docente: "CHOQUEPATA MAMANI, Juan Carlos",
      modulo: "INSTALACIONES ELÉCTRICAS DOMICILIARIAS",
      horas: "288",
      dias: "L-M-V",
      fechaInicio: "17/03",
      fechaFin: "25/07",
      turno: "N",
      bgColor: "bg-yellow-100",
      iconType: "electric"
    },
    {
      id: 16,
      familiaProductiva: "ELECTRICIDAD Y ELECTRÓNICA",
      docente: "CHOQUEPATA MAMANI, Juan Carlos",
      modulo: "REBOBINADO DE MOTORES ELÉCTRICOS",
      horas: "240",
      dias: "K-J",
      fechaInicio: "18/03",
      fechaFin: "24/07",
      turno: "N",
      bgColor: "bg-yellow-100",
      iconType: "electric"
    },
    
    // MECÁNICA Y MOTORES
    {
      id: 17,
      familiaProductiva: "MECÁNICA Y MOTORES",
      docente: "QUISPE ORE, Rubén Felipe",
      modulo: "MANTENIMIENTO PREVENTIVO DE MOTORES DE COMBUSTIÓN INTERNA",
      horas: "288",
      dias: "L a V",
      fechaInicio: "17/03",
      fechaFin: "23/05",
      turno: "N",
      bgColor: "bg-green-100",
      iconType: "mechanic"
    },
    {
      id: 18,
      familiaProductiva: "MECÁNICA Y MOTORES",
      docente: "QUISPE ORE, Rubén Felipe",
      modulo: "MANTENIMIENTO CORRECTIVO DE MOTORES DE COMBUSTIÓN INTERNA",
      horas: "240",
      dias: "L a V",
      fechaInicio: "28/05",
      fechaFin: "25/07",
      turno: "N",
      bgColor: "bg-green-100",
      iconType: "mechanic"
    },
    
    // CARPINTERÍA
    {
      id: 19,
      familiaProductiva: "CARPINTERÍA",
      docente: "CONTRERAS PACHECO Zósimo Platón",
      modulo: "CARPINTERÍA EN MADERA",
      horas: "528",
      dias: "L a V",
      fechaInicio: "17/03",
      fechaFin: "25/07",
      turno: "M",
      bgColor: "bg-brown-100",
      iconType: "wood"
    },
    {
      id: 20,
      familiaProductiva: "CARPINTERÍA",
      docente: "CONTRERAS PACHECO Zósimo Platón",
      modulo: "CARPINTERÍA EN TABLEROS Y AGLOMERADOS",
      horas: "528",
      dias: "L a V",
      fechaInicio: "11/08",
      fechaFin: "19/12",
      turno: "M",
      bgColor: "bg-brown-100",
      iconType: "wood"
    },
    {
      id: 21,
      familiaProductiva: "CARPINTERÍA",
      docente: "RUIZ COLLADO, Miguel",
      modulo: "CARPINTERÍA EN MADERA",
      horas: "528",
      dias: "L a V",
      fechaInicio: "17/03",
      fechaFin: "25/07",
      turno: "N",
      bgColor: "bg-brown-100",
      iconType: "wood"
    },
    {
      id: 22,
      familiaProductiva: "CARPINTERÍA",
      docente: "RUIZ COLLADO, Miguel",
      modulo: "CARPINTERÍA EN TABLEROS Y AGLOMERADOS",
      horas: "528",
      dias: "L a V",
      fechaInicio: "11/08",
      fechaFin: "19/12",
      turno: "N",
      bgColor: "bg-brown-100",
      iconType: "wood"
    }
  ];

  // Course categories derived from plans of study
  const categories = [
    { id: 'all', name: 'Todos los Programas' },
    { id: 'ASISTENCIA DE CONTABILIDAD', name: 'Asistencia de Contabilidad' },
    { id: 'APOYO ADMINISTRATIVO', name: 'Apoyo Administrativo' },
    { id: 'MECÁNICA DE MOTOS Y VEHÍCULOS AFINES', name: 'Mecánica de Motos' },
    { id: 'PANADERÍA Y PASTELERÍA', name: 'Panadería y Pastelería' },
    { id: 'COSTURA Y ACABADOS', name: 'Costura y Acabados' },
    { id: 'CORTE Y ENSAMBLAJE', name: 'Corte y Ensamblaje' },
    { id: 'PLANCHADO Y PINTURA EN VEHÍCULOS AUTOMOTORES', name: 'Planchado y Pintura' },
    { id: 'SOPORTE TÉCNICO Y OPERACIONES DE CENTROS DE CÓMPUTO', name: 'Soporte Técnico' },
    { id: 'ASISTENCIA TÉCNICA DE PRODUCCIÓN Y REALIZACIÓN AUDIOVISUAL', name: 'Producción Audiovisual' },
    { id: 'CONFECCIÓN DE ARTÍCULOS DE CUERO Y MARROQUINERÍA', name: 'Marroquinería' },
    { id: 'PRODUCCIÓN DE TEJEDURÍA', name: 'Tejeduría' },
    { id: 'ALBAÑILERÍA', name: 'Albañilería' },
    { id: 'ACABADOS EN EDIFICACIONES Y OBRAS CIVILES', name: 'Acabados en Edificaciones' },
    { id: 'PELUQUERÍA Y BARBERÍA', name: 'Peluquería y Barbería' },
    { id: 'CARPINTERÍA EN MADERA', name: 'Carpintería' },
  ];

  // Course data array based on the provided tables
  const courseModules: CourseModule[] = [
    // Asistencia de Contabilidad
    {
      id: 1,
      planEstudio: 'ASISTENCIA DE CONTABILIDAD',
      docente: 'BARRIOS ESPERILLA, Orsa',
      modulo: 'PROCEDIMIENTOS FINANCIEROS Y CONTABLES',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 2,
      planEstudio: 'ASISTENCIA DE CONTABILIDAD',
      docente: 'BARRIOS ESPERILLA, Orsa',
      modulo: 'LIQUIDACIÓN DE IMPUESTOS',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'M'
    },
    {
      id: 3,
      planEstudio: 'ASISTENCIA DE CONTABILIDAD',
      docente: 'ROJAS CAJA Sandra Patricia',
      modulo: 'PROCEDIMIENTOS FINANCIEROS Y CONTABLES',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'N'
    },
    {
      id: 4,
      planEstudio: 'ASISTENCIA DE CONTABILIDAD',
      docente: 'ROJAS CAJA Sandra Patricia',
      modulo: 'LIQUIDACIÓN DE IMPUESTOS',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'N'
    },
    // Apoyo Administrativo
    {
      id: 5,
      planEstudio: 'APOYO ADMINISTRATIVO',
      docente: 'NIÑO CALLE, Nestor Alonso',
      modulo: 'ATENCIÓN E INFORMACIÓN AL CLIENTE',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 6,
      planEstudio: 'APOYO ADMINISTRATIVO',
      docente: 'NIÑO CALLE, Nestor Alonso',
      modulo: 'OPERACIONES Y REGISTROS DE DOCUMENTOS ADMINISTRATIVOS',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'M'
    },
    {
      id: 7,
      planEstudio: 'APOYO ADMINISTRATIVO',
      docente: 'BRAVO LUNA, José Antonio',
      modulo: 'ATENCIÓN E INFORMACIÓN AL CLIENTE',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'N'
    },
    {
      id: 8,
      planEstudio: 'APOYO ADMINISTRATIVO',
      docente: 'BRAVO LUNA, José Antonio',
      modulo: 'OPERACIONES Y REGISTROS DE DOCUMENTOS ADMINISTRATIVOS',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'N'
    },
    // Mecánica de Motos
    {
      id: 9,
      planEstudio: 'MECÁNICA DE MOTOS Y VEHÍCULOS AFINES',
      docente: 'PONCE RODRIGUEZ, Jose Daniel',
      modulo: 'MANTENIMIENTO Y REPARACIÓN DE MOTORES Y SISTEMAS DE CHASIS EN VEHÍCULOS MENORES',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'T'
    },
    {
      id: 10,
      planEstudio: 'MECÁNICA DE MOTOS Y VEHÍCULOS AFINES',
      docente: 'PONCE RODRIGUEZ, Jose Daniel',
      modulo: 'MANTENIMIENTO Y REPARACIÓN DE LOS SISTEMAS ELÉCTRICOS, ELECTRÓNICOS Y GAS GLP-GNV EN VEHÍCULOS MENORES',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'T'
    },
    // Panadería y Pastelería
    {
      id: 11,
      planEstudio: 'PANADERÍA Y PASTELERÍA',
      docente: 'SALAZAR LEZMA María Violeta',
      modulo: 'ACONDICIONAMIENTO Y ELABORACIÓN DE PRODUCTOS DE PANADERÍA Y PASTELERÍA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 12,
      planEstudio: 'PANADERÍA Y PASTELERÍA',
      docente: 'SALAZAR LEZMA María Violeta',
      modulo: 'DECORACIÓN Y PRESENTACIÓN DE LOS PRODUCTOS DE PANADERÍA Y PASTELERÍA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'M'
    },
    {
      id: 13,
      planEstudio: 'PANADERÍA Y PASTELERÍA',
      docente: 'CUBAS CAMACHO, Silvia',
      modulo: 'ACONDICIONAMIENTO Y ELABORACIÓN DE PRODUCTOS DE PANADERÍA Y PASTELERÍA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'T'
    },
    {
      id: 14,
      planEstudio: 'PANADERÍA Y PASTELERÍA',
      docente: 'CUBAS CAMACHO, Silvia',
      modulo: 'DECORACIÓN Y PRESENTACIÓN DE LOS PRODUCTOS DE PANADERÍA Y PASTELERÍA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'T'
    },
    {
      id: 15,
      planEstudio: 'PANADERÍA Y PASTELERÍA',
      docente: 'ALQUIZAR HUERTA, Maritza Alejandrina',
      modulo: 'ACONDICIONAMIENTO Y ELABORACIÓN DE PRODUCTOS DE PANADERÍA Y PASTELERÍA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'N'
    },
    {
      id: 16,
      planEstudio: 'PANADERÍA Y PASTELERÍA',
      docente: 'ALQUIZAR HUERTA, Maritza Alejandrina',
      modulo: 'DECORACIÓN Y PRESENTACIÓN DE LOS PRODUCTOS DE PANADERÍA Y PASTELERÍA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'N'
    },
    // Costura y Acabados
    {
      id: 17,
      planEstudio: 'COSTURA Y ACABADOS',
      docente: 'COTITO ANAYA Teresa Eugenia',
      modulo: 'TÉCNICAS DE CONFECCIÓN DE PRENDAS DE VESTIR',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'N'
    },
    {
      id: 18,
      planEstudio: 'COSTURA Y ACABADOS',
      docente: 'COTITO ANAYA Teresa Eugenia',
      modulo: 'TÉCNICAS DE PROCESOS DE ACABADOS EN PRENDAS DE VESTIR',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'N'
    },
    {
      id: 19,
      planEstudio: 'COSTURA Y ACABADOS',
      docente: 'HUACHILLO CALERO, Giovanny',
      modulo: 'TÉCNICAS DE CONFECCIÓN DE PRENDAS DE VESTIR',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'T'
    },
    {
      id: 20,
      planEstudio: 'COSTURA Y ACABADOS',
      docente: 'HUACHILLO CALERO, Giovanny',
      modulo: 'TÉCNICAS DE PROCESOS DE ACABADOS EN PRENDAS DE VESTIR',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'T'
    },
    // Corte y Ensamblaje
    {
      id: 21,
      planEstudio: 'CORTE Y ENSAMBLAJE',
      docente: 'GIRALDO ROQUE María Antonieta',
      modulo: 'TÉCNICAS DE TIZADO, TENDIDO Y CORTE DE PRENDAS DE VESTIR',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 22,
      planEstudio: 'CORTE Y ENSAMBLAJE',
      docente: 'GIRALDO ROQUE María Antonieta',
      modulo: 'TÉCNICAS DE CONFECCIÓN DE PRENDAS DE VESTIR',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'M'
    },
    // Planchado y Pintura
    {
      id: 23,
      planEstudio: 'PLANCHADO Y PINTURA EN VEHÍCULOS AUTOMOTORES',
      docente: 'PAREDES CHUCOS Delfín Andrés',
      modulo: 'ACONDICIONAMIENTO Y PLANCHADO DE VEHÍCULOS AUTOMOTORES',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 24,
      planEstudio: 'PLANCHADO Y PINTURA EN VEHÍCULOS AUTOMOTORES',
      docente: 'PAREDES CHUCOS Delfín Andrés',
      modulo: 'PREPARACIÓN Y MANEJO DE INSUMOS DE COCINA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 25,
      planEstudio: 'PLANCHADO Y PINTURA EN VEHÍCULOS AUTOMOTORES',
      docente: 'PAREDES CHUCOS Delfín Andrés',
      modulo: 'PINTURA DE VEHÍCULOS AUTOMOTORES',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'M'
    },
    // Soporte Técnico
    {
      id: 26,
      planEstudio: 'SOPORTE TÉCNICO Y OPERACIONES DE CENTROS DE CÓMPUTO',
      docente: 'HURTADO LEGUÍA Juan Carlos',
      modulo: 'ATENCIÓN DE INCIDENTES Y PROBLEMAS DE OPERATIVIDAD EN EL CENTRO DE CÓMPUTO',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 27,
      planEstudio: 'SOPORTE TÉCNICO Y OPERACIONES DE CENTROS DE CÓMPUTO',
      docente: 'HURTADO LEGUÍA Juan Carlos',
      modulo: 'MONITOREO Y ACCIONES DE MANTENIMIENTO DE CENTROS DE CÓMPUTO',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'M'
    },
    {
      id: 28,
      planEstudio: 'SOPORTE TÉCNICO Y OPERACIONES DE CENTROS DE CÓMPUTO',
      docente: 'PACHAS GUTIERREZ Alexander Raul',
      modulo: 'ATENCIÓN DE INCIDENTES Y PROBLEMAS DE OPERATIVIDAD EN EL CENTRO DE CÓMPUTO',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'N'
    },
    {
      id: 29,
      planEstudio: 'SOPORTE TÉCNICO Y OPERACIONES DE CENTROS DE CÓMPUTO',
      docente: 'PACHAS GUTIERREZ Alexander Raul',
      modulo: 'MONITOREO Y ACCIONES DE MANTENIMIENTO DE CENTROS DE CÓMPUTO',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'N'
    },
    // Producción Audiovisual
    {
      id: 30,
      planEstudio: 'ASISTENCIA TÉCNICA DE PRODUCCIÓN Y REALIZACIÓN AUDIOVISUAL',
      docente: 'CASTRO MORAN, Renée',
      modulo: 'DOCUMENTACIÓN PRELIMINAR DE LA PRODUCCIÓN Y REALIZACIÓN AUDIO VISUAL',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 31,
      planEstudio: 'ASISTENCIA TÉCNICA DE PRODUCCIÓN Y REALIZACIÓN AUDIOVISUAL',
      docente: 'CASTRO MORAN, Renée',
      modulo: 'TRABAJO DE POST PRODUCCIÓN',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'M'
    },
    {
      id: 32,
      planEstudio: 'ASISTENCIA TÉCNICA DE PRODUCCIÓN Y REALIZACIÓN AUDIOVISUAL',
      docente: 'RIOS MANTARI Luis Alberto',
      modulo: 'DOCUMENTACIÓN PRELIMINAR DE LA PRODUCCIÓN Y REALIZACIÓN AUDIO VISUAL',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'N'
    },
    {
      id: 33,
      planEstudio: 'ASISTENCIA TÉCNICA DE PRODUCCIÓN Y REALIZACIÓN AUDIOVISUAL',
      docente: 'RIOS MANTARI Luis Alberto',
      modulo: 'TRABAJO DE POST PRODUCCIÓN',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'N'
    },
    // Otros programas y cursos adicionales de la segunda imagen
    // ... 
    {
      id: 34,
      planEstudio: 'CONFECCIÓN DE ARTÍCULOS DE CUERO Y MARROQUINERÍA',
      docente: 'SUSAYA LEÓN Marlene Patricia',
      modulo: 'DISEÑO, CORTE Y HABILITADO DE PIEZAS DE CUERO Y MARROQUINERÍA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 35,
      planEstudio: 'CONFECCIÓN DE ARTÍCULOS DE CUERO Y MARROQUINERÍA',
      docente: 'SUSAYA LEÓN Marlene Patricia',
      modulo: 'APARADO Y ACABADOS EN ARTÍCULOS DE CUERO Y MARROQUINERÍA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'M'
    },
    {
      id: 36,
      planEstudio: 'CONFECCIÓN DE ARTÍCULOS DE CUERO Y MARROQUINERÍA',
      docente: 'TURPO COLQUI Fanny',
      modulo: 'DISEÑO, CORTE Y HABILITADO DE PIEZAS DE CUERO Y MARROQUINERÍA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'N'
    },
    {
      id: 37,
      planEstudio: 'CONFECCIÓN DE ARTÍCULOS DE CUERO Y MARROQUINERÍA',
      docente: 'TURPO COLQUI Fanny',
      modulo: 'APARADO Y ACABADOS EN ARTÍCULOS DE CUERO Y MARROQUINERÍA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'N'
    },
    {
      id: 38,
      planEstudio: 'PRODUCCIÓN DE TEJEDURÍA',
      docente: 'UM MUÑOZ Iván Emilia',
      modulo: 'TÉCNICAS BÁSICAS DE TEJIDO',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'N'
    },
    {
      id: 39,
      planEstudio: 'PRODUCCIÓN DE TEJEDURÍA',
      docente: 'UM MUÑOZ Iván Emilia',
      modulo: 'PRODUCCIÓN DE PRENDAS TEJIDAS',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'N'
    },
    {
      id: 40,
      planEstudio: 'ALBAÑILERÍA',
      docente: 'ORTEGA CABELLO JAIME LUCIANO',
      modulo: 'LEVANTAMIENTO Y CONSTRUCCIÓN DE MUROS DE ALBAÑILERÍA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 41,
      planEstudio: 'ALBAÑILERÍA',
      docente: 'ORTEGA CABELLO JAIME LUCIANO',
      modulo: 'REVESTIMIENTO Y PINTADO EN EDIFICACIONES',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'M'
    },
    {
      id: 42,
      planEstudio: 'ACABADOS EN EDIFICACIONES Y OBRAS CIVILES',
      docente: 'ABANTO CHAVEZ Helder',
      modulo: 'REVESTIMIENTO DE SUPERFICIES EN EDIFICACIONES Y OBRAS CIVILES',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'N'
    },
    {
      id: 43,
      planEstudio: 'ACABADOS EN EDIFICACIONES Y OBRAS CIVILES',
      docente: 'ABANTO CHAVEZ Helder',
      modulo: 'PINTADO DE SUPERFICIES EN EDIFICACIONES Y OBRAS CIVILES',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'N'
    },
    {
      id: 44,
      planEstudio: 'PELUQUERÍA Y BARBERÍA',
      docente: 'VILLAFANA FAJARDO Lucía Beatriz',
      modulo: 'CORTE DE CABELLO, BARBA Y PEINADO',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 45,
      planEstudio: 'PELUQUERÍA Y BARBERÍA',
      docente: 'VILLAFANA FAJARDO Lucía Beatriz',
      modulo: 'TRATAMIENTO CAPILAR, COLORACIÓN, ONDULACIÓN Y LACEADOS',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'M'
    },
    {
      id: 46,
      planEstudio: 'PELUQUERÍA Y BARBERÍA',
      docente: 'CASTAÑEDA AVILA, Marilu Consuelo',
      modulo: 'CORTE DE CABELLO, BARBA Y PEINADO',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'T'
    },
    {
      id: 47,
      planEstudio: 'PELUQUERÍA Y BARBERÍA',
      docente: 'CASTAÑEDA AVILA, Marilu Consuelo',
      modulo: 'TRATAMIENTO CAPILAR, COLORACIÓN, ONDULACIÓN Y LACEADOS',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'T'
    },
    {
      id: 48,
      planEstudio: 'PELUQUERÍA Y BARBERÍA',
      docente: 'TORRES GRIJALBA, Analí',
      modulo: 'CORTE DE CABELLO, BARBA Y PEINADO',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'N'
    },
    {
      id: 49,
      planEstudio: 'PELUQUERÍA Y BARBERÍA',
      docente: 'TORRES GRIJALBA, Analí',
      modulo: 'TRATAMIENTO CAPILAR, COLORACIÓN, ONDULACIÓN Y LACEADOS',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'N'
    },
    {
      id: 50,
      planEstudio: 'CARPINTERÍA EN MADERA',
      docente: 'CONTRERAS PACHECO Zósimo Platón',
      modulo: 'CARPINTERÍA EN MADERA',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '17/03',
      fechaFin: '25/07',
      turno: 'M'
    },
    {
      id: 51,
      planEstudio: 'CARPINTERÍA EN MADERA',
      docente: 'CONTRERAS PACHECO Zósimo Platón',
      modulo: 'CARPINTERÍA EN TABLEROS Y AGLOMERADOS',
      horas: '528',
      dias: 'L a V',
      fechaInicio: '11/08',
      fechaFin: '19/12',
      turno: 'M'
    }
  ];

  // Filter courses based on search term and selected category
  const filteredCourses = courseModules.filter(course => {
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

  // Helper to get turn badge color
  const getTurnoBadge = (turno: 'M' | 'T' | 'N') => {
    switch(turno) {
      case 'M': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'T': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'N': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Helper to get turno name
  const getTurnoName = (turno: 'M' | 'T' | 'N') => {
    switch(turno) {
      case 'M': return 'Mañana';
      case 'T': return 'Tarde';
      case 'N': return 'Noche';
      default: return 'Desconocido';
    }
  };

  // Helper to get icon for module type
  const getModuleIcon = (iconType: string) => {
    switch(iconType) {
      case 'design': return <Palette className="h-10 w-10 text-indigo-500" />;
      case 'computer': return <Laptop className="h-10 w-10 text-blue-500" />;
      case 'welding': return <Zap className="h-10 w-10 text-amber-500" />;
      case 'electric': return <Zap className="h-10 w-10 text-yellow-500" />;
      case 'phone': return <Cpu className="h-10 w-10 text-green-500" />;
      case 'mechanic': return <Wrench className="h-10 w-10 text-red-500" />;
      default: return <Book className="h-10 w-10 text-gray-500" />;
    }
  };

  // Group formación continua courses by family
  const groupedContinuaCourses = formacionContinuaCourses.reduce((acc, course) => {
    if (!acc[course.familiaProductiva]) {
      acc[course.familiaProductiva] = [];
    }
    acc[course.familiaProductiva].push(course);
    return acc;
  }, {} as Record<string, FormacionContinuaCourse[]>);

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
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-cetpro-blue to-cetpro-darkblue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        
        <div className="relative page-container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium mb-3">
              Plan de Estudios
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Oferta Formativa</h1>
            <p className="text-xl text-white/90">
              Conoce nuestros módulos formativos y programas de estudio
            </p>
          </div>
        </div>
      </section>

      {/* Program Type Selector */}
      <section className="py-6 bg-white border-b">
        <div className="page-container">
          <div className="flex justify-center gap-4 animate-fade-in">
            <Button
              variant={activeTab === 'regular' ? 'default' : 'outline'}
              className={cn(
                "text-base px-6",
                activeTab === 'regular' 
                  ? "bg-cetpro-blue hover:bg-cetpro-darkblue" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              )}
              onClick={() => setActiveTab('regular')}
            >
              Auxiliar Técnico
            </Button>
            <Button
              variant={activeTab === 'continua' ? 'default' : 'outline'}
              className={cn(
                "text-base px-6",
                activeTab === 'continua' 
                  ? "bg-cetpro-blue hover:bg-cetpro-darkblue" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              )}
              onClick={() => setActiveTab('continua')}
            >
              Formación Continua
            </Button>
          </div>
        </div>
      </section>

      {activeTab === 'regular' && (
        <>
          {/* Search and Filter */}
          <section className="py-8 bg-white border-b">
            <div className="page-container">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between animate-fade-in">
                <div className="w-full md:w-auto flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Buscar por módulo, programa o docente..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cetpro-blue focus:border-transparent"
                  />
                </div>
                
                <div className="w-full md:w-auto flex gap-2 flex-wrap justify-center">
                  <div className="flex items-center mr-2">
                    <Filter className="h-5 w-5 mr-1 text-cetpro-blue" />
                    <span className="text-sm font-medium">Filtrar por programa:</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 max-w-xl">
                    {categories.slice(0, 5).map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        className={cn(
                          "text-xs",
                          selectedCategory === category.id
                            ? "bg-cetpro-blue hover:bg-cetpro-darkblue"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        )}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </Button>
                    ))}
                    {selectedCategory === 'all' && (
                      <Button
                        variant="outline"
                        className="text-xs border-cetpro-gold text-cetpro-gold hover:bg-cetpro-gold/10"
                      >
                        Más filtros...
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Legend for shifts */}
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                <div className="flex items-center">
                  <span className={cn("inline-block w-3 h-3 rounded-full mr-2", "bg-yellow-400")}></span>
                  <span className="text-sm text-gray-600">Mañana</span>
                </div>
                <div className="flex items-center">
                  <span className={cn("inline-block w-3 h-3 rounded-full mr-2", "bg-blue-400")}></span>
                  <span className="text-sm text-gray-600">Tarde</span>
                </div>
                <div className="flex items-center">
                  <span className={cn("inline-block w-3 h-3 rounded-full mr-2", "bg-purple-400")}></span>
                  <span className="text-sm text-gray-600">Noche</span>
                </div>
              </div>
            </div>
          </section>

          {/* Course Modules Tables */}
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
        </>
      )}

      {activeTab === 'continua' && (
        <section className="section-padding bg-gray-50">
          <div className="page-container">
            <div className="space-y-12 animate-fade-in">
              {Object.entries(groupedContinuaCourses).map(([familyName, courses]) => (
                <Card key={familyName} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-cetpro-blue/10 to-transparent">
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      {familyName === "COMPUTACIÓN E INFORMÁTICA" && <Laptop className="h-5 w-5 mr-2 text-blue-500" />}
                      {familyName === "SOLDADURA" && <Zap className="h-5 w-5 mr-2 text-amber-500" />}
                      {familyName === "ELECTRICIDAD Y ELECTRÓNICA" && <Zap className="h-5 w-5 mr-2 text-yellow-500" />}
                      {familyName === "MECÁNICA Y MOTORES" && <Wrench className="h-5 w-5 mr-2 text-red-500" />}
                      {familyName === "CARPINTERÍA" && <Wrench className="h-5 w-5 mr-2 text-amber-600" />}
                      {familyName}
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
              {formacionContinuaCourses.slice(0, 6).map((course) => (
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
      )}

      {/* Info Section */}
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
    </div>
  );
};

export default TrainingOfferings;
