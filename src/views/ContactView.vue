<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-4xl font-extrabold text-white mb-8 border-b border-slate-700 pb-4">
        {{ $t('contact.title') }}
      </h1>

      <div v-if="formSuccess" class="p-4 mb-4 bg-green-900 border border-green-700 text-green-200 rounded-md">
        {{ $t('contact.success_msg') }}
      </div>

      <div v-if="formError" class="p-4 mb-4 bg-red-900 border border-red-700 text-red-200 rounded-md">
        <strong>Error:</strong> {{ formError }}
      </div>

      <form v-if="!formSuccess" @submit.prevent="handleFormSubmit" class="mb-16">
        <div class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-slate-300">{{ $t('contact.name_label') }}</label>
            <input type="text" id="name" v-model="formData.name" required class="form-input" />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-slate-300">{{ $t('contact.email_label') }}</label>
            <input type="email" id="email" v-model="formData.email" required class="form-input" />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-slate-300">{{ $t('contact.message_label') }}</label>
            <textarea id="message" rows="4" v-model="formData.message" required class="form-input"></textarea>
          </div>
          
          <div>
            <button type="submit" :disabled="isLoading" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isLoading ? $t('contact.sending') : $t('contact.submit_btn') }}
            </button>
          </div>
        </div>
      </form>

      <div class="border-t border-slate-700 pt-8">
        <h2 class="text-2xl font-bold text-white mb-6">{{ $t('contact.social_title') }}</h2>
        <div class="flex flex-wrap gap-6">
          
          <a href="https://www.linkedin.com/in/mustafak0paral/" target="_blank" class="social-link group">
            <div class="social-icon-bg group-hover:bg-[#0077b5]">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <span class="text-slate-300 group-hover:text-white transition-colors">LinkedIn</span>
          </a>

          <a href="https://twitter.com/" target="_blank" class="social-link group">
            <div class="social-icon-bg group-hover:bg-white group-hover:text-black">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </div>
            <span class="text-slate-300 group-hover:text-white transition-colors">Twitter</span>
          </a>

          <a href="https://instagram.com/" target="_blank" class="social-link group">
            <div class="social-icon-bg group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>
            <span class="text-slate-300 group-hover:text-white transition-colors">Instagram</span>
          </a>

        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({ name: '', email: '', message: '' });
const isLoading = ref(false);
const formError = ref(null);
const formSuccess = ref(false); // Boolean olarak değiştirdik

async function handleFormSubmit() {
  isLoading.value = true;
  formError.value = null;
  formSuccess.value = false;

  try {
    const response = await fetch('/.netlify/functions/submit-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Hata oluştu.');
    }

    // Başarılı olduğunda sadece true yapıyoruz, metni template içindeki $t() hallediyor
    formSuccess.value = true; 
    formData.value = { name: '', email: '', message: '' };

  } catch (err) {
    formError.value = err.message;
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
.form-input { @apply w-full bg-slate-800 border border-slate-700 rounded-md shadow-sm py-2 px-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500; }
.social-link { @apply flex items-center space-x-3 p-2 rounded-lg transition-all duration-300; }
.social-icon-bg { @apply flex items-center justify-center w-10 h-10 bg-slate-800 rounded-full text-slate-400 transition-all duration-300; }
</style>