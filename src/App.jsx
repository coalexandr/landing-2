import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { translations } from './data/translations';
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
  Award,
  Clock,
  MapPin,
  TrendingUp,
  Send,
  Menu,
  X,
  Zap,
  Check,
  Star,
  Moon,
  Sun,
  XCircle,
  Eye,
  Film,
} from 'lucide-react';

/* ---------------------------------------------------------------
   Reveal-on-scroll: fades/slides a section in once visible.
   Pure IntersectionObserver, respects prefers-reduced-motion (CSS).
---------------------------------------------------------------- */
function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------
   CountUp: animates the leading number inside a stat string
   ("500+", "10M+", "600 MDL") once it scrolls into view.
   Falls back to a plain reveal for non-numeric values ("24-48ч").
---------------------------------------------------------------- */
function CountUp({ value, duration = 1200 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    const match = /^(\d+)(.*)$/.exec(value);
    if (!match) {
      setDisplay(value);
      return undefined;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const node = ref.current;
    if (!node) return undefined;

    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - progress) * (1 - progress);
            setDisplay(Math.round(eased * target) + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    setDisplay('0' + suffix);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display ?? value}</span>;
}

/* ---------------------------------------------------------------
   Thin gradient bar at the very top tracking scroll progress.
---------------------------------------------------------------- */
function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
}

const PHONE_NUMBERS = {
  alex: '+37378337228',
  stan: '+37376596941',
};

export default function App({ lang: propLang, theme: propTheme }) {
  const [lang, setLang] = useState(propLang || 'ru');
  const [theme, setTheme] = useState(propTheme || 'light');
  const t = translations[lang] || translations.ru;

  useEffect(() => {
    if (propLang) setLang(propLang);
  }, [propLang]);

  useEffect(() => {
    if (propTheme) setTheme(propTheme);
  }, [propTheme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'ro' ? 'ro' : 'ru');
  }, [lang]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ---- Calculator state ----
  const [videoCount, setVideoCount] = useState(5);
  const [addonPackage, setAddonPackage] = useState(false);
  const [addonAds, setAddonAds] = useState(false);

  const basePricePerVideo = 600;
  let discountRate = 0;
  if (videoCount >= 10) discountRate = 0.15;
  else if (videoCount >= 5) discountRate = 0.1;

  const rawTotal = videoCount * basePricePerVideo;
  const discountedBase = Math.round(rawTotal * (1 - discountRate));
  const addonsTotal = (addonPackage ? 500 : 0) + (addonAds ? 800 : 0);
  const finalPrice = discountedBase + addonsTotal;
  const totalSaved = rawTotal - discountedBase;

  // ---- Portfolio filter ----
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  // ---- FAQ ----
  const [openFaq, setOpenFaq] = useState(0);

  // ---- Contact form ----
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    language: lang === 'ru' ? 'Русский' : 'Română',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const getWhatsAppLink = useCallback(
    (customText) => {
      const text = encodeURIComponent(
        customText ||
          (lang === 'ru'
            ? `Здравствуйте! Хочу заказать ${videoCount} роликов (${finalPrice} MDL). Мой номер: `
            : `Bună! Vreau să comand ${videoCount} clipuri (${finalPrice} MDL). Numărul meu: `)
      );
      return `https://wa.me/${PHONE_NUMBERS.alex}?text=${text}`;
    },
    [lang, videoCount, finalPrice]
  );

  const reels = [
    {
      id: 1,
      title: t.portfolio.reel1Title,
      views: t.portfolio.reel1Views,
      category: 'food',
      categoryLabel: t.portfolio.reel1Category,
    },
    {
      id: 2,
      title: t.portfolio.reel2Title,
      views: t.portfolio.reel2Views,
      category: 'fashion',
      categoryLabel: t.portfolio.reel2Category,
    },
    {
      id: 3,
      title: t.portfolio.reel3Title,
      views: t.portfolio.reel3Views,
      category: 'tech',
      categoryLabel: t.portfolio.reel3Category,
    },
  ];

  const filteredReels =
    activeCategory === 'all' ? reels : reels.filter((r) => r.category === activeCategory);

  const services = [
    { icon: Video, title: t.services.item1Title, desc: t.services.item1Desc, wide: true },
    { icon: Share2, title: t.services.item2Title, desc: t.services.item2Desc },
    { icon: Sparkles, title: t.services.item3Title, desc: t.services.item3Desc },
    { icon: TrendingUp, title: t.services.item4Title, desc: t.services.item4Desc },
    { icon: Mic, title: t.services.item5Title, desc: t.services.item5Desc },
    { icon: Package, title: t.services.item6Title, desc: t.services.item6Desc, wide: true },
  ];

  const pricingPlans = [
    {
      title: t.packages.p1Title,
      price: t.packages.p1Price,
      unit: t.packages.p1Unit,
      sub: t.packages.p1Sub,
      features: [t.packages.p1F1, t.packages.p1F2, t.packages.p1F3, t.packages.p1F4],
      btn: t.packages.p1Btn,
      popular: false,
    },
    {
      title: t.packages.p2Title,
      price: t.packages.p2Price,
      unit: t.packages.p2Unit,
      sub: t.packages.p2Sub,
      features: [t.packages.p2F1, t.packages.p2F2, t.packages.p2F3, t.packages.p2F4],
      btn: t.packages.p2Btn,
      popular: false,
    },
    {
      title: t.packages.p3Title,
      price: t.packages.p3Price,
      unit: t.packages.p3Unit,
      sub: t.packages.p3Sub,
      features: [t.packages.p3F1, t.packages.p3F2, t.packages.p3F3, t.packages.p3F4],
      btn: t.packages.p3Btn,
      popular: true,
    },
    {
      title: t.packages.p4Title,
      price: t.packages.p4Price,
      unit: t.packages.p4Unit,
      sub: t.packages.p4Sub,
      features: [t.packages.p4F1, t.packages.p4F2, t.packages.p4F3, t.packages.p4F4],
      btn: t.packages.p4Btn,
      popular: false,
    },
  ];

  const testimonials = [
    { name: t.testimonials.t1Name, role: t.testimonials.t1Role, text: t.testimonials.t1Text },
    { name: t.testimonials.t2Name, role: t.testimonials.t2Role, text: t.testimonials.t2Text },
    { name: t.testimonials.t3Name, role: t.testimonials.t3Role, text: t.testimonials.t3Text },
  ];

  const faqItems = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
  ];

  const whyUs = [
    { title: t.whyUs.reason1Title, desc: t.whyUs.reason1Desc },
    { title: t.whyUs.reason2Title, desc: t.whyUs.reason2Desc },
    { title: t.whyUs.reason3Title, desc: t.whyUs.reason3Desc },
    { title: t.whyUs.reason4Title, desc: t.whyUs.reason4Desc },
  ];

  const marqueeItems = [
    t.hero.stat1Number + ' ' + t.hero.stat1Label,
    t.hero.stat2Number + ' ' + t.hero.stat2Label,
    t.hero.stat3Number + ' ' + t.hero.stat3Label,
    t.hero.stat4Number + ' ' + t.hero.stat4Label,
    t.testimonials.t1Name,
    t.testimonials.t2Name,
    t.testimonials.t3Name,
    t.urgency.badge,
  ];

  const initials = (name) =>
    name
      .split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('');

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="app">
      <ScrollProgress />

      {/* ---------------- Urgency bar ---------------- */}
      <div className="urgency-bar">
        <MapPin size={14} />
        <span>{t.urgency.text}</span>
        <span className="pill">{t.urgency.slots}</span>
        <span>{t.urgency.textEnd}</span>
        <a href="#contacts">{t.urgency.btn}</a>
      </div>

      {/* ---------------- Header: floating glass pill nav ---------------- */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="logo">
            <span className="logo-mark">
              <Film size={18} />
            </span>
            VIRALIS
          </a>

          <nav className="main-nav">
            <a href="#services">{t.nav.services}</a>
            <a href="#portfolio">{t.nav.portfolio}</a>
            <a href="#pricing">{t.nav.pricing}</a>
            <a href="#faq">{t.nav.faq}</a>
            <a href="#contacts">{t.nav.contacts}</a>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-toggle"
              onClick={() => setLang(lang === 'ru' ? 'ro' : 'ru')}
              aria-label="Switch language"
            >
              {lang === 'ru' ? 'RU' : 'RO'}
            </button>
            <button
              type="button"
              className="icon-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a href={`tel:${PHONE_NUMBERS.alex}`} className="btn btn-gold btn-sm header-cta">
              <Phone size={14} />
              {t.nav.callUs}
            </a>
            <button
              type="button"
              className="menu-btn"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#services" onClick={closeMobileMenu}>{t.nav.services}</a>
            <a href="#calculator" onClick={closeMobileMenu}>{t.nav.calculator}</a>
            <a href="#portfolio" onClick={closeMobileMenu}>{t.nav.portfolio}</a>
            <a href="#pricing" onClick={closeMobileMenu}>{t.nav.pricing}</a>
            <a href="#team" onClick={closeMobileMenu}>{t.nav.team}</a>
            <a href="#faq" onClick={closeMobileMenu}>{t.nav.faq}</a>
            <a href="#contacts" onClick={closeMobileMenu}>{t.nav.contacts}</a>
            <a href={`tel:${PHONE_NUMBERS.alex}`} className="btn btn-gold btn-block">
              <Phone size={15} /> {t.nav.callUs}
            </a>
          </div>
        )}
      </header>

      <main id="top">
        {/* ---------------- Hero ---------------- */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">
                <Sparkles size={13} /> {t.hero.badge}
              </span>
              <h1 className="hero-title">
                {t.hero.title}
                <span className="accent-italic gradient-text">{t.hero.titleHighlight}</span>
              </h1>
              <p className="hero-subtitle">{t.hero.subtitle}</p>

              <div className="hero-price-tag">
                <span className="value">{t.hero.priceTagValue}</span>
                <div className="meta">
                  <span>{t.hero.priceTagLabel}</span>
                  <span>{t.hero.priceTagSub}</span>
                </div>
              </div>

              <div className="hero-cta-row">
                <a href="#pricing" className="btn btn-gold">
                  <Zap size={16} /> {t.hero.btnOrder}
                </a>
                <a href="#calculator" className="btn btn-outline">
                  <Calculator size={16} /> {t.hero.btnCalc}
                </a>
                <a href={`tel:${PHONE_NUMBERS.alex}`} className="btn btn-outline">
                  <Phone size={16} /> {t.hero.btnCall}
                </a>
              </div>

              <div className="hero-badge-row">
                <span className="item"><Eye size={15} /> {t.hero.badgeViews}</span>
                <span className="item"><Film size={15} /> {t.hero.badgeReels}</span>
                <span className="item"><Clock size={15} /> {t.hero.badgeHours}</span>
                <span className="item"><Zap size={15} /> {t.hero.badgeDelivery}</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="phone-stack">
                <div className="phone-mock mock-back">
                  <div className="mock-topbar"><span>9:41</span><span>●●●</span></div>
                  <div className="mock-play"><span><Play size={16} fill="currentColor" /></span></div>
                  <div className="mock-bars" />
                </div>
                <div className="phone-mock mock-front">
                  <div className="mock-topbar"><span>9:41</span><span>●●●</span></div>
                  <div className="mock-play"><span><Play size={18} fill="currentColor" /></span></div>
                  <div className="mock-bars" />
                  <div className="mock-caption"><Film size={12} /> Reels · 9:16</div>
                </div>
                <div className="floating-badge badge-views">
                  <span className="icon-wrap"><TrendingUp size={15} /></span>
                  {t.hero.stat2Number} {t.hero.stat2Label}
                </div>
                <div className="floating-badge badge-delivery">
                  <span className="icon-wrap"><Clock size={15} /></span>
                  {t.hero.stat3Number}
                </div>
              </div>
            </div>
          </div>

          <div className="stats-strip">
            {[
              [t.hero.stat1Number, t.hero.stat1Label],
              [t.hero.stat2Number, t.hero.stat2Label],
              [t.hero.stat3Number, t.hero.stat3Label],
              [t.hero.stat4Number, t.hero.stat4Label],
            ].map(([num, label]) => (
              <Reveal as="div" className="stat-box" key={label}>
                <div className="num"><CountUp value={num} /></div>
                <div className="label">{label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- Marquee trust strip ---------------- */}
        <div className="marquee-wrap" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i}>
                <Sparkles size={13} /> {item}
              </span>
            ))}
          </div>
        </div>

        {/* ---------------- Price banner ---------------- */}
        <section className="price-banner">
          <div className="price-banner-inner">
            <div className="price-banner-copy">
              <h3>{t.pricingBanner.title}</h3>
              <p>{t.pricingBanner.description}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
              <div className="price-banner-price">
                <span className="amount">{t.pricingBanner.price}</span>
                <span style={{ color: 'var(--text-secondary)' }}>{t.pricingBanner.unit}</span>
              </div>
              <a href="#contacts" className="btn btn-gold">
                <Zap size={16} /> {t.pricingBanner.cta}
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- Services ---------------- */}
        <section id="services" className="section">
          <div className="section-inner">
            <Reveal className="section-head">
              <span className="eyebrow">{t.services.badge}</span>
              <h2 className="section-title">{t.services.title}</h2>
              <p className="section-subtitle">{t.services.subtitle}</p>
            </Reveal>
            <div className="bento-grid">
              {services.map((s, i) => (
                <Reveal key={s.title} className={`bento-card ${s.wide ? 'wide' : ''}`} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="bento-icon">
                    <s.icon size={22} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Before / After ---------------- */}
        <section className="section">
          <div className="section-inner">
            <Reveal className="section-head">
              <span className="eyebrow">{t.beforeAfter.badge}</span>
              <h2 className="section-title">{t.beforeAfter.title}</h2>
              <p className="section-subtitle">{t.beforeAfter.subtitle}</p>
            </Reveal>
            <div className="compare-grid">
              <Reveal className="compare-card is-before">
                <h4><XCircle size={18} /> {t.beforeAfter.beforeTitle}</h4>
                <ul>
                  {[t.beforeAfter.before1, t.beforeAfter.before2, t.beforeAfter.before3, t.beforeAfter.before4].map((line) => (
                    <li key={line}><XCircle size={16} /> {line}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="compare-card is-after" style={{ transitionDelay: '120ms' }}>
                <h4><CheckCircle2 size={18} color="var(--success)" /> {t.beforeAfter.afterTitle}</h4>
                <ul>
                  {[t.beforeAfter.after1, t.beforeAfter.after2, t.beforeAfter.after3, t.beforeAfter.after4].map((line) => (
                    <li key={line}><CheckCircle2 size={16} /> {line}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- Calculator ---------------- */}
        <section id="calculator" className="section">
          <div className="section-inner">
            <Reveal className="section-head">
              <span className="eyebrow">{t.calculator.badge}</span>
              <h2 className="section-title">{t.calculator.title}</h2>
              <p className="section-subtitle">{t.calculator.subtitle}</p>
            </Reveal>

            <Reveal className="calc-card">
              <div>
                <div className="calc-slider-row">
                  <label htmlFor="videoCount" style={{ fontWeight: 700, fontSize: '0.92rem' }}>
                    {t.calculator.videoCountLabel}
                  </label>
                  <span className="count">{videoCount}</span>
                </div>
                <input
                  id="videoCount"
                  type="range"
                  min={1}
                  max={30}
                  value={videoCount}
                  onChange={(e) => setVideoCount(Number(e.target.value))}
                />
                {discountRate > 0 && (
                  <span className="calc-discount-badge">
                    {t.calculator.discountBadge} -{Math.round(discountRate * 100)}%
                  </span>
                )}

                <div className="calc-addons">
                  <p style={{ fontWeight: 700, fontSize: '0.85rem', marginTop: 6 }}>{t.calculator.addonsTitle}</p>
                  <label className={`calc-addon ${addonPackage ? 'checked' : ''}`}>
                    <input type="checkbox" checked={addonPackage} onChange={(e) => setAddonPackage(e.target.checked)} />
                    {t.calculator.addon1}
                  </label>
                  <label className={`calc-addon ${addonAds ? 'checked' : ''}`}>
                    <input type="checkbox" checked={addonAds} onChange={(e) => setAddonAds(e.target.checked)} />
                    {t.calculator.addon2}
                  </label>
                  <label className="calc-addon checked" style={{ cursor: 'default' }}>
                    <input type="checkbox" checked readOnly />
                    {t.calculator.addon3}
                  </label>
                  <label className="calc-addon checked" style={{ cursor: 'default' }}>
                    <input type="checkbox" checked readOnly />
                    {t.calculator.addon4}
                  </label>
                </div>
              </div>

              <div className="calc-summary">
                <div className="row">
                  <span>{t.calculator.videoCountLabel}</span>
                  <span>{videoCount}</span>
                </div>
                {totalSaved > 0 && (
                  <div className="row saved">
                    <span>{t.calculator.totalSaved}</span>
                    <span>-{totalSaved} MDL</span>
                  </div>
                )}
                <div className="total">
                  <span>{t.calculator.totalLabel}</span>
                  <span className="amount">{finalPrice} MDL</span>
                </div>
                <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-block">
                  <MessageCircle size={16} /> {t.calculator.orderWhatsApp}
                </a>
                <a href={`tel:${PHONE_NUMBERS.alex}`} className="btn btn-outline btn-block">
                  <Phone size={16} /> {t.calculator.orderCall}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Portfolio ---------------- */}
        <section id="portfolio" className="section">
          <div className="section-inner">
            <Reveal className="section-head">
              <span className="eyebrow">{t.portfolio.badge}</span>
              <h2 className="section-title">{t.portfolio.title}</h2>
              <p className="section-subtitle">{t.portfolio.subtitle}</p>
            </Reveal>

            <div className="portfolio-filters">
              {[
                ['all', t.portfolio.catAll],
                ['food', t.portfolio.catFood],
                ['fashion', t.portfolio.catFashion],
                ['tech', t.portfolio.catTech],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  className={`filter-pill ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(key)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="reel-grid">
              {filteredReels.map((reel, i) => (
                <Reveal
                  as="button"
                  key={reel.id}
                  className="reel-card"
                  style={{ transitionDelay: `${i * 80}ms`, border: 'none', textAlign: 'left' }}
                  onClick={() => setActiveModalVideo(reel)}
                >
                  <div className="reel-overlay">
                    <div className="reel-top">
                      <span className="views-chip"><Eye size={11} /> {reel.views}</span>
                    </div>
                    <span className="play-center"><Play size={20} fill="currentColor" /></span>
                    <div className="reel-info">
                      <div className="cat">{reel.categoryLabel}</div>
                      <div className="title">{reel.title}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {activeModalVideo && (
          <div className="modal-overlay" onClick={() => setActiveModalVideo(null)}>
            <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <strong>{t.modal.previewTitle}</strong>
                <button type="button" className="modal-close" onClick={() => setActiveModalVideo(null)} aria-label={t.modal.close}>
                  <X size={16} />
                </button>
              </div>
              <div className="modal-video-frame">
                <span className="play-center"><Play size={22} fill="currentColor" /></span>
                <strong>{activeModalVideo.title}</strong>
                <span style={{ opacity: 0.85, fontSize: '0.82rem' }}>{t.modal.reelFormat} · {activeModalVideo.views}</span>
              </div>
              <div className="modal-footer">
                <a href="#pricing" className="btn btn-gold btn-block" onClick={() => setActiveModalVideo(null)}>
                  {t.modal.btnOrderSimilar}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- Pricing ---------------- */}
        <section id="pricing" className="section">
          <div className="section-inner">
            <Reveal className="section-head">
              <span className="eyebrow">{t.packages.badge}</span>
              <h2 className="section-title">{t.packages.title}</h2>
              <p className="section-subtitle">{t.packages.subtitle}</p>
            </Reveal>

            <div className="pricing-grid">
              {pricingPlans.map((plan, i) => (
                <Reveal
                  key={plan.title}
                  className={`price-card ${plan.popular ? 'popular' : ''}`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  {plan.popular && <span className="popular-tag">{t.packages.popular}</span>}
                  <div className="p-title">{plan.title}</div>
                  <div className="p-sub">{plan.sub}</div>
                  <div className="p-price">
                    <span className="amount">{plan.price}</span>
                    <span className="unit">{plan.unit}</span>
                  </div>
                  <ul>
                    {plan.features.map((f) => (
                      <li key={f}><Check size={15} /> {f}</li>
                    ))}
                  </ul>
                  <a href={getWhatsAppLink(`${plan.title}: ${plan.sub} — ${plan.price} ${plan.unit}`)} target="_blank" rel="noreferrer" className={`btn btn-block ${plan.popular ? 'btn-gold' : 'btn-outline'}`}>
                    {plan.btn}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Why Us ---------------- */}
        <section className="section">
          <div className="section-inner">
            <Reveal className="section-head">
              <span className="eyebrow">{t.whyUs.badge}</span>
              <h2 className="section-title">{t.whyUs.title}</h2>
              <p className="section-subtitle">{t.whyUs.subtitle}</p>
            </Reveal>
            <div className="whyus-grid">
              {whyUs.map((item, i) => (
                <Reveal key={item.title} className="whyus-item" style={{ transitionDelay: `${i * 70}ms` }}>
                  <span className="num">0{i + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Testimonials ---------------- */}
        <section className="section">
          <div className="section-inner">
            <Reveal className="section-head">
              <span className="eyebrow">{t.testimonials.badge}</span>
              <h2 className="section-title">{t.testimonials.title}</h2>
              <p className="section-subtitle">{t.testimonials.subtitle}</p>
            </Reveal>
            <div className="testimonial-grid">
              {testimonials.map((tItem, i) => (
                <Reveal key={tItem.name} className="testimonial-card" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="quote">&ldquo;{tItem.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <span className="avatar">{initials(tItem.name)}</span>
                    <div>
                      <div className="name">{tItem.name}</div>
                      <div className="role">{tItem.role}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Team ---------------- */}
        <section id="team" className="section">
          <div className="section-inner">
            <Reveal className="section-head">
              <span className="eyebrow">{t.team.badge}</span>
              <h2 className="section-title">{t.team.title}</h2>
              <p className="section-subtitle">{t.team.subtitle}</p>
            </Reveal>
            <div className="team-grid">
              <Reveal className="team-card">
                <div className="team-avatar">A</div>
                <h3>{t.team.alexTitle}</h3>
                <span className="role">{t.team.alexRole}</span>
                <p className="desc">{t.team.alexDesc}</p>
                <div className="team-actions">
                  <a href={`tel:${PHONE_NUMBERS.alex}`} className="btn btn-outline btn-sm">
                    <Phone size={14} /> {t.team.btnCallDirect}
                  </a>
                  <a href={`https://wa.me/${PHONE_NUMBERS.alex}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm">
                    <MessageCircle size={14} /> {t.team.btnWhatsAppDirect}
                  </a>
                </div>
              </Reveal>
              <Reveal className="team-card" style={{ transitionDelay: '90ms' }}>
                <div className="team-avatar">S</div>
                <h3>{t.team.stanTitle}</h3>
                <span className="role">{t.team.stanRole}</span>
                <p className="desc">{t.team.stanDesc}</p>
                <div className="team-actions">
                  <a href={`tel:${PHONE_NUMBERS.stan}`} className="btn btn-outline btn-sm">
                    <Phone size={14} /> {t.team.btnCallDirect}
                  </a>
                  <a href={`https://wa.me/${PHONE_NUMBERS.stan}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm">
                    <MessageCircle size={14} /> {t.team.btnWhatsAppDirect}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section id="faq" className="section">
          <div className="section-inner">
            <Reveal className="section-head">
              <span className="eyebrow">{t.faq.badge}</span>
              <h2 className="section-title">{t.faq.title}</h2>
              <p className="section-subtitle">{t.faq.subtitle}</p>
            </Reveal>
            <div className="faq-list">
              {faqItems.map((item, i) => (
                <Reveal key={item.q} className="faq-item" style={{ transitionDelay: `${i * 40}ms` }}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    aria-expanded={openFaq === i}
                  >
                    {item.q}
                    <ChevronDown size={18} style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }} />
                  </button>
                  {openFaq === i && <div className="faq-answer">{item.a}</div>}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Contacts ---------------- */}
        <section id="contacts" className="section">
          <div className="section-inner">
            <Reveal className="section-head">
              <span className="eyebrow">{t.contactsForm.badge}</span>
              <h2 className="section-title">{t.contactsForm.title}</h2>
              <p className="section-subtitle">{t.contactsForm.subtitle}</p>
            </Reveal>

            <div className="contact-grid">
              <Reveal className="contact-form">
                {formSubmitted ? (
                  <div className="form-success">
                    <CheckCircle2 size={44} color="var(--success)" />
                    <h3>{t.contactsForm.successTitle}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>{t.contactsForm.successDesc}</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-field">
                      <label htmlFor="name">{t.contactsForm.nameLabel}</label>
                      <input
                        id="name"
                        required
                        placeholder={t.contactsForm.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone">{t.contactsForm.phoneLabel}</label>
                      <input
                        id="phone"
                        required
                        placeholder={t.contactsForm.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="business">{t.contactsForm.businessLabel}</label>
                      <input
                        id="business"
                        placeholder={t.contactsForm.businessPlaceholder}
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label>{t.contactsForm.langLabel}</label>
                      <div className="lang-radio-group">
                        <label>
                          <input
                            type="radio"
                            name="prefLang"
                            checked={formData.language === t.contactsForm.langRu}
                            onChange={() => setFormData({ ...formData, language: t.contactsForm.langRu })}
                          />
                          {t.contactsForm.langRu}
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="prefLang"
                            checked={formData.language === t.contactsForm.langRo}
                            onChange={() => setFormData({ ...formData, language: t.contactsForm.langRo })}
                          />
                          {t.contactsForm.langRo}
                        </label>
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="message">{t.contactsForm.msgLabel}</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder={t.contactsForm.msgPlaceholder}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="btn btn-gold btn-block">
                      <Send size={16} /> {t.contactsForm.btnSubmit}
                    </button>
                  </form>
                )}
              </Reveal>

              <Reveal className="contact-info-card" style={{ transitionDelay: '100ms' }}>
                <div className="contact-info-row">
                  <span className="icon-wrap"><Phone size={18} /></span>
                  <div>
                    <div className="label">{t.team.alexTitle}</div>
                    <a className="value" href={`tel:${PHONE_NUMBERS.alex}`}>{t.team.alexPhone}</a>
                  </div>
                </div>
                <div className="contact-info-row">
                  <span className="icon-wrap"><Phone size={18} /></span>
                  <div>
                    <div className="label">{t.team.stanTitle}</div>
                    <a className="value" href={`tel:${PHONE_NUMBERS.stan}`}>{t.team.stanPhone}</a>
                  </div>
                </div>
                <div className="contact-info-row">
                  <span className="icon-wrap"><MapPin size={18} /></span>
                  <div>
                    <div className="label">{t.urgency.badge}</div>
                    <div className="value">Chișinău, Moldova</div>
                  </div>
                </div>
                <div className="contact-info-row">
                  <span className="icon-wrap"><Award size={18} /></span>
                  <div>
                    <div className="label">{t.hero.priceTagLabel}</div>
                    <div className="value">{t.hero.priceTagValue}</div>
                  </div>
                </div>
                <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-block">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <span className="logo">
                <span className="logo-mark"><Film size={18} /></span>
                VIRALIS
              </span>
              <p className="footer-tagline">{t.footer.tagline}</p>
            </div>
            <div className="footer-contacts">
              <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.85rem' }}>{t.footer.contactsHeading}</span>
              <a href={`tel:${PHONE_NUMBERS.alex}`}><Phone size={14} /> {t.team.alexPhone} ({t.team.alexTitle})</a>
              <a href={`tel:${PHONE_NUMBERS.stan}`}><Phone size={14} /> {t.team.stanPhone} ({t.team.stanTitle})</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} VIRALIS Media Studio. {t.footer.rights}</span>
            <span>{t.footer.privacy}</span>
          </div>
        </div>
      </footer>

      {/* ---------------- Mobile sticky CTA ---------------- */}
      <div className="mobile-sticky-bar">
        <a href={`tel:${PHONE_NUMBERS.alex}`} className="btn btn-outline">
          <Phone size={15} /> {t.nav.callUs}
        </a>
        <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
          <MessageCircle size={15} /> WhatsApp
        </a>
      </div>
    </div>
  );
}
