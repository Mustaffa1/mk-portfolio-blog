import './style.css'  // Tailwind CSS burada
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- Router'ı içeri aktar
import i18n from './i18n'

const app = createApp(App)

app.use(router) // <-- Uygulamaya router'ı ekle
app.use(i18n)
app.mount('#app')