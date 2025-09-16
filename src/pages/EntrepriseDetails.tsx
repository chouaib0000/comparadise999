import React from 'react';
import { Users, Shield, Star, ArrowLeft, Phone, Calculator, CheckCircle, Award, Zap, Building } from 'lucide-react';

const EntrepriseDetails = () => {
  const coverageTypes = [
    {
      title: 'Responsabilité civile générale',
      description: 'Protection contre les réclamations de tiers',
      details: 'Couvre les dommages corporels et matériels causés à des tiers dans le cadre de vos activités.',
      icon: Shield,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Biens commerciaux',
      description: 'Protection de vos actifs d\'entreprise',
      details: 'Couvre vos équipements, inventaire, mobilier et améliorations locatives contre divers risques.',
      icon: Building,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cyber-sécurité',
      description: 'Protection contre les cyberattaques et violations de données',
      details: 'Couverture essentielle à l\'ère numérique pour protéger vos données et votre réputation.',
      icon: Star,
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const businessTypes = [
    'Commerce de détail',
    'Services professionnels',
    'Restauration et hôtellerie',
    'Construction et rénovation',
    'Technologies et startups',
    'Santé et services médicaux'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="mb-8 flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Retour
        </button>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl glow-effect">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white">
              Assurance <span className="gradient-text bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Entreprise</span>
            </h1>
          </div>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Protégez votre entreprise avec des solutions d'assurance commerciale adaptées à vos besoins
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-20 card-3d">
          <div className="relative overflow-hidden rounded-3xl">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Équipe d'entreprise professionnelle"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/15 via-pink-600/10 to-transparent"></div>
          </div>
        </div>

        {/* Coverage Types */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Types de <span className="gradient-text bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">couverture</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageTypes.map((coverage, index) => (
              <div key={index} className="morphism rounded-2xl p-8 text-center card-3d">
                <div className={`bg-gradient-to-r ${coverage.gradient} p-4 rounded-xl glow-effect inline-block mb-6`}>
                  <coverage.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{coverage.title}</h3>
                <p className="text-purple-200 mb-4 font-semibold">{coverage.description}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{coverage.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Types */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Secteurs <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">d'activité</span>
          </h2>
          
          <div className="morphism rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessTypes.map((business, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0" />
                  <span className="text-white font-semibold">{business}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Avantages <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">exclusifs</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="morphism rounded-2xl p-8">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center">
                <Award className="h-8 w-8 text-yellow-400 mr-3" />
                Analyse de risques personnalisée
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Nos experts analysent spécifiquement votre secteur d'activité pour identifier 
                tous les risques potentiels et vous proposer une couverture optimale.
              </p>
            </div>
            
            <div className="morphism rounded-2xl p-8">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center">
                <Zap className="h-8 w-8 text-purple-400 mr-3" />
                Support dédié aux entreprises
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Un gestionnaire de compte dédié qui comprend votre entreprise et peut 
                intervenir rapidement en cas de besoin ou de réclamation.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="morphism rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-black text-white mb-6">
              Protégez votre entreprise maintenant
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Consultation gratuite avec nos experts en assurance commerciale
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => window.location.href = 'tel:14169003657'}
                className="group btn-3d bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-lg"
              >
                <Phone className="mr-3 h-6 w-6" />
                Consultation gratuite
              </button>
              
              <button 
                onClick={() => {
                  window.location.href = '/#soumission';
                }}
                className="group btn-3d bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-lg"
              >
                <Calculator className="mr-3 h-6 w-6" />
                Soumission entreprise
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseDetails;