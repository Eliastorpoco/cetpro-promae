
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProgramTypeTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ProgramTypeTabs: React.FC<ProgramTypeTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
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
            Programas Regulares
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
  );
};
