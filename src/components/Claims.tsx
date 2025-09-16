import React from 'react';
import { FileText, ArrowRight, Phone, Shield, Zap } from 'lucide-react';

const Claims = () => {
  return (
    <section id="reclamation" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="morphism rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-xl glow-effect">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl font-black text-white">Réclamation</h2>
              </div>
              
              <h3 className="text-3xl font-black gradient-text bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
                Pour soumettre une réclamation
              </h3>
              
              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                On espère que vous allez bien! Notre équipe dédiée va rapidement s'occuper de vous. 
                Soyez sans crainte, des réclamations, on en fait tous les jours. On vous guidera à travers 
                le processus en vous offrant le meilleur soutien possible.
              </p>
              
              <button className="group btn-3d bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-5 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center text-lg">
                <a href="tel:14169003657" className="flex items-center">
                  <Zap className="mr-3 h-6 w-6" />
                  Faire une réclamation
                </a>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            <div className="relative card-3d">
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Support client professionnel"
                  className="w-full transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/15 via-red-600/10 to-transparent"></div>
                <div className="absolute inset-0 holographic opacity-15 mix-blend-overlay"></div>
              </div>
              
              {/* Floating Support Badge */}
              <div className="absolute -top-6 -right-6 morphism p-6 rounded-2xl floating-animation">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl glow-effect">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-black text-white">Support 24/7</div>
                    <div className="text-sm text-gray-300">Toujours là pour vous</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Claims;