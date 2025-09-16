import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowRight, Zap, Star } from 'lucide-react';

const HomeSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path.startsWith('/')) {
      navigate(path);
    } else {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-xl glow-effect">
                <Home className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-black text-white">Comparaison Habitation</h2>
            </div>
            
            <h3 className="text-3xl font-black gradient-text bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
              Bien chez vous, bien protégé
            </h3>
            
            <div className="morphism p-8 rounded-2xl">
              <p className="text-lg text-gray-200 leading-relaxed">
                Votre maison, c'est bien plus qu'un simple lieu où vous vivez. C'est le cœur de vos souvenirs 
                et le sanctuaire de votre quotidien. Peu importe votre type de logement, nos courtiers de 
                comparaison peuvent vous aider!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => handleNavigation('/habitation-details')}
                className="group btn-3d bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 glow-effect flex items-center justify-center"
              >
                En savoir plus
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => handleNavigation('soumission')}
                className="group btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 glow-effect flex items-center justify-center"
              >
                <Zap className="mr-3 h-5 w-5" />
                Soumission habitation instantanée
              </button>
            </div>
          </div>

          <div className="relative card-3d">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Belle maison familiale"
                className="w-full transform transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 via-teal-600/15 to-transparent"></div>
              <div className="absolute inset-0 holographic opacity-20 mix-blend-overlay"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 morphism p-6 rounded-2xl floating-animation" style={{ animationDelay: '2s' }}>
              <div className="flex items-center space-x-3">
                <Star className="h-6 w-6 text-yellow-400" />
                <span className="text-white font-bold">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;