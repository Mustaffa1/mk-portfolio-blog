import { supabase } from './_supabase.js';
import sanitizeHtml from 'sanitize-html';

export async function handler(event, context) {
  // Sadece POST isteği kabul et
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { author, body, post_slug } = JSON.parse(event.body);

    // 1. GÜVENLİK: XSS Temizliği
    // İsim ve Yorum içeriğini temizle
    const cleanAuthor = sanitizeHtml(author, { allowedTags: [], allowedAttributes: {} });
    const cleanBody = sanitizeHtml(body, { allowedTags: [], allowedAttributes: {} });

    // 2. Veritabanına Kayıt
    const { data, error } = await supabase
      .from('comments')
      .insert([
        { 
          author: cleanAuthor, 
          body: cleanBody, 
          post_slug: post_slug // Yorumun hangi yazıya ait olduğu
        },
      ]);

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Yorum başarıyla eklendi!' }),
    };

  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}