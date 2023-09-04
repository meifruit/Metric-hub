import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ingiybkneeshskxfelvb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluZ2l5YmtuZWVzaHNreGZlbHZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MTU4MzIsImV4cCI6MjAwOTM5MTgzMn0.4rxIeevTkl_O6m7PGJ3fYP8rEH06Tv7TYVxGRP4AePw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
