<template>
  <div class="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] duration-300">
    
    <div class="p-6">
      <span class="text-xs font-semibold px-3 py-1 rounded-full bg-green-900 text-green-300 uppercase tracking-wide">
        {{ post.category }}
      </span>

      <h3 class="text-xl font-semibold text-white mt-3 mb-2 hover:text-cyan-400 transition">
        <router-link :to="post.url">{{ post.title }}</router-link>
      </h3>
      
      <p class="text-slate-400 text-sm mb-4">
        {{ post.description }}
      </p>
      
      <div class="text-sm text-slate-500">
        {{ post.date }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  }
});
</script>