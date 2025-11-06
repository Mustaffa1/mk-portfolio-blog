<template>
  <div class="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] duration-300">
    
    <img :src="project.imageUrl" :alt="project.title" class="w-full h-48 object-cover opacity-80">
    
    <div class="p-5">
      <h3 class="text-xl font-semibold text-white mb-2">
        {{ project.title }}
      </h3>
      
      <p class="text-slate-400 text-sm mb-4 h-16 overflow-hidden">
        {{ project.description }}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tech in project.technologies" 
          :key="tech" 
          class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-900 text-green-300"
        >
          {{ tech }}
        </span>
      </div>
      
      <div class="flex justify-between space-x-3 mt-4">
        <a :href="project.demoUrl" target="_blank" 
           class="flex-1 text-center py-2 text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition"
        >
          Canlı Demo
        </a>
        <a :href="project.githubUrl" target="_blank" 
           class="flex-1 text-center py-2 text-sm font-medium rounded-md text-slate-200 border border-slate-700 bg-slate-700 hover:bg-slate-600 transition"
        >
          GitHub Kod
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Parent (PortfolioView.vue) tarafından gönderilecek proje verisini tanımlıyoruz.
const props = defineProps({
  project: {
    type: Object,
    required: true,
  }
});
</script>