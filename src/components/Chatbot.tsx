import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Send, X, Bot, User, Phone, Calculator, Zap, Shield, Home, Car, Users, Award, Clock, Star, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  actions?: Array<{
    label: string;
    action: () => void;
    icon?: React.ComponentType<any>;
    gradient?: string;
  }>;
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  gradient: string;
  action: () => void;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions: QuickAction[] = [
    {
      id: 'soumission',
      label: 'Soumission gratuite',
      icon: Calculator,
      gradient: 'from-blue-600 to-purple-600',
      action: () => handleQuickAction('soumission')
    },
    {
      id: 'auto',
      label: 'Assurance auto',
      icon: Car,
      gradient: 'from-cyan-600 to-blue-600',
      action: () => handleQuickAction('auto')
    },
    {
      id: 'habitation',
      label: 'Assurance habitation',
      icon: Home,
      gradient: 'from-emerald-600 to-teal-600',
      action: () => handleQuickAction('habitation')
    },
    {
      id: 'entreprise',
      label: 'Assurance entreprise',
      icon: Users,
      gradient: 'from-purple-600 to-pink-600',
      action: () => handleQuickAction('entreprise')
    },
    {
      id: 'avantages',
      label: 'Avantages sociaux',
      icon: Award,
      gradient: 'from-orange-600 to-red-600',
      action: () => handleQuickAction('avantages')
    },
    {
      id: 'courtier',
      label: 'Parler à un expert',
      icon: Phone,
      gradient: 'from-red-600 to-orange-600',
      action: () => handleQuickAction('courtier')
    }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "🌟 Bonjour et bienvenue chez Comparadise! Je suis votre assistant virtuel spécialisé en assurance. Avec plus de 50 partenaires assureurs, nous vous garantissons les MEILLEURS prix du marché.\n\n💡 Comment puis-je vous aider aujourd'hui?",
          [
            {
              label: '🎯 SOUMISSION GRATUITE - Économisez 40%',
              action: () => handleQuickAction('soumission-urgente'),
              icon: Zap,
              gradient: 'from-red-600 to-orange-600'
            },
            {
              label: '📞 Parler à un expert MAINTENANT',
              action: () => handleQuickAction('courtier'),
              icon: Phone,
              gradient: 'from-emerald-600 to-teal-600'
            }
          ]
        );
      }, 800);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, actions?: Message['actions']) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      actions
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    setShowQuickActions(false);
  };

  const handleQuickAction = (action: string) => {
    setShowQuickActions(false);
    
    switch (action) {
      case 'soumission':
        addUserMessage('Je veux obtenir une soumission gratuite');
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addBotMessage(
              "🎯 Excellente décision! Nos courtiers experts analysent GRATUITEMENT vos besoins et négocient avec nos 50+ partenaires pour vous garantir les MEILLEURS prix.\n\n✅ Processus 100% gratuit et sans engagement\n✅ Réponse en moins de 24h\n✅ Économies moyennes de 32%",
              [
                {
                  label: '📞 APPEL GRATUIT - Soumission immédiate',
                  action: () => window.location.href = 'tel:14169003657',
                  icon: Phone,
                  gradient: 'from-emerald-600 to-teal-600'
                },
                {
                  label: '📝 Formulaire en ligne rapide',
                  action: () => {
                    if (window.location.pathname === '/') {
                      document.getElementById('soumission')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/');
                      setTimeout(() => {
                        document.getElementById('soumission')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  },
                  icon: Calculator,
                  gradient: 'from-blue-600 to-purple-600'
                }
              ]
            );
          }, 1500);
        }, 500);
        break;

      case 'soumission-urgente':
        addUserMessage('Je veux économiser 40% maintenant');
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addBotMessage(
              "🔥 OFFRE SPÉCIALE LIMITÉE! Nos courtiers experts vous attendent MAINTENANT pour vous faire économiser jusqu'à 40% sur vos assurances!\n\n⚡ BONUS: Consultation gratuite de 30 minutes\n⚡ BONUS: Analyse complète de vos besoins\n⚡ BONUS: Négociation avec 50+ assureurs\n\n⏰ Cette offre expire dans les prochaines heures!",
              [
                {
                  label: '🚨 APPELER MAINTENANT - OFFRE LIMITÉE!',
                  action: () => window.location.href = 'tel:14169003657',
                  icon: Phone,
                  gradient: 'from-red-600 to-orange-600'
                }
              ]
            );
          }, 2000);
        }, 500);
        break;
      
      case 'auto':
        addUserMessage('Je m\'intéresse à l\'assurance automobile');
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addBotMessage(
              "🚗 Parfait! L'assurance auto est notre spécialité #1! Nous comparons TOUS les assureurs du Québec pour vous garantir:\n\n✅ Les MEILLEURS prix (économies moyennes: 30%)\n✅ Couvertures optimales pour votre profil\n✅ Service de réclamation 24/7\n✅ Assistance routière incluse\n\nQuel type de véhicule souhaitez-vous assurer?",
              [
                {
                  label: '🏎️ Véhicule personnel/familial',
                  action: () => window.location.href = '/auto-details',
                  icon: Car,
                  gradient: 'from-blue-600 to-cyan-600'
                },
                {
                  label: '🏍️ Moto/VTT/Motoneige',
                  action: () => handleSpecificAutoType('recreatif'),
                  icon: Zap,
                  gradient: 'from-purple-600 to-pink-600'
                },
                {
                  label: '🚛 Véhicule commercial',
                  action: () => handleSpecificAutoType('commercial'),
                  icon: Users,
                  gradient: 'from-emerald-600 to-teal-600'
                },
                {
                  label: '📞 Parler à un expert auto',
                  action: () => window.location.href = 'tel:14169003657',
                  icon: Phone,
                  gradient: 'from-red-600 to-orange-600'
                }
              ]
            );
          }, 1800);
        }, 500);
        break;

      case 'habitation':
        addUserMessage('Je m\'intéresse à l\'assurance habitation');
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addBotMessage(
              "🏠 Excellente question! Votre foyer mérite la MEILLEURE protection. Nous analysons votre situation unique pour vous offrir:\n\n✅ Protection optimale du bâtiment\n✅ Couverture complète du contenu\n✅ Responsabilité civile étendue\n✅ Frais de subsistance inclus\n\nQuel type de propriété possédez-vous?",
              [
                {
                  label: '🏡 Maison unifamiliale',
                  action: () => window.location.href = '/habitation-details',
                  icon: Home,
                  gradient: 'from-emerald-600 to-teal-600'
                },
                {
                  label: '🏢 Condo/Appartement',
                  action: () => handleSpecificHomeType('condo'),
                  icon: Shield,
                  gradient: 'from-blue-600 to-purple-600'
                },
                {
                  label: '🏔️ Chalet/Résidence secondaire',
                  action: () => window.location.href = '/services',
                  icon: Star,
                  gradient: 'from-purple-600 to-pink-600'
                },
                {
                  label: '📞 Expert habitation disponible',
                  action: () => window.location.href = 'tel:14169003657',
                  icon: Phone,
                  gradient: 'from-red-600 to-orange-600'
                }
              ]
            );
          }, 1800);
        }, 500);
        break;

      case 'entreprise':
        addUserMessage('Je cherche une assurance pour mon entreprise');
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addBotMessage(
              "🏢 Parfait! Protéger votre entreprise, c'est protéger votre avenir! Nos experts commerciaux négocient avec les MEILLEURS assureurs pour vous offrir:\n\n✅ Responsabilité civile générale\n✅ Protection des biens commerciaux\n✅ Cyber-sécurité (ESSENTIEL en 2025!)\n✅ Interruption d'affaires\n\nQuel est votre secteur d'activité?",
              [
                {
                  label: '🛍️ Commerce/Retail',
                  action: () => handleBusinessType('commerce'),
                  icon: Users,
                  gradient: 'from-blue-600 to-cyan-600'
                },
                {
                  label: '💼 Services professionnels',
                  action: () => handleBusinessType('services'),
                  icon: Award,
                  gradient: 'from-purple-600 to-pink-600'
                },
                {
                  label: '🏗️ Construction/Rénovation',
                  action: () => handleBusinessType('construction'),
                  icon: Shield,
                  gradient: 'from-orange-600 to-red-600'
                },
                {
                  label: '📞 Expert commercial MAINTENANT',
                  action: () => window.location.href = 'tel:14169003657',
                  icon: Phone,
                  gradient: 'from-red-600 to-orange-600'
                }
              ]
            );
          }, 2000);
        }, 500);
        break;

      case 'avantages':
        addUserMessage('Je m\'intéresse aux avantages sociaux');
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addBotMessage(
              "👥 Excellent choix! Des employés heureux = entreprise prospère! Nos programmes d'avantages sociaux vous aident à:\n\n✅ Attirer les meilleurs talents\n✅ Réduire le roulement de personnel\n✅ Bénéficier d'avantages fiscaux\n✅ Améliorer la productivité\n\nCombien d'employés avez-vous?",
              [
                {
                  label: '👤 1-10 employés (PME)',
                  action: () => handleEmployeeCount('pme'),
                  icon: Users,
                  gradient: 'from-emerald-600 to-teal-600'
                },
                {
                  label: '👥 11-50 employés (Moyenne)',
                  action: () => handleEmployeeCount('moyenne'),
                  icon: Award,
                  gradient: 'from-blue-600 to-purple-600'
                },
                {
                  label: '🏢 50+ employés (Grande)',
                  action: () => handleEmployeeCount('grande'),
                  icon: TrendingUp,
                  gradient: 'from-purple-600 to-pink-600'
                },
                {
                  label: '📞 Expert RH disponible',
                  action: () => window.location.href = 'tel:14169003657',
                  icon: Phone,
                  gradient: 'from-red-600 to-orange-600'
                }
              ]
            );
          }, 1800);
        }, 500);
        break;
      
      case 'courtier':
        addUserMessage('Je veux parler à un courtier expert');
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addBotMessage(
              "🔥 PARFAIT! Nos courtiers experts sont EN LIGNE MAINTENANT et prêts à vous faire économiser GROS!\n\n🎯 OFFRE SPÉCIALE AUJOURD'HUI:\n• Consultation GRATUITE de 30 minutes\n• Analyse complète de vos besoins\n• Négociation avec 50+ assureurs\n• Économies GARANTIES jusqu'à 40%\n\n⚡ Appelez dans les 10 prochaines minutes pour cette offre exclusive!",
              [
                {
                  label: '🚨 APPELER MAINTENANT - OFFRE LIMITÉE!',
                  action: () => window.location.href = 'tel:14169003657',
                  icon: Phone,
                  gradient: 'from-red-600 to-orange-600'
                }
              ]
            );
          }, 1500);
        }, 500);
        break;

      case 'prix':
        addUserMessage('Combien ça coûte?');
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addBotMessage(
              "💰 EXCELLENTE NOUVELLE! Nos services de courtage sont 100% GRATUITS pour vous!\n\n🎁 VOUS RECEVEZ:\n• Consultation gratuite\n• Analyse de besoins gratuite\n• Comparaison gratuite\n• Négociation gratuite\n• Suivi gratuit à vie\n\n💡 BONUS: Nous vous faisons même ÉCONOMISER de l'argent! Économies moyennes de 32% sur vos primes actuelles!",
              [
                {
                  label: '🎯 DÉCOUVRIR MES ÉCONOMIES',
                  action: () => window.location.href = 'tel:14169003657',
                  icon: TrendingUp,
                  gradient: 'from-emerald-600 to-teal-600'
                }
              ]
            );
          }, 2000);
        }, 500);
        break;
    }
  };

  const handleSpecificAutoType = (type: string) => {
    const responses = {
      personnel: "🚗 Parfait! Pour votre véhicule personnel, nous analysons votre profil de conducteur, votre véhicule et vos habitudes de conduite pour vous offrir la protection optimale au MEILLEUR prix. Nos clients économisent en moyenne 30% sur leur assurance auto!",
      recreatif: "🏍️ Génial! Les véhicules récréatifs nécessitent une expertise spécialisée. Nos courtiers connaissent parfaitement les spécificités de l'assurance moto, VTT et motoneige. Protection saisonnière disponible pour économiser encore plus!",
      commercial: "🚛 Excellent! L'assurance flotte commerciale est complexe mais nous maîtrisons parfaitement ce domaine. Protection adaptée à votre secteur d'activité avec des tarifs de groupe avantageux."
    };

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          responses[type as keyof typeof responses],
          [
            {
              label: '📞 EXPERT AUTO DISPONIBLE MAINTENANT',
              action: () => window.location.href = 'tel:14169003657',
              icon: Phone,
              gradient: 'from-red-600 to-orange-600'
            },
            {
              label: 'Plus d\'infos sur l\'assurance auto',
              action: () => navigate('/auto-details'),
              icon: Car,
              gradient: 'from-blue-600 to-cyan-600'
            }
          ]
        );
      }, 1500);
    }, 500);
  };

  const handleSpecificHomeType = (type: string) => {
    const responses = {
      maison: "🏡 Parfait! Votre maison unifamiliale mérite une protection complète. Nous évaluons la valeur de reconstruction, analysons les risques spécifiques à votre région et négocions les meilleures protections.",
      condo: "🏢 Excellent choix! L'assurance condo a ses spécificités. Nous nous assurons que vous n'êtes pas sur-assuré (ce qui arrive souvent!) et que vous avez la bonne protection pour vos améliorations et biens personnels.",
      chalet: "🏔️ Magnifique! Les résidences secondaires nécessitent une expertise particulière. Protection saisonnière, couverture d'inoccupation, nous connaissons tous les détails pour protéger votre petit coin de paradis!"
    };

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          responses[type as keyof typeof responses],
          [
            {
              label: '📞 EXPERT HABITATION EN LIGNE',
              action: () => window.location.href = 'tel:14169003657',
              icon: Phone,
              gradient: 'from-red-600 to-orange-600'
            },
            {
              label: 'Détails assurance habitation',
              action: () => navigate('/habitation-details'),
              icon: Home,
              gradient: 'from-emerald-600 to-teal-600'
            }
          ]
        );
      }, 1500);
    }, 500);
  };

  const handleBusinessType = (type: string) => {
    const responses = {
      commerce: "🛍️ Parfait! Le commerce de détail a des risques spécifiques: responsabilité produit, vol, interruption d'affaires. Nous créons un programme sur mesure pour votre secteur.",
      services: "💼 Excellent! Les services professionnels nécessitent une protection erreurs & omissions robuste. Nous analysons votre exposition aux risques professionnels.",
      construction: "🏗️ Parfait! La construction est un secteur à haut risque. Nos experts connaissent parfaitement les assurances chantier, responsabilité entrepreneur et équipements spécialisés."
    };

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          responses[type as keyof typeof responses],
          [
            {
              label: '📞 EXPERT COMMERCIAL MAINTENANT',
              action: () => window.location.href = 'tel:14169003657',
              icon: Phone,
              gradient: 'from-red-600 to-orange-600'
            },
            {
              label: 'Infos assurance entreprise',
              action: () => navigate('/entreprise-details'),
              icon: Users,
              gradient: 'from-purple-600 to-pink-600'
            }
          ]
        );
      }, 1500);
    }, 500);
  };

  const handleEmployeeCount = (size: string) => {
    const responses = {
      pme: "👤 Parfait! Pour les PME, nous avons des programmes flexibles et abordables. Assurance collective santé, REER collectif avec participation employeur, et bien plus!",
      moyenne: "👥 Excellent! À cette taille, vous pouvez négocier d'excellents tarifs de groupe. Programmes complets avec options flexibles pour satisfaire tous vos employés.",
      grande: "🏢 Parfait! Pour les grandes entreprises, nous créons des programmes sur mesure avec des tarifs préférentiels et une gestion dédiée."
    };

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          responses[size as keyof typeof responses],
          [
            {
              label: '📞 EXPERT RH DISPONIBLE',
              action: () => window.location.href = 'tel:14169003657',
              icon: Phone,
              gradient: 'from-red-600 to-orange-600'
            },
            {
              label: 'Détails avantages sociaux',
              action: () => navigate('/avantages-details'),
              icon: Award,
              gradient: 'from-orange-600 to-red-600'
            }
          ]
        );
      }, 1500);
    }, 500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    const userInput = inputValue.toLowerCase();
    setInputValue('');

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        
        if (userInput.includes('prix') || userInput.includes('coût') || userInput.includes('tarif') || userInput.includes('cher')) {
          handleQuickAction('prix');
        } else if (userInput.includes('auto') || userInput.includes('voiture') || userInput.includes('véhicule') || userInput.includes('char')) {
          handleQuickAction('auto');
        } else if (userInput.includes('maison') || userInput.includes('habitation') || userInput.includes('propriété') || userInput.includes('chalet')) {
          handleQuickAction('habitation');
        } else if (userInput.includes('entreprise') || userInput.includes('business') || userInput.includes('commercial') || userInput.includes('compagnie')) {
          handleQuickAction('entreprise');
        } else if (userInput.includes('avantages') || userInput.includes('employé') || userInput.includes('collectif') || userInput.includes('reer')) {
          handleQuickAction('avantages');
        } else if (userInput.includes('économie') || userInput.includes('économiser') || userInput.includes('rabais') || userInput.includes('discount')) {
          addBotMessage(
            "💰 INCROYABLE! Vous êtes au BON endroit pour économiser! Nos clients économisent en moyenne 32% sur leurs assurances!\n\n🎯 COMMENT? Notre réseau de 50+ partenaires nous permet de:\n• Négocier les MEILLEURS tarifs\n• Comparer TOUTES les options\n• Optimiser vos couvertures\n• Éliminer les doublons coûteux\n\n🔥 BONUS: Consultation gratuite pour maximiser vos économies!",
            [
              {
                label: '💸 MAXIMISER MES ÉCONOMIES MAINTENANT',
                action: () => window.location.href = 'tel:14169003657',
                icon: TrendingUp,
                gradient: 'from-emerald-600 to-teal-600'
              }
            ]
          );
        } else if (userInput.includes('réclamation') || userInput.includes('sinistre') || userInput.includes('accident') || userInput.includes('dommage')) {
          addBotMessage(
            "🛡️ Pas de panique! Nous sommes là pour vous accompagner dans cette épreuve. Notre service de réclamation est disponible 24/7 pour vous guider à chaque étape.\n\n✅ Déclaration rapide et simple\n✅ Suivi personnalisé de votre dossier\n✅ Négociation avec l'assureur\n✅ Support jusqu'à la résolution complète",
            [
              {
                label: '🚨 DÉCLARER UNE RÉCLAMATION',
                action: () => {
                  if (window.location.pathname === '/') {
                    document.getElementById('reclamation')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('reclamation')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                },
                icon: Shield,
                gradient: 'from-red-600 to-orange-600'
              },
              {
                label: '📞 Support réclamation 24/7',
                action: () => window.location.href = 'tel:14169003657',
                icon: Phone,
                gradient: 'from-blue-600 to-purple-600'
              }
            ]
          );
        } else if (userInput.includes('merci') || userInput.includes('thanks') || userInput.includes('parfait')) {
          addBotMessage(
            "😊 Ça me fait vraiment plaisir de vous aider! C'est exactement pour ça que nous existons chez Comparadise - pour vous offrir le MEILLEUR service possible!\n\n🌟 N'hésitez pas si vous avez d'autres questions. Nos experts sont toujours disponibles pour vous conseiller!",
            [
              {
                label: '📞 Parler à un expert maintenant',
                action: () => window.location.href = 'tel:14169003657',
                icon: Phone,
                gradient: 'from-emerald-600 to-teal-600'
              }
            ]
          );
        } else {
          addBotMessage(
            "🎯 Pour vous donner la réponse la plus précise et vous faire économiser le MAXIMUM, nos courtiers experts doivent analyser votre situation unique.\n\n✅ Consultation 100% GRATUITE\n✅ Analyse personnalisée de vos besoins\n✅ Comparaison avec 50+ assureurs\n✅ Négociation pour les MEILLEURS prix\n\n🔥 Nos experts vous attendent MAINTENANT!",
            [
              {
                label: '📞 CONSULTATION GRATUITE MAINTENANT',
                action: () => window.location.href = 'tel:14169003657',
                icon: Phone,
                gradient: 'from-red-600 to-orange-600'
              },
              {
                label: '📝 Soumission en ligne rapide',
                action: () => {
                  if (window.location.pathname === '/') {
                    document.getElementById('soumission')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('soumission')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                },
                icon: Calculator,
                gradient: 'from-blue-600 to-purple-600'
              },
              {
                label: '🌟 Découvrir tous nos services',
                action: () => navigate('/services'),
                icon: Star,
                gradient: 'from-purple-600 to-pink-600'
              }
            ]
          );
        }
      }, 1000 + Math.random() * 1000);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Enhanced Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 btn-3d transition-all duration-300 ${
          isOpen 
            ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 animate-pulse'
        } text-white p-5 rounded-full glow-effect group shadow-2xl`}
        style={{ 
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999
        }}
      >
        {isOpen ? (
          <X className="h-8 w-8 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
        )}
        
        {!isOpen && (
          <>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
              NOUVEAU!
            </div>
            <div className="absolute -top-12 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              💬 Besoin d'aide? Cliquez ici!
            </div>
          </>
        )}
      </button>

      {/* Enhanced Chatbot Window */}
      {isOpen && (
        <div 
          className="fixed bottom-28 right-6 z-50 w-[420px] max-w-[calc(100vw-2rem)] h-[600px] morphism rounded-3xl overflow-hidden shadow-2xl border border-white/20 card-3d"
          style={{ 
            position: 'fixed',
            bottom: '112px',
            right: '24px',
            zIndex: 9998
          }}
        >
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 holographic opacity-20"></div>
            <div className="relative flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Bot className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-black text-xl">Assistant Expert Comparadise</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <p className="text-sm text-blue-100 font-semibold">En ligne • Réponse immédiate</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-blue-100 font-bold">50+ Partenaires</div>
                <div className="text-xs text-blue-200">Meilleurs prix garantis</div>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 h-96 overflow-y-auto bg-gradient-to-br from-slate-800 to-gray-900 p-4">
            <div className="space-y-4">
              {/* Quick Actions (shown initially) */}
              {showQuickActions && messages.length <= 1 && (
                <div className="mb-6">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-400 font-semibold">Actions rapides:</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action) => (
                      <button
                        key={action.id}
                        onClick={action.action}
                        className={`btn-3d bg-gradient-to-r ${action.gradient} hover:brightness-110 text-white px-3 py-2 rounded-lg font-bold transition-all duration-300 text-xs flex items-center justify-center group`}
                      >
                        <action.icon className="mr-1 h-3 w-3" />
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                    <div className={`p-4 rounded-2xl ${
                      message.isBot 
                        ? 'bg-white/10 text-white border border-white/20 backdrop-blur-sm' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                    </div>
                    
                    {message.actions && (
                      <div className="mt-3 space-y-2">
                        {message.actions.map((action, index) => (
                          <button
                            key={index}
                            onClick={action.action}
                            className={`w-full btn-3d bg-gradient-to-r ${action.gradient || 'from-blue-600 to-purple-600'} hover:brightness-110 text-white px-4 py-3 rounded-xl font-bold transition-all duration-300 glow-effect flex items-center justify-center text-sm group`}
                          >
                            {action.icon && <action.icon className="mr-2 h-4 w-4" />}
                            {action.label}
                            <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                          </button>
                        ))}
                      </div>
                    )}
                    
                    <div className="text-xs text-gray-400 mt-2">
                      {message.timestamp.toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  
                  <div className={`${message.isBot ? 'order-1 mr-3' : 'order-2 ml-3'} flex-shrink-0`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 glow-effect' 
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                    }`}>
                      {message.isBot ? <Bot className="h-4 w-4 text-white" /> : <User className="h-4 w-4 text-white" />}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="order-1 mr-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center glow-effect">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="order-2 max-w-[80%]">
                    <div className="bg-white/10 text-white border border-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Enhanced Input */}
          <div className="p-4 bg-gradient-to-r from-slate-800 to-gray-800 border-t border-white/10">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question sur l'assurance..."
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-300 glow-effect group"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
            
            {/* Quick suggestions */}
            <div className="mt-3 flex flex-wrap gap-2">
              {['Prix?', 'Auto', 'Maison', 'Entreprise'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    setInputValue(suggestion);
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="text-xs bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-3 py-1 rounded-full transition-all duration-300 border border-white/10"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;