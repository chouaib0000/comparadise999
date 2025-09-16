/*
  # Fix RLS permissions for submissions table

  1. Changes
    - Revoke all existing permissions to clear conflicts
    - Grant specific INSERT permission to anonymous users
    - Grant full permissions to authenticated users
    - Maintain existing RLS policies

  2. Security
    - Allow anonymous users to insert submissions (for forms)
    - Allow authenticated users full access (for admin functionality)
    - Fix permission conflicts that were blocking form submissions
*/

-- Clear existing permissions to avoid conflicts
REVOKE ALL ON public.submissions FROM anon, authenticated;

-- Grant specific permissions based on role needs
GRANT INSERT ON public.submissions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.submissions TO authenticated;

-- Ensure sequence permissions are maintained
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Verify RLS is enabled (should already be enabled from previous migration)
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;