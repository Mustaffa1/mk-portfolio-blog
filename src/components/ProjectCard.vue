<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] duration-300">
    
    <img :src="project.imageUrl" :alt="project.title" class="w-full h-48 object-cover">
    
    <div class="p-5">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">
        {{ project.title }}
      </h3>
      
      <p class="text-gray-600 text-sm mb-4 h-16 overflow-hidden">
        {{ project.description }}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tech in project.technologies" 
          :key="tech" 
          class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800"
        >
          {{ tech }}
        </span>
      </div>
      
      <div class="flex justify-between space-x-3 mt-4">
        <a :href="project.demoUrl" target="_blank" 
           class="flex-1 text-center py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Canlı Demo
        </a>
        <a :href="project.githubUrl" target="_blank" 
           class="flex-1 text-center py-2 text-sm font-medium rounded-md text-gray-700 border border-gray-300 hover:bg-gray-50 transition"
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