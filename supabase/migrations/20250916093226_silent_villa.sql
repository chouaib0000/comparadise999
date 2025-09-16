/*
  # Final fix for submissions table RLS policy

  1. Changes
    - Drop all existing policies on submissions table
    - Create a comprehensive policy that allows insertions from all sources
    - Grant all necessary permissions explicitly
    - Add policy for authenticated users to manage submissions

  2. Security
    - Allow anonymous users to insert submissions (for forms)
    - Allow authenticated users full access (for admin functionality)
    - Maintain RLS while ensuring functionality works
*/

-- Drop all existing policies on submissions table
DROP POLICY IF EXISTS "Anyone can insert submissions" ON public.submissions;
DROP POLICY IF EXISTS "Allow submissions from all users" ON public.submissions;
DROP POLICY IF EXISTS "Authenticated users can read all submissions" ON public.submissions;
DROP POLICY IF EXISTS "Authenticated users can delete submissions" ON public.submissions;

-- Grant necessary permissions to both roles
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.submissions TO anon, authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Create comprehensive policies
CREATE POLICY "Enable insert for all users" ON public.submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users" ON public.submissions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Enable delete for authenticated users" ON public.submissions
  FOR DELETE TO authenticated USING (true);

CREATE POLICY "Enable update for authenticated users" ON public.submissions
  FOR UPDATE TO authenticated USING (true);

-- Ensure RLS is enabled
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;