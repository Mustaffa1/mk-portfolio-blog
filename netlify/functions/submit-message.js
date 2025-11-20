import { supabase } from './_supabase.js';
// 1. YENİ XSS KÜTÜPHANESİNİ IMPORT ET
import sanitizeHtml from 'sanitize-html';

// Netlify Fonksiyonunun ana gövdesi (handler)
export async function handler(event, context) {
  
  // Güvenlik: Sadece POST isteklerine izin ver
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Sadece POST istekleri kabul edilir.' }),
    };
  }

  try {
    // 2. Vue'dan gönderilen veriyi al
    const { name, email, message } = JSON.parse(event.body);

    // 3. GÜVENLİK ADIMI (XSS TEMİZLİĞİ)
    // 'sanitize-html' kullanarak gelen verideki TÜM HTML etiketlerini temizle.
    // Bu, <script> etiketlerini ve diğer zararlı kodları yok eder.
    const cleanName = sanitizeHtml(name, { allowedTags: [], allowedAttributes: {} });
    const cleanEmail = sanitizeHtml(email, { allowedTags: [], allowedAttributes: {} });
    const cleanMessage = sanitizeHtml(message, { allowedTags: [], allowedAttributes: {} });
    
    // 4. TEMİZLENMİŞ veriyi Supabase veritabanına kaydet
    const { data, error } = await supabase
      .from('messages')
      .insert([
        { name: cleanName, email: cleanEmail, message: cleanMessage },
      ]);

    if (error) {
      throw new Error(error.message);
    }

    // 5. Başarılı olursa Vue'ya (Frontend) onay mesajı gönder
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Mesajınız başarıyla alındı!' }),
    };

  } catch (err) {
    // 6. Genel hata yakalama
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Sunucu hatası: ' + err.message }),
    };
  }
}