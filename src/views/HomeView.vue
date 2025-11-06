<template>
  <main class="min-h-screen pt-20 bg-slate-900"> 
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section class="py-16 md:py-24">
            
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Merhaba, Ben <span class="text-cyan-400">MUSTAFA</span>
            </h1>
            
            <p class="mt-4 text-xl md:text-2xl text-slate-400 max-w-3xl">
                Bir tam yığın geliştiricisiyim (Full-Stack Developer) ve modern web teknolojileriyle yaratıcı çözümler üretmeyi seviyorum.
            </p>
            
            <div class="mt-8 flex space-x-3">
                
                <router-link to="/portfolyo" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300">
                    Projelerimi Gör
                </router-link>
                
                <router-link to="/blog" class="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-md shadow-sm text-slate-200 bg-slate-800 hover:bg-slate-700 transition duration-300">
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