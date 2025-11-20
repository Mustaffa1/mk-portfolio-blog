import { createI18n } from 'vue-i18n';
import tr from './locales/tr.json';
import en from './locales/en.json';

const i18n = createI18n({
  legacy: false, // Vue 3 Composition API için false olmalı
  locale: 'tr', // Varsayılan dil
  fallbackLocale: 'en', // Dil bulunamazsa İngilizce kullan
  globalInjection: true, // $t fonksiyonunu her yerde kullanabilmek için
  messages: {
    tr,
    en
  }
});

export default i18n;