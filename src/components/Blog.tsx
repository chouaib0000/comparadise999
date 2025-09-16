import React from 'react';
import { ArrowRight, Clock, User, Sparkles, BookOpen } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      category: 'Auto',
      title: 'Introduction à la comparaison pour les véhicules récréatifs',
      excerpt: 'Découvrez comment bien comparer les options d\'assurance pour vos véhicules de loisir.',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: '5 min',
      author: 'Équipe Comparadise',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      category: 'Auto',
      title: '5 conseils pour une comparaison vélo idéale',
      excerpt: 'Les meilleures pratiques pour protéger votre vélo avec la bonne couverture.',
      image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: '3 min',
      author: 'Expert Comparadise',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      category: 'Habitation',
      title: 'Comprendre la comparaison résidence secondaire',
      excerpt: 'Tout ce que vous devez savoir sur la protection de votre chalet ou résidence secondaire.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: '7 min',
      author: 'Spécialiste Habitation',
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      category: 'Habitation',
      title: '7 questions-réponses sur la comparaison chalet',
      excerpt: 'Les réponses aux questions les plus fréquentes concernant l\'assurance chalet hivernal.',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: '6 min',
      author: 'Expert Chalet',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white mb-8">
            <BookOpen className="h-5 w-5 text-blue-400" />
            <span className="font-semibold">Ressources</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Continuez votre <span className="gradient-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">lecture</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Découvrez nos derniers articles et conseils d'experts
          </p>
          <button 
            onClick={() => alert('Blog complet disponible prochainement')}
            className="group btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 glow-effect flex items-center mx-auto"
          >
            <BookOpen className="mr-3 h-5 w-5" />
            Voir tous les articles
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="group card-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="morphism rounded-2xl overflow-hidden transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-30`}></div>
                  <div className="absolute inset-0 holographic opacity-10 mix-blend-overlay"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold border border-white/30">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-black text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => alert('Article complet disponible prochainement')}
                    className="group/btn w-full bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white border border-white/20 py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center transition-all duration-300"
                  >
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;