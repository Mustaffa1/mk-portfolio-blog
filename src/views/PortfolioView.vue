<template>
  <main class="min-h-screen pt-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-4xl font-extrabold text-gray-900 mb-2">
        Portfolyo Çalışmalarım
      </h1>
      <p class="text-lg text-gray-600 mb-8 border-b pb-4">
        Web uygulamaları geliştirirken öğrendiklerimi siber güvenlik perspektifiyle birleştirdiğim projeler.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project"
        />

      </div>

    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

// 1. Proje Verisi: Sizin projelerinize ve hedeflerinize göre güncellendi
const projects = ref([
  {
    id: 1,
    title: 'Güvenli Portfolyo ve Blog Sitesi (Bu Proje)',
    description: 'Vue 3 ve Tailwind CSS ile geliştirilen bu statik site (SSG), Netlify üzerinde barındırılmaktadır. Minimal saldırı yüzeyi ve yüksek performans hedeflenmiştir.',
    technologies: ['Vue 3', 'Tailwind CSS', 'Vite', 'Netlify', 'SSG'],
    imageUrl: 'https://via.placeholder.com/600x400?text=Secure+Portfolio',
    demoUrl: '#', // Buraya Netlify linkiniz gelecek
    githubUrl: 'https://github.com/Mustaffa1/mk-portfolio-blog', // Bu zaten doğru
  },
  {
    id: 2,
    title: 'Twitter Klon Uygulaması',
    description: 'Kullanıcı kimlik doğrulaması (authentication) ve yetkilendirme (authorization) özelliklerine odaklanan bir sosyal medya uygulaması prototipi.',
    technologies: ['Vue 3', 'Firebase (veya Backend)', 'Tailwind CSS', 'Auth'],
    imageUrl: 'https://via.placeholder.com/600x400?text=Twitter+Clone',
    demoUrl: '#', // Demo yok demiştiniz
    githubUrl: 'https://github.com/Mustaffa1/TWITTER-KLON', // GITHUB LINKINIZI BURAYA EKLEYIN
  },
  {
    id: 3,
    title: 'Siber Güvenlik CTF Çözümleri (Örnek)',
    description: 'TryHackMe ve Hack The Box platformlarındaki "Capture The Flag" (CTF) yarışmalarında çözdüğüm zorlukların ve zafiyet analizlerinin (write-up) toplandığı bir proje.',
    technologies: ['Siber Güvenlik', 'Analiz', 'Linux', 'Ağ Güvenliği'],
    imageUrl: 'https://via.placeholder.com/600x400?text=CTF+Writeups',
    demoUrl: '#',
    githubUrl: '#', // Çözümlerinizi GitHub\'da bir depoya ekleyebilirsiniz
  }
]);
</script>