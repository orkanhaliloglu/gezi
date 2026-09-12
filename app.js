/**
 * İTALYA SEYAHAT MASTER CHECKLIST — App Logic & State Manager
 */

const INITIAL_DATA = [
  // ==================== 1. MILANO ====================
  // Tarih & Şehir
  {
    id: "m1",
    city: "milano",
    category: "sights",
    title: "Duomo di Milano",
    subtitle: "Milano'nun ünlü Gotik katedrali",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "Milano'nun kalbi. Biletleri önceden online almak sıra beklemeyi önler.",
    mapQuery: "Duomo di Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m2",
    city: "milano",
    category: "sights",
    title: "Duomo Terasları",
    subtitle: "Çatının üzerinde yürüyüş ve panaromik şehir manzarası",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "Katedralin çatısına çıkış. Asansör veya merdiven bileti seçilebilir.",
    mapQuery: "Terrazze del Duomo Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m3",
    city: "milano",
    category: "sights",
    title: "Galleria Vittorio Emanuele II",
    subtitle: "Tarihi lüks alışveriş pasajı",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.7",
    advice: "Duomo'nun hemen yanında. Boğa mozaikinde dönme geleneğini unutmayın!",
    mapQuery: "Galleria Vittorio Emanuele II Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m4",
    city: "milano",
    category: "sights",
    title: "Piazza della Scala",
    subtitle: "La Scala opera binasının bulunduğu meydan",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "Galleria'nın diğer çıkışındaki ünlü tiyatro meydanı.",
    mapQuery: "Piazza della Scala Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m5",
    city: "milano",
    category: "sights",
    title: "Castello Sforzesco",
    subtitle: "Milano'nun tarihi kalesi",
    stars: "⭐⭐",
    isMustSee: true,
    rating: "4.6",
    advice: "Milano Düklerinin heybetli kalesi. Avluları gezmek ücretsizdir.",
    mapQuery: "Castello Sforzesco Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m6",
    city: "milano",
    category: "sights",
    title: "Parco Sempione",
    subtitle: "Kalenin arkasındaki büyük şehir parkı",
    stars: "",
    isMustSee: false,
    rating: "4.5",
    advice: "Kaleden sonra dinlenmek ve Arco della Pace'ye yürümek için ideal.",
    mapQuery: "Parco Sempione Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m7",
    city: "milano",
    category: "sights",
    title: "Arco della Pace",
    subtitle: "Tarihi zafer takı",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "Parkın sonundaki heybetli anıt.",
    mapQuery: "Arco della Pace Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m8",
    city: "milano",
    category: "sights",
    title: "Brera Bölgesi",
    subtitle: "Sanat galerileri, butik ve restoranlarıyla tarihi mahalle",
    stars: "⭐⭐",
    isMustSee: true,
    rating: "4.7",
    advice: "Şık sokak atmosferi, dar taş caddeler.",
    mapQuery: "Brera District Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m9",
    city: "milano",
    category: "sights",
    title: "Navigli Kanalları",
    subtitle: "Kanallar, barlar ve renkli akşam restoranları",
    stars: "⭐⭐",
    isMustSee: true,
    rating: "4.6",
    advice: "Akşam aperitivo ve yürüyüş için en popüler kanal bölgesi.",
    mapQuery: "Navigli Milano",
    checked: false,
    userNotes: ""
  },

  // Müzeler
  {
    id: "m10",
    city: "milano",
    category: "museums",
    title: "Son Akşam Yemeği – Leonardo da Vinci",
    subtitle: "Santa Maria delle Grazie kilisesindeki dünyaca ünlü fresk",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "⚠️ ÖNCEDEN REZERVASYON ŞART! Biletler 2-3 ay önceden biter.",
    mapQuery: "Santa Maria delle Grazie Milano Last Supper",
    checked: false,
    userNotes: ""
  },
  {
    id: "m11",
    city: "milano",
    category: "museums",
    title: "Pinacoteca di Brera",
    subtitle: "Önemli İtalyan klasik sanat eserleri",
    stars: "⭐⭐",
    isMustSee: false,
    rating: "4.7",
    advice: "Rönesans tablosu severler için eşsiz koleksiyon.",
    mapQuery: "Pinacoteca di Brera Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m12",
    city: "milano",
    category: "museums",
    title: "Museo del Novecento",
    subtitle: "Modern sanat müzesi",
    stars: "",
    isMustSee: false,
    rating: "4.5",
    advice: "Duomo manzaralı 20. yüzyıl modern sanat eserleri.",
    mapQuery: "Museo del Novecento Milano",
    checked: false,
    userNotes: ""
  },

  // Alışveriş
  {
    id: "m13",
    city: "milano",
    category: "shopping",
    title: "Quadrilatero della Moda",
    subtitle: "Dünyaca ünlü lüks moda dörtgeni",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "Milano moda dünyasının merkezi.",
    mapQuery: "Quadrilatero della Moda Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m14",
    city: "milano",
    category: "shopping",
    title: "Via Montenapoleone",
    subtitle: "Milano'nun 1 numaralı lüks mağazalar caddesi",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "Gucci, Prada, Dior, Louis Vuitton vitrinleri.",
    mapQuery: "Via Montenapoleone Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m15",
    city: "milano",
    category: "shopping",
    title: "Via della Spiga",
    subtitle: "Piyasalara kapalı lüks butikler caddesi",
    stars: "⭐⭐",
    isMustSee: false,
    rating: "4.7",
    advice: "Sadece yaya trafiğine açık şık alışveriş sokağı.",
    mapQuery: "Via della Spiga Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m16",
    city: "milano",
    category: "shopping",
    title: "Via Sant'Andrea",
    subtitle: "Lüks butikler ve tasarımcı mağazaları",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "Montenapoleone paralelindeki prestijli cadde.",
    mapQuery: "Via Sant'Andrea Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m17",
    city: "milano",
    category: "shopping",
    title: "Corso Venezia",
    subtitle: "Görkemli binalar ve markalar",
    stars: "",
    isMustSee: false,
    rating: "4.5",
    advice: "Parka uzanan geniş cadde.",
    mapQuery: "Corso Venezia Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m18",
    city: "milano",
    category: "shopping",
    title: "Corso Buenos Aires",
    subtitle: "Daha ulaşılabilir alışveriş caddesi (350+ mağaza)",
    stars: "⭐⭐",
    isMustSee: false,
    rating: "4.5",
    advice: "Avrupa'nın en uzun alışveriş caddelerinden biri.",
    mapQuery: "Corso Buenos Aires Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m19",
    city: "milano",
    category: "shopping",
    title: "Corso Vittorio Emanuele II",
    subtitle: "Duomo yakınındaki popüler cadde",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "High-street moda markaları.",
    mapQuery: "Corso Vittorio Emanuele II Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m20",
    city: "milano",
    category: "shopping",
    title: "Rinascente Milano",
    subtitle: "Duomo'nun yanında büyük premium department store",
    stars: "⭐⭐",
    isMustSee: true,
    rating: "4.6",
    advice: "7 katlı lüks alışveriş ve teras restoran alanı.",
    mapQuery: "Rinascente Milano Piazza Duomo",
    checked: false,
    userNotes: ""
  },

  // Outlets (Milano Çevresi)
  {
    id: "m21",
    city: "milano",
    category: "outlets",
    title: "🥇 Serravalle Designer Outlet",
    subtitle: "200+ lüks mağaza, büyük outlet village (Puan: 9.5/10)",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.4",
    phone: "0143 609000",
    advice: "🏆 Milano çevresindeki 1 NUMARA. ~1 saat mesafede. Tam gün ayırmaya değer.",
    mapQuery: "Serravalle Designer Outlet",
    checked: false,
    userNotes: ""
  },
  {
    id: "m22",
    city: "milano",
    category: "outlets",
    title: "🥈 Fidenza Village",
    subtitle: "120+ butik (Armani, BOSS, D&G, Furla, Coach) (Puan: 8.5/10)",
    stars: "⭐⭐⭐⭐",
    isMustSee: false,
    rating: "4.4",
    advice: "Milano-Bologna arasında. Yıl boyu %70'e varan indirimler.",
    mapQuery: "Fidenza Village",
    checked: false,
    userNotes: ""
  },
  {
    id: "m23",
    city: "milano",
    category: "outlets",
    title: "🥉 Scalo Milano Outlet & More",
    subtitle: "Milano'ya çok yakın pratik outlet (Puan: 8.5/10)",
    stars: "⭐⭐⭐⭐",
    isMustSee: false,
    rating: "4.3",
    phone: "02 9047 0350",
    advice: "Çok zaman kaybetmeden pratik alışveriş için ideal.",
    mapQuery: "Scalo Milano Outlet",
    checked: false,
    userNotes: ""
  },
  {
    id: "m24",
    city: "milano",
    category: "outlets",
    title: "Vicolungo The Style Outlets",
    subtitle: "Milano–Torino yönünde geniş outlet (Puan: 7.5/10)",
    stars: "⭐⭐⭐",
    isMustSee: false,
    rating: "4.3",
    advice: "Spor ve günlük markalar ağırlıklı.",
    mapQuery: "Vicolungo The Style Outlets",
    checked: false,
    userNotes: ""
  },

  // Yemek
  {
    id: "m25",
    city: "milano",
    category: "food",
    title: "Risotto alla Milanese",
    subtitle: "Safranlı Milano risottosu",
    stars: "⭐",
    isMustSee: true,
    rating: "5.0",
    advice: "Klasik altın sarısı Milano risottosu.",
    mapQuery: "Risotto alla Milanese Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m26",
    city: "milano",
    category: "food",
    title: "Cotoletta alla Milanese",
    subtitle: "Milano usulü dana eti (Şnitzel)",
    stars: "⭐",
    isMustSee: true,
    rating: "5.0",
    advice: "Geleneksel kemikli dana şnitzel.",
    mapQuery: "Cotoletta alla Milanese Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m27",
    city: "milano",
    category: "food",
    title: "Ossobuco",
    subtitle: "Dana incik ve sebzeli soslu geleneksel yemek",
    stars: "",
    isMustSee: false,
    rating: "4.8",
    advice: "Genelde Risotto alla Milanese ile birlikte servis edilir.",
    mapQuery: "Ossobuco Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m28",
    city: "milano",
    category: "food",
    title: "Panzerotto",
    subtitle: "Luini'de peynirli/domatesli kızarmış hamur",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "Duomo yakınındaki Luini en meşhur yerdir.",
    mapQuery: "Luini Panzerotti Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m29",
    city: "milano",
    category: "food",
    title: "Aperitivo",
    subtitle: "İçecek + Açık büfe / Atıştırmalıklar",
    stars: "⭐",
    isMustSee: true,
    rating: "4.9",
    advice: "Navigli kanallarında saat 18:00 sonrası harikadır.",
    mapQuery: "Navigli Aperitivo Milano",
    checked: false,
    userNotes: ""
  },
  {
    id: "m30",
    city: "milano",
    category: "food",
    title: "Espresso & İtalyan Gelatosu",
    subtitle: "Tarihi kafelerde kahve ve dondurma molası",
    stars: "",
    isMustSee: false,
    rating: "4.9",
    advice: "Bar tezgahında (al banco) içilen espresso dikey gelenektir.",
    mapQuery: "Gelateria Milano",
    checked: false,
    userNotes: ""
  },

  // ==================== 2. FLORANSA ====================
  // Tarih & Şehir
  {
    id: "f1",
    city: "floransa",
    category: "sights",
    title: "Duomo – Santa Maria del Fiore",
    subtitle: "Floransa'nın heybetli Gotik katedrali",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "Dış cephe yeşil-pembe mermer kaplamasıyla muazzamdır.",
    mapQuery: "Cattedrale di Santa Maria del Fiore Firenze",
    checked: false,
    userNotes: ""
  },
  {
    id: "f2",
    city: "floransa",
    category: "sights",
    title: "Brunelleschi Kubbesi",
    subtitle: "Duomo'nun efsanevi kubbesi",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.9",
    advice: "⚠️ 463 basamak tırmanış için zamanlı bilet şarttır!",
    mapQuery: "Brunelleschi Dome Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f3",
    city: "floransa",
    category: "sights",
    title: "Giotto Çan Kulesi",
    subtitle: "Katedralin yanındaki çan kulesi",
    stars: "⭐⭐",
    isMustSee: false,
    rating: "4.7",
    advice: "Kubbeye harika bir bakış açısı sunar.",
    mapQuery: "Giotto's Campanile Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f4",
    city: "floransa",
    category: "sights",
    title: "Baptistery (Vaftizhane)",
    subtitle: "Cennet Kapıları bronz rölyefleriyle ünlü",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "Duomo meydanının en eski yapısı.",
    mapQuery: "Florence Baptistery",
    checked: false,
    userNotes: ""
  },
  {
    id: "f5",
    city: "floransa",
    category: "sights",
    title: "Piazza della Signoria",
    subtitle: "Açık hava heykel müzesi gibi tarihi meydan",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "Loggia dei Lanzi ve Neptün Çeşmesi burada.",
    mapQuery: "Piazza della Signoria Firenze",
    checked: false,
    userNotes: ""
  },
  {
    id: "f6",
    city: "floransa",
    category: "sights",
    title: "Palazzo Vecchio",
    subtitle: "Floransa belediye sarayı ve kulesi",
    stars: "⭐⭐",
    isMustSee: true,
    rating: "4.7",
    advice: "Meydandaki heybetli kale-saray.",
    mapQuery: "Palazzo Vecchio Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f7",
    city: "floransa",
    category: "sights",
    title: "Ponte Vecchio",
    subtitle: "Tarihi kuyumcular köprü pasajı",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.7",
    advice: "Arno Nehri üzerindeki 2. Dünya Savaşından kurtulan tek köprü.",
    mapQuery: "Ponte Vecchio Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f8",
    city: "floransa",
    category: "sights",
    title: "Santa Croce Bazilikası",
    subtitle: "Michelangelo, Galileo ve Machiavelli'nin anıt mezarları",
    stars: "⭐⭐",
    isMustSee: false,
    rating: "4.7",
    advice: "İtalyan dahilerinin yattığı bazilika.",
    mapQuery: "Basilica of Santa Croce Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f9",
    city: "floransa",
    category: "sights",
    title: "Santa Maria Novella",
    subtitle: "Tren istasyonunun karşısındaki tarihi kilise ve meydan",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "Gotik ve Rönesans mimarisi harmanı.",
    mapQuery: "Santa Maria Novella Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f10",
    city: "floransa",
    category: "sights",
    title: "Piazzale Michelangelo",
    subtitle: "Tüm Floransa'yı gören muazzam tepelik gün batımı noktası",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.9",
    advice: "🌅 Gün batımında canlı müzik ve muazzam manzara eşlik eder.",
    mapQuery: "Piazzale Michelangelo Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f11",
    city: "floransa",
    category: "sights",
    title: "Arno Nehri Yürüyüşü",
    subtitle: "Nehir kenarında romantik akşam yürüyüşü",
    stars: "",
    isMustSee: false,
    rating: "4.7",
    advice: "Ponte Santa Trinita üzerinden Ponte Vecchio'yu fotoğraflayın.",
    mapQuery: "Ponte Santa Trinita Florence",
    checked: false,
    userNotes: ""
  },

  // Müzeler
  {
    id: "f12",
    city: "floransa",
    category: "museums",
    title: "Uffizi Gallery",
    subtitle: "Botticelli, Da Vinci, Michelangelo, Raphael, Caravaggio",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "⚠️ Rönesans'ın en önemli koleksiyonu. Önceden rezervasyon şart!",
    mapQuery: "Uffizi Gallery Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f13",
    city: "floransa",
    category: "museums",
    title: "Accademia Gallery",
    subtitle: "Michelangelo'nun Orijinal David Heykeli",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "⚠️ David heykelinin heybeti nefes keser. Bilet şart!",
    mapQuery: "Galleria dell'Accademia Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f14",
    city: "floransa",
    category: "museums",
    title: "Palazzo Pitti",
    subtitle: "Medici sarayı galerileri",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "Köprünün diğer tarafındaki görkemli Medici ikametgahı.",
    mapQuery: "Palazzo Pitti Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f15",
    city: "floransa",
    category: "museums",
    title: "Boboli Gardens",
    subtitle: "Tarihi saray bahçeleri",
    stars: "",
    isMustSee: false,
    rating: "4.5",
    advice: "Doğa ve heykel harmanı büyük bahçe.",
    mapQuery: "Boboli Gardens Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f16",
    city: "floransa",
    category: "museums",
    title: "Bargello Müzesi",
    subtitle: "Heykel müzesi (Donatello'nun David'i)",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "Heykel sanatı meraklıları için harika.",
    mapQuery: "Bargello National Museum Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f17",
    city: "floransa",
    category: "museums",
    title: "Medici Chapels (Medici Şapelleri)",
    subtitle: "Medici ailesinin muazzam türbe ve şapelleri",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "San Lorenzo kompleksinde.",
    mapQuery: "Medici Chapels Florence",
    checked: false,
    userNotes: ""
  },

  // Alışveriş
  {
    id: "f18",
    city: "floransa",
    category: "shopping",
    title: "Via de' Tornabuoni",
    subtitle: "Floransa'nın lüks markalar caddesi",
    stars: "⭐",
    isMustSee: true,
    rating: "4.7",
    advice: "Gucci ve Salvatore Ferragamo'nun doğduğu şehirde lüks vitrinler.",
    mapQuery: "Via de' Tornabuoni Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f19",
    city: "floransa",
    category: "shopping",
    title: "Via Roma & Via Calzaiuoli",
    subtitle: "Duomo ve Signoria arasındaki ana alışveriş caddeleri",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "Popüler giyim ve ayakkabı markaları.",
    mapQuery: "Via dei Calzaiuoli Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f20",
    city: "floransa",
    category: "shopping",
    title: "San Lorenzo Market & Mercato Centrale",
    subtitle: "Deri ürünleri pazarı ve üst kat gurme yemek alanı",
    stars: "⭐",
    isMustSee: true,
    rating: "4.6",
    advice: "Deri ceket, çanta ve hediyelik alışverişi.",
    mapQuery: "Mercato Centrale Firenze",
    checked: false,
    userNotes: ""
  },
  {
    id: "f21",
    city: "floransa",
    category: "shopping",
    title: "İtalyan Deri Ürünleri Mağazaları",
    subtitle: "Floransa'nın meşhur el yapımı deri imalathaneleri",
    stars: "",
    isMustSee: false,
    rating: "4.7",
    advice: "Santa Croce çevresindeki deri okulu ve imalathaneler.",
    mapQuery: "Scuola del Cuoio Florence",
    checked: false,
    userNotes: ""
  },

  // Outlets (Floransa)
  {
    id: "f22",
    city: "floransa",
    category: "outlets",
    title: "🥇 The Mall Firenze",
    subtitle: "Exclusive Luxury Outlet (Gucci, Prada, Armani, Ferragamo, Valentino) (Puan: 9.5/10)",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.2",
    phone: "055 865 7775",
    advice: "🏆 Floransa için 1 NUMARA KESİN TAVSİYE! Açılış: 10:00–19:00.",
    mapQuery: "The Mall Firenze Outlet",
    checked: false,
    userNotes: ""
  },
  {
    id: "f23",
    city: "floransa",
    category: "outlets",
    title: "🥈 Barberino Designer Outlet",
    subtitle: "100+ marka (Spor, günlük, premium markalar) (Puan: 8.0/10)",
    stars: "⭐⭐⭐⭐",
    isMustSee: false,
    rating: "4.4",
    phone: "055 842161",
    advice: "Mugello bölgesinde geniş outlet village atmosferi.",
    mapQuery: "Barberino Designer Outlet",
    checked: false,
    userNotes: ""
  },

  // Yemek
  {
    id: "f24",
    city: "floransa",
    category: "food",
    title: "Bistecca alla Fiorentina",
    subtitle: "Toskana usulü dev ızgara T-Bone biftek",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "5.0",
    advice: "🥩 Floransa'da mutlaka denenmesi gereken 1 numaralı lezzet.",
    mapQuery: "Bistecca alla Fiorentina Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f25",
    city: "floransa",
    category: "food",
    title: "Ribollita",
    subtitle: "Geleneksel Toskana sebze ve ekmek çorbası",
    stars: "⭐⭐",
    isMustSee: false,
    rating: "4.7",
    advice: "Doyurucu ve samimi Toskana ev yemeği lezzeti.",
    mapQuery: "Ribollita Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f26",
    city: "floransa",
    category: "food",
    title: "Pappa al pomodoro",
    subtitle: "Domatesli ve fesleğenli ekmek çorbası",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "Zeytinyağlı geleneksel lezzet.",
    mapQuery: "Pappa al pomodoro Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f27",
    city: "floransa",
    category: "food",
    title: "Lampredotto Sandviç",
    subtitle: "Cesaret edenler için sokak lezzeti sakatat sandviç",
    stars: "",
    isMustSee: false,
    rating: "4.5",
    advice: "Floransa sokak kültürünün vazgeçilmezidir.",
    mapQuery: "Lampredotto Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f28",
    city: "floransa",
    category: "food",
    title: "Toskana Şarabı (Chianti Classico / Brunello)",
    subtitle: "Bölgenin dünyaca ünlü kırmızı şarapları",
    stars: "⭐",
    isMustSee: true,
    rating: "4.9",
    advice: "Bistecca yemeğinin yanına Chianti çok yakışır.",
    mapQuery: "Wine bar Florence",
    checked: false,
    userNotes: ""
  },
  {
    id: "f29",
    city: "floransa",
    category: "food",
    title: "Gelato & Cantucci + Vin Santo",
    subtitle: "Geleneksel tatlı ve bademli kurabiye tatlı şarap ikilisi",
    stars: "",
    isMustSee: false,
    rating: "4.8",
    advice: "Cantucci kurabiyesi tatlı şaraba batırılarak yenir.",
    mapQuery: "Cantucci Vin Santo Florence",
    checked: false,
    userNotes: ""
  },

  // ==================== 3. ROMA ====================
  // Tarih & Şehir
  {
    id: "r1",
    city: "roma",
    category: "sights",
    title: "Colosseum (Kolezyum)",
    subtitle: "Roma'nın simgesi 2000 yıllık dev amfitiyatro",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "⚠️ BİLET ÖNCEDEN KESİNLİKLE ALINMALI! Kapıda bilet bulamazsınız.",
    mapQuery: "Colosseum Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r2",
    city: "roma",
    category: "sights",
    title: "Roman Forum",
    subtitle: "Antik Roma'nın ticari, dini ve siyasi merkezi",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "Kolezyum biletiyle aynı gün girilebilir.",
    mapQuery: "Roman Forum Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r3",
    city: "roma",
    category: "sights",
    title: "Palatine Hill",
    subtitle: "Roma imparatorlarının saraylarının bulunduğu tepe",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "Forum ile iç içedir, manzarası muazzamdır.",
    mapQuery: "Palatine Hill Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r4",
    city: "roma",
    category: "sights",
    title: "Pantheon",
    subtitle: "Antik Roma'nın kusursuz kubbeli tapınağı",
    stars: "⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "Dünyanın en büyük desteksiz beton kubbesi.",
    mapQuery: "Pantheon Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r5",
    city: "roma",
    category: "sights",
    title: "Piazza Venezia & Altare della Patria",
    subtitle: "Heybetli Venedik meydanı ve Vittorio Emanuele anıtı",
    stars: "⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.7",
    advice: "Anıtın üst terasına çıkarak panoramik Roma manzarası izlenebilir.",
    mapQuery: "Altare della Patria Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r6",
    city: "roma",
    category: "sights",
    title: "Capitoline Hill & Circus Maximus",
    subtitle: "Kapitol Tepesi ve antik araba yarışları hipodrom alanı",
    stars: "⭐⭐⭐⭐",
    isMustSee: false,
    rating: "4.7",
    advice: "Michelangelo tasarımı meydan ve antik hipodrom.",
    mapQuery: "Capitoline Hill Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r7",
    city: "roma",
    category: "sights",
    title: "Trevi Fountain (Aşk Çeşmesi)",
    subtitle: "Roma'nın dünyaca ünlü barok çeşmesi",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "💡 Kalabalıktan kaçınmak için sabah 07:30 veya gece geç saatte gidin. Para atmayı unutmayın!",
    mapQuery: "Trevi Fountain Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r8",
    city: "roma",
    category: "sights",
    title: "Piazza Navona",
    subtitle: "Bernini çeşmeleriyle ünlü Barok meydan",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.7",
    advice: "Meydandaki sokak sanatçıları ve kafeler çok canlıdır.",
    mapQuery: "Piazza Navona Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r9",
    city: "roma",
    category: "sights",
    title: "Spanish Steps (İspanyol Merdivenleri)",
    subtitle: "Piazza di Spagna merdivenleri",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.6",
    advice: "Alışveriş caddesi Via Condotti'nin hemen karşısı.",
    mapQuery: "Spanish Steps Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r10",
    city: "roma",
    category: "sights",
    title: "Piazza del Popolo & Campo de' Fiori",
    subtitle: "Halk Meydanı & gündüz pazarı / akşam hareketli meydan",
    stars: "⭐⭐⭐",
    isMustSee: false,
    rating: "4.6",
    advice: "Campo de' Fiori'de taze meyve ve şarküteri pazarı kurulur.",
    mapQuery: "Campo de' Fiori Rome",
    checked: false,
    userNotes: ""
  },

  // Vatikan
  {
    id: "r11",
    city: "roma",
    category: "museums",
    title: "Vatican Museums",
    subtitle: "Dünyanın en büyük ve zengin müze kompleksi",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.8",
    advice: "⚠️ Biletler haftalar öncesinden tükenir! Mutlaka önceden alın.",
    mapQuery: "Vatican Museums Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r12",
    city: "roma",
    category: "museums",
    title: "Sistine Chapel (Sistina Şapeli)",
    subtitle: "Michelangelo'nun Kıyamet Günü ve Adem'in Yaratılışı tavan freskleri",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.9",
    advice: "Vatikan müze biletinin içerisindedir.",
    mapQuery: "Sistine Chapel Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r13",
    city: "roma",
    category: "sights",
    title: "St. Peter's Basilica (San Pietro)",
    subtitle: "Hristiyanlığın en görkemli ana bazilikası ve kubbesi",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.9",
    advice: "Bazilikaya giriş ücretsizdir. Kubbeye tırmanış biletlidir.",
    mapQuery: "St. Peter's Basilica Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r14",
    city: "roma",
    category: "sights",
    title: "St. Peter's Square & Castel Sant'Angelo",
    subtitle: "Vatikan Meydanı ve Kutsal Melek Kalesi",
    stars: "⭐⭐⭐⭐",
    isMustSee: false,
    rating: "4.7",
    advice: "Melekler Köprüsü'nden nehir ve kale manzarası.",
    mapQuery: "Castel Sant'Angelo Rome",
    checked: false,
    userNotes: ""
  },

  // Müzeler
  {
    id: "r15",
    city: "roma",
    category: "museums",
    title: "Capitoline Museums",
    subtitle: "Antik Roma heykelleri ve bronz dişi kurt heykeli müzesi",
    stars: "⭐⭐⭐⭐",
    isMustSee: false,
    rating: "4.7",
    advice: "Dünyanın en eski halka açık müzesi.",
    mapQuery: "Capitoline Museums Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r16",
    city: "roma",
    category: "museums",
    title: "Galleria Borghese",
    subtitle: "Bernini ve Caravaggio heykelleri",
    stars: "⭐⭐⭐⭐",
    isMustSee: false,
    rating: "4.8",
    advice: "Zamanlı bilet şarttır, günde sınırlı ziyaretçi alınır.",
    mapQuery: "Galleria Borghese Rome",
    checked: false,
    userNotes: ""
  },

  // Alışveriş
  {
    id: "r17",
    city: "roma",
    category: "shopping",
    title: "Via Condotti",
    subtitle: "Roma'nın 1 numaralı lüks caddesi",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.7",
    advice: "İspanyol merdivenlerinin tam karşısında yer alır.",
    mapQuery: "Via Condotti Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r18",
    city: "roma",
    category: "shopping",
    title: "Via Borgognona & Via Frattina",
    subtitle: "Şık lüks butikler ve ayakkabı mağazaları",
    stars: "",
    isMustSee: false,
    rating: "4.6",
    advice: "Via Condotti paralelindeki sakin sokaklar.",
    mapQuery: "Via Borgognona Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r19",
    city: "roma",
    category: "shopping",
    title: "Via del Corso",
    subtitle: "Roma'nın ana uzun alışveriş caddesi",
    stars: "⭐⭐",
    isMustSee: true,
    rating: "4.6",
    advice: "Piazza del Popolo'dan Piazza Venezia'ya uzanır.",
    mapQuery: "Via del Corso Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r20",
    city: "roma",
    category: "shopping",
    title: "Galleria Alberto Sordi",
    subtitle: "Tarihi ve şık alışveriş PASAJI / AVM",
    stars: "⭐⭐",
    isMustSee: false,
    rating: "4.3",
    phone: "06 6919 0769",
    advice: "Via del Corso üzerinde tarihi mimari.",
    mapQuery: "Galleria Alberto Sordi Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r21",
    city: "roma",
    category: "shopping",
    title: "Porta di Roma AVM",
    subtitle: "Roma'nın en büyük modern alışveriş merkezi",
    stars: "⭐⭐",
    isMustSee: false,
    rating: "4.4",
    phone: "06 8707 0275",
    advice: "220+ mağaza.",
    mapQuery: "Shopping Mall Porta di Roma",
    checked: false,
    userNotes: ""
  },

  // Outlet (Roma)
  {
    id: "r22",
    city: "roma",
    category: "outlets",
    title: "Castel Romano Designer Outlet",
    subtitle: "146 mağaza (Armani, BOSS, Burberry, D&G, Ferragamo) (Puan: 9.0/10)",
    stars: "⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.4",
    phone: "06 505 0050",
    advice: "🏆 Roma'dan günübirlik meşhur outlet. ~35 dk mesafede.",
    mapQuery: "Castel Romano Designer Outlet",
    checked: false,
    userNotes: ""
  },

  // Yemek
  {
    id: "r23",
    city: "roma",
    category: "food",
    title: "Carbonara",
    subtitle: "Guanciale, yumurta sarısı & Pecorino peynirli orijinal makarna",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "5.0",
    advice: " Roma'nın 1 numaralı makarna efsanesi.",
    mapQuery: "Best Carbonara Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r24",
    city: "roma",
    category: "food",
    title: "Cacio e Pepe",
    subtitle: "Karabiber ve Pecorino Romano peynirli makarna",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "5.0",
    advice: "Sadeliğin zirve lezzeti.",
    mapQuery: "Best Cacio e Pepe Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r25",
    city: "roma",
    category: "food",
    title: "Amatriciana",
    subtitle: "Guanciale, domates sosu ve peynirli Roma makarnası",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.9",
    advice: "Nefis domatesli Roma klasiği.",
    mapQuery: "Best Amatriciana Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r26",
    city: "roma",
    category: "food",
    title: "Saltimbocca alla Romana",
    subtitle: "Prosciutto ve adaçayı ile pişirilmiş dana eti",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: false,
    rating: "4.8",
    advice: "Ağızda eriyen Roma et yemeği.",
    mapQuery: "Saltimbocca alla Romana Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r27",
    city: "roma",
    category: "food",
    title: "Supplì",
    subtitle: "İçi erimiş mozzarella peynirli çıtır pirinç kroket",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: false,
    rating: "4.8",
    advice: "Sokak lezzeti aparatif.",
    mapQuery: "Best Suppli Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r28",
    city: "roma",
    category: "food",
    title: "Roman Pizza (Pizza al Taglio)",
    subtitle: "İnce, kıtır tepsi Roma pizzası",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.9",
    advice: "Bonci Pizzarium veya sokak pizzacıları harikadır.",
    mapQuery: "Bonci Pizzarium Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r29",
    city: "roma",
    category: "food",
    title: "Gelato & Tiramisu",
    subtitle: "Giolitti / Frigidarium dondurması & Pompi tiramisusu",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: true,
    rating: "4.9",
    advice: "Pompi'de çilekli veya klasik tiramisu deneyin.",
    mapQuery: "Pompi Tiramisu Rome",
    checked: false,
    userNotes: ""
  },
  {
    id: "r30",
    city: "roma",
    category: "food",
    title: "Trastevere Akşam Yemeği & Yürüyüşü",
    subtitle: "Akşam yemeği, şarap ve tarihi Roma yürüyüşü",
    stars: "⭐⭐⭐",
    isMustSee: true,
    rating: "4.9",
    advice: "🌃 Roma'da akşam yemeği için tartışmasız en keyifli tarihi bölge.",
    mapQuery: "Trastevere Rome",
    checked: false,
    userNotes: ""
  },

  // ==================== 4. BONUS OUTLET KARŞILAŞTIRMA & VENEDİK ====================
  {
    id: "o1",
    city: "roma",
    category: "outlets",
    title: "Noventa di Piave Designer Outlet (Venedik)",
    subtitle: "158 lüks mağaza (Venedik yakını alternatif) (Puan: 9.0/10)",
    stars: "⭐⭐⭐⭐⭐",
    isMustSee: false,
    rating: "4.5",
    advice: "🔵 Eğer rotaya Venedik dahil edilirse 1 numaralı outlet alternatifi.",
    mapQuery: "Noventa di Piave Designer Outlet",
    checked: false,
    userNotes: ""
  }
];

// State variables
let items = [];
let activeCity = "all";
let activeCategory = "all";
let activeStatus = "all";
let searchQuery = "";
let currentModalItemId = null;

// DOM Elements
const itemsContainer = document.getElementById("itemsContainer");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const progressText = document.getElementById("progressText");
const progressPercentage = document.getElementById("progressPercentage");
const progressBarFill = document.getElementById("progressBarFill");
const cityBanner = document.getElementById("cityBanner");
const bannerTitle = document.getElementById("bannerTitle");
const bannerDuration = document.getElementById("bannerDuration");
const bannerDesc = document.getElementById("bannerDesc");

// Stats elements
const statMilano = document.getElementById("statMilano");
const statFloransa = document.getElementById("statFloransa");
const statRoma = document.getElementById("statRoma");

// City Banners Data
const CITY_INFO = {
  milano: {
    title: "Milano 🇮🇹",
    duration: "2 gece / 1 tam + 1 yarım gün",
    desc: "Moda ve tasarımın başkenti. Duomo, Galleria ve Brera merkezde yan yana verimli gezilebilir."
  },
  floransa: {
    title: "Floransa ⚜️",
    duration: "2 gece önerilir",
    desc: "Rönesans'ın beşiği. Uffizi, Accademia ve Ponte Vecchio ile müze ve açık hava cenneti."
  },
  roma: {
    title: "Roma 🏛️",
    duration: "3 gece (Çok rahat gezi için)",
    desc: "Tarihin kalbi. Kolezyum, Vatikan ve Trastevere akşamları unutulmaz anılar sunar."
  },
  mustsee: {
    title: "⭐ MUTLAKA Görülmesi Gereken Öncelikli Liste",
    duration: "Seyahatinizin Temel Önemli Noktaları",
    desc: "Telefonunuzda en hızlı takip edebileceğiniz öncelikli simge yapılar ve lezzetler."
  }
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  setupEventListeners();
  render();
  registerServiceWorker();
});

// Load state from LocalStorage or seed data
function loadData() {
  const saved = localStorage.getItem("italy_checklist_data_v2");
  if (saved) {
    try {
      items = JSON.parse(saved);
    } catch (e) {
      console.error("Storage load error:", e);
      items = [...INITIAL_DATA];
    }
  } else {
    items = [...INITIAL_DATA];
  }

  const savedTheme = localStorage.getItem("italy_checklist_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

// Save state to LocalStorage
function saveData() {
  localStorage.setItem("italy_checklist_data_v2", JSON.stringify(items));
  updateStats();
}

// Setup Event Listeners
function setupEventListeners() {
  document.getElementById("themeToggleBtn").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("italy_checklist_theme", next);
    updateThemeIcon(next);
  });

  // City Tabs
  document.querySelectorAll(".city-tabs .tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".city-tabs .tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCity = btn.dataset.city;
      updateBottomNavActive(activeCity);
      render();
    });
  });

  // Bottom Navigation
  document.querySelectorAll(".bottom-nav .bottom-nav-item").forEach(btn => {
    if (btn.id === "openAddModalBottom") {
      btn.addEventListener("click", () => openAddModal());
      return;
    }
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll(".bottom-nav .bottom-nav-item").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      if (tab === "mustsee") {
        activeCity = "mustsee";
        activeCategory = "all";
      } else if (tab === "food") {
        activeCategory = "food";
      } else {
        activeCity = "all";
        activeCategory = "all";
      }

      document.querySelectorAll(".city-tabs .tab-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.city === activeCity);
      });
      document.querySelectorAll(".pill-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.category === activeCategory);
      });

      render();
    });
  });

  // Category Pills
  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      render();
    });
  });

  // Status Filters
  document.querySelectorAll(".status-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".status-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeStatus = btn.dataset.status;
      render();
    });
  });

  // Search input
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.classList.toggle("hidden", searchQuery.length === 0);
    render();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.classList.add("hidden");
    render();
  });

  document.getElementById("resetFiltersBtn").addEventListener("click", () => {
    activeCity = "all";
    activeCategory = "all";
    activeStatus = "all";
    searchQuery = "";
    searchInput.value = "";
    clearSearchBtn.classList.add("hidden");

    document.querySelectorAll(".city-tabs .tab-btn").forEach(b => b.classList.toggle("active", b.dataset.city === "all"));
    document.querySelectorAll(".pill-btn").forEach(b => b.classList.toggle("active", b.dataset.category === "all"));
    document.querySelectorAll(".status-btn").forEach(b => b.classList.toggle("active", b.dataset.status === "all"));

    render();
  });

  // Modals & Actions
  document.getElementById("addCustomBtn").addEventListener("click", () => openAddModal());
  document.getElementById("closeAddModal").addEventListener("click", () => closeAddModal());
  document.getElementById("cancelAddModal").addEventListener("click", () => closeAddModal());

  document.getElementById("addCustomForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const city = document.getElementById("newCity").value;
    const category = document.getElementById("newCategory").value;
    const title = document.getElementById("newTitle").value.trim();
    const subtitle = document.getElementById("newSubtitle").value.trim();
    const isMustSee = document.getElementById("newIsMustSee").checked;

    if (!title) return;

    const newItem = {
      id: "custom_" + Date.now(),
      city,
      category,
      title,
      subtitle: subtitle || "Kullanıcı tarafından eklendi",
      stars: "⭐",
      isMustSee,
      rating: "5.0",
      advice: "Özel eklenen mekan/yer.",
      mapQuery: `${title} ${city}`,
      checked: false,
      userNotes: ""
    };

    items.unshift(newItem);
    saveData();
    closeAddModal();
    document.getElementById("addCustomForm").reset();
    render();
  });

  document.getElementById("closeDetailModal").addEventListener("click", () => closeDetailModal());
  document.getElementById("saveNoteBtn").addEventListener("click", () => {
    if (!currentModalItemId) return;
    const noteVal = document.getElementById("modalUserNote").value.trim();
    const target = items.find(i => i.id === currentModalItemId);
    if (target) {
      target.userNotes = noteVal;
      saveData();
      render();
      closeDetailModal();
    }
  });

  document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("menuModal").classList.remove("hidden");
  });
  document.getElementById("closeMenuModal").addEventListener("click", () => {
    document.getElementById("menuModal").classList.add("hidden");
  });

  document.getElementById("exportDataBtn").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `italya_master_checklist_${new Date().toISOString().slice(0,10)}.json`);
    dlAnchorElem.click();
  });

  document.getElementById("importFileInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        if (Array.isArray(importedData)) {
          items = importedData;
          saveData();
          render();
          alert("Verileriniz başarıyla yüklendi!");
          document.getElementById("menuModal").classList.add("hidden");
        }
      } catch (err) {
        alert("Geçersiz yedek dosyası formatı.");
      }
    };
    reader.readAsText(file);
  });

  document.getElementById("resetAllBtn").addEventListener("click", () => {
    if (confirm("Tüm işaretlemeleri ve eklediğiniz notları sıfırlamak istediğinize emin misiniz?")) {
      items = [...INITIAL_DATA];
      saveData();
      render();
      document.getElementById("menuModal").classList.add("hidden");
    }
  });
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggleBtn");
  if (theme === "dark") {
    btn.innerHTML = '<i class="fa-solid fa-sun text-gold"></i>';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

function updateBottomNavActive(city) {
  document.querySelectorAll(".bottom-nav .bottom-nav-item").forEach(b => {
    if (b.dataset.tab === city) {
      b.classList.add("active");
    } else if (city === "all" && b.dataset.tab === "all") {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
}

// Render Logic
function render() {
  updateStats();
  renderCityBanner();

  let filtered = items.filter(item => {
    if (activeCity === "mustsee") {
      if (!item.isMustSee) return false;
    } else if (activeCity !== "all" && item.city !== activeCity) {
      return false;
    }

    if (activeCategory !== "all" && item.category !== activeCategory) {
      return false;
    }

    if (activeStatus === "todo" && item.checked) return false;
    if (activeStatus === "done" && !item.checked) return false;

    if (searchQuery) {
      const titleMatch = item.title.toLowerCase().includes(searchQuery);
      const subMatch = item.subtitle.toLowerCase().includes(searchQuery);
      const noteMatch = (item.userNotes || "").toLowerCase().includes(searchQuery);
      if (!titleMatch && !subMatch && !noteMatch) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    itemsContainer.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  let html = "";

  // Render Outlet comparison table if activeCategory is 'outlets'
  if (activeCategory === "outlets") {
    html += createOutletTableHTML();
  }

  html += filtered.map(item => createCardHTML(item)).join("");

  itemsContainer.innerHTML = html;

  // Attach card click handlers
  filtered.forEach(item => {
    const cardEl = document.getElementById(`card-${item.id}`);
    if (!cardEl) return;

    const checkboxEl = cardEl.querySelector(".custom-checkbox");
    checkboxEl.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCheck(item.id);
    });

    cardEl.querySelector(".item-content").addEventListener("click", () => {
      openDetailModal(item.id);
    });
  });
}

function createCardHTML(item) {
  const cityNames = { milano: "Milano 🇮🇹", floransa: "Floransa ⚜️", roma: "Roma 🏛️" };
  const catIcons = {
    sights: '<i class="fa-solid fa-landmark"></i> Şehir',
    museums: '<i class="fa-solid fa-palette"></i> Müze',
    food: '<i class="fa-solid fa-utensils"></i> Lezzet',
    shopping: '<i class="fa-solid fa-bag-shopping"></i> Alışveriş',
    outlets: '<i class="fa-solid fa-tags"></i> Outlet'
  };

  const isTicketTip = item.advice && (item.advice.includes("bilet") || item.advice.includes("REZERVASYON"));
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery || `${item.title} ${item.city}`)}`;

  return `
    <div class="item-card ${item.checked ? 'checked' : ''}" id="card-${item.id}">
      <button class="custom-checkbox" aria-label="İşaretle">
        <i class="fa-solid fa-check"></i>
      </button>

      <div class="item-content">
        <div class="item-header">
          <span class="item-title">${escapeHTML(item.title)}</span>
          ${item.stars ? `<span class="item-stars">${item.stars}</span>` : ''}
          ${item.isMustSee ? '<span class="badge badge-mustsee"><i class="fa-solid fa-star"></i> Mutlaka</span>' : ''}
          ${activeCity === "all" || activeCity === "mustsee" ? `<span class="badge badge-city">${cityNames[item.city] || ''}</span>` : ''}
        </div>
        
        <div class="item-subtitle">${escapeHTML(item.subtitle)}</div>
        
        <div class="item-meta">
          <span class="item-meta-item">${catIcons[item.category] || ''}</span>
          ${item.rating ? `<span class="item-meta-item text-gold"><i class="fa-solid fa-star"></i> ${item.rating}</span>` : ''}
          ${isTicketTip ? `<span class="item-meta-item ticket-tip"><i class="fa-solid fa-ticket"></i> Bilet Uyarısı</span>` : ''}
          <a href="${mapsUrl}" target="_blank" rel="noopener" class="direct-map-link" onclick="event.stopPropagation();">
            <i class="fa-solid fa-location-dot"></i> Google Maps
          </a>
        </div>

        ${item.userNotes ? `<div class="user-note-preview"><i class="fa-regular fa-note-sticky"></i> Not: ${escapeHTML(item.userNotes)}</div>` : ''}
      </div>

      <div class="item-actions">
        <button class="action-icon-btn" onclick="openDetailModal('${item.id}')" title="Detay & Not">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  `;
}

function createOutletTableHTML() {
  return `
    <div class="outlet-table-wrapper">
      <div class="outlet-table-header">
        <i class="fa-solid fa-tags text-gold"></i>
        <h3>🏆 Outlet Karşılaştırma & Değerlendirme Tablosu</h3>
      </div>
      <div class="table-responsive">
        <table class="outlet-table">
          <thead>
            <tr>
              <th>Outlet</th>
              <th>Şehir / Konum</th>
              <th>Tarz / Markalar</th>
              <th>Puan</th>
              <th>Rotadaki Durum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>⭐ Serravalle</strong></td>
              <td>Milano (~1 st)</td>
              <td>200+ Mağaza (Büyük Lüks)</td>
              <td><span class="badge-score">9.5 / 10</span></td>
              <td><span class="badge-status in-route">✅ Rotada</span></td>
            </tr>
            <tr>
              <td><strong>⭐ The Mall Firenze</strong></td>
              <td>Floransa (~40 dk)</td>
              <td>Exclusive Luxury (Gucci, Prada, Armani)</td>
              <td><span class="badge-score">9.5 / 10</span></td>
              <td><span class="badge-status in-route">✅ Rotada</span></td>
            </tr>
            <tr>
              <td><strong>Castel Romano</strong></td>
              <td>Roma (~35 dk)</td>
              <td>146 Mağaza (Lüks & Premium)</td>
              <td><span class="badge-score">9.0 / 10</span></td>
              <td><span class="badge-status in-route">✅ Rotada</span></td>
            </tr>
            <tr>
              <td><strong>Scalo Milano</strong></td>
              <td>Milano (Yakın)</td>
              <td>Pratik & Çeşitli Markalar</td>
              <td><span class="badge-score">8.5 / 10</span></td>
              <td><span class="badge-status fast-route">🟢 Pratik</span></td>
            </tr>
            <tr>
              <td><strong>Fidenza Village</strong></td>
              <td>Milano/Bologna</td>
              <td>120+ Butik (Premium)</td>
              <td><span class="badge-score">8.5 / 10</span></td>
              <td><span class="badge-status alt-route">🟡 Alternatif</span></td>
            </tr>
            <tr>
              <td><strong>Barberino</strong></td>
              <td>Floransa (Kuzey)</td>
              <td>100+ Mağaza (Geniş Spor/Moda)</td>
              <td><span class="badge-score">8.0 / 10</span></td>
              <td><span class="badge-status alt-route">🟡 Alternatif</span></td>
            </tr>
            <tr>
              <td><strong>Noventa di Piave</strong></td>
              <td>Venedik</td>
              <td>158 Mağaza (Büyük Lüks)</td>
              <td><span class="badge-score">9.0 / 10</span></td>
              <td><span class="badge-status venice-route">🔵 Venedik</span></td>
            </tr>
            <tr>
              <td><strong>Vicolungo</strong></td>
              <td>Milano/Torino</td>
              <td>Geniş Spor/Giyim</td>
              <td><span class="badge-score">7.5 / 10</span></td>
              <td><span class="badge-status alt-route">🟡 Alternatif</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function toggleCheck(id) {
  const item = items.find(i => i.id === id);
  if (item) {
    item.checked = !item.checked;
    saveData();
    render();
  }
}

function updateStats() {
  const total = items.length;
  const done = items.filter(i => i.checked).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  progressText.textContent = `${done} / ${total}`;
  progressPercentage.textContent = `${pct}%`;
  progressBarFill.style.width = `${pct}%`;

  const milanoTotal = items.filter(i => i.city === "milano").length;
  const milanoDone = items.filter(i => i.city === "milano" && i.checked).length;

  const floTotal = items.filter(i => i.city === "floransa").length;
  const floDone = items.filter(i => i.city === "floransa" && i.checked).length;

  const romaTotal = items.filter(i => i.city === "roma").length;
  const romaDone = items.filter(i => i.city === "roma" && i.checked).length;

  statMilano.querySelector("strong").textContent = `${milanoDone}/${milanoTotal}`;
  statFloransa.querySelector("strong").textContent = `${floDone}/${floTotal}`;
  statRoma.querySelector("strong").textContent = `${romaDone}/${romaTotal}`;
}

function renderCityBanner() {
  if (CITY_INFO[activeCity]) {
    const info = CITY_INFO[activeCity];
    bannerTitle.textContent = info.title;
    bannerDuration.innerHTML = `<i class="fa-regular fa-clock"></i> ${info.duration}`;
    bannerDesc.textContent = info.desc;
    cityBanner.classList.remove("hidden");
  } else {
    cityBanner.classList.add("hidden");
  }
}

// Modal Handlers
function openDetailModal(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;

  currentModalItemId = id;

  const cityNames = { milano: "Milano 🇮🇹", floransa: "Floransa ⚜️", roma: "Roma 🏛️" };
  const catNames = {
    sights: "Tarih & Şehir",
    museums: "Müze & Sanat",
    food: "Yeme & İçme",
    shopping: "Alışveriş",
    outlets: "Outlet"
  };

  document.getElementById("modalCityBadge").textContent = cityNames[item.city] || item.city;
  document.getElementById("modalCategoryBadge").textContent = catNames[item.category] || item.category;

  document.getElementById("modalTitle").innerHTML = `${escapeHTML(item.title)} ${item.stars ? `<span class="modal-stars">${item.stars}</span>` : ''}`;
  document.getElementById("modalSubtitle").textContent = item.subtitle;

  const infoBox = document.getElementById("modalInfoBox");
  let infoHTML = '';

  if (item.advice) {
    infoHTML += `<div><strong><i class="fa-solid fa-lightbulb text-gold"></i> Tavsiye & İpucu:</strong> ${escapeHTML(item.advice)}</div>`;
  }
  if (item.phone) {
    infoHTML += `<div><strong><i class="fa-solid fa-phone text-gold"></i> İletişim:</strong> <a href="tel:${item.phone}" style="color:var(--accent-gold);">${item.phone}</a></div>`;
  }
  if (item.rating) {
    infoHTML += `<div><strong><i class="fa-solid fa-star text-gold"></i> Değerlendirme:</strong> ${item.rating} / 5.0</div>`;
  }

  infoBox.innerHTML = infoHTML || '<div>Detaylı bilgi bulunmuyor.</div>';

  document.getElementById("modalUserNote").value = item.userNotes || "";

  const mapBtn = document.getElementById("modalMapBtn");
  const query = encodeURIComponent(item.mapQuery || `${item.title} ${item.city}`);
  mapBtn.href = `https://www.google.com/maps/search/?api=1&query=${query}`;

  document.getElementById("detailModal").classList.remove("hidden");
}

function closeDetailModal() {
  document.getElementById("detailModal").classList.add("hidden");
  currentModalItemId = null;
}

function openAddModal() {
  document.getElementById("addModal").classList.remove("hidden");
}

function closeAddModal() {
  document.getElementById("addModal").classList.add("hidden");
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW Registered:', reg.scope))
      .catch(err => console.log('SW Registration failed:', err));
  }
}

window.openDetailModal = openDetailModal;
