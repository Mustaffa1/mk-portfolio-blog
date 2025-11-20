import './style.css'  // Tailwind CSS burada
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- Router'ı içeri aktar
import i18n from './i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router) // <-- Uygulamaya router'ı ekle
app.use(i18n)
app.mount('#app')
AOS.init({
  duration: 800, // Animasyon süresi (ms)
  once: true,    // Animasyon sadece bir kere çalışsın (aşağı inip çıkınca tekrar etmesin)
  offset: 50,    // Tetiklenme mesafesi
});