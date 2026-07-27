import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Heart,
  MessageCircle,
  Share2,
  Sparkles,
  Zap,
  Flame,
  TrendingUp,
  Award,
  CheckCircle2,
  Phone,
  Send,
  Calculator,
  ChevronDown,
  ChevronUp,
  Eye,
  Users,
  Video,
  X,
  Menu,
  HelpCircle
} from 'lucide-react';
import { translations } from '../data/translations';

// Custom extended copy for Variant 5 - Viral Creator Energy & Emotional Resonance
const viralText = {
  ru: {
    heroBadge: "⚡ VIRAL CREATOR STUDIO • КИШИНЁВ & МОЛДОВА",
    heroTitleLine1: "Вашу рекламу всё ещё пролистывают?",
    heroTitleLine2: "Мы создаём ролики, которые взрывают охваты!",
    heroSubtitle: "Высокое удержание внимания, психология первой секунды и профессиональный съёмочный процесс в Молдове. От креативной завязки до готовых клиентов — всего за 600 MDL.",
    hookScoreBadge: "🔥 Оценка вирусности: 98/100",
    simTitle: "Интерактивный 9:16 Симулятор Вирусных Роликов",
    simSub: "Почувствуйте, как работает психология вирусного контента на реальных примерах для бизнеса в Молдове",
    tabFood: "🍕 Рестораны & Кафе",
    tabFashion: "👗 Мода & Бутики",
    tabTech: "🔧 Сервис & Техника",
    tabBrand: "🚀 Личный бренд",
    simViews: "142.5K просмотров",
    simLikes: "18.4K",
    simComments: "1.2K",
    simShares: "4.8K",
    retentionLabel: "Удержание 84% в первые 3 сек.",
    retentionSub: "Обычное видео теряет 80% зрителей сразу",
    hookHeadline: "«Первая секунда решает всё!»",
    hookDesc: "Мы используем психологический паттерн-интеррапт, заставляющий зрителя мгновенно остановить скролл.",
    ctaSim: "Заказать такой ролик за 600 MDL",
    quizTitle: "Проверьте вирусный потенциал вашего бизнеса",
    quizSub: "Выберите вашу нишу и узнайте формулу удержания и прогнозируемые охваты",
    quizSelectLabel: "Выберите сферу деятельности:",
    quizOptFood: "Ресторан / Доставка еды / Кафе",
    quizOptFashion: "Магазин одежды / Шоурум / Мода",
    quizOptTech: "Автосервис / Ремонт техники / Услуги",
    quizOptBeauty: "Салон красоты / Косметология / СПА",
    quizOptRealEstate: "Недвижимость / Интерьер / Строительство",
    quizResultTitle: "Прогноз вирусного охвата:",
    quizViewsEst: "50,000 – 250,000+ Просмотров",
    quizHookRec: "Рекомендуемый крючок:",
    quizHookFood: "«Перестаньте готовить это дома! Показываем секрет шеф-повара за 15 секунд...»",
    quizHookFashion: "«3 ошибки в образе, которые дешевят ваш вид. Вот как исправить за 600 MDL!»",
    quizHookTech: "«Никогда не делайте этого со своей техникой, если не хотите платить за ремонт...»",
    quizHookBeauty: "«До и после: как преобразиться за 45 минут перед важным событием!»",
    quizHookRealEstate: "«Сколько на самом деле стоит эта квартира в Кишинёве? Показываем скрытые нюансы...»",
    calcTitle: "Калькулятор вирусного бюджета",
    calcSub: "Рассчитайте точную стоимость роликов и вашу экономию прямо сейчас",
    calcVideoCount: "Количество роликов:",
    calcSinglePrice: "Фиксированная цена: 600 MDL / ролик",
    calcBulkDiscount: "Скидка за объём применена!",
    calcAddonsTitle: "Дополнительные опции для быстрого роста:",
    calcAddon1: "Полная упаковка аккаунта (Instagram/TikTok/FB) (+500 MDL)",
    calcAddon2: "Настройка таргетированной рекламы Meta/FB Ads (+800 MDL)",
    calcTotalLabel: "Итоговая стоимость:",
    calcSavingsLabel: "Ваша экономия:",
    calcOrderBtn: "Заказать выбранный пакет в WhatsApp",
    matrixTitle: "Почему ролики VIRALIS приносят в 3-5 раз больше продаж?",
    matrixSub: "Эмоциональный контраст подходов к созданию контента",
    matrixBeforeTitle: "❌ Обычное видео на телефон",
    matrixBefore1: "Скучное начало — 80% уходят в первую же секунду",
    matrixBefore2: "Глухой звук с эхом и посторонними шумами",
    matrixBefore3: "Медленный монтаж без динамики и звуковых эффектов",
    matrixBefore4: "Нет призыва к действию — зритель просто пролистывает",
    matrixAfterTitle: "⚡ Вирусный ролик VIRALIS (600 MDL)",
    matrixAfter1: "Психологический крючок завлекает с 1-й миллисекунды",
    matrixAfter2: "Идеально чистый студийный звук (микрофоны-петлички)",
    matrixAfter3: "Динамичный монтаж (смена кадров каждые 1.5–2 сек, субтитры)",
    matrixAfter4: "Чёткий продающий призыв (CTA) с мгновенным откликом",
    urgencyText: "🔥 Высокий спрос! На эту неделю осталось всего 3 свободных слота на съёмку в Кишинёве.",
    orderModalTitle: "Забронировать съёмку за 600 MDL",
    orderModalSub: "Оставьте контактные данные, и мы свяжемся с вами в течение 15 минут",
    formName: "Ваше имя",
    formPhone: "Номер телефона (Молдова)",
    formNiche: "Ниша бизнеса",
    formLang: "Предпочитаемый язык",
    formSubmit: "Отправить заявку",
    formSuccess: "Заявка успешно отправлена! Мы перезвоним вам в ближайшее время.",
  },
  ro: {
    heroBadge: "⚡ VIRAL CREATOR STUDIO • CHIȘINĂU & MOLDOVA",
    heroTitleLine1: "Reclama ta este încă ignorată?",
    heroTitleLine2: "Creăm clipuri care explodează ca vizualizări!",
    heroSubtitle: "Retenție înaltă, psihologia primei secunde și filmare profesională în Moldova. De la cârligul creativ până la clienți reali — totul la doar 600 MDL.",
    hookScoreBadge: "🔥 Scor de viralitate: 98/100",
    simTitle: "Simulator Interactiv 9:16 Clipurile Virale",
    simSub: "Simte cum funcționează psihologia conținutului viral pe exemple reale pentru afaceri din Moldova",
    tabFood: "🍕 Restaurante & Cafenele",
    tabFashion: "👗 Modă & Buticuri",
    tabTech: "🔧 Servicii & Tehnică",
    tabBrand: "🚀 Brand Personal",
    simViews: "142.5K vizualizări",
    simLikes: "18.4K",
    simComments: "1.2K",
    simShares: "4.8K",
    retentionLabel: "Retenție de 84% în primele 3 sec.",
    retentionSub: "Un videoclip obișnuit pierde 80% din privitori instant",
    hookHeadline: "«Prima secundă decide totul!»",
    hookDesc: "Folosim pattern-interrupt psihologic care determină privitorul să oprească scroll-ul imediat.",
    ctaSim: "Comandă acest clip cu 600 MDL",
    quizTitle: "Testează potențialul viral al afacerii tale",
    quizSub: "Alege nișa ta și află formula de retenție și acoperirea estimată",
    quizSelectLabel: "Alege domeniul de activitate:",
    quizOptFood: "Restaurant / Livrare mâncare / Cafenea",
    quizOptFashion: "Magazin haine / Showroom / Modă",
    quizOptTech: "Auto service / Reparații tehnică / Servicii",
    quizOptBeauty: "Salon frumusețe / Cosmetologie / SPA",
    quizOptRealEstate: "Imobiliare / Design interior / Construcții",
    quizResultTitle: "Prognoza vizualizărilor virale:",
    quizViewsEst: "50,000 – 250,000+ Vizualizări",
    quizHookRec: "Cârligul recomandat:",
    quizHookFood: "«Nu mai găti asta acasă! Îți arătăm secretul bucătarului șef în 15 secunde...»",
    quizHookFashion: "«3 greșeli de stil care îți ieftinesc ținuta. Iată cum le corectezi cu 600 MDL!»",
    quizHookTech: "«Nu face niciodată asta cu tehnica ta, dacă nu vrei să plătești dublu pe reparație...»",
    quizHookBeauty: "«Înainte și după: cum te schimbi radical în 45 de minute înainte de eveniment!»",
    quizHookRealEstate: "«Cât costă cu adevărat acest apartament în Chișinău? Arătăm detaliile ascunse...»",
    calcTitle: "Calculatorul Bugetului Viral",
    calcSub: "Calculează costul exact al videoclipurilor și economiile tale chiar acum",
    calcVideoCount: "Numărul de clipuri:",
    calcSinglePrice: "Preț fix: 600 MDL / clip",
    calcBulkDiscount: "Reducere de volum aplicată!",
    calcAddonsTitle: "Opțiuni suplimentare pentru creștere rapidă:",
    calcAddon1: "Ambalare completă profil (Instagram/TikTok/FB) (+500 MDL)",
    calcAddon2: "Setare reclame targetate Meta/FB Ads (+800 MDL)",
    calcTotalLabel: "Cost total proiect:",
    calcSavingsLabel: "Economia ta:",
    calcOrderBtn: "Comandă pachetul selectat pe WhatsApp",
    matrixTitle: "De ce videoclipurile VIRALIS aduc de 3-5 ori mai multe vânzări?",
    matrixSub: "Contrastul emoțional al abordărilor în crearea de conținut",
    matrixBeforeTitle: "❌ Videoclip obișnuit cu telefonul",
    matrixBefore1: "Început plictisitor — 80% pleacă în prima secundă",
    matrixBefore2: "Sunet înfundat cu ecou și zgomot de fond",
    matrixBefore3: "Montaj lent fără dinamică și efecte sonore",
    matrixBefore4: "Fără îndemn la acțiune — privitorul doar trece mai departe",
    matrixAfterTitle: "⚡ Clip Viral VIRALIS (600 MDL)",
    matrixAfter1: "Cârlig psihologic care captează din prima milisecundă",
    matrixAfter2: "Sunet de studio impecabil (microfoane lavalieră)",
    matrixAfter3: "Montaj dinamic (schimbare cadre la 1.5–2 sec, subtitrări)",
    matrixAfter4: "Îndemn clar la acțiune (CTA) cu răspuns imediat",
    urgencyText: "🔥 Cerere crescută! Au mai rămas doar 3 locuri libere pentru filmări în Chișinău în această săptămână.",
    orderModalTitle: "Rezervă filmarea cu 600 MDL",
    orderModalSub: "Lasă datele tale de contact și te sunăm în maxim 15 minute",
    formName: "Numele tău",
    formPhone: "Număr de telefon (Moldova)",
    formNiche: "Nișa afacerii",
    formLang: "Limba preferată",
    formSubmit: "Trimite cererea",
    formSuccess: "Cererea a fost trimisă cu succes! Te vom contacta în cel mai scurt timp.",
  }
};

export default function Variant5_ViralCreator({ lang: propLang = 'ru', setLang: propSetLang }) {
  const [langState, setLangState] = useState(propLang);
  useEffect(() => {
    if (propLang) setLangState(propLang);
  }, [propLang]);
  const lang = propLang || langState;
  const setLang = propSetLang || setLangState;
  const t = translations[lang] || translations.ru;
  const v = viralText[lang] || viralText.ru;

  // Simulator state
  const [activeTab, setActiveTab] = useState('food');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [likeCount, setLikeCount] = useState(18420);
  const [hasLiked, setHasLiked] = useState(false);

  // Quiz State
  const [selectedNiche, setSelectedNiche] = useState('food');

  // Calculator State
  const [videoCount, setVideoCount] = useState(5);
  const [addonPackaging, setAddonPackaging] = useState(false);
  const [addonTargeting, setAddonTargeting] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPackageName, setModalPackageName] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', niche: '', comment: '' });



  // Handle Like Increment
  const handleLike = () => {
    if (!hasLiked) {
      setLikeCount(prev => prev + 1);
      setHasLiked(true);
    } else {
      setLikeCount(prev => prev - 1);
      setHasLiked(false);
    }
  };

  // Calculate pricing
  const calculateTotal = () => {
    let base = videoCount * 600;
    let discount = 0;
    if (videoCount >= 20) {
      discount = 2100;
    } else if (videoCount >= 10) {
      discount = 900;
    } else if (videoCount >= 5) {
      discount = 300;
    }
    let addons = 0;
    if (addonPackaging) addons += 500;
    if (addonTargeting) addons += 800;
    const finalTotal = base - discount + addons;
    return { base, discount, addons, finalTotal };
  };

  const pricingDetails = calculateTotal();

  // WhatsApp Order Link Generator
  const getWhatsAppLink = (customText) => {
    const text = customText || (lang === 'ru' 
      ? `Здравствуйте! Хочу заказать видеопроизводство VIRALIS (${videoCount} роликов, Итого: ${pricingDetails.finalTotal} MDL). Подскажите свободные даты съёмки в Кишинёве.`
      : `Bună ziua! Doresc să comand producție video VIRALIS (${videoCount} clipuri, Total: ${pricingDetails.finalTotal} MDL). Spuneți-mi vă rog datele libere pentru filmare în Chișinău.`);
    return `https://wa.me/37378337228?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: '', phone: '', niche: '', comment: '' });
    }, 2500);
  };

  // Simulator Content Mapping
  const simContent = {
    food: {
      title: "Gusto Cafe & Bistro Chișinău",
      views: "142.5K",
      img: "/assets/reel_restaurant.jpg",
      hook: v.quizHookFood,
      comment: lang === 'ru' ? "Были вчера там, десерт просто космос! 🔥" : "Am fost ieri acolo, desertul e genial! 🔥"
    },
    fashion: {
      title: "Boutique Luna & Co",
      views: "98.2K",
      img: "/assets/reel_fashion.jpg",
      hook: v.quizHookFashion,
      comment: lang === 'ru' ? "Подскажите адрес магазина в Кишинёве?" : "Îmi spuneți vă rog adresa magazinului din Chișinău?"
    },
    tech: {
      title: "SmartHub MD Repair",
      views: "215.4K",
      img: "/assets/reel_tech.jpg",
      hook: v.quizHookTech,
      comment: lang === 'ru' ? "Спасибо за ремонт дисплея за 2 часа!" : "Mulțumesc pentru reparația ecranului în 2 ore!"
    },
    brand: {
      title: "Alexandr & Stanislav Studio",
      views: "310.8K",
      img: "/assets/hero_banner.jpg",
      hook: lang === 'ru' ? "«Как получить 100,000 просмотров на бизнесе за 600 MDL...»" : "«Cum să obții 100,000 de vizualizări pentru afacere cu 600 MDL...»",
      comment: lang === 'ru' ? "Заказали 10 роликов, окупаемость x5!" : "Am comandat 10 clipuri, profitabilitate x5!"
    }
  };

  const currentSim = simContent[activeTab];

  return (
    <div style={{
      background: '#0B0518',
      color: '#F1F5F9',
      minHeight: '100vh',
      fontFamily: "'Outfit', 'Inter', -apple-system, sans-serif",
      overflowX: 'hidden'
    }}>
      {/* 1. TOP URGENCY SCARCITY STRIP */}
      <div style={{
        background: 'linear-gradient(90deg, #7C3AED 0%, #06B6D4 50%, #EC4899 100%)',
        color: '#FFFFFF',
        padding: '10px 16px',
        textAlign: 'center',
        fontWeight: '800',
        fontSize: '0.88rem',
        letterSpacing: '0.3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        boxShadow: '0 4px 20px rgba(6, 182, 212, 0.3)'
      }}>
        <Flame size={18} style={{ color: '#FACC15', animation: 'pulse 1.5s infinite' }} />
        <span>{v.urgencyText}</span>
        <a
          href="#packages"
          style={{
            background: 'rgba(0,0,0,0.3)',
            color: '#FFFFFF',
            padding: '4px 12px',
            borderRadius: '20px',
            textDecoration: 'none',
            fontSize: '0.78rem',
            marginLeft: '8px',
            border: '1px solid rgba(255,255,255,0.4)',
            whiteSpace: 'nowrap'
          }}
        >
          {lang === 'ru' ? 'Занять слот' : 'Rezervă loc'}
        </a>
      </div>

      {/* 2. STICKY HEADER & NAV */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(16px)',
        background: 'rgba(11, 5, 24, 0.85)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.25)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
            }}>
              <Zap size={24} style={{ color: '#FFF' }} />
            </div>
            <div>
              <span style={{ fontSize: '1.4rem', fontWeight: '900', letterSpacing: '-0.5px', background: 'linear-gradient(90deg, #FFF 30%, #A5F3FC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                VIRALIS
              </span>
              <span style={{ display: 'block', fontSize: '0.68rem', color: '#06B6D4', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Media Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav">
            <a href="#simulator" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.92rem' }}>
              {lang === 'ru' ? '9:16 Симулятор' : 'Simulator 9:16'}
            </a>
            <a href="#quiz" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.92rem' }}>
              {lang === 'ru' ? 'Вирусный Тест' : 'Test Viral'}
            </a>
            <a href="#calculator" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.92rem' }}>
              {lang === 'ru' ? 'Калькулятор' : 'Calculator'}
            </a>
            <a href="#packages" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.92rem' }}>
              {t.nav.pricing}
            </a>
            <a href="#team" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: '600', fontSize: '0.92rem' }}>
              {t.nav.team}
            </a>
          </nav>

          {/* Controls: Language Toggle & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Language Switcher */}
            <div style={{
              display: 'flex',
              background: 'rgba(255,255,255,0.06)',
              padding: '3px',
              borderRadius: '25px',
              border: '1px solid rgba(255,255,255,0.15)'
            }}>
              <button
                onClick={() => setLang('ru')}
                style={{
                  border: 'none',
                  background: lang === 'ru' ? 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)' : 'transparent',
                  color: lang === 'ru' ? '#FFF' : '#94A3B8',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontWeight: '800',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                aria-label="Переключить на русский язык"
              >
                RU
              </button>
              <button
                onClick={() => setLang('ro')}
                style={{
                  border: 'none',
                  background: lang === 'ro' ? 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)' : 'transparent',
                  color: lang === 'ro' ? '#FFF' : '#94A3B8',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontWeight: '800',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                aria-label="Comută pe limba română"
              >
                RO
              </button>
            </div>

            {/* Direct Call Button */}
            <a
              href="tel:+37378337228"
              style={{
                background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '50px',
                fontWeight: '800',
                fontSize: '0.88rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)',
                minHeight: '44px'
              }}
            >
              <Phone size={16} />
              <span className="hide-mobile">+373 78 337 228</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: '#FFF',
                padding: '8px',
                cursor: 'pointer'
              }}
              className="mobile-menu-btn"
              aria-label="Переключить меню"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div style={{
            background: '#15082E',
            borderBottom: '1px solid rgba(124, 58, 237, 0.3)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <a href="#simulator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', textDecoration: 'none', fontSize: '1rem', fontWeight: '600' }}>
              {lang === 'ru' ? '9:16 Симулятор' : 'Simulator 9:16'}
            </a>
            <a href="#quiz" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', textDecoration: 'none', fontSize: '1rem', fontWeight: '600' }}>
              {lang === 'ru' ? 'Вирусный Тест' : 'Test Viral'}
            </a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', textDecoration: 'none', fontSize: '1rem', fontWeight: '600' }}>
              {lang === 'ru' ? 'Калькулятор' : 'Calculator'}
            </a>
            <a href="#packages" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', textDecoration: 'none', fontSize: '1rem', fontWeight: '600' }}>
              {t.nav.pricing}
            </a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', textDecoration: 'none', fontSize: '1rem', fontWeight: '600' }}>
              {t.nav.team}
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '70px 24px 90px',
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center'
      }} className="hero-grid">
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '30px',
            background: 'rgba(6, 182, 212, 0.12)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            color: '#22D3EE',
            fontWeight: '800',
            fontSize: '0.85rem',
            marginBottom: '24px',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'
          }}>
            <Sparkles size={16} />
            <span>{v.heroBadge}</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: '1.12',
            letterSpacing: '-1px',
            marginBottom: '24px'
          }}>
            <span style={{ color: '#CBD5E1', display: 'block', fontSize: '0.7em', fontWeight: '800', marginBottom: '8px' }}>
              {v.heroTitleLine1}
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #A5F3FC 50%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {v.heroTitleLine2}
            </span>
          </h1>

          <p style={{
            fontSize: '1.12rem',
            lineHeight: '1.65',
            color: '#94A3B8',
            marginBottom: '32px',
            maxWidth: '560px'
          }}>
            {v.heroSubtitle}
          </p>

          {/* Price Tag Highlight Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(37, 14, 76, 0.8) 0%, rgba(21, 8, 46, 0.9) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            borderRadius: '24px',
            padding: '22px 28px',
            marginBottom: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
          }}>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {t.hero.priceTagLabel}
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#22D3EE', lineHeight: '1.1' }}>
                600 MDL
              </div>
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
                {t.hero.priceTagSub}
              </div>
            </div>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Video size={32} style={{ color: '#22D3EE' }} />
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
                color: '#FFFFFF',
                padding: '18px 36px',
                borderRadius: '50px',
                fontWeight: '900',
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 10px 30px rgba(124, 58, 237, 0.5)',
                minHeight: '52px'
              }}
            >
              <Send size={20} />
              <span>{t.hero.btnOrder}</span>
            </a>

            <a
              href="#simulator"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '18px 32px',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                minHeight: '52px'
              }}
            >
              <Play size={18} style={{ color: '#22D3EE' }} />
              <span>{lang === 'ru' ? 'Тестовый плеер 9:16' : 'Player test 9:16'}</span>
            </a>
          </div>

          {/* Stats Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#22D3EE' }}>10M+</div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{t.hero.stat2Label}</div>
            </div>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#F472B6' }}>84%</div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{lang === 'ru' ? 'Удержание внимания' : 'Retenție atenție'}</div>
            </div>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#FACC15' }}>24-48ч</div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{t.hero.stat3Label}</div>
            </div>
          </div>
        </div>

        {/* Hero Visual Card / Simulated Phone Preview */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '360px',
            borderRadius: '36px',
            padding: '12px',
            background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.4) 0%, rgba(6, 182, 212, 0.4) 100%)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(6, 182, 212, 0.3)'
          }}>
            <div style={{
              position: 'relative',
              borderRadius: '26px',
              overflow: 'hidden',
              background: '#000',
              aspectRatio: '9/16'
            }}>
              <img
                src="/assets/hero_banner.jpg"
                alt="VIRALIS Reel Production"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'; }}
              />

              {/* Overlay elements */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                right: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 2
              }}>
                <span style={{
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  color: '#22D3EE',
                  border: '1px solid rgba(6,182,212,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Flame size={14} style={{ color: '#FACC15' }} />
                  {v.hookScoreBadge}
                </span>
                <span style={{
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  color: '#FFF',
                  fontWeight: '700'
                }}>
                  600 MDL
                </span>
              </div>

              {/* Bottom Reel Details */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px 16px 20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
                zIndex: 2
              }}>
                <div style={{ color: '#FFF', fontWeight: '800', fontSize: '1.05rem', marginBottom: '6px' }}>
                  @viralis.media.md
                </div>
                <div style={{ color: '#E2E8F0', fontSize: '0.85rem', lineHeight: '1.4', marginBottom: '14px' }}>
                  {lang === 'ru' ? 'Снимаем вирусные ролики для бизнеса в Кишинёве 🔥 Под ключ за 600 MDL!' : 'Filmăm clipuri virale pentru afaceri în Chișinău 🔥 Cheie la cheie cu 600 MDL!'}
                </div>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%)',
                    color: '#FFF',
                    fontWeight: '800',
                    padding: '12px',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  {v.ctaSim}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE 9:16 REEL SIMULATOR SECTION */}
      <section id="simulator" style={{
        padding: '90px 24px',
        background: 'linear-gradient(180deg, #0B0518 0%, #15082E 50%, #0B0518 100%)',
        borderTop: '1px solid rgba(124, 58, 237, 0.2)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(124, 58, 237, 0.15)',
              border: '1px solid rgba(124, 58, 237, 0.4)',
              color: '#C084FC',
              fontWeight: '800',
              fontSize: '0.85rem',
              marginBottom: '16px'
            }}>
              <Video size={16} />
              <span>INTERACTIVE REEL SIMULATOR</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              {v.simTitle}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: '1.6' }}>
              {v.simSub}
            </p>
          </div>

          {/* Industry Category Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            {[
              { id: 'food', label: v.tabFood },
              { id: 'fashion', label: v.tabFashion },
              { id: 'tech', label: v.tabTech },
              { id: 'brand', label: v.tabBrand }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  border: 'none',
                  background: activeTab === tab.id
                    ? 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)'
                    : 'rgba(255, 255, 255, 0.06)',
                  color: activeTab === tab.id ? '#FFFFFF' : '#CBD5E1',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  fontWeight: '800',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeTab === tab.id ? '0 0 20px rgba(6, 182, 212, 0.4)' : 'none',
                  minHeight: '44px'
                }}
                aria-label={`Переключить категорию ${tab.label}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Simulator Player Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '360px 1fr',
            gap: '48px',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto'
          }} className="simulator-grid">
            {/* Phone Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              borderRadius: '40px',
              padding: '14px',
              background: 'linear-gradient(180deg, #250E4C 0%, #0F0720 100%)',
              border: '2px solid rgba(6, 182, 212, 0.5)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(6,182,212,0.25)'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                background: '#000',
                aspectRatio: '9/16'
              }}>
                <img
                  src={currentSim.img}
                  alt={currentSim.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: isPlaying ? 1 : 0.7,
                    transition: 'opacity 0.3s'
                  }}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'; }}
                />

                {/* Top Notch & Audio Status */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '16px',
                  right: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 10
                }}>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    style={{
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#FFF',
                      padding: '8px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    aria-label="Включить или выключить звук"
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} style={{ color: '#22D3EE' }} />}
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: '#FFF',
                      padding: '8px 14px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    aria-label="Воспроизведение или пауза"
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    <span>{isPlaying ? 'PLAYING' : 'PAUSED'}</span>
                  </button>
                </div>

                {/* Interactive Animated Subtitles */}
                <div style={{
                  position: 'absolute',
                  top: '40%',
                  left: '20px',
                  right: '20px',
                  textAlign: 'center',
                  zIndex: 5
                }}>
                  <div style={{
                    background: 'rgba(0,0,0,0.75)',
                    backdropFilter: 'blur(8px)',
                    color: '#FACC15',
                    padding: '10px 16px',
                    borderRadius: '16px',
                    fontWeight: '900',
                    fontSize: '0.95rem',
                    lineHeight: '1.35',
                    border: '1px solid rgba(250, 204, 21, 0.4)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                    transform: isPlaying ? 'scale(1)' : 'scale(0.98)',
                    transition: 'transform 0.2s'
                  }}>
                    {currentSim.hook}
                  </div>
                </div>

                {/* Right Action Rail (Likes, Comments, Shares) */}
                <div style={{
                  position: 'absolute',
                  right: '12px',
                  bottom: '90px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  alignItems: 'center',
                  zIndex: 10
                }}>
                  <button
                    onClick={handleLike}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: hasLiked ? '#EC4899' : '#FFFFFF',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '800'
                    }}
                    aria-label="Поставить лайк"
                  >
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '4px',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <Heart size={22} fill={hasLiked ? '#EC4899' : 'none'} />
                    </div>
                    <span>{likeCount.toLocaleString()}</span>
                  </button>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.75rem', color: '#FFF', fontWeight: '800' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '4px',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <MessageCircle size={22} />
                    </div>
                    <span>{v.simComments}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.75rem', color: '#FFF', fontWeight: '800' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '4px',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <Share2 size={22} />
                    </div>
                    <span>{v.simShares}</span>
                  </div>
                </div>

                {/* Bottom Bar Info & Comment Preview */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '20px 16px 16px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
                  zIndex: 10
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Eye size={16} style={{ color: '#22D3EE' }} />
                    <span style={{ color: '#22D3EE', fontWeight: '800', fontSize: '0.85rem' }}>
                      {currentSim.views} {lang === 'ru' ? 'просмотров' : 'vizualizări'}
                    </span>
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(6px)',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    fontSize: '0.78rem',
                    color: '#E2E8F0',
                    borderLeft: '3px solid #22D3EE'
                  }}>
                    💬 {currentSim.comment}
                  </div>
                </div>
              </div>
            </div>

            {/* Side Controls & Retention Analytics */}
            <div>
              <div style={{
                background: 'rgba(37, 14, 76, 0.6)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                borderRadius: '24px',
                padding: '32px',
                marginBottom: '24px'
              }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px', color: '#FFF' }}>
                  {v.hookHeadline}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  {v.hookDesc}
                </p>

                {/* Retention Bar Graph Component */}
                <div style={{
                  background: 'rgba(15, 7, 32, 0.8)',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  marginBottom: '24px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontWeight: '800', fontSize: '0.9rem', color: '#22D3EE' }}>
                      {v.retentionLabel}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#4ADE80', fontWeight: '800' }}>
                      +320% vs Стандарт
                    </span>
                  </div>

                  {/* Progress bar VIRALIS */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#CBD5E1', marginBottom: '4px' }}>
                      <span>VIRALIS (600 MDL)</span>
                      <span>84%</span>
                    </div>
                    <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                      <div style={{ width: '84%', height: '100%', background: 'linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)', borderRadius: '10px' }} />
                    </div>
                  </div>

                  {/* Progress bar Standard */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', marginBottom: '4px' }}>
                      <span>{lang === 'ru' ? 'Обычная съёмка' : 'Filmare obișnuită'}</span>
                      <span>18%</span>
                    </div>
                    <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                      <div style={{ width: '18%', height: '100%', background: '#F43F5E', borderRadius: '10px' }} />
                    </div>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(`Здравствуйте! Заинтересовал формат роликов для категории "${activeTab}". Хочу заказать видео за 600 MDL.`)}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%)',
                    color: '#FFF',
                    fontWeight: '900',
                    padding: '16px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    boxShadow: '0 10px 25px rgba(6, 182, 212, 0.4)'
                  }}
                >
                  {v.ctaSim}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CURIOSITY HOOK TEST / QUIZ TOOL */}
      <section id="quiz" style={{
        padding: '90px 24px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(37, 14, 76, 0.7) 0%, rgba(15, 7, 32, 0.9) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.4)',
          borderRadius: '32px',
          padding: '48px 36px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 36px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(6, 182, 212, 0.15)',
              color: '#22D3EE',
              fontWeight: '800',
              fontSize: '0.85rem',
              marginBottom: '14px'
            }}>
              <Sparkles size={16} />
              <span>VIRAL HOOK GENERATOR</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: '900', marginBottom: '12px' }}>
              {v.quizTitle}
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
              {v.quizSub}
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontWeight: '800', fontSize: '0.95rem', color: '#CBD5E1', marginBottom: '12px' }}>
              {v.quizSelectLabel}
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {[
                { id: 'food', label: v.quizOptFood },
                { id: 'fashion', label: v.quizOptFashion },
                { id: 'tech', label: v.quizOptTech },
                { id: 'beauty', label: v.quizOptBeauty },
                { id: 'realestate', label: v.quizOptRealEstate }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedNiche(opt.id)}
                  style={{
                    background: selectedNiche === opt.id
                      ? 'linear-gradient(135deg, #06B6D4 0%, #7C3AED 100%)'
                      : 'rgba(255,255,255,0.05)',
                    color: selectedNiche === opt.id ? '#FFF' : '#CBD5E1',
                    padding: '14px 18px',
                    borderRadius: '16px',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    border: selectedNiche === opt.id ? '1px solid #22D3EE' : '1px solid rgba(255,255,255,0.1)',
                    minHeight: '50px'
                  }}
                  aria-label={`Выбрать нишу ${opt.label}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quiz Result Box */}
          <div style={{
            background: 'rgba(15, 7, 32, 0.9)',
            border: '1px solid rgba(124, 58, 237, 0.4)',
            borderRadius: '24px',
            padding: '28px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            alignItems: 'center'
          }} className="quiz-result-grid">
            <div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: '800', textTransform: 'uppercase', marginBottom: '6px' }}>
                {v.quizResultTitle}
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#22D3EE', marginBottom: '12px' }}>
                {v.quizViewsEst}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#4ADE80', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <TrendingUp size={16} />
                <span>{lang === 'ru' ? 'Гарантированная адаптация под алгоритмы Reels & TikTok' : 'Adaptare garantată pentru algoritmii Reels & TikTok'}</span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', color: '#FACC15', fontWeight: '800', textTransform: 'uppercase', marginBottom: '6px' }}>
                {v.quizHookRec}
              </div>
              <div style={{
                background: 'rgba(250, 204, 21, 0.1)',
                borderLeft: '4px solid #FACC15',
                padding: '14px',
                borderRadius: '8px',
                color: '#FFF',
                fontWeight: '700',
                fontSize: '0.92rem',
                lineHeight: '1.4'
              }}>
                {selectedNiche === 'food' && v.quizHookFood}
                {selectedNiche === 'fashion' && v.quizHookFashion}
                {selectedNiche === 'tech' && v.quizHookTech}
                {selectedNiche === 'beauty' && v.quizHookBeauty}
                {selectedNiche === 'realestate' && v.quizHookRealEstate}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BEFORE / AFTER EMOTIONAL MATRIX */}
      <section style={{
        padding: '90px 24px',
        background: '#0F0720',
        borderTop: '1px solid rgba(124, 58, 237, 0.2)',
        borderBottom: '1px solid rgba(124, 58, 237, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', marginBottom: '16px' }}>
              {v.matrixTitle}
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem' }}>
              {v.matrixSub}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px'
          }} className="matrix-grid">
            {/* Standard Video Card */}
            <div style={{
              background: 'rgba(244, 63, 94, 0.05)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              borderRadius: '28px',
              padding: '36px'
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#F43F5E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {v.matrixBeforeTitle}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[v.matrixBefore1, v.matrixBefore2, v.matrixBefore3, v.matrixBefore4].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', color: '#CBD5E1', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    <span style={{ color: '#F43F5E', fontWeight: '900' }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VIRALIS Video Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(124, 58, 237, 0.15) 100%)',
              border: '2px solid rgba(6, 182, 212, 0.5)',
              borderRadius: '28px',
              padding: '36px',
              boxShadow: '0 10px 40px rgba(6, 182, 212, 0.2)'
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#22D3EE', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {v.matrixAfterTitle}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[v.matrixAfter1, v.matrixAfter2, v.matrixAfter3, v.matrixAfter4].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px', color: '#FFF', fontWeight: '600', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    <CheckCircle2 size={20} style={{ color: '#22D3EE', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE BUDGET CALCULATOR */}
      <section id="calculator" style={{
        padding: '90px 24px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(21, 8, 46, 0.9) 0%, rgba(37, 14, 76, 0.8) 100%)',
          border: '1px solid rgba(124, 58, 237, 0.4)',
          borderRadius: '32px',
          padding: '48px 36px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(124, 58, 237, 0.15)',
              color: '#C084FC',
              fontWeight: '800',
              fontSize: '0.85rem',
              marginBottom: '14px'
            }}>
              <Calculator size={16} />
              <span>BUDGET CALCULATOR</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: '900', marginBottom: '12px' }}>
              {v.calcTitle}
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
              {v.calcSub}
            </p>
          </div>

          {/* Slider Controls */}
          <div style={{ marginBottom: '36px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#FFF' }}>
                {v.calcVideoCount}
              </span>
              <span style={{ fontSize: '2rem', fontWeight: '900', color: '#22D3EE' }}>
                {videoCount} {lang === 'ru' ? 'роликов' : 'clipuri'}
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="20"
              value={videoCount}
              onChange={(e) => setVideoCount(parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '10px',
                borderRadius: '5px',
                background: 'rgba(255,255,255,0.1)',
                outline: 'none',
                accentColor: '#06B6D4',
                cursor: 'pointer'
              }}
              aria-label="Количество видеороликов"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748B', marginTop: '8px' }}>
              <span>1 ролик (600 MDL)</span>
              <span>5 роликов</span>
              <span>10 роликов</span>
              <span>20 роликов</span>
            </div>
          </div>

          {/* Addons Selection */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontWeight: '800', fontSize: '1rem', color: '#CBD5E1', marginBottom: '16px' }}>
              {v.calcAddonsTitle}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: addonPackaging ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255,255,255,0.04)',
                border: addonPackaging ? '1px solid #22D3EE' : '1px solid rgba(255,255,255,0.1)',
                padding: '16px 20px',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                <input
                  type="checkbox"
                  checked={addonPackaging}
                  onChange={(e) => setAddonPackaging(e.target.checked)}
                  style={{ width: '20px', height: '20px', accentColor: '#06B6D4' }}
                />
                <span style={{ fontWeight: '700', fontSize: '0.95rem', color: '#FFF' }}>
                  {v.calcAddon1}
                </span>
              </label>

              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: addonTargeting ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255,255,255,0.04)',
                border: addonTargeting ? '1px solid #22D3EE' : '1px solid rgba(255,255,255,0.1)',
                padding: '16px 20px',
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                <input
                  type="checkbox"
                  checked={addonTargeting}
                  onChange={(e) => setAddonTargeting(e.target.checked)}
                  style={{ width: '20px', height: '20px', accentColor: '#06B6D4' }}
                />
                <span style={{ fontWeight: '700', fontSize: '0.95rem', color: '#FFF' }}>
                  {v.calcAddon2}
                </span>
              </label>
            </div>
          </div>

          {/* Calculator Output Summary Box */}
          <div style={{
            background: 'rgba(15, 7, 32, 0.95)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            borderRadius: '24px',
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: '800', textTransform: 'uppercase' }}>
                {v.calcTotalLabel}
              </div>
              <div style={{ fontSize: '2.8rem', fontWeight: '900', color: '#22D3EE', lineHeight: '1.1' }}>
                {pricingDetails.finalTotal} MDL
              </div>
              {pricingDetails.discount > 0 && (
                <div style={{ fontSize: '0.88rem', color: '#4ADE80', fontWeight: '700', marginTop: '4px' }}>
                  🎉 {v.calcSavingsLabel} {pricingDetails.discount} MDL
                </div>
              )}
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
                color: '#FFF',
                fontWeight: '900',
                padding: '18px 36px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1rem',
                boxShadow: '0 10px 30px rgba(124, 58, 237, 0.5)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                minHeight: '52px'
              }}
            >
              <Send size={20} />
              <span>{v.calcOrderBtn}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. PACKAGES & PRICING */}
      <section id="packages" style={{
        padding: '90px 24px',
        background: '#0B0518'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(6, 182, 212, 0.15)',
              color: '#22D3EE',
              fontWeight: '800',
              fontSize: '0.85rem',
              marginBottom: '14px'
            }}>
              <Award size={16} />
              <span>{t.packages.badge}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', marginBottom: '16px' }}>
              {t.packages.title}
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem' }}>
              {t.packages.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px'
          }}>
            {/* Package 1 */}
            <div style={{
              background: 'rgba(21, 8, 46, 0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '28px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px', color: '#FFF' }}>{t.packages.p1Title}</h3>
                <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#22D3EE', marginBottom: '6px' }}>
                  {t.packages.p1Price} {t.packages.p1Unit}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '24px' }}>{t.packages.p1Sub}</div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[t.packages.p1F1, t.packages.p1F2, t.packages.p1F3, t.packages.p1F4].map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: '#CBD5E1' }}>
                      <CheckCircle2 size={18} style={{ color: '#22D3EE', flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setModalPackageName(t.packages.p1Title);
                  setIsModalOpen(true);
                }}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#FFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '14px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  minHeight: '44px'
                }}
              >
                {t.packages.p1Btn}
              </button>
            </div>

            {/* Package 2 */}
            <div style={{
              background: 'rgba(21, 8, 46, 0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '28px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px', color: '#FFF' }}>{t.packages.p2Title}</h3>
                <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#22D3EE', marginBottom: '6px' }}>
                  {t.packages.p2Price} {t.packages.p2Unit}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '24px' }}>{t.packages.p2Sub}</div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[t.packages.p2F1, t.packages.p2F2, t.packages.p2F3, t.packages.p2F4].map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: '#CBD5E1' }}>
                      <CheckCircle2 size={18} style={{ color: '#22D3EE', flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setModalPackageName(t.packages.p2Title);
                  setIsModalOpen(true);
                }}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#FFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '14px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  minHeight: '44px'
                }}
              >
                {t.packages.p2Btn}
              </button>
            </div>

            {/* Package 3 - POPULAR HIGHLIGHT */}
            <div style={{
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(37, 14, 76, 0.9) 0%, rgba(15, 7, 32, 0.95) 100%)',
              border: '2px solid #06B6D4',
              borderRadius: '28px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-14px',
                right: '24px',
                background: 'linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)',
                color: '#FFF',
                fontSize: '0.75rem',
                fontWeight: '900',
                padding: '4px 14px',
                borderRadius: '20px',
                textTransform: 'uppercase'
              }}>
                🔥 {t.packages.popular}
              </div>

              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px', color: '#FFF' }}>{t.packages.p3Title}</h3>
                <div style={{ fontSize: '2.4rem', fontWeight: '900', color: '#22D3EE', marginBottom: '6px' }}>
                  {t.packages.p3Price} {t.packages.p3Unit}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#A5F3FC', marginBottom: '24px', fontWeight: '700' }}>{t.packages.p3Sub}</div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[t.packages.p3F1, t.packages.p3F2, t.packages.p3F3, t.packages.p3F4].map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: '#FFF', fontWeight: '600' }}>
                      <CheckCircle2 size={18} style={{ color: '#06B6D4', flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setModalPackageName(t.packages.p3Title);
                  setIsModalOpen(true);
                }}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
                  color: '#FFF',
                  border: 'none',
                  padding: '16px',
                  borderRadius: '50px',
                  fontWeight: '900',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  boxShadow: '0 10px 20px rgba(6, 182, 212, 0.4)',
                  minHeight: '44px'
                }}
              >
                {t.packages.p3Btn}
              </button>
            </div>

            {/* Package 4 */}
            <div style={{
              background: 'rgba(21, 8, 46, 0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '28px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px', color: '#FFF' }}>{t.packages.p4Title}</h3>
                <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#22D3EE', marginBottom: '6px' }}>
                  {t.packages.p4Price} {t.packages.p4Unit}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '24px' }}>{t.packages.p4Sub}</div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[t.packages.p4F1, t.packages.p4F2, t.packages.p4F3, t.packages.p4F4].map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: '#CBD5E1' }}>
                      <CheckCircle2 size={18} style={{ color: '#22D3EE', flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setModalPackageName(t.packages.p4Title);
                  setIsModalOpen(true);
                }}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#FFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '14px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  minHeight: '44px'
                }}
              >
                {t.packages.p4Btn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TEAM & CREATORS */}
      <section id="team" style={{
        padding: '90px 24px',
        background: '#0F0720',
        borderTop: '1px solid rgba(124, 58, 237, 0.2)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(124, 58, 237, 0.15)',
              color: '#C084FC',
              fontWeight: '800',
              fontSize: '0.85rem',
              marginBottom: '14px'
            }}>
              <Users size={16} />
              <span>{t.team.badge}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', marginBottom: '16px' }}>
              {t.team.title}
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem' }}>
              {t.team.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '36px'
          }} className="team-grid">
            {/* Alexandr */}
            <div style={{
              background: 'rgba(21, 8, 46, 0.6)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '28px',
              padding: '32px',
              display: 'flex',
              gap: '24px',
              alignItems: 'center'
            }} className="team-card">
              <img
                src="/assets/team_alexander.jpg"
                alt={t.team.alexTitle}
                style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #06B6D4', flexShrink: 0 }}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'; }}
              />
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#FFF', marginBottom: '4px' }}>{t.team.alexTitle}</h3>
                <div style={{ color: '#22D3EE', fontWeight: '800', fontSize: '0.88rem', marginBottom: '12px' }}>{t.team.alexRole}</div>
                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.5', marginBottom: '16px' }}>{t.team.alexDesc}</p>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href="tel:+37378337228"
                    style={{
                      background: 'rgba(6, 182, 212, 0.2)',
                      color: '#22D3EE',
                      border: '1px solid rgba(6, 182, 212, 0.4)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '800',
                      textDecoration: 'none'
                    }}
                  >
                    📞 {t.team.alexPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Stanislav */}
            <div style={{
              background: 'rgba(21, 8, 46, 0.6)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '28px',
              padding: '32px',
              display: 'flex',
              gap: '24px',
              alignItems: 'center'
            }} className="team-card">
              <img
                src="/assets/team_stanislav.jpg"
                alt={t.team.stanTitle}
                style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #7C3AED', flexShrink: 0 }}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'; }}
              />
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#FFF', marginBottom: '4px' }}>{t.team.stanTitle}</h3>
                <div style={{ color: '#C084FC', fontWeight: '800', fontSize: '0.88rem', marginBottom: '12px' }}>{t.team.stanRole}</div>
                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.5', marginBottom: '16px' }}>{t.team.stanDesc}</p>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href="tel:+37376596941"
                    style={{
                      background: 'rgba(124, 58, 237, 0.2)',
                      color: '#C084FC',
                      border: '1px solid rgba(124, 58, 237, 0.4)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '800',
                      textDecoration: 'none'
                    }}
                  >
                    📞 {t.team.stanPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section style={{
        padding: '90px 24px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', margin: '0 auto 40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '30px',
            background: 'rgba(6, 182, 212, 0.15)',
            color: '#22D3EE',
            fontWeight: '800',
            fontSize: '0.85rem',
            marginBottom: '14px'
          }}>
            <HelpCircle size={16} />
            <span>FAQ</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: '900', marginBottom: '12px' }}>
            {t.faq.title}
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
            {t.faq.subtitle}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { q: t.faq.q1, a: t.faq.a1 },
            { q: t.faq.q2, a: t.faq.a2 },
            { q: t.faq.q3, a: t.faq.a3 },
            { q: t.faq.q4, a: t.faq.a4 },
            { q: t.faq.q5, a: t.faq.a5 },
            { q: t.faq.q6, a: t.faq.a6 }
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(21, 8, 46, 0.6)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                borderRadius: '18px',
                overflow: 'hidden',
                transition: 'all 0.2s'
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  color: '#FFF',
                  fontSize: '1rem',
                  fontWeight: '800',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  minHeight: '52px'
                }}
                aria-expanded={openFaq === index}
                aria-label={`Вопрос: ${item.q}`}
              >
                <span>{item.q}</span>
                {openFaq === index ? <ChevronUp size={20} style={{ color: '#22D3EE' }} /> : <ChevronDown size={20} style={{ color: '#94A3B8' }} />}
              </button>
              {openFaq === index && (
                <div style={{
                  padding: '0 24px 20px',
                  color: '#CBD5E1',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer style={{
        background: '#070310',
        borderTop: '1px solid rgba(124, 58, 237, 0.2)',
        padding: '50px 24px 30px',
        color: '#94A3B8',
        fontSize: '0.88rem'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <div style={{ color: '#FFF', fontWeight: '900', fontSize: '1.2rem', marginBottom: '6px' }}>
              VIRALIS Media Studio
            </div>
            <div>{t.footer.tagline}</div>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="tel:+37378337228" style={{ color: '#22D3EE', textDecoration: 'none', fontWeight: '700' }}>
              +373 78 337 228
            </a>
            <span>•</span>
            <a href="tel:+37376596941" style={{ color: '#22D3EE', textDecoration: 'none', fontWeight: '700' }}>
              +373 76 59 69 41
            </a>
          </div>
        </div>

        <div style={{
          maxWidth: '1280px',
          margin: '24px auto 0',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.78rem'
        }}>
          <div>© {new Date().getFullYear()} VIRALIS Media Studio. {t.footer.rights}</div>
          <div>Кишинёв, Республика Молдова</div>
        </div>
      </footer>

      {/* 12. ORDER MODAL DIALOG */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '480px',
            background: '#15082E',
            border: '2px solid #06B6D4',
            borderRadius: '28px',
            padding: '36px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.9)'
          }}>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#FFF',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Закрыть модальное окно"
            >
              <X size={20} />
            </button>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle2 size={64} style={{ color: '#22D3EE', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: '900', color: '#FFF', marginBottom: '10px' }}>
                  {v.formSuccess}
                </h3>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#FFF', marginBottom: '6px' }}>
                  {v.orderModalTitle}
                </h3>
                {modalPackageName && (
                  <div style={{ color: '#22D3EE', fontWeight: '800', fontSize: '0.9rem', marginBottom: '12px' }}>
                    Пакет: {modalPackageName}
                  </div>
                )}
                <p style={{ color: '#94A3B8', fontSize: '0.88rem', marginBottom: '24px' }}>
                  {v.orderModalSub}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px', fontWeight: '700' }}>
                      {v.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Например: Иван"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#FFF',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '6px', fontWeight: '700' }}>
                      {v.formPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+373 XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#FFF',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
                    color: '#FFF',
                    fontWeight: '900',
                    padding: '16px',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(6, 182, 212, 0.4)'
                  }}
                >
                  {v.formSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Embedded Responsive Helper Styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid, .simulator-grid, .quiz-result-grid, .matrix-grid, .team-grid {
            grid-template-columns: 1fr !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .hide-mobile {
            display: none !important;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
}
