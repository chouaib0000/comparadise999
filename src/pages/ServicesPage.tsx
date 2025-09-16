import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Car, Home, Users, Shield, Star, Phone, Calculator, Award, Zap, CheckCircle, TrendingUp, Clock, HeadphonesIcon } from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      id: 'auto',
      icon: Car,
      title: 'Assurance Automobile',
      subtitle: 'Roulez avec assurance',
      description: 'Protection complète pour tous vos véhicules avec des tarifs compétitifs et un service personnalisé.',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Responsabilité civile obligatoire',
        'Protection collision et versement',
        'Assurance tous risques',
        'Protection contre le vol',
        'Assistance routière 24/7',
        'Véhicule de remplacement'
      ],
      benefits: [
        'Économies jusqu\'à 30% sur vos primes',
        'Devis instantané en ligne',
        'Service de réclamation rapide',
        'Conseillers experts dédiés'
      ],
      gradient: 'from-blue-600 to-cyan-600',
      stats: { clients: '2,500+', satisfaction: '98%', economies: '30%' }
    },
    {
      id: 'habitation',
      icon: Home,
      title: 'Assurance Habitation',
      subtitle: 'Bien chez vous, bien protégé',
      description: 'Protégez votre foyer et vos biens avec nos solutions d\'assurance habitation adaptées à vos besoins.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Protection du bâtiment',
        'Assurance du contenu',
        'Responsabilité civile',
        'Frais de subsistance',
        'Protection contre les catastrophes naturelles',
        'Couverture des dépendances'
      ],
      benefits: [
        'Évaluation gratuite de vos besoins',
        'Couverture personnalisée',
        'Assistance sinistre 24/7',
        'Reconstruction à valeur à neuf'
      ],
      gradient: 'from-emerald-600 to-teal-600',
      stats: { clients: '1,800+', satisfaction: '96%', economies: '25%' }
    },
    {
      id: 'entreprise',
      icon: Users,
      title: 'Assurance Entreprise',
      subtitle: 'Protégez votre business',
      description: 'Solutions complètes d\'assurance commerciale pour protéger votre entreprise contre tous les risques.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Responsabilité civile générale',
        'Assurance des biens commerciaux',
        'Protection cyber-risques',
        'Assurance erreurs et omissions',
        'Interruption d\'affaires',
        'Flotte automobile commerciale'
      ],
      benefits: [
        'Analyse de risques personnalisée',
        'Couverture sur mesure',
        'Support juridique inclus',
        'Gestion de réclamations dédiée'
      ],
      gradient: 'from-purple-600 to-pink-600',
      stats: { clients: '500+', satisfaction: '99%', economies: '35%' }
    },
    {
      id: 'avantages',
      icon: Award,
      title: 'Avantages Sociaux',
      subtitle: 'Prenez soin de vos employés',
      description: 'Programmes d\'avantages sociaux complets pour attirer et retenir les meilleurs talents.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Assurance collective santé',
        'Régime de retraite collectif',
        'Assurance invalidité',
        'Assurance vie collective',
        'Assurance dentaire et vision',
        'Programme d\'aide aux employés'
      ],
      benefits: [
        'Amélioration de la rétention',
        'Avantages fiscaux pour l\'entreprise',
        'Administration simplifiée',
        'Support RH dédié'
      ],
      gradient: 'from-orange-600 to-red-600',
      stats: { clients: '300+', satisfaction: '97%', economies: '40%' }
    }
  ];

  const globalStats = [
    { icon: Users, label: 'Clients satisfaits', value: '5,000+', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Shield, label: 'Années d\'expérience', value: '15+', gradient: 'from-emerald-500 to-teal-500' },
    { icon: Award, label: 'Partenaires assureurs', value: '50+', gradient: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, label: 'Économies moyennes', value: '32%', gradient: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="mb-8 flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 group morphism px-6 py-3 rounded-xl"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-semibold">Retour à l'accueil</span>
        </button>

        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 morphism px-8 py-4 rounded-full mb-8">
            <Star className="h-6 w-6 text-yellow-400 animate-pulse" />
            <span className="text-white font-bold text-lg">Services Premium</span>
            <Zap className="h-6 w-6 text-blue-400" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 animate-fadeInUp">
            Nos <span className="gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-glow">Services</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-blue-200 max-w-5xl mx-auto leading-relaxed mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Des solutions de comparaison complètes pour tous vos besoins de protection
          </p>

          {/* Global Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {globalStats.map((stat, index) => (
              <div 
                key={index} 
                className="morphism p-6 rounded-2xl text-center card-3d"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${stat.gradient} p-3 rounded-xl glow-effect inline-block mb-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl font-bold transition-all duration-300 ${
                activeService === index 
                  ? `bg-gradient-to-r ${service.gradient} glow-effect text-white` 
                  : 'morphism text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <service.icon className="h-5 w-5" />
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Service Cards */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`transition-all duration-1000 ${
                activeService === index ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
              }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Enhanced Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`bg-gradient-to-r ${service.gradient} p-6 rounded-2xl glow-effect card-3d`}>
                      <service.icon className="h-16 w-16 text-white" />
                    </div>
                    <div>
                      <h2 className="text-5xl font-black text-white mb-2">{service.title}</h2>
                      <p className="text-2xl text-blue-300 font-bold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Service Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="morphism p-4 rounded-xl text-center">
                      <div className="text-2xl font-black text-white">{service.stats.clients}</div>
                      <div className="text-sm text-gray-300">Clients</div>
                    </div>
                    <div className="morphism p-4 rounded-xl text-center">
                      <div className="text-2xl font-black text-emerald-400">{service.stats.satisfaction}</div>
                      <div className="text-sm text-gray-300">Satisfaction</div>
                    </div>
                    <div className="morphism p-4 rounded-xl text-center">
                      <div className="text-2xl font-black text-yellow-400">{service.stats.economies}</div>
                      <div className="text-sm text-gray-300">Économies</div>
                    </div>
                  </div>
                  
                  <div className="morphism p-10 rounded-3xl">
                    <p className="text-xl text-gray-200 leading-relaxed mb-10 font-medium">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <h4 className="text-2xl font-black text-white mb-6 flex items-center">
                          <Shield className="h-7 w-7 mr-3 text-blue-400" />
                          Couvertures incluses
                        </h4>
                        <div className="space-y-4">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                              <div className="bg-gradient-to-r from-emerald-400 to-teal-400 p-1 rounded-full mr-4 glow-effect">
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <h4 className="text-2xl font-black text-white mb-6 flex items-center">
                          <Star className="h-7 w-7 mr-3 text-yellow-400" />
                          Avantages exclusifs
                        </h4>
                        <div className="space-y-4">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-1 rounded-full mr-4 glow-effect">
                                <Star className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <button 
                      onClick={() => {
                        if (service.id === 'auto') {
                          window.location.href = '/auto-details';
                        } else if (service.id === 'habitation') {
                          window.location.href = '/habitation-details';
                        } else if (service.id === 'entreprise') {
                          window.location.href = '/entreprise-details';
                        } else if (service.id === 'avantages') {
                          window.location.href = '/avantages-details';
                        }
                      }}
                      className={`group btn-3d bg-gradient-to-r ${service.gradient} hover:brightness-110 text-white px-10 py-5 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-lg`}
                    >
                      <Zap className="mr-3 h-6 w-6" />
                      En savoir plus
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                    
                    <button 
                      onClick={() => window.location.href = '/#soumission'}
                      className="group btn-3d bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-black transition-all duration-300 flex items-center justify-center text-lg"
                    >
                      <Calculator className="mr-3 h-6 w-6" />
                      Obtenir une soumission
                    </button>
                  </div>
                </div>

                {/* Enhanced Image with Interactive Elements */}
                <div className={`relative card-3d ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl group">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 holographic opacity-10 mix-blend-overlay"></div>
                    
                    {/* Interactive overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl glow-effect mb-4 inline-block`}>
                          <service.icon className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-2">{service.title}</h3>
                        <p className="text-blue-200 font-semibold">{service.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced floating badges */}
                  <div className="absolute -top-8 -right-8 morphism p-6 rounded-2xl floating-animation">
                    <div className="flex items-center space-x-3">
                      <Star className="h-8 w-8 text-yellow-400" />
                      <div className="text-center">
                        <div className="text-xl font-black text-white">Premium</div>
                        <div className="text-sm text-gray-300">Service</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-8 -left-8 morphism p-6 rounded-2xl floating-animation" style={{ animationDelay: '2s' }}>
                    <div className="flex items-center space-x-3">
                      <div className={`bg-gradient-to-r ${service.gradient} p-3 rounded-xl glow-effect`}>
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-black text-white">{service.stats.satisfaction}</div>
                        <div className="text-sm text-gray-300">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Why Choose Us Section */}
        <div className="mt-32 mb-20">
          <h2 className="text-5xl font-black text-white text-center mb-16">
            Pourquoi choisir <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Comparadise</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="morphism rounded-3xl p-10 text-center card-3d">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-2xl glow-effect inline-block mb-6">
                <HeadphonesIcon className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Support 24/7</h3>
              <p className="text-gray-200 leading-relaxed">
                Notre équipe est disponible en tout temps pour répondre à vos questions et vous accompagner.
              </p>
            </div>
            
            <div className="morphism rounded-3xl p-10 text-center card-3d">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 rounded-2xl glow-effect inline-block mb-6">
                <Clock className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Réponse rapide</h3>
              <p className="text-gray-200 leading-relaxed">
                Soumissions en moins de 24h et traitement accéléré de toutes vos demandes.
              </p>
            </div>
            
            <div className="morphism rounded-3xl p-10 text-center card-3d">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl glow-effect inline-block mb-6">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Expertise reconnue</h3>
              <p className="text-gray-200 leading-relaxed">
                Plus de 15 ans d'expérience et une équipe de courtiers certifiés à votre service.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="morphism rounded-3xl p-16 max-w-5xl mx-auto card-3d">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-2xl glow-effect">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-5xl font-black text-white">
                Prêt à être mieux protégé?
              </h3>
            </div>
            
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Contactez nos experts dès aujourd'hui pour une consultation gratuite et personnalisée
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button 
                onClick={() => window.location.href = 'tel:14169003657'}
                className="group btn-3d bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-6 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-xl"
              >
                <Phone className="mr-4 h-7 w-7" />
                <div className="text-left">
                  <div>1 416 900-3657</div>
                  <div className="text-sm font-medium opacity-90">Consultation gratuite</div>
                </div>
              </button>
              
              <button 
                onClick={() => window.location.href = '/#soumission'}
                className="group btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-xl"
              >
                <Calculator className="mr-4 h-7 w-7" />
                <div className="text-left">
                  <div>Demander une soumission</div>
                  <div className="text-sm font-medium opacity-90">Réponse en 24h</div>
                </div>
                <ArrowLeft className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform duration-300 rotate-180" />
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span>Gratuit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
                <span>Confidentiel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;