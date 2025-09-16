/*
  # Fix RLS policy for submissions table to allow anonymous insertions

  1. Changes
    - Drop existing problematic RLS policy
    - Create new policy that properly allows anonymous and authenticated users to insert
    - Ensure proper permissions are granted

  2. Security
    - Allow both anonymous and authenticated users to insert submissions
    - Maintain security by only allowing insertions, not reads for anonymous users
*/

-- Drop the existing policy that's causing issues
DROP POLICY IF EXISTS "Anyone can insert submissions" ON public.submissions;

-- Create a new policy that explicitly allows insertions for all users
CREATE POLICY "Allow submissions from all users"
  ON public.submissions
  FOR INSERT
  WITH CHECK (true);

-- Ensure proper permissions are granted
GRANT INSERT ON public.submissions TO anon;
GRANT INSERT ON public.submissions TO authenticated;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;