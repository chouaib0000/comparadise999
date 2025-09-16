import React from 'react';
import { Shield, Star, Sparkles, Award, ArrowRight, Users, TrendingUp, Clock, Zap } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'Intact Assurance',
      logo: 'https://www.intact.ca/content/dam/intact/images/logos/intact-logo.svg',
      specialty: 'Auto & Habitation'
    },
    {
      name: 'Desjardins',
      logo: 'https://www.desjardins.com/content/dam/desjardins/images/logos/desjardins-logo.svg',
      specialty: 'Solutions complètes'
    },
    {
      name: 'La Capitale',
      logo: 'https://www.lacapitale.com/content/dam/lacapitale/images/logos/logo-la-capitale.svg',
      specialty: 'Assurance générale'
    },
    {
      name: 'Aviva',
      logo: 'https://www.aviva.ca/content/dam/aviva/images/logos/aviva-logo.svg',
      specialty: 'Commercial'
    },
    {
      name: 'SSQ Assurance',
      logo: 'https://www.ssq.ca/content/dam/ssq/images/logos/ssq-logo.svg',
      specialty: 'Avantages sociaux'
    },
    {
      name: 'Wawanesa',
      logo: 'https://www.wawanesa.com/content/dam/wawanesa/images/logos/wawanesa-logo.svg',
      specialty: 'Auto & Habitation'
    },
    {
      name: 'Economical',
      logo: 'https://www.economical.com/content/dam/economical/logos/economical-logo.svg',
      specialty: 'Assurance générale'
    },
    {
      name: 'Gore Mutual',
      logo: 'https://www.goremutual.ca/content/dam/goremutual/logos/gore-mutual-logo.svg',
      specialty: 'Mutuelle'
    },
    {
      name: 'Travelers',
      logo: 'https://www.travelers.ca/content/dam/travelers/logos/travelers-logo.svg',
      specialty: 'Commercial'
    },
    {
      name: 'Zurich',
      logo: 'https://www.zurich.ca/content/dam/zurich/logos/zurich-logo.svg',
      specialty: 'Entreprise'
    },
    {
      name: 'AXA',
      logo: 'https://www.axa.ca/content/dam/axa/logos/axa-logo.svg',
      specialty: 'International'
    },
    {
      name: 'Chubb',
      logo: 'https://www.chubb.com/content/dam/chubb/logos/chubb-logo.svg',
      specialty: 'Premium'
    },
    {
      name: 'Sun Life',
      logo: 'https://www.sunlife.ca/content/dam/sunlife/regional/canada/logos/sun-life-logo.svg',
      specialty: 'Vie & Santé'
    },
    {
      name: 'Manulife',
      logo: 'https://www.manulife.ca/content/dam/manulife/logos/manulife-logo.svg',
      specialty: 'Avantages sociaux'
    },
    {
      name: 'Industrial Alliance',
      logo: 'https://www.ia.ca/content/dam/ia/logos/ia-logo.svg',
      specialty: 'Assurance vie'
    },
    {
      name: 'Promutuel',
      logo: 'https://www.promutuelassurance.ca/content/dam/promutuel/logos/promutuel-logo.svg',
      specialty: 'Mutuelle régionale'
    },
    {
      name: 'Belair Direct',
      logo: 'https://www.belairdirect.com/content/dam/belair/logos/belair-logo.svg',
      specialty: 'Direct'
    },
    {
      name: 'CAA Assurance',
      logo: 'https://www.caa.ca/content/dam/caa/logos/caa-logo.svg',
      specialty: 'Auto & Voyage'
    },
    {
      name: 'Sonnet',
      logo: 'https://www.sonnet.ca/content/dam/sonnet/logos/sonnet-logo.svg',
      specialty: 'Numérique'
    },
    {
      name: 'TD Assurance',
      logo: 'https://www.td.com/content/dam/td/logos/td-logo.svg',
      specialty: 'Bancassurance'
    }
  ];

  const comparadiseStats = [
    { icon: Users, label: 'Clients satisfaits', value: '5,000+', description: 'Particuliers et entreprises qui nous font confiance' },
    { icon: Award, label: 'Partenaires assureurs', value: '50+', description: 'Réseau étendu pour les meilleures options' },
    { icon: TrendingUp, label: 'Économies moyennes', value: '32%', description: 'Réduction sur les primes d\'assurance' },
    { icon: Clock, label: 'Années d\'expérience', value: '15+', description: 'Expertise reconnue dans le domaine' }
  ];

  return (
    <section id="partners" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white mb-8">
            <Award className="h-5 w-5 text-yellow-400" />
            <span className="font-semibold">Réseau Premium</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Nos <span className="gradient-text bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent neon-glow">partenaires</span>
          </h2>
          <p className="text-2xl text-purple-100 max-w-5xl mx-auto leading-relaxed mb-12">
            Avec plus de 50 partenaires-assureurs reconnus, nous vous garantissons de trouver 
            la meilleure solution, au meilleur prix. Notre vaste réseau nous permet d'offrir 
            une gamme complète d'options adaptées à tous les profils et budgets.
          </p>
        </div>

        {/* Enhanced Partner Logos Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-black text-white text-center mb-12">
            Nos <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">partenaires de confiance</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="group card-3d"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="morphism rounded-2xl p-6 h-32 flex flex-col items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-2 relative overflow-hidden">
                  {/* Partner Logo */}
                  <div className="relative z-10 mb-2">
                    <img 
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="hidden">
                      <Shield className="h-12 w-12 text-white/70 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <div className="text-sm font-bold text-white/90 group-hover:text-white transition-colors duration-300">
                      {partner.name}
                    </div>
                    <div className="text-xs text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                      {partner.specialty}
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Comparadise Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              Pourquoi <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Comparadise</span>
            </h3>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Découvrez ce qui fait de nous le leader en courtage de comparaison au Québec
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="morphism p-10 rounded-3xl">
                <h4 className="text-3xl font-black text-white mb-6 flex items-center">
                  <Sparkles className="h-8 w-8 text-yellow-400 mr-3" />
                  Notre mission
                </h4>
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  Chez Comparadise, nous croyons que chaque personne mérite d'être protégée par les meilleures 
                  solutions d'assurance, sans compromis sur la qualité ou le prix. Notre mission est de 
                  démocratiser l'accès aux meilleures protections en négociant pour vous auprès de nos 
                  nombreux partenaires.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Nous ne vendons pas d'assurance - nous la comparons, la négocions et la personnalisons 
                  pour qu'elle corresponde parfaitement à votre réalité et à votre budget.
                </p>
              </div>
            </div>

            <div className="relative card-3d">
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Équipe Comparadise au travail"
                  className="w-full h-80 object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-600/15 to-transparent"></div>
                <div className="absolute inset-0 holographic opacity-15 mix-blend-overlay"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 morphism p-6 rounded-2xl floating-animation">
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <div className="text-center">
                    <div className="text-lg font-black text-white">Équipe</div>
                    <div className="text-sm text-gray-300">Experte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {comparadiseStats.map((stat, index) => (
              <div 
                key={index} 
                className="morphism p-8 rounded-2xl text-center card-3d group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl glow-effect inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-black text-white mb-2 neon-glow">{stat.value}</div>
                <div className="text-lg font-bold text-purple-200 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-300 leading-relaxed">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Our Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="morphism rounded-3xl p-10">
              <h4 className="text-3xl font-black text-white mb-6 flex items-center">
                <Shield className="h-8 w-8 text-blue-400 mr-3" />
                Notre approche
              </h4>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-1 rounded-full mt-1 glow-effect">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p><strong className="text-white">Analyse personnalisée :</strong> Nous étudions votre profil unique pour identifier vos besoins réels</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-400 p-1 rounded-full mt-1 glow-effect">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p><strong className="text-white">Négociation active :</strong> Nous utilisons notre pouvoir de négociation pour obtenir les meilleurs tarifs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-1 rounded-full mt-1 glow-effect">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p><strong className="text-white">Suivi continu :</strong> Nous révisons régulièrement vos protections pour maintenir l'optimisation</p>
                </div>
              </div>
            </div>

            <div className="morphism rounded-3xl p-10">
              <h4 className="text-3xl font-black text-white mb-6 flex items-center">
                <Star className="h-8 w-8 text-yellow-400 mr-3" />
                Nos valeurs
              </h4>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full mt-1 glow-effect">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p><strong className="text-white">Transparence totale :</strong> Aucun frais caché, explications claires de chaque option</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-purple-400 to-indigo-400 p-1 rounded-full mt-1 glow-effect">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p><strong className="text-white">Indépendance :</strong> Nous travaillons pour vous, pas pour les assureurs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 p-1 rounded-full mt-1 glow-effect">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p><strong className="text-white">Excellence :</strong> Service personnalisé et suivi attentionné à chaque étape</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Network Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="morphism rounded-3xl p-12 card-3d text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-6 rounded-2xl glow-effect mr-4">
                <Award className="h-12 w-12 text-white" />
              </div>
              <div className="text-left">
                <span className="text-5xl font-black text-white block">Réseau exclusif</span>
                <span className="text-2xl text-purple-200 font-bold">50+ Partenaires Premium</span>
              </div>
              <Sparkles className="h-10 w-10 text-yellow-400 ml-4 animate-pulse" />
            </div>
            
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
              <p className="text-xl text-purple-100 leading-relaxed mb-6">
                Notre force réside dans la diversité et la qualité de notre réseau de partenaires. 
                Chaque assureur a été soigneusement sélectionné pour sa solidité financière, 
                son service client exceptionnel et sa capacité d'innovation.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Cette diversité nous permet de vous proposer des solutions sur mesure, 
                que vous soyez un particulier à la recherche d'une protection de base 
                ou une entreprise nécessitant des couvertures spécialisées complexes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => alert('Informations détaillées disponibles par téléphone au 1 877 860-1412')}
                className="btn-3d bg-gradient-to-r from-white to-gray-100 text-purple-900 hover:from-gray-100 hover:to-white px-10 py-5 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-lg group"
              >
                <Shield className="mr-3 h-6 w-6" />
                Découvrir notre réseau complet
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => window.location.href = '/#soumission'}
                className="btn-3d bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-6 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-xl group animate-pulse hover:animate-none"
              >
                <Zap className="mr-3 h-7 w-7 animate-bounce" />
                <div className="text-center">
                  <div className="text-xl font-black">APPELEZ MAINTENANT</div>
                  <div className="text-sm font-bold opacity-90">Économisez jusqu'à 40% - Offre limitée!</div>
                </div>
                <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-3 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Why Our Network Matters */}
        <div className="mt-24">
          <h3 className="text-4xl font-black text-white text-center mb-12">
            L'avantage du <span className="gradient-text bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">grand réseau</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="morphism rounded-2xl p-8 text-center card-3d">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-xl glow-effect inline-block mb-6">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-black text-white mb-4">Meilleurs prix</h4>
              <p className="text-gray-200 leading-relaxed">
                La concurrence entre nos partenaires vous garantit les tarifs les plus compétitifs du marché.
              </p>
            </div>
            
            <div className="morphism rounded-2xl p-8 text-center card-3d">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-xl glow-effect inline-block mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-black text-white mb-4">Couvertures spécialisées</h4>
              <p className="text-gray-200 leading-relaxed">
                Accès à des produits uniques et des couvertures spécialisées non disponibles ailleurs.
              </p>
            </div>
            
            <div className="morphism rounded-2xl p-8 text-center card-3d">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl glow-effect inline-block mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-black text-white mb-4">Service personnalisé</h4>
              <p className="text-gray-200 leading-relaxed">
                Chaque partenaire apporte son expertise unique pour répondre à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;