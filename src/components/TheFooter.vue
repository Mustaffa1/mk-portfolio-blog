<template>
  <footer class="bg-slate-950 text-white mt-12 py-8 border-t border-slate-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <div class="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/Mustaffa1" target="_blank" class="text-slate-400 hover:text-cyan-400 transition">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.887-.013-1.745-2.782.604-3.37-1.341-3.37-1.341-.454-1.157-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.001.071 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.833.09-.645.349-1.089.635-1.337-2.22-.253-4.555-1.111-4.555-4.943 0-1.096.394-1.989 1.031-2.695-.103-.253-.448-1.272.098-2.651 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.7.126 2.47.369 1.91-1.296 2.748-1.026 2.748-1.026.546 1.379.201 2.398.098 2.651.64.706 1.03 1.599 1.03 2.695 0 3.841-2.339 4.686-4.566 4.935.359.307.678.917.678 1.846 0 1.334-.012 2.41-.012 2.73 0 .267.18.586.688.482C21.137 20.19 24 16.435 24 12.017 24 6.484 19.522 2 14 2h-2z" clip-rule="evenodd" /></svg>
        </a>
      </div>

      <p class="text-sm text-slate-400">
        &copy; {{ new Date().getFullYear() }} MK. {{ $t('footer.rights') }}
      </p>
      
      <p class="text-xs mt-1 text-slate-500">
        {{ $t('footer.built_with') }}
      </p>
    </div>
  </footer>
</template>