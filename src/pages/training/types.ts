
export interface CourseModule {
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

export interface FormacionContinuaCourse {
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

export interface CategoryType {
  id: string;
  name: string;
}
