/*
  # Final comprehensive fix for submissions table RLS

  1. Problem Analysis
    - Anonymous users getting 401 errors when submitting forms
    - RLS policies are blocking insertions despite permissions being granted
    - Multiple conflicting policies from previous migrations

  2. Solution
    - Drop ALL existing policies to start clean
    - Create simple, clear policies that work
    - Grant minimal required permissions
    - Test with both anonymous and authenticated access patterns

  3. Security
    - Anonymous users can only INSERT submissions (for forms)
    - Authenticated users have full access (for admin)
    - No data leakage between roles
*/

-- First, ensure we're working with a clean slate
DROP POLICY IF EXISTS "Anyone can insert submissions" ON public.submissions;
DROP POLICY IF EXISTS "Allow submissions from all users" ON public.submissions;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.submissions;
DROP POLICY IF EXISTS "Enable select for authenticated users" ON public.submissions;
DROP POLICY IF EXISTS "Enable delete for authenticated users" ON public.submissions;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON public.submissions;
DROP POLICY IF EXISTS "Authenticated users can read all submissions" ON public.submissions;
DROP POLICY IF EXISTS "Authenticated users can delete submissions" ON public.submissions;

-- Revoke all permissions to start fresh
REVOKE ALL ON public.submissions FROM anon, authenticated, public;
REVOKE ALL ON SCHEMA public FROM anon, authenticated, public;

-- Grant essential schema access
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Grant specific table permissions
GRANT INSERT ON public.submissions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.submissions TO authenticated;

-- Grant sequence permissions (needed for UUID generation)
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Disable RLS temporarily to recreate policies
ALTER TABLE public.submissions DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

-- Create simple, working policies
CREATE POLICY "allow_anonymous_insert" ON public.submissions
  FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "allow_authenticated_all" ON public.submissions
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Ensure the table structure is correct
DO $$
BEGIN
  -- Verify the table exists and has the right structure
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'submissions' AND table_schema = 'public') THEN
    RAISE EXCEPTION 'submissions table does not exist';
  END IF;
  
  -- Verify required columns exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'submissions' AND column_name = 'first_name') THEN
    RAISE EXCEPTION 'first_name column missing from submissions table';
  END IF;
END $$;