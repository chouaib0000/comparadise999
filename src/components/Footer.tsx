import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Phone, Mail, MapPin, Sparkles, Star } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
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
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8 group">
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
              <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Votre courtier de comparaison engagé à mieux vous protéger avec les meilleures solutions du marché.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg glow-effect">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">1 416 900-3657</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg glow-effect">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">info@comparadise.ca</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg glow-effect">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Montréal, QC, Canada</span>
              </div>
            </div>
          </div>

          {/* Nos produits */}
          <div>
            <h3 className="text-xl font-black text-white mb-6 flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              Nos produits
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Particuliers', id: 'services' },
                { label: 'Entreprises', id: 'services' },
                { label: 'Avantages sociaux', id: 'services' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-black text-white mb-6 flex items-center">
              <Sparkles className="h-5 w-5 text-purple-400 mr-2" />
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'À propos', id: 'about' },
                { label: 'Nous joindre', id: 'contact' },
                { label: 'Nos partenaires', id: 'partners' },
                { label: 'Carrières', id: 'contact' },
                { label: 'Blogue', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Language & Legal */}
          <div>
            <h3 className="text-xl font-black text-white mb-6">Langue</h3>
            <div className="flex space-x-4 mb-8">
              <button className="btn-3d bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold glow-effect">FR</button>
              <button className="morphism text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-all duration-300">EN</button>
            </div>
            
            <div className="space-y-3 text-sm">
              <button onClick={() => alert('Page en construction')} className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">
                Politique de confidentialité
              </button>
              <button onClick={() => alert('Page en construction')} className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">
                Conditions d'utilisation
              </button>
              <button onClick={() => alert('Page en construction')} className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">
                Politique de plaintes
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <div className="morphism rounded-2xl p-6 inline-block">
            <p className="text-gray-400 text-sm">
              © 2025 Comparadise Inc. Notre cabinet a des liens financiers avec nos partenaires de comparaison.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;