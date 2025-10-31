<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold text-gray-900 hover:text-indigo-700 transition duration-300">
            MK.
          </router-link>
        </div>

        <nav class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link 
              v-for="item in navigation" 
              :key="item.name" 
              :to="item.href"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition duration-300"
              active-class="bg-indigo-50 text-indigo-700" 
              exact-active-class="bg-indigo-50 text-indigo-700"
            >
              {{ item.name }}
            </router-link>
          </div>
        </nav>
        
        <div class="-mr-2 flex md:hidden">
             </div>

      </div>
    </div>
  </header>
</template>

<script setup>
// Menü linklerini Router'daki rotalarla eşleşecek şekilde tanımlıyoruz
const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Portfolyo', href: '/portfolyo' }, 
  { name: 'Blog', href: '/blog' },         
  { name: 'Hakkımda', href: '/hakkimda' },
];
</script>