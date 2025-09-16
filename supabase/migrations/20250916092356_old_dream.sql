/*
  # Fix anonymous user permissions for submissions table

  1. Permissions
    - Grant INSERT permission to anonymous role on submissions table
    - This allows the existing RLS policy to work properly

  2. Notes
    - The RLS policy "Anyone can insert submissions" already exists
    - But the anonymous role needs base table permissions to use it
*/

-- Grant INSERT permission to anonymous role
GRANT INSERT ON submissions TO anon;