import React, { useState, useEffect } from 'react';
import './App.css';
import { translations } from './data/translations';
import Variant1_CialdiniLuxury from './variants/Variant1_CialdiniLuxury';
import Variant2_FrictionlessKrug from './variants/Variant2_FrictionlessKrug';
import Variant3_BehavioralKahneman from './variants/Variant3_BehavioralKahneman';
import Variant4_EditorialAesthetics from './variants/Variant4_EditorialAesthetics';
import Variant5_ViralCreator from './variants/Variant5_ViralCreator';
import Variant6_SwissBrutalist from './variants/Variant6_SwissBrutalist';
import Variant7_WarmPaperStudio from './variants/Variant7_WarmPaperStudio';
import Variant8_KineticMagazine from './variants/Variant8_KineticMagazine';
import Variant9_ArchitecturalDark from './variants/Variant9_ArchitecturalDark';
import Variant10_AnalogFilmStudio from './variants/Variant10_AnalogFilmStudio';
import Variant11_SplitStoryteller from './variants/Variant11_SplitStoryteller';
import Variant12_FrostedSpatial from './variants/Variant12_FrostedSpatial';
import Variant13_NeoBrutalistPop from './variants/Variant13_NeoBrutalistPop';
import Variant14_HighContrastGoldFoil from './variants/Variant14_HighContrastGoldFoil';
import Variant15_OrganicSoftCurves from './variants/Variant15_OrganicSoftCurves';
import {
  Video,
  Sparkles,
  Share2,
  Mic,
  Package,
  Phone,
  MessageCircle,
  Play,
  CheckCircle2,
  Calculator,
  ChevronDown,
  ChevronUp,
  Award,
  Clock,
  MapPin,
  TrendingUp,
  Send,
  Menu,
  X,
  Zap,
  Flame,
  Check,
  Star,
  Moon,
  Sun,
  XCircle,
  Layers
} from 'lucide-react';

export default function App({ lang: propLang, theme: propTheme }) {
  const [lang, setLang] = useState(propLang || 'ru'); // 'ru' or 'ro'
  const [theme, setTheme] = useState(propTheme || 'dark'); // 'dark' (Editorial Dark) or 'light' (Studio Light)
  const [currentVariant, setCurrentVariant] = useState(0); // 0 = Main, 1..15 = Science Variants

  useEffect(() => {
    if (propLang) setLang(propLang);
  }, [propLang]);

  useEffect(() => {
    if (propTheme) setTheme(propTheme);
  }, [propTheme]);

  const t = translations[lang] || translations['ru'];

  // Update HTML data-theme attribute on theme state change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calculator State
  const [videoCount, setVideoCount] = useState(5);
  const [addonPackage, setAddonPackage] = useState(false);
  const [addonAds, setAddonAds] = useState(false);

  // Calculate Price logic
  const basePricePerVideo = 600;
  let discountRate = 0;
  if (videoCount >= 10) discountRate = 0.15; // 15% discount for 10+
  else if (videoCount >= 5) discountRate = 0.10; // 10% discount for 5+

  const rawTotal = videoCount * basePricePerVideo;
  const discountedBase = Math.round(rawTotal * (1 - discountRate));
  const addonsTotal = (addonPackage ? 500 : 0) + (addonAds ? 800 : 0);
  const finalPrice = discountedBase + addonsTotal;
  const totalSaved = rawTotal - discountedBase;

  // Portfolio category filter
  const [activeCategory, setActiveCategory] = useState('all');

  // Video Modal state
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Lead Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    language: lang === 'ru' ? 'Русский' : 'Română',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // WhatsApp link generator with prefilled text
  const getWhatsAppLink = (customText) => {
    const text = encodeURIComponent(
      customText ||
        (lang === 'ru'
          ? `Здравствуйте! Хочу заказать ${videoCount} роликов (${finalPrice} MDL). Мой номер: `
          : `Bună ziua! Doresc să comand ${videoCount} clipuri (${finalPrice} MDL). Numărul meu: `)
    );
    return `https://wa.me/37378337228?text=${text}`;
  };

  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      title: t.portfolio.reel1Title,
      category: 'food',
      categoryName: t.portfolio.reel1Category,
      views: t.portfolio.reel1Views,
      image: '/assets/reel_restaurant.jpg',
      tags: ['TikTok', 'Reels', '600 MDL']
    },
    {
      id: 2,
      title: t.portfolio.reel2Title,
      category: 'fashion',
      categoryName: t.portfolio.reel2Category,
      views: t.portfolio.reel2Views,
      image: '/assets/reel_fashion.jpg',
      tags: ['Instagram', 'Reels', 'Boutique']
    },
    {
      id: 3,
      title: t.portfolio.reel3Title,
      category: 'tech',
      categoryName: t.portfolio.reel3Category,
      views: t.portfolio.reel3Views,
      image: '/assets/reel_tech.jpg',
      tags: ['Facebook Ads', 'Services', 'Moldova']
    }
  ];

  const filteredPortfolio =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const faqItems = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 }
  ];

  return (
    <div className="app-container">
      {/* 🎨 Dynamic Concept Variant Selector Bar */}
      <div style={{ background: '#000000', color: '#ffffff', padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap', zIndex: 3000, position: 'relative' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#e5c07b', display: 'flex', alignItems: 'center', gap: '4px', marginRight: '4px' }}>
          <Layers size={14} /> {lang === 'ru' ? 'Выбор концепта:' : 'Concept:'}
        </span>
        {[
          { id: 0, label: lang === 'ru' ? '0. Текущий' : '0. Actual', color: '#e5c07b' },
          { id: 1, label: '1. Чалдини', color: '#e5c07b' },
          { id: 2, label: '2. Круг', color: '#2563eb' },
          { id: 3, label: '3. Канеман ROI', color: '#10b981' },
          { id: 4, label: '4. Нейро', color: '#ffffff' },
          { id: 5, label: '5. Креатор', color: '#c084fc' },
          { id: 6, label: '6. Swiss Brutalist', color: '#e5c07b' },
          { id: 7, label: '7. Warm Paper', color: '#b45309' },
          { id: 8, label: '8. Kinetic Mag', color: '#f59e0b' },
          { id: 9, label: '9. Arch Dark', color: '#ffffff' },
          { id: 10, label: '10. Film Studio', color: '#ef4444' },
          { id: 11, label: '11. Split Story', color: '#e5c07b' },
          { id: 12, label: '12. Frosted Spatial', color: '#38bdf8' },
          { id: 13, label: '13. Neo-Brutalist', color: '#facc15' },
          { id: 14, label: '14. Gold Foil', color: '#d4af37' },
          { id: 15, label: '15. Organic Curves', color: '#ea580c' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentVariant(item.id)}
            style={{
              background: currentVariant === item.id ? item.color : 'rgba(255,255,255,0.08)',
              color: currentVariant === item.id ? '#000000' : '#ffffff',
              border: 'none',
              padding: '4px 10px',
              borderRadius: '16px',
              fontSize: '0.75rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Render selected variant or main design */}
      {currentVariant === 1 && <Variant1_CialdiniLuxury lang={lang} />}
      {currentVariant === 2 && <Variant2_FrictionlessKrug lang={lang} />}
      {currentVariant === 3 && <Variant3_BehavioralKahneman lang={lang} />}
      {currentVariant === 4 && <Variant4_EditorialAesthetics lang={lang} />}
      {currentVariant === 5 && <Variant5_ViralCreator lang={lang} />}
      {currentVariant === 6 && <Variant6_SwissBrutalist lang={lang} />}
      {currentVariant === 7 && <Variant7_WarmPaperStudio lang={lang} />}
      {currentVariant === 8 && <Variant8_KineticMagazine lang={lang} />}
      {currentVariant === 9 && <Variant9_ArchitecturalDark lang={lang} />}
      {currentVariant === 10 && <Variant10_AnalogFilmStudio lang={lang} />}
      {currentVariant === 11 && <Variant11_SplitStoryteller lang={lang} />}
      {currentVariant === 12 && <Variant12_FrostedSpatial lang={lang} />}
      {currentVariant === 13 && <Variant13_NeoBrutalistPop lang={lang} />}
      {currentVariant === 14 && <Variant14_HighContrastGoldFoil lang={lang} />}
      {currentVariant === 15 && <Variant15_OrganicSoftCurves lang={lang} />}

      {currentVariant === 0 && (
        <>
      {/* Top Urgency Ticker Banner */}
      <div className="urgency-banner">
        <span>📍 {t.urgency.badge}:</span>
        <span>{t.urgency.text}</span>
        <span className="urgency-slots-badge">{t.urgency.slots}</span>
        <span>{t.urgency.textEnd}</span>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#" className="logo-brand">
            <div className="logo-icon">
              <Video size={22} />
            </div>
            <div>
              <div className="logo-text-title">VIRALIS</div>
              <div className="logo-text-sub">MEDIA STUDIO MD</div>
            </div>
          </a>

          {/* Navigation */}
          <nav>
            <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li>
                <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#calculator" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.testimonials}
                </a>
              </li>
              <li>
                <a href="#team" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.team}
                </a>
              </li>
              <li>
                <a href="#contacts" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  {t.nav.contacts}
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            {/* Theme Toggle Pill */}
            <div className="theme-switcher">
              <button
                className={`theme-toggle-btn ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
                title={t.themes.dark}
              >
                <Moon size={14} />
              </button>
              <button
                className={`theme-toggle-btn ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
                title={t.themes.light}
              >
                <Sun size={14} />
              </button>
            </div>

            {/* Language Switcher */}
            <div className="lang-switcher">
              <button
                className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
                onClick={() => setLang('ru')}
              >
                RU
              </button>
              <button
                className={`lang-btn ${lang === 'ro' ? 'active' : ''}`}
                onClick={() => setLang('ro')}
              >
                RO
              </button>
            </div>

            <a href="tel:+37378337228" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
              <Phone size={14} />
              <span className="desktop-only">+373 78 337 228</span>
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge-pill">
              <Sparkles size={14} /> {t.hero.badge}
            </div>

            <h1>
              {t.hero.title} <br />
              <span className="gradient-text">{t.hero.titleHighlight}</span>
            </h1>

            <p className="hero-subtitle">{t.hero.subtitle}</p>

            <div className="hero-price-callout">
              <div>
                <span className="hero-price-amount">{t.hero.priceTagValue}</span>
                <span style={{ fontSize: '1rem', fontWeight: '700', marginLeft: '6px', color: 'var(--text-main)' }}>MDL</span>
              </div>
              <div style={{ borderLeft: '1px solid var(--glass-border)', paddingLeft: '16px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.hero.priceTagLabel}</div>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)' }}>{t.hero.priceTagSub}</div>
              </div>
            </div>

            <div className="hero-buttons">
              <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn-whatsapp">
                <MessageCircle size={18} />
                {t.hero.btnOrder}
              </a>

              <a href="#calculator" className="btn-secondary">
                <Calculator size={18} />
                {t.hero.btnCalc}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-img-wrapper">
              <img src="/assets/hero_banner.jpg" alt="VIRALIS Media Studio" />
            </div>

            {/* Floating badges */}
            <div className="floating-badge badge-top-right">
              <Flame color="#ef4444" size={20} />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-main)' }}>{t.hero.badgeViews}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.hero.badgeReels}</div>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <Zap color="var(--accent-gold)" size={20} />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-main)' }}>{t.hero.badgeHours}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.hero.badgeDelivery}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-section">
        <div className="glass-panel stats-grid">
          <div className="stat-card">
            <div className="stat-number">{t.hero.stat1Number}</div>
            <div className="stat-label">{t.hero.stat1Label}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{t.hero.stat2Number}</div>
            <div className="stat-label">{t.hero.stat2Label}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{t.hero.stat3Number}</div>
            <div className="stat-label">{t.hero.stat3Label}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" style={{ color: 'var(--accent-gold)' }}>
              {t.hero.stat4Number}
            </div>
            <div className="stat-label">{t.hero.stat4Label}</div>
          </div>
        </div>
      </section>

      {/* Price Highlight Banner */}
      <section className="price-banner-wrapper">
        <div className="price-banner-box">
          <div>
            <div className="badge-pill" style={{ marginBottom: '12px' }}>
              <Flame size={14} /> {t.pricingBanner.titleSub}
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '12px', color: 'var(--text-main)' }}>
              {t.pricingBanner.title}
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', fontSize: '1.05rem' }}>
              {t.pricingBanner.description}
            </p>
          </div>

          <div className="price-banner-price">
            <div className="price-banner-val">{t.pricingBanner.price}</div>
            <div style={{ color: 'var(--text-muted)', fontWeight: '600', marginBottom: '16px' }}>
              {t.pricingBanner.unit}
            </div>
            <a href="#contacts" className="btn-primary">
              {t.pricingBanner.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-wrapper">
        <div className="section-header">
          <div className="badge-pill">{t.services.badge}</div>
          <h2>{t.services.title}</h2>
          <p>{t.services.subtitle}</p>
        </div>

        <div className="services-grid">
          <div className="glass-panel service-card">
            <div className="service-icon-box">
              <Video size={26} />
            </div>
            <h3>{t.services.item1Title}</h3>
            <p>{t.services.item1Desc}</p>
          </div>

          <div className="glass-panel service-card">
            <div className="service-icon-box">
              <Share2 size={26} />
            </div>
            <h3>{t.services.item2Title}</h3>
            <p>{t.services.item2Desc}</p>
          </div>

          <div className="glass-panel service-card">
            <div className="service-icon-box">
              <Sparkles size={26} />
            </div>
            <h3>{t.services.item3Title}</h3>
            <p>{t.services.item3Desc}</p>
          </div>

          <div className="glass-panel service-card">
            <div className="service-icon-box">
              <TrendingUp size={26} />
            </div>
            <h3>{t.services.item4Title}</h3>
            <p>{t.services.item4Desc}</p>
          </div>

          <div className="glass-panel service-card">
            <div className="service-icon-box">
              <Mic size={26} />
            </div>
            <h3>{t.services.item5Title}</h3>
            <p>{t.services.item5Desc}</p>
          </div>

          <div className="glass-panel service-card">
            <div className="service-icon-box">
              <Package size={26} />
            </div>
            <h3>{t.services.item6Title}</h3>
            <p>{t.services.item6Desc}</p>
          </div>
        </div>
      </section>

      {/* Before / After Comparison Section */}
      <section className="section-wrapper" style={{ background: 'rgba(0, 0, 0, 0.02)' }}>
        <div className="section-header">
          <div className="badge-pill">{t.beforeAfter.badge}</div>
          <h2>{t.beforeAfter.title}</h2>
          <p>{t.beforeAfter.subtitle}</p>
        </div>

        <div className="ba-grid">
          <div className="glass-panel ba-card before">
            <h3 style={{ fontSize: '1.25rem', color: '#ef4444', marginBottom: '16px' }}>
              {t.beforeAfter.beforeTitle}
            </h3>
            <ul className="ba-list">
              <li><XCircle color="#ef4444" size={18} style={{ flexShrink: 0 }} /> <span>{t.beforeAfter.before1}</span></li>
              <li><XCircle color="#ef4444" size={18} style={{ flexShrink: 0 }} /> <span>{t.beforeAfter.before2}</span></li>
              <li><XCircle color="#ef4444" size={18} style={{ flexShrink: 0 }} /> <span>{t.beforeAfter.before3}</span></li>
              <li><XCircle color="#ef4444" size={18} style={{ flexShrink: 0 }} /> <span>{t.beforeAfter.before4}</span></li>
            </ul>
          </div>

          <div className="glass-panel ba-card after">
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', marginBottom: '16px' }}>
              {t.beforeAfter.afterTitle}
            </h3>
            <ul className="ba-list">
              <li><CheckCircle2 color="var(--accent-gold)" size={18} style={{ flexShrink: 0 }} /> <span>{t.beforeAfter.after1}</span></li>
              <li><CheckCircle2 color="var(--accent-gold)" size={18} style={{ flexShrink: 0 }} /> <span>{t.beforeAfter.after2}</span></li>
              <li><CheckCircle2 color="var(--accent-gold)" size={18} style={{ flexShrink: 0 }} /> <span>{t.beforeAfter.after3}</span></li>
              <li><CheckCircle2 color="var(--accent-gold)" size={18} style={{ flexShrink: 0 }} /> <span>{t.beforeAfter.after4}</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Budget Calculator */}
      <section id="calculator" className="section-wrapper">
        <div className="section-header">
          <div className="badge-pill">{t.calculator.badge}</div>
          <h2>{t.calculator.title}</h2>
          <p>{t.calculator.subtitle}</p>
        </div>

        <div className="glass-panel-glow calc-card">
          <div className="calc-slider-box">
            <div className="calc-slider-header">
              <label>{t.calculator.videoCountLabel}</label>
              <div className="calc-count-val">{videoCount} {lang === 'ru' ? 'роликов' : 'clipuri'}</div>
            </div>

            <input
              type="range"
              min="1"
              max="30"
              value={videoCount}
              onChange={(e) => setVideoCount(parseInt(e.target.value))}
              className="range-slider"
            />

            {discountRate > 0 && (
              <div style={{ marginTop: '12px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span className="badge-pill" style={{ background: 'rgba(245, 158, 11, 0.12)', color: 'var(--accent-gold)' }}>
                  🎉 {t.calculator.discountBadge} -{discountRate * 100}%
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)' }}>
                  {t.calculator.totalSaved} <strong>{totalSaved} MDL</strong>
                </span>
              </div>
            )}
          </div>

          <div className="calc-addons-title">{t.calculator.addonsTitle}</div>
          <div className="calc-addons-grid">
            <label className="calc-addon-item">
              <input
                type="checkbox"
                checked={addonPackage}
                onChange={(e) => setAddonPackage(e.target.checked)}
              />
              <span style={{ fontSize: '0.95rem' }}>{t.calculator.addon1}</span>
            </label>

            <label className="calc-addon-item">
              <input
                type="checkbox"
                checked={addonAds}
                onChange={(e) => setAddonAds(e.target.checked)}
              />
              <span style={{ fontSize: '0.95rem' }}>{t.calculator.addon2}</span>
            </label>

            <label className="calc-addon-item" style={{ opacity: 0.9 }}>
              <input type="checkbox" checked disabled />
              <span style={{ fontSize: '0.95rem', color: 'var(--accent-gold)', fontWeight: '600' }}>
                {t.calculator.addon3}
              </span>
            </label>

            <label className="calc-addon-item" style={{ opacity: 0.9 }}>
              <input type="checkbox" checked disabled />
              <span style={{ fontSize: '0.95rem', color: 'var(--accent-gold)', fontWeight: '600' }}>
                {t.calculator.addon4}
              </span>
            </label>
          </div>

          <div className="calc-summary-box">
            <div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.calculator.totalLabel}</div>
              <div className="calc-total-price">
                {finalPrice.toLocaleString()} <span style={{ fontSize: '1.4rem' }}>MDL</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                ({videoCount} × {basePricePerVideo} MDL {discountRate > 0 ? `- ${discountRate * 100}%` : ''})
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn-whatsapp">
                <MessageCircle size={18} />
                {t.calculator.orderWhatsApp}
              </a>

              <a href="tel:+37378337228" className="btn-secondary">
                <Phone size={18} />
                {t.calculator.orderCall}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="section-wrapper">
        <div className="section-header">
          <div className="badge-pill">{t.portfolio.badge}</div>
          <h2>{t.portfolio.title}</h2>
          <p>{t.portfolio.subtitle}</p>
        </div>

        {/* Filter Tabs */}
        <div className="portfolio-tabs">
          <button
            className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            {t.portfolio.catAll}
          </button>
          <button
            className={`tab-btn ${activeCategory === 'food' ? 'active' : ''}`}
            onClick={() => setActiveCategory('food')}
          >
            {t.portfolio.catFood}
          </button>
          <button
            className={`tab-btn ${activeCategory === 'fashion' ? 'active' : ''}`}
            onClick={() => setActiveCategory('fashion')}
          >
            {t.portfolio.catFashion}
          </button>
          <button
            className={`tab-btn ${activeCategory === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tech')}
          >
            {t.portfolio.catTech}
          </button>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="portfolio-grid">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="glass-panel portfolio-card"
              onClick={() => setActiveModalVideo(item)}
              style={{ cursor: 'pointer' }}
            >
              <div className="portfolio-img-box">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-play-overlay">
                  <div className="play-icon-circle">
                    <Play size={24} style={{ marginLeft: '3px' }} />
                  </div>
                </div>
              </div>

              <div className="portfolio-info">
                <div className="portfolio-meta">
                  <span>{item.categoryName}</span>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>{item.views}</span>
                </div>
                <h3>{item.title}</h3>

                <div style={{ display: 'flex', gap: '6px', marginTop: '12px' }}>
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        background: 'rgba(0,0,0,0.04)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section id="pricing" className="section-wrapper">
        <div className="section-header">
          <div className="badge-pill">{t.packages.badge}</div>
          <h2>{t.packages.title}</h2>
          <p>{t.packages.subtitle}</p>
        </div>

        <div className="packages-grid">
          {/* Tier 1 */}
          <div className="glass-panel package-card">
            <div>
              <h3>{t.packages.p1Title}</h3>
              <div className="package-price-box">
                <span className="package-price-val">{t.packages.p1Price}</span>
                <span style={{ color: 'var(--text-muted)', fontWeight: '700', marginLeft: '6px' }}>{t.packages.p1Unit}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                {t.packages.p1Sub}
              </div>

              <ul className="package-features">
                <li><Check size={16} /> {t.packages.p1F1}</li>
                <li><Check size={16} /> {t.packages.p1F2}</li>
                <li><Check size={16} /> {t.packages.p1F3}</li>
                <li><Check size={16} /> {t.packages.p1F4}</li>
              </ul>
            </div>

            <a href={getWhatsAppLink(lang === 'ru' ? 'Хочу заказать пакет "Тест-Драйв" (1 ролик — 600 MDL)' : 'Doresc pachetul "Test-Drive" (1 clip — 600 MDL)')} target="_blank" rel="noreferrer" className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
              {t.packages.p1Btn}
            </a>
          </div>

          {/* Tier 2 */}
          <div className="glass-panel package-card">
            <div>
              <h3>{t.packages.p2Title}</h3>
              <div className="package-price-box">
                <span className="package-price-val">{t.packages.p2Price}</span>
                <span style={{ color: 'var(--text-muted)', fontWeight: '700', marginLeft: '6px' }}>{t.packages.p2Unit}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '20px', fontWeight: '700' }}>
                {t.packages.p2Sub}
              </div>

              <ul className="package-features">
                <li><Check size={16} /> {t.packages.p2F1}</li>
                <li><Check size={16} /> {t.packages.p2F2}</li>
                <li><Check size={16} /> {t.packages.p2F3}</li>
                <li><Check size={16} /> {t.packages.p2F4}</li>
              </ul>
            </div>

            <a href={getWhatsAppLink(lang === 'ru' ? 'Хочу заказать пакет "Быстрый Старт" (5 роликов — 2700 MDL)' : 'Doresc pachetul "Start Rapid" (5 clipuri — 2700 MDL)')} target="_blank" rel="noreferrer" className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
              {t.packages.p2Btn}
            </a>
          </div>

          {/* Tier 3 (Popular) */}
          <div className="glass-panel package-card popular">
            <div className="popular-badge-tag">{t.packages.popular}</div>
            <div>
              <h3 style={{ color: 'var(--accent-gold)' }}>{t.packages.p3Title}</h3>
              <div className="package-price-box">
                <span className="package-price-val" style={{ color: 'var(--accent-gold)' }}>{t.packages.p3Price}</span>
                <span style={{ color: 'var(--text-main)', fontWeight: '700', marginLeft: '6px' }}>{t.packages.p3Unit}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                {t.packages.p3Sub}
              </div>

              <ul className="package-features">
                <li><Check size={16} /> {t.packages.p3F1}</li>
                <li><Check size={16} /> {t.packages.p3F2}</li>
                <li><Check size={16} /> {t.packages.p3F3}</li>
                <li><Check size={16} /> {t.packages.p3F4}</li>
              </ul>
            </div>

            <a href={getWhatsAppLink(lang === 'ru' ? 'Хочу заказать пакет "Вирусный Запуск" (10 роликов + SMM — 5100 MDL)' : 'Doresc pachetul "Lansare Virală" (10 clipuri + SMM — 5100 MDL)')} target="_blank" rel="noreferrer" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
              {t.packages.p3Btn}
            </a>
          </div>

          {/* Tier 4 */}
          <div className="glass-panel package-card">
            <div>
              <h3>{t.packages.p4Title}</h3>
              <div className="package-price-box">
                <span className="package-price-val">{t.packages.p4Price}</span>
                <span style={{ color: 'var(--text-muted)', fontWeight: '700', marginLeft: '6px' }}>{t.packages.p4Unit}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                {t.packages.p4Sub}
              </div>

              <ul className="package-features">
                <li><Check size={16} /> {t.packages.p4F1}</li>
                <li><Check size={16} /> {t.packages.p4F2}</li>
                <li><Check size={16} /> {t.packages.p4F3}</li>
                <li><Check size={16} /> {t.packages.p4F4}</li>
              </ul>
            </div>

            <a href={getWhatsAppLink(lang === 'ru' ? 'Хочу заказать VIP Пакет (20 роликов + SMM + Ads — 9900 MDL)' : 'Doresc Pachetul VIP (20 clipuri + SMM + Ads — 9900 MDL)')} target="_blank" rel="noreferrer" className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
              {t.packages.p4Btn}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-wrapper" style={{ background: 'rgba(0, 0, 0, 0.02)' }}>
        <div className="section-header">
          <div className="badge-pill">{t.testimonials.badge}</div>
          <h2>{t.testimonials.title}</h2>
          <p>{t.testimonials.subtitle}</p>
        </div>

        <div className="testimonials-grid">
          <div className="glass-panel testimonial-card">
            <div>
              <div style={{ display: 'flex', gap: '4px', color: 'var(--accent-gold)', marginBottom: '16px' }}>
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>
                "{t.testimonials.t1Text}"
              </p>
            </div>
            <div>
              <div style={{ fontWeight: '800', color: 'var(--text-main)' }}>{t.testimonials.t1Name}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.testimonials.t1Role}</div>
            </div>
          </div>

          <div className="glass-panel testimonial-card">
            <div>
              <div style={{ display: 'flex', gap: '4px', color: 'var(--accent-gold)', marginBottom: '16px' }}>
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>
                "{t.testimonials.t2Text}"
              </p>
            </div>
            <div>
              <div style={{ fontWeight: '800', color: 'var(--text-main)' }}>{t.testimonials.t2Name}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.testimonials.t2Role}</div>
            </div>
          </div>

          <div className="glass-panel testimonial-card">
            <div>
              <div style={{ display: 'flex', gap: '4px', color: 'var(--accent-gold)', marginBottom: '16px' }}>
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>
                "{t.testimonials.t3Text}"
              </p>
            </div>
            <div>
              <div style={{ fontWeight: '800', color: 'var(--text-main)' }}>{t.testimonials.t3Name}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.testimonials.t3Role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-wrapper">
        <div className="section-header">
          <div className="badge-pill">{t.whyUs.badge}</div>
          <h2>{t.whyUs.title}</h2>
          <p>{t.whyUs.subtitle}</p>
        </div>

        <div className="why-grid">
          <div className="glass-panel why-card">
            <div className="why-icon">
              <Award size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{t.whyUs.reason1Title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{t.whyUs.reason1Desc}</p>
            </div>
          </div>

          <div className="glass-panel why-card">
            <div className="why-icon">
              <Clock size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{t.whyUs.reason2Title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{t.whyUs.reason2Desc}</p>
            </div>
          </div>

          <div className="glass-panel why-card">
            <div className="why-icon">
              <MapPin size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{t.whyUs.reason3Title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{t.whyUs.reason3Desc}</p>
            </div>
          </div>

          <div className="glass-panel why-card">
            <div className="why-icon">
              <TrendingUp size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{t.whyUs.reason4Title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{t.whyUs.reason4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Direct Contacts Section */}
      <section id="team" className="section-wrapper">
        <div className="section-header">
          <div className="badge-pill">{t.team.badge}</div>
          <h2>{t.team.title}</h2>
          <p>{t.team.subtitle}</p>
        </div>

        <div className="team-grid">
          {/* Member 1: Alexander */}
          <div className="glass-panel team-card">
            <div className="team-avatar">
              <img src="/assets/team_alexander.jpg" alt="Александр" />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{t.team.alexTitle}</h3>
            <div style={{ color: 'var(--text-muted)', fontWeight: '600', marginBottom: '12px', fontSize: '0.9rem' }}>
              {t.team.alexRole}
            </div>

            <a href="tel:+37378337228" className="team-phone-link">
              {t.team.alexPhone}
            </a>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
              {t.team.alexDesc}
            </p>

            <div className="team-actions">
              <a href="tel:+37378337228" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                <Phone size={14} /> {t.team.btnCallDirect}
              </a>
              <a href="https://wa.me/37378337228" target="_blank" rel="noreferrer" className="btn-whatsapp" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                <MessageCircle size={14} /> {t.team.btnWhatsAppDirect}
              </a>
            </div>
          </div>

          {/* Member 2: Stanislav */}
          <div className="glass-panel team-card">
            <div className="team-avatar">
              <img src="/assets/team_stanislav.jpg" alt="Станислав" />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{t.team.stanTitle}</h3>
            <div style={{ color: 'var(--text-muted)', fontWeight: '600', marginBottom: '12px', fontSize: '0.9rem' }}>
              {t.team.stanRole}
            </div>

            <a href="tel:+37376596941" className="team-phone-link">
              {t.team.stanPhone}
            </a>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
              {t.team.stanDesc}
            </p>

            <div className="team-actions">
              <a href="tel:+37376596941" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                <Phone size={14} /> {t.team.btnCallDirect}
              </a>
              <a href="https://wa.me/37376596941" target="_blank" rel="noreferrer" className="btn-whatsapp" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                <MessageCircle size={14} /> {t.team.btnWhatsAppDirect}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="section-wrapper">
        <div className="section-header">
          <div className="badge-pill">{t.faq.badge}</div>
          <h2>{t.faq.title}</h2>
          <p>{t.faq.subtitle}</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, idx) => (
            <div key={idx} className="glass-panel faq-item">
              <div
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span>{item.q}</span>
                {openFaq === idx ? <ChevronUp size={20} color="var(--accent-gold)" /> : <ChevronDown size={20} />}
              </div>

              {openFaq === idx && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Contacts / Booking Form */}
      <section id="contacts" className="section-wrapper">
        <div className="glass-panel-glow contact-container">
          <div className="section-header" style={{ marginBottom: '36px' }}>
            <div className="badge-pill">{t.contactsForm.badge}</div>
            <h2>{t.contactsForm.title}</h2>
            <p>{t.contactsForm.subtitle}</p>
          </div>

          {formSubmitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.15)', display: 'flex', items: 'center', justifyContent: 'center', color: '#25d366', margin: '0 auto 20px' }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '10px' }}>
                {t.contactsForm.successTitle}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px' }}>
                {t.contactsForm.successDesc}
              </p>
              <button
                className="btn-secondary"
                onClick={() => setFormSubmitted(false)}
              >
                Отправить еще одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="form-grid">
              <div className="form-group">
                <label>{t.contactsForm.nameLabel}</label>
                <input
                  type="text"
                  required
                  placeholder={t.contactsForm.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>{t.contactsForm.phoneLabel}</label>
                <input
                  type="tel"
                  required
                  placeholder={t.contactsForm.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>{t.contactsForm.businessLabel}</label>
                <input
                  type="text"
                  placeholder={t.contactsForm.businessPlaceholder}
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>{t.contactsForm.langLabel}</label>
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="form-select"
                >
                  <option value="Русский">{t.contactsForm.langRu}</option>
                  <option value="Română">{t.contactsForm.langRo}</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>{t.contactsForm.msgLabel}</label>
                <textarea
                  rows="3"
                  placeholder={t.contactsForm.msgPlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                ></textarea>
              </div>

              <div className="form-group full-width" style={{ marginTop: '12px' }}>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%', fontSize: '1.05rem' }}>
                  <Send size={18} />
                  {t.contactsForm.btnSubmit}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Video Preview Modal */}
      {activeModalVideo && (
        <div className="modal-overlay" onClick={() => setActiveModalVideo(null)}>
          <div className="modal-content-vertical" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveModalVideo(null)}>
              <X size={20} />
            </button>

            <div style={{ position: 'relative', width: '100%', paddingTop: '160%' }}>
              <img
                src={activeModalVideo.image}
                alt={activeModalVideo.title}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Simulated reel UI overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.85) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '20px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge-pill" style={{ background: 'rgba(0,0,0,0.6)', border: 'none', color: '#fff' }}>
                    {t.modal.reelFormat}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#ffd700', fontWeight: '700' }}>
                    600 MDL
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '6px', color: '#fff' }}>
                    {activeModalVideo.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '16px' }}>
                    {activeModalVideo.views}
                  </p>

                  <a
                    href={getWhatsAppLink(lang === 'ru' ? `Хочу похожий ролик как "${activeModalVideo.title}"` : `Doresc un clip similar ca "${activeModalVideo.title}"`)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp"
                    style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
                  >
                    {t.modal.btnOrderSimilar}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Video size={22} color="var(--accent-gold)" />
              <span style={{ fontSize: '1.15rem', fontWeight: '900' }}>VIRALIS MEDIA MD</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <div style={{ fontWeight: '700', marginBottom: '8px' }}>{t.footer.contactsHeading}</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Александр: <a href="tel:+37378337228" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>+373 78 337 228</a>
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Станислав: <a href="tel:+37376596941" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>+373 76 59 69 41</a>
            </div>
          </div>

          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © 2026 VIRALIS Media Studio. {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* Floating Bottom Sticky Action Bar for Mobile */}
      <div className="mobile-sticky-bar">
        <a href="tel:+37378337228" className="btn-primary">
          <Phone size={16} />
          <span>Александр</span>
        </a>
        <a href="tel:+37376596941" className="btn-primary" style={{ background: '#334155', color: '#fff' }}>
          <Phone size={16} />
          <span>Станислав</span>
        </a>
        <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn-whatsapp">
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>
      </div>
        </>
      )}
    </div>
  );
}
