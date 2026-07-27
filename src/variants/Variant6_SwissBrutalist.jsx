import React, { useState } from 'react';
import { 
  Video, 
  ArrowUpRight, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Calculator, 
  Play, 
  X, 
  Sliders, 
  Award, 
  Sparkles, 
  Clock, 
  Users, 
  Camera, 
  Zap, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  DollarSign, 
  Globe, 
  FileText, 
  BarChart3,
  HelpCircle,
  Film
} from 'lucide-react';
import { translations } from '../data/translations';

// Swiss Brutalist Extended Bilingual Copy Dictionary
const swissCopy = {
  ru: {
    systemTag: "// SWISS BRUTALIST EDITORIAL • VIRALIS MEDIA STUDIO",
    studioLocation: "Кишинёв, Молдова • ул. Пушкина 22",
    heroBadge: "[600 MDL / 1 РОЛИК ПОД КЛЮЧ • БЕЗ ИИ-ШАБЛОНОВ]",
    heroTitleLine1: "ЧЕСТНЫЙ ВИДЕОПРОДАКШН",
    heroTitleLine2: "ДЛЯ БИЗНЕСА В МОЛДОВЕ",
    heroSubtitle: "Откажитесь от фальшивой ИИ-графики и завышенных смет агентств. Мы снимаем настоящих людей, живые эмоции и готовим ролики с удержанием 85%+, которые приносят заявки.",
    ctaBook: "ЗАКАЗАТЬ РОЛИК • 600 MDL",
    ctaCalc: "РАССЧИТАТЬ ROI ВАШЕГО БИЗНЕСА",
    
    // Stats Grid
    stat1Val: "600 MDL",
    stat1Lbl: "Фиксированная цена за ролик",
    stat2Val: "48 ЧАСОВ",
    stat2Lbl: "Срок сдачи под ключ",
    stat3Val: "10M+",
    stat3Lbl: "Органических просмотров в MD",
    stat4Val: "300%+",
    stat4Lbl: "Средний ROI клиентов",

    // Studio & Gear Specs (Variant 0 Human Feel)
    humanStudioTag: "// 01. НАСТОЯЩАЯ СТУДИЯ И КОМАНДА",
    humanStudioTitle: "Живые съёмки в Кишинёве, а не нейросетевой мусор",
    humanStudioDesc: "Пока другие генерируют бездушные ИИ-аватары, мы выезжаем к вам на локацию или снимаем в нашей оборудованной студии в центре Кишинёва. Каждое видео создаётся командой профессионалов.",
    
    gearTitle: "Технический райдер студии [SPECIFICATIONS]:",
    gear1: "Камеры: Sony A7IV & Sony FX3 (4K 10-bit 4:2:2 S-Cinetone)",
    gear2: "Звук: Радиосистемы Rode Wireless PRO & студийный Shure SM7B",
    gear3: "Освещение: Aputure 300d II + софтбоксы 120см + декор-свет",
    gear4: "Стабилизация: DJI RS3 Pro & профессиональный ассистент",
    
    teamTitle: "Команда проекта:",
    team1Name: "Александр Гросу",
    team1Role: "Главный оператор / Режиссер",
    team2Name: "Елена Мунтяну",
    team2Role: "Сценарист & Маркетолог",
    team3Name: "Михаил Чебан",
    team3Role: "Режиссер монтажа & Sound Designer",

    costBreakdownTitle: "Калькуляция 600 MDL [ПРОЗРАЧНАЯ СМЕТА]:",
    cost1: "Разработка авторского сценария & Hook — 100 MDL",
    cost2: "Выездная съёмка на 4K оборудование — 200 MDL",
    cost3: "Динамичный монтаж & Смена кадров 1.5 сек — 150 MDL",
    cost4: "Саунд-дизайн & Озвучка & Субтитры — 100 MDL",
    cost5: "Цветокоррекция & Экспорт в 9:16 — 50 MDL",

    // Behavioral ROI Calculator (Variant 3)
    calcTag: "// 02. ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР ROI (СИСТЕМА 1)",
    calcTitle: "Рассчитайте окупаемость и прямую экономию",
    calcSubtitle: "Сравните затраты на классические агентства и систему VIRALIS 600 MDL",
    
    sliderVideosLabel: "Количество видеороликов в месяц:",
    sliderCheckLabel: "Средний чек вашего клиента (MDL):",
    
    addonsTitle: "Дополнительные модули роста:",
    addonSmm: "Упаковка аккаунта Instagram/TikTok (+500 MDL)",
    addonAds: "Настройка таргета Facebook & Insta Ads (+800 MDL)",
    addonExpress: "Экспресс-сдача за 24 часа (+400 MDL)",

    calcResultAgency: "Затраты в традиционном агентстве:",
    calcResultViralis: "Инвестиции в VIRALIS Studio:",
    calcResultSavings: "Чистая экономия бюджета:",
    calcResultLeads: "Прогнозируемый поток клиентов:",
    calcResultRevenue: "Ожидаемая дополнительная выручка:",
    calcResultRoiRatio: "Прогнозируемый ROI:",

    calcUrgencyText: "Вы экономите деньги с первого же ролика. Скидки от объёма: 5% при 5+ видео, 15% при 10+ видео, 20% при 20+ видео.",
    btnBookCalc: "ЗАБРОНИРОВАТЬ ПАКЕТ В WHATSAPP",

    // Comparison Matrix
    matrixTag: "// 03. АСИММЕТРИЧНОЕ СРАВНЕНИЕ ПОДХОДОВ",
    matrixTitle: "Классическое Агентство vs VIRALIS Swiss Brutalist",
    tradTitle: "Традиционное Агентство",
    trad1: "2,500 - 4,000 MDL за один ролик",
    trad2: "Долгое согласование: 10-14 дней",
    trad3: "Доплата за сценарий, выезд и субтитры",
    trad4: "Шаблонный монтаж без анализа хуков",
    
    virTitle: "VIRALIS Media Studio",
    vir1: "Фиксировано 600 MDL / ролик под ключ",
    vir2: "Быстрый результат: 24-48 часов",
    vir3: "Всё включено: сценарий, съемка, монтаж, звук",
    vir4: "Вирусная адаптация под алгоритмы Reels & TikTok",

    // Portfolio Showcase
    portfolioTag: "// 04. КАТАЛОГ РЕАЛИЗОВАННЫХ КЕЙСОВ В МОЛДОВЕ",
    portfolioTitle: "Примеры видео с просмотром 9:16",
    portfolioSub: "Нажмите на ролик, чтобы открыть плеер симулятора и изучить метрики удержания.",
    
    catAll: "Все кейсы",
    catGastro: "Рестораны & Кафе",
    catFashion: "Одежда & Шоурумы",
    catServices: "Услуги & Сервисы",
    catBeauty: "Красота & Здоровье",

    // Testimonials
    testiTag: "// 05. РЕАЛЬНЫЕ ОТЗЫВЫ ПРЕДПРИНИМАТЕЛЕЙ",
    testiTitle: "Результаты наших клиентов в Кишинёве",

    // FAQ
    faqTag: "// 06. ВОПРОСЫ И ОТВЕТЫ [FAQ]",
    faqTitle: "Всё, что вам нужно знать перед стартом",

    // Lead Form Modal & Footer
    formTitle: "Забронировать съёмку за 600 MDL",
    formSub: "Оставьте заявку, и мы свяжемся с вами в течение 15 минут для обсуждения концепции.",
    fieldName: "Ваше имя / Название бизнеса",
    fieldPhone: "Телефон (WhatsApp / Telegram)",
    fieldComment: "Комментарий или задача",
    btnSubmit: "ОТПРАВИТЬ ЗАЯВКУ",
    formSuccess: "Спасибо! Заявка принята. Менеджер свяжется с вами в течение 15 минут.",
    
    footerRights: "© 2026 VIRALIS Media Studio. Все права защищены. Кишинёв, Молдова."
  },
  ro: {
    systemTag: "// SWISS BRUTALIST EDITORIAL • VIRALIS MEDIA STUDIO",
    studioLocation: "Chișinău, Moldova • str. Pușkin 22",
    heroBadge: "[600 MDL / 1 CLIP CHEIE LA CHEIE • FĂRĂ ȘABLOANE AI]",
    heroTitleLine1: "PRODUCȚIE VIDEO CINSTITĂ",
    heroTitleLine2: "PENTRU AFACERI ÎN MOLDOVA",
    heroSubtitle: "Renunțați la grafica AI falsă și devizele umflate ale agențiilor. Filmăm oameni reali, emoții autentice și pregătim clipuri cu retenție de 85%+ care aduc clienți.",
    ctaBook: "COMANDĂ CLIP • 600 MDL",
    ctaCalc: "CALCULEAZĂ ROI PENTRU AFACEREA TA",
    
    // Stats Grid
    stat1Val: "600 MDL",
    stat1Lbl: "Preț fix per clip",
    stat2Val: "48 ORE",
    stat2Lbl: "Termen de livrare cheie la cheie",
    stat3Val: "10M+",
    stat3Lbl: "Vizualizări organice în MD",
    stat4Val: "300%+",
    stat4Lbl: "ROI mediu al clienților",

    // Studio & Gear Specs
    humanStudioTag: "// 01. STUDIO REAL ȘI ECHIPĂ UMANĂ",
    humanStudioTitle: "Filmări vii în Chișinău, nu deșeuri create de AI",
    humanStudioDesc: "În timp ce alții generează avatare AI fără suflet, noi venim la locația ta sau filmăm în studioul nostru echipat din centrul Chișinăului. Fiecare video este creat de profesioniști.",
    
    gearTitle: "Rider tehnic al studioului [SPECIFICATIONS]:",
    gear1: "Camere: Sony A7IV & Sony FX3 (4K 10-bit 4:2:2 S-Cinetone)",
    gear2: "Sunet: Microfoane lavalieră Rode Wireless PRO & Shure SM7B",
    gear3: "Iluminat: Aputure 300d II + softbox-uri 120cm + lumină decorativă",
    gear4: "Stabilizare: DJI RS3 Pro & asistent profesionist",
    
    teamTitle: "Echipa proiectului:",
    team1Name: "Alexandr Grosu",
    team1Role: "Regizor de imagine / Director",
    team2Name: "Elena Munteanu",
    team2Role: "Scenarist & Specialist Hooks",
    team3Name: "Mihail Ceban",
    team3Role: "Editor Video & Sound Designer",

    costBreakdownTitle: "Calculare 600 MDL [DEVIZ TRANSPARENT]:",
    cost1: "Elaborare scenariu original & Hook — 100 MDL",
    cost2: "Filmare pe teren cu echipament 4K — 200 MDL",
    cost3: "Montaj dinamic & Schimbare cadre la 1.5 sec — 150 MDL",
    cost4: "Sound Design & Voce & Subtitrări — 100 MDL",
    cost5: "Corecție culoare & Export în format 9:16 — 50 MDL",

    // Behavioral ROI Calculator
    calcTag: "// 02. CALCULATOR INTERACTIV ROI (SISTEMUL 1)",
    calcTitle: "Calculează rentabilitatea și economiile directe",
    calcSubtitle: "Compară costurile agențiilor clasice cu sistemul VIRALIS 600 MDL",
    
    sliderVideosLabel: "Numărul de clipuri video pe lună:",
    sliderCheckLabel: "Bonul mediu al clientului tău (MDL):",
    
    addonsTitle: "Module suplimentare de creștere:",
    addonSmm: "Ambalare profil Instagram/TikTok (+500 MDL)",
    addonAds: "Setare reclame Facebook & Insta Ads (+800 MDL)",
    addonExpress: "Livrare expres în 24 ore (+400 MDL)",

    calcResultAgency: "Cheltuieli la o agenție tradițională:",
    calcResultViralis: "Investiție în VIRALIS Studio:",
    calcResultSavings: "Economie curată de buget:",
    calcResultLeads: "Flux estimat de clienți noi:",
    calcResultRevenue: "Venit suplimentar estimat:",
    calcResultRoiRatio: "ROI estimat:",

    calcUrgencyText: "Economisești bani de la primul clip. Reduceri de volum: 5% la 5+ clipuri, 15% la 10+ clipuri, 20% la 20+ clipuri.",
    btnBookCalc: "REZERVĂ PACHETUL PE WHATSAPP",

    // Comparison Matrix
    matrixTag: "// 03. COMPARAȚIE ASIMETRICĂ A ABORDĂRILOR",
    matrixTitle: "Agenție Clasică vs VIRALIS Swiss Brutalist",
    tradTitle: "Agenție Tradițională",
    trad1: "2,500 - 4,000 MDL pentru un singur clip",
    trad2: "Aprobare lungă: 10-14 zile",
    trad3: "Plată suplimentară pentru scenariu și subtitrări",
    trad4: "Montaj de șablon fără analiza cârligelor",
    
    virTitle: "VIRALIS Media Studio",
    vir1: "Fix 600 MDL / clip cheie la cheie",
    vir2: "Rezultat rapid: 24-48 ore",
    vir3: "Totul inclus: scenariu, filmare, montaj, sunet",
    vir4: "Adaptare virală pentru algoritmii Reels & TikTok",

    // Portfolio Showcase
    portfolioTag: "// 04. CATALOG DE CAZURI REALIZATE ÎN MOLDOVA",
    portfolioTitle: "Exemple de clipuri cu vizualizare 9:16",
    portfolioSub: "Apasă pe clip pentru a deschide playerul simulator și a analiza retenția.",
    
    catAll: "Toate cazurile",
    catGastro: "Restaurante & Cafe",
    catFashion: "Haine & Showroom-uri",
    catServices: "Servicii & Tech",
    catBeauty: "Frumusețe & Sănătate",

    // Testimonials
    testiTag: "// 05. RECENZII REALE ALE ANTREPRENORILOR",
    testiTitle: "Rezultatele clienților noștri din Chișinău",

    // FAQ
    faqTag: "// 06. ÎNTREBĂRI ȘI RĂSPUNSURI [FAQ]",
    faqTitle: "Tot ce trebuie să știi înainte de a începe",

    // Lead Form Modal & Footer
    formTitle: "Rezervă filmarea pentru 600 MDL",
    formSub: "Lasă o cerere și te vom contacta în 15 minute pentru a discuta conceptul.",
    fieldName: "Numele tău / Numele afacerii",
    fieldPhone: "Telefon (WhatsApp / Telegram)",
    fieldComment: "Comentariu sau sarcină",
    btnSubmit: "TRIMITE CEREREA",
    formSuccess: "Mulțumim! Cererea a fost recepționată. Managerul te va contacta în 15 minute.",
    
    footerRights: "© 2026 VIRALIS Media Studio. Toate drepturile rezervate. Chișinău, Moldova."
  }
};

export default function Variant6_SwissBrutalist({ lang: propLang = 'ru', setLang: propSetLang }) {
  // Bilingual state with fallback
  const [internalLang, setInternalLang] = useState(propLang);
  const lang = propLang || internalLang;
  const setLang = propSetLang || setInternalLang;

  const t = swissCopy[lang] || swissCopy['ru'];
  const baseTrans = translations[lang] || translations['ru'];

  // ROI Calculator State
  const [videoCount, setVideoCount] = useState(5);
  const [avgCheck, setAvgCheck] = useState(600);
  const [addonSmm, setAddonSmm] = useState(false);
  const [addonAds, setAddonAds] = useState(false);
  const [addonExpress, setAddonExpress] = useState(false);

  // Modal & Interactive State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Form submit state
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculations for Behavioral ROI
  let basePrice = 600;
  let discountRate = 0;
  if (videoCount >= 20) discountRate = 0.20;
  else if (videoCount >= 10) discountRate = 0.15;
  else if (videoCount >= 5) discountRate = 0.05;

  const unitPrice = Math.round(basePrice * (1 - discountRate));
  const viralisBaseCost = videoCount * unitPrice;
  const addonsTotal = (addonSmm ? 500 : 0) + (addonAds ? 800 : 0) + (addonExpress ? 400 : 0);
  const totalViralisInvestment = viralisBaseCost + addonsTotal;

  // Agency comparison cost (~2,500 MDL per video)
  const traditionalAgencyCost = videoCount * 2500;
  const netSavings = Math.max(0, traditionalAgencyCost - totalViralisInvestment);

  // Estimated reach & leads (approx 1 video = 12 leads)
  const estimatedLeads = videoCount * 12;
  const estimatedRevenue = estimatedLeads * avgCheck;
  const roiRatio = totalViralisInvestment > 0 ? (estimatedRevenue / totalViralisInvestment).toFixed(1) : '0.0';

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      title: lang === 'ru' ? 'Gusto Cafe & Bistro Chișinău' : 'Gusto Cafe & Bistro Chișinău',
      category: 'gastro',
      categoryLabel: lang === 'ru' ? 'Рестораны' : 'Restaurante',
      views: '142,000+',
      retention: '88%',
      clients: '+45 столиков/неделю',
      img: '/assets/reel_restaurant.jpg',
      hook: lang === 'ru' ? '«Где съесть лучший стейк в Кишинёве за 120 леев?»' : '«Unde să mănânci cel mai bun steak în Chișinău cu 120 lei?»'
    },
    {
      id: 2,
      title: lang === 'ru' ? 'Boutique Luna & Co — Шоурум' : 'Boutique Luna & Co — Showroom',
      category: 'fashion',
      categoryLabel: lang === 'ru' ? 'Мода' : 'Modă',
      views: '98,500+',
      retention: '84%',
      clients: '+38 продаж/день',
      img: '/assets/reel_fashion.jpg',
      hook: lang === 'ru' ? '«3 образа для офиса, которые смотрятся на $1000»' : '«3 ținute pentru birou care arată de $1000»'
    },
    {
      id: 3,
      title: lang === 'ru' ? 'SmartHub MD — Сервис Техники' : 'SmartHub MD — Reparații Tech',
      category: 'services',
      categoryLabel: lang === 'ru' ? 'Услуги' : 'Servicii',
      views: '215,000+',
      retention: '91%',
      clients: '+62 обращения/день',
      img: '/assets/reel_tech.jpg',
      hook: lang === 'ru' ? '«Что скрывают сервисные центры при замене экрана?»' : '«Ce ascund centrele de reparații la schimbarea ecranului?»'
    },
    {
      id: 4,
      title: lang === 'ru' ? 'Aura Beauty Clinic Chișinău' : 'Aura Beauty Clinic Chișinău',
      category: 'beauty',
      categoryLabel: lang === 'ru' ? 'Красота' : 'Frumusețe',
      views: '176,000+',
      retention: '86%',
      clients: '+28 записей/неделю',
      img: '/assets/reel_beauty.jpg',
      hook: lang === 'ru' ? '«Как избавиться от следов усталости за 1 процедуру»' : '«Cum să scapi de oboseală într-o singură procedură»'
    }
  ];

  const filteredPortfolio = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // FAQ Items
  const faqList = [
    {
      q: lang === 'ru' ? 'Что входит в фиксированную стоимость 600 MDL?' : 'Ce este inclus în prețul fix de 600 MDL?',
      a: lang === 'ru' 
        ? 'В 600 MDL входит всё под ключ: разработка вирусного сценария с хуком, выездная съёмка на 4K оборудование Sony, динамичный монтаж, саунд-дизайн, дикторская озвучка, яркие субтитры и финальный экспорт в формат 9:16.'
        : 'În 600 MDL este inclus totul cheie la cheie: scenariu viral cu hook, filmare pe teren cu echipament 4K Sony, montaj dinamic, sound design, voce диктор, subtitrări animate și export final 9:16.'
    },
    {
      q: lang === 'ru' ? 'Каковы сроки сдачи готовых роликов?' : 'Care sunt termenele de livrare a clipurilor?',
      a: lang === 'ru'
        ? 'Стандартный срок сдачи готового монтажа — 24-48 часов после съёмки. При опции экспресс-доставки мы отдаём ролики за 24 часа.'
        : 'Termenul standard este de 24-48 ore după filmare. Cu opțiunea expres le livrăm în 24 ore.'
    },
    {
      q: lang === 'ru' ? 'Где проходят съёмки — в вашей студии или у нас?' : 'Unde au loc filmările — în studio sau la noi?',
      a: lang === 'ru'
        ? 'Мы можем снимать прямо на вашей коммерческой локации в Кишинёве (ресторан, магазин, салон, офис) или в нашей оборудованной студии.'
        : 'Putem filma direct la locația ta comercială din Chișinău (restaurant, magazin, salon, birou) sau în studioul nostru echipat.'
    },
    {
      q: lang === 'ru' ? 'Нужно ли нам самостоятельно предоставлять актеров?' : 'Trebuie să aducem noi actorii?',
      a: lang === 'ru'
        ? 'Не обязательно! В ролике могут сниматься как ваши сотрудники/владелец, так и наши харизматичные актеры и авторы контента.'
        : 'Nu este obligatoriu! În clip pot apărea angajații tăi sau actorii/creatorii noștri carismatici.'
    },
    {
      q: lang === 'ru' ? 'Есть ли скидки при заказе большого пакета?' : 'Există reduceri pentru pachete mai mari?',
      a: lang === 'ru'
        ? 'Да! От 5 роликов скидка 5% (570 MDL/ролик), от 10 роликов — 15% (510 MDL/ролик), от 20 роликов — 20% (480 MDL/ролик).'
        : 'Da! De la 5 clipuri reduceri 5% (570 MDL/clip), de la 10 clipuri — 15% (510 MDL/clip), de la 20 clipuri — 20% (480 MDL/clip).'
    }
  ];

  // WhatsApp link generator
  const getWhatsAppLink = () => {
    const message = lang === 'ru'
      ? `Здравствуйте! Хочу заказать ${videoCount} роликов за ${totalViralisInvestment} MDL (Экономия ${netSavings} MDL). Чек клиента: ${avgCheck} MDL.`
      : `Bună ziua! Doresc să comand ${videoCount} clipuri cu ${totalViralisInvestment} MDL (Economie ${netSavings} MDL). Bon mediu: ${avgCheck} MDL.`;
    return `https://wa.me/37378337228?text=${encodeURIComponent(message)}`;
  };

  return (
    <div style={{
      background: '#090A0C',
      color: '#F3F4F6',
      minHeight: '100vh',
      fontFamily: "'Outfit', 'Helvetica Neue', Arial, sans-serif",
      lineHeight: '1.5',
      WebkitFontSmoothing: 'antialiased',
      borderTop: '5px solid #E5C07B'
    }}>
      {/* ─────────────────────────────────────────────────────────────
          1. SWISS EDITORIAL HEADER & TICKER
      ────────────────────────────────────────────────────────────── */}
      <div style={{
        background: '#E5C07B',
        color: '#000000',
        padding: '6px 16px',
        fontSize: '0.78rem',
        fontWeight: '900',
        letterSpacing: '1px',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        textTransform: 'uppercase',
        borderBottom: '1px solid #000'
      }}>
        <span>{t.systemTag}</span>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span>{t.studioLocation}</span>
          {/* Language Switcher */}
          <div style={{ display: 'flex', gap: '2px', background: '#000', padding: '2px', borderRadius: '2px' }}>
            <button 
              onClick={() => setLang('ru')}
              style={{
                background: lang === 'ru' ? '#E5C07B' : '#000',
                color: lang === 'ru' ? '#000' : '#FFF',
                border: 'none',
                padding: '2px 8px',
                fontWeight: '900',
                fontSize: '0.7rem',
                cursor: 'pointer'
              }}
            >
              RU
            </button>
            <button 
              onClick={() => setLang('ro')}
              style={{
                background: lang === 'ro' ? '#E5C07B' : '#000',
                color: lang === 'ro' ? '#000' : '#FFF',
                border: 'none',
                padding: '2px 8px',
                fontWeight: '900',
                fontSize: '0.7rem',
                cursor: 'pointer'
              }}
            >
              RO
            </button>
          </div>
        </div>
      </div>

      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.15)',
        padding: '20px 32px',
        background: '#0D0E12',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center'
        }}>
          {/* Brand Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              background: '#E5C07B',
              color: '#000',
              fontWeight: '900',
              fontSize: '1.2rem',
              padding: '6px 12px',
              border: '1px solid #FFF',
              boxShadow: '3px 3px 0px #FFF'
            }}>
              VIRALIS
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: '900', letterSpacing: '-0.5px' }}>MEDIA STUDIO</div>
              <div style={{ fontSize: '0.7rem', color: '#9CA3AF', fontFamily: 'monospace' }}>CHIȘINĂU • 600 MDL / ROLE</div>
            </div>
          </div>

          {/* Quick Contact & Navigation */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a 
              href="tel:+37378337228" 
              style={{
                color: '#FFF',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '800',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'monospace'
              }}
            >
              <Phone size={16} color="#E5C07B" /> +373 78 337 228
            </a>
            
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                background: '#E5C07B',
                color: '#000',
                border: '1px solid #FFF',
                boxShadow: '4px 4px 0px #FFF',
                padding: '10px 20px',
                fontWeight: '900',
                fontSize: '0.85rem',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              {t.ctaBook}
            </button>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. ASYMMETRIC SWISS 60/40 HERO SECTION
      ────────────────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '60px 32px 80px',
        borderBottom: '1px solid rgba(255,255,255,0.15)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.35fr 0.85fr',
          gap: '48px',
          alignItems: 'stretch'
        }}>
          {/* Left Column (60% Layout Area) */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(229, 192, 123, 0.12)',
              color: '#E5C07B',
              border: '1px solid #E5C07B',
              padding: '6px 14px',
              fontSize: '0.78rem',
              fontWeight: '800',
              fontFamily: 'monospace',
              letterSpacing: '1px',
              marginBottom: '24px',
              width: 'fit-content'
            }}>
              {t.heroBadge}
            </div>

            <h1 style={{
              fontSize: '3.8rem',
              fontWeight: '900',
              lineHeight: '0.98',
              letterSpacing: '-2px',
              marginBottom: '28px',
              textTransform: 'uppercase'
            }}>
              {t.heroTitleLine1} <br />
              <span style={{
                background: '#E5C07B',
                color: '#000',
                padding: '0 10px',
                boxShadow: '4px 4px 0px #FFF'
              }}>
                {t.heroTitleLine2}
              </span>
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: '#D1D5DB',
              lineHeight: '1.6',
              marginBottom: '36px',
              maxWidth: '680px'
            }}>
              {t.heroSubtitle}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#E5C07B',
                  color: '#000000',
                  border: '2px solid #FFFFFF',
                  boxShadow: '5px 5px 0px #FFFFFF',
                  padding: '18px 32px',
                  fontWeight: '900',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  letterSpacing: '0.5px'
                }}
              >
                <MessageCircle size={20} /> {t.ctaBook} <ArrowUpRight size={20} />
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById('swiss-roi-calculator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  background: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '18px 28px',
                  fontWeight: '800',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Calculator size={18} color="#E5C07B" /> {t.ctaCalc}
              </button>
            </div>

            {/* Swiss Grid Stat Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
              borderTop: '1px solid rgba(255,255,255,0.15)',
              paddingTop: '24px'
            }}>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#E5C07B', fontFamily: 'monospace' }}>{t.stat1Val}</div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: '700' }}>{t.stat1Lbl}</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#FFF', fontFamily: 'monospace' }}>{t.stat2Val}</div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: '700' }}>{t.stat2Lbl}</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#E5C07B', fontFamily: 'monospace' }}>{t.stat3Val}</div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: '700' }}>{t.stat3Lbl}</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#FFF', fontFamily: 'monospace' }}>{t.stat4Val}</div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: '700' }}>{t.stat4Lbl}</div>
              </div>
            </div>
          </div>

          {/* Right Column (40% Asymmetric Interactive Highlight Box) */}
          <div style={{
            background: '#12141C',
            border: '2px solid #E5C07B',
            boxShadow: '8px 8px 0px #000000',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between'
          }}>
            <div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '900',
                color: '#E5C07B',
                fontFamily: 'monospace',
                letterSpacing: '1px',
                marginBottom: '16px'
              }}>
                [EXPRESS OVERVIEW • VIRALIS STUDIO]
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '16px', lineHeight: '1.2' }}>
                {lang === 'ru' ? '1 Ролик = Полный Цикл за 600 MDL' : '1 Clip = Ciclu Complet la 600 MDL'}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  lang === 'ru' ? 'Выезд оператора в Кишинёве с 4K камерой' : 'Deplasarea operatorului în Chișinău cu cameră 4K',
                  lang === 'ru' ? 'Разработка вирусных завязок (Hooks)' : 'Elaborarea cârligelor virale (Hooks)',
                  lang === 'ru' ? 'Монтаж с динамикой 1.5 сек + субтитры' : 'Montaj dinamic la 1.5 sec + subtitrări',
                  lang === 'ru' ? 'Чистый студийный звук & Саунд-дизайн' : 'Sunet curat de studio & Sound Design',
                  lang === 'ru' ? 'Готовые файлы для Reels, TikTok & Shorts' : 'Fișiere gata pentru Reels, TikTok & Shorts'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#E5E7EB' }}>
                    <CheckCircle2 size={18} color="#E5C07B" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: '#090A0C',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '20px',
              marginTop: '16px'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#9CA3AF', fontFamily: 'monospace' }}>
                // BILINGUAL CREATIVE SUPPORT
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: '800', marginTop: '4px', color: '#FFF' }}>
                {lang === 'ru' ? 'Съёмка на Русском и Румынском языках' : 'Filmare în limbile Română și Rusă'}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '4px' }}>
                {lang === 'ru' ? 'Адаптация под местный менталитет в Молдове.' : 'Adaptare la mentalitatea locală din Moldova.'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. HUMAN STUDIO & BEHIND-THE-SCENES (VARIANT 0 INTEGRATION)
      ────────────────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '80px 32px',
        borderBottom: '1px solid rgba(255,255,255,0.15)'
      }}>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: '900',
          color: '#E5C07B',
          fontFamily: 'monospace',
          marginBottom: '12px'
        }}>
          {t.humanStudioTag}
        </div>

        <h2 style={{
          fontSize: '2.8rem',
          fontWeight: '900',
          letterSpacing: '-1px',
          marginBottom: '16px',
          textTransform: 'uppercase'
        }}>
          {t.humanStudioTitle}
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: '#9CA3AF',
          maxWidth: '800px',
          marginBottom: '48px'
        }}>
          {t.humanStudioDesc}
        </p>

        {/* 60/40 Asymmetric Studio Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '32px',
          marginBottom: '48px'
        }}>
          {/* Gear Specs Panel */}
          <div style={{
            background: '#13151D',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '5px 5px 0px #000000',
            padding: '32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Camera size={24} color="#E5C07B" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '900', textTransform: 'uppercase' }}>
                {t.gearTitle}
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px', fontFamily: 'monospace' }}>
              {[t.gear1, t.gear2, t.gear3, t.gear4].map((gear, idx) => (
                <div key={idx} style={{
                  background: '#090A0C',
                  border: '1px solid rgba(229, 192, 123, 0.3)',
                  padding: '14px 18px',
                  fontSize: '0.88rem',
                  color: '#F3F4F6',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <Zap size={16} color="#E5C07B" />
                  <span>{gear}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent 600 MDL Cost Breakdown */}
          <div style={{
            background: '#181A24',
            border: '2px solid #E5C07B',
            boxShadow: '6px 6px 0px #000000',
            padding: '32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <FileText size={24} color="#E5C07B" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '900', textTransform: 'uppercase' }}>
                {t.costBreakdownTitle}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              {[t.cost1, t.cost2, t.cost3, t.cost4, t.cost5].map((item, idx) => (
                <div key={idx} style={{
                  padding: '10px 14px',
                  background: '#090A0C',
                  borderLeft: '3px solid #E5C07B',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}>
                  <span>{item}</span>
                  <span style={{ color: '#E5C07B', fontWeight: '800', fontFamily: 'monospace' }}>✓</span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '20px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '800' }}>ИТОГО ЗА 1 РОЛИК:</span>
              <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#E5C07B', fontFamily: 'monospace' }}>600 MDL</span>
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { name: t.team1Name, role: t.team1Role, exp: '8+ лет опыта • 1200+ роликов' },
            { name: t.team2Name, role: t.team2Role, exp: 'Сценарии с удержанием 85%+' },
            { name: t.team3Name, role: t.team3Role, exp: 'Саунд-дизайн & 4K рендеринг' }
          ].map((member, idx) => (
            <div key={idx} style={{
              background: '#12141C',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '24px'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#E5C07B', fontFamily: 'monospace', marginBottom: '8px' }}>
                [TEAM_MEMBER_0{idx + 1}]
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: '900', marginBottom: '4px' }}>{member.name}</div>
              <div style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: '700', marginBottom: '8px' }}>{member.role}</div>
              <div style={{ fontSize: '0.78rem', color: '#D1D5DB', fontFamily: 'monospace' }}>{member.exp}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. BEHAVIORAL ROI CALCULATOR (VARIANT 3 INTEGRATION)
      ────────────────────────────────────────────────────────────── */}
      <section id="swiss-roi-calculator" style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '80px 32px',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
        background: '#0D0E14'
      }}>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: '900',
          color: '#E5C07B',
          fontFamily: 'monospace',
          marginBottom: '12px'
        }}>
          {t.calcTag}
        </div>

        <h2 style={{
          fontSize: '2.8rem',
          fontWeight: '900',
          letterSpacing: '-1px',
          marginBottom: '12px',
          textTransform: 'uppercase'
        }}>
          {t.calcTitle}
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: '#9CA3AF',
          marginBottom: '48px',
          maxWidth: '750px'
        }}>
          {t.calcSubtitle}
        </p>

        {/* 60/40 Asymmetric Calculator Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 0.7fr',
          gap: '40px',
          alignItems: 'flex-start'
        }}>
          {/* Controls Left Column */}
          <div style={{
            background: '#13151F',
            border: '2px solid #E5C07B',
            boxShadow: '6px 6px 0px #000000',
            padding: '36px'
          }}>
            {/* Slider 1: Video Quantity */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontSize: '1rem', fontWeight: '800' }}>{t.sliderVideosLabel}</label>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: '#E5C07B',
                  fontFamily: 'monospace',
                  background: '#090A0C',
                  padding: '4px 16px',
                  border: '1px solid #E5C07B'
                }}>
                  {videoCount} {lang === 'ru' ? 'роликов' : 'clipuri'}
                </span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                value={videoCount} 
                onChange={(e) => setVideoCount(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  background: '#090A0C',
                  accentColor: '#E5C07B',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#9CA3AF', marginTop: '6px', fontFamily: 'monospace' }}>
                <span>1 {lang === 'ru' ? 'ролик' : 'clip'}</span>
                <span>10 {lang === 'ru' ? 'роликов (-15%)' : 'clipuri (-15%)'}</span>
                <span>30 {lang === 'ru' ? 'роликов (-20%)' : 'clipuri (-20%)'}</span>
              </div>
            </div>

            {/* Slider 2: Average Check */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontSize: '1rem', fontWeight: '800' }}>{t.sliderCheckLabel}</label>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: '#FFF',
                  fontFamily: 'monospace',
                  background: '#090A0C',
                  padding: '4px 16px',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}>
                  {avgCheck} MDL
                </span>
              </div>
              <input 
                type="range" 
                min="200" 
                max="5000" 
                step="50"
                value={avgCheck} 
                onChange={(e) => setAvgCheck(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  background: '#090A0C',
                  accentColor: '#FFF',
                  cursor: 'pointer'
                }}
              />
            </div>

            {/* Optional Addons */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '24px' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '16px', color: '#E5C07B' }}>
                {t.addonsTitle}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  background: addonSmm ? 'rgba(229, 192, 123, 0.1)' : '#090A0C',
                  padding: '12px 16px',
                  border: addonSmm ? '1px solid #E5C07B' : '1px solid rgba(255,255,255,0.1)'
                }}>
                  <input 
                    type="checkbox" 
                    checked={addonSmm} 
                    onChange={(e) => setAddonSmm(e.target.checked)}
                    style={{ accentColor: '#E5C07B', width: '18px', height: '18px' }}
                  />
                  <span>{t.addonSmm}</span>
                </label>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  background: addonAds ? 'rgba(229, 192, 123, 0.1)' : '#090A0C',
                  padding: '12px 16px',
                  border: addonAds ? '1px solid #E5C07B' : '1px solid rgba(255,255,255,0.1)'
                }}>
                  <input 
                    type="checkbox" 
                    checked={addonAds} 
                    onChange={(e) => setAddonAds(e.target.checked)}
                    style={{ accentColor: '#E5C07B', width: '18px', height: '18px' }}
                  />
                  <span>{t.addonAds}</span>
                </label>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  background: addonExpress ? 'rgba(229, 192, 123, 0.1)' : '#090A0C',
                  padding: '12px 16px',
                  border: addonExpress ? '1px solid #E5C07B' : '1px solid rgba(255,255,255,0.1)'
                }}>
                  <input 
                    type="checkbox" 
                    checked={addonExpress} 
                    onChange={(e) => setAddonExpress(e.target.checked)}
                    style={{ accentColor: '#E5C07B', width: '18px', height: '18px' }}
                  />
                  <span>{t.addonExpress}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Dynamic Results Right Panel */}
          <div style={{
            background: '#181A26',
            border: '2px solid #FFFFFF',
            boxShadow: '8px 8px 0px #000000',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between'
          }}>
            <div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '900',
                color: '#E5C07B',
                fontFamily: 'monospace',
                letterSpacing: '1px',
                marginBottom: '20px'
              }}>
                [ROI_SUMMARY_CALCULATION]
              </div>

              {/* Total Investment */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>{t.calcResultViralis}</div>
                <div style={{ fontSize: '2.8rem', fontWeight: '900', color: '#E5C07B', fontFamily: 'monospace' }}>
                  {totalViralisInvestment.toLocaleString()} MDL
                </div>
                {discountRate > 0 && (
                  <div style={{ color: '#22C55E', fontSize: '0.82rem', fontWeight: '800', fontFamily: 'monospace' }}>
                    ✓ {lang === 'ru' ? `Скидка за объём: ${discountRate * 100}%` : `Reducere de volum: ${discountRate * 100}%`}
                  </div>
                )}
              </div>

              {/* Comparison Traditional Agency */}
              <div style={{
                background: '#090A0C',
                padding: '16px',
                border: '1px solid rgba(255,255,255,0.15)',
                marginBottom: '20px'
              }}>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>{t.calcResultAgency}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#EF4444', textDecoration: 'line-through', fontFamily: 'monospace' }}>
                  {traditionalAgencyCost.toLocaleString()} MDL
                </div>
                <div style={{ fontSize: '0.9rem', color: '#22C55E', fontWeight: '800', marginTop: '4px' }}>
                  {t.calcResultSavings} <span style={{ fontFamily: 'monospace' }}>+{netSavings.toLocaleString()} MDL</span>
                </div>
              </div>

              {/* Estimated Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <div style={{ background: '#090A0C', padding: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{t.calcResultLeads}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#FFF', fontFamily: 'monospace' }}>
                    ~{estimatedLeads} {lang === 'ru' ? 'клиентов' : 'clienți'}
                  </div>
                </div>

                <div style={{ background: '#090A0C', padding: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{t.calcResultRoiRatio}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#E5C07B', fontFamily: 'monospace' }}>
                    {roiRatio}x ROI
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#9CA3AF', lineHeight: '1.4', marginBottom: '24px' }}>
                {t.calcUrgencyText}
              </div>
            </div>

            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#E5C07B',
                color: '#000000',
                border: '2px solid #FFFFFF',
                boxShadow: '4px 4px 0px #FFF',
                padding: '16px',
                fontWeight: '900',
                fontSize: '0.9rem',
                textDecoration: 'none',
                textAlign: 'center',
                display: 'block',
                textTransform: 'uppercase'
              }}
            >
              {t.btnBookCalc}
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. TRADITIONAL VS VIRALIS SWISS COMPARISON MATRIX
      ────────────────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '80px 32px',
        borderBottom: '1px solid rgba(255,255,255,0.15)'
      }}>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: '900',
          color: '#E5C07B',
          fontFamily: 'monospace',
          marginBottom: '12px'
        }}>
          {t.matrixTag}
        </div>

        <h2 style={{
          fontSize: '2.8rem',
          fontWeight: '900',
          letterSpacing: '-1px',
          marginBottom: '48px',
          textTransform: 'uppercase'
        }}>
          {t.matrixTitle}
        </h2>

        {/* 60/40 Asymmetric Comparison Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '32px'
        }}>
          {/* Traditional Agency */}
          <div style={{
            background: '#12131A',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            padding: '32px'
          }}>
            <div style={{ fontSize: '0.8rem', color: '#EF4444', fontFamily: 'monospace', fontWeight: '900', marginBottom: '8px' }}>
              [OLD AGENCY MODEL]
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#EF4444', marginBottom: '24px' }}>
              {t.tradTitle}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[t.trad1, t.trad2, t.trad3, t.trad4].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.92rem', color: '#9CA3AF' }}>
                  <X size={18} color="#EF4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VIRALIS Studio */}
          <div style={{
            background: '#161924',
            border: '2px solid #E5C07B',
            boxShadow: '6px 6px 0px #000000',
            padding: '32px'
          }}>
            <div style={{ fontSize: '0.8rem', color: '#E5C07B', fontFamily: 'monospace', fontWeight: '900', marginBottom: '8px' }}>
              [SWISS BRUTALIST MODEL]
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#E5C07B', marginBottom: '24px' }}>
              {t.virTitle}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[t.vir1, t.vir2, t.vir3, t.vir4].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#FFF', fontWeight: '700' }}>
                  <CheckCircle2 size={20} color="#E5C07B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. PORTFOLIO SHOWCASE WITH 9:16 SIMULATOR MODAL
      ────────────────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '80px 32px',
        borderBottom: '1px solid rgba(255,255,255,0.15)'
      }}>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: '900',
          color: '#E5C07B',
          fontFamily: 'monospace',
          marginBottom: '12px'
        }}>
          {t.portfolioTag}
        </div>

        <h2 style={{
          fontSize: '2.8rem',
          fontWeight: '900',
          letterSpacing: '-1px',
          marginBottom: '12px',
          textTransform: 'uppercase'
        }}>
          {t.portfolioTitle}
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: '#9CA3AF',
          marginBottom: '36px'
        }}>
          {t.portfolioSub}
        </p>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {[
            { id: 'all', label: t.catAll },
            { id: 'gastro', label: t.catGastro },
            { id: 'fashion', label: t.catFashion },
            { id: 'services', label: t.catServices },
            { id: 'beauty', label: t.catBeauty }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: activeCategory === cat.id ? '#E5C07B' : '#12141C',
                color: activeCategory === cat.id ? '#000' : '#FFF',
                border: activeCategory === cat.id ? '1px solid #FFF' : '1px solid rgba(255,255,255,0.15)',
                padding: '10px 20px',
                fontWeight: '900',
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontFamily: 'monospace'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {filteredPortfolio.map(item => (
            <div 
              key={item.id}
              onClick={() => setActiveVideoModal(item)}
              style={{
                background: '#13151E',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '4px 4px 0px #000000',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
            >
              {/* Thumbnail Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '133%', // 3:4 aspect ratio
                background: '#090A0C',
                overflow: 'hidden'
              }}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.85
                  }} 
                />
                
                {/* Overlay Play Button */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: '#E5C07B',
                  color: '#000',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  boxShadow: '3px 3px 0px #000'
                }}>
                  <Play size={24} fill="#000" />
                </div>

                {/* Views Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: '#000000',
                  color: '#E5C07B',
                  padding: '4px 10px',
                  fontSize: '0.75rem',
                  fontWeight: '900',
                  fontFamily: 'monospace',
                  border: '1px solid #E5C07B'
                }}>
                  {item.views} {lang === 'ru' ? 'просмотров' : 'vizualizări'}
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: '20px' }}>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', fontFamily: 'monospace', marginBottom: '6px' }}>
                  {item.categoryLabel}
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: '900', marginBottom: '8px' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#22C55E', fontWeight: '800' }}>
                  ✓ {item.clients}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. CLIENT TESTIMONIALS & RESULTS
      ────────────────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '80px 32px',
        borderBottom: '1px solid rgba(255,255,255,0.15)'
      }}>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: '900',
          color: '#E5C07B',
          fontFamily: 'monospace',
          marginBottom: '12px'
        }}>
          {t.testiTag}
        </div>

        <h2 style={{
          fontSize: '2.8rem',
          fontWeight: '900',
          letterSpacing: '-1px',
          marginBottom: '48px',
          textTransform: 'uppercase'
        }}>
          {t.testiTitle}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {[
            {
              author: lang === 'ru' ? 'Виктор (Владелец Gusto Cafe)' : 'Victor (Proprietar Gusto Cafe)',
              text: lang === 'ru' 
                ? '«Заказали пакет из 10 роликов за 5100 MDL. Ролики окупились в первую же неделю. К нам пришли десятки новых гостей!»'
                : '«Am comandat un pachet de 10 clipuri cu 5100 MDL. Clipurile s-au amortizat în prima săptămână. Au venit zeci de oaspeți noi!»',
              metric: '+140,000 Organic Views'
            },
            {
              author: lang === 'ru' ? 'Марина (Основатель Luna Boutique)' : 'Marina (Fondatoare Luna Boutique)',
              text: lang === 'ru'
                ? '«Качество съёмки и удержание потрясающие. Раньше платили агентству 3000 MDL за ролик, с VIRALIS получаем то же самое за 600 MDL!»'
                : '«Calitatea filmării și retenția sunt uimitoare. Înainte plăteam 3000 MDL per clip, cu VIRALIS obținem același lucru cu 600 MDL!»',
              metric: '+38 Sales / Day'
            },
            {
              author: lang === 'ru' ? 'Андрей (SmartHub Service)' : 'Andrei (SmartHub Service)',
              text: lang === 'ru'
                ? '«Оперативность поражает — отсняли в понедельник, во вторник вечером уже выложили 3 готовых видео с крутым звуком.»'
                : '«Operativitatea uimește — am filmat luni, marți seară am postat deja 3 clipuri gata cu sunet excelent.»',
              metric: '48h Turnaround'
            }
          ].map((testi, idx) => (
            <div key={idx} style={{
              background: '#12141D',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '4px 4px 0px #000000',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}>
              <p style={{ fontSize: '0.98rem', color: '#D1D5DB', lineHeight: '1.6', marginBottom: '20px' }}>
                {testi.text}
              </p>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: '900', color: '#E5C07B', fontFamily: 'monospace' }}>
                  {testi.metric}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: '900', marginTop: '4px' }}>
                  {testi.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. FAQ ACCORDION
      ────────────────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '80px 32px',
        borderBottom: '1px solid rgba(255,255,255,0.15)'
      }}>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: '900',
          color: '#E5C07B',
          fontFamily: 'monospace',
          marginBottom: '12px'
        }}>
          {t.faqTag}
        </div>

        <h2 style={{
          fontSize: '2.8rem',
          fontWeight: '900',
          letterSpacing: '-1px',
          marginBottom: '48px',
          textTransform: 'uppercase'
        }}>
          {t.faqTitle}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px' }}>
          {faqList.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                style={{
                  background: '#13151F',
                  border: isOpen ? '1px solid #E5C07B' : '1px solid rgba(255,255,255,0.15)',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    color: '#FFF',
                    fontSize: '1.1rem',
                    fontWeight: '900',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>{item.q}</span>
                  {isOpen ? <ChevronUp size={20} color="#E5C07B" /> : <ChevronDown size={20} color="#9CA3AF" />}
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 24px 24px',
                    fontSize: '0.95rem',
                    color: '#D1D5DB',
                    lineHeight: '1.6',
                    borderTop: '1px dashed rgba(255,255,255,0.1)'
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. FOOTER & STICKY ACTION BAR
      ────────────────────────────────────────────────────────────── */}
      <footer style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '40px 32px 100px',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#E5C07B' }}>VIRALIS MEDIA STUDIO</div>
          <div style={{ fontSize: '0.8rem', color: '#9CA3AF', marginTop: '4px', fontFamily: 'monospace' }}>
            {t.footerRights}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="tel:+37378337228" style={{ color: '#FFF', textDecoration: 'none', fontWeight: '800', fontFamily: 'monospace' }}>
            +373 78 337 228
          </a>
          <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" style={{ color: '#E5C07B', textDecoration: 'none', fontWeight: '800', fontFamily: 'monospace' }}>
            WhatsApp
          </a>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────────
          10. VIDEO PLAYER SIMULATOR MODAL (9:16 RATIO)
      ────────────────────────────────────────────────────────────── */}
      {activeVideoModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#12141D',
            border: '2px solid #E5C07B',
            boxShadow: '10px 10px 0px #000',
            width: '100%',
            maxWidth: '420px',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            padding: '24px'
          }}>
            <button
              onClick={() => setActiveVideoModal(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#E5C07B',
                color: '#000',
                border: 'none',
                width: '32px',
                height: '32px',
                fontWeight: '900',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justify: 'center'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ fontSize: '0.75rem', color: '#E5C07B', fontFamily: 'monospace', marginBottom: '8px' }}>
              [9:16 VIDEO PLAYER SIMULATOR]
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '16px' }}>
              {activeVideoModal.title}
            </h3>

            {/* 9:16 Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              paddingTop: '177%', // 9:16 aspect ratio
              background: '#090A0C',
              marginBottom: '20px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <img 
                src={activeVideoModal.img} 
                alt={activeVideoModal.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(0,0,0,0.85)',
                padding: '12px',
                borderLeft: '3px solid #E5C07B',
                fontSize: '0.82rem',
                color: '#FFF'
              }}>
                <div style={{ fontWeight: '800', color: '#E5C07B' }}>Hook:</div>
                <div>{activeVideoModal.hook}</div>
              </div>
            </div>

            {/* Video Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginBottom: '20px',
              fontFamily: 'monospace',
              fontSize: '0.85rem'
            }}>
              <div style={{ background: '#090A0C', padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#9CA3AF', fontSize: '0.7rem' }}>VIEWS:</div>
                <div style={{ color: '#E5C07B', fontWeight: '900' }}>{activeVideoModal.views}</div>
              </div>
              <div style={{ background: '#090A0C', padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#9CA3AF', fontSize: '0.7rem' }}>RETENTION:</div>
                <div style={{ color: '#FFF', fontWeight: '900' }}>{activeVideoModal.retention}</div>
              </div>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#E5C07B',
                color: '#000',
                width: '100%',
                padding: '14px',
                fontWeight: '900',
                fontSize: '0.9rem',
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center',
                textTransform: 'uppercase',
                border: '1px solid #FFF'
              }}
            >
              {t.ctaBook}
            </a>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          11. LEAD BOOKING MODAL
      ────────────────────────────────────────────────────────────── */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#12141D',
            border: '2px solid #E5C07B',
            boxShadow: '10px 10px 0px #000',
            width: '100%',
            maxWidth: '500px',
            position: 'relative',
            padding: '36px'
          }}>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#E5C07B',
                color: '#000',
                border: 'none',
                width: '32px',
                height: '32px',
                fontWeight: '900',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justify: 'center'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ fontSize: '0.75rem', color: '#E5C07B', fontFamily: 'monospace', marginBottom: '8px' }}>
              [BOOKING_FORM_V6]
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '8px', textTransform: 'uppercase' }}>
              {t.formTitle}
            </h3>

            <p style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '24px' }}>
              {t.formSub}
            </p>

            {isSubmitted ? (
              <div style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid #22C55E',
                color: '#22C55E',
                padding: '20px',
                fontWeight: '800',
                fontSize: '0.95rem'
              }}>
                ✓ {t.formSuccess}
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', marginBottom: '6px' }}>
                    {t.fieldName}
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: '#090A0C',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', marginBottom: '6px' }}>
                    {t.fieldPhone}
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="+373 __ ___ ___"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: '#090A0C',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', marginBottom: '6px' }}>
                    {t.fieldComment}
                  </label>
                  <textarea 
                    rows={3}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: '#090A0C',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      resize: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: '#E5C07B',
                    color: '#000',
                    border: '2px solid #FFF',
                    boxShadow: '4px 4px 0px #FFF',
                    padding: '16px',
                    fontWeight: '900',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    marginTop: '8px',
                    textTransform: 'uppercase'
                  }}
                >
                  {isSubmitting ? '...' : t.btnSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
