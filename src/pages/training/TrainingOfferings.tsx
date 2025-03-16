
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { TrainingHero } from './components/TrainingHero';
import { CategoryFilter } from './components/CategoryFilter';
import { ShiftLegend } from './components/ShiftLegend';
import { ProgramTypeTabs } from './components/ProgramTypeTabs';
import { RegularPrograms } from './components/RegularPrograms';
import { ContinuousPrograms } from './components/ContinuousPrograms';
import { TrainingInfoSection } from './components/TrainingInfoSection';
import { CATEGORIES } from './data/categories';

const TrainingOfferings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('regular'); // 'regular' or 'continua'

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <TrainingHero />

      {/* Program Type Selector */}
      <ProgramTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} />

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
                
                <CategoryFilter 
                  categories={CATEGORIES} 
                  selectedCategory={selectedCategory} 
                  setSelectedCategory={setSelectedCategory} 
                />
              </div>

              {/* Legend for shifts */}
              <ShiftLegend />
            </div>
          </section>

          {/* Regular Programs */}
          <RegularPrograms 
            searchTerm={searchTerm} 
            selectedCategory={selectedCategory} 
            setSearchTerm={setSearchTerm}
            setSelectedCategory={setSelectedCategory}
          />
        </>
      )}

      {activeTab === 'continua' && (
        <ContinuousPrograms searchTerm={searchTerm} />
      )}

      {/* Info Section */}
      <TrainingInfoSection />
    </div>
  );
};

export default TrainingOfferings;
