import React, { useState, useEffect } from 'react';
import { translations } from '../data/translations';
import {
  Video,
  Sparkles,
  ShieldCheck,
  Star,
  Award,
  MessageCircle,
  Phone,
  Clock,
  CheckCircle2,
  Check,
  Play,
  Calculator,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Send,
  Menu,
  X,
  Users,
  HelpCircle,
  XCircle
} from 'lucide-react';

export default function Variant1_CialdiniLuxury({ lang: propLang = 'ru', setLang: propSetLang }) {
  // Local language state (supports prop or internal state)
  const [internalLang, setInternalLang] = useState('ru');
  const lang = propLang || internalLang;
  
  const toggleLang = (newLang) => {
    if (propSetLang) {
      propSetLang(newLang);
    } else {
      setInternalLang(newLang);
    }
  };

  // Internal translation fallback
  const t = translations[lang] || translations['ru'];

  // Dynamic Scarcity Counter (Countdown Timer for weekly slots)
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculator State
  const [videoCount, setVideoCount] = useState(5);
  const [addonPackage, setAddonPackage] = useState(false);
  const [addonAds, setAddonAds] = useState(false);

  // Price Calculation Logic
  const basePricePerVideo = 600;
  let discountRate = 0;
  if (videoCount >= 10) discountRate = 0.15;
  else if (videoCount >= 5) discountRate = 0.10;

  const rawTotal = videoCount * basePricePerVideo;
  const discountedBase = Math.round(rawTotal * (1 - discountRate));
  const addonsTotal = (addonPackage ? 500 : 0) + (addonAds ? 800 : 0);
  const finalPrice = discountedBase + addonsTotal;
  const totalSaved = rawTotal - discountedBase;

  // Active Portfolio Filter & Modal State
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lead Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    language: lang === 'ru' ? 'Русский' : 'Română',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  // WhatsApp Link Generator
  const getWhatsAppLink = (customText) => {
    const defaultText = lang === 'ru'
      ? `Здравствуйте! Хочу заказать ${videoCount} роликов (${finalPrice} MDL). Мой номер: `
      : `Bună ziua! Doresc să comand ${videoCount} clipuri (${finalPrice} MDL). Numărul meu: `;
    return `https://wa.me/37378337228?text=${encodeURIComponent(customText || defaultText)}`;
  };

  // Portfolio items data
  const portfolioItems = [
    {
      id: 1,
      title: lang === 'ru' ? 'Gusto Cafe & Bistro Кишинёв' : 'Gusto Cafe & Bistro Chișinău',
      category: 'food',
      views: '142.5K',
      image: '/assets/hero_banner.jpg'
    },
    {
      id: 2,
      title: lang === 'ru' ? 'Boutique Luna & Co — Коллекция' : 'Boutique Luna & Co — Colecție',
      category: 'fashion',
      views: '98.2K',
      image: '/assets/hero_banner.jpg'
    },
    {
      id: 3,
      title: lang === 'ru' ? 'SmartHub MD — Ремонт Техники' : 'SmartHub MD — Reparații Tech',
      category: 'tech',
      views: '215.4K',
      image: '/assets/hero_banner.jpg'
    }
  ];

  const filteredPortfolio = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  // Localized Content Dictionary
  const content = {
    ru: {
      scarcityBar: `🔥 Внимание: На этой неделе осталось всего 3 свободных слота на съёмку в Кишинёве!`,
      scarcityTimer: `До закрытия бронирования:`,
      studioBadge: `АВТОРИТЕТНОЕ ВИДЕОПРОИЗВОДСТВО #1 В МОЛДОВЕ`,
      heroTitleLine1: `Вирусные ролики высокого статуса,`,
      heroTitleLine2: `которые продают ваши товары и услуги`,
      heroSub: `Полный цикл съёмки и вирусного монтажа под ключ для TikTok, Instagram Reels, Facebook и YouTube Shorts. От цепляющего сценария до готовых заявок.`,
      guaranteeBadge: `100% Фиксированная цена без скрытых доплат`,
      priceLabel: `Всего`,
      priceValue: `600 MDL`,
      priceSub: `за 1 готовый ролик под ключ`,
      btnWhatsApp: `Заказать в WhatsApp за 600 MDL`,
      btnCall: `Позвонить: +373 78 337 228`,
      btnCalc: `Рассчитать стоимость`,
      heroStats: [
        { value: '500+', label: 'Отснятых роликов' },
        { value: '10M+', label: 'Просмотров в соцсетях' },
        { value: '24-48ч', label: 'Срок сдачи монтажа' },
        { value: '600 MDL', label: 'Фиксированная цена' }
      ],
      heroVideoTag: `Смотреть работы`,
      proofBarTitle: `Нам доверяют бренды и предприниматели Молдовы`,
      calcBadge: `Интерактивный расчёт`,
      calcTitle: `Калькулятор бюджета & Пакетные скидки`,
      calcSub: `Укажите количество роликов и выберите опции для расчета персональной скидки`,
      calcCountLabel: `Количество видеороликов:`,
      calcDiscount5: `Скидка 10% (от 5 роликов)`,
      calcDiscount10: `Скидка 15% (от 10 роликов)`,
      calcAddonsTitle: `Дополнительные премиум-опции:`,
      calcAddon1: `Создание и полная упаковка аккаунта (Instagram/TikTok/FB) (+500 MDL)`,
      calcAddon2: `Настройка таргетированной рекламы Meta (Facebook & Instagram Ads) (+800 MDL)`,
      calcAddonFree1: `Разработка авторских продающих сценариев (Включено БЕСПЛАТНО)`,
      calcAddonFree2: `Передача всех исходников съёмки в 4K (Включено БЕСПЛАТНО)`,
      calcTotalLabel: `Итоговая стоимость проекта:`,
      calcSavingsLabel: `Ваша чистая экономия:`,
      calcCTA: `Забронировать выбранный пакет`,
      portfolioBadge: `Портфолио & Работы`,
      portfolioTitle: `Примеры отснятых вирусных роликов`,
      portfolioSub: `Посмотрите реальные результаты видеоконтента для бизнеса в Кишинёве`,
      catAll: `Все работы`,
      catFood: `Рестораны & Еда`,
      catFashion: `Мода & Магазины`,
      catTech: `Услуги & Бизнес`,
      viewProject: `Смотреть видео`,
      beforeAfterBadge: `Сравнение эффекта`,
      beforeAfterTitle: `Обычное видео vs Ролик VIRALIS за 600 MDL`,
      beforeAfterSub: `Почему правильный вирусный монтаж приносит в 3-5 раз больше продаж`,
      beforeTitle: `Обычная съёмка на телефон`,
      beforeItems: [
        `Скучное начало — 80% зрителей пролистывают за 2 секунды`,
        `Тихий звук с шумами без профессиональной петлички`,
        `Медленный монтаж без динамики и визуальных акцентов`,
        `Нет четкого призыва к действию — 0 обращений`
      ],
      afterTitle: `Вирусный ролик VIRALIS (600 MDL)`,
      afterItems: [
        `Цепляющий hook в 1-ю секунду для удержания внимания`,
        `Идеально чистый студийный звук с микрофонами-петличками`,
        `Динамичная смена планов каждые 1.5 сек и субтитры`,
        `Понятный продающий призыв к заказу и покупке`
      ],
      servicesBadge: `Наши услуги`,
      servicesTitle: `Полный комплекс решений для вашей компании`,
      servicesSub: `Берём на себя всю рутину по созданию контента и привлечению клиентов`,
      servicesList: [
        { title: `Выездная съёмка & Трендовый монтаж`, desc: `Записываем качественное видео на вашей локации или в нашей студии в Кишинёве. Монтируем с динамичной сменой кадров и звуковыми эффектами.` },
        { title: `Упаковка & Оформление соцсетей`, desc: `Оформляем страницы в Instagram, TikTok и Facebook: понятная шапка профиля, обложки, хайлайтсы и эстетичная сетка контента.` },
        { title: `Вирусные сценарии & Крючки (Hooks)`, desc: `Продумываем цепляющие завязки, которые заставляют зрителя досмотреть видео до конца и кликнуть на ваш профиль.` },
        { title: `Настройка рекламы Facebook & Insta Ads`, desc: `Настраиваем таргетированную рекламу для стабильного потока целевых заявок и клиентов в Молдове.` },
        { title: `Двуязычный дубляж & Субтитры`, desc: `Озвучиваем ролики на русском и румынском языках, добавляем яркие анимированные субтитры для просмотра без звука.` },
        { title: `Готовый контент-план под ключ`, desc: `Подготавливаем набор видеороликов на месяц вперёд. Вам больше не нужно думать о том, что выложить завтра.` }
      ],
      packagesBadge: `Готовые пакеты`,
      packagesTitle: `Выгодные тарифные варианты`,
      packagesSub: `Выберите оптимальный объем роликов для задачи вашей компании`,
      popularBadge: `🔥 Самый популярный выбор`,
      packagesList: [
        {
          name: `Тест-Драйв`,
          price: `600`,
          unit: `MDL`,
          sub: `1 Ролик под ключ`,
          features: [`1 Профессиональный ролик`, `Выездная съёмка и монтаж`, `Музыка и анимированные субтитры`, `Срок сдачи: 24-48 часов`],
          btn: `Заказать 1 ролик`
        },
        {
          name: `Быстрый Старт`,
          price: `2 700`,
          unit: `MDL`,
          sub: `5 Роликов (Экономия 300 MDL)`,
          features: [`5 Профессиональных роликов`, `Разработка сценариев к каждому`, `Динамичный монтаж и sound design`, `Адаптация Reels, TikTok, Shorts`],
          btn: `Заказать 5 роликов`
        },
        {
          name: `Вирусный Запуск`,
          price: `5 100`,
          unit: `MDL`,
          sub: `10 Роликов + Упаковка Соцсетей`,
          features: [`10 Вирусных видеороликов`, `Создание & Упаковка аккаунта`, `Контент-план на 1 месяц`, `Полный дубляж на RU/RO`],
          btn: `Заказать Вирусный Запуск`
        },
        {
          name: `VIP Под Ключ`,
          price: `9 900`,
          unit: `MDL`,
          sub: `20 Роликов + SMM & Реклама`,
          features: [`20 Готовых роликов на месяц`, `Упаковка Instagram, TikTok, FB`, `Настройка таргетированной рекламы`, `Персональный продюсер 24/7`],
          btn: `Заказать VIP Пакет`
        }
      ],
      testimonialsBadge: `Социальное доказательство`,
      testimonialsTitle: `Отзывы предпринимателей Молдовы`,
      testimonialsSub: `Реальные истории успеха клиентов, доверивших нам свой видеоконтент`,
      testimonialsList: [
        {
          name: `Виктор Гросу`,
          role: `Владелец ресторана Gusto Cafe, Кишинёв`,
          text: `Заказали пакет из 10 роликов за 5100 лей. Уже после третьего видео в TikTok бронирования столов выросли на 40%. Качество работы просто высочайшее!`,
          views: `142.5K просмотров`
        },
        {
          name: `Елена Сырбу`,
          role: `Основательница бутика одежды Luna & Co`,
          text: `Ролик за 600 лей собрал 98 000 просмотров в Reels. Покупатели приходят прямо с открытым видео на телефоне. Очень рекомендую Александра и Станислава!`,
          views: `98.2K просмотров`
        },
        {
          name: `Андрей Чебан`,
          role: `Руководитель сервисного центра SmartHub MD`,
          text: `Огромный плюс, что ребята сами придумывают темы и приезжают со всем профессиональным оборудованием. Монтаж делают буквально за 24 часа.`,
          views: `215.4K просмотров`
        }
      ],
      teamBadge: `Авторитетная команда`,
      teamTitle: `Кто создаёт ваш вирусный контент`,
      teamSub: `Мы лично отвечаем за каждый этап съёмки, качество монтажа и конечные продажи`,
      teamMembers: [
        {
          name: `Александр`,
          role: `Основатель, Продюсер & Оператор`,
          phone: `+373 78 337 228`,
          desc: `Отвечает за выездные съёмки, организацию, генерацию идей и переговоры. Всегда на связи для решения ваших задач.`
        },
        {
          name: `Станислав`,
          role: `Креативный Директор & Монтажёр`,
          phone: `+373 76 59 69 41`,
          desc: `Специалист по динамичному монтажу, саунд-дизайну и оформлению аккаунтов. Превращает обычное видео в вирусный тренд.`
        }
      ],
      faqBadge: `Вопросы и ответы`,
      faqTitle: `Ответы на часто задаваемые вопросы`,
      faqSub: `Всё, что необходимо знать перед стартом нашего сотрудничества`,
      faqItems: [
        {
          q: `Сколько стоит один ролик?`,
          a: `Один полностью готовый ролик под ключ стоит ровно 600 ЛЕЙ. При заказе пакетов от 5 или 10 роликов действуют дополнительные выгодные скидки.`
        },
        {
          q: `В каких соцсетях вы работаете?`,
          a: `Мы подготавливаем контент под TikTok, Instagram (Reels и Stories), Facebook и YouTube Shorts.`
        },
        {
          q: `Вы снимаете по всей Молдове?`,
          a: `Да! Мы выезжаем на съёмки по Кишинёву и в любой регион Республики Молдова.`
        },
        {
          q: `Нужно ли мне придумывать идеи для видео?`,
          a: `Нет. Мы анализируем вашу нишу, готовим концепцию, пишем сценарии и продающие завязки.`
        },
        {
          q: `На каких языках создаются ролики?`,
          a: `Мы снимаем и монтируем ролики на русском и румынском языках.`
        },
        {
          q: `Как быстро готово первое видео?`,
          a: `Первые ролики вы получаете в течение 24-48 часов после завершения съёмок.`
        }
      ],
      formBadge: `Заявка на съёмку`,
      formTitle: `Обсудить проект с экспертом`,
      formSub: `Оставьте заявку — мы свяжемся с вами в течение 15 минут для бесплатной консультации`,
      formFields: {
        name: `Ваше имя:`,
        namePlaceholder: `Например: Александр`,
        phone: `Номер телефона (Молдова):`,
        phonePlaceholder: `+373 XX XXX XXX`,
        business: `Ниша вашего бизнеса:`,
        businessPlaceholder: `Ресторан, Магазин, Салон красоты, Услуги...`,
        lang: `Предпочитаемый язык общения:`,
        msg: `Комментарий к заказу:`,
        msgPlaceholder: `Расскажите подробнее о ваших задачах...`,
        submit: `Отправить заявку`,
        submitting: `Отправка...`,
        successTitle: `Заявка успешно отправлена!`,
        successSub: `Спасибо! Александр или Станислав свяжется с вами в ближайшее время.`
      },
      footer: {
        rights: `Все права защищены. VIRALIS Media Studio Moldova.`,
        phoneAlex: `Александр: +373 78 337 228`,
        phoneStan: `Станислав: +373 76 59 69 41`
      },
      modal: {
        title: `Просмотр ролика`,
        close: `Закрыть`,
        btnOrder: `Заказать такой ролик за 600 MDL`
      }
    },
    ro: {
      scarcityBar: `🔥 Atenție: În această săptămână au mai rămas doar 3 locuri libere pentru filmări în Chișinău!`,
      scarcityTimer: `Până la închiderea rezervărilor:`,
      studioBadge: `PRODUCȚIE VIDEO AUTORITARĂ #1 ÎN MOLDOVA`,
      heroTitleLine1: `Clipuri virale de statut înalt,`,
      heroTitleLine2: `care vând produsele și serviciile tale`,
      heroSub: `Ciclu complet de filmare și montaj viral la cheie pentru TikTok, Instagram Reels, Facebook și YouTube Shorts. De la scenariul atrăgător până la vânzări reale.`,
      guaranteeBadge: `100% Preț fix fără taxe ascunse`,
      priceLabel: `Doar`,
      priceValue: `600 MDL`,
      priceSub: `per 1 clip complet finisat`,
      btnWhatsApp: `Comandă pe WhatsApp cu 600 MDL`,
      btnCall: `Apelează: +373 78 337 228`,
      btnCalc: `Calculează costul`,
      heroStats: [
        { value: '500+', label: 'Clipuri realizate' },
        { value: '10M+', label: 'Vizualizări rețele' },
        { value: '24-48h', label: 'Termen de montaj' },
        { value: '600 MDL', label: 'Preț fix per clip' }
      ],
      heroVideoTag: `Vezi lucrările`,
      proofBarTitle: `Avem încrederea brandurilor și antreprenorilor din Moldova`,
      calcBadge: `Calcul interactiv`,
      calcTitle: `Calculator de buget & Reduceri de volum`,
      calcSub: `Indică numărul de clipuri și alege opțiunile pentru calculul reducerii personale`,
      calcCountLabel: `Număr de videoclipuri:`,
      calcDiscount5: `Reducere 10% (de la 5 clipuri)`,
      calcDiscount10: `Reducere 15% (de la 10 clipuri)`,
      calcAddonsTitle: `Opțiuni premium suplimentare:`,
      calcAddon1: `Creare și ambalare completă cont (Instagram/TikTok/FB) (+500 MDL)`,
      calcAddon2: `Setare reclame targetate Meta (Facebook & Instagram Ads) (+800 MDL)`,
      calcAddonFree1: `Dezvoltare scenarii de vânzare originale (Inclus GRATUIT)`,
      calcAddonFree2: `Predare fișiere brute de filmare în 4K (Inclus GRATUIT)`,
      calcTotalLabel: `Cost total estimat al proiectului:`,
      calcSavingsLabel: `Economia ta curată:`,
      calcCTA: `Rezervă pachetul selectat`,
      portfolioBadge: `Portofoliu & Lucrări`,
      portfolioTitle: `Exemple de clipuri virale realizate`,
      portfolioSub: `Vezi rezultatele reale ale conținutului video pentru afaceri din Chișinău`,
      catAll: `Toate lucrările`,
      catFood: `Restaurante & Mâncare`,
      catFashion: `Modă & Magazine`,
      catTech: `Servicii & Business`,
      viewProject: `Vezi video`,
      beforeAfterBadge: `Comparație efect`,
      beforeAfterTitle: `Video obișnuit vs Clip VIRALIS cu 600 MDL`,
      beforeAfterSub: `De ce montajul viral corect aduce de 3-5 ori mai multe vânzări`,
      beforeTitle: `Filmare obișnuită cu telefonul`,
      beforeItems: [
        `Început plictisitor — 80% din privitori trec mai departe în 2 secunde`,
        `Sunet încet cu zgomot fără microfon profesional`,
        `Montaj lent fără dinamică și accente vizuale`,
        `Lipsă îndemn la acțiune — 0 solicitări`
      ],
      afterTitle: `Clip Viral VIRALIS (600 MDL)`,
      afterItems: [
        `Cârlig (Hook) atrăgător din 1-a secundă pentru menținerea atenției`,
        `Sunet de studio impecabil cu lavaliere profesionale`,
        `Schimbare dinamică de cadre la fiecare 1.5 sec și subtitrări`,
        `Îndemn clar la acțiune pentru comandă și cumpărare`
      ],
      servicesBadge: `Serviciile noastre`,
      servicesTitle: `Complex complet de soluții pentru compania ta`,
      servicesSub: `Preluăm tot procesul de creare a conținutului și atragere a clienților`,
      servicesList: [
        { title: `Filmare la teren & Montaj dinamic`, desc: `Filmăm conținut de calitate la locația ta sau în studioul nostru din Chișinău. Montăm cu tranziții moderne și efecte sonore.` },
        { title: `Ambalare & Design rețele sociale`, desc: `Ambalăm stilat paginile pe Instagram, TikTok și Facebook: profil clar, coperți, story-uri evidențiate și grilă estetică.` },
        { title: `Scenarii virale & Cârlige (Hooks)`, desc: `Dezvoltăm cârlige originale care determină privitorul să urmărească până la capăt și să acceseze profilul tău.` },
        { title: `Setare reclame Facebook & Insta Ads`, desc: `Setăm reclame targetate profesionale pentru un flux constant de solicitări și clienți în Moldova.` },
        { title: `Dublaj bilingv & Subtitrări`, desc: `Adăugăm voce clară în română și rusă, împreună cu subtitrări animate pentru o retenție maximă fără sonor.` },
        { title: `Plan de conținut la cheie`, desc: `Pregătim pachetul de clipuri pentru o lună înainte. Nu mai pierzi timpul gândindu-te 'ce să postez mâine'.` }
      ],
      packagesBadge: `Pachete disponibile`,
      packagesTitle: `Tarife avantajoase`,
      packagesSub: `Alege volumul optim de clipuri pentru cerințele companiei tale`,
      popularBadge: `🔥 Cea mai populară alegere`,
      packagesList: [
        {
          name: `Test-Drive`,
          price: `600`,
          unit: `MDL`,
          sub: `1 Clip la cheie`,
          features: [`1 Videoclip profesional`, `Filmare la teren și montaj`, `Muzică în trend și subtitrări`, `Termen de predare: 24-48 ore`],
          btn: `Comandă 1 clip`
        },
        {
          name: `Start Rapid`,
          price: `2 700`,
          unit: `MDL`,
          sub: `5 Clipuri (Economisești 300 MDL)`,
          features: [`5 Videoclipuri profesionale`, `Scenarii incluse pentru fiecare`, `Montaj dinamic și sound design`, `Adaptare Reels, TikTok, Shorts`],
          btn: `Comandă 5 clipuri`
        },
        {
          name: `Lansare Virală`,
          price: `5 100`,
          unit: `MDL`,
          sub: `10 Clipuri + Design Rețele`,
          features: [`10 Videoclipuri virale`, `Creare & Ambalare cont`, `Plan de conținut pentru 1 lună`, `Dublaj complet în RU/RO`],
          btn: `Comandă Lansare Virală`
        },
        {
          name: `VIP la Cheie`,
          price: `9 900`,
          unit: `MDL`,
          sub: `20 Clipuri + SMM & Reclame`,
          features: [`20 Clipuri gata pentru o lună`, `Ambalare Instagram, TikTok, FB`, `Setare reclame targetate`, `Producător dedicat 24/7`],
          btn: `Comandă Pachet VIP`
        }
      ],
      testimonialsBadge: `Dovadă socială`,
      testimonialsTitle: `Recenzii de la antreprenorii din Moldova`,
      testimonialsSub: `Istorii reale de succes ale clienților care ne-au încredințat conținutul video`,
      testimonialsList: [
        {
          name: `Victor Grosu`,
          role: `Proprietar restaurant Gusto Cafe, Chișinău`,
          text: `Am comandat pachetul de 10 clipuri pentru 5100 lei. După al treilea video pe TikTok rezervările de mese au crescut cu 40%. Calitatea muncii este excelentă!`,
          views: `142.5K vizualizări`
        },
        {
          name: `Elena Sîrbu`,
          role: `Fondatoare boutique de haine Luna & Co`,
          text: `Un clip cu 600 lei a adunat 98 000 vizualizări pe Reels. Cumpărătorii vin direct cu video-ul deschis pe telefon. Îi recomand cu încredere pe Alexandru și Stanislav!`,
          views: `98.2K vizualizări`
        },
        {
          name: `Andrei Ceban`,
          role: `Director centru de reparații SmartHub MD`,
          text: `Un mare plus este că băieții vin cu ideile și echipamentul complet. Montajul îl fac în doar 24 ore.`,
          views: `215.4K vizualizări`
        }
      ],
      teamBadge: `Echipă autoritară`,
      teamTitle: `Cine creează conținutul tău viral`,
      teamSub: `Răspundem personal de fiecare etapă de filmare, calitatea montajului și vânzările finale`,
      teamMembers: [
        {
          name: `Alexandru`,
          role: `Fondator, Producător & Operator`,
          phone: `+373 78 337 228`,
          desc: `Responsabil de filmările la teren, organizare, idei și negocieri. Mereu disponibil pentru discuția sarcinii tale.`
        },
        {
          name: `Stanislav`,
          role: `Director Creativ & Editor`,
          phone: `+373 76 59 69 41`,
          desc: `Specialist în montaj dinamic, corecție de culoare și ambalare pe rețelele sociale. Face clipurile moderne și atractive.`
        }
      ],
      faqBadge: `Întrebări frecvente`,
      faqTitle: `Răspunsuri la întrebări frecvente`,
      faqSub: `Tot ce trebuie să știi înainte de a începe colaborarea noastră`,
      faqItems: [
        {
          q: `Cât costă un videoclip?`,
          a: `Un videoclip complet finisat la cheie costă fix 600 LEI. La comanda pachetelor de la 5 sau 10 clipuri beneficiezi de reduceri excelente.`
        },
        {
          q: `Pentru ce rețele sociale creați conținut?`,
          a: `Pregătim conținut adaptat pentru TikTok, Instagram (Reels și Stories), Facebook și YouTube Shorts.`
        },
        {
          q: `Filmați în toată Moldova?`,
          a: `Da! Ne deplasăm la filmări în Chișinău și în orice regiune din Republica Moldova.`
        },
        {
          q: `Trebuie să vin eu cu ideile?`,
          a: `Nu. Analizăm domeniul tău, pregătim conceptul, scriem scenariile și cârligele de atenție.`
        },
        {
          q: `În ce limbi se creează clipurile?`,
          a: `Filmăm și montăm clipuri în limbile română și rusă.`
        },
        {
          q: `Cât de repede este gata primul video?`,
          a: `Primele clipuri le primești în termen de 24-48 ore de la finalizarea filmărilor.`
        }
      ],
      formBadge: `Solicitare filmare`,
      formTitle: `Discută proiectul cu un expert`,
      formSub: `Lasă o solicitare — te contactăm în maxim 15 minute pentru o consultație gratuită`,
      formFields: {
        name: `Numele tău:`,
        namePlaceholder: `De exemplu: Andrei`,
        phone: `Număr de telefon (Moldova):`,
        phonePlaceholder: `+373 XX XXX XXX`,
        business: `Domeniul afacerii:`,
        businessPlaceholder: `Restaurant, Magazin, Salon frumusețe, Servicii...`,
        lang: `Limba preferată de comunicare:`,
        msg: `Comentariu la comandă:`,
        msgPlaceholder: `Spune-ne mai multe despre cerințele tale...`,
        submit: `Trimite solicitarea`,
        submitting: `Se trimite...`,
        successTitle: `Solicitare trimisă cu succes!`,
        successSub: `Mulțumim! Alexandru sau Stanislav te va contacta în cel mai scurt timp.`
      },
      footer: {
        rights: `Toate drepturile rezervate. VIRALIS Media Studio Moldova.`,
        phoneAlex: `Alexandru: +373 78 337 228`,
        phoneStan: `Stanislav: +373 76 59 69 41`
      },
      modal: {
        title: `Vizualizare clip`,
        close: `Închide`,
        btnOrder: `Comandă un astfel de clip cu 600 MDL`
      }
    }
  };

  const cur = content[lang] || content['ru'];

  // Champagne Gold Styles Token Map
  const styles = {
    container: {
      backgroundColor: '#090A0E',
      color: '#F4F4F6',
      fontFamily: "'Outfit', 'Inter', system-ui, -apple-system, sans-serif",
      minHeight: '100vh',
      lineHeight: '1.6',
      overflowX: 'hidden'
    },
    goldGradientText: {
      background: 'linear-gradient(135deg, #FFF1C5 0%, #E5C07B 40%, #C59B40 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    goldBtn: {
      background: 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #B8860B 100%)',
      color: '#0A0B0E',
      fontWeight: '800',
      padding: '16px 36px',
      borderRadius: '50px',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.05rem',
      boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)',
      transition: 'all 0.3s ease'
    },
    outlineBtn: {
      background: 'rgba(255, 255, 255, 0.04)',
      color: '#FFFFFF',
      fontWeight: '700',
      padding: '16px 32px',
      borderRadius: '50px',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      border: '1px solid rgba(229, 192, 123, 0.3)',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.3s ease'
    },
    glassCard: {
      background: 'rgba(18, 19, 28, 0.75)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(229, 192, 123, 0.2)',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
    },
    badgePill: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 20px',
      borderRadius: '30px',
      background: 'rgba(229, 192, 123, 0.12)',
      border: '1px solid rgba(229, 192, 123, 0.35)',
      color: '#E5C07B',
      fontWeight: '700',
      fontSize: '0.85rem',
      letterSpacing: '0.5px'
    }
  };

  return (
    <div style={styles.container}>
      {/* 1. TOP SCARCITY & URGENCY ANNOUNCEMENT BAR */}
      <div style={{
        background: 'linear-gradient(90deg, #9A7426 0%, #D4AF37 50%, #9A7426 100%)',
        color: '#07080A',
        padding: '10px 16px',
        fontSize: '0.88rem',
        fontWeight: '800',
        textAlign: 'center',
        position: 'relative',
        zIndex: 100,
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span>{cur.scarcityBar}</span>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(0,0,0,0.85)', color: '#F3E5AB', padding: '3px 12px', borderRadius: '14px', fontSize: '0.82rem' }}>
            <Clock size={14} style={{ color: '#D4AF37' }} />
            <span>{cur.scarcityTimer}</span>
            <span style={{ fontWeight: '900', color: '#FFFFFF' }}>
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION HEADER */}
      <header style={{
        background: 'rgba(9, 10, 14, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(229, 192, 123, 0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 90
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, #E5C07B 0%, #9A7426 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#090A0E', fontWeight: '900', fontSize: '1.3rem' }}>
              V
            </div>
            <div>
              <div style={{ color: '#FFFFFF', fontWeight: '900', fontSize: '1.25rem', letterSpacing: '1px' }}>VIRALIS</div>
              <div style={{ color: '#E5C07B', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1.5px' }}>MEDIA STUDIO</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }} className="desktop-nav-bar">
            <a href="#calculator" style={{ color: '#D1D5DB', textDecoration: 'none', fontWeight: '600', fontSize: '0.92rem' }}>{t.nav.calculator}</a>
            <a href="#portfolio" style={{ color: '#D1D5DB', textDecoration: 'none', fontWeight: '600', fontSize: '0.92rem' }}>{t.nav.portfolio}</a>
            <a href="#services" style={{ color: '#D1D5DB', textDecoration: 'none', fontWeight: '600', fontSize: '0.92rem' }}>{t.nav.services}</a>
            <a href="#packages" style={{ color: '#D1D5DB', textDecoration: 'none', fontWeight: '600', fontSize: '0.92rem' }}>{t.nav.pricing}</a>
            <a href="#testimonials" style={{ color: '#D1D5DB', textDecoration: 'none', fontWeight: '600', fontSize: '0.92rem' }}>{t.nav.testimonials}</a>
            <a href="#contacts" style={{ color: '#D1D5DB', textDecoration: 'none', fontWeight: '600', fontSize: '0.92rem' }}>{t.nav.contacts}</a>
          </nav>

          {/* Controls: Language Switcher & Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Language Pills */}
            <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '30px', padding: '4px', border: '1px solid rgba(229, 192, 123, 0.2)', display: 'flex' }}>
              <button
                onClick={() => toggleLang('ru')}
                style={{
                  background: lang === 'ru' ? 'linear-gradient(135deg, #E5C07B 0%, #C59B40 100%)' : 'transparent',
                  color: lang === 'ru' ? '#090A0E' : '#9CA3AF',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '5px 14px',
                  fontWeight: '800',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                RU
              </button>
              <button
                onClick={() => toggleLang('ro')}
                style={{
                  background: lang === 'ro' ? 'linear-gradient(135deg, #E5C07B 0%, #C59B40 100%)' : 'transparent',
                  color: lang === 'ro' ? '#090A0E' : '#9CA3AF',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '5px 14px',
                  fontWeight: '800',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                RO
              </button>
            </div>

            {/* Header CTA */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.goldBtn,
                padding: '10px 22px',
                fontSize: '0.88rem'
              }}
            >
              <MessageCircle size={16} />
              <span>600 MDL</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#FFFFFF',
                borderRadius: '10px',
                padding: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div style={{ background: '#0D0E14', borderBottom: '1px solid rgba(229,192,123,0.2)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700' }}>{t.nav.calculator}</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700' }}>{t.nav.portfolio}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700' }}>{t.nav.services}</a>
            <a href="#packages" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700' }}>{t.nav.pricing}</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700' }}>{t.nav.testimonials}</a>
            <a href="#contacts" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700' }}>{t.nav.contacts}</a>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (AUTHORITY + SCARCITY + LUXURY NEUROAESTHETICS) */}
      <section id="hero" style={{ padding: '80px 24px', position: 'relative' }}>
        {/* Glow ambient background */}
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '350px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
          {/* Main Hero Column */}
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
            <div style={{ ...styles.badgePill, marginBottom: '24px' }}>
              <Award size={16} style={{ color: '#E5C07B' }} />
              <span>{cur.studioBadge}</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', fontWeight: '900', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-0.5px' }}>
              {cur.heroTitleLine1} <br />
              <span style={styles.goldGradientText}>{cur.heroTitleLine2}</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#9CA3AF', marginBottom: '36px', lineHeight: '1.7', maxWidth: '720px', margin: '0 auto 36px auto' }}>
              {cur.heroSub}
            </p>

            {/* Price Guarantee Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(229, 192, 123, 0.1) 0%, rgba(18, 19, 28, 0.9) 100%)',
              border: '1px solid rgba(229, 192, 123, 0.3)',
              borderRadius: '24px',
              padding: '24px 32px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              marginBottom: '40px',
              flexWrap: 'wrap',
              boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
            }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.85rem', color: '#E5C07B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {cur.guaranteeBadge}
                </div>
                <div style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', lineHeight: '1' }}>
                  600 <span style={{ fontSize: '1.5rem', color: '#E5C07B' }}>MDL</span>
                </div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(229, 192, 123, 0.25)', paddingLeft: '24px', textAlign: 'left' }}>
                <div style={{ fontWeight: '700', fontSize: '1.05rem', color: '#FFFFFF' }}>{t.hero.priceTagLabel}</div>
                <div style={{ fontSize: '0.88rem', color: '#9CA3AF' }}>{t.hero.priceTagSub}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" style={styles.goldBtn}>
                <MessageCircle size={20} />
                <span>{cur.btnWhatsApp}</span>
              </a>
              <a href="#calculator" style={styles.outlineBtn}>
                <Calculator size={18} style={{ color: '#E5C07B' }} />
                <span>{cur.btnCalc}</span>
              </a>
            </div>

            {/* Hero Key Stats Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '16px',
              background: 'rgba(18, 19, 28, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '24px'
            }}>
              {cur.heroStats.map((st, idx) => (
                <div key={idx} style={{ padding: '10px' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#E5C07B', lineHeight: '1.2' }}>{st.value}</div>
                  <div style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: '600', marginTop: '4px' }}>{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROOF & AUTHORITY BRAND STRIP */}
      <section style={{ background: '#0F1017', borderTop: '1px solid rgba(229,192,123,0.1)', borderBottom: '1px solid rgba(229,192,123,0.1)', padding: '32px 24px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
            {cur.proofBarTitle}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '36px', flexWrap: 'wrap', opacity: 0.85 }}>
            <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#D1D5DB', letterSpacing: '0.5px' }}>☕ Gusto Cafe</span>
            <span style={{ color: '#E5C07B' }}>•</span>
            <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#D1D5DB', letterSpacing: '0.5px' }}>👗 Luna & Co Boutique</span>
            <span style={{ color: '#E5C07B' }}>•</span>
            <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#D1D5DB', letterSpacing: '0.5px' }}>🔧 SmartHub MD</span>
            <span style={{ color: '#E5C07B' }}>•</span>
            <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#D1D5DB', letterSpacing: '0.5px' }}>🍷 Chisinau Wine Bar</span>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE PORTFOLIO SHOWCASE */}
      <section id="portfolio" style={{ padding: '90px 24px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ ...styles.badgePill, marginBottom: '16px' }}>
              <Video size={16} />
              <span>{cur.portfolioBadge}</span>
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '900', marginBottom: '16px' }}>{cur.portfolioTitle}</h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>{cur.portfolioSub}</p>

            {/* Category Filter Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
              {[
                { id: 'all', label: cur.catAll },
                { id: 'food', label: cur.catFood },
                { id: 'fashion', label: cur.catFashion },
                { id: 'tech', label: cur.catTech }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    background: activeCategory === tab.id ? 'linear-gradient(135deg, #E5C07B 0%, #C59B40 100%)' : 'rgba(255, 255, 255, 0.05)',
                    color: activeCategory === tab.id ? '#090A0E' : '#FFFFFF',
                    border: activeCategory === tab.id ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '10px 22px',
                    borderRadius: '30px',
                    fontWeight: '800',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalVideo(item)}
                style={{
                  background: 'rgba(18, 19, 28, 0.8)',
                  border: '1px solid rgba(229, 192, 123, 0.25)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                <div style={{ position: 'relative', width: '100%', paddingTop: '130%' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '24px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
                      <span style={{ background: 'rgba(229,192,123,0.2)', color: '#E5C07B', padding: '4px 12px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: '800' }}>
                        600 MDL
                      </span>
                    </div>

                    <div>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, #E5C07B 0%, #C59B40 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#090A0E', margin: '0 auto 16px auto', boxShadow: '0 8px 20px rgba(0,0,0,0.5)' }}>
                        <Play size={22} style={{ marginLeft: '4px' }} />
                      </div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '6px' }}>{item.title}</h3>
                      <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>{item.views} {lang === 'ru' ? 'просмотров' : 'vizualizări'}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE VIDEO COST CALCULATOR (COMMITMENT & CONSISTENCY) */}
      <section id="calculator" style={{ padding: '90px 24px', background: '#0D0E14' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ ...styles.badgePill, marginBottom: '16px' }}>
              <Calculator size={16} />
              <span>{cur.calcBadge}</span>
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '900', marginBottom: '16px' }}>{cur.calcTitle}</h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>{cur.calcSub}</p>
          </div>

          <div style={styles.glassCard}>
            {/* Slider Controls */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF' }}>{cur.calcCountLabel}</span>
                <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#E5C07B' }}>
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
                  accentColor: '#D4AF37',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.85rem', color: '#9CA3AF' }}>
                <span>1 {lang === 'ru' ? 'ролик' : 'clip'} (600 MDL)</span>
                <span style={{ color: discountRate === 0.10 ? '#E5C07B' : '#9CA3AF', fontWeight: discountRate === 0.10 ? '800' : '400' }}>
                  5 {lang === 'ru' ? 'роликов (-10%)' : 'clipuri (-10%)'}
                </span>
                <span style={{ color: discountRate === 0.15 ? '#E5C07B' : '#9CA3AF', fontWeight: discountRate === 0.15 ? '800' : '400' }}>
                  10+ {lang === 'ru' ? 'роликов (-15% VIP)' : 'clipuri (-15% VIP)'}
                </span>
              </div>
            </div>

            {/* Optional Addons */}
            <div style={{ marginBottom: '36px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '28px' }}>
              <div style={{ fontWeight: '800', fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '18px' }}>{cur.calcAddonsTitle}</div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 20px',
                  borderRadius: '14px',
                  background: addonPackage ? 'rgba(229,192,123,0.12)' : 'rgba(255,255,255,0.03)',
                  border: addonPackage ? '1px solid rgba(229,192,123,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  <input
                    type="checkbox"
                    checked={addonPackage}
                    onChange={(e) => setAddonPackage(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: '#D4AF37' }}
                  />
                  <span style={{ color: '#E2E8F0', fontSize: '0.95rem', fontWeight: '600' }}>{cur.calcAddon1}</span>
                </label>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 20px',
                  borderRadius: '14px',
                  background: addonAds ? 'rgba(229,192,123,0.12)' : 'rgba(255,255,255,0.03)',
                  border: addonAds ? '1px solid rgba(229,192,123,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  <input
                    type="checkbox"
                    checked={addonAds}
                    onChange={(e) => setAddonAds(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: '#D4AF37' }}
                  />
                  <span style={{ color: '#E2E8F0', fontSize: '0.95rem', fontWeight: '600' }}>{cur.calcAddon2}</span>
                </label>
              </div>

              {/* Included Free Perks */}
              <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10B981', fontSize: '0.88rem', fontWeight: '700' }}>
                  <CheckCircle2 size={16} />
                  <span>{cur.calcAddonFree1}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10B981', fontSize: '0.88rem', fontWeight: '700' }}>
                  <CheckCircle2 size={16} />
                  <span>{cur.calcAddonFree2}</span>
                </div>
              </div>
            </div>

            {/* Total Calculation Display */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(229, 192, 123, 0.15) 0%, rgba(18, 19, 28, 0.95) 100%)',
              border: '1px solid rgba(229, 192, 123, 0.4)',
              borderRadius: '20px',
              padding: '28px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div>
                <div style={{ fontSize: '0.9rem', color: '#9CA3AF', fontWeight: '600' }}>{cur.calcTotalLabel}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFFFFF', lineHeight: '1.1' }}>
                  {finalPrice} <span style={{ fontSize: '1.4rem', color: '#E5C07B' }}>MDL</span>
                </div>
                {totalSaved > 0 && (
                  <div style={{ color: '#10B981', fontWeight: '700', fontSize: '0.88rem', marginTop: '4px' }}>
                    {cur.calcSavingsLabel} {totalSaved} MDL
                  </div>
                )}
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                style={styles.goldBtn}
              >
                <MessageCircle size={20} />
                <span>{cur.calcCTA}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BEFORE / AFTER COMPARISON (CONTRAST & AUTHORITY) */}
      <section style={{ padding: '90px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ ...styles.badgePill, marginBottom: '16px' }}>
              <TrendingUp size={16} />
              <span>{cur.beforeAfterBadge}</span>
            </div>
            <h2 style={{ fontSize: '2.3rem', fontWeight: '900', marginBottom: '16px' }}>{cur.beforeAfterTitle}</h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>{cur.beforeAfterSub}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {/* Before Card */}
            <div style={{
              background: 'rgba(239, 68, 68, 0.04)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: '24px',
              padding: '32px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <XCircle size={24} style={{ color: '#EF4444' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#F87171' }}>{cur.beforeTitle}</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cur.beforeItems.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#9CA3AF', fontSize: '0.95rem' }}>
                    <span style={{ color: '#EF4444', fontWeight: 'bold' }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Card (Gold Highlighted) */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(229, 192, 123, 0.12) 0%, rgba(18, 19, 28, 0.95) 100%)',
              border: '2px solid rgba(229, 192, 123, 0.5)',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 15px 35px rgba(212, 175, 55, 0.15)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <CheckCircle2 size={24} style={{ color: '#E5C07B' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#F3E5AB' }}>{cur.afterTitle}</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cur.afterItems.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#FFFFFF', fontSize: '0.95rem', fontWeight: '600' }}>
                    <Check size={18} style={{ color: '#E5C07B', flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SERVICES & PROCESS (AUTHORITY & RECIPROCITY) */}
      <section id="services" style={{ padding: '90px 24px', background: '#0D0E14' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ ...styles.badgePill, marginBottom: '16px' }}>
              <Sparkles size={16} />
              <span>{cur.servicesBadge}</span>
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '900', marginBottom: '16px' }}>{cur.servicesTitle}</h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>{cur.servicesSub}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {cur.servicesList.map((srv, idx) => (
              <div key={idx} style={{
                background: 'rgba(18, 19, 28, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '28px',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(229, 192, 123, 0.12)', border: '1px solid rgba(229, 192, 123, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E5C07B', fontWeight: '900', marginBottom: '20px' }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>{srv.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.92rem', lineHeight: '1.6' }}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TARIFF PACKAGES SHOWCASE (SCARCITY & SOCIAL PROOF) */}
      <section id="packages" style={{ padding: '90px 24px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ ...styles.badgePill, marginBottom: '16px' }}>
              <Award size={16} />
              <span>{cur.packagesBadge}</span>
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '900', marginBottom: '16px' }}>{cur.packagesTitle}</h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>{cur.packagesSub}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {cur.packagesList.map((pkg, idx) => {
              const isPopular = idx === 2; // Viral Launch
              return (
                <div key={idx} style={{
                  background: isPopular ? 'linear-gradient(135deg, rgba(229, 192, 123, 0.15) 0%, rgba(18, 19, 28, 0.95) 100%)' : 'rgba(18, 19, 28, 0.7)',
                  border: isPopular ? '2px solid rgba(229, 192, 123, 0.6)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: isPopular ? '0 15px 35px rgba(212, 175, 55, 0.2)' : 'none'
                }}>
                  {isPopular && (
                    <div style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(90deg, #D4AF37 0%, #F3E5AB 100%)',
                      color: '#090A0E',
                      fontSize: '0.78rem',
                      fontWeight: '900',
                      padding: '4px 16px',
                      borderRadius: '20px',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}>
                      {cur.popularBadge}
                    </div>
                  )}

                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '8px' }}>{pkg.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: '#E5C07B', fontWeight: '700', marginBottom: '20px' }}>{pkg.sub}</div>

                    <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '24px', lineHeight: '1' }}>
                      {pkg.price} <span style={{ fontSize: '1.2rem', color: '#E5C07B' }}>{pkg.unit}</span>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#D1D5DB' }}>
                          <Check size={16} style={{ color: '#E5C07B', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={getWhatsAppLink(`Здравствуйте! Хочу заказать пакет "${pkg.name}" (${pkg.price} ${pkg.unit}).`)}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      ...(isPopular ? styles.goldBtn : styles.outlineBtn),
                      width: '100%',
                      boxSizing: 'border-box',
                      fontSize: '0.9rem',
                      padding: '14px 20px'
                    }}
                  >
                    <span>{pkg.btn}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. VERIFIED CLIENT TESTIMONIALS (SOCIAL PROOF & LIKING) */}
      <section id="testimonials" style={{ padding: '90px 24px', background: '#0D0E14' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ ...styles.badgePill, marginBottom: '16px' }}>
              <Users size={16} />
              <span>{cur.testimonialsBadge}</span>
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '900', marginBottom: '16px' }}>{cur.testimonialsTitle}</h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>{cur.testimonialsSub}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {cur.testimonialsList.map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(18, 19, 28, 0.75)',
                border: '1px solid rgba(229, 192, 123, 0.2)',
                borderRadius: '24px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} style={{ fill: '#E5C07B', color: '#E5C07B' }} />
                    ))}
                  </div>
                  <p style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '24px', fontStyle: 'italic' }}>
                    "{item.text}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: '800', color: '#FFFFFF', fontSize: '1rem' }}>{item.name}</div>
                    <div style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>{item.role}</div>
                  </div>
                  <div style={{ fontSize: '0.78rem', background: 'rgba(229,192,123,0.12)', color: '#E5C07B', padding: '4px 10px', borderRadius: '12px', fontWeight: '700' }}>
                    {item.views}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOUNDERS & EXPERT TEAM (AUTHORITY & LIKING) */}
      <section style={{ padding: '90px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ ...styles.badgePill, marginBottom: '16px' }}>
              <ShieldCheck size={16} />
              <span>{cur.teamBadge}</span>
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '900', marginBottom: '16px' }}>{cur.teamTitle}</h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>{cur.teamSub}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {cur.teamMembers.map((member, idx) => (
              <div key={idx} style={{
                background: 'rgba(18, 19, 28, 0.8)',
                border: '1px solid rgba(229, 192, 123, 0.25)',
                borderRadius: '24px',
                padding: '32px',
                textAlign: 'center'
              }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #E5C07B 0%, #9A7426 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: '#090A0E', fontWeight: '900', fontSize: '2rem' }}>
                  {member.name[0]}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '6px' }}>{member.name}</h3>
                <div style={{ fontSize: '0.88rem', color: '#E5C07B', fontWeight: '700', marginBottom: '16px' }}>{member.role}</div>
                <p style={{ color: '#9CA3AF', fontSize: '0.92rem', marginBottom: '24px', lineHeight: '1.6' }}>{member.desc}</p>
                <a href={`tel:${member.phone.replace(/\s+/g, '')}`} style={{ ...styles.outlineBtn, width: '100%', boxSizing: 'border-box', fontSize: '0.9rem' }}>
                  <Phone size={16} style={{ color: '#E5C07B' }} />
                  <span>{member.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. INTERACTIVE FAQ ACCORDION */}
      <section style={{ padding: '90px 24px', background: '#0D0E14' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ ...styles.badgePill, marginBottom: '16px' }}>
              <HelpCircle size={16} />
              <span>{cur.faqBadge}</span>
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '900', marginBottom: '16px' }}>{cur.faqTitle}</h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem' }}>{cur.faqSub}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {cur.faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} style={{
                  background: 'rgba(18, 19, 28, 0.7)',
                  border: isOpen ? '1px solid rgba(229, 192, 123, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'transparent',
                      border: 'none',
                      color: '#FFFFFF',
                      fontSize: '1.05rem',
                      fontWeight: '800',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px'
                    }}
                  >
                    <span>{item.q}</span>
                    {isOpen ? <ChevronUp size={20} style={{ color: '#E5C07B' }} /> : <ChevronDown size={20} style={{ color: '#9CA3AF' }} />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 24px 24px', color: '#9CA3AF', fontSize: '0.95rem', lineHeight: '1.7', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. HIGH-CONVERTING BOOKING FORM (COMMITMENT & SCARCITY) */}
      <section id="contacts" style={{ padding: '90px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ ...styles.badgePill, marginBottom: '16px' }}>
              <Send size={16} />
              <span>{cur.formBadge}</span>
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '900', marginBottom: '16px' }}>{cur.formTitle}</h2>
            <p style={{ color: '#9CA3AF', fontSize: '1.05rem' }}>{cur.formSub}</p>
          </div>

          <div style={styles.glassCard}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={64} style={{ color: '#10B981', margin: '0 auto 20px auto' }} />
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>{cur.formFields.successTitle}</h3>
                <p style={{ color: '#9CA3AF', fontSize: '1rem' }}>{cur.formFields.successSub}</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                    {cur.formFields.name}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={cur.formFields.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '12px',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                    {cur.formFields.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={cur.formFields.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '12px',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                    {cur.formFields.business}
                  </label>
                  <input
                    type="text"
                    placeholder={cur.formFields.businessPlaceholder}
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '12px',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                    {cur.formFields.msg}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={cur.formFields.msgPlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '12px',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  style={{
                    ...styles.goldBtn,
                    width: '100%',
                    padding: '16px',
                    fontSize: '1.05rem',
                    opacity: formSubmitting ? 0.7 : 1
                  }}
                >
                  <Send size={18} />
                  <span>{formSubmitting ? cur.formFields.submitting : cur.formFields.submit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 14. VIDEO MODAL PLAYER */}
      {activeModalVideo && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }} onClick={() => setActiveModalVideo(null)}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '380px',
            background: '#090A0E',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(229,192,123,0.4)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
          }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveModalVideo(null)} style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              zIndex: 10,
              background: 'rgba(0,0,0,0.6)',
              border: 'none',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <X size={20} />
            </button>

            <div style={{ position: 'relative', width: '100%', paddingTop: '160%' }}>
              <img src={activeModalVideo.image} alt={activeModalVideo.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.9) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px'
              }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(229,192,123,0.2)', color: '#E5C07B', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800', width: 'fit-content' }}>
                  <span>9:16 Format • 600 MDL</span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '6px' }}>{activeModalVideo.title}</h3>
                  <div style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '20px' }}>{activeModalVideo.views} {lang === 'ru' ? 'просмотров' : 'vizualizări'}</div>

                  <a href={getWhatsAppLink(`Здравствуйте! Хочу заказать подобный ролик как "${activeModalVideo.title}" (600 MDL)`)} target="_blank" rel="noreferrer" style={{ ...styles.goldBtn, width: '100%', boxSizing: 'border-box', fontSize: '0.95rem', padding: '14px' }}>
                    <MessageCircle size={18} />
                    <span>{cur.modal.btnOrder}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 15. LUXURY FOOTER */}
      <footer style={{ background: '#07080B', borderTop: '1px solid rgba(229, 192, 123, 0.15)', padding: '40px 24px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontWeight: '900', color: '#FFFFFF', fontSize: '1.1rem' }}>VIRALIS MEDIA STUDIO</div>
            <div style={{ color: '#9CA3AF', fontSize: '0.85rem', marginTop: '4px' }}>{cur.footer.rights}</div>
          </div>
          <div style={{ display: 'flex', gap: '20px', color: '#E5C07B', fontSize: '0.88rem', fontWeight: '700' }}>
            <span>{cur.footer.phoneAlex}</span>
            <span>•</span>
            <span>{cur.footer.phoneStan}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
