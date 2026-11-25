// Configuração do site Maratona Player.
// A chave "anon" (ou "publishable") do Supabase é pública por natureza:
// as tabelas player_* não podem ser lidas direto, só pelas RPCs player_site_*.
window.PLAYER_CONFIG = {
  supabaseUrl: "https://iwotycpdbzrmzqjrlare.supabase.co",
  supabaseKey: "COLE_AQUI_A_CHAVE_ANON",
  maxListas: 10
};
