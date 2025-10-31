import './style.css'  // Tailwind CSS burada
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- Router'ı içeri aktar

const app = createApp(App)

app.use(router) // <-- Uygulamaya router'ı ekle

app.mount('#app')