import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const createParticles = () => {
      const container = heroRef.current;
      if (!container) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

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
    <section ref={heroRef} className="relative pt-20 pb-16 min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="particles"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl floating-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-medium">Courtier de comparaison #1</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
                Votre courtier de{' '}
                <span className="gradient-text text-glow bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  comparaison
                </span>
              </h1>
              <p className="text-3xl text-blue-300 font-bold neon-glow">
                Engagé à mieux vous protéger.
              </p>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              La passion de mieux protéger les gens d'ici, c'est ce qui nous anime chaque jour. 
              Notre équipe de courtiers compte maintenant plus de ressources et plus d'experts, 
              pour vous négocier les meilleures solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => handleNavigation('/services')}
                className="group btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 glow-effect flex items-center justify-center text-lg"
              >
                <Zap className="mr-3 h-6 w-6" />
                Découvrir nos services
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => handleNavigation('soumission')}
                className="morphism text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:bg-white/30 text-lg"
              >
                Demander une soumission
              </button>
            </div>
          </div>

          {/* 3D Image Container */}
          <div className="relative perspective-1000">
            <div className="relative z-10 card-3d">
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Équipe professionnelle de courtiers"
                  className="w-full transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-purple-600/10 to-transparent"></div>
                
                {/* Holographic overlay */}
                <div className="absolute inset-0 holographic opacity-20 mix-blend-overlay"></div>
              </div>
            </div>
            
            {/* Floating 3D Cards */}
            <div className="absolute -bottom-8 -left-8 morphism p-8 rounded-2xl floating-animation">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl glow-effect">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white">500+</div>
                  <div className="text-sm text-gray-300 font-medium">Clients protégés</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 morphism p-6 rounded-2xl floating-animation" style={{ animationDelay: '3s' }}>
              <div className="text-center">
                <div className="text-2xl font-black text-white mb-1">24/7</div>
                <div className="text-xs text-gray-300 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;