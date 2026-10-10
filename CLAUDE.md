# Yunus Emre Yavaş — Kişisel Site

Yayın adresi: https://yunusemreyavas0.github.io (GitHub Pages, `main` dalı, depo kökü).

## Yapı

- `index.html` — tüm içerik (tek sayfa)
- `style.css` — stiller; renkler ve fontlar `:root` altındaki değişkenlerde
- `script.js` — tema düğmesi ve TR/EN dil değişimi (İngilizce metinler burada)
- `_config.yml` — sitede yayınlanmayacak dosyalar (bu dosya ve README dahil)
- `README.md` — depo sayfasında görünen kısa tanıtım ve site bağlantısı

## Kurallar

- Yalnızca saf HTML, CSS ve JS. Framework, derleme adımı, npm paketi ekleme.
- Font: yalnızca Apple sistem fontu (`-apple-system, ...`), kod ve etiketlerde sistem monospace fontu. Harici font yükleme.
- Harici kaynak (CDN, analitik, izleme kodu) ekleme.
- Site iki dilli: varsayılan Türkçe, sağ üstte TR/EN düğmesi. Türkçe metin `index.html`'de `data-i18n` anahtarıyla durur, İngilizcesi `script.js` içindeki `en` sözlüğünde. Metin ekleyip değiştirirken ikisini birlikte güncelle.
- Metinler birinci tekil şahısla yazılır ("geliştiriyorum").
- Tasarım sade ve elle yazılmış gibi kalmalı: kart, gölge, hap şeklinde etiket, gradyan, emoji, sayaç kutusu, kaydırma animasyonu kullanma. Düzen: solda monospace bölüm etiketi, sağda içerik, aralarda ince çizgi.
- Kod bloğu kullanma.
- Tema düğmesi emoji değil, yarım dolu daire SVG ikonudur.
- Renkleri doğrudan yazma, CSS değişkenlerini kullan. Her değişiklik açık ve koyu temada, ayrıca mobil genişlikte düzgün görünmeli.
- Sekme ikonu baykuş emojisidir.
- İletişim bölümünde yalnızca bağlantılar bulunur (E-posta, LinkedIn, GitHub); hepsi yeni sekmede açılır. E-posta bağlantısı `mailto:` değil, Gmail'in yeni ileti sayfasıdır.

## İçerik kaynağı

- Sitedeki bilgiler CV ile aynı olmalı; İngilizce metinler İngilizce CV'deki ifadeleri izler (birinci tekil şahsa çevrilmiş halde). CV'de olmayan bilgi uydurma; emin değilsen sor.
- CV dosyası (PDF veya LaTeX kaynağı) bu depoya asla eklenmez ve siteden indirilebilir olmaz. CV yalnızca içerik için referanstır; kullanıcı güncel halini ayrıca verir.

## Yayınlama

- Değişiklikten sonra commit at ve `git push` yap (kimlik bilgisi macOS Anahtar Zinciri'nde kayıtlı). Push 1-2 dakika içinde siteye yansır.
- Commit'ler yalnızca kullanıcının adıyla atılır; `Co-Authored-By` satırı eklenmez.
- Push kimlik hatası verirse token'ın süresi dolmuştur; kullanıcı yenisini oluşturup kendi terminalinde girer. Token'ı dosyaya, commit'e veya sohbete yazma.
