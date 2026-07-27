import React, { useState } from 'react';
import { 
  Video, Sparkles, Check, Phone, MessageCircle, Play, 
  ChevronDown, ChevronUp, Star, Zap, Award, Flame, Sun, Moon, ArrowRight, ShieldCheck, HelpCircle, Heart, Feather
} from 'lucide-react';

const organicCopy = {
  ru: {
    badge: "🌿 Живой видеопродакшн & SMM в Молдове",
    title: "Органические видеоролики, создающие",
    titleAccent: "эмоциональную связь с брендом",
    subtitle: "Полный цикл производства вертикальных видео (Reels, TikTok, Shorts) с акцентом на эстетику, живую подачу и психологическое доверие клиентов.",
    priceBadge: "Честный органический тариф",
    priceValue: "600 MDL",
    priceSub: "за 1 полностью готовый ролик под ключ",
    btnOrder: "Забронировать съёмку",
    btnCalc: "Рассчитать бюджет",
    slots: "Осталось 3 съёмочных дня на этой неделе в Кишинёве",
    
    pillars: [
      { title: "Живой формат без фальши", desc: "Снимаем ролики, которым верят. Никаких заученных рекламок — только органическая подача." },
      { title: "Сдача за 24-48 часов", desc: "Быстрый цикл монтажа: сценарий, съемка, динамика, чистовой звук и сразу публикация." },
      { title: "Фиксированная цена 600 MDL", desc: "Прозрачная смета. Сценарий, съёмка, монтаж, саунд-дизайн и субтитры включены." }
    ],

    servicesBadge: "Органический подход",
    servicesTitle: "Услуги для естественного роста продаж",
    servicesSubtitle: "Берём на себя всё: от креативной идеи до финального монтажа",
    servicesList: [
      { title: "Трендовый Монтаж & Саунд-Дизайн", desc: "Плавные склейки, чистейший звук с микрофонов и субтитры для просмотра без звука." },
      { title: "Разработка Живых Сценариев", desc: "Психологические завязки, удерживающие внимание зрителя с 1-й секунды." },
      { title: "Комплексная Упаковка Профиля", desc: "Оформление Instagram, TikTok и FB: шапка, актуальное, контент-сетка и стиль." },
      { title: "Таргетированная Реклама Meta", desc: "Настройка рекламы на целевую аудиторию Кишинёва и Молдовы для стабильных заявок." }
    ],

    calcTitle: "Калькулятор живого контента",
    calcSubtitle: "Выберите количество роликов для вашего бизнеса",
    videoCount: "Количество роликов:",
    discountMsg: "✨ Скидка 15% при заказе от 10 роликов!",
    totalLabel: "Итоговая стоимость:",
    savedLabel: "Ваша экономия:",
    btnOrderCalc: "Оформить заказ в WhatsApp",

    comparisonTitle: "Обычные ролики vs Organic VIRALIS",
    beforeTitle: "Обычная съёмка на телефон",
    before1: "Скучные шаблонные фразы — 80% пролистывают за 2 сек",
    before2: "Шумный звук без микрофонов и плохой свет",
    before3: "Нет призыва к действию — клиенты уходят к конкурентам",
    afterTitle: "Органический ролик VIRALIS (600 MDL)",
    after1: "Цепляющий крючок в первую секунду для удержания зрителя",
    after2: "Студийный чистый звук, подлинные эмоции и эстетическая картинка",
    after3: "Чёткий и естественный CTA — зритель хочет купить услугу",

    portfolioTitle: "Примеры наших живых съёмок",
    catAll: "Все сферы",
    catFood: "Рестораны & Кафе",
    catBeauty: "Бьюти & Уход",
    catServices: "Услуги & Эксперты",

    testimonialsTitle: "Отзывы клиентов из Молдовы",
    faqTitle: "Часто задаваемые вопросы",

    faqItems: [
      { q: "Что входит в 600 MDL за ролик?", a: "Разработка сценария, выездная съёмка на профессиональное оборудование, динамичный монтаж, цвет, саунд-дизайн и анимированные субтитры." },
      { q: "Как быстро вы отдаёте готовые видео?", a: "Срок сдачи всего 24-48 часов после проведения съёмки." },
      { q: "Нужно ли мне самому быть в кадре?", a: "Не обязательно. Мы можем снимать предметные ролики, процесс оказания услуги или пригласить модель." },
      { q: "Вы работаете в Кишинёве и по Молдове?", a: "Да, мы проводим съёмки в Кишинёве, а также выезжаем по всей Молдове." }
    ],

    modalTitle: "Забронировать съёмку",
    modalSubtitle: "Заполните форму и мы свяжемся с вами в течение 15 минут",
    nameLabel: "Ваше имя:",
    phoneLabel: "Телефон (+373):",
    submitBtn: "Отправить заявку",
    footerCopy: "© 2026 VIRALIS Organic Studio. Все права защищены. Молдова, Кишинёв."
  },
  ro: {
    badge: "🌿 Producție video organică & SMM în Moldova",
    title: "Videoclipuri organice care creează",
    titleAccent: "o conexiune emoțională cu brandul",
    subtitle: "Ciclu complet de producție video verticală (Reels, TikTok, Shorts) axat pe estetică, prezentare vie și încrederea clienților.",
    priceBadge: "Tarif organic transparent",
    priceValue: "600 MDL",
    priceSub: "per 1 clip complet finisat la cheie",
    btnOrder: "Rezervă filmarea",
    btnCalc: "Calculează bugetul",
    slots: "Au mai rămas 3 zile de filmare săptămâna aceasta în Chișinău",

    pillars: [
      { title: "Format viu fără falsuri", desc: "Filmăm clipuri în care oamenii au încredere. Fără reclame plictisitoare — doar abordare organică." },
      { title: "Predare în 24-48 ore", desc: "Ciclu rapid de montaj: scenariu, filmare, dinamică, sunet curat și publicare." },
      { title: "Preț fix 600 MDL", desc: "Deviz transparent. Scenariul, filmarea, montajul, sonorizarea și subtitrările sunt incluse." }
    ],

    servicesBadge: "Abordare organică",
    servicesTitle: "Servicii pentru creșterea naturală a vânzărilor",
    servicesSubtitle: "Preluăm totul: de la ideea creativă la montajul final",
    servicesList: [
      { title: "Montaj Trend & Sound-Design", desc: "Tăieturi line, sunet impecabil din microfoane și subtitrări pentru vizionare fără sunet." },
      { title: "Scenarii Organice", desc: "Cârlige psihologice care mențin atenția privitorului încă din prima secundă." },
      { title: "Impachetarea Profilului", desc: "Design Instagram, TikTok și FB: descriere, story-uri evidențiate, grilă conținut." },
      { title: "Reclame Targetate Meta", desc: "Setare reclame pe publicul țintă din Chișinău și Moldova pentru flux constant de clienți." }
    ],

    calcTitle: "Calculator de conținut viu",
    calcSubtitle: "Alege numărul de clipuri pentru afacerea ta",
    videoCount: "Număr clipuri:",
    discountMsg: "✨ Reducere 15% la comenzi de la 10 clipuri!",
    totalLabel: "Cost total:",
    savedLabel: "Economia ta:",
    btnOrderCalc: "Plasează comanda pe WhatsApp",

    comparisonTitle: "Clipuri obișnuite vs Organic VIRALIS",
    beforeTitle: "Filmare simplă pe telefon",
    before1: "Fraze plictisitoare — 80% trec mai departe în 2 sec",
    before2: "Sunet cu zgomot fără microfon și lumină slabă",
    before3: "Fără îndemn la acțiune — clienții pleacă la concurenți",
    afterTitle: "Clip organic VIRALIS (600 MDL)",
    after1: "Cârlig captivant din prima secundă pentru menținerea atenției",
    after2: "Sunet curat de studio, emoții autentice și imagine estetică",
    after3: "CTA clar și natural — privitorul dorește să cumpere serviciul",

    portfolioTitle: "Exemple de filmări organice",
    catAll: "Toate domeniile",
    catFood: "Restaurante & Cafenele",
    catBeauty: "Beauty & Îngrijire",
    catServices: "Servicii & Experți",

    testimonialsTitle: "Recenzii de la clienți din Moldova",
    faqTitle: "Întrebări frecvente",

    faqItems: [
      { q: "Ce este inclus în cei 600 MDL per clip?", a: "Scenariul, filmarea cu echipament profesional, montajul dinamic, corecția de culoare, sonorizarea și subtitrările animate." },
      { q: "Cât de repede livrați clipurile finisate?", a: "Termenul de predare este de doar 24-48 de ore de la filmare." },
      { q: "Trebuie să apar personal în cadru?", a: "Nu este obligatoriu. Putem filma doar produsele, procesul de lucru sau invita un model." },
      { q: "Lucrați în Chișinău și în toată Moldova?", a: "Da, efectuăm filmări în Chișinău și ne deplasăm în orice regiune din Moldova." }
    ],

    modalTitle: "Rezervă filmarea",
    modalSubtitle: "Completează formularul și te vom contacta în maxim 15 minute",
    nameLabel: "Numele tău:",
    phoneLabel: "Telefon (+373):",
    submitBtn: "Trimite cererea",
    footerCopy: "© 2026 VIRALIS Organic Studio. Toate drepturile rezervate. Moldova, Chișinău."
  }
};

export default function Variant15_OrganicSoftCurves({ lang = 'ru' }) {
  const t = organicCopy[lang] || organicCopy['ru'];

  const [videoCount, setVideoCount] = useState(5);
  const [activeFaq, setActiveFaq] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const discountRate = videoCount >= 10 ? 0.15 : videoCount >= 5 ? 0.10 : 0;
  const rawCost = videoCount * 600;
  const finalCost = Math.round(rawCost * (1 - discountRate));
  const savedAmount = rawCost - finalCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWaLink = (text) => {
    const msg = encodeURIComponent(text || `Здравствуйте! Заказ ${videoCount} роликов (${finalCost} MDL).`);
    return `https://wa.me/37378337228?text=${msg}`;
  };

  return (
    <div style={{ background: '#FAF7F2', color: '#2C2A29', fontFamily: "'Outfit', sans-serif", minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Top Banner */}
      <div style={{ background: '#E07A5F', color: '#FFFFFF', textAlign: 'center', padding: '10px 16px', fontWeight: '700', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <Sparkles size={16} />
        <span>{t.slots}</span>
      </div>

      {/* Header */}
      <header style={{ padding: '24px 32px', maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: '#E07A5F', color: '#FFF', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(224,122,95,0.3)' }}>
            <Feather size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#2C2A29', letterSpacing: '-0.5px' }}>VIRALIS</div>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#81B29A', textTransform: 'uppercase', letterSpacing: '1px' }}>Organic Studio</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="tel:+37378337228" style={{ color: '#2C2A29', fontWeight: '800', textDecoration: 'none', fontSize: '0.95rem' }}>+373 78 337 228</a>
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{ background: '#E07A5F', color: '#FFF', border: 'none', padding: '12px 24px', borderRadius: '30px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 8px 24px rgba(224,122,95,0.25)', transition: 'transform 0.2s ease' }}
          >
            {t.btnOrder}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F2CC8F', color: '#2C2A29', padding: '8px 18px', borderRadius: '30px', fontWeight: '800', fontSize: '0.85rem', marginBottom: '24px' }}>
            <Heart size={16} color="#E07A5F" /> {t.badge}
          </div>

          <h1 style={{ fontSize: '3.2rem', fontWeight: '900', lineHeight: '1.15', color: '#2C2A29', marginBottom: '20px' }}>
            {t.title} <br />
            <span style={{ color: '#E07A5F', fontStyle: 'italic', fontFamily: 'serif' }}>{t.titleAccent}</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#524F4D', lineHeight: '1.6', marginBottom: '32px', maxWidth: '540px' }}>
            {t.subtitle}
          </p>

          <div style={{ background: '#FFF', padding: '20px 28px', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 12px 35px rgba(0,0,0,0.04)', border: '1px solid #F0ECE1', marginBottom: '36px' }}>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#81B29A', fontWeight: '700' }}>{t.priceBadge}</div>
              <div style={{ fontSize: '2.4rem', fontWeight: '900', color: '#E07A5F' }}>{t.priceValue}</div>
            </div>
            <div style={{ color: '#524F4D', fontSize: '0.9rem', fontWeight: '600', maxWidth: '180px', textAlign: 'right' }}>
              {t.priceSub}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href={getWaLink()} 
              target="_blank" 
              rel="noreferrer" 
              style={{ background: '#E07A5F', color: '#FFF', padding: '16px 36px', borderRadius: '36px', fontWeight: '800', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 30px rgba(224,122,95,0.3)' }}
            >
              <MessageCircle size={20} /> {t.btnOrder}
            </a>

            <a 
              href="#calculator" 
              style={{ background: '#F4F1DE', color: '#2C2A29', padding: '16px 32px', borderRadius: '36px', fontWeight: '800', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              {t.btnCalc}
            </a>
          </div>
        </div>

        {/* Hero Image Frame */}
        <div style={{ position: 'relative' }}>
          <div style={{ background: '#81B29A', borderRadius: '48px', padding: '16px', boxShadow: '0 20px 50px rgba(129,178,154,0.25)', transform: 'rotate(-2deg)' }}>
            <div style={{ borderRadius: '36px', overflow: 'hidden', height: '480px', position: 'relative' }}>
              <img src="/assets/hero_banner.jpg" alt="Organic Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', padding: '18px 24px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Flame color="#E07A5F" size={28} />
                <div>
                  <div style={{ fontWeight: '900', fontSize: '1rem', color: '#2C2A29' }}>10,000,000+ Просмотров</div>
                  <div style={{ fontSize: '0.8rem', color: '#524F4D' }}>В Reels, TikTok и Shorts клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section style={{ background: '#FFF', padding: '80px 24px', borderRadius: '48px 48px 0 0', borderTop: '1px solid #F0ECE1' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {t.pillars.map((item, idx) => (
              <div key={idx} style={{ background: '#FAF7F2', padding: '36px', borderRadius: '32px', border: '1px solid #F0ECE1', transition: 'transform 0.3s ease' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', background: '#F2CC8F', color: '#2C2A29', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '1.2rem', marginBottom: '20px' }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '900', marginBottom: '12px', color: '#2C2A29' }}>{item.title}</h3>
                <p style={{ color: '#686461', lineHeight: '1.6', fontSize: '0.98rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organic Calculator */}
      <section id="calculator" style={{ padding: '90px 24px', background: '#FAF7F2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: '#FFF', padding: '48px', borderRadius: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', border: '1px solid #F0ECE1' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ background: '#F2CC8F', color: '#2C2A29', padding: '6px 16px', borderRadius: '20px', fontWeight: '800', fontSize: '0.85rem' }}>🧮 Бюджет</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '900', margin: '12px 0 8px', color: '#2C2A29' }}>{t.calcTitle}</h2>
            <p style={{ color: '#686461' }}>{t.calcSubtitle}</p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontWeight: '800', fontSize: '1.1rem' }}>
              <span>{t.videoCount}</span>
              <span style={{ color: '#E07A5F' }}>{videoCount} роликов</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="30" 
              value={videoCount} 
              onChange={(e) => setVideoCount(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#E07A5F', height: '8px', cursor: 'pointer' }}
            />
            {discountRate > 0 && (
              <div style={{ marginTop: '10px', color: '#81B29A', fontWeight: '700', fontSize: '0.9rem', textAlign: 'center' }}>
                {t.discountMsg}
              </div>
            )}
          </div>

          <div style={{ background: '#FAF7F2', padding: '24px 32px', borderRadius: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <div style={{ fontSize: '0.9rem', color: '#686461', fontWeight: '600' }}>{t.totalLabel}</div>
              <div style={{ fontSize: '2.8rem', fontWeight: '900', color: '#E07A5F' }}>{finalCost} MDL</div>
            </div>
            {savedAmount > 0 && (
              <div style={{ background: '#81B29A', color: '#FFF', padding: '8px 16px', borderRadius: '16px', fontWeight: '800', fontSize: '0.9rem' }}>
                {t.savedLabel} {savedAmount} MDL
              </div>
            )}
          </div>

          <a 
            href={getWaLink()} 
            target="_blank" 
            rel="noreferrer" 
            style={{ background: '#E07A5F', color: '#FFF', width: '100%', padding: '18px', borderRadius: '30px', fontWeight: '900', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(224,122,95,0.3)' }}
          >
            <MessageCircle size={22} /> {t.btnOrderCalc}
          </a>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{ background: '#FFF', padding: '90px 24px', borderTop: '1px solid #F0ECE1' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '900', textAlign: 'center', marginBottom: '48px', color: '#2C2A29' }}>{t.comparisonTitle}</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Before */}
            <div style={{ background: '#FFF5F2', padding: '36px', borderRadius: '32px', border: '1px solid #FCD7CD' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#C85A32', marginBottom: '20px' }}>❌ {t.beforeTitle}</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li style={{ color: '#524F4D', lineHeight: '1.5' }}>• {t.before1}</li>
                <li style={{ color: '#524F4D', lineHeight: '1.5' }}>• {t.before2}</li>
                <li style={{ color: '#524F4D', lineHeight: '1.5' }}>• {t.before3}</li>
              </ul>
            </div>

            {/* After */}
            <div style={{ background: '#F2F8F5', padding: '36px', borderRadius: '32px', border: '1px solid #C4E3D5' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#2D6A4F', marginBottom: '20px' }}>✅ {t.afterTitle}</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li style={{ color: '#2C2A29', fontWeight: '600', lineHeight: '1.5' }}>✓ {t.after1}</li>
                <li style={{ color: '#2C2A29', fontWeight: '600', lineHeight: '1.5' }}>✓ {t.after2}</li>
                <li style={{ color: '#2C2A29', fontWeight: '600', lineHeight: '1.5' }}>✓ {t.after3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '90px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: '900', textAlign: 'center', marginBottom: '40px', color: '#2C2A29' }}>{t.faqTitle}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {t.faqItems.map((item, idx) => (
            <div key={idx} style={{ background: '#FFF', borderRadius: '24px', border: '1px solid #F0ECE1', overflow: 'hidden' }}>
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                style={{ width: '100%', padding: '24px 28px', background: 'none', border: 'none', textAlign: 'left', fontWeight: '800', fontSize: '1.1rem', color: '#2C2A29', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>{item.q}</span>
                {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {activeFaq === idx && (
                <div style={{ padding: '0 28px 24px', color: '#686461', lineHeight: '1.6', fontSize: '1rem' }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Booking Drawer Modal */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '24px' }}>
          <div style={{ background: '#FFF', width: '100%', maxWidth: '480px', borderRadius: '36px', padding: '36px', position: 'relative', boxShadow: '0 25px 60px rgba(0,0,0,0.2)' }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: '#FAF7F2', border: 'none', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontWeight: '900' }}
            >
              ✕
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '8px', color: '#2C2A29' }}>{t.modalTitle}</h3>
                <p style={{ color: '#686461', fontSize: '0.95rem', marginBottom: '24px' }}>{t.modalSubtitle}</p>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem' }}>{t.nameLabel}</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '14px 18px', borderRadius: '16px', border: '1px solid #E5E0D8', fontSize: '1rem', outline: 'none' }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontWeight: '700', marginBottom: '6px', fontSize: '0.9rem' }}>{t.phoneLabel}</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+373 78 000 000"
                    value={formData.phone} 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '14px 18px', borderRadius: '16px', border: '1px solid #E5E0D8', fontSize: '1rem', outline: 'none' }}
                  />
                </div>

                <button 
                  type="submit" 
                  style={{ width: '100%', background: '#E07A5F', color: '#FFF', padding: '16px', borderRadius: '24px', border: 'none', fontWeight: '900', fontSize: '1.05rem', cursor: 'pointer', boxShadow: '0 10px 25px rgba(224,122,95,0.3)' }}
                >
                  {t.submitBtn}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ width: '60px', height: '60px', background: '#81B29A', color: '#FFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Check size={32} />
                </div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '8px' }}>Заявка принята!</h4>
                <p style={{ color: '#686461' }}>Мы перезвоним вам в течение 15 минут для подтверждения бронирования.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ background: '#2C2A29', color: '#FAF7F2', padding: '40px 24px', textAlign: 'center', fontSize: '0.9rem' }}>
        <p style={{ opacity: 0.8 }}>{t.footerCopy}</p>
      </footer>
    </div>
  );
}
