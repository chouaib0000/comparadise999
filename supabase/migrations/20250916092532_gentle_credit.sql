/*
  # Fix submissions table permissions for anonymous users

  1. Permissions
    - Grant all necessary permissions to anonymous role
    - Grant usage on schema public to anonymous
    - Grant select on submissions table to anonymous (needed for RLS policy evaluation)

  2. RLS Policies
    - Ensure anonymous users can insert submissions
    - Ensure the policy is properly configured

  3. Notes
    - This migration ensures anonymous users can successfully submit forms
    - Addresses RLS policy violations for the submissions table
*/

-- Grant usage on schema to anonymous role
GRANT USAGE ON SCHEMA public TO anon;

-- Grant necessary permissions to anonymous role
GRANT INSERT ON public.submissions TO anon;
GRANT SELECT ON public.submissions TO anon;

-- Ensure the RLS policy exists and is correct
DROP POLICY IF EXISTS "Anyone can insert submissions" ON public.submissions;

CREATE POLICY "Anyone can insert submissions"
  ON public.submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;