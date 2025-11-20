<template>
  <header class="bg-slate-950 border-b border-slate-700 sticky top-0 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold text-white hover:text-cyan-400 transition duration-300 tracking-wider">
            MK.
          </router-link>
        </div>

        <nav class="hidden md:flex items-center space-x-1">
          <router-link to="/" class="nav-link" active-class="active-link">
            {{ $t('nav.home') }}
          </router-link>

          <router-link to="/portfolyo" class="nav-link" active-class="active-link">
            {{ $t('nav.portfolio') }}
          </router-link>

          <router-link to="/blog" class="nav-link" active-class="active-link">
            {{ $t('nav.blog') }}
          </router-link>

          <router-link to="/iletisim" class="nav-link" active-class="active-link">
            {{ $t('nav.contact') }}
          </router-link>
          
          <router-link to="/hakkimda" class="nav-link" active-class="active-link">
            {{ $t('nav.about') }}
          </router-link>

          <div class="flex items-center space-x-2 ml-6 border-l border-slate-700 pl-6 h-6">
            <button @click="switchLanguage('tr')" :class="locale === 'tr' ? 'text-cyan-400 font-bold' : 'text-slate-500 hover:text-slate-300'" class="text-sm transition-colors duration-200 focus:outline-none">TR</button>
            <span class="text-slate-700">|</span>
            <button @click="switchLanguage('en')" :class="locale === 'en' ? 'text-cyan-400 font-bold' : 'text-slate-500 hover:text-slate-300'" class="text-sm transition-colors duration-200 focus:outline-none">EN</button>
          </div>
        </nav>
        
        <div class="-mr-2 flex md:hidden">
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition duration-200">
              <span class="sr-only">Menüyü aç</span>
              <svg v-if="!isMobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
      </div>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-slate-900 border-b border-slate-800" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link to="/" class="mobile-nav-link" active-class="mobile-active-link" @click="isMobileMenuOpen = false">{{ $t('nav.home') }}</router-link>
          <router-link to="/portfolyo" class="mobile-nav-link" active-class="mobile-active-link" @click="isMobileMenuOpen = false">{{ $t('nav.portfolio') }}</router-link>
          <router-link to="/blog" class="mobile-nav-link" active-class="mobile-active-link" @click="isMobileMenuOpen = false">{{ $t('nav.blog') }}</router-link>
          <router-link to="/iletisim" class="mobile-nav-link" active-class="mobile-active-link" @click="isMobileMenuOpen = false">{{ $t('nav.contact') }}</router-link>
          <router-link to="/hakkimda" class="mobile-nav-link" active-class="mobile-active-link" @click="isMobileMenuOpen = false">{{ $t('nav.about') }}</router-link>

          <div class="flex items-center space-x-4 mt-4 px-3 py-2 border-t border-slate-800">
            <span class="text-slate-500 text-sm">Dil:</span>
            <button @click="switchLanguage('tr')" :class="locale === 'tr' ? 'text-cyan-400 font-bold' : 'text-slate-400'" class="text-sm">Türkçe</button>
            <button @click="switchLanguage('en')" :class="locale === 'en' ? 'text-cyan-400 font-bold' : 'text-slate-400'" class="text-sm">English</button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const isMobileMenuOpen = ref(false);
const { locale } = useI18n();

function switchLanguage(lang) {
  locale.value = lang;
  localStorage.setItem('user-locale', lang);
}
</script>

<style scoped>
.nav-link { @apply px-3 py-2 rounded-md text-sm font-medium text-slate-300 transition duration-300; }
.nav-link:hover { @apply text-cyan-400 bg-slate-800/50; }
.active-link { @apply text-cyan-400 bg-slate-800/80 shadow-inner shadow-cyan-500/10; }
.mobile-nav-link { @apply block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800; }
.mobile-active-link { @apply text-cyan-400 bg-slate-800 border-l-4 border-cyan-400 pl-2; }
</style>