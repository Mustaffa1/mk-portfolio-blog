<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-4xl font-extrabold text-white mb-2">
        Portfolyo Çalışmalarım
      </h1>
      <p class="text-lg text-slate-400 mb-8 border-b border-slate-700 pb-4">
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
import projectsData from '../data/projects.js'; // <-- Artık ../data/projects.js (çoğul)

const projects = ref(projectsData);
</script>