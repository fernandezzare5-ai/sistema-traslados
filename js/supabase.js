// =====================================
// CONEXIÓN SUPABASE
// SISTEMA DE TRASLADOS
// =====================================


const SUPABASE_URL = 
"https://vmuyuwduumhqaejrslnt.supabase.co";


const SUPABASE_KEY =
"sb_publishable_pYIS2a8P3ydhbZC4Fzn7qg_KMw62YHn";



// Crear conexión

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
