import { supabase } from './_supabase.js';
import sanitizeHtml from 'sanitize-html';

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // 1. Gelen veride 'user_password' alanını da alıyoruz
    const { author, body, post_slug, user_password } = JSON.parse(event.body);

    const cleanAuthor = sanitizeHtml(author, { allowedTags: [], allowedAttributes: {} });
    const cleanBody = sanitizeHtml(body, { allowedTags: [], allowedAttributes: {} });
    
    // Şifreyi temizlemeye gerek yok ama boş olmamasını kontrol edebiliriz
    const finalPassword = user_password || ''; 

    const { data, error } = await supabase
      .from('comments')
      .insert([
        { 
          author: cleanAuthor, 
          body: cleanBody, 
          post_slug: post_slug,
          user_password: finalPassword // <-- Şifreyi kaydediyoruz
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