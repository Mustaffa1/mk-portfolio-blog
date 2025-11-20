<template>
  <main class="min-h-screen pt-20 bg-slate-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 class="text-4xl font-extrabold text-white mb-4">
        {{ post.title }}
      </h1>
      
      <div class="flex items-center space-x-4 text-sm text-slate-400 mb-8 border-b border-slate-700 pb-4">
        <span>Yayınlanma: {{ post.date }}</span>
        <span>|</span>
        <span class="px-3 py-1 rounded-full bg-green-900 text-green-300 text-xs font-semibold">
          {{ post.category }}
        </span>
      </div>

      <div v-if="isLoadingPost" class="text-center text-cyan-400">
        <p>Yazı içeriği yükleniyor...</p>
      </div>

      <div 
        v-if="!isLoadingPost"
        class="prose lg:prose-xl max-w-none prose-invert mb-16" 
        v-html="postContentHtml"
      >
      </div>

      <div class="border-t border-slate-700 pt-12">
        <h2 class="text-2xl font-bold text-white mb-8">Yorumlar</h2>

        <div class="bg-slate-800 p-6 rounded-lg shadow-lg mb-12 border border-slate-700">
          <h3 class="text-lg font-semibold text-cyan-400 mb-4">Bir Yorum Bırak</h3>
          
          <form @submit.prevent="submitComment">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-400 mb-1">İsim / Rumuz</label>
                <input v-model="commentForm.author" type="text" required class="form-input" placeholder="Adınız">
              </div>
              
              <div>
                <label class="block text-sm font-medium text-slate-400 mb-1">Yorum Şifresi (Silmek için)</label>
                <input v-model="commentForm.user_password" type="password" required class="form-input" placeholder="Şifre belirleyin">
              </div>
            </div>
            
            <div class="mt-4">
              <label class="block text-sm font-medium text-slate-400 mb-1">Yorumunuz</label>
              <textarea v-model="commentForm.body" rows="3" required class="form-input" placeholder="Düşünceleriniz..."></textarea>
            </div>
            
            <div class="mt-4 flex items-center justify-between">
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Gönderiliyor...' : 'Yorumu Gönder' }}
              </button>
              
              <span v-if="submitSuccess" class="text-green-400 text-sm">
                Yorumunuz eklendi!
              </span>
            </div>
          </form>
        </div>

        <div class="space-y-6">
          <div v-if="isLoadingComments" class="text-center text-slate-500">
            Yorumlar yükleniyor...
          </div>

          <div v-else-if="comments.length === 0" class="text-center text-slate-500 italic">
            Henüz yorum yapılmamış. İlk yorumu sen yap!
          </div>

          <div v-else v-for="comment in comments" :key="comment.id" class="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 group relative">
            
            <button 
              @click="deleteComment(comment.id)"
              class="absolute top-2 right-2 text-slate-600 hover:text-red-500 transition-colors p-1 opacity-0 group-hover:opacity-100"
              title="Yorumu Sil"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>

            <div class="flex justify-between items-start mb-2 pr-8">
              <span class="font-bold text-green-400">{{ comment.author }}</span>
              <span class="text-xs text-slate-500">{{ new Date(comment.created_at).toLocaleDateString('tr-TR') }}</span>
            </div>
            <p class="text-slate-300 text-sm">{{ comment.body }}</p>
          </div>
        </div>

      </div>

    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import postsData from '../data/posts.js';
import { marked } from 'marked';

// --- BLOG İÇERİĞİ MANTIĞI ---
const route = useRoute();
const postContentHtml = ref('');
const isLoadingPost = ref(true);

const post = computed(() => {
  const currentSlug = route.params.slug;
  return postsData.find(p => p.slug === currentSlug) || { title: 'Yazı Bulunamadı', description: '' };
});

async function loadPostContent() {
  if (!post.value.slug) return;
  isLoadingPost.value = true;
  try {
    const response = await fetch(`/blog/${post.value.slug}.md`);
    if (!response.ok) throw new Error('Markdown dosyası bulunamadı.');
    const markdownText = await response.text();
    postContentHtml.value = marked.parse(markdownText);
  } catch (err) {
    postContentHtml.value = `<p class="text-red-400">Hata: ${err.message}</p>`;
  } finally {
    isLoadingPost.value = false;
  }
}

// --- YORUM SİSTEMİ MANTIĞI ---
const comments = ref([]);
// YENİ: Form verisine 'user_password' eklendi
const commentForm = ref({ author: '', body: '', user_password: '' });
const isSubmitting = ref(false);
const isLoadingComments = ref(false);
const submitSuccess = ref(false);

async function fetchComments() {
  if (!post.value.slug) return;
  isLoadingComments.value = true;
  try {
    const response = await fetch(`/.netlify/functions/get-comments?slug=${post.value.slug}`);
    const data = await response.json();
    comments.value = data;
  } catch (error) {
    console.error('Yorumlar yüklenemedi:', error);
  } finally {
    isLoadingComments.value = false;
  }
}

async function submitComment() {
  isSubmitting.value = true;
  submitSuccess.value = false;
  try {
    const payload = {
      author: commentForm.value.author,
      body: commentForm.value.body,
      post_slug: post.value.slug,
      user_password: commentForm.value.user_password // YENİ: Şifreyi backend'e gönder
    };

    const response = await fetch('/.netlify/functions/submit-comment', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      submitSuccess.value = true;
      commentForm.value = { author: '', body: '', user_password: '' }; // Formu temizle
      fetchComments(); 
      setTimeout(() => submitSuccess.value = false, 3000);
    }
  } catch (error) {
    console.error('Yorum gönderilemedi:', error);
  } finally {
    isSubmitting.value = false;
  }
}

// YENİ: Yorum Silme Fonksiyonu
async function deleteComment(id) {
  const password = prompt("Yorumu silmek için şifrenizi girin (Admin veya Kullanıcı Şifresi):");
  if (!password) return;

  try {
    const response = await fetch('/.netlify/functions/delete-comment', {
      method: 'POST',
      body: JSON.stringify({ commentId: id, password: password }),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error); 
    } else {
      alert("Yorum başarıyla silindi!");
      fetchComments(); // Listeyi yenile
    }
  } catch (err) {
    console.error("Silme hatası:", err);
    alert("Bir hata oluştu.");
  }
}

onMounted(() => {
  loadPostContent();
  fetchComments();
});

watch(() => route.params.slug, () => {
  loadPostContent();
  fetchComments();
});
</script>

<style scoped>
.form-input {
  @apply w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-slate-200 text-sm;
  @apply focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500;
}
</style>