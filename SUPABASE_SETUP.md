# Cihazlar arası eşitleme kurulumu

Uygulama şu anda gezi verilerini tarayıcıdaki `localStorage` alanında tutuyor. Cihazlar arası eşitleme için Supabase hesabı, kullanıcı girişi ve hesaba özel veritabanı kaydı kullanılacak. Bu klasör Supabase tarafındaki güvenli tablo kurulumunu içerir.

## 1. Supabase projesi oluşturun

1. [Supxabase](https://supabase.com/) üzerinde oturum açıp yeni bir proje oluşturun.
2. Proje oluşturulunca **Project URL** ile **anon/publishable key** değerlerini alın. Bunlar tarayıcı uygulamasında kullanılabilir; `service_role` anahtarını hiçbir zaman siteye veya depoya koymayın.
3. Supabase **SQL Editor** ekranında `supabase/schema.sql` dosyasının tamamını çalıştırın.

## 2. Giriş yöntemini ayarlayın

Supabase Dashboard > **Authentication > Providers** bölümünde Email girişini etkin bırakın. **Authentication > URL Configuration** altında:

- Site URL: GitHub Pages’te görünen uygulama adresiniz
- Redirect URLs: uygulama adresi ve yerel geliştirme adresi (kullanılıyorsa)

E-posta doğrulaması açık kalabilir. Kullanıcı e-postadaki doğrulama bağlantısını açtıktan sonra aynı hesapla diğer cihazlarda da oturum açar.

## 3. Uygulama yönlendirme adreslerini ekleyin

Supabase Dashboard > **Authentication > URL Configuration** içinde uygulamanın yayımlandığı adresi **Site URL** olarak girin. **Redirect URLs** listesine aynı uygulama adresini de ekleyin. Bu proje için adres `https://gezi-tawny.vercel.app/` şeklindedir. Yerel geliştirme adresini de (ör. `http://localhost:8000/**`) ayrıca ekleyebilirsiniz.

Bu depoda Supabase Project URL ve publishable key `supabase/config.js` içinde yapılandırıldı. Publishable key tarayıcıda kullanılmak üzere tasarlanmıştır; RLS ve giriş kuralları tablo erişimini korur.

Uygulamadaki bulut simgesinden e-posta ile giriş bağlantısı isteyin. Mevcut tarayıcı verisi ilk girişte hesaba aktarılır; sonraki değişiklikler giriş yapılmış hesaba yazılır. Aynı e-posta ile diğer cihazlarda giriş yaptığınızda bulut verisi açılır. E-posta doğrulama açıksa giriş bağlantısını aynı cihazda açın.

## Güvenlik

- `supabase/schema.sql`, Row Level Security (RLS) açar ve her satırı `auth.uid()` ile kullanıcıya bağlar.
- `anon` rolüne tablo erişimi verilmez. İstemcide yalnızca anon/publishable key kullanılır.
- `service_role` anahtarı istemci koduna eklenmemelidir.
- Bilet/rezervasyon kodları kişisel veri sayılabileceğinden hesabınıza güçlü ve size özel bir parola belirleyin.
