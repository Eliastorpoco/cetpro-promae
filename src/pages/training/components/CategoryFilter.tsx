
import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CategoryType } from '../types';

interface CategoryFilterProps {
  categories: CategoryType[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  return (
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
  );
};
