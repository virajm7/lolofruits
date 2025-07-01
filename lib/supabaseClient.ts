import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

console.log("SUPABASE URL =", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("SUPABASE ANON KEY =", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

if (!supabaseUrl) {
  throw new Error("supabaseUrl is required.");
}
if (!supabaseAnonKey) {
  throw new Error("supabaseAnonKey is required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);