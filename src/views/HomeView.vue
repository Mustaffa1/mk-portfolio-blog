<template>
  <main class="min-h-screen pt-20 bg-gray-50"> 
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section class="py-16 md:py-24">
            
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Merhaba, Ben <span class="text-indigo-600">MUSTAFA</span>
            </h1>
            
            <p class="mt-4 text-xl md:text-2xl text-gray-500 max-w-3xl">
                Full-Stack Developer ve modern web teknolojileriyle yaratıcı çözümler üretmeyi seviyorum.
            </p>
            
            <div class="mt-8 flex space-x-3">
                <router-link to="/portfolyo" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300">
                    Projelerimi Gör
                </router-link>
                
                <router-link to="/blog" class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition duration-300">
                    Blog Yazılarım
                </router-link>
            </div>
            
        </section>
        
        </div>
  </main>
</template>

<script setup>
  // Script kısmı şimdilik boş kalabilir.
</script>