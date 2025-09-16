import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Trash2, Download, Users, Calendar, Mail, Phone, MessageSquare, Shield, AlertCircle, CheckCircle, X } from 'lucide-react';
import { getSubmissions, deleteSubmission, clearAllSubmissions, type Submission } from '../lib/supabase';

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  // Admin password - in production, this should be environment variable
  const ADMIN_PASSWORD = 'comparadise2025';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      loadSubmissions();
    } else {
      setError('Mot de passe incorrect');
    }
  };

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const data = await getSubmissions();
      setSubmissions(data);
      setSuccess(`${data.length} soumissions chargées`);
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Erreur lors du chargement des données');
      console.error('Error loading submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette soumission?')) return;
    
    setError('');
    setSuccess('');
    
    try {
      await deleteSubmission(id);
      setSubmissions(prev => prev.filter(sub => sub.id !== id));
      setSuccess('Soumission supprimée');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la suppression';
      setError(errorMessage);
      console.error('Error deleting submission:', err);
      setTimeout(() => setError(''), 5000);
    }
  };

  const handleClearAll = async () => {
    if (!confirm('ATTENTION: Êtes-vous sûr de vouloir supprimer TOUTES les soumissions? Cette action est irréversible!')) return;
    
    setError('');
    setSuccess('');
    
    try {
      await clearAllSubmissions();
      setSubmissions([]);
      setSuccess('Toutes les soumissions ont été supprimées');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la suppression';
      setError(errorMessage);
      console.error('Error clearing submissions:', err);
      setTimeout(() => setError(''), 5000);
    }
  };

  const exportToCSV = () => {
    const headers = ['Date', 'Prénom', 'Nom', 'Email', 'Téléphone', 'Service', 'Type', 'Message'];
    const csvContent = [
      headers.join(','),
      ...submissions.map(sub => [
        new Date(sub.created_at).toLocaleDateString('fr-CA'),
        `"${sub.first_name}"`,
        `"${sub.last_name}"`,
        `"${sub.email}"`,
        `"${sub.phone || ''}"`,
        `"${sub.service_type}"`,
        `"${sub.submission_type}"`,
        `"${sub.message || ''}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `comparadise-submissions-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('fr-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getServiceTypeColor = (type: string) => {
    const colors = {
      'Automobile': 'from-blue-500 to-cyan-500',
      'Habitation': 'from-emerald-500 to-teal-500',
      'Entreprise': 'from-purple-500 to-pink-500',
      'Avantages sociaux': 'from-orange-500 to-red-500',
      'Contact général': 'from-gray-500 to-slate-500'
    };
    return colors[type as keyof typeof colors] || 'from-gray-500 to-slate-500';
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="morphism rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl glow-effect inline-block mb-4">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-3xl font-black text-white mb-2">Administration</h1>
              <p className="text-gray-300">Accès sécurisé aux données clients</p>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 mb-6 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                <span className="text-red-200">{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2">
                  Mot de passe administrateur
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm pr-12"
                    placeholder="Entrez le mot de passe"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-black transition-all duration-300 glow-effect"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="morphism rounded-3xl p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl glow-effect">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black text-white">Administration</h1>
                <p className="text-blue-200 font-semibold">Gestion des soumissions clients</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={loadSubmissions}
                disabled={loading}
                className="btn-3d bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 glow-effect flex items-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {loading ? 'Chargement...' : 'Actualiser'}
              </button>

              <button
                onClick={exportToCSV}
                disabled={submissions.length === 0}
                className="btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 glow-effect flex items-center disabled:opacity-50"
              >
                <Download className="mr-2 h-5 w-5" />
                Exporter CSV
              </button>

              <button
                onClick={handleClearAll}
                disabled={submissions.length === 0}
                className="btn-3d bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 glow-effect flex items-center disabled:opacity-50"
              >
                <Trash2 className="mr-2 h-5 w-5" />
                Tout supprimer
              </button>

              <button
                onClick={() => setIsAuthenticated(false)}
                className="btn-3d bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300"
              >
                Déconnexion
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-white">{submissions.length}</div>
              <div className="text-sm text-gray-300">Total soumissions</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-emerald-400">
                {submissions.filter(s => s.submission_type === 'quote').length}
              </div>
              <div className="text-sm text-gray-300">Demandes de soumission</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-blue-400">
                {submissions.filter(s => s.submission_type === 'contact').length}
              </div>
              <div className="text-sm text-gray-300">Messages de contact</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-3xl font-black text-purple-400">
                {submissions.filter(s => new Date(s.created_at) > new Date(Date.now() - 24*60*60*1000)).length}
              </div>
              <div className="text-sm text-gray-300">Dernières 24h</div>
            </div>
          </div>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-4 mb-6 flex items-center">
            <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
            <span className="text-emerald-200">{success}</span>
          </div>
        )}

        {error && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 mb-6 flex items-center">
            <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
            <span className="text-red-200">{error}</span>
          </div>
        )}

        {/* Submissions List */}
        <div className="morphism rounded-3xl p-8">
          <h2 className="text-2xl font-black text-white mb-6">Soumissions clients</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
              <p className="text-gray-300">Chargement des données...</p>
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-300 text-lg">Aucune soumission trouvée</p>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div key={submission.id} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center glow-effect">
                            <span className="text-white font-bold text-lg">
                              {submission.first_name.charAt(0).toUpperCase()}{submission.last_name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-black text-white">
                              {submission.first_name} {submission.last_name}
                            </h3>
                            <p className="text-gray-300 text-sm">{formatDate(submission.created_at)}</p>
                          </div>
                        </div>
                        
                        <div className={`bg-gradient-to-r ${getServiceTypeColor(submission.service_type)} px-4 py-2 rounded-full`}>
                          <span className="text-white font-bold text-sm">{submission.service_type}</span>
                        </div>
                        
                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                          submission.submission_type === 'quote' 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {submission.submission_type === 'quote' ? 'SOUMISSION' : 'CONTACT'}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-200">{submission.email}</span>
                        </div>
                        {submission.phone && (
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-emerald-400" />
                            <span className="text-gray-200">{submission.phone}</span>
                          </div>
                        )}
                      </div>

                      {submission.message && (
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="flex items-start space-x-2">
                            <MessageSquare className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                            <p className="text-gray-200 text-sm leading-relaxed">{submission.message}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setSelectedSubmission(submission)}
                        className="btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-bold transition-all duration-300 text-sm flex items-center justify-center"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Détails
                      </button>
                      
                      <button
                        onClick={() => handleDelete(submission.id)}
                        className="btn-3d bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-4 py-2 rounded-lg font-bold transition-all duration-300 text-sm flex items-center justify-center"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detailed View Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedSubmission(null);
            }
          }}>
            <div className="morphism rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-black text-white">Détails de la soumission</h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-lg"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">Prénom</label>
                    <div className="bg-white/10 rounded-lg p-3 text-white">{selectedSubmission.first_name}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">Nom</label>
                    <div className="bg-white/10 rounded-lg p-3 text-white">{selectedSubmission.last_name}</div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Email</label>
                  <div className="bg-white/10 rounded-lg p-3 text-white">{selectedSubmission.email}</div>
                </div>
                
                {selectedSubmission.phone && (
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">Téléphone</label>
                    <div className="bg-white/10 rounded-lg p-3 text-white">{selectedSubmission.phone}</div>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Service demandé</label>
                  <div className="bg-white/10 rounded-lg p-3 text-white">{selectedSubmission.service_type}</div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Type de demande</label>
                  <div className="bg-white/10 rounded-lg p-3 text-white">
                    {selectedSubmission.submission_type === 'quote' ? 'Demande de soumission' : 'Message de contact'}
                  </div>
                </div>
                
                {selectedSubmission.message && (
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">Message</label>
                    <div className="bg-white/10 rounded-lg p-3 text-white whitespace-pre-wrap">{selectedSubmission.message}</div>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Date de soumission</label>
                  <div className="bg-white/10 rounded-lg p-3 text-white">{formatDate(selectedSubmission.created_at)}</div>
                </div>
                
                <div className="flex gap-4 pt-6">
                  <button
                    onClick={() => setSelectedSubmission(null)}
                    className="flex-1 btn-3d bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300"
                  >
                    Fermer
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Êtes-vous sûr de vouloir supprimer cette soumission?')) {
                        handleDelete(selectedSubmission.id);
                        setSelectedSubmission(null);
                      }
                    }}
                    className="flex-1 btn-3d bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;