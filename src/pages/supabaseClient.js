
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ppwhzzixyrsghsaaqdyv.supabase.co/rest/v1/Messages";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwd2h6eml4eXJzZ2hzYWFxZHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxMDE1MzgsImV4cCI6MjA1ODY3NzUzOH0.MfpR96lsrXeBFhqNmkmCwZvcIIfWXdLaei52NMHM77w";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

