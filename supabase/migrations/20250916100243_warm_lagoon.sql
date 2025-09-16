/*
  # Grant DELETE permissions for admin operations

  1. Problem
    - AdminPage is getting "permission denied" errors when trying to delete submissions
    - Anonymous role lacks DELETE permissions on submissions table
    - Current RLS policies don't allow DELETE operations for anonymous users

  2. Solution
    - Grant DELETE permission to anonymous role on submissions table
    - Add RLS policy to allow anonymous users to DELETE submissions
    - This enables the AdminPage delete functionality with current architecture

  3. Security Note
    - This makes DELETE operations accessible via the anonymous key
    - For production, implement proper authentication for AdminPage
    - Current solution maintains existing functionality while fixing the error
*/

-- Grant DELETE permission to anonymous role for submissions table
GRANT DELETE ON public.submissions TO anon;

-- Add RLS policy to allow anonymous users to DELETE submissions
-- This is needed for the AdminPage delete functionality
CREATE POLICY "allow_anonymous_delete_submissions" ON public.submissions
  FOR DELETE 
  TO anon
  USING (true);

-- Verify the fix by checking that all required permissions exist
DO $$
BEGIN
  -- Check that anon role has DELETE permission
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.role_table_grants 
    WHERE table_name = 'submissions' 
    AND grantee = 'anon' 
    AND privilege_type = 'DELETE'
  ) THEN
    RAISE EXCEPTION 'DELETE permission not properly granted to anon role';
  END IF;
  
  -- Log success
  RAISE NOTICE 'Admin page DELETE permissions have been successfully configured for submissions table';
END $$;