<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 border-b border-slate-800">
        <section class="text-center md:text-left">
            <span class="inline-block py-1 px-3 rounded-full bg-slate-800 text-cyan-400 text-sm font-semibold mb-4 border border-slate-700">
              🚀 Full-Stack Developer & Security Enthusiast
            </span>
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Güvenli Kod, <br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Güçlü Gelecek.
                </span>
            </h1>
            <p class="mt-4 text-xl text-slate-400 max-w-2xl mx-auto md:mx-0">
                Merhaba, ben <strong>Mustafa</strong>. Modern web teknolojilerini siber güvenlik prensipleriyle birleştirerek, hem hızlı hem de güvenli dijital deneyimler inşa ediyorum.
            </p>
            
            <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <router-link to="/portfolyo" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition md:w-auto w-full">
                    Projelerimi İncele
                </router-link>
                <router-link to="/iletisim" class="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-md text-slate-300 bg-slate-800 hover:bg-slate-700 transition md:w-auto w-full">
                    İletişime Geç
                </router-link>
            </div>
        </section>
    </div>

    <div class="bg-slate-950 py-16 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white">Neler Yapıyorum?</h2>
          <p class="text-slate-400 mt-2">Teknoloji yığınım ve odaklandığım alanlar.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition group">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-900/30 transition">
              <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Web Geliştirme</h3>
            <p class="text-slate-400 text-sm">Vue.js, Tailwind CSS ve Modern JavaScript kullanarak responsive ve yüksek performanslı ön yüz (frontend) uygulamaları.</p>
          </div>

          <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-green-500/50 transition group">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-900/30 transition">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Siber Güvenlik</h3>
            <p class="text-slate-400 text-sm">Web uygulama güvenliği (OWASP), ağ güvenliği temelleri ve güvenli kod geliştirme prensipleri.</p>
          </div>

          <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition group">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-900/30 transition">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Backend & Veritabanı</h3>
            <p class="text-slate-400 text-sm">Node.js ortamları, SQL veritabanları (Supabase/PostgreSQL) ve REST API entegrasyonları.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h2 class="text-3xl font-bold text-white">Son Yazılar</h2>
          <p class="text-slate-400 mt-1">Blogumdan en güncel notlar.</p>
        </div>
        <router-link to="/blog" class="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center">
          Tümünü Gör <span aria-hidden="true" class="ml-1">&rarr;</span>
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BlogPostCard 
          v-for="post in latestPosts" 
          :key="post.id" 
          :post="post"
        />
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h2 class="text-3xl font-bold text-white">Öne Çıkan Projeler</h2>
          <p class="text-slate-400 mt-1">GitHub üzerinde geliştirdiğim son çalışmalar.</p>
        </div>
        <router-link to="/portfolyo" class="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center">
          Tümünü Gör <span aria-hidden="true" class="ml-1">&rarr;</span>
        </router-link>
      </div>

      <div v-if="isLoading" class="text-center py-10">
        <p class="text-slate-500">Projeler yükleniyor...</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in featuredProjects" 
          :key="project.id" 
          :project="project"
        />
      </div>
    </div>

  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import BlogPostCard from '../components/BlogPostCard.vue';
import ProjectCard from '../components/ProjectCard.vue';
import postsData from '../data/posts.js'; // Blog verilerini al

// --- BLOG MANTIĞI ---
// Blog verisini tersine çevir (en yeni en üstte) ve ilk 3 tanesini al
const latestPosts = computed(() => {
  return [...postsData].slice(0, 3); 
});

// --- PROJE MANTIĞI (GitHub API) ---
const featuredProjects = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    // GitHub'dan en son güncellenen projeleri çek
    const response = await fetch('https://api.github.com/users/Mustaffa1/repos?sort=updated&direction=desc&per_page=3');
    if (response.ok) {
      const repos = await response.json();
      // Veriyi ProjectCard formatına dönüştür
      featuredProjects.value = repos.map(repo => ({
        id: repo.id,
        title: repo.name.replace(/-/g, ' '),
        description: repo.description || 'Açıklama bulunmuyor.',
        technologies: [repo.language, ...repo.topics].filter(Boolean).slice(0, 3), // Sadece ilk 3 teknoloji
        imageUrl: `https://via.placeholder.com/600x400?text=${repo.name}`,
        demoUrl: repo.homepage || '#',
        githubUrl: repo.html_url,
      }));
    }
  } catch (error) {
    console.error('GitHub API hatası:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>