@@ .. @@
 -- Ensure the RLS policy exists and is correct
 DROP POLICY IF EXISTS "Anyone can insert submissions" ON public.submissions;
 
 CREATE POLICY "Anyone can insert submissions"
   ON public.submissions
   FOR INSERT
-  TO anon, authenticated
-  WITH CHECK (true);
+  TO public
+  WITH CHECK (
+    auth.role() = 'anon' OR 
+    auth.role() = 'authenticated' OR 
+    auth.role() IS NULL
+  );
 
 -- Ensure RLS is enabled
 ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;