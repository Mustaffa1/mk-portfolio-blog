import { supabase } from './_supabase.js';

export async function handler(event, context) {
  // URL'den 'slug' parametresini al (örn: ?slug=owasp-top-10)
  const { slug } = event.queryStringParameters;

  if (!slug) {
    return { statusCode: 400, body: 'Slug parametresi gerekli.' };
  }

  try {
    // Supabase'den bu slug'a ait yorumları çek
    // En yeniden en eskiye doğru sırala
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_slug', slug)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}