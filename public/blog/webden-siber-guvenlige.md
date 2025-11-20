Bir bilgisayar mühendisi olarak, kod yazmak ve çalışan sistemler inşa etmek her zaman tutkum oldu. Vue.js ve Tailwind CSS gibi modern araçlarla arayüzler geliştirmek, somut ürünler ortaya koymak harika bir duygu. Ancak, inşa ettiğiniz bir yapının aynı zamanda 'güvenli' olmasını sağlamak, bu işin tamamen farklı ve daha derin bir katmanı.
      
## Neden Siber Güvenlik?
      
Yazdığım her kod satırında, "Burası nasıl kötüye kullanılabilir?" diye düşünmeye başladığımı fark ettim. Bir 'feature' (özellik) geliştirmek kadar, o özelliğin 'bug' (hata) veya 'exploit' (zafiyet) haline gelmemesini sağlamak da ilgimi çekiyordu. Siber güvenlik, bir geliştiricinin savunma sanatıdır; bir "builder" (inşa edici) olmaktan "defender" (koruyucu) olmaya geçiştir.
      
## Geliştirici Becerileri Nasıl Aktarılır?
      
Aslında, web geliştirme bilgisi siber güvenlik için mükemmel bir temeldir. Zafiyetleri bulmak için önce sistemin nasıl çalıştığını bilmek gerekir:

* **Kod Okuma:** Bir geliştirici olarak zaten sürekli kod okuyoruz. Bu, 'white-box' (beyaz kutu) testlerinde zafiyetleri bulmak için kritik bir beceridir.
* **API Bilgisi:** REST veya GraphQL API'lerinin nasıl çalıştığını bilmek, API güvenliğini (örn: Kırık Erişim Kontrolü) test etmek için zorunludur.
* **Problem Çözme:** Her iki alan da temelde karmaşık problemleri metodik olarak çözmeye dayanır.

Bu blog, benim bu geçiş sürecimdeki notlarımı, öğrendiğim yeni araçları ve çözdüğüm CTF'leri belgeleyeceğim yer olacak.