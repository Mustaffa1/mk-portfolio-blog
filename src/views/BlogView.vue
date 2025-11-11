<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-4xl font-extrabold text-white mb-2">
        Blog Yazılarım
      </h1>
      <p class="text-lg text-slate-400 mb-8 border-b border-slate-700 pb-4">
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
import BlogPostCard from '../components/BlogPostCard.vue';
import postsData from '../data/posts.js'; // <-- Artık ../data/posts.js (çoğul)

const posts = ref(postsData);
</script>