import React, { useState, useEffect, useMemo } from 'react';
import {
  Camera,
  Film,
  Play,
  CheckCircle2,
  XCircle,
  Zap,
  Award,
  Phone,
  ChevronDown,
  ChevronUp,
  Calculator,
  Eye,
  Flame,
  ShieldCheck,
  Check,
  X,
  Layers,
  Tv,
  Aperture,
  Volume2,
  HelpCircle,
  Send,
  Globe
} from 'lucide-react';

// Comprehensive Bilingual Dictionary (RU / RO)
const dict = {
  ru: {
    topBar: {
      rec: "REC ●",
      fps: "4K 60FPS",
      iso: "ISO 400 PORTRA",
      timecode: "00:04:18:12",
      urgency: "⚡ Осталось 3 свободных слота на съёмку на этой неделе!",
      phone: "+373 60 123 456",
      langSwitch: "RO 🇲🇩"
    },
    nav: {
      brand: "VIRALIS",
      subBrand: "ANALOG FILM STUDIO",
      services: "Услуги",
      craft: "Мастерство",
      portfolio: "Портфолио",
      calculator: "Калькулятор ROI",
      pricing: "Тарифы 600 MDL",
      faq: "FAQ",
      cta: "Забронировать 🎬"
    },
    hero: {
      badge: "🎞️ Аналоговая Эстетика + Психология Продаж (System 1)",
      titlePrefix: "Живые вирусные ролики в Молдове",
      titleHighlight: "по 600 MDL / видео",
      subtitle: "Соединяем настоящую человеческую эстетику плёночного кино с жесткими психологическими крючками внимания. Превратите скролл в Reels и TikTok в поток горячих клиентов.",
      priceTag: "600 MDL",
      priceSub: "Фиксированная цена под ключ",
      btnOrder: "🔥 Забронировать съёмку за 600 MDL",
      btnCalc: "🧮 Рассчитать бюджет роликов",
      btnShowreel: "▶ Смотреть Showreel 2026",
      stat1Val: "500+",
      stat1Label: "Отснятых вирусных роликов",
      stat2Val: "10M+",
      stat2Label: "Просмотров в соцсетях",
      stat3Val: "24-48ч",
      stat3Label: "Срок сдачи монтажа",
      stat4Val: "600 MDL",
      stat4Label: "Прозрачная фикс-цена",
      camMode: "Режим Видоискателя:",
      camModeVhs: "VHS Camcorder",
      camModeFilm: "35mm Cinema",
      camModeClean: "Чистый экран"
    },
    lossAversion: {
      badge: "⚠️ Психология Потерь (Даниэль Канеман)",
      title: "Каждый день без видео вы теряете до 30 клиентов в Кишинёве",
      sub: "87% стандартных рекламных видео пролистывают за 1.5 секунды. Без естественной аналоговой подачи и психологического крючка ваш рекламный бюджет сгорает.",
      box1Title: "❌ Обычное унылое видео",
      box1Point1: "Искусственная фальшь и шаблонные тексты",
      box1Point2: "Звук с эхом, пролистывают за 2 секунды",
      box1Point3: "Нулевой выхлоп — деньги выкинуты на ветер",
      box2Title: "✅ Живая плёночная эстетика VIRALIS (600 MDL)",
      box2Point1: "Настоящий человеческий контакт с 1-й секунды",
      box2Point2: "Чистый студийный звук & тёплая цветокоррекция",
      box2Point3: "Высокое удержание и взрывной прирост заявок"
    },
    services: {
      badge: "🎬 Полный цикл производства",
      title: "От вирусной идеи до готового потока клиентов",
      sub: "Всё входит в стоимость 600 MDL за ролик — никаких скрытых нацеток и мелкого шрифта.",
      item1Title: "Выездная 4K Киносъёмка",
      item1Desc: "Съёмка на вашей локации в Кишинёве или по Молдове с профессиональным светом и кинооптикой.",
      item2Title: "Авторские Сценарии & Hooks",
      item2Desc: "Разработка цепляющих завязок, удерживающих внимание зрителя от первой до последней секунды.",
      item3Title: "Аналоговый Монтаж & Грейдинг",
      item3Desc: "Динамичная склейка кадров, кинозёрнышко, тёплые тона и субтитры, адаптированные под мобильный скролл.",
      item4Title: "Чистый Звук & Саунд-Дизайн",
      item4Desc: "Запись голоса на беспроводные петлички Rode/DJI, шумы окружения и трендовая фоновая музыка.",
      item5Title: "Упаковка Аккаунта & Сетка",
      item5Desc: "Оформление шапки профиля, хайлайтсов и обложек Reels для создания стильного внешнего вида бренда.",
      item6Title: "Таргетированная Реклама Meta",
      item6Desc: "Настройка рекламных кампаний в Facebook & Instagram Ads для максимальной конверсии в продажи."
    },
    portfolio: {
      badge: "📼 Избранная плёнка",
      title: "Примеры наших роликов в Молдове",
      sub: "Каждый ролик отснят по нашей аналогово-психологической методике.",
      catAll: "Все работы",
      catGastro: "Рестораны & Кафе",
      catRealty: "Недвижимость",
      catBeauty: "Красота & Здоровье",
      catEcom: "E-Commerce & Магазины",
      catPersonal: "Личный Бренд",
      views: "просмотров",
      growth: "прирост продаж",
      client: "Клиент:",
      playBtn: "Воспроизвести ролик"
    },
    calculator: {
      badge: "🧮 Прозрачный калькулятор",
      title: "Рассчитайте стоимость и выгоду пакета",
      sub: "Выберите количество роликов и опции — получите скидку за объём!",
      sliderLabel: "Количество видеороликов:",
      discountNotice: "🎉 Включена скидка за объём:",
      addonTitle: "Дополнительные опции для максимального старта:",
      addon1: "Полная упаковка профиля Instagram/TikTok (+500 MDL)",
      addon2: "Запуск таргета Meta Ads + пиксель (+800 MDL)",
      addon3: "Премиальный макро-грейдинг 4K HDR (+400 MDL)",
      totalLabel: "Итоговая стоимость:",
      savedLabel: "Ваша экономия:",
      perVideoLabel: "Цена за 1 ролик:",
      estViews: "Прогнозируемые просмотры:",
      bookCalcBtn: "🔥 Заказать пакет по спеццене"
    },
    pricing: {
      badge: "🏷️ Прозрачные тарифы",
      title: "Выбирайте удобный формат работы",
      sub: "Без подвохов: ровно 600 MDL за 1 ролик в базовом заказе, ещё дешевле в пакетах!",
      plan1Title: "Тестовый Старт",
      plan1Price: "600 MDL",
      plan1Unit: "/ 1 ролик",
      plan1Desc: "Идеально для проверки гипотезы или разовой акции",
      plan1F1: "1 готовый вирусный ролик 4K",
      plan1F2: "Авторский сценарий и hook",
      plan1F3: "Выездная съёмка до 1 часа",
      plan1F4: "Срок сдачи: 48 часов",
      plan2Title: "Контент-Пак (5 Роликов)",
      plan2Price: "2 700 MDL",
      plan2Unit: "/ 540 MDL ролик",
      plan2Desc: "Самый популярный тариф для стабильного продвижения",
      plan2F1: "5 готовых роликов 4K",
      plan2F2: "Контент-план на 2 недели",
      plan2F3: "Выездная съёмка до 2.5 часов",
      plan2F4: "Скидка 10% (Экономия 300 MDL)",
      plan2Badge: "ХИТ ПРОДАЖ",
      plan3Title: "Доминирование (10 Роликов)",
      plan3Price: "5 100 MDL",
      plan3Unit: "/ 510 MDL ролик",
      plan3Desc: "Полное перекрытие контентом на месяц вперёд",
      plan3F1: "10 готовых роликов 4K",
      plan3F2: "Контент-стратегия на месяц",
      plan3F3: "Полный выездной день съёмок",
      plan3F4: "Скидка 15% (Экономия 900 MDL)",
      selectBtn: "Забронировать пакет"
    },
    guarantee: {
      badge: "🛡️ 100% Гарантия качества",
      title: "Если ролик не понравится — переснимаем за наш счёт",
      sub: "Мы уверены в своём мастерстве и конверсии. Никакого риска для вашего бюджета.",
      g1Title: "Фиксированная сдача 48ч",
      g1Desc: "Если задержим хоть на час — следующий ролик бесплатно.",
      g2Title: "Полная передача исходников",
      g2Desc: "Все RAW плёнки и кадры остаются в вашем распоряжении.",
      g3Title: "Корректировки включены",
      g3Desc: "До 3 кругов правок по монтажу и субтитрам бесплатно."
    },
    faq: {
      badge: "❓ Часто задаваемые вопросы",
      title: "Всё, что вы хотели знать перед съёмкой",
      q1: "Где проходят съёмки?",
      a1: "Мы выезжаем на вашу локацию (офис, ресторан, салон, магазин) в Кишинёве и по всей Молдове. Также доступна наша фото/видео студия.",
      q2: "Входит ли актер или ведущий в 600 MDL?",
      a2: "В 600 MDL входит полный технический цикл: выезд оператора, сценарий, свет, микрофоны, монтаж, субтитры. Если нужен приглашенный актер, поможем подобрать из базы.",
      q3: "На каких языках вы делаете видео?",
      a3: "Мы свободно создаём контент на русском и румынском языках (RO/RU), включая дубляж и анимированные субтитры.",
      q4: "Каков срок выполнения заказа?",
      a4: "Готовый монтаж вы получаете через 24-48 часов после завершения съёмки.",
      q5: "Нужно ли мне самому писать сценарий?",
      a5: "Нет! Наш креатор напишет цепляющие сценарии и завязки (hooks) под вашу нишу совершенно бесплатно."
    },
    form: {
      badge: "📩 Начните привлекать клиентов",
      title: "Забронируйте съёмку со скидкой сегодня",
      sub: "Заполните форму или напишите прямо в WhatsApp — ответим за 5 минут!",
      namePlaceholder: "Ваше имя",
      phonePlaceholder: "Телефон (+373 ...)",
      businessPlaceholder: "Ваш бизнес / ниша",
      submitBtn: "🎬 Забронировать съёмку за 600 MDL",
      waBtn: "💬 Написать в WhatsApp",
      successMsg: "🎉 Заявка принята! Мы свяжемся с вами в течение 10 минут."
    },
    footer: {
      brand: "VIRALIS FILM STUDIO",
      tagline: "Качественный видеомаркетинг в Молдове. Аналоговая эстетика & Цифровые продажи.",
      rights: "© 2026 VIRALIS Media Studio. Все права защищены.",
      location: "Кишинёв, Молдова",
      phone: "+373 60 123 456"
    }
  },
  ro: {
    topBar: {
      rec: "REC ●",
      fps: "4K 60FPS",
      iso: "ISO 400 PORTRA",
      timecode: "00:04:18:12",
      urgency: "⚡ Doar 3 locuri libere pentru filmări în această săptămână!",
      phone: "+373 60 123 456",
      langSwitch: "RU 🇷🇺"
    },
    nav: {
      brand: "VIRALIS",
      subBrand: "ANALOG FILM STUDIO",
      services: "Servicii",
      craft: "Măiestrie",
      portfolio: "Portofoliu",
      calculator: "Calcul ROI",
      pricing: "Tarife 600 MDL",
      faq: "FAQ",
      cta: "Rezervă 🎬"
    },
    hero: {
      badge: "🎞️ Estetică Analogică + Psihologia Vânzărilor (System 1)",
      titlePrefix: "Videoclipuri virale autentice în Moldova",
      titleHighlight: "la doar 600 MDL / clip",
      subtitle: "Combinăm estetica caldă a filmului analogic cu cârlige psihologice puternice de atenție. Transformă scroll-ul pe Reels și TikTok într-un flux constant de clienți.",
      priceTag: "600 MDL",
      priceSub: "Preț fix la cheie",
      btnOrder: "🔥 Rezervă filmarea la 600 MDL",
      btnCalc: "🧮 Calculează bugetul",
      btnShowreel: "▶ Vezi Showreel 2026",
      stat1Val: "500+",
      stat1Label: "Clipuri virale realizate",
      stat2Val: "10M+",
      stat2Label: "Vizualizări în social media",
      stat3Val: "24-48h",
      stat3Label: "Timp livrare montaj",
      stat4Val: "600 MDL",
      stat4Label: "Preț fix transparent",
      camMode: "Mod Vizor Camera:",
      camModeVhs: "VHS Camcorder",
      camModeFilm: "35mm Cinema",
      camModeClean: "Ecran Curat"
    },
    lossAversion: {
      badge: "⚠️ Psihologia Pierderilor (Daniel Kahneman)",
      title: "În fiecare zi fără video pierzi până la 30 de cumpărători în Chișinău",
      sub: "87% din reclamele obișnuite sunt trecute cu vederea în 1.5 secunde. Fără o livrare analogică autentică și un cârlig psihologic, bugetul tău de reclame se arde.",
      box1Title: "❌ Reclamă obișnuită și plictisitoare",
      box1Point1: "Falsitate artificială și texte șablonate",
      box1Point2: "Sunet cu ecou, trecute cu vederea în 2 secunde",
      box1Point3: "Zero rezultate — bani aruncați în vânt",
      box2Title: "✅ Estetică analogică VIRALIS (600 MDL)",
      box2Point1: "Contact uman autentic din prima secundă",
      box2Point2: "Sunet studio curat & corecție de culoare caldă",
      box2Point3: "Reținere înaltă și creștere explozivă a cererilor"
    },
    services: {
      badge: "🎬 Producție completă",
      title: "De la ideea virală la un flux constant de clienți",
      sub: "Totul este inclus în prețul de 600 MDL per clip — fără costuri ascunse.",
      item1Title: "Filmare Deplasare 4K Cinema",
      item1Desc: "Filmări la locația ta în Chișinău sau prin Moldova cu lumină și optică cinematografică.",
      item2Title: "Scenarii & Hooks de Autor",
      item2Desc: "Crearea de cârlige captivante care mențin atenția privitorului de la prima secundă.",
      item3Title: "Montaj Analogic & Gracing",
      item3Desc: "Tăieturi dinamice, granulație retro caldă și subtitrări optimizate pentru mobil.",
      item4Title: "Sunet Curat & Sound Design",
      item4Desc: "Înregistrare voce pe lavaliere fără fir Rode/DJI, efecte sonore și muzică de fundal.",
      item5Title: "Ambalare Profil & Grilă Conținut",
      item5Desc: "Design profil Instagram/TikTok, copertine Reels și grilă armonioasă de postări.",
      item6Title: "Reclame Targetate Meta",
      item6Desc: "Setare campanii pe Facebook & Instagram Ads pentru conversie maximă în vânzări."
    },
    portfolio: {
      badge: "📼 Selecție peliculă",
      title: "Exemple din lucrările noastre în Moldova",
      sub: "Fiecare clip este creat după metodologia noastră analogic-psihologică.",
      catAll: "Toate lucrările",
      catGastro: "Restaurante & Cafenele",
      catRealty: "Imobiliare",
      catBeauty: "Frumusețe & Sănătate",
      catEcom: "E-Commerce & Magazine",
      catPersonal: "Brand Personal",
      views: "vizualizări",
      growth: "creștere vânzări",
      client: "Client:",
      playBtn: "Redă clipul"
    },
    calculator: {
      badge: "🧮 Calculator transparent",
      title: "Calculează costul și reducerea pachetului",
      sub: "Alege numărul de clipuri și opțiunile suplimentare — primești reducere de volum!",
      sliderLabel: "Numărul de clipuri video:",
      discountNotice: "🎉 Reducere de volum aplicată:",
      addonTitle: "Opțiuni suplimentare pentru rezultat maxim:",
      addon1: "Ambalare completă profil Instagram/TikTok (+500 MDL)",
      addon2: "Setare reclame Meta Ads + Pixel (+800 MDL)",
      addon3: "Color Grading Premium 4K HDR (+400 MDL)",
      totalLabel: "Preț total:",
      savedLabel: "Economia ta:",
      perVideoLabel: "Preț per 1 clip:",
      estViews: "Vizualizări estimate:",
      bookCalcBtn: "🔥 Comandă pachetul la preț special"
    },
    pricing: {
      badge: "🏷️ Tarife transparente",
      title: "Alege formatul potrivit pentru afacerea ta",
      sub: "Fără trucuri: exact 600 MDL pentru 1 clip în comanda de bază, și mai ieftin în pachete!",
      plan1Title: "Start Test",
      plan1Price: "600 MDL",
      plan1Unit: "/ 1 clip",
      plan1Desc: "Ideal pentru a testa eficiența sau pentru o promoție unică",
      plan1F1: "1 clip viral finalizat 4K",
      plan1F2: "Scenariu de autor și hook",
      plan1F3: "Filmare la locație până la 1 oră",
      plan1F4: "Timp livrare: 48 ore",
      plan2Title: "Pachet Conținut (5 Clipuri)",
      plan2Price: "2 700 MDL",
      plan2Unit: "/ 540 MDL clip",
      plan2Desc: "Cel mai popular tarif pentru promovare constantă",
      plan2F1: "5 clipuri virale finalizate 4K",
      plan2F2: "Plan de conținut pe 2 săptămâni",
      plan2F3: "Filmare la locație până la 2.5 ore",
      plan2F4: "Reducere 10% (Economisești 300 MDL)",
      plan2Badge: "POPULAR",
      plan3Title: "Dominare Brand (10 Clipuri)",
      plan3Price: "5 100 MDL",
      plan3Unit: "/ 510 MDL clip",
      plan3Desc: "Acoperire completă cu conținut pentru o lună întreagă",
      plan3F1: "10 clipuri virale finalizate 4K",
      plan3F2: "Strategie de conținut pe 1 lună",
      plan3F3: "Zilă întreagă de filmare la locație",
      plan3F4: "Reducere 15% (Economisești 900 MDL)",
      selectBtn: "Rezervă pachetul"
    },
    guarantee: {
      badge: "🛡️ Garanție 100% Calitate",
      title: "Dacă nu îți place clipul — refilmăm pe cheltuiala noastră",
      sub: "Suntem siguri de măiestria și conversia noastră. Zero risc pentru bugetul tău.",
      g1Title: "Livrare fixă în 48h",
      g1Desc: "Dacă întârziem chiar și o oră — următorul clip este gratuit.",
      g2Title: "Predare materiale RAW",
      g2Desc: "Toate cadrele brute rămân la dispoziția ta.",
      g3Title: "Modificări incluse",
      g3Desc: "Până la 3 runde de ajustări pentru montaj și subtitrări gratuit."
    },
    faq: {
      badge: "❓ Întrebări frecvente",
      title: "Tot ce vrei să știi înainte de filmare",
      q1: "Unde au loc filmările?",
      a1: "Ne deplasăm la locația ta (birou, restaurant, salon, magazin) în Chișinău și prin toată Moldova. De asemenea avem studio propriu.",
      q2: "Este inclus un actor sau prezentator în 600 MDL?",
      a2: "În 600 MDL este inclus tot ciclul tehnic: deplasare operator, scenariu, lumini, lavaliere, montaj, subtitrări. Dacă ai nevoie de un actor, te ajutăm să alegi din baza noastră.",
      q3: "În ce limbi realizați videoclipurile?",
      a3: "Creăm conținut fluent în română și rusă (RO/RU), inclusiv dublaj și subtitrări animate.",
      q4: "Care este termenul de realizare?",
      a4: "Primești montajul finalizat în 24-48 de ore după încheierea filmării.",
      q5: "Trebuie să scriu eu scenariul?",
      a5: "Nu! Creatorul nostru va scrie scenarii și cârlige (hooks) atractive specifice nișei tale complet gratuit."
    },
    form: {
      badge: "📩 Începe să atrag clienți",
      title: "Rezervă filmarea cu reducere astăzi",
      sub: "Completează formularul sau scrie-ne pe WhatsApp — răspundem în 5 minute!",
      namePlaceholder: "Numele tău",
      phonePlaceholder: "Telefon (+373 ...)",
      businessPlaceholder: "Afacerea / Nișa ta",
      submitBtn: "🎬 Rezervă filmarea la 600 MDL",
      waBtn: "💬 Scrie pe WhatsApp",
      successMsg: "🎉 Cererea a fost trimisă! Te contactăm în maxim 10 minute."
    },
    footer: {
      brand: "VIRALIS FILM STUDIO",
      tagline: "Video marketing de calitate în Moldova. Estetică analogică & Vânzări digitale.",
      rights: "© 2026 VIRALIS Media Studio. Toate drepturile rezervate.",
      location: "Chișinău, Moldova",
      phone: "+373 60 123 456"
    }
  }
};

// Portfolio Mock Data
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: 'gastro',
    title: { ru: "Шоу-кухня в ресторане Chișinău", ro: "Show culinar în restaurant Chișinău" },
    views: "245,000",
    growth: "+320% броней",
    client: "Gastro Pub Lounge",
    gradient: "from-amber-900/60 to-orange-950/80",
    scriptHook: "Зачем они добавляют секретное масло в стейк?"
  },
  {
    id: 2,
    category: 'realty',
    title: { ru: "Обзор пентхауса в Рышкановке", ro: "Prezentare penthouse în Râșcani" },
    views: "182,000",
    growth: "Продано за 4 дня",
    client: "Estate Moldova Group",
    gradient: "from-amber-950/60 to-yellow-950/80",
    scriptHook: "Квартира с террасой, которую скрывали риелторы..."
  },
  {
    id: 3,
    category: 'beauty',
    title: { ru: "Преображение волос в Салоне", ro: "Transformare păr în Salon Beauty" },
    views: "510,000",
    growth: "+140 новых записей",
    client: "Velvet Beauty Studio",
    gradient: "from-orange-950/60 to-red-950/80",
    scriptHook: "Перестаньте испортить волосы этой ошибкой!"
  },
  {
    id: 4,
    category: 'ecom',
    title: { ru: "Распаковка шопинг-дропа одежды", ro: "Unboxing colecție nouă haine" },
    views: "340,000",
    growth: "+410% заказов",
    client: "Urban Fashion Chisinau",
    gradient: "from-stone-900/80 to-amber-950/90",
    scriptHook: "Мы нашли стильную одежду по цене чашки кофе..."
  },
  {
    id: 5,
    category: 'personal',
    title: { ru: "Советы от юриста в Кишинёве", ro: "Sfaturi de la un avocat din Chișinău" },
    views: "195,000",
    growth: "+85 платных консультаций",
    client: "Lawyer Advisory MD",
    gradient: "from-yellow-950/60 to-stone-900/90",
    scriptHook: "Что делать, если вам выписали штраф незаконно?"
  },
  {
    id: 6,
    category: 'gastro',
    title: { ru: "Кофейный ритуал и эстетика утра", ro: "Ritualul cafelei de dimineață" },
    views: "290,000",
    growth: "+210% визитов",
    client: "Artisan Coffee Roasters",
    gradient: "from-orange-900/70 to-amber-900/80",
    scriptHook: "Почему вы больше не сможете пить обычный кофе?"
  }
];

export default function Variant10_AnalogFilmStudio({ lang: propLang = 'ru', setLang: propSetLang }) {
  const [langState, setLangState] = useState(propLang);
  useEffect(() => {
    if (propLang) setLangState(propLang);
  }, [propLang]);
  const lang = propLang || langState;
  const setLang = propSetLang || setLangState;
  const t = dict[lang] || dict['ru'];

  // Viewfinder Mode State: 'vhs' | 'film' | 'clean'
  const [viewMode, setViewMode] = useState('vhs');

  // Interactive Timecode Counter Generator
  const [timeSeconds, setTimeSeconds] = useState(14);
  const [frames, setFrames] = useState(22);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrames((f) => {
        if (f >= 59) {
          setTimeSeconds((s) => s + 1);
          return 0;
        }
        return f + 1;
      });
    }, 1000 / 30);
    return () => clearInterval(timer);
  }, []);

  const formattedTimecode = useMemo(() => {
    const hrs = "00";
    const mins = "04";
    const secs = timeSeconds.toString().padStart(2, '0');
    const frms = frames.toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}:${frms}`;
  }, [timeSeconds, frames]);

  // Portfolio Active Category Filter
  const [activeCategory, setActiveCategory] = useState('all');

  // Video Modal State
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Calculator State
  const [videoCount, setVideoCount] = useState(5);
  const [addonPackaging, setAddonPackaging] = useState(false);
  const [addonTargeting, setAddonTargeting] = useState(false);
  const [addonGrading, setAddonGrading] = useState(false);

  // Price Calculation Logic
  const basePricePerVideo = 600;
  let discountRate = 0;
  if (videoCount >= 20) discountRate = 0.20;
  else if (videoCount >= 10) discountRate = 0.15;
  else if (videoCount >= 5) discountRate = 0.10;

  const rawTotal = videoCount * basePricePerVideo;
  const discountedBase = Math.round(rawTotal * (1 - discountRate));
  const perVideoPrice = Math.round(discountedBase / videoCount);
  const totalSavings = rawTotal - discountedBase;
  const addonsCost = (addonPackaging ? 500 : 0) + (addonTargeting ? 800 : 0) + (addonGrading ? 400 : 0);
  const finalPrice = discountedBase + addonsCost;
  const estViewsNum = (videoCount * 25000).toLocaleString();

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Form State
  const [formData, setFormData] = useState({ name: '', phone: '', business: '' });
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone) return;
    setFormSuccess(true);
  };

  const getWhatsAppLink = (customMsg) => {
    const msg = customMsg || (lang === 'ru'
      ? `Здравствуйте! Хочу заказать ${videoCount} роликов за ${finalPrice} MDL.`
      : `Bună ziua! Doresc să comand ${videoCount} clipuri la prețul de ${finalPrice} MDL.`);
    return `https://wa.me/37360123456?text=${encodeURIComponent(msg)}`;
  };

  // Filtered Portfolio
  const filteredPortfolio = useMemo(() => {
    if (activeCategory === 'all') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#0d0c0a] text-amber-50 font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden relative">
      
      {/* RETRO FILM GRAIN & NOISE OVERLAY */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* VHS SCANLINES (WHEN VHS MODE IS ACTIVE) */}
      {viewMode === 'vhs' && (
        <div className="fixed inset-0 pointer-events-none z-40 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
      )}

      {/* TOP ANALOG STATUS BAR */}
      <div className="bg-[#171410] border-b border-amber-900/40 text-xs py-2 px-4 sticky top-0 z-40 flex flex-wrap items-center justify-between gap-2 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-4 text-amber-400 font-mono tracking-wider">
          <span className="flex items-center gap-1.5 font-bold text-red-500 animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block shadow-[0_0_8px_#ef4444]" />
            {t.topBar.rec}
          </span>
          <span className="hidden sm:inline-block text-amber-200/60">|</span>
          <span className="hidden sm:inline-block">{t.topBar.fps}</span>
          <span className="hidden md:inline-block text-amber-200/60">|</span>
          <span className="hidden md:inline-block">{t.topBar.iso}</span>
          <span className="text-amber-300 font-semibold bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/40">
            TC {formattedTimecode}
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-amber-200/90 font-medium">
          <span>{t.topBar.urgency}</span>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <a href={`tel:${t.topBar.phone}`} className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>{t.topBar.phone}</span>
          </a>
          <button
            onClick={() => setLang(lang === 'ru' ? 'ro' : 'ru')}
            className="bg-amber-900/40 hover:bg-amber-800/60 text-amber-200 px-2.5 py-1 rounded border border-amber-700/50 flex items-center gap-1 font-bold transition-all"
          >
            <Globe className="w-3.5 h-3.5" />
            {t.topBar.langSwitch}
          </button>
        </div>
      </div>

      {/* HEADER / NAVIGATION BAR */}
      <header className="border-b border-amber-950/80 bg-[#120e0b]/90 backdrop-blur-lg sticky top-[37px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* BRAND LOGO WITH CAMERA LENS */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-orange-700 p-0.5 flex items-center justify-center shadow-lg shadow-amber-900/30">
              <div className="w-full h-full bg-[#120e0b] rounded-[7px] flex items-center justify-center">
                <Aperture className="w-5 h-5 text-amber-400 animate-[spin_12s_linear_infinite]" />
              </div>
            </div>
            <div>
              <div className="font-extrabold text-lg tracking-wider text-amber-100 flex items-center gap-1.5">
                {t.nav.brand}
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-amber-500/20 text-amber-400 rounded border border-amber-500/30">
                  600 MDL
                </span>
              </div>
              <div className="text-[10px] font-mono tracking-widest text-amber-400/70">
                {t.nav.subBrand}
              </div>
            </div>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-amber-200/80">
            <a href="#services" className="hover:text-amber-400 transition-colors">{t.nav.services}</a>
            <a href="#loss-aversion" className="hover:text-amber-400 transition-colors">{t.nav.craft}</a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors">{t.nav.portfolio}</a>
            <a href="#calculator" className="hover:text-amber-400 transition-colors">{t.nav.calculator}</a>
            <a href="#pricing" className="hover:text-amber-400 transition-colors">{t.nav.pricing}</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">{t.nav.faq}</a>
          </nav>

          {/* VIEWFINDER MODE SELECTOR & CTA */}
          <div className="flex items-center gap-3">
            {/* Viewfinder mode toggle */}
            <div className="hidden sm:flex items-center bg-stone-900/90 border border-amber-900/50 rounded-lg p-1 text-xs">
              <button
                onClick={() => setViewMode('vhs')}
                className={`px-2.5 py-1 rounded transition-all font-mono ${viewMode === 'vhs' ? 'bg-amber-600 text-black font-bold' : 'text-amber-300/70 hover:text-amber-200'}`}
              >
                VHS
              </button>
              <button
                onClick={() => setViewMode('film')}
                className={`px-2.5 py-1 rounded transition-all font-mono ${viewMode === 'film' ? 'bg-amber-600 text-black font-bold' : 'text-amber-300/70 hover:text-amber-200'}`}
              >
                35mm
              </button>
              <button
                onClick={() => setViewMode('clean')}
                className={`px-2.5 py-1 rounded transition-all font-mono ${viewMode === 'clean' ? 'bg-amber-600 text-black font-bold' : 'text-amber-300/70 hover:text-amber-200'}`}
              >
                Clean
              </button>
            </div>

            <a
              href="#booking"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-black font-bold text-sm px-4 py-2 rounded-lg shadow-lg shadow-amber-900/40 transition-all flex items-center gap-1.5"
            >
              <span>{t.nav.cta}</span>
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION WITH ANALOG VIEWFINDER FRAME */}
      <section className="relative py-16 lg:py-24 px-4 overflow-hidden">
        
        {/* Background Warm Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-900/20 via-orange-950/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          
          {/* ANALOG VIEWFINDER OVERLAY CORNERS */}
          {viewMode !== 'clean' && (
            <div className="absolute inset-0 pointer-events-none border border-amber-500/20 rounded-2xl p-4 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start text-amber-500/40 font-mono text-[10px]">
                <div className="border-t-2 border-l-2 border-amber-500/60 w-8 h-8 rounded-tl-lg" />
                <div className="text-center bg-black/60 px-2 py-0.5 rounded border border-amber-500/30">
                  SHUTTER 1/50 • ISO 400 • f/1.4
                </div>
                <div className="border-t-2 border-r-2 border-amber-500/60 w-8 h-8 rounded-tr-lg" />
              </div>

              {/* Crosshair Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-30">
                <div className="w-8 h-[1px] bg-amber-400" />
                <div className="h-8 w-[1px] bg-amber-400 absolute" />
                <div className="w-16 h-16 border border-amber-400/50 rounded-full absolute" />
              </div>

              <div className="flex justify-between items-end text-amber-500/40 font-mono text-[10px]">
                <div className="border-b-2 border-l-2 border-amber-500/60 w-8 h-8 rounded-bl-lg" />
                <div className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded border border-amber-500/30">
                  <span>AUDIO L</span>
                  <div className="w-12 h-1.5 bg-amber-950 rounded overflow-hidden flex">
                    <div className="w-3/4 h-full bg-amber-500 animate-pulse" />
                  </div>
                  <span>R</span>
                  <div className="w-12 h-1.5 bg-amber-950 rounded overflow-hidden flex">
                    <div className="w-2/3 h-full bg-amber-500 animate-pulse" />
                  </div>
                </div>
                <div className="border-b-2 border-r-2 border-amber-500/60 w-8 h-8 rounded-br-lg" />
              </div>
            </div>
          )}

          {/* MAIN HERO CONTENT BOX */}
          <div className="bg-[#14110d]/80 border border-amber-900/40 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl relative z-20 backdrop-blur-sm">
            
            {/* RAW AUTHENTICITY BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-300 font-mono text-xs font-semibold mb-6">
              <Film className="w-4 h-4 text-amber-400 animate-spin" />
              <span>{t.hero.badge}</span>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-amber-50 tracking-tight leading-tight mb-6">
              {t.hero.titlePrefix}{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent underline decoration-amber-500/40 decoration-wavy">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-base sm:text-lg md:text-xl text-amber-200/80 max-w-3xl leading-relaxed mb-8">
              {t.hero.subtitle}
            </p>

            {/* PRICE HIGHLIGHT CARD */}
            <div className="bg-gradient-to-r from-amber-950/90 via-orange-950/50 to-stone-950/90 border border-amber-700/40 rounded-xl p-4 sm:p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                  <Film className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-amber-400 font-mono font-bold">
                    {t.hero.priceSub}
                  </div>
                  <div className="text-3xl font-black text-amber-100 font-mono">
                    {t.hero.priceTag}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="#booking"
                  className="flex-1 sm:flex-none text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold px-6 py-3 rounded-lg shadow-lg shadow-amber-900/50 transition-all font-mono text-sm"
                >
                  {t.hero.btnOrder}
                </a>
                <a
                  href="#calculator"
                  className="flex-1 sm:flex-none text-center bg-amber-950/60 hover:bg-amber-900/60 text-amber-200 border border-amber-700/50 font-bold px-5 py-3 rounded-lg transition-all font-mono text-sm"
                >
                  {t.hero.btnCalc}
                </a>
              </div>
            </div>

            {/* HERO STATS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-amber-950">
              <div className="bg-amber-950/30 p-3 rounded-lg border border-amber-900/30">
                <div className="text-2xl font-black text-amber-400 font-mono">{t.hero.stat1Val}</div>
                <div className="text-xs text-amber-200/70">{t.hero.stat1Label}</div>
              </div>
              <div className="bg-amber-950/30 p-3 rounded-lg border border-amber-900/30">
                <div className="text-2xl font-black text-amber-400 font-mono">{t.hero.stat2Val}</div>
                <div className="text-xs text-amber-200/70">{t.hero.stat2Label}</div>
              </div>
              <div className="bg-amber-950/30 p-3 rounded-lg border border-amber-900/30">
                <div className="text-2xl font-black text-amber-400 font-mono">{t.hero.stat3Val}</div>
                <div className="text-xs text-amber-200/70">{t.hero.stat3Label}</div>
              </div>
              <div className="bg-amber-950/30 p-3 rounded-lg border border-amber-900/30">
                <div className="text-2xl font-black text-amber-400 font-mono">{t.hero.stat4Val}</div>
                <div className="text-xs text-amber-200/70">{t.hero.stat4Label}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BEHAVIORAL PSYCHOLOGY & LOSS AVERSION SECTION (VARIANT 3 COMBINATION) */}
      <section id="loss-aversion" className="py-16 bg-[#110e0b] border-y border-amber-950/80 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 font-mono text-xs mb-3">
              <Zap className="w-3.5 h-3.5 text-red-500" />
              <span>{t.lossAversion.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 mb-4">
              {t.lossAversion.title}
            </h2>
            <p className="text-amber-200/70 text-sm sm:text-base">
              {t.lossAversion.sub}
            </p>
          </div>

          {/* CONTRAST BOXES */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* POOR VIDEO APPROACH */}
            <div className="bg-[#17120e] border border-red-900/30 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-bl-full pointer-events-none" />
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <span>{t.lossAversion.box1Title}</span>
              </h3>
              <ul className="space-y-3 font-mono text-sm text-amber-200/80">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{t.lossAversion.box1Point1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{t.lossAversion.box1Point2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{t.lossAversion.box1Point3}</span>
                </li>
              </ul>
            </div>

            {/* VIRALIS ANALOG APPROACH */}
            <div className="bg-gradient-to-br from-[#1a140e] to-[#24180d] border border-amber-600/50 rounded-xl p-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none" />
              <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                <span>{t.lossAversion.box2Title}</span>
              </h3>
              <ul className="space-y-3 font-mono text-sm text-amber-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{t.lossAversion.box2Point1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{t.lossAversion.box2Point2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{t.lossAversion.box2Point3}</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 lg:py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/40 text-amber-400 font-mono text-xs mb-3">
            <Film className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-100 mb-4">
            {t.services.title}
          </h2>
          <p className="text-amber-200/70 text-base">
            {t.services.sub}
          </p>
        </div>

        {/* 6 PRODUCTION SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-[#15110d] border border-amber-900/40 rounded-xl p-6 hover:border-amber-600/60 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-amber-950 border border-amber-700/40 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-100 mb-2">{t.services.item1Title}</h3>
            <p className="text-sm text-amber-200/70 leading-relaxed">{t.services.item1Desc}</p>
          </div>

          <div className="bg-[#15110d] border border-amber-900/40 rounded-xl p-6 hover:border-amber-600/60 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-amber-950 border border-amber-700/40 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-100 mb-2">{t.services.item2Title}</h3>
            <p className="text-sm text-amber-200/70 leading-relaxed">{t.services.item2Desc}</p>
          </div>

          <div className="bg-[#15110d] border border-amber-900/40 rounded-xl p-6 hover:border-amber-600/60 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-amber-950 border border-amber-700/40 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
              <Film className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-100 mb-2">{t.services.item3Title}</h3>
            <p className="text-sm text-amber-200/70 leading-relaxed">{t.services.item3Desc}</p>
          </div>

          <div className="bg-[#15110d] border border-amber-900/40 rounded-xl p-6 hover:border-amber-600/60 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-amber-950 border border-amber-700/40 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-100 mb-2">{t.services.item4Title}</h3>
            <p className="text-sm text-amber-200/70 leading-relaxed">{t.services.item4Desc}</p>
          </div>

          <div className="bg-[#15110d] border border-amber-900/40 rounded-xl p-6 hover:border-amber-600/60 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-amber-950 border border-amber-700/40 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-100 mb-2">{t.services.item5Title}</h3>
            <p className="text-sm text-amber-200/70 leading-relaxed">{t.services.item5Desc}</p>
          </div>

          <div className="bg-[#15110d] border border-amber-900/40 rounded-xl p-6 hover:border-amber-600/60 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-amber-950 border border-amber-700/40 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-100 mb-2">{t.services.item6Title}</h3>
            <p className="text-sm text-amber-200/70 leading-relaxed">{t.services.item6Desc}</p>
          </div>

        </div>
      </section>

      {/* PORTFOLIO SHOWCASE SECTION */}
      <section id="portfolio" className="py-16 bg-[#110e0b] border-y border-amber-950/80 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/40 text-amber-400 font-mono text-xs mb-3">
              <Tv className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.portfolio.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-100 mb-4">
              {t.portfolio.title}
            </h2>
            <p className="text-amber-200/70 text-sm sm:text-base">
              {t.portfolio.sub}
            </p>
          </div>

          {/* CATEGORY FILTER BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { key: 'all', label: t.portfolio.catAll },
              { key: 'gastro', label: t.portfolio.catGastro },
              { key: 'realty', label: t.portfolio.catRealty },
              { key: 'beauty', label: t.portfolio.catBeauty },
              { key: 'ecom', label: t.portfolio.catEcom },
              { key: 'personal', label: t.portfolio.catPersonal }
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all ${
                  activeCategory === cat.key
                    ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-950'
                    : 'bg-amber-950/40 text-amber-300/80 hover:bg-amber-900/50 border border-amber-900/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* PORTFOLIO GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                className="bg-[#18130e] border border-amber-900/40 rounded-xl overflow-hidden cursor-pointer group hover:border-amber-500/60 transition-all shadow-lg flex flex-col"
              >
                {/* Simulated Film Reel Thumbnail Header */}
                <div className={`h-48 bg-gradient-to-br ${item.gradient} p-4 relative flex flex-col justify-between`}>
                  {/* Sprocket Hole Accents Top & Bottom */}
                  <div className="flex justify-between border-b border-amber-500/20 pb-2">
                    <span className="font-mono text-[10px] text-amber-400/80">REEL #{item.id}04</span>
                    <span className="font-mono text-[10px] text-red-400 font-bold animate-pulse">● REC</span>
                  </div>

                  <div className="my-auto text-center">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/60 flex items-center justify-center mx-auto text-amber-300 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-amber-300" />
                    </div>
                  </div>

                  <div className="bg-black/60 backdrop-blur-sm p-2 rounded border border-amber-900/40 text-xs font-mono text-amber-200">
                    "{item.scriptHook}"
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-amber-100 text-base mb-2 group-hover:text-amber-400 transition-colors">
                      {item.title[lang]}
                    </h3>
                    <div className="text-xs text-amber-300/70 font-mono mb-4">
                      {t.portfolio.client} {item.client}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-amber-950 text-xs font-mono">
                    <span className="text-amber-400 flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {item.views} {t.portfolio.views}
                    </span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      {item.growth}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section id="calculator" className="py-16 lg:py-24 px-4 max-w-5xl mx-auto">
        <div className="bg-[#14100c] border border-amber-800/50 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/40 text-amber-400 font-mono text-xs mb-3">
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.calculator.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 mb-2">
              {t.calculator.title}
            </h2>
            <p className="text-amber-200/70 text-sm">
              {t.calculator.sub}
            </p>
          </div>

          {/* SLIDER CONTROLLER */}
          <div className="mb-8 bg-amber-950/40 p-6 rounded-xl border border-amber-900/40">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-amber-200 text-sm sm:text-base">
                {t.calculator.sliderLabel}
              </span>
              <span className="font-mono font-black text-2xl text-amber-400 bg-black/60 px-3 py-1 rounded border border-amber-700/50">
                {videoCount} {lang === 'ru' ? 'роликов' : 'clipuri'}
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="30"
              value={videoCount}
              onChange={(e) => setVideoCount(parseInt(e.target.value))}
              className="w-full h-3 bg-amber-950 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />

            <div className="flex justify-between text-[11px] font-mono text-amber-400/60 mt-2">
              <span>1 (600 MDL)</span>
              <span>5 (10% OFF)</span>
              <span>10 (15% OFF)</span>
              <span>20+ (20% OFF)</span>
            </div>
          </div>

          {/* ADDONS CHECKBOXES */}
          <div className="mb-8 space-y-3">
            <div className="text-xs uppercase tracking-wider font-mono text-amber-400 font-bold mb-2">
              {t.calculator.addonTitle}
            </div>

            <label className="flex items-center gap-3 p-3 bg-amber-950/30 border border-amber-900/40 rounded-lg cursor-pointer hover:bg-amber-900/30 transition-all">
              <input
                type="checkbox"
                checked={addonPackaging}
                onChange={(e) => setAddonPackaging(e.target.checked)}
                className="w-4 h-4 accent-amber-500 rounded"
              />
              <span className="text-xs sm:text-sm text-amber-200">{t.calculator.addon1}</span>
            </label>

            <label className="flex items-center gap-3 p-3 bg-amber-950/30 border border-amber-900/40 rounded-lg cursor-pointer hover:bg-amber-900/30 transition-all">
              <input
                type="checkbox"
                checked={addonTargeting}
                onChange={(e) => setAddonTargeting(e.target.checked)}
                className="w-4 h-4 accent-amber-500 rounded"
              />
              <span className="text-xs sm:text-sm text-amber-200">{t.calculator.addon2}</span>
            </label>

            <label className="flex items-center gap-3 p-3 bg-amber-950/30 border border-amber-900/40 rounded-lg cursor-pointer hover:bg-amber-900/30 transition-all">
              <input
                type="checkbox"
                checked={addonGrading}
                onChange={(e) => setAddonGrading(e.target.checked)}
                className="w-4 h-4 accent-amber-500 rounded"
              />
              <span className="text-xs sm:text-sm text-amber-200">{t.calculator.addon3}</span>
            </label>
          </div>

          {/* CALCULATED OUTPUT SUMMARY */}
          <div className="bg-gradient-to-r from-amber-950/90 to-orange-950/90 border border-amber-600/50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1 text-center md:text-left">
              <div className="text-xs text-amber-300/80 font-mono">
                {t.calculator.totalLabel}
              </div>
              <div className="text-4xl font-black text-amber-100 font-mono">
                {finalPrice} MDL
              </div>
              <div className="text-xs text-emerald-400 font-mono font-bold">
                {t.calculator.perVideoLabel} ~{perVideoPrice} MDL | {t.calculator.savedLabel} {totalSavings} MDL
              </div>
            </div>

            <div className="text-center md:text-right space-y-1">
              <div className="text-xs text-amber-400 font-mono">
                {t.calculator.estViews}
              </div>
              <div className="text-2xl font-bold text-amber-200 font-mono">
                ~{estViewsNum}
              </div>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold px-6 py-3 rounded-lg shadow-lg shadow-amber-950 font-mono text-sm transition-all"
            >
              {t.calculator.bookCalcBtn}
            </a>

          </div>

        </div>
      </section>

      {/* PRICING PLANS SECTION */}
      <section id="pricing" className="py-16 bg-[#110e0b] border-y border-amber-950/80 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/40 text-amber-400 font-mono text-xs mb-3">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.pricing.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-100 mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-amber-200/70 text-base">
              {t.pricing.sub}
            </p>
          </div>

          {/* 3 CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* PLAN 1 */}
            <div className="bg-[#16120e] border border-amber-900/40 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-amber-100 mb-1">{t.pricing.plan1Title}</h3>
                <p className="text-xs text-amber-300/70 mb-4">{t.pricing.plan1Desc}</p>
                <div className="text-3xl font-black text-amber-400 font-mono mb-6">
                  {t.pricing.plan1Price} <span className="text-xs text-amber-200/60 font-normal">{t.pricing.plan1Unit}</span>
                </div>
                <ul className="space-y-3 text-xs text-amber-200/80 font-mono mb-8">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> {t.pricing.plan1F1}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> {t.pricing.plan1F2}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> {t.pricing.plan1F3}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> {t.pricing.plan1F4}</li>
                </ul>
              </div>
              <a href="#booking" className="block text-center bg-amber-950 hover:bg-amber-900 text-amber-200 border border-amber-800/50 py-2.5 rounded-lg text-sm font-bold font-mono transition-all">
                {t.pricing.selectBtn}
              </a>
            </div>

            {/* PLAN 2 (HIGHLIGHTED POPULAR) */}
            <div className="bg-gradient-to-b from-[#22180e] to-[#17120d] border-2 border-amber-500/80 rounded-xl p-6 relative shadow-2xl flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-extrabold text-[10px] uppercase font-mono px-3 py-1 rounded-full shadow-lg">
                {t.pricing.plan2Badge}
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-100 mb-1">{t.pricing.plan2Title}</h3>
                <p className="text-xs text-amber-300/70 mb-4">{t.pricing.plan2Desc}</p>
                <div className="text-3xl font-black text-amber-400 font-mono mb-6">
                  {t.pricing.plan2Price} <span className="text-xs text-amber-200/60 font-normal">{t.pricing.plan2Unit}</span>
                </div>
                <ul className="space-y-3 text-xs text-amber-100 font-mono mb-8">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> {t.pricing.plan2F1}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> {t.pricing.plan2F2}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> {t.pricing.plan2F3}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 font-bold" /> {t.pricing.plan2F4}</li>
                </ul>
              </div>
              <a href="#booking" className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black py-3 rounded-lg text-sm font-bold font-mono shadow-lg transition-all">
                {t.pricing.selectBtn}
              </a>
            </div>

            {/* PLAN 3 */}
            <div className="bg-[#16120e] border border-amber-900/40 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-amber-100 mb-1">{t.pricing.plan3Title}</h3>
                <p className="text-xs text-amber-300/70 mb-4">{t.pricing.plan3Desc}</p>
                <div className="text-3xl font-black text-amber-400 font-mono mb-6">
                  {t.pricing.plan3Price} <span className="text-xs text-amber-200/60 font-normal">{t.pricing.plan3Unit}</span>
                </div>
                <ul className="space-y-3 text-xs text-amber-200/80 font-mono mb-8">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> {t.pricing.plan3F1}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> {t.pricing.plan3F2}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> {t.pricing.plan3F3}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 font-bold" /> {t.pricing.plan3F4}</li>
                </ul>
              </div>
              <a href="#booking" className="block text-center bg-amber-950 hover:bg-amber-900 text-amber-200 border border-amber-800/50 py-2.5 rounded-lg text-sm font-bold font-mono transition-all">
                {t.pricing.selectBtn}
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-amber-950/60 via-[#18130e] to-orange-950/60 border border-amber-700/40 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <ShieldCheck className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 mb-3">
            {t.guarantee.title}
          </h2>
          <p className="text-amber-200/70 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
            {t.guarantee.sub}
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-amber-950/40 p-4 rounded-xl border border-amber-900/40">
              <div className="font-bold text-amber-300 mb-1">{t.guarantee.g1Title}</div>
              <div className="text-xs text-amber-200/70">{t.guarantee.g1Desc}</div>
            </div>
            <div className="bg-amber-950/40 p-4 rounded-xl border border-amber-900/40">
              <div className="font-bold text-amber-300 mb-1">{t.guarantee.g2Title}</div>
              <div className="text-xs text-amber-200/70">{t.guarantee.g2Desc}</div>
            </div>
            <div className="bg-amber-950/40 p-4 rounded-xl border border-amber-900/40">
              <div className="font-bold text-amber-300 mb-1">{t.guarantee.g3Title}</div>
              <div className="text-xs text-amber-200/70">{t.guarantee.g3Desc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 bg-[#110e0b] border-t border-amber-950/80 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/40 text-amber-400 font-mono text-xs mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.faq.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-100">
              {t.faq.title}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: t.faq.q1, a: t.faq.a1 },
              { q: t.faq.q2, a: t.faq.a2 },
              { q: t.faq.q3, a: t.faq.a3 },
              { q: t.faq.q4, a: t.faq.a4 },
              { q: t.faq.q5, a: t.faq.a5 }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#16120e] border border-amber-900/40 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-amber-100 flex items-center justify-between gap-4 hover:text-amber-400 transition-colors"
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-amber-400/60 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-amber-200/80 leading-relaxed border-t border-amber-950/60 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOOKING / LEAD FORM SECTION */}
      <section id="booking" className="py-16 lg:py-24 px-4 max-w-4xl mx-auto">
        <div className="bg-[#14100c] border border-amber-700/50 rounded-2xl p-6 sm:p-10 shadow-2xl">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/40 text-amber-400 font-mono text-xs mb-3">
              <Send className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.form.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 mb-2">
              {t.form.title}
            </h2>
            <p className="text-amber-200/70 text-sm">
              {t.form.sub}
            </p>
          </div>

          {formSuccess ? (
            <div className="bg-emerald-950/60 border border-emerald-600/50 text-emerald-200 p-6 rounded-xl text-center font-mono font-bold">
              {t.form.successMsg}
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 max-w-xl mx-auto">
              <input
                type="text"
                required
                placeholder={t.form.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#1c1712] border border-amber-900/50 rounded-lg p-3 text-sm text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
              />
              <input
                type="tel"
                required
                placeholder={t.form.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#1c1712] border border-amber-900/50 rounded-lg p-3 text-sm text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
              />
              <input
                type="text"
                placeholder={t.form.businessPlaceholder}
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                className="w-full bg-[#1c1712] border border-amber-900/50 rounded-lg p-3 text-sm text-amber-100 placeholder-amber-500/50 focus:outline-none focus:border-amber-500"
              />

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold py-3.5 rounded-lg shadow-lg font-mono text-sm transition-all"
                >
                  {t.form.submitBtn}
                </button>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-200 border border-emerald-700/50 px-5 py-3.5 rounded-lg font-mono text-sm font-bold transition-all"
                >
                  {t.form.waBtn}
                </a>
              </div>
            </form>
          )}

        </div>
      </section>

      {/* MODAL FOR PORTFOLIO VIDEO DETAILS */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#14100c] border border-amber-600/50 rounded-2xl max-w-lg w-full p-6 relative overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-amber-400 hover:text-amber-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="font-mono text-xs text-amber-400 mb-1">
              RECORDING PREVIEW // REEL #{selectedVideo.id}
            </div>
            <h3 className="text-xl font-bold text-amber-100 mb-4">
              {selectedVideo.title[lang]}
            </h3>

            <div className={`h-40 rounded-xl bg-gradient-to-br ${selectedVideo.gradient} flex items-center justify-center mb-4`}>
              <Play className="w-12 h-12 text-amber-300 animate-pulse" />
            </div>

            <div className="space-y-3 font-mono text-xs text-amber-200/80 mb-6 bg-amber-950/30 p-4 rounded-lg border border-amber-900/40">
              <div><strong className="text-amber-400">Крючок внимание:</strong> "{selectedVideo.scriptHook}"</div>
              <div><strong className="text-amber-400">Просмотров:</strong> {selectedVideo.views}</div>
              <div><strong className="text-amber-400">Результат бизнеса:</strong> {selectedVideo.growth}</div>
            </div>

            <a
              href="#booking"
              onClick={() => setSelectedVideo(null)}
              className="block text-center bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-lg font-mono text-sm"
            >
              Хочу такой же ролик за 600 MDL
            </a>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#0a0806] border-t border-amber-950 py-10 px-4 text-xs font-mono text-amber-400/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="font-bold text-amber-200 text-sm mb-1">{t.footer.brand}</div>
            <div>{t.footer.tagline}</div>
          </div>
          <div>
            <div>{t.footer.rights}</div>
            <div>{t.footer.location} | {t.footer.phone}</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
