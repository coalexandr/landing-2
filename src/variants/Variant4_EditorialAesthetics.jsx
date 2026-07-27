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
  XCircle,
  Volume2,
  VolumeX,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { translations as defaultTranslations } from '../data/translations';

// Extended Editorial High-Fashion Translations Dictionary (RU & RO)
const dictionary = {
  ru: {
    ...defaultTranslations.ru,
    editorial: {
      brandSub: "STUDIO EDITORIAL",
      heroBadge: "HIGH-FASHION EDITORIAL & NEUROAESTHETIC SYMMETRY",
      mainTitle: "ВИДЕОПРОИЗВОДСТВО ПРЕМИУМ-УРОВНЯ",
      mainTitleSub: "ЭСТЕТИКА, КОТОРАЯ ПРОДАЁТ",
      subtitle: "Полный цикл кинематографической видеосъёмки и трендового монтажа для TikTok, Instagram Reels, Shorts и Facebook в Молдове. Эстетика высокого статуса.",
      priceTagLabel: "ФИКСИРОВАННЫЙ ТАРИФ",
      priceTagValue: "600 MDL",
      priceTagSub: "за 1 готовый вирусный ролик под ключ",
      slotsText: "Осталось 3 свободных слота на съёмки этой недели",
      videoShowcaseTitle: "ГАЛЕРЕЯ РАБОТ 9:16",
      videoShowcaseSub: "Нажмите на видео для просмотра в высоком разрешении",
      categoryAll: "Все работы",
      categoryFood: "Рестораны & Gastronomy",
      categoryFashion: "Fashion & Retail",
      categoryTech: "Services & High-Tech",
      calcTitle: "НЕЙРО-КАЛЬКУЛЯТОР БЮДЖЕТА",
      calcSub: "Выберите количество видеороликов и опции для моментального расчёта с учётом объёмной скидки",
      packagesTitle: "ЭДИ ТОРИАЛЬНЫЕ ПАКЕТЫ",
      packagesSub: "Высокий статус и прозрачное ценообразование без скрытых наценок",
      beforeAfterTitle: "СРАВНЕНИЕ ПОДХОДОВ",
      beforeAfterSub: "Почему коммерческая съемка VIRALIS дает x3-x5 больше конверсии",
      faqTitle: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
      faqSub: "Всё о процессе съёмки, сроках и гарантиях результата",
      contactsTitle: "ЗАБРОНИРОВАТЬ СЪЁМКУ",
      contactsSub: "Оставьте заявку на бесплатную концептуальную консультацию",
      alexRole: "Продюсер & Режиссёр съёмок",
      stanRole: "Креативный директор & Главный монтажёр",
      whatsappBtn: "Написать в WhatsApp",
      callBtn: "Позвонить сейчас",
      modalWatchTitle: "Просмотр ролика VIRALIS",
      modalOrderSimilar: "Заказать ролик за 600 MDL",
      modalViews: "просмотров",
      discountApplied: "Применена скидка за объём:",
      includedFree: "Включено бесплатно",
      selectLang: "Язык / Limba",
      modeDark: "Тёмный эдиториал",
      modeLight: "Светлый эдиториал"
    }
  },
  ro: {
    ...defaultTranslations.ro,
    editorial: {
      brandSub: "STUDIO EDITORIAL",
      heroBadge: "HIGH-FASHION EDITORIAL & SIMETRIE NEUROESTETICĂ",
      mainTitle: "PRODUCȚIE VIDEO LA NIVEL PREMIUM",
      mainTitleSub: "ESTETICĂ CARE VINDE",
      subtitle: "Ciclu complet de filmare cinematografică și montaj în trend pentru TikTok, Instagram Reels, Shorts și Facebook în Moldova. Estetică de statut înalt.",
      priceTagLabel: "TARIF FIX",
      priceTagValue: "600 MDL",
      priceTagSub: "per 1 clip viral complet finisat",
      slotsText: "Au mai rămas 3 locuri libere pentru filmările din această săptămână",
      videoShowcaseTitle: "GALERIE LUCRĂRI 9:16",
      videoShowcaseSub: "Apasă pe clip pentru vizionare în rezoluție înaltă",
      categoryAll: "Toate lucrările",
      categoryFood: "Restaurante & Gastronomie",
      categoryFashion: "Fashion & Retail",
      categoryTech: "Servicii & High-Tech",
      calcTitle: "CALCULATOR NEURO DE BUGET",
      calcSub: "Alege numărul de videoclipuri și opțiunile pentru un calcul instantaneu cu reducere de volum",
      packagesTitle: "PACHETE EDITORIALE",
      packagesSub: "Statut înalt și prețuri transparente fără costuri ascunse",
      beforeAfterTitle: "COMPARAȚIE ABORDĂRI",
      beforeAfterSub: "De ce filmarea comercială VIRALIS aduce o conversie de 3-5 ori mai mare",
      faqTitle: "ÎNTREBĂRI FRECVENTE",
      faqSub: "Totul despre procesul de filmare, termene și garanții",
      contactsTitle: "REZERVĂ FILMATEA",
      contactsSub: "Lase o cerere pentru o consultație conceptuală gratuită",
      alexRole: "Producător & Regizor filmări",
      stanRole: "Director de creație & Editor principal",
      whatsappBtn: "Scrie pe WhatsApp",
      callBtn: "Sună acum",
      modalWatchTitle: "Vizionare clip VIRALIS",
      modalOrderSimilar: "Comandă clip cu 600 MDL",
      modalViews: "vizualizări",
      discountApplied: "Reducere de volum aplicată:",
      includedFree: "Inclus gratuit",
      selectLang: "Limba / Язык",
      modeDark: "Editorial Întunecat",
      modeLight: "Editorial Luminos"
    }
  }
};

// Portfolio Items with Full-bleed Video Thumbnail References & Metadata
const portfolioItems = [
  {
    id: 'reel-1',
    titleRu: "Gusto Cafe & Bistro Chișinău",
    titleRo: "Gusto Cafe & Bistro Chișinău",
    category: "food",
    categoryRu: "Рестораны & Gastronomy",
    categoryRo: "Restaurante & Gastronomie",
    views: "142.5K",
    likes: "12.4K",
    shares: "3.1K",
    gradient: "linear-gradient(135deg, #1c1917 0%, #0a0a0a 100%)",
    posterColor: "#262626",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-in-a-restaurant-41443-large.mp4",
    aspectRatio: "9/16",
    tag: "GASTRONOMY EDITORIAL"
  },
  {
    id: 'reel-2',
    titleRu: "Boutique Luna & Co — Коллекция",
    titleRo: "Boutique Luna & Co — Colecție Nouă",
    category: "fashion",
    categoryRu: "Fashion & Retail",
    categoryRo: "Fashion & Retail",
    views: "98.2K",
    likes: "8.9K",
    shares: "1.8K",
    gradient: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
    posterColor: "#18181b",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-walking-on-a-runway-41527-large.mp4",
    aspectRatio: "9/16",
    tag: "HIGH-FASHION LOOKBOOK"
  },
  {
    id: 'reel-3',
    titleRu: "SmartHub MD — Сервис Техники",
    titleRo: "SmartHub MD — Reparații Tech",
    category: "tech",
    categoryRu: "Services & High-Tech",
    categoryRo: "Servicii & High-Tech",
    views: "215.4K",
    likes: "19.1K",
    shares: "5.4K",
    gradient: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
    posterColor: "#0f172a",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-green-screen-41242-large.mp4",
    aspectRatio: "9/16",
    tag: "COMMERCIAL COMMERCIAL"
  },
  {
    id: 'reel-4',
    titleRu: "Elegance Beauty Lounge Chișinău",
    titleRo: "Elegance Beauty Lounge Chișinău",
    category: "fashion",
    categoryRu: "Fashion & Retail",
    categoryRo: "Fashion & Retail",
    views: "184.9K",
    likes: "15.3K",
    shares: "4.2K",
    gradient: "linear-gradient(135deg, #27272a 0%, #09090b 100%)",
    posterColor: "#27272a",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-makeup-in-front-of-a-mirror-41530-large.mp4",
    aspectRatio: "9/16",
    tag: "NEUROAESTHETIC BEAUTY"
  }
];

export default function Variant4_EditorialAesthetics({ lang: propLang = 'ru', setLang: propSetLang }) {
  const [langState, setLangState] = useState(propLang);
  useEffect(() => {
    if (propLang) setLangState(propLang);
  }, [propLang]);
  const lang = propLang || langState;
  const setLang = propSetLang || setLangState;
  const [theme, setTheme] = useState('dark'); // 'dark' | 'light'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Calculator State
  const [videoCount, setVideoCount] = useState(5);
  const [addonPackage, setAddonPackage] = useState(false);
  const [addonAds, setAddonAds] = useState(false);

  // Contact Form State
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    business: '',
    langChoice: 'ru',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const t = dictionary[lang];

  // Synchronize document theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Pricing Logic (600 MDL / video base)
  const basePricePerVideo = 600;
  const discountRate = useMemo(() => {
    if (videoCount >= 10) return 0.15;
    if (videoCount >= 5) return 0.10;
    return 0;
  }, [videoCount]);

  const rawTotal = videoCount * basePricePerVideo;
  const discountedBase = Math.round(rawTotal * (1 - discountRate));
  const savingsAmount = rawTotal - discountedBase;
  const addonsTotal = (addonPackage ? 500 : 0) + (addonAds ? 800 : 0);
  const finalPrice = discountedBase + addonsTotal;

  // Filtered Portfolio
  const filteredPortfolio = useMemo(() => {
    if (activeCategory === 'all') return portfolioItems;
    return portfolioItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormState({ name: '', phone: '', business: '', langChoice: lang, message: '' });
      setTimeout(() => setFormSuccess(false), 6000);
    }, 800);
  };

  const getWhatsAppLink = (textMsg) => {
    const defaultText = lang === 'ru'
      ? `Здравствуйте! Хочу заказать видеопроизводство VIRALIS (600 MDL). Проект: ${videoCount} роликов.`
      : `Bună ziua! Doresc să comand producție video VIRALIS (600 MDL). Proiect: ${videoCount} clipuri.`;
    return `https://wa.me/37378337228?text=${encodeURIComponent(textMsg || defaultText)}`;
  };

  return (
    <div style={{
      backgroundColor: theme === 'dark' ? '#0a0a0a' : '#fafafa',
      color: theme === 'dark' ? '#f4f4f6' : '#0f172a',
      fontFamily: "'Outfit', 'Montserrat', -apple-system, sans-serif",
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden',
      transition: 'background-color 0.4s ease, color 0.4s ease'
    }}>
      {/* 1. URGENCY STATUS BANNER (HIGH STATUS EDITORIAL) */}
      <div style={{
        background: theme === 'dark'
          ? 'linear-gradient(90deg, #18181b 0%, #0a0a0a 50%, #18181b 100%)'
          : 'linear-gradient(90deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        borderBottom: theme === 'dark' ? '1px solid rgba(229, 192, 123, 0.25)' : '1px solid rgba(255, 255, 255, 0.1)',
        padding: '10px 16px',
        fontSize: '0.82rem',
        letterSpacing: '0.05em',
        textAlign: 'center',
        color: '#e5c07b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontWeight: 700,
          textTransform: 'uppercase',
          padding: '2px 8px',
          background: 'rgba(229, 192, 123, 0.15)',
          borderRadius: '4px',
          fontSize: '0.75rem'
        }}>
          <Flame size={14} color="#e5c07b" />
          {lang === 'ru' ? 'КИШИНЁВ & МОЛДОВА' : 'CHIȘINĂU & MOLDOVA'}
        </span>
        <span style={{ opacity: 0.95, color: theme === 'dark' ? '#f4f4f6' : '#f8fafc' }}>
          {t.editorial.slotsText}
        </span>
        <span style={{ color: '#e5c07b', fontWeight: 600 }}>
          • {t.editorial.priceTagValue} / {lang === 'ru' ? 'ролик' : 'clip'}
        </span>
        <a
          href="#contacts"
          style={{
            color: '#e5c07b',
            textDecoration: 'underline',
            fontWeight: 700,
            marginLeft: '8px',
            cursor: 'pointer'
          }}
        >
          {t.urgency.btn} →
        </a>
      </div>

      {/* 2. STICKY EDITORIAL NAVIGATION BAR */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        backgroundColor: theme === 'dark' ? 'rgba(10, 10, 10, 0.92)' : 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
        transition: 'background-color 0.3s ease'
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
          <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              letterSpacing: '0.12em',
              color: theme === 'dark' ? '#ffffff' : '#0f172a',
              textTransform: 'uppercase'
            }}>
              VIRALIS
            </span>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              color: '#e5c07b',
              marginTop: '-2px'
            }}>
              {t.editorial.brandSub}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
            <a href="#services" style={{ color: theme === 'dark' ? '#d4d4d8' : '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.04em' }}>{t.nav.services}</a>
            <a href="#portfolio" style={{ color: theme === 'dark' ? '#d4d4d8' : '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.04em' }}>{t.nav.portfolio}</a>
            <a href="#calculator" style={{ color: theme === 'dark' ? '#d4d4d8' : '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.04em' }}>{t.nav.calculator}</a>
            <a href="#packages" style={{ color: theme === 'dark' ? '#d4d4d8' : '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.04em' }}>{t.nav.pricing}</a>
            <a href="#faq" style={{ color: theme === 'dark' ? '#d4d4d8' : '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.04em' }}>{t.nav.faq}</a>
            <a href="#contacts" style={{ color: theme === 'dark' ? '#d4d4d8' : '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.04em' }}>{t.nav.contacts}</a>
          </nav>

          {/* Actions: Lang Switcher, Theme Toggle, Call CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Language Switcher */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
              borderRadius: '30px',
              padding: '3px',
              border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)'
            }}>
              <button
                onClick={() => setLang('ru')}
                style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  border: 'none',
                  background: lang === 'ru' ? (theme === 'dark' ? '#e5c07b' : '#0f172a') : 'transparent',
                  color: lang === 'ru' ? (theme === 'dark' ? '#0a0a0a' : '#ffffff') : (theme === 'dark' ? '#a1a1aa' : '#64748b'),
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Переключить на русский язык"
              >
                RU
              </button>
              <button
                onClick={() => setLang('ro')}
                style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  border: 'none',
                  background: lang === 'ro' ? (theme === 'dark' ? '#e5c07b' : '#0f172a') : 'transparent',
                  color: lang === 'ro' ? (theme === 'dark' ? '#0a0a0a' : '#ffffff') : (theme === 'dark' ? '#a1a1aa' : '#64748b'),
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Comută pe limba română"
              >
                RO
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              style={{
                padding: '8px',
                borderRadius: '50%',
                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.15)',
                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                color: theme === 'dark' ? '#e5c07b' : '#0f172a',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px'
              }}
              aria-label={theme === 'dark' ? t.editorial.modeLight : t.editorial.modeDark}
              title={theme === 'dark' ? t.editorial.modeLight : t.editorial.modeDark}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Direct Phone CTA */}
            <a
              href="tel:+37378337228"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '30px',
                background: theme === 'dark' ? 'linear-gradient(135deg, #e5c07b 0%, #c59b40 100%)' : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: theme === 'dark' ? '#0a0a0a' : '#ffffff',
                fontWeight: 700,
                fontSize: '0.85rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s ease'
              }}
            >
              <Phone size={15} />
              <span>+373 78 337 228</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                background: 'transparent',
                border: 'none',
                color: theme === 'dark' ? '#ffffff' : '#0f172a',
                cursor: 'pointer'
              }}
              className="mobile-menu-btn"
              aria-label="Открыть меню"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: theme === 'dark' ? '#0a0a0a' : '#ffffff',
            borderBottom: theme === 'dark' ? '1px solid #27272a' : '1px solid #e2e8f0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: theme === 'dark' ? '#f4f4f6' : '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>{t.nav.services}</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} style={{ color: theme === 'dark' ? '#f4f4f6' : '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>{t.nav.portfolio}</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} style={{ color: theme === 'dark' ? '#f4f4f6' : '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>{t.nav.calculator}</a>
            <a href="#packages" onClick={() => setMobileMenuOpen(false)} style={{ color: theme === 'dark' ? '#f4f4f6' : '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>{t.nav.pricing}</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: theme === 'dark' ? '#f4f4f6' : '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>{t.nav.faq}</a>
            <a href="#contacts" onClick={() => setMobileMenuOpen(false)} style={{ color: theme === 'dark' ? '#f4f4f6' : '#0f172a', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600 }}>{t.nav.contacts}</a>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (NEUROAESTHETIC SYMMETRY & FULL-BLEED SHOWCASE) */}
      <section style={{
        position: 'relative',
        padding: '80px 24px 100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '40px',
        alignItems: 'center'
      }}>
        {/* Left Column: High-Fashion Editorial Text */}
        <div style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', gap: '24px' }} className="hero-left">
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#e5c07b',
              padding: '6px 14px',
              border: '1px solid rgba(229, 192, 123, 0.35)',
              borderRadius: '40px',
              background: 'rgba(229, 192, 123, 0.06)'
            }}>
              {t.editorial.heroBadge}
            </span>
          </div>

          {/* Main Title with Neuroaesthetic Typography */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: theme === 'dark' ? '#ffffff' : '#0f172a'
          }}>
            {t.editorial.mainTitle}
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #e5c07b 0%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginTop: '6px'
            }}>
              {t.editorial.mainTitleSub}
            </span>
          </h1>

          {/* Price Highlight Tag */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px 24px',
            borderRadius: '16px',
            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.04)',
            border: theme === 'dark' ? '1px solid rgba(229, 192, 123, 0.25)' : '1px solid rgba(15, 23, 42, 0.12)',
            maxWidth: 'fit-content'
          }}>
            <div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', fontWeight: 700, color: '#e5c07b', textTransform: 'uppercase' }}>
                {t.editorial.priceTagLabel}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: theme === 'dark' ? '#ffffff' : '#0f172a', lineHeight: 1 }}>
                600 MDL
              </div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(161, 161, 170, 0.3)', paddingLeft: '16px', fontSize: '0.85rem', color: theme === 'dark' ? '#a1a1aa' : '#475569', maxWidth: '200px', lineHeight: 1.3 }}>
              {t.editorial.priceTagSub}
            </div>
          </div>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.15rem',
            color: theme === 'dark' ? '#a1a1aa' : '#475569',
            maxWidth: '640px',
            lineHeight: 1.6
          }}>
            {t.editorial.subtitle}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a
              href="#calculator"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #e5c07b 0%, #c59b40 100%)',
                color: '#0a0a0a',
                fontWeight: 800,
                fontSize: '1rem',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                boxShadow: '0 8px 24px rgba(229, 192, 123, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <Zap size={18} />
              <span>{t.hero.btnOrder}</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 28px',
                borderRadius: '50px',
                background: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.05)',
                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(15, 23, 42, 0.15)',
                color: theme === 'dark' ? '#ffffff' : '#0f172a',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <MessageCircle size={18} color="#25D366" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* High Status Key Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '20px',
            marginTop: '32px',
            paddingTop: '32px',
            borderTop: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
          }}>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#e5c07b' }}>500+</div>
              <div style={{ fontSize: '0.8rem', color: theme === 'dark' ? '#a1a1aa' : '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.hero.stat1Label}</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#e5c07b' }}>10M+</div>
              <div style={{ fontSize: '0.8rem', color: theme === 'dark' ? '#a1a1aa' : '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.hero.stat2Label}</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#e5c07b' }}>24-48h</div>
              <div style={{ fontSize: '0.8rem', color: theme === 'dark' ? '#a1a1aa' : '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.hero.stat3Label}</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#e5c07b' }}>600 MDL</div>
              <div style={{ fontSize: '0.8rem', color: theme === 'dark' ? '#a1a1aa' : '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.hero.stat4Label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FULL-BLEED VIDEO SHOWCASE & PORTFOLIO */}
      <section id="portfolio" style={{
        padding: '90px 24px',
        backgroundColor: theme === 'dark' ? '#0d0d0e' : '#f1f5f9',
        borderTop: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)',
        borderBottom: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.2em', color: '#e5c07b', textTransform: 'uppercase' }}>
              {t.portfolio.badge}
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, marginTop: '8px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              {t.editorial.videoShowcaseTitle}
            </h2>
            <p style={{ color: theme === 'dark' ? '#a1a1aa' : '#64748b', marginTop: '10px', fontSize: '1.05rem' }}>
              {t.editorial.videoShowcaseSub}
            </p>

            {/* Category Filter Tabs */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '28px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => setActiveCategory('all')}
                style={{
                  padding: '10px 22px',
                  borderRadius: '30px',
                  border: activeCategory === 'all' ? '1px solid #e5c07b' : (theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'),
                  background: activeCategory === 'all' ? '#e5c07b' : (theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'),
                  color: activeCategory === 'all' ? '#0a0a0a' : (theme === 'dark' ? '#ffffff' : '#0f172a'),
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {t.editorial.categoryAll}
              </button>
              <button
                onClick={() => setActiveCategory('food')}
                style={{
                  padding: '10px 22px',
                  borderRadius: '30px',
                  border: activeCategory === 'food' ? '1px solid #e5c07b' : (theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'),
                  background: activeCategory === 'food' ? '#e5c07b' : (theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'),
                  color: activeCategory === 'food' ? '#0a0a0a' : (theme === 'dark' ? '#ffffff' : '#0f172a'),
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {t.editorial.categoryFood}
              </button>
              <button
                onClick={() => setActiveCategory('fashion')}
                style={{
                  padding: '10px 22px',
                  borderRadius: '30px',
                  border: activeCategory === 'fashion' ? '1px solid #e5c07b' : (theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'),
                  background: activeCategory === 'fashion' ? '#e5c07b' : (theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'),
                  color: activeCategory === 'fashion' ? '#0a0a0a' : (theme === 'dark' ? '#ffffff' : '#0f172a'),
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {t.editorial.categoryFashion}
              </button>
              <button
                onClick={() => setActiveCategory('tech')}
                style={{
                  padding: '10px 22px',
                  borderRadius: '30px',
                  border: activeCategory === 'tech' ? '1px solid #e5c07b' : (theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'),
                  background: activeCategory === 'tech' ? '#e5c07b' : (theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'),
                  color: activeCategory === 'tech' ? '#0a0a0a' : (theme === 'dark' ? '#ffffff' : '#0f172a'),
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {t.editorial.categoryTech}
              </button>
            </div>
          </div>

          {/* 9:16 Full-bleed Video Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px'
          }}>
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                style={{
                  position: 'relative',
                  aspectRatio: '9/16',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: item.gradient,
                  cursor: 'pointer',
                  border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="video-card-hover"
              >
                {/* Background Video Simulation */}
                <video
                  src={item.videoUrl}
                  muted
                  loop
                  playsInline
                  autoPlay
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.85,
                    filter: 'contrast(105%)'
                  }}
                />

                {/* Editorial Top Overlay Badge */}
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
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(8px)',
                    color: '#e5c07b',
                    border: '1px solid rgba(229, 192, 123, 0.3)'
                  }}>
                    {item.tag}
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '20px',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Eye size={13} color="#e5c07b" />
                    {item.views}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(229, 192, 123, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(229, 192, 123, 0.5)',
                  transition: 'transform 0.2s ease',
                  zIndex: 2
                }}>
                  <Play size={28} color="#0a0a0a" fill="#0a0a0a" style={{ marginLeft: '4px' }} />
                </div>

                {/* Bottom Card Title Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px 20px',
                  background: 'linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0) 100%)',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#e5c07b', fontWeight: 600 }}>
                    {lang === 'ru' ? item.categoryRu : item.categoryRo}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.3 }}>
                    {lang === 'ru' ? item.titleRu : item.titleRo}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                    <span style={{ fontSize: '0.8rem', color: '#a1a1aa' }}>600 MDL • VIRALIS 9:16</span>
                    <span style={{ color: '#e5c07b', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {t.portfolio.viewProject} <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE NEURO-CALCULATOR SECTION */}
      <section id="calculator" style={{
        padding: '90px 24px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.2em', color: '#e5c07b', textTransform: 'uppercase' }}>
            {t.calculator.badge}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, marginTop: '8px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            {t.editorial.calcTitle}
          </h2>
          <p style={{ color: theme === 'dark' ? '#a1a1aa' : '#64748b', marginTop: '10px', fontSize: '1.05rem' }}>
            {t.editorial.calcSub}
          </p>
        </div>

        {/* Main Calculator Card */}
        <div style={{
          background: theme === 'dark' ? 'rgba(20, 20, 22, 0.85)' : 'rgba(255, 255, 255, 0.95)',
          border: theme === 'dark' ? '1px solid rgba(229, 192, 123, 0.3)' : '1px solid rgba(15, 23, 42, 0.15)',
          borderRadius: '32px',
          padding: '40px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '40px'
        }}>
          {/* Left Controls */}
          <div style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', gap: '32px' }} className="calc-left">
            {/* Video Count Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <label style={{ fontSize: '1.05rem', fontWeight: 700, color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>
                  {t.calculator.videoCountLabel}
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {videoCount >= 5 && (
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#0a0a0a',
                      background: '#e5c07b',
                      padding: '4px 10px',
                      borderRadius: '12px'
                    }}>
                      {videoCount >= 10 ? '-15%' : '-10%'} {t.calculator.discountBadge}
                    </span>
                  )}
                  <span style={{ fontSize: '1.8rem', fontWeight: 900, color: '#e5c07b' }}>
                    {videoCount} {lang === 'ru' ? 'роликов' : 'clipuri'}
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="30"
                value={videoCount}
                onChange={(e) => setVideoCount(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  accentColor: '#e5c07b',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.8rem', color: theme === 'dark' ? '#71717a' : '#94a3b8' }}>
                <span>1 {lang === 'ru' ? 'ролик' : 'clip'}</span>
                <span>5 {lang === 'ru' ? 'роликов (-10%)' : 'clipuri (-10%)'}</span>
                <span>10+ {lang === 'ru' ? 'роликов (-15%)' : 'clipuri (-15%)'}</span>
                <span>30 {lang === 'ru' ? 'роликов' : 'clipuri'}</span>
              </div>
            </div>

            {/* Addons Selection */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '16px', color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>
                {t.calculator.addonsTitle}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Addon 1: Social Media Packaging */}
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  background: addonPackage ? (theme === 'dark' ? 'rgba(229, 192, 123, 0.12)' : 'rgba(15, 23, 42, 0.06)') : (theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'),
                  border: addonPackage ? '1px solid #e5c07b' : (theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'),
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <input
                      type="checkbox"
                      checked={addonPackage}
                      onChange={(e) => setAddonPackage(e.target.checked)}
                      style={{ width: '18px', height: '18px', accentColor: '#e5c07b' }}
                    />
                    <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{t.calculator.addon1}</span>
                  </div>
                </label>

                {/* Addon 2: Targeted Ads */}
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  background: addonAds ? (theme === 'dark' ? 'rgba(229, 192, 123, 0.12)' : 'rgba(15, 23, 42, 0.06)') : (theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'),
                  border: addonAds ? '1px solid #e5c07b' : (theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'),
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <input
                      type="checkbox"
                      checked={addonAds}
                      onChange={(e) => setAddonAds(e.target.checked)}
                      style={{ width: '18px', height: '18px', accentColor: '#e5c07b' }}
                    />
                    <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{t.calculator.addon2}</span>
                  </div>
                </label>

                {/* Free Bonus Items */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#e5c07b', paddingLeft: '8px', marginTop: '4px' }}>
                  <CheckCircle2 size={16} />
                  <span>{t.calculator.addon3}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#e5c07b', paddingLeft: '8px' }}>
                  <CheckCircle2 size={16} />
                  <span>{t.calculator.addon4}</span>
                </div>
              </div>
            </div>

            {/* Total Calculation & Order Buttons */}
            <div style={{
              marginTop: '16px',
              paddingTop: '24px',
              borderTop: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: theme === 'dark' ? '#a1a1aa' : '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t.calculator.totalLabel}
                </div>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#e5c07b', lineHeight: 1.1 }}>
                  {finalPrice.toLocaleString()} MDL
                </div>
                {savingsAmount > 0 && (
                  <div style={{ fontSize: '0.9rem', color: '#22c55e', fontWeight: 700, marginTop: '4px' }}>
                    {t.calculator.totalSaved} {savingsAmount.toLocaleString()} MDL
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href={getWhatsAppLink(`Здравствуйте! Расчитал проект на ${videoCount} роликов за ${finalPrice} MDL. Хочу забронировать!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    minWidth: '220px',
                    padding: '16px',
                    borderRadius: '50px',
                    background: '#25D366',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 20px rgba(37, 211, 102, 0.25)'
                  }}
                >
                  <MessageCircle size={20} />
                  <span>{t.calculator.orderWhatsApp}</span>
                </a>
                <a
                  href="tel:+37378337228"
                  style={{
                    flex: 1,
                    minWidth: '220px',
                    padding: '16px',
                    borderRadius: '50px',
                    background: theme === 'dark' ? 'linear-gradient(135deg, #e5c07b 0%, #c59b40 100%)' : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                    color: theme === 'dark' ? '#0a0a0a' : '#ffffff',
                    fontWeight: 800,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <Phone size={18} />
                  <span>{t.calculator.orderCall}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EDITORIAL PACKAGES & PRICING TIERS */}
      <section id="packages" style={{
        padding: '90px 24px',
        backgroundColor: theme === 'dark' ? '#0d0d0e' : '#f1f5f9',
        borderTop: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.2em', color: '#e5c07b', textTransform: 'uppercase' }}>
              {t.packages.badge}
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, marginTop: '8px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              {t.editorial.packagesTitle}
            </h2>
            <p style={{ color: theme === 'dark' ? '#a1a1aa' : '#64748b', marginTop: '10px', fontSize: '1.05rem' }}>
              {t.editorial.packagesSub}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px'
          }}>
            {/* Package 1: 600 MDL */}
            <div style={{
              background: theme === 'dark' ? 'rgba(20, 20, 22, 0.75)' : '#ffffff',
              border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '24px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t.packages.p1Title}</h3>
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#e5c07b' }}>{t.packages.p1Price}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: theme === 'dark' ? '#a1a1aa' : '#64748b' }}>MDL</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: theme === 'dark' ? '#a1a1aa' : '#64748b', marginTop: '4px' }}>{t.packages.p1Sub}</div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p1F1}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p1F2}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p1F3}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p1F4}</li>
                </ul>
              </div>
              <a href={getWhatsAppLink("Заказ 1 ролика за 600 MDL")} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', textAlign: 'center', padding: '14px', borderRadius: '40px', background: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', color: theme === 'dark' ? '#ffffff' : '#0f172a', fontWeight: 700, fontSize: '0.9rem' }}>
                {t.packages.p1Btn}
              </a>
            </div>

            {/* Package 2: Quick Start */}
            <div style={{
              background: theme === 'dark' ? 'rgba(20, 20, 22, 0.75)' : '#ffffff',
              border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '24px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t.packages.p2Title}</h3>
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#e5c07b' }}>{t.packages.p2Price}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: theme === 'dark' ? '#a1a1aa' : '#64748b' }}>MDL</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: theme === 'dark' ? '#a1a1aa' : '#64748b', marginTop: '4px' }}>{t.packages.p2Sub}</div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p2F1}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p2F2}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p2F3}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p2F4}</li>
                </ul>
              </div>
              <a href={getWhatsAppLink("Заказ пакета 5 роликов за 2700 MDL")} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', textAlign: 'center', padding: '14px', borderRadius: '40px', background: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', color: theme === 'dark' ? '#ffffff' : '#0f172a', fontWeight: 700, fontSize: '0.9rem' }}>
                {t.packages.p2Btn}
              </a>
            </div>

            {/* Package 3: Viral Launch (Popular Choice) */}
            <div style={{
              background: theme === 'dark' ? 'linear-gradient(135deg, rgba(28, 26, 23, 0.95) 0%, rgba(15, 14, 12, 0.95) 100%)' : '#ffffff',
              border: '2px solid #e5c07b',
              borderRadius: '24px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: '0 12px 30px rgba(229, 192, 123, 0.18)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#e5c07b',
                color: '#0a0a0a',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '4px 14px',
                borderRadius: '20px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                {t.packages.popular}
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t.packages.p3Title}</h3>
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#e5c07b' }}>{t.packages.p3Price}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: theme === 'dark' ? '#a1a1aa' : '#64748b' }}>MDL</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: theme === 'dark' ? '#a1a1aa' : '#64748b', marginTop: '4px' }}>{t.packages.p3Sub}</div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p3F1}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p3F2}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p3F3}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p3F4}</li>
                </ul>
              </div>
              <a href={getWhatsAppLink("Заказ Вирусного Запуска за 5100 MDL")} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', textAlign: 'center', padding: '14px', borderRadius: '40px', background: 'linear-gradient(135deg, #e5c07b 0%, #c59b40 100%)', color: '#0a0a0a', fontWeight: 800, fontSize: '0.9rem' }}>
                {t.packages.p3Btn}
              </a>
            </div>

            {/* Package 4: VIP Turnkey */}
            <div style={{
              background: theme === 'dark' ? 'rgba(20, 20, 22, 0.75)' : '#ffffff',
              border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '24px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t.packages.p4Title}</h3>
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#e5c07b' }}>{t.packages.p4Price}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: theme === 'dark' ? '#a1a1aa' : '#64748b' }}>MDL</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: theme === 'dark' ? '#a1a1aa' : '#64748b', marginTop: '4px' }}>{t.packages.p4Sub}</div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p4F1}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p4F2}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p4F3}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><Check size={16} color="#e5c07b" /> {t.packages.p4F4}</li>
                </ul>
              </div>
              <a href={getWhatsAppLink("Заказ VIP пакета за 9900 MDL")} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', textAlign: 'center', padding: '14px', borderRadius: '40px', background: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', color: theme === 'dark' ? '#ffffff' : '#0f172a', fontWeight: 700, fontSize: '0.9rem' }}>
                {t.packages.p4Btn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BEFORE VS AFTER COMPARISON (NEUROAESTHETIC SYMMETRY) */}
      <section style={{
        padding: '90px 24px',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.2em', color: '#e5c07b', textTransform: 'uppercase' }}>
            {t.beforeAfter.badge}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, marginTop: '8px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            {t.editorial.beforeAfterTitle}
          </h2>
          <p style={{ color: theme === 'dark' ? '#a1a1aa' : '#64748b', marginTop: '10px', fontSize: '1.05rem' }}>
            {t.editorial.beforeAfterSub}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {/* Before: Phone Video */}
          <div style={{
            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '24px',
            padding: '36px'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ef4444', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <XCircle size={20} /> {t.beforeAfter.beforeTitle}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ color: theme === 'dark' ? '#a1a1aa' : '#64748b', fontSize: '0.95rem', lineHeight: 1.5 }}>• {t.beforeAfter.before1}</li>
              <li style={{ color: theme === 'dark' ? '#a1a1aa' : '#64748b', fontSize: '0.95rem', lineHeight: 1.5 }}>• {t.beforeAfter.before2}</li>
              <li style={{ color: theme === 'dark' ? '#a1a1aa' : '#64748b', fontSize: '0.95rem', lineHeight: 1.5 }}>• {t.beforeAfter.before3}</li>
              <li style={{ color: theme === 'dark' ? '#a1a1aa' : '#64748b', fontSize: '0.95rem', lineHeight: 1.5 }}>• {t.beforeAfter.before4}</li>
            </ul>
          </div>

          {/* After: VIRALIS 600 MDL */}
          <div style={{
            background: theme === 'dark' ? 'rgba(229, 192, 123, 0.06)' : 'rgba(15, 23, 42, 0.04)',
            border: '1px solid #e5c07b',
            borderRadius: '24px',
            padding: '36px',
            boxShadow: '0 10px 30px rgba(229, 192, 123, 0.12)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e5c07b', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={20} /> {t.beforeAfter.afterTitle}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ color: theme === 'dark' ? '#f4f4f6' : '#0f172a', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.5 }}>✓ {t.beforeAfter.after1}</li>
              <li style={{ color: theme === 'dark' ? '#f4f4f6' : '#0f172a', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.5 }}>✓ {t.beforeAfter.after2}</li>
              <li style={{ color: theme === 'dark' ? '#f4f4f6' : '#0f172a', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.5 }}>✓ {t.beforeAfter.after3}</li>
              <li style={{ color: theme === 'dark' ? '#f4f4f6' : '#0f172a', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.5 }}>✓ {t.beforeAfter.after4}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section id="faq" style={{
        padding: '90px 24px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.2em', color: '#e5c07b', textTransform: 'uppercase' }}>
            {t.faq.badge}
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, marginTop: '8px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            {t.editorial.faqTitle}
          </h2>
          <p style={{ color: theme === 'dark' ? '#a1a1aa' : '#64748b', marginTop: '10px', fontSize: '1.05rem' }}>
            {t.editorial.faqSub}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { q: t.faq.q1, a: t.faq.a1 },
            { q: t.faq.q2, a: t.faq.a2 },
            { q: t.faq.q3, a: t.faq.a3 },
            { q: t.faq.q4, a: t.faq.a4 },
            { q: t.faq.q5, a: t.faq.a5 },
            { q: t.faq.q6, a: t.faq.a6 }
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
              style={{
                background: theme === 'dark' ? 'rgba(20, 20, 22, 0.75)' : '#ffffff',
                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                padding: '20px 24px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>
                  {item.q}
                </h3>
                {openFaqIndex === idx ? <ChevronUp size={20} color="#e5c07b" /> : <ChevronDown size={20} color="#a1a1aa" />}
              </div>
              {openFaqIndex === idx && (
                <p style={{ marginTop: '14px', fontSize: '0.95rem', color: theme === 'dark' ? '#a1a1aa' : '#475569', lineHeight: 1.6 }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. CONTACT & BOOKING FORM SECTION */}
      <section id="contacts" style={{
        padding: '90px 24px',
        backgroundColor: theme === 'dark' ? '#0d0d0e' : '#f1f5f9',
        borderTop: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(0, 0, 0, 0.06)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.2em', color: '#e5c07b', textTransform: 'uppercase' }}>
              {t.contactsForm.badge}
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, marginTop: '8px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              {t.editorial.contactsTitle}
            </h2>
            <p style={{ color: theme === 'dark' ? '#a1a1aa' : '#64748b', marginTop: '10px', fontSize: '1.05rem' }}>
              {t.editorial.contactsSub}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {/* Team Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Alexander */}
              <div style={{
                background: theme === 'dark' ? 'rgba(20, 20, 22, 0.8)' : '#ffffff',
                border: theme === 'dark' ? '1px solid rgba(229, 192, 123, 0.3)' : '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#e5c07b',
                  color: '#0a0a0a',
                  fontWeight: 900,
                  fontSize: '1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  А
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{t.team.alexTitle}</h4>
                  <div style={{ fontSize: '0.8rem', color: '#e5c07b', fontWeight: 700 }}>{t.editorial.alexRole}</div>
                  <a href="tel:+37378337228" style={{ fontSize: '0.95rem', fontWeight: 700, color: theme === 'dark' ? '#ffffff' : '#0f172a', textDecoration: 'none', marginTop: '4px', display: 'inline-block' }}>
                    +373 78 337 228
                  </a>
                </div>
              </div>

              {/* Stanislav */}
              <div style={{
                background: theme === 'dark' ? 'rgba(20, 20, 22, 0.8)' : '#ffffff',
                border: theme === 'dark' ? '1px solid rgba(229, 192, 123, 0.3)' : '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#e5c07b',
                  color: '#0a0a0a',
                  fontWeight: 900,
                  fontSize: '1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  С
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{t.team.stanTitle}</h4>
                  <div style={{ fontSize: '0.8rem', color: '#e5c07b', fontWeight: 700 }}>{t.editorial.stanRole}</div>
                  <a href="tel:+37376596941" style={{ fontSize: '0.95rem', fontWeight: 700, color: theme === 'dark' ? '#ffffff' : '#0f172a', textDecoration: 'none', marginTop: '4px', display: 'inline-block' }}>
                    +373 76 59 69 41
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <form onSubmit={handleFormSubmit} style={{
              background: theme === 'dark' ? 'rgba(20, 20, 22, 0.9)' : '#ffffff',
              border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '24px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {formSuccess ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <CheckCircle2 size={48} color="#22c55e" style={{ margin: '0 auto 16px auto' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t.contactsForm.successTitle}</h3>
                  <p style={{ color: theme === 'dark' ? '#a1a1aa' : '#64748b', marginTop: '8px' }}>{t.contactsForm.successDesc}</p>
                </div>
              ) : (
                <>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>{t.contactsForm.nameLabel}</label>
                    <input
                      type="text"
                      required
                      placeholder={t.contactsForm.namePlaceholder}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '12px',
                        background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        border: theme === 'dark' ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.15)',
                        color: theme === 'dark' ? '#ffffff' : '#0f172a',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>{t.contactsForm.phoneLabel}</label>
                    <input
                      type="tel"
                      required
                      placeholder={t.contactsForm.phonePlaceholder}
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '12px',
                        background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        border: theme === 'dark' ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.15)',
                        color: theme === 'dark' ? '#ffffff' : '#0f172a',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>{t.contactsForm.businessLabel}</label>
                    <input
                      type="text"
                      placeholder={t.contactsForm.businessPlaceholder}
                      value={formState.business}
                      onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '12px',
                        background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        border: theme === 'dark' ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.15)',
                        color: theme === 'dark' ? '#ffffff' : '#0f172a',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      padding: '16px',
                      borderRadius: '50px',
                      background: 'linear-gradient(135deg, #e5c07b 0%, #c59b40 100%)',
                      color: '#0a0a0a',
                      fontWeight: 800,
                      fontSize: '1rem',
                      border: 'none',
                      cursor: 'pointer',
                      marginTop: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? t.contactsForm.submitting : t.contactsForm.btnSubmit}</span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* 10. SIMULATED 9:16 VIDEO MODAL */}
      {selectedVideo && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '380px',
            aspectRatio: '9/16',
            borderRadius: '24px',
            overflow: 'hidden',
            background: '#000000',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
            border: '1px solid rgba(229, 192, 123, 0.4)'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                background: 'rgba(0, 0, 0, 0.6)',
                border: 'none',
                color: '#ffffff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label={t.modal.close}
            >
              <X size={20} />
            </button>

            {/* Video Element */}
            <video
              src={selectedVideo.videoUrl}
              autoPlay
              loop
              playsInline
              muted={isMuted}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Controls Overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '24px 20px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.05rem' }}>
                  {lang === 'ru' ? selectedVideo.titleRu : selectedVideo.titleRo}
                </h4>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  style={{ background: 'transparent', border: 'none', color: '#e5c07b', cursor: 'pointer' }}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>

              <a
                href={getWhatsAppLink(`Заказ ролика в стиле: ${lang === 'ru' ? selectedVideo.titleRu : selectedVideo.titleRo}`)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '14px',
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, #e5c07b 0%, #c59b40 100%)',
                  color: '#0a0a0a',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                {t.editorial.modalOrderSimilar}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 11. EDITORIAL FOOTER */}
      <footer style={{
        padding: '48px 24px',
        backgroundColor: theme === 'dark' ? '#070708' : '#e2e8f0',
        borderTop: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: theme === 'dark' ? '#71717a' : '#64748b'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 900, color: theme === 'dark' ? '#ffffff' : '#0f172a', letterSpacing: '0.1em' }}>
            VIRALIS MEDIA STUDIO
          </div>
          <div>{t.footer.tagline}</div>
          <div>© {new Date().getFullYear()} VIRALIS. {t.footer.rights} • 600 MDL / Video Production in Moldova</div>
        </div>
      </footer>
    </div>
  );
}
