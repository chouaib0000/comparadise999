/*
  # Create submissions table for form data

  1. New Tables
    - `submissions`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `service_type` (text)
      - `message` (text, optional)
      - `submission_type` (text) - 'quote' or 'contact'
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `submissions` table
    - Add policy for authenticated users to read all data
    - Add policy for anonymous users to insert data
*/

CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  service_type text NOT NULL,
  message text,
  submission_type text NOT NULL CHECK (submission_type IN ('quote', 'contact')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert submissions
CREATE POLICY "Anyone can insert submissions"
  ON submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all submissions (for admin)
CREATE POLICY "Authenticated users can read all submissions"
  ON submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to delete submissions (for admin)
CREATE POLICY "Authenticated users can delete submissions"
  ON submissions
  FOR DELETE
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_submissions_updated_at
    BEFORE UPDATE ON submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();