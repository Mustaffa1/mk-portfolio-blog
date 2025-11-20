import { createClient } from '@supabase/supabase-js';

// Service Role (Admin) bağlantısı
const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function handler(event, context) {
  if (event.httpMethod !== 'POST' && event.httpMethod !== 'DELETE') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { commentId, password } = JSON.parse(event.body);

    // 1. SENARYO: ADMIN ŞİFRESİ KONTROLÜ (Master Key)
    if (password === process.env.ADMIN_PASSWORD) {
      // Şifre admin şifresiyse direkt sil
      const { error } = await supabaseAdmin.from('comments').delete().eq('id', commentId);
      if (error) throw error;
      
      return { statusCode: 200, body: JSON.stringify({ message: 'Admin yetkisiyle silindi.' }) };
    }

    // 2. SENARYO: KULLANICI ŞİFRESİ KONTROLÜ
    // Önce yorumu veritabanından çekip şifresine bakmamız lazım
    const { data: comment, error: fetchError } = await supabaseAdmin
      .from('comments')
      .select('user_password')
      .eq('id', commentId)
      .single();

    if (fetchError || !comment) {
      return { statusCode: 404, body: JSON.stringify({ error: 'Yorum bulunamadı.' }) };
    }

    // Veritabanındaki şifre ile girilen şifreyi karşılaştır
    if (comment.user_password && comment.user_password === password) {
      // Eşleşti! Silme işlemini yap
      const { error: deleteError } = await supabaseAdmin.from('comments').delete().eq('id', commentId);
      if (deleteError) throw deleteError;

      return { statusCode: 200, body: JSON.stringify({ message: 'Kullanıcı şifresiyle silindi.' }) };
    }

    // 3. SENARYO: HİÇBİRİ TUTMADI
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Hatalı şifre! Ne admin ne de kullanıcı şifresi eşleşti.' }),
    };

  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}