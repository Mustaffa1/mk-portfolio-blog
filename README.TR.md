# 🛡️ Güvenli Full-Stack Portfolyo & Blog

> Vue 3, Sunucusuz Mimari (Serverless) ve Güvenli Veritabanı prensipleriyle oluşturulmuş, siber güvenlik odaklı kişisel web uygulaması.

[![English README](https://img.shields.io/badge/lang-English-blue.svg)](./README.md)

![Project Status](https://img.shields.io/badge/status-yayında-success)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css)
![Netlify](https://img.shields.io/badge/Netlify-Functions-00C7B7?logo=netlify)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase)

## 🚀 Proje Özeti

Bu proje sadece bir portfolyo sitesi değil; modern web mühendisliği ve siber güvenlik en iyi uygulamalarının bir gösterimidir. **Sunucusuz Mimari (Serverless Architecture)** kullanarak, ön yüz etkileşimi ile arka uç güvenliği arasında bir köprü kurar.

Uygulama; GitHub API'sından beslenen dinamik bir portfolyo, özel bir Markdown tabanlı blog motoru ve XSS gibi yaygın web zafiyetlerine karşı korumalı güvenli bir iletişim sistemi içerir.

🔗 **Canlı Demo:** [https://mustafakoparal.netlify.app](https://mustafakoparal.netlify.app)

## 🏗️ Teknoloji Yığını ve Mimari

| Bileşen | Teknoloji | Amaç |
|-----------|------------|---------|
| **Frontend** | Vue.js 3 (Composition API) | Reaktif Arayüz, Durum Yönetimi (State Management) |
| **Stil** | Tailwind CSS | Utility-first responsive tasarım (Siber Güvenlik Teması) |
| **Backend** | Netlify Functions | Sunucusuz API uç noktaları (Node.js) |
| **Veritabanı** | Supabase (PostgreSQL) | RLS korumalı ilişkisel veri depolama |
| **Güvenlik** | sanitize-html | Backend tarafı XSS önleme & Girdi Temizleme |
| **İçerik** | Marked.js | Özel Markdown-HTML dönüştürme motoru |
| **Yerelleştirme** | Vue I18n | Çoklu dil desteği (TR/EN) |

## 🔐 Temel Mühendislik ve Güvenlik Özellikleri

### 1. Güvenli Backend İletişimi (Serverless)
Veritabanı kimlik bilgilerini istemci tarafında (client-side) ifşa etmek yerine, bu proje **Netlify Functions**'ı bir ara katman (middleware) olarak kullanır.
- **Frontend**, veriyi Netlify Functions'a gönderir.
- **Backend**, veriyi doğrular ve **Stored XSS** saldırılarını önlemek için `sanitize-html` kullanarak temizler.
- **Veritabanı**, sadece bu güvenli backend ortamından gelen veriyi kabul eder.

### 2. Satır Seviyesi Güvenlik (RLS)
PostgreSQL veritabanı sıkı RLS politikalarıyla korunmaktadır:
- **Yazma Erişimi:** Anonim kullanıcılar veri ekleyebilir (yorum/mesaj).
- **Okuma Erişimi:** Herkes yorumları okuyabilir, ancak *sadece Admin* özel mesajları okuyabilir.
- **Silme Erişimi:** Sadece doğru `admin_password` veya sahiplik kimlik bilgilerine sahip kullanıcılar silme işlemi yapabilir.

### 3. Özel Yetkilendirme Mantığı (Custom Authorization)
Çok katmanlı bir yetkilendirme sistemi için özel bir backend mantığı (`delete-comment.js`) geliştirilmiştir:
- **Admin Seviyesi:** Ana anahtar (master key) kullanarak herhangi bir yorumu silebilir.
- **Kullanıcı Seviyesi:** Yorum oluştururken belirledikleri benzersiz şifreyi kullanarak kendi yorumlarını silebilirler.

### 4. Dinamik İçerik Motoru
- **Portfolyo:** Verileri canlı olarak **GitHub REST API** üzerinden çeker. Yeni projeler için manuel HTML güncellemesi gerekmez.
- **Blog:** Özel bir **Markdown Derleyicisi** (Parser) kullanır. Blog yazıları `.md` dosyaları olarak yazılır ve çalışma zamanında (runtime) HTML'e derlenerek içerik koddan ayrıştırılır.

## 🛠️ Kurulum

Bu projeyi yerel makinenizde çalıştırmak için:

### 1. Depoyu Klonlayın
```bash
git clone [https://github.com/Mustaffa1/mk-portfolio-blog.git](https://github.com/Mustaffa1/mk-portfolio-blog.git)
cd mk-portfolio-blog