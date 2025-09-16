import React from 'react';
import { Award, Users, Target, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    { 
      icon: Heart, 
      title: 'Passion', 
      description: 'Nous aimons ce que nous faisons',
      gradient: 'from-red-500 to-pink-500'
    },
    { 
      icon: Users, 
      title: 'Expertise', 
      description: 'Plus de 10 ans d\'expérience',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Target, 
      title: 'Précision', 
      description: 'Solutions sur mesure',
      gradient: 'from-emerald-500 to-teal-500'
    },
    { 
      icon: Award, 
      title: 'Excellence', 
      description: 'Service de qualité supérieure',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white mb-8">
            <Sparkles className="h-5 w-5 text-yellow-400" />
            <span className="font-semibold">Notre Histoire</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            À <span className="gradient-text bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">propos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Nos courtiers de comparaison redéfinissent votre expérience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              La passion de mieux protéger les gens d'ici, c'est ce qui nous anime chaque jour. 
              Notre équipe de courtiers de comparaison compte maintenant plus de ressources et plus d'experts, 
              pour vous négocier les meilleures solutions. Ce qui nous mène toujours plus loin, 
              c'est de rester près de vos besoins.
            </p>
            
            <button className="group btn-3d bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 glow-effect flex items-center">
              <span className="flex items-center" onClick={() => alert('Section en développement - Contactez-nous pour plus d\'informations!')}>
                Découvrez ce qui nous rend uniques
              </span>
              <Award className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>

          <div className="relative card-3d">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Équipe de professionnels"
                className="w-full transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/15 via-pink-600/10 to-transparent"></div>
              <div className="absolute inset-0 holographic opacity-10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>

        {/* 3D Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group text-center card-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="morphism p-8 rounded-2xl transition-all duration-500 transform group-hover:scale-105">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl mb-6 glow-effect group-hover:rotate-12 transition-transform duration-300`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;