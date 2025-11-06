<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-4xl font-extrabold text-white mb-4">
        {{ post.title }}
      </h1>
      
      <div class="flex items-center space-x-4 text-sm text-slate-400 mb-8 border-b border-slate-700 pb-4">
        <span>Yayınlanma: {{ post.date }}</span>
        <span>|</span>
        <span class="px-3 py-1 rounded-full bg-green-900 text-green-300 text-xs font-semibold">
          {{ post.category }}
        </span>
      </div>

      <div class="prose lg:prose-xl max-w-none prose-invert">
        <p class="text-lg text-slate-300 leading-relaxed">
          {{ post.description }}
        </p>
        
        <p class="mt-6 text-slate-500 italic">
          (Bu yazının tam içeriği (Markdown veya HTML) ileride buraya eklenecektir.)
        </p>
      </div>

    </div>
  </main>
</template>

<script setup>
// ... (script kısmı aynı kalır) ...
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// 1. Veriyi Al
const postsData = ref([
  {
    id: 1,
    slug: 'webden-siber-guvenlige',
    title: 'Web Geliştirmeden Siber Güvenliğe Geçiş',
    description: 'Neden web geliştirme kariyerimden siber güvenlik alanına yöneliyorum? Öğrenme sürecim ve hedeflerim üzerine notlar.',
    category: 'Kariyer',
    date: '4 Kasım 2025',
  },
  {
    id: 2,
    slug: 'owasp-top-10',
    title: 'OWASP Top 10 Nedir? (Geliştirici Gözüyle)',
    description: 'Güvenli kod yazmanın temeli olan OWASP Top 10 zafiyetlerini bir yazılımcı bakış açısıyla inceliyorum. İlk 3 zafiyet...',
    category: 'Güvenlik',
    date: '1 Kasım 2025',
  },
  {
    id: 3,
    slug: 'ctf-blue-odasi',
    title: 'İlk CTF Deneyimim: TryHackMe "Blue" Odası',
    description: 'Bir "Capture The Flag" yarışmasında Windows zafiyetlerini (EternalBlue) kullanarak nasıl yetki yükselttiğimin adım adım çözümü.',
    category: 'CTF Çözümü',
    date: '28 Ekim 2025',
  }
]);

// 2. URL'den 'slug' parametresini al
const route = useRoute();
const currentSlug = route.params.slug;

// 3. Doğru Postayı Bul
const post = computed(() => {
  return postsData.value.find(p => p.slug === currentSlug) || { title: 'Yazı Bulunamadı', description: '' };
});

</script>