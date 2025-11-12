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

      <div 
        v-if="post.fullContent"
        class="prose lg:prose-xl max-w-none prose-invert" 
        v-html="post.fullContent"
      >
        </div>
      
      <div v-else class="prose lg:prose-xl max-w-none prose-invert">
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
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import postsData from '../data/posts.js'; 

const route = useRoute();
const currentSlug = route.params.slug;

const post = computed(() => {
  return postsData.find(p => p.slug === currentSlug) || { title: 'Yazı Bulunamadı', description: '' };
});
</script>