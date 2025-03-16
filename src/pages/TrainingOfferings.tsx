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
      turno: "N",
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
      turno: "N",
      bgColor: "bg-amber-100",
      iconType: "welding"
    },
    {
      id: 7,
      familiaProductiva: "SOLDADURA",
      docente: "CONTRATO",
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
      docente: "CONTRATO",
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
      docente: "CONTRATO",
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
      docente: "CONTRATO",
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
      docente: "CONTRATO",
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
      docente: "CONTRATO",
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
      docente: "CONTRATO",
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
      docente: "CONTRATO",
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      docente: '',
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
      id:
