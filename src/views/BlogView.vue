<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 data-aos="fade-down" class="text-4xl font-extrabold text-white mb-2">
        Blog Yazılarım
      </h1>
      <p data-aos="fade-up" data-aos-delay="100" class="text-lg text-slate-400 mb-8 border-b border-slate-700 pb-4">
        Siber güvenlik ve web geliştirme yolculuğumdaki notlarım ve analizlerim.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(post, index) in posts" 
          :key="post.id"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <BlogPostCard :post="post" />
        </div>
      </div>

    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import BlogPostCard from '../components/BlogPostCard.vue';
import postsData from '../data/posts.js'; 

const posts = ref(postsData);
</script>