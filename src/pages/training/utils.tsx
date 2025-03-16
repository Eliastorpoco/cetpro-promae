
import React from 'react';
import { Palette, Laptop, Wrench, Zap, Cpu, Book } from 'lucide-react';
import { cn } from "@/lib/utils";

// Helper to get turn badge color
export const getTurnoBadge = (turno: 'M' | 'T' | 'N') => {
  switch(turno) {
    case 'M': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'T': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'N': return 'bg-purple-100 text-purple-800 border-purple-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

// Helper to get turno name
export const getTurnoName = (turno: 'M' | 'T' | 'N') => {
  switch(turno) {
    case 'M': return 'Mañana';
    case 'T': return 'Tarde';
    case 'N': return 'Noche';
    default: return 'Desconocido';
  }
};

// Helper to get icon for module type
export const getModuleIcon = (iconType: string) => {
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
