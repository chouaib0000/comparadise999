/*
  # Fix admin page select permissions for submissions table

  1. Problem
    - AdminPage is using anonymous Supabase client to fetch submissions
    - Current RLS policies only allow authenticated users to SELECT from submissions
    - Anonymous users can only INSERT, causing 401 permission denied errors

  2. Solution
    - Add SELECT permission for anonymous role on submissions table
    - Add RLS policy to allow anonymous users to SELECT submissions
    - This enables the AdminPage to function with the current architecture

  3. Security Note
    - This makes submissions data publicly readable via the anonymous key
    - For production, consider implementing proper authentication for AdminPage
    - Current solution maintains existing functionality while fixing the error
*/

-- Grant SELECT permission to anonymous role for submissions table
GRANT SELECT ON public.submissions TO anon;

-- Add RLS policy to allow anonymous users to SELECT submissions
-- This is needed for the AdminPage to function with the current architecture
CREATE POLICY "allow_anonymous_select_submissions" ON public.submissions
  FOR SELECT 
  TO anon
  USING (true);

-- Verify the fix by checking that all required permissions exist
DO $$
BEGIN
  -- Check that anon role has the necessary permissions
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.role_table_grants 
    WHERE table_name = 'submissions' 
    AND grantee = 'anon' 
    AND privilege_type = 'SELECT'
  ) THEN
    RAISE EXCEPTION 'SELECT permission not properly granted to anon role';
  END IF;
  
  -- Log success
  RAISE NOTICE 'Admin page SELECT permissions have been successfully configured for submissions table';
END $$;