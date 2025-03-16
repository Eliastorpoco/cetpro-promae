
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap, Info, BookOpen, Monitor, Bell, Phone, Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu on location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    {
      name: 'Inicio',
      path: '/',
      icon: <GraduationCap className="h-4 w-4" />
    },
    {
      name: 'Nosotros',
      path: '/nosotros',
      icon: <Info className="h-4 w-4" />
    },
    {
      name: 'Oferta Formativa',
      path: '/oferta-formativa',
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      name: 'Aula Virtual',
      path: '/aula-virtual',
      icon: <Monitor className="h-4 w-4" />
    },
    {
      name: 'Noticias',
      path: '/noticias',
      icon: <Bell className="h-4 w-4" />
    },
    {
      name: 'Contacto',
      path: '/contacto',
      icon: <Phone className="h-4 w-4" />
    }
  ];
  
  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4', {
      'bg-white/90 backdrop-blur-md shadow-md py-2': scrolled,
      'bg-transparent': !scrolled
    })}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <span className="text-2xl font-bold tracking-tight text-cetpro-blue">
                PROMAE <span className="text-cetpro-red">MAGDALENA</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map(item => <Link key={item.name} to={item.path} className={cn('px-3 py-2 text-sm font-medium rounded-md transition-colors relative group flex items-center gap-1.5', location.pathname === item.path ? 'text-cetpro-blue font-semibold' : 'text-gray-700 hover:text-cetpro-blue')}>
                {item.icon}
                {item.name}
                <span className={cn('absolute bottom-0 left-0 w-0 h-0.5 bg-cetpro-blue transition-all duration-300 group-hover:w-full', location.pathname === item.path ? 'w-full' : '')} />
              </Link>)}
          </div>

          <div className="hidden md:block">
            <a 
              href="https://www.facebook.com/cetpro.promaemagdalena" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-cetpro-blue hover:bg-cetpro-darkblue text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Facebook className="h-4 w-4" />
              Inscríbete Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 focus:outline-none" 
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-x-0 top-[60px] bg-white shadow-lg transition-all duration-300 ease-in-out z-50',
          {
            'opacity-100 translate-y-0 pointer-events-auto': isOpen,
            'opacity-0 -translate-y-full pointer-events-none': !isOpen
          }
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(item => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium', 
                location.pathname === item.path 
                  ? 'bg-cetpro-blue/10 text-cetpro-blue' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-cetpro-blue'
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <a 
              href="https://www.facebook.com/cetpro.promaemagdalena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full bg-cetpro-blue hover:bg-cetpro-darkblue text-white px-3 py-2 rounded-md text-base font-medium"
            >
              <Facebook className="h-4 w-4" />
              Inscríbete Ahora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
