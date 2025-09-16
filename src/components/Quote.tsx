import React, { useState } from 'react';
import { Calculator, Phone, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { saveSubmission } from '../lib/supabase';

const Quote = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: 'Automobile'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await saveSubmission({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        service_type: formData.serviceType,
        submission_type: 'quote'
      });

      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: 'Automobile'
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="soumission" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white mb-8">
            <Calculator className="h-5 w-5 text-blue-400" />
            <span className="font-semibold">Obtenez votre devis</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Soumission</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pour demander une soumission personnalisée
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="morphism p-8 rounded-3xl">
              <p className="text-lg text-white leading-relaxed mb-8">
                Nos courtiers de comparaison sont là et en font toujours plus pour vous. 
                Vous méritez ceux qui aiment la comparaison plus que tout. Faites une demande 
                de soumission dès aujourd'hui et découvrez comment notre équipe s'engage à 
                mieux vous protéger avec les meilleures protections.
              </p>
              
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl glow-effect">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Parler à un courtier</h3>
                    <p className="text-blue-200 font-medium">Disponible maintenant</p>
                  </div>
                </div>
                
                <div className="text-4xl font-black text-white mb-6 neon-glow">1 416 900-3657</div>
                <div className="text-4xl font-black mb-6">
                  <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">1 416 900-3657</span>
                </div>
                
                <button className="w-full btn-3d bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 glow-effect flex items-center justify-center">
                  <a href="tel:14169003657" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Appeler maintenant
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="card-3d">
            <div className="morphism rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl glow-effect">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white">Demande de soumission</h3>
              </div>
              
              {isSubmitted && (
                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-emerald-400/30">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-500 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-emerald-400 font-bold">Demande envoyée avec succès!</h4>
                      <p className="text-emerald-200 text-sm">Nous vous contacterons dans les 24 heures.</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Prénom *
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      type="text"
                      required
                      className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm font-medium"
                      placeholder="Votre prénom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Nom *
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      type="text"
                      required
                      className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm font-medium"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Téléphone *
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel"
                    required
                    className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Courriel *
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    required
                    className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="votre@courriel.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Type de comparaison
                  </label>
                  <select 
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  >
                    <option className="bg-gray-800">Automobile</option>
                    <option className="bg-gray-800">Habitation</option>
                    <option className="bg-gray-800">Entreprise</option>
                    <option className="bg-gray-800">Avantages sociaux</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-5 px-6 rounded-xl font-black transition-all duration-300 glow-effect flex items-center justify-center group text-lg"
                >
                  <Zap className="mr-3 h-6 w-6" />
                  {isSubmitting ? 'Envoi en cours...' : 'Demande de soumission'}
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;