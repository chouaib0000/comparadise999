import React from 'react';
import { Home, Shield, Star, ArrowLeft, Phone, Calculator, CheckCircle, Award, Zap } from 'lucide-react';

const HabitationDetails = () => {
  const coverageTypes = [
    {
      title: 'Protection du bâtiment',
      description: 'Couverture complète de la structure de votre propriété',
      details: 'Protège contre les incendies, tempêtes, dégâts d\'eau et autres catastrophes naturelles.',
      icon: Home,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Assurance du contenu',
      description: 'Protection de tous vos biens personnels',
      details: 'Couvre vos meubles, électroniques, vêtements et objets de valeur contre le vol et les dommages.',
      icon: Shield,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Responsabilité civile',
      description: 'Protection contre les réclamations de tiers',
      details: 'Vous protège si quelqu\'un se blesse sur votre propriété ou si vous causez des dommages accidentels.',
      icon: Star,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const additionalServices = [
    'Frais de subsistance temporaires',
    'Protection des dépendances',
    'Couverture des bijoux et objets d\'art',
    'Protection contre les refoulements d\'égouts',
    'Assurance perte d\'usage',
    'Couverture des améliorations locatives'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="mb-8 flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Retour
        </button>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-xl glow-effect">
              <Home className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white">
              Assurance <span className="gradient-text bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Habitation</span>
            </h1>
          </div>
          <p className="text-2xl text-emerald-200 max-w-4xl mx-auto leading-relaxed">
            Protégez votre foyer et vos biens les plus précieux avec nos solutions complètes
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-20 card-3d">
          <div className="relative overflow-hidden rounded-3xl">
            <img 
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Belle maison familiale"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/15 via-teal-600/10 to-transparent"></div>
          </div>
        </div>

        {/* Coverage Types */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Types de <span className="gradient-text bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">protection</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageTypes.map((coverage, index) => (
              <div key={index} className="morphism rounded-2xl p-8 text-center card-3d">
                <div className={`bg-gradient-to-r ${coverage.gradient} p-4 rounded-xl glow-effect inline-block mb-6`}>
                  <coverage.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{coverage.title}</h3>
                <p className="text-emerald-200 mb-4 font-semibold">{coverage.description}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{coverage.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Services <span className="gradient-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">additionnels</span>
          </h2>
          
          <div className="morphism rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-white font-semibold">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Pourquoi nous <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">choisir</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="morphism rounded-2xl p-8">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center">
                <Award className="h-8 w-8 text-yellow-400 mr-3" />
                Expertise reconnue
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Plus de 10 ans d'expérience dans le domaine de l'assurance habitation. 
                Nos courtiers connaissent parfaitement le marché québécois et ses spécificités.
              </p>
            </div>
            
            <div className="morphism rounded-2xl p-8">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center">
                <Zap className="h-8 w-8 text-blue-400 mr-3" />
                Service rapide
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Soumissions en moins de 24h et traitement accéléré des réclamations. 
                Notre équipe est disponible pour vous accompagner à chaque étape.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="morphism rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-black text-white mb-6">
              Protégez votre foyer dès aujourd'hui
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Obtenez une soumission personnalisée en quelques minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => window.location.href = 'tel:14169003657'}
                className="group btn-3d bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-5 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-lg"
              >
                <Phone className="mr-3 h-6 w-6" />
                1 416 900-3657
              </button>
              
              <button 
                onClick={() => {
                  window.location.href = '/#soumission';
                }}
                className="group btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-lg"
              >
                <Calculator className="mr-3 h-6 w-6" />
                Soumission en ligne
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitationDetails;