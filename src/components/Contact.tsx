import React, { useState } from 'react';
import { MessageCircle, Phone, ArrowRight, Mail, MapPin, Sparkles } from 'lucide-react';
import { saveSubmission } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        message: formData.message,
        service_type: 'Contact général',
        submission_type: 'contact'
      });

      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(16,185,129,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white mb-8">
            <MessageCircle className="h-5 w-5 text-emerald-400" />
            <span className="font-semibold">Parlons ensemble</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="gradient-text bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Contact</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            À l'écoute de vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="card-3d">
            <div className="morphism rounded-3xl p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-xl glow-effect">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white">Discuter avec un courtier</h3>
              </div>
              
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Discuter avec un courtier de comparaison pour bien définir vos besoins et 
                trouver les meilleures solutions pour vous.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="h-6 w-6 text-emerald-400" />
                    <span className="font-black text-white">Téléphone</span>
                  </div>
                  <div className="text-3xl font-black text-white mb-2 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">1 416 900-3657</div>
                  <p className="text-gray-300">Lundi au vendredi, 8h à 18h</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span>info@comparadise.ca</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    <span>Montréal, QC, Canada</span>
                  </div>
                </div>
                
                <button className="w-full group btn-3d bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-black transition-all duration-300 glow-effect flex items-center justify-center">
                  <a href="tel:14169003657" className="flex items-center">
                    <Phone className="mr-3 h-5 w-5" />
                    Nous joindre
                  </a>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-3d">
            <div className="morphism rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <Sparkles className="h-8 w-8 text-yellow-400" />
                <h3 className="text-2xl font-black text-white">Envoyez-nous un message</h3>
              </div>
              
              {isSubmitted && (
                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-emerald-400/30">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-500 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-emerald-400 font-bold">Message envoyé avec succès!</h4>
                      <p className="text-emerald-200 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
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
                      className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm font-medium"
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
                      className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm font-medium"
                      placeholder="Votre nom"
                    />
                  </div>
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
                    className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="votre@courriel.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Téléphone
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel"
                    className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Décrivez vos besoins..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-3d bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-5 px-6 rounded-xl font-black transition-all duration-300 glow-effect flex items-center justify-center group text-lg"
                >
                  <Mail className="mr-3 h-6 w-6" />
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
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

export default Contact;