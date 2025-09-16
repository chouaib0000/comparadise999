import React from 'react';
import { Car, Shield, Star, ArrowLeft, Phone, Calculator, CheckCircle, Award, Zap } from 'lucide-react';

const AutoDetails = () => {
  const coverageTypes = [
    {
      title: 'Responsabilité civile',
      description: 'Protection obligatoire contre les dommages causés à autrui',
      details: 'Couverture minimale requise par la loi. Protège contre les réclamations de tiers en cas d\'accident.',
      icon: Shield,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Collision',
      description: 'Couverture des dommages à votre véhicule lors d\'une collision',
      details: 'Répare ou remplace votre véhicule en cas de collision, peu importe qui est responsable.',
      icon: Car,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tous risques',
      description: 'Protection complète incluant vol, vandalisme et catastrophes naturelles',
      details: 'La protection la plus complète disponible. Couvre pratiquement tous les dommages possibles.',
      icon: Star,
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const additionalServices = [
    'Assistance routière 24/7',
    'Véhicule de remplacement',
    'Protection du conducteur',
    'Assurance location de véhicule',
    'Protection des accessoires',
    'Couverture internationale'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="mb-8 flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Retour
        </button>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-xl glow-effect">
              <Car className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white">
              Assurance <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Automobile</span>
            </h1>
          </div>
          <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Roulez en toute sérénité avec nos solutions d'assurance automobile complètes
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-20 card-3d">
          <div className="relative overflow-hidden rounded-3xl">
            <img 
              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Assurance automobile"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-cyan-600/10 to-transparent"></div>
          </div>
        </div>

        {/* Coverage Types */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Types de <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">couverture</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageTypes.map((coverage, index) => (
              <div key={index} className="morphism rounded-2xl p-8 text-center card-3d">
                <div className={`bg-gradient-to-r ${coverage.gradient} p-4 rounded-xl glow-effect inline-block mb-6`}>
                  <coverage.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{coverage.title}</h3>
                <p className="text-blue-200 mb-4 font-semibold">{coverage.description}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{coverage.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Services <span className="gradient-text bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">additionnels</span>
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

        {/* Call to Action */}
        <div className="text-center">
          <div className="morphism rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="h-10 w-10 text-yellow-400" />
              <h3 className="text-4xl font-black text-white">Obtenez votre soumission</h3>
            </div>
            <p className="text-xl text-gray-200 mb-8">
              Nos experts vous aideront à trouver la meilleure protection au meilleur prix
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => window.location.href = 'tel:14169003657'}
                className="group btn-3d bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-5 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-lg"
              >
                <Phone className="mr-3 h-6 w-6" />
                Appeler maintenant
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

export default AutoDetails;