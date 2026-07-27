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

// wa.me requires the number WITHOUT a leading '+' (official WhatsApp format)
const WHATSAPP_NUMBERS = {
  alex: PHONE_NUMBERS.alex.replace('+', ''),
  stan: PHONE_NUMBERS.stan.replace('+', ''),
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
      return `https://wa.me/${WHATSAPP_NUMBERS.alex}?text=${text}`;
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

      {/* ---------------- Header: floating glass pill nav ---------------- */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="logo">
            <img src="/assets/logo-option1.png" alt="VIRALIS" className="logo-img logo-img-icon" />
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
              aria-label={lang === 'ru' ? 'RU, switch language' : 'RO, switch language'}
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
              <h2>{t.pricingBanner.title}</h2>
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
