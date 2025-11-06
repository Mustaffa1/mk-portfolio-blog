<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-4xl font-extrabold text-white mb-8 border-b border-slate-700 pb-4">
        Hakkımda
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        <div class="md:col-span-1">
          <div class="bg-slate-800 w-full aspect-square rounded-lg shadow-lg flex items-center justify-center">
            <span class="text-slate-400">[Profesyonel Fotoğrafınız Buraya Gelecek]</span>
          </div>
        </div>

        <div class="md:col-span-2">
          
          <h2 class="text-3xl font-bold text-white mb-4">
            Mustafa KOPARAL
          </h2>
          <h3 class="text-xl font-semibold text-cyan-400 mb-4">
            Bilgisayar Mühendisi & Siber Güvenlik Meraklısı
          </h3>
          
          <div class="prose prose-lg text-slate-300 max-w-none space-y-4 prose-invert">
            <p>
              Merhaba! Ben Mustafa. Teknolojiye olan tutkumu, bilgisayar mühendisliği eğitimimle birleştirerek modern ve güvenli web uygulamaları geliştirmeye odaklandım.
            </p>
            <p>
              Kariyer hedefim, yazılım geliştirme becerilerimi siber güvenlik alanında derinleştirerek, dijital dünyanın daha güvenli bir yer olmasına katkı sağlamaktır. Vue.js ve Tailwind CSS gibi modern frontend teknolojileriyle çalışırken, aynı zamanda OWASP prensipleri ve ağ güvenliği konularında kendimi geliştiriyorum.
            </p>
          </div>

          <div class="mt-10">
            <h4 class="text-2xl font-bold text-white mb-4">Temel Becerilerim</h4>
            <div class="flex flex-wrap gap-3">
              <span class="skill-badge">Siber Güvenlik (Öğrenme)</span>
              <span class="skill-badge">Vue.js</span>
              <span class="skill-badge">Tailwind CSS</span>
              <span class="skill-badge">JavaScript (ES6+)</span>
              <span class="skill-badge">Ağ Temelleri (Network)</span>
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
// Script kısmı boş kalabilir
</script>

<style scoped>

.skill-badge {
  @apply px-4 py-2 rounded-full text-sm font-semibold bg-green-900 text-green-300;
}
</style>