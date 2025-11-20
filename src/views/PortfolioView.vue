<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-4xl font-extrabold text-white mb-2">
        Portfolyo Çalışmalarım
      </h1>
      <p class="text-lg text-slate-400 mb-8 border-b border-slate-700 pb-4">
        GitHub hesabımdaki herkese açık (public) projelerim - GitHub API'ı ile canlı çekilmektedir.
      </p>

      <div v-if="isLoading" class="text-center text-cyan-400">
        <svg class="animate-spin h-8 w-8 text-cyan-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="mt-2 text-lg font-medium">GitHub projeleri yükleniyor...</p>
      </div>

      <div v-if="error" class="text-center text-red-400 bg-slate-800 p-6 rounded-lg">
        <h3 class="text-xl font-bold">Bir Hata Oluştu</h3>
        <p class="mt-2">{{ error }}</p>
      </div>

      <div v-if="!isLoading && !error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
// 1. 'ref' (veriyi tutmak için) ve 'onMounted' (sayfa yüklendiğinde tetiklemek için) import et
import { ref, onMounted } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

// 2. Durum (State) değişkenlerini tanımla
const projects = ref([]); // Projeleri tutacak boş dizi
const isLoading = ref(true); // Yüklenme durumu
const error = ref(null); // Hata mesajı

// 3. 'onMounted' ile sayfa yüklendiğinde bu fonksiyonu çalıştır
onMounted(() => {
  fetchGitHubRepos();
});

// 4. GitHub API'ından veri çekme fonksiyonu
async function fetchGitHubRepos() {
  try {
    // 'Mustaffa1' yerine kendi GitHub kullanıcı adınızı yazabilirsiniz
    const response = await fetch('https://api.github.com/users/Mustaffa1/repos?sort=updated&direction=desc');
    
    if (!response.ok) {
      throw new Error('GitHub API\'ından veri çekilemedi. Hız limitine (rate limit) takılmış olabilirsiniz.');
    }
    
    const repos = await response.json();

    // 5. VERİ DÖNÜŞTÜRME (TRANSFORMATION)
    // API'dan gelen veriyi, ProjectCard bileşenimizin beklediği formata dönüştür
    projects.value = repos
      // .filter(repo => !repo.fork) // (Opsiyonel) Forkladığınız projeleri gizler
      .map(repo => ({
        id: repo.id,
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '), // "mk-portfolio-blog" -> "mk portfolio blog"
        description: repo.description || 'Açıklama bulunmuyor.',
        
        // API'dan gelen 'language' ve 'topics' dizisini birleştir, null olanları filtrele
        technologies: [repo.language, ...repo.topics].filter(Boolean), 
        
        // API'daki 'homepage' alanı bizim 'demoUrl' alanımızdır. Yoksa '#' koy.
        imageUrl: `https://via.placeholder.com/600x400?text=${repo.name}`, // Şimdilik yer tutucu
        demoUrl: repo.homepage || '#', 
        
        // API'daki 'html_url' alanı bizim 'githubUrl' alanımızdır.
        githubUrl: repo.html_url,
      }));

  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
}
</script>