import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Home, Users, ArrowRight, Star, Zap } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      id: 'particuliers',
      icon: Car,
      title: 'Comparaison des particuliers',
      description: 'Solutions de comparaison personnalisées pour vos besoins individuels et familiaux.',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Comparaison auto', 'Comparaison habitation', 'Assurance vie', 'Assurance voyage'],
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'entreprises',
      icon: Users,
      title: 'Comparaison des entreprises',
      description: 'Protégez votre entreprise avec nos solutions de comparaison commerciales adaptées.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Assurance commerciale', 'Responsabilité civile', 'Assurance cyber', 'Flotte automobile'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'avantages',
      icon: Home,
      title: 'Avantages sociaux',
      description: 'Programmes d\'avantages sociaux complets pour vos employés et votre organisation.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Assurance collective', 'Régime de retraite', 'Assurance invalidité', 'Assurance dentaire'],
      gradient: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white mb-8">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="font-semibold">Services Premium</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Nos <span className="gradient-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions de comparaison innovantes adaptées à tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative card-3d"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="morphism rounded-3xl overflow-hidden transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-30`}></div>
                  
                  <div className="absolute top-6 left-6">
                    <div className="morphism p-4 rounded-xl">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-bold">Premium</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 glow-effect"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="group/btn w-full btn-3d bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white border border-white/20 py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center">
                    <Zap className="mr-2 h-5 w-5" />
                    <span onClick={() => {
                      if (service.id === 'particuliers') {
                        navigate('/auto-details');
                      } else if (service.id === 'entreprises') {
                        navigate('/entreprise-details');
                      } else if (service.id === 'avantages') {
                        navigate('/avantages-details');
                      }
                    }}>En savoir plus</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;