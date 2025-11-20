OWASP (Open Web Application Security Project), web uygulamalarının güvenliğini artırmayı amaçlayan, kar amacı gütmeyen bir kuruluştur. OWASP Top 10, bu kuruluşun belirlediği en kritik 10 web uygulaması güvenlik açığının bir listesidir. Bir geliştirici olarak bu listeyi bilmek, yazdığımız kodun kalitesini ve güvenliğini doğrudan etkiler.
      
## A01: Kırık Erişim Kontrolü (Broken Access Control)
      
Bu zafiyet, kullanıcıların yetkileri dışındaki verilere veya işlevlere erişebilmesi durumunda ortaya çıkar. Örneğin, bir kullanıcının URL'yi değiştirerek (örn: `/user/12` yerine `/user/13` yazarak) başka bir kullanıcının bilgilerini görebilmesi. Geliştiricilerin, her istekte kullanıcının 'yetkisini' (authorization) sunucu tarafında kontrol etmesi gerekir.
      
## A02: Kriptografik Hatalar (Cryptographic Failures)
      
Parolalar, kredi kartı bilgileri gibi hassas verilerin düz metin (plain text) olarak saklanması veya zayıf, güncelliğini yitirmiş şifreleme algoritmalarıyla korunmasıdır. Veriler her zaman 'at rest' (veritabanında) ve 'in transit' (ağ üzerinde) şifrelenmelidir.
      
```js
// KÖTÜ ÖRNEK (Zayıf ve eski hashleme)
const hashedPassword = md5(user.password);

// İYİ ÖRNEK (Güçlü, tuzlanmış (salted) hashleme)
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(user.password, salt);
