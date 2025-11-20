<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 data-aos="fade-down" class="text-4xl font-extrabold text-white mb-2">
        Portfolyo Çalışmalarım
      </h1>
      
      <p data-aos="fade-up" data-aos-delay="100" class="text-lg text-slate-400 mb-8 border-b border-slate-700 pb-4">
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
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

const projects = ref([]);
const isLoading = ref(true);
const error = ref(null);

onMounted(() => {
  fetchGitHubRepos();
});

async function fetchGitHubRepos() {
  try {
    const response = await fetch('https://api.github.com/users/Mustaffa1/repos?sort=updated&direction=desc');
    if (!response.ok) {
      throw new Error('GitHub API\'ından veri çekilemedi.');
    }
    const repos = await response.json();
    projects.value = repos
      .map(repo => ({
        id: repo.id,
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
        description: repo.description || 'Açıklama bulunmuyor.',
        technologies: [repo.language, ...repo.topics].filter(Boolean), 
        imageUrl: `https://via.placeholder.com/600x400?text=${repo.name}`,
        demoUrl: repo.homepage || '#', 
        githubUrl: repo.html_url,
      }));
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
}
</script>