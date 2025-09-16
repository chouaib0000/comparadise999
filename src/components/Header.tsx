import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, BarChart3, Phone, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setIsMenuOpen(false);
    
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // We're on home page, scroll to section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // We're on another page, navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'morphism shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-3 rounded-2xl glow-effect group-hover:scale-110 transition-all duration-300">
                <BarChart3 className="h-8 w-8 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-cyan-400/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Comparadise
              </span>
              <span className="text-xs text-blue-300 font-semibold tracking-wider uppercase">
                Courtier Expert
              </span>
            </div>
            <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { label: 'Particuliers', id: 'services' },
              { label: 'Entreprises', id: 'services' },
              { label: 'Avantages sociaux', id: 'services' },
              { label: 'Nous joindre', id: 'contact' },
              { label: 'Réclamation', id: 'reclamation' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-white/90 hover:text-white font-semibold transition-all duration-300 hover:scale-110 relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
            <div className="h-8 w-px bg-white/20"></div>
            <button
              onClick={() => handleNavigation('soumission')}
              className="btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 glow-effect"
            >
              Soumission
            </button>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-3 morphism px-4 py-2 rounded-xl">
            <Phone className="h-5 w-5 text-blue-400" />
            <span className="font-bold text-white">1 416 900-3657</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl morphism text-white hover:bg-white/20 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden morphism rounded-2xl mt-4 p-6 mb-4">
            <div className="space-y-4">
              {[
                { label: 'Particuliers', id: 'services' },
                { label: 'Entreprises', id: 'services' },
                { label: 'Avantages sociaux', id: 'services' },
                { label: 'Nous joindre', id: 'contact' },
                { label: 'Réclamation', id: 'reclamation' },
                { label: 'Soumission', id: 'soumission' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="block w-full text-left py-3 px-4 text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-semibold"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;