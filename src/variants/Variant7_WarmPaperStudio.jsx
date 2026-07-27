import React, { useState, useEffect, useMemo } from 'react';
import {
  Phone,
  MessageCircle,
  Play,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Send,
  Menu,
  X,
  Zap,
  Flame,
  Check,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Eye,
  ArrowUpRight,
  Calculator,
  Award,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  ShieldCheck,
  FileText,
  Star,
  Camera,
  Scissors,
  Film,
  PenTool,
  CheckSquare,
  HelpCircle
} from 'lucide-react';
import { translations as defaultTranslations } from '../data/translations';

// Extended Warm Paper Studio & Kahneman ROI Dictionary (RU & RO)
const dictionary = {
  ru: {
    ...defaultTranslations.ru,
    warmPaper: {
      brandSub: "ARTISAN MEDIA STUDIO",
      heroBadge: "РЕЕМЕСЛЕННОЕ ВИДЕОПРОИЗВОДСТВО & ROI ЛОГИКА КАННЕМАНА",
      mainTitle: "ВИДЕО ДЛЯ БИЗНЕСА ЗА 600 MDL",
      mainTitleSub: "ЭМОЦИИ СИСТЕМЫ 1 + МАТЕМАТИКА СИСТЕМЫ 2",
      subtitle: "Создаем вирусные Reels, TikTok, Shorts и Facebook видео в Кишиневе и Молдове. Объединяем эстетическую красоту крафтового видео с точным расчетом окупаемости.",
      priceTagLabel: "ФИКСИРОВАННЫЙ ТАРИФ",
      priceTagValue: "600 MDL",
      priceTagSub: "за 1 готовый вирусный ролик под ключ",
      slotsText: "Осталось 3 свободных слота на съёмки этой недели",
      videoShowcaseTitle: "ГАЛЕРЕЯ КРАФТОВЫХ РАБОТ 9:16",
      videoShowcaseSub: "Нажмите на видео для просмотра и оценки конверсии",
      categoryAll: "Все работы",
      categoryFood: "Рестораны & Гастрономия",
      categoryFashion: "Fashion & Красота",
      categoryServices: "Услуги & Недвижимость",
      categoryExpert: "Личный Бренд & Эксперты",
      systemTitle: "ДВУХСИСТЕМНАЯ МОДЕЛЬ ДАНИЭЛЯ КАННЕМАНА",
      systemSub: "Почему обычные ролики пролистывают, а видео VIRALIS генерируют постоянный поток клиентов",
      system1Title: "СИСТЕМА 1: Быстрый визуальный импульс (0.5 сек)",
      system1Desc: "Захватываем внимание зрителя в первую полсекунды за счет динамичных крючков, микромимики и нестандартной композиции. Зритель не может пролистнуть.",
      system2Title: "СИСТЕМА 2: Рациональная логика & Окупаемость",
      system2Desc: "Приводим зрителя к целевому действию через понятную ценность. Стоимость ролика в 600 MDL окупается с 1-2 продаж.",
      calcTitle: "КАЛЬКУЛЯТОР ОКУПАЕМОСТИ & РАССЧЕТ ROI",
      calcSub: "Настройте параметры вашего бизнеса и посмотрите точный математический прогноз окупаемости съемок",
      sliderVideos: "Количество роликов в месяц",
      sliderTicket: "Средний чек / LTV клиента (MDL)",
      sliderConv: "Прогнозируемая конверсия в продажу (%)",
      resInvestment: "Инвестиции в контент:",
      resSavings: "Экономия от стандартных агентств (350€):",
      resLeads: "Прогноз квалифицированных лидов:",
      resRoi: "Коэффициент ROI (Возврат на инвестиции):",
      resPayback: "Окупаемость вложений:",
      daysText: "дней",
      packagesTitle: "ТАКТИЛЬНЫЕ ТАРИФНЫЕ ПАКЕТЫ",
      packagesSub: "Честные цены без скрытых наценок. Каждый пакет включает полный цикл производства.",
      lossTitle: "ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР ПОТЕРЬ (LOSS AVERSION)",
      lossSub: "Сколько выручки теряет ваш бизнес каждый месяц без регулярного short-form видеоконтента?",
      lossSlider: "Сколько потенциальных клиентов проходит мимо вас ежемесячно?",
      lossResultText: "Упущенная выручка в месяц:",
      craftTitle: "5 ЭТАПОВ КРАФТОВОГО ПРОИЗВОДСТВА",
      craftSub: "Как мы создаем видео от нейросценария до готовых продаж",
      teamTitle: "НАША РЕМЕСЛЕННАЯ КОМАНДА",
      teamSub: "Живые люди, отвечающие головой и репутацией за каждый отснятый кадр",
      beforeAfterTitle: "СРАВНЕНИЕ ПОДХОДОВ",
      beforeAfterSub: "Обычная съёмка на телефон vs Ремесленное видео VIRALIS за 600 MDL",
      faqTitle: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
      faqSub: "Все о съёмках в Кишиневе, сроках, договоре и гарантиях",
      contactsTitle: "ЗАБРОНИРОВАТЬ СЪЕМКУ ЗА 600 MDL",
      contactsSub: "Оставьте заявку и получите бесплатный аудит вашей ниши и 3 сценария крючков",
      alexRole: "Основатель & Главный Режиссёр",
      alexQuote: "Каждый кадр — это либо эмоция, которая продает, либо потраченная впустую секунда.",
      stanRole: "Креативный Директор & Монтажёр",
      stanQuote: "Нейро-монтаж — это ритм сердца вашего бренда. Мы делаем его безупречным.",
      elenaRole: "Психолог Сценариев & Копирайтер",
      elenaQuote: "Мы пишем сценарии, опираясь на триггеры внимания Системы 1 Каннемана.",
      whatsappBtn: "Написать в WhatsApp",
      callBtn: "Позвонить сейчас",
      modalWatchTitle: "Просмотр ролика VIRALIS Studio",
      modalOrderSimilar: "Заказать ролик за 600 MDL",
      modalViews: "просмотров",
      discountApplied: "Скидка за объем применилась:",
      includedFree: "Включено бесплатно в 600 MDL",
      selectLang: "Язык / Limba",
      modeLight: "Светлая крафтовая бумага",
      modeDark: "Тёмный крафтовый картон",
      formName: "Ваше имя или название компании",
      formPhone: "Ваш телефон (WhatsApp / Telegram)",
      formNiche: "Ваша ниша / Сфера бизнеса",
      formCount: "Желаемое количество роликов",
      formSubmit: "Отправить заявку & Забронировать 600 MDL",
      successMsg: "Заявка успешно отправлена! Мы свяжемся с вами в течение 15 минут.",
      guaranteeTitle: "100% Гарантия ремесленника",
      guaranteeDesc: "Если видео не соответствует согласованному сценарию, мы бесплатно переснимем или смонтируем заново.",
      badgeHandcrafted: "100% Ремесленная работа",
      badgeMoldova: "Сделано в Молдове",
      badgeRoi: "Гарантия ROI Каннемана"
    }
  },
  ro: {
    ...defaultTranslations.ro,
    warmPaper: {
      brandSub: "ARTISAN MEDIA STUDIO",
      heroBadge: "PRODUCȚIE VIDEO ARTIZANALĂ & LOGICA ROI KAHNEMAN",
      mainTitle: "VIDEO PENTRU AFACERI LA 600 MDL",
      mainTitleSub: "EMOȚIILE SISTEMULUI 1 + MATEMATICA SISTEMULUI 2",
      subtitle: "Creăm clipuri virale pentru Reels, TikTok, Shorts și Facebook în Chișinău și Moldova. Combinăm frumusețea estetică a videoclipului artizanal cu calculul precis al rentabilității.",
      priceTagLabel: "TARIF FIX",
      priceTagValue: "600 MDL",
      priceTagSub: "per 1 clip viral complet finisat",
      slotsText: "Au mai rămas 3 locuri libere pentru filmările din această săptămână",
      videoShowcaseTitle: "GALERIE LUCRĂRI ARTIZANALE 9:16",
      videoShowcaseSub: "Apasă pe clip pentru vizionare și evaluarea conversiei",
      categoryAll: "Toate lucrările",
      categoryFood: "Restaurante & Gastronomie",
      categoryFashion: "Fashion & Frumusețe",
      categoryServices: "Servicii & Imobiliare",
      categoryExpert: "Brand Personal & Experți",
      systemTitle: "MODELUL CU DOUĂ SISTEME AL LUI DANIEL KAHNEMAN",
      systemSub: "De ce videoclipurile obișnuite sunt trecute cu vederea, în timp ce clipurile VIRALIS generează un flux constant de clienți",
      system1Title: "SISTEMUL 1: Impuls vizual rapid (0.5 sec)",
      system1Desc: "Captăm atenția privitorului în prima jumătate de secundă datorită cârligelor dinamice, micro-expresiilor și compoziției originale.",
      system2Title: "SISTEMUL 2: Logică rațională & Rentabilitate",
      system2Desc: "Ghidăm privitorul către acțiunea țintă printr-o valoare clară. Costul de 600 MDL per clip se recuperează din 1-2 vânzări.",
      calcTitle: "CALCULATOR RENTABILITATE & ROI",
      calcSub: "Ajustează parametrii afacerii tale și vezi prognoza matematică exactă a recuperării investiției",
      sliderVideos: "Numărul de videoclipuri pe lună",
      sliderTicket: "Bonul mediu / LTV client (MDL)",
      sliderConv: "Conversia estimată în vânzare (%)",
      resInvestment: "Investiție în conținut:",
      resSavings: "Economie față de agențiile standard (350€):",
      resLeads: "Prognoza de lead-uri calificate:",
      resRoi: "Coeficient ROI (Rentabilitate):",
      resPayback: "Recuperarea investiției:",
      daysText: "zile",
      packagesTitle: "PACHETE TACTILE DE PREȚURI",
      packagesSub: "Prețuri cinstite fără taxe ascunse. Fiecare pachet include ciclul complet de producție.",
      lossTitle: "CALCULATOR INTERACTIV DE PIERDERI (LOSS AVERSION)",
      lossSub: "Câte venituri pierde afacerea ta în fiecare lună fără conținut video de scurtă durată regulat?",
      lossSlider: "Câți clienți potențiali trec pe lângă tine în fiecare lună?",
      lossResultText: "Venituri pierdute pe lună:",
      craftTitle: "5 ETAPE DE PRODUCȚIE ARTIZANALĂ",
      craftSub: "Cum creăm videoclipul de la scenariul neuro până la vânzările finale",
      teamTitle: "ECHIPA NOASTRĂ ARTIZANALĂ",
      teamSub: "Oameni reali care răspund de fiecare cadru filmat cu reputația lor",
      beforeAfterTitle: "COMPARAȚIE ABORDĂRI",
      beforeAfterSub: "Filmare simplă cu telefonul vs Video artizanal VIRALIS la 600 MDL",
      faqTitle: "ÎNTREBĂRI FRECVENTE",
      faqSub: "Totul despre filmările în Chișinău, termene, contract și garanții",
      contactsTitle: "REZERVĂ FILMATEA LA 600 MDL",
      contactsSub: "Lase o cerere și primești un audit gratuit al nișei tale plus 3 scenarii de cârlige",
      alexRole: "Fondator & Regizor Principal",
      alexQuote: "Fiecare cadru este fie o emoție care vinde, fie o secundă irosită.",
      stanRole: "Director de Creație & Editor",
      stanQuote: "Montajul neuro este ritmul inimii brandului tău. Îl facem impecabil.",
      elenaRole: "Psiholog Scenarii & Copywriter",
      elenaQuote: "Scriem scenarii bazate pe declanșatorii de atenție ai Sistemului 1 Kahneman.",
      whatsappBtn: "Scrie pe WhatsApp",
      callBtn: "Sună acum",
      modalWatchTitle: "Vizionare clip VIRALIS Studio",
      modalOrderSimilar: "Comandă clip la 600 MDL",
      modalViews: "vizualizări",
      discountApplied: "Reducere de volum aplicată:",
      includedFree: "Inclus gratuit în 600 MDL",
      selectLang: "Limba / Язык",
      modeLight: "Hârtie artizanală deschisă",
      modeDark: "Carton kraft întunecat",
      formName: "Numele tău sau compania",
      formPhone: "Telefon (WhatsApp / Telegram)",
      formNiche: "Nișa ta / Domeniul de activitate",
      formCount: "Numărul dorit de videoclipuri",
      formSubmit: "Trimite cererea & Rezervă 600 MDL",
      successMsg: "Cererea a fost trimisă cu succes! Te vom contacta în 15 minute.",
      guaranteeTitle: "Garanție 100% de artizan",
      guaranteeDesc: "Dacă videoclipul nu corespunde scenariului agreat, îl refilmăm sau îl remontăm gratuit.",
      badgeHandcrafted: "100% Lucru Artizanal",
      badgeMoldova: "Fabricat în Moldova",
      badgeRoi: "Garanție ROI Kahneman"
    }
  }
};

// Video portfolio mock data
const portfolioVideos = [
  {
    id: 1,
    titleRu: "Ресторан 'GastroCraft' — Дегустация Стейка",
    titleRo: "Restaurant 'GastroCraft' — Degustare Steak",
    category: "food",
    thumbnail: "/assets/reel_restaurant.jpg",
    views: "148.5K",
    convRate: "4.8%",
    hookScore: "98/100",
    clientRu: "Мясо подано с дымом и пламенем. За 3 дня брони столов выросли на 40%.",
    clientRo: "Carne servită cu fum și flăcări. În 3 zile rezervările au crescut cu 40%."
  },
  {
    id: 2,
    titleRu: "Fashion Бутик — Осенняя Коллекция Пальто",
    titleRo: "Boutique Fashion — Colecția de Toamnă Paltoane",
    category: "fashion",
    thumbnail: "/assets/reel_fashion.jpg",
    views: "215.2K",
    convRate: "6.2%",
    hookScore: "99/100",
    clientRu: "Динамичный смены луков за 0.3 секунды. Продали 85% коллекции за неделю.",
    clientRo: "Schimbări dinamice de ținute în 0.3 secunde. 85% din colecție vândută într-o săptămână."
  },
  {
    id: 3,
    titleRu: "IT Сервис & Недвижимость — Обзор Апартаментов",
    titleRo: "Serviciu IT & Imobiliare — Prezentare Apartament",
    category: "services",
    thumbnail: "/assets/reel_tech.jpg",
    views: "92.4K",
    convRate: "3.9%",
    hookScore: "95/100",
    clientRu: "Плавные пролёты и акцент на деталях. Получено 42 заявки на просмотр.",
    clientRo: "Cadre fluide și accent pe detalii. 42 de cereri primite pentru vizionare."
  },
  {
    id: 4,
    titleRu: "Личный Бренд — Советы Юриста по Договорам",
    titleRo: "Brand Personal — Sfaturi Avocat Contracte",
    category: "expert",
    thumbnail: "/assets/hero_banner.jpg",
    views: "183.1K",
    convRate: "5.5%",
    hookScore: "97/100",
    clientRu: "Разрушение мифа в первую секунду. +450 подписчиков и 12 платных консультаций.",
    clientRo: "Dărâmarea unui mit în prima secundă. +450 urmăritori și 12 consultații plătite."
  }
];

export default function Variant7_WarmPaperStudio({ lang: propLang = 'ru', setLang: propSetLang }) {
  const [langState, setLangState] = useState(propLang);
  useEffect(() => {
    if (propLang) setLangState(propLang);
  }, [propLang]);
  const lang = propLang || langState;
  const setLang = propSetLang || setLangState;
  const [themeMode, setThemeMode] = useState('light'); // 'light' (Warm Cream Paper) or 'dark' (Warm Kraft Paper)
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [soundOn, setSoundOn] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ROI Calculator states
  const [calcVideos, setCalcVideos] = useState(10);
  const [calcTicket, setCalcTicket] = useState(800);
  const [calcConv, setCalcConv] = useState(3.5);

  // Loss aversion slider
  const [lossTraffic, setLossTraffic] = useState(500);

  // Lead Form States
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formNiche, setFormNiche] = useState('');
  const [formCount, setFormCount] = useState(10);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = dictionary[lang].warmPaper;

  // Multi-calculator math based on Kahneman System 2 ROI logic
  const calcResults = useMemo(() => {
    const basePrice = 600; // MDL
    let discount = 0;
    if (calcVideos >= 20) discount = 0.15;
    else if (calcVideos >= 10) discount = 0.10;
    else if (calcVideos >= 5) discount = 0.05;

    const totalInvestment = Math.round(calcVideos * basePrice * (1 - discount));
    const savingsVsAgency = (calcVideos * 350 * 20.5) - totalInvestment; // Standard agency 350 EUR ~ 7175 MDL per video vs 600 MDL
    
    // Average views per video ~ 12,000 views in Moldova organic + targeted boost
    const totalViews = calcVideos * 12000;
    const estClickRate = 0.025; // 2.5% click/inquiry rate
    const estLeads = Math.round(totalViews * estClickRate);
    const estSales = Math.round(estLeads * (calcConv / 100));
    const estRevenue = Math.round(estSales * calcTicket);
    const roiMultiplier = totalInvestment > 0 ? (estRevenue / totalInvestment).toFixed(1) : '0';
    const paybackDays = estRevenue > 0 ? Math.max(2, Math.round((totalInvestment / estRevenue) * 30)) : 30;

    return {
      totalInvestment,
      savingsVsAgency: Math.max(0, savingsVsAgency),
      totalViews,
      estLeads,
      estSales,
      estRevenue,
      roiMultiplier,
      paybackDays
    };
  }, [calcVideos, calcTicket, calcConv]);

  // Loss aversion formula
  const lossAmount = useMemo(() => {
    // Loss of potential sales without video engagement
    const lostLeads = lossTraffic * 0.15; // 15% missing conversion opportunity
    return Math.round(lostLeads * (calcTicket || 500));
  }, [lossTraffic, calcTicket]);

  const filteredVideos = useMemo(() => {
    if (activeCategory === 'all') return portfolioVideos;
    return portfolioVideos.filter(v => v.category === activeCategory);
  }, [activeCategory]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formPhone.trim()) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 8000);
    }
  };

  // Color variables dependent on themeMode
  const isDark = themeMode === 'dark';
  const paperBg = isDark ? '#2B241F' : '#FAF6F0';
  const cardBg = isDark ? '#382F2A' : '#F3ECE0';
  const cardBorder = isDark ? '#4A3E37' : '#E6DAC3';
  const textColor = isDark ? '#F5EFE6' : '#2A221B';
  const textMuted = isDark ? '#C7B9AC' : '#6E6257';
  const accentTerracotta = '#C85A32';
  const accentGold = '#D49B35';
  const shadowNeumorphic = isDark
    ? '6px 6px 14px rgba(20, 16, 13, 0.6), -4px -4px 10px rgba(65, 54, 47, 0.4)'
    : '6px 6px 16px rgba(190, 172, 148, 0.35), -6px -6px 16px rgba(255, 255, 255, 0.9)';
  const shadowInset = isDark
    ? 'inset 3px 3px 8px rgba(18, 14, 11, 0.6), inset -3px -3px 8px rgba(65, 54, 47, 0.4)'
    : 'inset 3px 3px 8px rgba(180, 160, 135, 0.3), inset -3px -3px 8px rgba(255, 255, 255, 0.8)';

  return (
    <div
      style={{
        backgroundColor: paperBg,
        color: textColor,
        fontFamily: '"Outfit", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        minHeight: '100vh',
        lineHeight: 1.6,
        backgroundImage: isDark
          ? 'radial-gradient(#423730 1px, transparent 1px)'
          : 'radial-gradient(#d8c9b3 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        transition: 'background-color 0.4s ease, color 0.4s ease',
        overflowX: 'hidden'
      }}
    >
      {/* 1. TOP STAMP ANNOUNCEMENT BAR */}
      <div
        style={{
          backgroundColor: isDark ? '#1F1915' : '#EAE0D0',
          borderBottom: `1px solid ${cardBorder}`,
          padding: '8px 16px',
          fontSize: '0.85rem',
          fontWeight: 600,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#4E9F3D',
              boxShadow: '0 0 8px #4E9F3D'
            }}
          />
          <span>{t.slotsText}</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span style={{ color: accentTerracotta, fontWeight: 700 }}>
            600 MDL / video
          </span>
        </div>

        {/* Language & Theme Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* RU / RO Toggle */}
          <div
            style={{
              display: 'inline-flex',
              backgroundColor: cardBg,
              borderRadius: '20px',
              padding: '2px',
              boxShadow: shadowInset
            }}
          >
            <button
              onClick={() => setLang('ru')}
              style={{
                padding: '4px 10px',
                borderRadius: '16px',
                border: 'none',
                backgroundColor: lang === 'ru' ? accentTerracotta : 'transparent',
                color: lang === 'ru' ? '#FFF' : textMuted,
                fontWeight: 700,
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              RU
            </button>
            <button
              onClick={() => setLang('ro')}
              style={{
                padding: '4px 10px',
                borderRadius: '16px',
                border: 'none',
                backgroundColor: lang === 'ro' ? accentTerracotta : 'transparent',
                color: lang === 'ro' ? '#FFF' : textMuted,
                fontWeight: 700,
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              RO
            </button>
          </div>

          {/* Theme Mode Button */}
          <button
            onClick={() => setThemeMode(isDark ? 'light' : 'dark')}
            title={isDark ? t.modeLight : t.modeDark}
            style={{
              background: 'none',
              border: `1px solid ${cardBorder}`,
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: textColor,
              cursor: 'pointer'
            }}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </div>

      {/* 2. ARTISAN HEADER & NAVIGATION */}
      <header
        style={{
          sticky: 'top',
          top: 0,
          zIndex: 100,
          backgroundColor: paperBg,
          borderBottom: `2px dashed ${cardBorder}`,
          backdropFilter: 'blur(8px)',
          padding: '16px 24px'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: accentTerracotta,
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: shadowNeumorphic,
                transform: 'rotate(-3deg)',
                fontWeight: 900,
                fontSize: '1.2rem'
              }}
            >
              V
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.5px' }}>
                VIRALIS <span style={{ color: accentTerracotta, fontSize: '0.9rem', fontWeight: 600 }}>STUDIO</span>
              </div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', color: textMuted }}>
                {t.brandSub}
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', gap: '20px', alignItems: 'center' }} className="desktop-nav">
            <a href="#showcase" style={{ color: textColor, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              {dictionary[lang].nav.portfolio}
            </a>
            <a href="#kahneman" style={{ color: textColor, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              {t.systemTitle.split(':')[0]}
            </a>
            <a href="#calculator" style={{ color: textColor, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              {dictionary[lang].nav.calculator}
            </a>
            <a href="#packages" style={{ color: textColor, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              {dictionary[lang].nav.pricing}
            </a>
            <a href="#team" style={{ color: textColor, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              {dictionary[lang].nav.team}
            </a>
            <a href="#faq" style={{ color: textColor, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
              {dictionary[lang].nav.faq}
            </a>
          </nav>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="https://wa.me/37360000000"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 16px',
                borderRadius: '12px',
                backgroundColor: cardBg,
                color: textColor,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.85rem',
                boxShadow: shadowNeumorphic,
                border: `1px solid ${cardBorder}`
              }}
            >
              <MessageCircle size={16} color="#25D366" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+37360000000"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 18px',
                borderRadius: '12px',
                backgroundColor: accentTerracotta,
                color: '#FFF',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.85rem',
                boxShadow: shadowNeumorphic
              }}
            >
              <Phone size={16} />
              <span>+373 (60) 00-00-00</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: textColor,
                cursor: 'pointer'
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '16px 0 8px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              borderTop: `1px solid ${cardBorder}`,
              marginTop: '12px'
            }}
          >
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: textColor, textDecoration: 'none', fontWeight: 600 }}
            >
              {dictionary[lang].nav.portfolio}
            </a>
            <a
              href="#kahneman"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: textColor, textDecoration: 'none', fontWeight: 600 }}
            >
              {t.systemTitle.split(':')[0]}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: textColor, textDecoration: 'none', fontWeight: 600 }}
            >
              {dictionary[lang].nav.calculator}
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: textColor, textDecoration: 'none', fontWeight: 600 }}
            >
              {dictionary[lang].nav.pricing}
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: textColor, textDecoration: 'none', fontWeight: 600 }}
            >
              {dictionary[lang].nav.team}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: textColor, textDecoration: 'none', fontWeight: 600 }}
            >
              {dictionary[lang].nav.faq}
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (Warm Paper & Human Editorial + Kahneman Impulse) */}
      <section style={{ padding: '60px 24px 40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
          
          {/* Hero Left Text Column */}
          <div>
            {/* Organic Hand-Stamped Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '20px',
                backgroundColor: cardBg,
                border: `1.5px dashed ${accentTerracotta}`,
                color: accentTerracotta,
                fontWeight: 700,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '20px',
                boxShadow: shadowNeumorphic
              }}
            >
              <Award size={16} />
              <span>{t.heroBadge}</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                margin: '0 0 16px 0',
                letterSpacing: '-0.5px'
              }}
            >
              {t.mainTitle} <br />
              <span
                style={{
                  color: accentTerracotta,
                  position: 'relative',
                  display: 'inline-block',
                  borderBottom: `3px solid ${accentGold}`
                }}
              >
                {t.mainTitleSub}
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                color: textMuted,
                marginBottom: '28px',
                maxWidth: '560px'
              }}
            >
              {t.subtitle}
            </p>

            {/* Human Editorial Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '32px'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  backgroundColor: cardBg,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  boxShadow: shadowNeumorphic
                }}
              >
                <CheckCircle2 size={15} color={accentTerracotta} />
                <span>{t.badgeHandcrafted}</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  backgroundColor: cardBg,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  boxShadow: shadowNeumorphic
                }}
              >
                <CheckCircle2 size={15} color={accentTerracotta} />
                <span>{t.badgeMoldova}</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  backgroundColor: cardBg,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  boxShadow: shadowNeumorphic
                }}
              >
                <CheckCircle2 size={15} color={accentTerracotta} />
                <span>{t.badgeRoi}</span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <a
                href="#contacts"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '16px 32px',
                  borderRadius: '14px',
                  backgroundColor: accentTerracotta,
                  color: '#FFF',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  boxShadow: shadowNeumorphic,
                  transition: 'transform 0.2s ease',
                  border: 'none'
                }}
              >
                <span>{dictionary[lang].hero.btnOrder}</span>
                <ArrowUpRight size={20} />
              </a>

              <a
                href="#calculator"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '16px 28px',
                  borderRadius: '14px',
                  backgroundColor: cardBg,
                  color: textColor,
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  boxShadow: shadowNeumorphic,
                  border: `1.5px solid ${cardBorder}`
                }}
              >
                <Calculator size={18} color={accentGold} />
                <span>{t.calcTitle.split('&')[0]}</span>
              </a>
            </div>
          </div>

          {/* Hero Right Visual Card (Tactile Warm Paper Frame) */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                backgroundColor: cardBg,
                borderRadius: '24px',
                padding: '24px',
                boxShadow: shadowNeumorphic,
                border: `2px solid ${cardBorder}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Moldovan Craft Stamp */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  border: `2px dashed ${accentTerracotta}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(12deg)',
                  backgroundColor: paperBg,
                  color: accentTerracotta,
                  fontSize: '0.65rem',
                  fontWeight: 900,
                  textAlign: 'center',
                  lineHeight: 1.1,
                  boxShadow: shadowNeumorphic,
                  zIndex: 2
                }}
              >
                <span>SEAL OF</span>
                <span style={{ fontSize: '0.75rem' }}>600 MDL</span>
                <span>QUALITY</span>
              </div>

              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '9/14',
                  maxHeight: '440px',
                  boxShadow: shadowInset,
                  backgroundImage: 'url("/assets/hero_banner.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
                  }}
                />

                <div style={{ position: 'relative', zIndex: 3, color: '#FFF' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: accentTerracotta,
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      marginBottom: '8px'
                    }}
                  >
                    <Flame size={14} />
                    <span>VIRALIS CRAFT REEL</span>
                  </div>

                  <h3 style={{ margin: '0 0 6px 0', fontSize: '1.2rem', fontWeight: 800 }}>
                    {t.mainTitleSub}
                  </h3>

                  <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9 }}>
                    4K Cinematic • Dynamic Audio • Native Subtitles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '50px'
          }}
        >
          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              backgroundColor: cardBg,
              boxShadow: shadowNeumorphic,
              border: `1px solid ${cardBorder}`,
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: accentTerracotta }}>600 MDL</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textMuted }}>{t.priceTagLabel}</div>
          </div>

          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              backgroundColor: cardBg,
              boxShadow: shadowNeumorphic,
              border: `1px solid ${cardBorder}`,
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: accentGold }}>0.5 sec</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textMuted }}>
              {lang === 'ru' ? 'Захват внимания (Hook)' : 'Captare atenție (Hook)'}
            </div>
          </div>

          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              backgroundColor: cardBg,
              boxShadow: shadowNeumorphic,
              border: `1px solid ${cardBorder}`,
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: accentTerracotta }}>x4.2</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textMuted }}>
              {lang === 'ru' ? 'Средний ROI клиентов' : 'ROI mediu clienți'}
            </div>
          </div>

          <div
            style={{
              padding: '20px',
              borderRadius: '16px',
              backgroundColor: cardBg,
              boxShadow: shadowNeumorphic,
              border: `1px solid ${cardBorder}`,
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: accentGold }}>24-48h</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: textMuted }}>
              {dictionary[lang].hero.stat3Label}
            </div>
          </div>
        </div>
      </section>

      {/* 4. KAHNEMAN DUAL-SYSTEM ROI & VALUE BREAKDOWN */}
      <section id="kahneman" style={{ padding: '70px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '16px',
              backgroundColor: cardBg,
              color: accentGold,
              fontSize: '0.8rem',
              fontWeight: 700,
              boxShadow: shadowNeumorphic,
              marginBottom: '12px'
            }}
          >
            <Sparkles size={16} />
            <span>NEURO-PSYCHOLOGY OF SHORT-FORM</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, margin: '0 0 12px 0' }}>
            {t.systemTitle}
          </h2>

          <p style={{ fontSize: '1rem', color: textMuted, margin: 0 }}>
            {t.systemSub}
          </p>
        </div>

        {/* Dual Card Comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* System 1 Card */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '20px',
              padding: '32px',
              boxShadow: shadowNeumorphic,
              border: `2px solid ${accentTerracotta}`,
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor: accentTerracotta,
                color: '#FFF',
                fontWeight: 800,
                fontSize: '0.85rem',
                marginBottom: '16px'
              }}
            >
              <Zap size={18} />
              <span>SYSTEM 1 (IMPULSE)</span>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 12px 0' }}>
              {t.system1Title}
            </h3>

            <p style={{ color: textMuted, marginBottom: '20px', fontSize: '0.95rem' }}>
              {t.system1Desc}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} color={accentTerracotta} />
                <span>{lang === 'ru' ? 'Первые 0.5с: Паттерн-интеррапт (срыв скролла)' : 'Primele 0.5s: Oprire din scroll'}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} color={accentTerracotta} />
                <span>{lang === 'ru' ? 'Микромимика и быстрая смена ракурсов каждые 1.2с' : 'Micro-expresii și cadre dinamice la 1.2s'}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} color={accentTerracotta} />
                <span>{lang === 'ru' ? 'Тактильный саунд-дизайн и шуршание звуков' : 'Sound-design tactil și efectе sonore'}</span>
              </li>
            </ul>
          </div>

          {/* System 2 Card */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '20px',
              padding: '32px',
              boxShadow: shadowNeumorphic,
              border: `2px solid ${accentGold}`,
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor: accentGold,
                color: '#FFF',
                fontWeight: 800,
                fontSize: '0.85rem',
                marginBottom: '16px'
              }}
            >
              <Target size={18} />
              <span>SYSTEM 2 (RATIONAL MATH)</span>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 12px 0' }}>
              {t.system2Title}
            </h3>

            <p style={{ color: textMuted, marginBottom: '20px', fontSize: '0.95rem' }}>
              {t.system2Desc}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} color={accentGold} />
                <span>{lang === 'ru' ? 'Честный фиксированный ценник 600 MDL под ключ' : 'Preț fix cinstit 600 MDL la cheie'}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} color={accentGold} />
                <span>{lang === 'ru' ? 'Окупаемость уже после 1-й заключенной сделки' : 'Recuperare după prima tranzacție'}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} color={accentGold} />
                <span>{lang === 'ru' ? 'Прозрачный расчет бюджета без скрытых платежей' : 'Calcul transparent de buget fără costuri ascunse'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. TACTILE 9:16 VIDEO SHOWCASE GALLERY */}
      <section id="showcase" style={{ padding: '70px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '16px',
              backgroundColor: cardBg,
              color: accentTerracotta,
              fontSize: '0.8rem',
              fontWeight: 700,
              boxShadow: shadowNeumorphic,
              marginBottom: '12px'
            }}
          >
            <Film size={16} />
            <span>VERTICAL 9:16 GALLERY</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, margin: '0 0 8px 0' }}>
            {t.videoShowcaseTitle}
          </h2>
          <p style={{ color: textMuted, margin: 0, fontSize: '0.95rem' }}>
            {t.videoShowcaseSub}
          </p>

          {/* Category Filter Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '28px'
            }}
          >
            {[
              { id: 'all', label: t.categoryAll },
              { id: 'food', label: t.categoryFood },
              { id: 'fashion', label: t.categoryFashion },
              { id: 'services', label: t.categoryServices },
              { id: 'expert', label: t.categoryExpert }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '12px',
                  border: `1.5px solid ${activeCategory === cat.id ? accentTerracotta : cardBorder}`,
                  backgroundColor: activeCategory === cat.id ? accentTerracotta : cardBg,
                  color: activeCategory === cat.id ? '#FFF' : textColor,
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: shadowNeumorphic,
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
          {filteredVideos.map(vid => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid)}
              style={{
                backgroundColor: cardBg,
                borderRadius: '18px',
                padding: '16px',
                boxShadow: shadowNeumorphic,
                border: `1px solid ${cardBorder}`,
                cursor: 'pointer',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '9/16',
                  backgroundImage: `url(${vid.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '14px'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.85) 100%)'
                  }}
                />

                {/* Top Metrics overlay */}
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      padding: '4px 8px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(0,0,0,0.65)',
                      color: '#FFF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Eye size={12} />
                    {vid.views}
                  </span>

                  <span
                    style={{
                      padding: '4px 8px',
                      borderRadius: '6px',
                      backgroundColor: accentTerracotta,
                      color: '#FFF',
                      fontSize: '0.75rem',
                      fontWeight: 800
                    }}
                  >
                    CR {vid.convRate}
                  </span>
                </div>

                {/* Center Play Button */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    alignSelf: 'center',
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: accentTerracotta,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <Play size={24} style={{ marginLeft: '3px' }} />
                </div>

                {/* Bottom Video Meta */}
                <div style={{ position: 'relative', zIndex: 2, color: '#FFF' }}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: 800, lineHeight: 1.2 }}>
                    {lang === 'ru' ? vid.titleRu : vid.titleRo}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.78rem', opacity: 0.85, lineHeight: 1.3 }}>
                    {lang === 'ru' ? vid.clientRu : vid.clientRo}
                  </p>
                </div>
              </div>

              {/* Action bar below thumbnail */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '12px',
                  paddingTop: '8px',
                  borderTop: `1px dashed ${cardBorder}`
                }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: textMuted }}>
                  Hook Retention: <strong style={{ color: accentTerracotta }}>{vid.hookScore}</strong>
                </span>

                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: accentTerracotta,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}
                >
                  600 MDL <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INTERACTIVE KAHNEMAN ROI & PAYBACK CALCULATOR */}
      <section id="calculator" style={{ padding: '70px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: cardBg,
            borderRadius: '24px',
            padding: '36px',
            boxShadow: shadowNeumorphic,
            border: `2px solid ${cardBorder}`
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 36px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '16px',
                backgroundColor: paperBg,
                color: accentTerracotta,
                fontSize: '0.8rem',
                fontWeight: 700,
                boxShadow: shadowNeumorphic,
                marginBottom: '10px'
              }}
            >
              <Calculator size={16} />
              <span>SYSTEM 2 CALCULATOR</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 900, margin: '0 0 10px 0' }}>
              {t.calcTitle}
            </h2>

            <p style={{ color: textMuted, margin: 0, fontSize: '0.95rem' }}>
              {t.calcSub}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            
            {/* Left Sliders */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Slider 1: Videos */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem' }}>
                  <span>{t.sliderVideos}</span>
                  <span style={{ color: accentTerracotta, fontSize: '1.1rem', fontWeight: 900 }}>{calcVideos}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={calcVideos}
                  onChange={(e) => setCalcVideos(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: accentTerracotta,
                    cursor: 'pointer'
                  }}
                />
              </div>

              {/* Slider 2: Ticket */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem' }}>
                  <span>{t.sliderTicket}</span>
                  <span style={{ color: accentGold, fontSize: '1.1rem', fontWeight: 900 }}>{calcTicket} MDL</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={calcTicket}
                  onChange={(e) => setCalcTicket(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: accentGold,
                    cursor: 'pointer'
                  }}
                />
              </div>

              {/* Slider 3: Conversion */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem' }}>
                  <span>{t.sliderConv}</span>
                  <span style={{ color: accentTerracotta, fontSize: '1.1rem', fontWeight: 900 }}>{calcConv}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={calcConv}
                  onChange={(e) => setCalcConv(parseFloat(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: accentTerracotta,
                    cursor: 'pointer'
                  }}
                />
              </div>

              {calcVideos >= 10 && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    backgroundColor: isDark ? '#261F1A' : '#EAE0D0',
                    color: accentTerracotta,
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Sparkles size={16} />
                  <span>{t.discountApplied} {calcVideos >= 20 ? '15%' : '10%'}</span>
                </div>
              )}
            </div>

            {/* Right Output Panel */}
            <div
              style={{
                backgroundColor: paperBg,
                borderRadius: '20px',
                padding: '28px',
                boxShadow: shadowInset,
                border: `1.5px solid ${cardBorder}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '18px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px dashed ${cardBorder}`, paddingBottom: '10px' }}>
                <span style={{ fontSize: '0.9rem', color: textMuted, fontWeight: 600 }}>{t.resInvestment}</span>
                <span style={{ fontSize: '1.3rem', fontWeight: 900, color: textColor }}>{calcResults.totalInvestment.toLocaleString()} MDL</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px dashed ${cardBorder}`, paddingBottom: '10px' }}>
                <span style={{ fontSize: '0.9rem', color: textMuted, fontWeight: 600 }}>{t.resSavings}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#4E9F3D' }}>+{calcResults.savingsVsAgency.toLocaleString()} MDL</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px dashed ${cardBorder}`, paddingBottom: '10px' }}>
                <span style={{ fontSize: '0.9rem', color: textMuted, fontWeight: 600 }}>{t.resLeads}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: accentGold }}>~{calcResults.estLeads} leads</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px dashed ${cardBorder}`, paddingBottom: '10px' }}>
                <span style={{ fontSize: '0.9rem', color: textMuted, fontWeight: 600 }}>{t.resRoi}</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: accentTerracotta }}>{calcResults.roiMultiplier}x ROI</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: textMuted, fontWeight: 600 }}>{t.resPayback}</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 900, color: textColor }}>~{calcResults.paybackDays} {t.daysText}</span>
              </div>

              <a
                href="#contacts"
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px',
                  borderRadius: '12px',
                  backgroundColor: accentTerracotta,
                  color: '#FFF',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  boxShadow: shadowNeumorphic
                }}
              >
                <span>{dictionary[lang].hero.btnOrder}</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LOSS AVERSION CALCULATOR (Cost of Inaction) */}
      <section style={{ padding: '50px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: isDark ? '#3D251D' : '#FCEFE9',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: shadowNeumorphic,
            border: `2px dashed ${accentTerracotta}`
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: accentTerracotta,
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <TrendingUp size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 800, color: accentTerracotta }}>
                {t.lossTitle}
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: textMuted }}>
                {t.lossSub}
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', alignItems: 'center', marginTop: '20px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem' }}>
                <span>{t.lossSlider}</span>
                <span style={{ fontWeight: 900, color: accentTerracotta }}>{lossTraffic} {lang === 'ru' ? 'чел/мес' : 'pers/lună'}</span>
              </div>
              <input
                type="range"
                min="100"
                max="3000"
                step="100"
                value={lossTraffic}
                onChange={(e) => setLossTraffic(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: accentTerracotta, cursor: 'pointer' }}
              />
            </div>

            <div
              style={{
                padding: '20px',
                borderRadius: '14px',
                backgroundColor: paperBg,
                boxShadow: shadowInset,
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '0.85rem', color: textMuted, fontWeight: 600 }}>{t.lossResultText}</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: accentTerracotta, marginTop: '4px' }}>
                -{lossAmount.toLocaleString()} MDL
              </div>
              <div style={{ fontSize: '0.78rem', color: textMuted, marginTop: '4px' }}>
                {lang === 'ru' ? '*При замене текстовых постов на короткие ролики за 600 MDL' : '*Prin înlocuirea postărilor text cu clipuri de 600 MDL'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ARTISAN PROCESS WORKFLOW (5-Step Paper Trail) */}
      <section style={{ padding: '70px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 900, margin: '0 0 8px 0' }}>
            {t.craftTitle}
          </h2>
          <p style={{ color: textMuted, margin: 0, fontSize: '0.95rem' }}>
            {t.craftSub}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '20px' }}>
          {[
            { step: '01', titleRu: 'Психологический Сценарий', titleRo: 'Scenariu Psihologic', icon: PenTool, descRu: 'Анализ триггеров внимания Системы 1', descRo: 'Analiza declanșatorilor de atenție' },
            { step: '02', titleRu: 'Крафтовая Съёмка 4K', titleRo: 'Filmare Artizanală 4K', icon: Camera, descRu: 'Свет, звук и ракурсы на вашей локации', descRo: 'Lumină, sunet și cadre la locația ta' },
            { step: '03', titleRu: 'Нейро-Монтаж & Динамика', titleRo: 'Montaj Neuro & Dinamică', icon: Scissors, descRu: 'Смена кадров 1.2с и срыв скролла', descRo: 'Schimbări de cadre la 1.2s' },
            { step: '04', titleRu: 'Двуязычные Субтитры', titleRo: 'Subtitrări Bilingve', icon: FileText, descRu: 'Профессиональный чистый перевод RU/RO', descRo: 'Traducere curată și adaptată RU/RO' },
            { step: '05', titleRu: 'Выгрузка & Оптимизация', titleRo: 'Export & Optimizare', icon: CheckSquare, descRu: 'Готовые видео под алгоритмы TikTok/Reels', descRo: 'Clipuri gata pentru algoritmi' }
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: cardBg,
                  borderRadius: '16px',
                  padding: '24px 20px',
                  boxShadow: shadowNeumorphic,
                  border: `1px solid ${cardBorder}`,
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '16px',
                    fontSize: '1.6rem',
                    fontWeight: 900,
                    color: accentTerracotta,
                    opacity: 0.25
                  }}
                >
                  {item.step}
                </div>

                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: paperBg,
                    color: accentTerracotta,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                    boxShadow: shadowInset
                  }}
                >
                  <IconComp size={22} />
                </div>

                <h4 style={{ margin: '0 0 6px 0', fontSize: '1rem', fontWeight: 800 }}>
                  {lang === 'ru' ? item.titleRu : item.titleRo}
                </h4>

                <p style={{ margin: 0, fontSize: '0.82rem', color: textMuted }}>
                  {lang === 'ru' ? item.descRu : item.descRo}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. ARTISAN TEAM (Human Editorial Touch) */}
      <section id="team" style={{ padding: '70px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '16px',
              backgroundColor: cardBg,
              color: accentTerracotta,
              fontSize: '0.8rem',
              fontWeight: 700,
              boxShadow: shadowNeumorphic,
              marginBottom: '10px'
            }}
          >
            <Users size={16} />
            <span>HUMAN CRAFTSMEN</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 900, margin: '0 0 8px 0' }}>
            {t.teamTitle}
          </h2>
          <p style={{ color: textMuted, margin: 0, fontSize: '0.95rem' }}>
            {t.teamSub}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {/* Alex */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '20px',
              padding: '28px',
              boxShadow: shadowNeumorphic,
              border: `1px solid ${cardBorder}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <img
              src="/assets/team_alexander.jpg"
              alt="Alexander"
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: `3px solid ${accentTerracotta}`,
                boxShadow: shadowNeumorphic,
                marginBottom: '16px'
              }}
            />
            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.25rem', fontWeight: 800 }}>
              {lang === 'ru' ? 'Александр' : 'Alexandru'}
            </h3>
            <div style={{ color: accentTerracotta, fontSize: '0.85rem', fontWeight: 700, marginBottom: '14px' }}>
              {t.alexRole}
            </div>
            <p style={{ fontStyle: 'italic', color: textMuted, fontSize: '0.9rem', margin: 0 }}>
              "{t.alexQuote}"
            </p>
          </div>

          {/* Stan */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '20px',
              padding: '28px',
              boxShadow: shadowNeumorphic,
              border: `1px solid ${cardBorder}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <img
              src="/assets/team_stanislav.jpg"
              alt="Stanislav"
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: `3px solid ${accentGold}`,
                boxShadow: shadowNeumorphic,
                marginBottom: '16px'
              }}
            />
            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.25rem', fontWeight: 800 }}>
              {lang === 'ru' ? 'Станислав' : 'Stanislav'}
            </h3>
            <div style={{ color: accentGold, fontSize: '0.85rem', fontWeight: 700, marginBottom: '14px' }}>
              {t.stanRole}
            </div>
            <p style={{ fontStyle: 'italic', color: textMuted, fontSize: '0.9rem', margin: 0 }}>
              "{t.stanQuote}"
            </p>
          </div>

          {/* Elena */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '20px',
              padding: '28px',
              boxShadow: shadowNeumorphic,
              border: `1px solid ${cardBorder}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                backgroundColor: paperBg,
                color: accentTerracotta,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `3px solid ${accentTerracotta}`,
                boxShadow: shadowNeumorphic,
                marginBottom: '16px',
                fontWeight: 900,
                fontSize: '1.8rem'
              }}
            >
              E
            </div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '1.25rem', fontWeight: 800 }}>
              {lang === 'ru' ? 'Елена' : 'Elena'}
            </h3>
            <div style={{ color: accentTerracotta, fontSize: '0.85rem', fontWeight: 700, marginBottom: '14px' }}>
              {t.elenaRole}
            </div>
            <p style={{ fontStyle: 'italic', color: textMuted, fontSize: '0.9rem', margin: 0 }}>
              "{t.elenaQuote}"
            </p>
          </div>
        </div>

        {/* Artisan Craft Guarantee Badge */}
        <div
          style={{
            marginTop: '40px',
            backgroundColor: cardBg,
            borderRadius: '16px',
            padding: '24px',
            border: `2px dashed ${cardBorder}`,
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            boxShadow: shadowNeumorphic,
            flexWrap: 'wrap'
          }}
        >
          <ShieldCheck size={40} color={accentTerracotta} style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', fontWeight: 800 }}>
              {t.guaranteeTitle}
            </h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: textMuted }}>
              {t.guaranteeDesc}
            </p>
          </div>
        </div>
      </section>

      {/* 10. TACTILE NEUMORPHIC PRICING PACKAGES */}
      <section id="packages" style={{ padding: '70px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '16px',
              backgroundColor: cardBg,
              color: accentGold,
              fontSize: '0.8rem',
              fontWeight: 700,
              boxShadow: shadowNeumorphic,
              marginBottom: '10px'
            }}
          >
            <Star size={16} />
            <span>TRANSPARENT PRICING</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 900, margin: '0 0 8px 0' }}>
            {t.packagesTitle}
          </h2>
          <p style={{ color: textMuted, margin: 0, fontSize: '0.95rem' }}>
            {t.packagesSub}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {/* Pack 1 */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '20px',
              padding: '32px',
              boxShadow: shadowNeumorphic,
              border: `1px solid ${cardBorder}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: textMuted, textTransform: 'uppercase' }}>
                {lang === 'ru' ? 'МИНИ ТЕСТ' : 'MINI TEST'}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '6px 0 12px 0' }}>
                5 Videos Pack
              </h3>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: accentTerracotta, marginBottom: '20px' }}>
                3,000 MDL
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <Check size={16} color={accentTerracotta} />
                  <span>5 роликов по 600 MDL</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <Check size={16} color={accentTerracotta} />
                  <span>Сценарии + Съёмка + Монтаж</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <Check size={16} color={accentTerracotta} />
                  <span>Субтитры RU/RO</span>
                </li>
              </ul>
            </div>

            <a
              href="#contacts"
              onClick={() => setFormCount(5)}
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '14px',
                borderRadius: '12px',
                backgroundColor: paperBg,
                color: textColor,
                textDecoration: 'none',
                fontWeight: 800,
                boxShadow: shadowInset
              }}
            >
              {dictionary[lang].hero.btnOrder}
            </a>
          </div>

          {/* Pack 2 (Best Seller) */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '20px',
              padding: '32px',
              boxShadow: shadowNeumorphic,
              border: `2.5px solid ${accentTerracotta}`,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: accentTerracotta,
                color: '#FFF',
                padding: '4px 16px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: 900,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: shadowNeumorphic
              }}
            >
              {lang === 'ru' ? 'ХИТ ПРОДАЖ (10+1 БЕСПЛАТНО)' : 'CEL MAI VÂNDUT (10+1 GRATUIT)'}
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: accentTerracotta, textTransform: 'uppercase', marginTop: '10px' }}>
                {lang === 'ru' ? 'РОСТ И РОИ' : 'CREȘTERE & ROI'}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '6px 0 12px 0' }}>
                10 Videos + 1 FREE
              </h3>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: accentTerracotta, marginBottom: '20px' }}>
                6,000 MDL
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 700 }}>
                  <Check size={16} color={accentTerracotta} />
                  <span>11 роликов (545 MDL / ролик)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <Check size={16} color={accentTerracotta} />
                  <span>Полное сопровождение SMM</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <Check size={16} color={accentTerracotta} />
                  <span>Аудио саунд-дизайн премиум</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <Check size={16} color={accentTerracotta} />
                  <span>Приоритетная сдача за 24 часа</span>
                </li>
              </ul>
            </div>

            <a
              href="#contacts"
              onClick={() => setFormCount(10)}
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: accentTerracotta,
                color: '#FFF',
                textDecoration: 'none',
                fontWeight: 900,
                boxShadow: shadowNeumorphic
              }}
            >
              {dictionary[lang].hero.btnOrder}
            </a>
          </div>

          {/* Pack 3 */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '20px',
              padding: '32px',
              boxShadow: shadowNeumorphic,
              border: `1px solid ${cardBorder}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: textMuted, textTransform: 'uppercase' }}>
                {lang === 'ru' ? 'ДОМИНИРОВАНИЕ' : 'DOMINARE'}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '6px 0 12px 0' }}>
                20 Videos + 3 FREE
              </h3>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: accentGold, marginBottom: '20px' }}>
                12,000 MDL
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <Check size={16} color={accentGold} />
                  <span>23 ролика (521 MDL / ролик)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <Check size={16} color={accentGold} />
                  <span>Выездные съёмки по всей Молдове</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <Check size={16} color={accentGold} />
                  <span>Настройка таргета Meta / TikTok</span>
                </li>
              </ul>
            </div>

            <a
              href="#contacts"
              onClick={() => setFormCount(20)}
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '14px',
                borderRadius: '12px',
                backgroundColor: paperBg,
                color: textColor,
                textDecoration: 'none',
                fontWeight: 800,
                boxShadow: shadowInset
              }}
            >
              {dictionary[lang].hero.btnOrder}
            </a>
          </div>
        </div>
      </section>

      {/* 11. BEFORE / AFTER COMPARISON MATRIX */}
      <section style={{ padding: '70px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 900, margin: '0 0 8px 0' }}>
            {t.beforeAfterTitle}
          </h2>
          <p style={{ color: textMuted, margin: 0, fontSize: '0.95rem' }}>
            {t.beforeAfterSub}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {/* Amateur Video */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '20px',
              padding: '28px',
              boxShadow: shadowInset,
              border: `1.5px solid ${cardBorder}`,
              opacity: 0.85
            }}
          >
            <div style={{ color: '#D9534F', fontWeight: 800, fontSize: '0.9rem', marginBottom: '10px', textTransform: 'uppercase' }}>
              ❌ {dictionary[lang].beforeAfter.beforeTitle}
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ fontSize: '0.9rem', color: textMuted }}>• Без чёткого сценария и крючка внимание теряется за 1 секунду</li>
              <li style={{ fontSize: '0.9rem', color: textMuted }}>• Плохой звук и эхо — зритель мгновенно закрывает видео</li>
              <li style={{ fontSize: '0.9rem', color: textMuted }}>• Нет понимания целевой аудитории и СТА в конце</li>
              <li style={{ fontSize: '0.9rem', color: textMuted }}>• Стоимость у агентств от 300€ без гарантий окупаемости</li>
            </ul>
          </div>

          {/* VIRALIS Video */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '20px',
              padding: '28px',
              boxShadow: shadowNeumorphic,
              border: `2px solid ${accentTerracotta}`
            }}
          >
            <div style={{ color: accentTerracotta, fontWeight: 900, fontSize: '0.9rem', marginBottom: '10px', textTransform: 'uppercase' }}>
              ✅ {dictionary[lang].beforeAfter.afterTitle} (600 MDL)
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ fontSize: '0.9rem', fontWeight: 600 }}>• Крючок 0.5с Системы 1 Каннемана останавливает скролл</li>
              <li style={{ fontSize: '0.9rem', fontWeight: 600 }}>• Чистейший студийный петличный звук и саунд-дизайн</li>
              <li style={{ fontSize: '0.9rem', fontWeight: 600 }}>• Прозрачные выгоды Системы 2 приведут зрителя к покупке</li>
              <li style={{ fontSize: '0.9rem', fontWeight: 700, color: accentTerracotta }}>• Фиксированная цена 600 MDL под ключ за ролик</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 12. FAQ ACCORDION */}
      <section id="faq" style={{ padding: '70px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '16px',
              backgroundColor: cardBg,
              color: accentTerracotta,
              fontSize: '0.8rem',
              fontWeight: 700,
              boxShadow: shadowNeumorphic,
              marginBottom: '10px'
            }}
          >
            <HelpCircle size={16} />
            <span>FREQUENT QUESTIONS</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 900, margin: '0 0 8px 0' }}>
            {t.faqTitle}
          </h2>
          <p style={{ color: textMuted, margin: 0, fontSize: '0.95rem' }}>
            {t.faqSub}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            {
              qRu: "Что именно входит в цену 600 MDL за 1 ролик?",
              qRo: "Ce este inclus exact în prețul de 600 MDL per clip?",
              aRu: "В стоимость 600 MDL входит полный цикл: разработка психологического сценария, выездная съёмка на вашей локации или в студии, профессиональный монтаж, цветокоррекция, динамичный саунд-дизайн и плавающие субтитры на русском или румынском языке.",
              aRo: "Prețul de 600 MDL include ciclul complet: scenariu psihologic, filmare pe teren la locația ta sau în studio, montaj profesional, corecție de culoare, sound-design dinamic și subtitrări fluide în română sau rusă."
            },
            {
              qRu: "Вы выезжаете на съёмки за пределы Кишинёва?",
              qRo: "Vă deplasați pentru filmări în afara Chișinăului?",
              aRu: "Да, мы работаем по всему Кишинёву и выезжаем в любые регионы Молдовы. Условия выезда оговариваются индивидуально при бронировании пакета съёмок.",
              aRo: "Da, lucrăm în tot Chișinăul și ne deplasăm în orice regiune din Moldova. Condițiile de deplasare se discută individual la rezervarea pachetului."
            },
            {
              qRu: "Как быстро сдаётся готовый монтаж?",
              qRo: "Cât de repede se livrează montajul final?",
              aRu: "Первые готовые ролики вы получаете в течение 24-48 часов после съёмочного дня. Мы ценим скорость запуска ваших рекламных кампаний.",
              aRo: "Primele videoclipuri gata le primești în termen de 24-48 de ore după ziua de filmare. Apreciem viteza de lansare a campaniilor tale."
            },
            {
              qRu: "Что делать, если ролик не понравится?",
              qRo: "Ce facem dacă nu îmi place videoclipul?",
              aRu: "Мы предоставляем 100% гарантию ремесленника. Если монтаж не соответствует утвержденному сценарию, мы бесплатно сделаем правки или полностью переснимем видео.",
              aRo: "Oferim o garanție de 100% de artizan. Dacă montajul nu corespunde scenariului agreat, facem modificări gratuite sau refilmăm videoclipul."
            }
          ].map((faq, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: cardBg,
                borderRadius: '16px',
                boxShadow: shadowNeumorphic,
                border: `1px solid ${cardBorder}`,
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: textColor,
                  fontWeight: 800,
                  fontSize: '1rem',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span>{lang === 'ru' ? faq.qRu : faq.qRo}</span>
                {openFaq === idx ? <ChevronUp size={20} color={accentTerracotta} /> : <ChevronDown size={20} />}
              </button>

              {openFaq === idx && (
                <div
                  style={{
                    padding: '0 24px 20px 24px',
                    color: textMuted,
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    borderTop: `1px dashed ${cardBorder}`,
                    paddingTop: '16px'
                  }}
                >
                  {lang === 'ru' ? faq.aRu : faq.aRo}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 13. ARTISAN BOOKING & CONTACT FORM */}
      <section id="contacts" style={{ padding: '70px 24px 90px 24px', maxWidth: '1000px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: cardBg,
            borderRadius: '24px',
            padding: '40px',
            boxShadow: shadowNeumorphic,
            border: `2px solid ${accentTerracotta}`
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 32px auto' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, margin: '0 0 10px 0' }}>
              {t.contactsTitle}
            </h2>
            <p style={{ color: textMuted, margin: 0, fontSize: '0.95rem' }}>
              {t.contactsSub}
            </p>
          </div>

          {formSubmitted ? (
            <div
              style={{
                padding: '30px',
                borderRadius: '16px',
                backgroundColor: paperBg,
                color: '#4E9F3D',
                textAlign: 'center',
                fontWeight: 800,
                fontSize: '1.1rem',
                boxShadow: shadowInset
              }}
            >
              <CheckCircle2 size={48} style={{ margin: '0 auto 12px auto', display: 'block' }} />
              {t.successMsg}
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                    {t.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Александр / GastroCraft"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: `1.5px solid ${cardBorder}`,
                      backgroundColor: paperBg,
                      color: textColor,
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxShadow: shadowInset
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                    {t.formPhone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="+373 60 000 000"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: `1.5px solid ${cardBorder}`,
                      backgroundColor: paperBg,
                      color: textColor,
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxShadow: shadowInset
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                    {t.formNiche}
                  </label>
                  <input
                    type="text"
                    value={formNiche}
                    onChange={(e) => setFormNiche(e.target.value)}
                    placeholder="Ресторан / Одежда / Услуги"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: `1.5px solid ${cardBorder}`,
                      backgroundColor: paperBg,
                      color: textColor,
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxShadow: shadowInset
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
                    {t.formCount}
                  </label>
                  <select
                    value={formCount}
                    onChange={(e) => setFormCount(parseInt(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: `1.5px solid ${cardBorder}`,
                      backgroundColor: paperBg,
                      color: textColor,
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxShadow: shadowInset
                    }}
                  >
                    <option value={5}>5 роликов (3,000 MDL)</option>
                    <option value={10}>10 роликов + 1 В ПОДАРОК (6,000 MDL)</option>
                    <option value={20}>20 роликов + 3 В ПОДАРОК (12,000 MDL)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '10px',
                  padding: '18px',
                  borderRadius: '14px',
                  backgroundColor: accentTerracotta,
                  color: '#FFF',
                  border: 'none',
                  fontWeight: 900,
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  boxShadow: shadowNeumorphic,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                <Send size={20} />
                <span>{t.formSubmit}</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 14. VIDEO SHOWCASE MODAL */}
      {selectedVideo && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '24px',
              padding: '24px',
              maxWidth: '420px',
              width: '100%',
              boxShadow: shadowNeumorphic,
              border: `2px solid ${cardBorder}`,
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                color: textColor,
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={24} />
            </button>

            <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem', fontWeight: 800 }}>
              {t.modalWatchTitle}
            </h3>

            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '9/16',
                backgroundImage: `url(${selectedVideo.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: shadowInset
              }}
            >
              <button
                onClick={() => setSoundOn(!soundOn)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: '#FFF',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>

              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: accentTerracotta,
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: shadowNeumorphic
                }}
              >
                <Play size={28} style={{ marginLeft: '4px' }} />
              </div>
            </div>

            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: textMuted }}>{selectedVideo.views} {t.modalViews}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: accentTerracotta }}>CR: {selectedVideo.convRate}</div>
              </div>

              <a
                href="#contacts"
                onClick={() => setSelectedVideo(null)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  backgroundColor: accentTerracotta,
                  color: '#FFF',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  boxShadow: shadowNeumorphic
                }}
              >
                {t.modalOrderSimilar}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 15. FOOTER */}
      <footer
        style={{
          borderTop: `2px dashed ${cardBorder}`,
          backgroundColor: isDark ? '#1F1915' : '#EAE0D0',
          padding: '36px 24px',
          fontSize: '0.85rem',
          color: textMuted,
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 900, color: textColor, marginBottom: '8px' }}>
            VIRALIS MEDIA STUDIO — MOLDOVA & CHISINAU
          </div>
          <p style={{ margin: '0 0 16px 0' }}>
            © {new Date().getFullYear()} VIRALIS. Handcrafted short-form video production. 600 MDL / video.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+37360000000" style={{ color: textColor, textDecoration: 'none', fontWeight: 700 }}>+373 60 000 000</a>
            <a href="https://wa.me/37360000000" target="_blank" rel="noreferrer" style={{ color: textColor, textDecoration: 'none', fontWeight: 700 }}>WhatsApp</a>
            <span>Кишинёв, Молдова</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
