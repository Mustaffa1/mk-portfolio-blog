import { createClient } from '@supabase/supabase-js';

// .env dosyasındaki anahtarları BU ŞEKİLDE okuruz (process.env)
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

// Supabase istemcisini oluştur ve dışa aktar
export const supabase = createClient(supabaseUrl, supabaseKey);