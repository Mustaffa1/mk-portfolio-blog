<template>
  <main class="min-h-screen pt-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-4xl font-extrabold text-gray-900 mb-2">
        Blog Yazılarım
      </h1>
      <p class="text-lg text-gray-600 mb-8 border-b pb-4">
        Siber güvenlik ve web geliştirme yolculuğumdaki notlarım ve analizlerim.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <BlogPostCard 
          v-for="post in posts" 
          :key="post.id" 
          :post="post"
        />

      </div>

    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import BlogPostCard from '../components/BlogPostCard.vue'; // <-- Yeni bileşeni import et

// Siber Güvenlik odaklı örnek blog yazıları
const posts = ref([
  {
    id: 1,
    title: 'Web Geliştirmeden Siber Güvenliğe Geçiş',
    description: 'Neden web geliştirme kariyerimden siber güvenlik alanına yöneliyorum? Öğrenme sürecim ve hedeflerim üzerine notlar.',
    category: 'Kariyer',
    date: '4 Kasım 2025',
    url: '/blog/webden-siber-guvenlige',
  },
  {
    id: 2,
    title: 'OWASP Top 10 Nedir? (Geliştirici Gözüyle)',
    description: 'Güvenli kod yazmanın temeli olan OWASP Top 10 zafiyetlerini bir yazılımcı bakış açısıyla inceliyorum. İlk 3 zafiyet...',
    category: 'Güvenlik',
    date: '1 Kasım 2025',
    url: '/blog/owasp-top-10',
  },
  {
    id: 3,
    title: 'İlk CTF Deneyimim: TryHackMe "Blue" Odası',
    description: 'Bir "Capture The Flag" yarışmasında Windows zafiyetlerini (EternalBlue) kullanarak nasıl yetki yükselttiğimin adım adım çözümü.',
    category: 'CTF Çözümü',
    date: '28 Ekim 2025',
    url: '/blog/ctf-blue-odasi',
  }
]);
</script>