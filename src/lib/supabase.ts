import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Submission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  service_type: string;
  message?: string;
  submission_type: 'quote' | 'contact';
  created_at: string;
  updated_at: string;
}

export const saveSubmission = async (submission: Omit<Submission, 'id' | 'created_at' | 'updated_at'>): Promise<void> => {
  const { data, error } = await supabase
    .from('submissions')
    .insert([submission]);

  if (error) {
    throw new Error(`Error saving submission: ${error.message}`);
  }

  return;
};

export const getSubmissions = async (): Promise<Submission[]> => {
  const { data, error } = await supabase
    .from('submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Error fetching submissions: ${error.message}`);
  }

  return data || [];
};

export const deleteSubmission = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from('submissions')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error(`Error deleting submission: ${error.message}`);
  }
};

export const clearAllSubmissions = async (): Promise<void> => {
  const { error } = await supabase
    .from('submissions')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all records

  if (error) {
    throw new Error(`Error clearing submissions: ${error.message}`);
  }
};