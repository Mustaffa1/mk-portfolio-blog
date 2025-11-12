<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-4xl font-extrabold text-white mb-8 border-b border-slate-700 pb-4">
        Hakkımda
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
            Mustafa KOPARAL
          </h2>
          <h3 class="text-xl font-semibold text-cyan-400 mb-4">
            Bilgisayar Mühendisi & Siber Güvenlik 
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

          <div class="mt-12 pt-8 border-t border-slate-700">
            <h4 class="text-2xl font-bold text-white mb-4">
              Benimle İletişime Geçin
            </h4>
            <p class="text-slate-400 mb-6">
              Projeler, işbirlikleri veya siber güvenlik hakkında sohbet etmek için bana bu kanallardan ulaşabilirsiniz.
            </p>
            <div class="flex space-x-4">
              
              <a 
                href="https://www.linkedin.com/in/mustafak0paral/" 
                target="_blank" 
                class="contact-button bg-cyan-600 hover:bg-cyan-700 text-white"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>

              <a 
                href="mailto:mustaffakoparal@gmail.com" 
                class="contact-button bg-slate-700 hover:bg-slate-600 text-slate-200"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-1.518 14h-16v-11.822l8 6.509 8-6.509v11.822z"/></svg>
                <span>Email Gönder</span>
              </a>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// DEĞİŞİKLİK BURADA:
// 1. Görseli 'src/assets' klasöründen import ediyoruz.
// Lütfen 'profil.jpg' adını kendi dosya adınızla değiştirin.
import profileImage from '../assets/profil.jpg'; 
</script>

<style scoped>
/* Beceri etiketlerinin stilini güncelliyoruz (Animasyon isteğiniz için) */
.skill-badge {
  @apply px-4 py-2 rounded-full text-sm font-semibold bg-green-900 text-green-300;
  /* Animasyon (Geçiş) */
  @apply transition-all duration-300; 
}
.skill-badge:hover {
  /* Üzerine gelindiğinde (Hover) */
  @apply bg-green-800 text-white shadow-lg ring-2 ring-green-500;
  @apply -translate-y-1; /* Hafifçe yukarı kayar */
}

/* YENİ: İletişim Butonları Stili */
.contact-button {
  @apply inline-flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium;
  @apply transition-all duration-300;
}
.contact-button:hover {
  @apply shadow-lg -translate-y-1;
}
</style>