<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-4xl font-extrabold text-white mb-8 border-b border-slate-700 pb-4">
        {{ $t('about.title') }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        <div class="md:col-span-1">
          <img 
            :src="profileImage" 
            alt="Mustafa KOPARAL" 
            class="rounded-lg shadow-lg w-full h-full object-cover aspect-square"
          >
        </div>

        <div class="md:col-span-2">
          
          <h2 class="text-3xl font-bold text-white mb-4">
            {{ $t('about.name') }}
          </h2>
          <h3 class="text-xl font-semibold text-cyan-400 mb-4">
            {{ $t('about.role') }}
          </h3>
          
          <div class="prose prose-lg text-slate-300 max-w-none space-y-4 prose-invert">
            <p>{{ $t('about.p1') }}</p>
            <p>{{ $t('about.p2') }}</p>
          </div>

          <div class="mt-10">
            <h4 class="text-2xl font-bold text-white mb-4">{{ $t('about.skills_title') }}</h4>
            <div class="flex flex-wrap gap-3">
              <span class="skill-badge">Siber Güvenlik</span>
              <span class="skill-badge">Vue.js</span>
              <span class="skill-badge">Tailwind CSS</span>
              <span class="skill-badge">JavaScript (ES6+)</span>
              <span class="skill-badge">Network</span>
              <span class="skill-badge">Linux</span>
              <span class="skill-badge">Git & GitHub</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import profileImage from '../assets/profil.jpg'; 
</script>

<style scoped>
.skill-badge {
  @apply px-4 py-2 rounded-full text-sm font-semibold bg-green-900 text-green-300;
  @apply transition-all duration-300; 
}
.skill-badge:hover {
  @apply bg-green-800 text-white shadow-lg ring-2 ring-green-500;
  @apply -translate-y-1; 
}
</style>