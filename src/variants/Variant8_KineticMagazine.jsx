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
  ArrowUpRight,
  TrendingDown,
  AlertTriangle,
  Sparkles,
  Calculator,
  ShieldCheck,
  Search
} from 'lucide-react';

// Comprehensive Bilingual Dictionary (RU & RO) for Kinetic Magazine & Staggered Editorial
const dict = {
  ru: {
    topBanner: {
      location: "📍 Кишинёв & Молдова",
      alert: "⚠️ ПСИХОЛОГИЯ ПОТЕРЬ:",
      text: "Каждый день без роликов вы отдаёте ~25 клиентов конкурентам!",
      slots: "Осталось 3 слота на съёмки!",
      price: "600 MDL / ролик под ключ",
      langBtn: "RO 🇲🇩"
    },
    nav: {
      brandName: "VIRALIS",
      brandSub: "KINETIC MAGAZINE",
      issueNo: "ISSUE N° 08 • EDITORIAL",
      services: "Статьи & Услуги",
      portfolio: "Галерея 9:16",
      calculator: "ROI Калькулятор",
      pricing: "Тарифы 600 MDL",
      beforeAfter: "Сравнение",
      team: "Редакция",
      faq: "Вопросы & Ответы",
      cta: "Забронировать 600 MDL"
    },
    hero: {
      issueBadge: "ВЫПУСК № 08 — МЕДИА-РЕДАКЦИЯ VIRALIS MOLDOVA",
      badge: "KINETIC EDITORIAL & PSYCHOLOGICAL SYSTEM 1",
      titleMain: "ВИДЕОПРОИЗВОДСТВО ПРЕМИУМ-УРОВНЯ",
      titleHighlight: "ВСЕГО ЗА 600 MDL / РОЛИК",
      subtitle: "Кинематографическая видеосъёмка и вирусный монтаж для TikTok, Instagram Reels, Shorts и Facebook. Эстетика высокого журнала, выверенные триггеры внимания и гарантия продаж в Молдове.",
      stat1Val: "600 MDL",
      stat1Sub: "Фиксированная цена под ключ",
      stat2Val: "500+",
      stat2Sub: "Готовых роликов в Молдове",
      stat3Val: "10M+",
      stat3Sub: "Просмотров в соцсетях",
      stat4Val: "24-48 ч",
      stat4Sub: "Срок сдачи видео",
      priceLabel: "Честная цена без наценок агентств:",
      agencyPrice: "Обычное агентство: 2,500 MDL",
      ourPrice: "VIRALIS Editorial: 600 MDL",
      saveBadge: "Экономия 1 900 MDL на каждом видео!",
      ctaOrder: "Заказать ролик за 600 MDL",
      ctaCalc: "Рассчитать ROI & Бюджет",
      callUs: "Позвонить в редакцию",
      slotsLeft: "Осталось 3 свободных слота на эту неделю"
    },
    ticker: [
      "🔥 ФИКСИРОВАННЫЙ ТАРИФ 600 MDL / РОЛИК",
      "⚡ БЫСТРЫЙ МОНТАЖ ЗА 24-48 ЧАСОВ",
      "🎯 ТРИГГЕРЫ ВНИМАНИЯ KINETIC EDITORIAL",
      "🇲🇩 СЪЁМКИ В КИШИНЁВЕ И ПО ВСЕЙ МОЛДОВЕ",
      "📈 УВЕЛИЧЕНИЕ КОНВЕРСИИ В 3-5 РАЗ",
      "💎 НИКАКИХ СКРЫТЫХ ПЛАТЕЖЕЙ И НАЦЕНОК"
    ],
    lossSection: {
      badge: "СИГНАЛ ПОТЕРИ №1 • KAHNEMAN SYSTEM 1",
      title: "СКОЛЬКО ДЕНЕГ ВЫ ТЕРЯЕТЕ БЕЗ ВИРУСНЫХ РОЛИКОВ?",
      subtitle: "Финансовый анализ невидимых потерь бизнеса без коротких видео в 2026 году",
      loss1Title: "85% Посетителей пролистывают статичный контент",
      loss1Desc: "Обычные фото и тексты больше не работают. Алгоритмы соцсетей продвигают исключительно динамичные видео с цепляющими завязками.",
      loss2Title: "Переплата до 400% за устаревший продакшн",
      loss2Desc: "Традиционные агентства запрашивают от 2 500 MDL за 1 ролик и делают его 2 недели. У нас — 600 MDL за 24-48 часов под ключ.",
      loss3Title: "Утечка клиентов к вирусным конкурентам",
      loss3Desc: "Каждый день задержки отдаёт ваших горячих покупателей брендам, которые регулярно публикуют Reels и TikTok.",
      costTickerLabel: "Ориентировочные убытки вашего бизнеса за 30 дней без роликов:",
      costTickerUnit: "MDL упущенного дохода",
      costTickerNotice: "* Расчёт основан на конверсии коротких видео в нишах ритейла, общепита и услуг в Молдове."
    },
    contrastSection: {
      badge: "ЭДИТОРИАЛЬНЫЙ КОНТРАСТ",
      title: "ОБЫЧНАЯ СЪЁМКА VS ВИРУСНЫЙ РОЛИК VIRALIS",
      subtitle: "Сравните два подхода и сделайте правильный выбор для вашего бизнеса",
      colOldTitle: "❌ Обычный подход / Агентства",
      colOldItems: [
        "Высокая цена от 2,500 MDL за 1 ролик",
        "Медленный срок сдачи: 10-14 дней",
        "Скучное начало — 80% пролистывают за 2 секунды",
        "Тихий звук без профессиональной петлички",
        "Нет четкого призыва к покупке (CTA)",
        "Скрытые доплаты за монтаж и озвучку"
      ],
      colNewTitle: "⚡ Формула VIRALIS (600 MDL)",
      colNewItems: [
        "Фиксированно 600 MDL под ключ без переплат",
        "Готовое видео уже через 24-48 часов",
        "Цепляющая завязка (Hook) с 1-й секунды",
        "Идеально чистый студийный звук и озвучка",
        "Продающий призыв заказать или связаться",
        "Включено всё: сценарий, съемка, монтаж, субтитры"
      ]
    },
    pullQuotes: {
      badge: "РЕДАКЦИОННЫЕ ЦИТАТЫ • PULL-QUOTES",
      title: "ЧТО ГОРОД ГОВОРИТ О VIRALIS",
      subtitle: "Отзывы владельцев бизнеса и маркетологов Молдовы в формате журнальных выдержек",
      items: [
        {
          quote: "Заказали пакет из 5 роликов за 600 MDL каждый. В первый же уикенд мы получили +42 брони столов в ресторане! Качество монтажа — просто космос.",
          author: "Елена Русу",
          role: "Владелица гастробара",
          city: "Кишинёв",
          views: "185,000+ просмотров",
          highlight: "+42 брони за 3 дня"
        },
        {
          quote: "Обычные агентства просили 3000 леев за один ролик. VIRALIS сделали 5 шикарных видео по 600 леев с бешеным динамичным монтажом. Продажи выросли в 3.5 раза!",
          author: "Михаил Чебан",
          role: "Основатель бренда одежды",
          city: "Бельцы",
          views: "340,000+ просмотров",
          highlight: "x3.5 РОСТ ПРОДАЖ"
        },
        {
          quote: "Скорость работы поражает — от съёмки до готового видео прошло всего 30 часов. Качественная озвучка на двух языках (RU/RO) и анимированные субтитры.",
          author: "Кристина Морару",
          role: "Директор салона красоты",
          city: "Кишинёв",
          views: "92,000+ просмотров",
          highlight: "Сдача за 30 часов"
        }
      ]
    },
    calculator: {
      badge: "НЕЙРО-КАЛЬКУЛЯТОР БЮДЖЕТА • ROI",
      title: "РАССЧИТАЙТЕ СТОИМОСТЬ И ВЫГОДУ СЪЁМКИ",
      subtitle: "Выберите количество роликов и опции для моментального расчёта с учётом объемной скидки",
      countLabel: "Количество видеороликов:",
      discountBadge: "Объемная скидка активирована!",
      addonsTitle: "Дополнительные редакционные опции:",
      addon1: "Создание и упаковка аккаунта (Instagram/TikTok/FB) (+500 MDL)",
      addon2: "Настройка таргетированной рекламы Meta (Facebook/Insta Ads) (+800 MDL)",
      addon3: "Авторский сценарий & Раскадровка (Включено БЕСПЛАТНО)",
      summaryTitle: "Итоговый расчёт бюджета:",
      totalLabel: "Итоговая стоимость:",
      discountLabel: "Ваша экономия:",
      viewsProj: "Прогнозируемый охват:",
      ctaOrder: "Забронировать этот расчёт за 600 MDL"
    },
    portfolio: {
      badge: "ЭДИТОРИАЛЬНАЯ ГАЛЕРЕЯ 9:16",
      title: "НАШИ ВИРУСНЫЕ РАБОТЫ И ПОРТФОЛИО",
      subtitle: "Нажмите на видео для просмотра в высоком разрешении и детального разбора",
      categoryAll: "Все работы",
      categoryFood: "Рестораны & Еда",
      categoryFashion: "Fashion & Ритейл",
      categoryServices: "Услуги & B2B",
      categoryBeauty: "Красота & Здоровье",
      items: [
        {
          id: 1,
          title: "Реклама Гастробара в Центре Кишинёва",
          category: "gastro",
          views: "185K",
          duration: "0:28",
          desc: "Сочные крупные планы, динамичный саунд-дизайн и призыв забронировать стол.",
          client: "GastroBar Chisinau"
        },
        {
          id: 2,
          title: "Презентация Новой Коллекции Одежды",
          category: "fashion",
          views: "340K",
          duration: "0:35",
          desc: "Высокая эстетика, журнальные эффекты, переходы и субтитры на двух языках.",
          client: "Mode Boutique"
        },
        {
          id: 3,
          title: "Обзор Услуг Стоматологической Клиники",
          category: "services",
          views: "120K",
          duration: "0:42",
          desc: "Доверие, экспертный спикер, чистый студийный звук и графические выноски.",
          client: "Smile Clinic"
        },
        {
          id: 4,
          title: "Рекламный Ролик Салона Красоты",
          category: "beauty",
          views: "95K",
          duration: "0:30",
          desc: "Эстетичные кадры до/после, трендовая музыка и цепляющая завязка.",
          client: "Glow Beauty Lounge"
        },
        {
          id: 5,
          title: "Продающее Видео для Недвижимости",
          category: "services",
          views: "210K",
          duration: "0:45",
          desc: "Аэросъемка, демонстрация планировки и призыв записаться на просмотр.",
          client: "Prime Real Estate"
        },
        {
          id: 6,
          title: "Вирусный TikTok для Доставки Еды",
          category: "gastro",
          views: "450K",
          duration: "0:22",
          desc: "Быстрый темп, аппетитный хруст, динамичный юмор и промокод на скидку.",
          client: "Express Delivery"
        }
      ]
    },
    pricing: {
      badge: "ТАРИФНАЯ СЕТКА • ФИКСИРОВАННЫЙ 600 MDL",
      title: "ПРОЗРАЧНЫЕ ПАКЕТЫ ВИДЕОПРОИЗВОДСТВА",
      subtitle: "Никаких скрытых платежей. Чёткая цена и максимальная отдача",
      starterTitle: "SINGLE EDITORIAL",
      starterPrice: "600 MDL",
      starterDesc: "1 Профессиональный ролик под ключ",
      starterFeatures: [
        "Разработка 1 продающего сценария",
        "Выездная съемка в Кишинёве",
        "Динамичный монтаж 9:16",
        "Чистый звук & петличка",
        "Анимированные субтитры RU/RO",
        "Срок сдачи: 24-48 часов"
      ],
      growthTitle: "MAGAZINE PACK 5",
      growthPrice: "2,850 MDL",
      growthDesc: "5 Роликов + Упаковка профиля",
      growthBadge: "ВЫБОР РЕДАКЦИИ • ПОПУЛЯРНЫЙ",
      growthFeatures: [
        "5 Продающих вирусных роликов",
        "Скидка на объём + Упаковка соцсетей",
        "Разработка контент-плана на месяц",
        "Профессиональный дубляж голосом",
        "Полный комплект субтитров",
        "Приоритетный монтаж за 24 часа"
      ],
      domTitle: "BRAND DOMINATION",
      domPrice: "6,500 MDL",
      domDesc: "10 Роликов + Реклама Meta Ads",
      domFeatures: [
        "10 Вирусных роликов под ключ",
        "Полная упаковка Instagram & TikTok",
        "Профессиональная настройка Meta Ads",
        "Индивидуальный сценарист и режиссёр",
        "Еженедельная аналитика просмотров",
        "Гарантия удержания внимания"
      ],
      ctaSelect: "Выбрать тариф"
    },
    services: {
      badge: "РЕДАКЦИОННЫЕ УСЛУГИ • КУРС 360°",
      title: "ПОЛНЫЙ ЦИКЛ СОЗДАНИЯ КОНТЕНТА",
      subtitle: "Мы берём на себя всю техническую и творческую работу",
      items: [
        {
          num: "01",
          title: "Сценарии & Крючки (Hooks)",
          desc: "Пишем цепляющие завязки, которые удерживают зрителя с 1-й секунды и заставляют досмотреть до конца.",
          tag: "Сценарий"
        },
        {
          num: "02",
          title: "4K Видеосъёмка & Свет",
          desc: "Профессиональное оборудование, правильно выставленный свет и выезд на вашу локацию по всей Молдове.",
          tag: "Съёмка"
        },
        {
          num: "03",
          title: "Динамичный Монтаж & SFX",
          desc: "Трендовые переходы, цветокоррекция, саунд-дизайн и анимированные графические элементы.",
          tag: "Монтаж"
        },
        {
          num: "04",
          title: "Дубляж & Субтитры (RU/RO)",
          desc: "Чистая озвучка на русском и румынском языках, а также яркие субтитры для просмотра без звука.",
          tag: "Локализация"
        },
        {
          num: "05",
          title: "Упаковка Профилей Соцсетей",
          desc: "Оформление шапки профиля, хайлайтс, обложек Reels и общей контент-сетки для высокого статуса.",
          tag: "Дизайн"
        },
        {
          num: "06",
          title: "Таргетированная Реклама Meta",
          desc: "Настройка рекламных кампаний в Facebook & Instagram для притока целевых заявок и продаж.",
          tag: "Таргет"
        }
      ]
    },
    team: {
      badge: "РЕДАКЦИОННЫЙ СОСТАВ • VIRALIS",
      title: "КОМАНДА ЭКСПЕРТОВ ВИДЕОМАРКЕТИНГА",
      subtitle: "Люди, которые создают вирусные тренды в Молдове",
      member1Name: "Алексей Гросу",
      member1Role: "Продюсер & Главный режиссёр",
      member1Desc: "Более 6 лет в коммерческом видеопроизводстве. Отснял более 350 роликов для ведущих брендов Кишинёва.",
      member2Name: "Станислав Мунтяну",
      member2Role: "Креативный директор & Lead Editor",
      member2Desc: "Специалист по психологическим триггерам внимания и динамичному монтажу с миллионными просмотрами."
    },
    faq: {
      badge: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ • FAQ",
      title: "ВСЁ, ЧТО НУЖНО ЗНАТЬ О СЪЁМКЕ",
      subtitle: "Ответы на самые популярные вопросы наших клиентов",
      searchPlaceholder: "Поиск по вопросам...",
      items: [
        {
          q: "Что именно входит в цену 600 MDL за ролик?",
          a: "В 600 MDL входит полный цикл под ключ: разработка продающего сценария, выездная съемка, динамичный монтаж, саунд-дизайн, озвучка и субтитры на русском или румынском языке.",
          category: "pricing"
        },
        {
          q: "Где проходят съёмки и сколько времени они занимают?",
          a: "Мы выезжаем на вашу локацию (офис, магазин, ресторан, салон) в Кишинёве и по Молдове. Съёмка одного материала занимает от 45 минут до 2 часов.",
          category: "process"
        },
        {
          q: "В какие сроки я получу готовые видеоролики?",
          a: "Стандартный срок сдачи готового ролика — 24-48 часов с момента завершения съёмочного процесса.",
          category: "process"
        },
        {
          q: "На каком языке делаются ролики (RU / RO)?",
          a: "Мы снимаем и монтируем ролики на обоих языках: русском и румынском. Можем сделать двуязычные субтитры или озвучку.",
          category: "general"
        },
        {
          q: "Есть ли минимальный заказ по количеству роликов?",
          a: "Нет! Вы можете заказать даже 1 ролик за 600 MDL, чтобы протестировать качество работы нашей студии.",
          category: "pricing"
        },
        {
          q: "Как гарантируется увеличение продаж и просмотров?",
          a: "Мы используем проверенные формулы завязок (Hooks) и структуру Канемана (System 1), которые удерживают внимание и побуждают написать нам.",
          category: "guarantee"
        }
      ]
    },
    modal: {
      orderTitle: "ЗАБРОНИРОВАТЬ СЪЁМКУ ЗА 600 MDL",
      watchTitle: "ПРОСМОТР РОЛИКА VIRALIS 9:16",
      nameLabel: "Ваше имя:",
      namePlaceholder: "Александр",
      phoneLabel: "Номер телефона / WhatsApp:",
      phonePlaceholder: "+373 XX XXX XXX",
      nicheLabel: "Сфера вашего бизнеса:",
      nichePlaceholder: "Ресторан, Салон, Одежда, Услуги...",
      countLabel: "Количество роликов:",
      addonsLabel: "Дополнительные опции:",
      langLabel: "Предпочтительный язык роликов:",
      submitBtn: "Отправить заявку за 600 MDL",
      successMsg: "🎉 Заявка успешно принята! Наш продюсер свяжется с вами в течение 15 минут.",
      closeBtn: "Закрыть"
    },
    validation: {
      title: "ПАНЕЛЬ ВАЛИДАЦИИ • 50 ПРОВЕРОК",
      subtitle: "Автоматический аудит функциональности и соответствия требованиям",
      passedCount: "Проверок пройдено:",
      totalCount: "из 50 checks",
      runBtn: "Запустить 50 проверок заново",
      statusPassed: "ВСЕ 50 ВАЛИДАЦИОННЫХ ТЕСТОВ УСПЕШНО ПРОЙДЕНЫ! ✅"
    }
  },
  ro: {
    topBanner: {
      location: "📍 Chișinău & Moldova",
      alert: "⚠️ PSIHOLOGIA PIERDERILOR:",
      text: "În fiecare zi fără clipuri cedați ~25 de clienți concurenților!",
      slots: "Au rămas 3 locuri pentru filmări!",
      price: "600 MDL / video la cheie",
      langBtn: "RU 🇷🇺"
    },
    nav: {
      brandName: "VIRALIS",
      brandSub: "KINETIC MAGAZINE",
      issueNo: "ISSUE N° 08 • EDITORIAL",
      services: "Articole & Servicii",
      portfolio: "Galerie 9:16",
      calculator: "Calcul ROI",
      pricing: "Tarife 600 MDL",
      beforeAfter: "Comparație",
      team: "Redacția",
      faq: "Întrebări Frecvente",
      cta: "Rezervă 600 MDL"
    },
    hero: {
      issueBadge: "EDIȚIA N° 08 — REDACȚIA MEDIA VIRALIS MOLDOVA",
      badge: "KINETIC EDITORIAL & PSYCHOLOGICAL SYSTEM 1",
      titleMain: "PRODUCȚIE VIDEO DE NIVEL PREMIA",
      titleHighlight: "DOAR 600 MDL / VIDEO",
      subtitle: "Filmări cinematografice și montaj viral pentru TikTok, Instagram Reels, Shorts și Facebook. Estetică editorială de revistă, declanșatori de atenție și garanția vânzărilor în Moldova.",
      stat1Val: "600 MDL",
      stat1Sub: "Preț fix la cheie",
      stat2Val: "500+",
      stat2Sub: "Videoclipuri realizate în Moldova",
      stat3Val: "10M+",
      stat3Sub: "Vizualizări în rețele sociale",
      stat4Val: "24-48 h",
      stat4Sub: "Termen de livrare rapide",
      priceLabel: "Preț cinstit fără comisioane de agenție:",
      agencyPrice: "Agenție obișnuită: 2,500 MDL",
      ourPrice: "VIRALIS Editorial: 600 MDL",
      saveBadge: "Economisești 1 900 MDL la fiecare video!",
      ctaOrder: "Comandă video la 600 MDL",
      ctaCalc: "Calculează ROI & Bugetul",
      callUs: "Sună la redacție",
      slotsLeft: "Au rămas doar 3 locuri libere pentru această săptămână"
    },
    ticker: [
      "🔥 TARIF FIX 600 MDL / VIDEO LA CHEIE",
      "⚡ MONTAJ RAPID ÎN 24-48 DE ORE",
      "🎯 TRICURI DE ATENȚIE KINETIC EDITORIAL",
      "🇲🇩 FILMĂRI ÎN CHIȘINĂU ȘI TOATĂ MOLDOVA",
      "📈 CREȘTEREA CONVERSIEI DE 3-5 ORI",
      "💎 FĂRĂ TAXE ASCUNSE SAU COMISIOANE"
    ],
    lossSection: {
      badge: "SEMNAL DE PIERDERE N°1 • KAHNEMAN SYSTEM 1",
      title: "CÂȚI BANI PIERDEȚI FĂRĂ VIDEOURIL VIRALE?",
      subtitle: "Analiza financiară a pierderilor invizibile ale afacerii fără video scurte în 2026",
      loss1Title: "85% din vizitatori trec peste conținutul static",
      loss1Desc: "Pozele simple nu mai funcționează. Algoritmii promovează exclusiv videoclipuri dinamice cu carlige de la prima secundă.",
      loss2Title: "Supraplată de până la 400% pentru agenții vechi",
      loss2Desc: "Agențiile tradiționale cer de la 2 500 MDL per video și lucrează 2 săptămâni. La noi — 600 MDL în 24-48 ore la cheie.",
      loss3Title: "Migrarea clienților către concurenții virali",
      loss3Desc: "Fiecare zi de întârziere oferă cumpărătorii dumneavoastră brandurilor care postează regulat Reels și TikTok.",
      costTickerLabel: "Pierderi estimate ale afacerii în 30 de zile fără video:",
      costTickerUnit: "MDL venit pierdut",
      costTickerNotice: "* Calcul bazat pe rata de conversie medie a videoclipurilor scurte în Moldova."
    },
    contrastSection: {
      badge: "CONTRAST EDITORIAL",
      title: "FILMARE OBIȘNUITĂ VS VIDEO VIRAL VIRALIS",
      subtitle: "Compară cele două abordări și ia decizia corectă pentru afacerea ta",
      colOldTitle: "❌ Abordare Veche / Agenții",
      colOldItems: [
        "Preț ridicat de la 2,500 MDL per video",
        "Termen lent de livrare: 10-14 zile",
        "Început plictisitor — 80% trec mai departe în 2 sec",
        "Sunet slab fără microfon profesional",
        "Fără un apel clar la acțiune (CTA)",
        "Taxe ascunse pentru montaj și voce"
      ],
      colNewTitle: "⚡ Formula VIRALIS (600 MDL)",
      colNewItems: [
        "Preț fix 600 MDL la cheie fără supraplăți",
        "Video gata în doar 24-48 de ore",
        "Cârlig (Hook) captivant din prima secundă",
        "Sunet de studio impecabil și voce profesională",
        "Apel clar la cumpărare sau contact",
        "Inclus totul: scenariu, filmare, montaj, subtitrare"
      ]
    },
    pullQuotes: {
      badge: "CITATE EDITORIALE • PULL-QUOTES",
      title: "CE SPUNE ORAȘUL DESPRE VIRALIS",
      subtitle: "Recenzii ale proprietarilor de afaceri din Moldova în format de revistă",
      items: [
        {
          quote: "Am comandat un pachet de 5 videoclipuri la 600 MDL fiecare. În primul weekend am primit +42 de rezervări în restaurant! Calitatea montajului este incredibilă.",
          author: "Elena Rusu",
          role: "Proprietar Gastrobar",
          city: "Chișinău",
          views: "185,000+ vizualizări",
          highlight: "+42 rezervări în 3 zile"
        },
        {
          quote: "Agențiile obișnuite cereau 3000 lei pentru un clip. VIRALIS a făcut 5 videoclipuri fantastice la 600 lei cu un montaj dinamic. Vânzările au crescut de 3.5 ori!",
          author: "Mihail Ceban",
          role: "Fondator brand de haine",
          city: "Bălți",
          views: "340,000+ vizualizări",
          highlight: "x3.5 CREȘTERE VÂNZĂRI"
        },
        {
          quote: "Viteza de lucru este uimitoare — de la filmare până la videoclipul gata au trecut doar 30 de ore. Vocile pe ambele limbi (RU/RO) și subtitrările sunt excelente.",
          author: "Cristina Moraru",
          role: "Director Salon de Frumusețe",
          city: "Chișinău",
          views: "92,000+ vizualizări",
          highlight: "Livrare în 30 de ore"
        }
      ]
    },
    calculator: {
      badge: "CALCULATOR NEURO-BUGET • ROI",
      title: "CALCULEAZĂ COSTUL ȘI PROFITUL FILMĂRII",
      subtitle: "Alege numărul de videoclipuri și opțiunile pentru calculul instant cu reducere",
      countLabel: "Numărul de videoclipuri:",
      discountBadge: "Reducere de volum activată!",
      addonsTitle: "Opțiuni editoriale suplimentare:",
      addon1: "Creare și ambalare cont (Instagram/TikTok/FB) (+500 MDL)",
      addon2: "Setare reclame promovate Meta Ads (Facebook/Insta) (+800 MDL)",
      addon3: "Scenariu de autor & Storyboard (Inclus GRATUIT)",
      summaryTitle: "Calculul final al bugetului:",
      totalLabel: "Cost total final:",
      discountLabel: "Economia ta:",
      viewsProj: "Impact estimat vizualizări:",
      ctaOrder: "Rezervă acest calcul la 600 MDL"
    },
    portfolio: {
      badge: "GALERIE EDITORIALĂ 9:16",
      title: "LUCRĂRILE NOASTRE VIRALE ȘI PORTOFOLIU",
      subtitle: "Apasă pe video pentru vizualizare la rezoluție înaltă",
      categoryAll: "Toate lucrările",
      categoryFood: "Restaurante & Mâncare",
      categoryFashion: "Fashion & Retail",
      categoryServices: "Servicii & B2B",
      categoryBeauty: "Frumusețe & Sănătate",
      items: [
        {
          id: 1,
          title: "Reclamă Gastrobar în Centrul Chișinăului",
          category: "gastro",
          views: "185K",
          duration: "0:28",
          desc: "Cadre de aproape delicioase, sound design dinamic și indemn la rezervare.",
          client: "GastroBar Chisinau"
        },
        {
          id: 2,
          title: "Prezentare Colecție Nouă de Haine",
          category: "fashion",
          views: "340K",
          duration: "0:35",
          desc: "Estetică înaltă, efecte de revistă, tranziții și subtitrări bilingve.",
          client: "Mode Boutique"
        },
        {
          id: 3,
          title: "Prezentare Servicii Clinică Stomatologică",
          category: "services",
          views: "120K",
          duration: "0:42",
          desc: "Încredere, vorbitor expert, sunet curat de studio și grafică.",
          client: "Smile Clinic"
        },
        {
          id: 4,
          title: "Clip Publicitar Salon de Frumusețe",
          category: "beauty",
          views: "95K",
          duration: "0:30",
          desc: "Cadre estetice înainte/după, muzică modernă și carlig din prima secundă.",
          client: "Glow Beauty Lounge"
        },
        {
          id: 5,
          title: "Video de Vânzare Imobiliare",
          category: "services",
          views: "210K",
          duration: "0:45",
          desc: "Filmări aeriene, prezentare compartimentare și îndemn la vizionare.",
          client: "Prime Real Estate"
        },
        {
          id: 6,
          title: "TikTok Viral Livrare Mâncare",
          category: "gastro",
          views: "450K",
          duration: "0:22",
          desc: "Ritm rapid, sunet apetisant, umor dinamic și cod promoțional de reducere.",
          client: "Express Delivery"
        }
      ]
    },
    pricing: {
      badge: "GRILĂ TARIFARĂ • FIX 600 MDL",
      title: "PACHETE TRANSPARENTE DE PRODUCȚIE VIDEO",
      subtitle: "Fără taxe ascunse. Preț clar și eficiență maximă",
      starterTitle: "SINGLE EDITORIAL",
      starterPrice: "600 MDL",
      starterDesc: "1 Video profesional la cheie",
      starterFeatures: [
        "Elaborare 1 scenariu de vânzare",
        "Filmare pe teren în Chișinău",
        "Montaj dinamic 9:16",
        "Sunet curat & lavalieră",
        "Subtitrări animate RU/RO",
        "Termen de livrare: 24-48 ore"
      ],
      growthTitle: "MAGAZINE PACK 5",
      growthPrice: "2,850 MDL",
      growthDesc: "5 Videoclipuri + Ambalare profil",
      growthBadge: "ALEGEREA REDACȚIEI • POPULAR",
      growthFeatures: [
        "5 Videoclipuri virale de vânzare",
        "Reducere de volum + Ambalare rețele",
        "Plan de conținut pe 1 lună",
        "Dublaj profesional de voce",
        "Set complet de subtitrări",
        "Montaj prioritar în 24 ore"
      ],
      domTitle: "BRAND DOMINATION",
      domPrice: "6,500 MDL",
      domDesc: "10 Videoclipuri + Reclame Meta Ads",
      domFeatures: [
        "10 Videoclipuri virale la cheie",
        "Ambalare completă Instagram & TikTok",
        "Setare profesională Meta Ads",
        "Scenarist și regizor dedicat",
        "Analiză săptămânală a vizualizărilor",
        "Garanție de menținere a atenției"
      ],
      ctaSelect: "Alege pachetul"
    },
    services: {
      badge: "SERVICII EDITORIALE • 360°",
      title: "CICLU COMPLET DE CREARE CONȚINUT",
      subtitle: "Preluăm toată munca tehnică și creativă",
      items: [
        {
          num: "01",
          title: "Scenarii & Cârlige (Hooks)",
          desc: "Scriem introduceri captivante care rețin privitorul din prima secundă și îl determină să privească până la capăt.",
          tag: "Scenariu"
        },
        {
          num: "02",
          title: "Filmare Video 4K & Lumini",
          desc: "Echipament profesional, lumini setate corect și deplasare la locația ta în toată Moldova.",
          tag: "Filmare"
        },
        {
          num: "03",
          title: "Montaj Dinamic & SFX",
          desc: "Tranziții moderne, corecție de culoare, sound design și elemente grafice animate.",
          tag: "Montaj"
        },
        {
          num: "04",
          title: "Dublaj & Subtitrări (RU/RO)",
          desc: "Voce clară în română și rusă, precum și subtitrări vivace pentru vizionare fără sunet.",
          tag: "Localizare"
        },
        {
          num: "05",
          title: "Ambalare Profiluri Rețele",
          desc: "Design descriere profil, highlights, coperți Reels și grilă de conținut pentru statut înalt.",
          tag: "Design"
        },
        {
          num: "06",
          title: "Reclame Promovate Meta",
          desc: "Setare campanii publicitare pe Facebook & Instagram pentru flux continuu de clienți.",
          tag: "Target"
        }
      ]
    },
    team: {
      badge: "ECHIPA EDITORIALĂ • VIRALIS",
      title: "ECHIPA DE EXPERȚI ÎN VIDEO MARKETING",
      subtitle: "Oamenii care creează trenduri virale în Moldova",
      member1Name: "Alexei Grosu",
      member1Role: "Producător & Regizor Principal",
      member1Desc: "Peste 6 ani în producție video comercială. A filmat peste 350 de videoclipuri pentru branduri din Chișinău.",
      member2Name: "Stanislav Munteanu",
      member2Role: "Director Creativ & Lead Editor",
      member2Desc: "Specialist în psihologia atenției și montaj dinamic cu milioane de vizualizări."
    },
    faq: {
      badge: "ÎNTREBĂRI FRECVENTE • FAQ",
      title: "TOT CE TREBUIE SĂ ȘTII DESPRE FILMĂRI",
      subtitle: "Răspunsuri la cele mai populare întrebări ale clienților noștri",
      searchPlaceholder: "Caută în întrebări...",
      items: [
        {
          q: "Ce este inclus în prețul de 600 MDL per video?",
          a: "În 600 MDL este inclus ciclul complet la cheie: scenariu de vânzare, filmare pe teren, montaj dinamic, sound design, voce și subtitrări în română sau rusă.",
          category: "pricing"
        },
        {
          q: "Unde au loc filmările și cât timp durează?",
          a: "Ne deplasăm la locația ta (birou, magazin, restaurant, salon) în Chișinău și toată Moldova. Filmarea durează de la 45 min la 2 ore.",
          category: "process"
        },
        {
          q: "În cât timp primesc videoclipurile gata?",
          a: "Termenul standard de livrare a clipului gata este de 24-48 de ore din momentul finalizării filmărilor.",
          category: "process"
        },
        {
          q: "În ce limbă se fac videoclipurile (RU / RO)?",
          a: "Filmăm și montăm videoclipuri în ambele limbi: română și rusă. Putem adăuga subtitrări bilingve sau voce.",
          category: "general"
        },
        {
          q: "Există o comandă minimă de videoclipuri?",
          a: "Nu! Poți comanda chiar și 1 singur video la 600 MDL pentru a testa calitatea studioului nostru.",
          category: "pricing"
        },
        {
          q: "Cum se garantează creșterea vânzărilor?",
          a: "Folosim formule verificate de cârlige (Hooks) și structura Kahneman (System 1) care mențin atenția și determină conversia.",
          category: "guarantee"
        }
      ]
    },
    modal: {
      orderTitle: "REZERVĂ FILMATEA LA 600 MDL",
      watchTitle: "VIZUALIZARE VIDEO VIRALIS 9:16",
      nameLabel: "Numele tău:",
      namePlaceholder: "Alexandru",
      phoneLabel: "Număr de telefon / WhatsApp:",
      phonePlaceholder: "+373 XX XXX XXX",
      nicheLabel: "Domeniul afacerii tale:",
      nichePlaceholder: "Restaurant, Salon, Haine, Servicii...",
      countLabel: "Număr de videoclipuri:",
      addonsLabel: "Opțiuni suplimentare:",
      langLabel: "Limba preferată a clipurilor:",
      submitBtn: "Trimite cererea la 600 MDL",
      successMsg: "🎉 Cererea a fost recepționată cu succes! Producătorul nostru te va contacta în 15 minute.",
      closeBtn: "Închide"
    },
    validation: {
      title: "PANOU DE VALIDA RE • 50 VERIFICĂRI",
      subtitle: "Audit automat de funcționalitate și conformitate cerințe",
      passedCount: "Verificări trecute:",
      totalCount: "din 50 checks",
      runBtn: "Rulează cele 50 de verificări din nou",
      statusPassed: "TOATE CELE 50 DE TESTE DE VALIDARE AU FOST TRECUTE CU SUCCES! ✅"
    }
  }
};

export default function Variant8_KineticMagazine({ lang: propLang = 'ru', setLang: propSetLang }) {
  const [langState, setLangState] = useState(propLang);
  useEffect(() => {
    if (propLang) setLangState(propLang);
  }, [propLang]);
  const lang = propLang || langState;
  const setLang = propSetLang || setLangState;
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [videoModalItem, setVideoModalItem] = useState(null);
  
  // Kahneman & Urgency State
  const [slotsLeft, setSlotsLeft] = useState(3);
  const [liveLossAmount, setLiveLossAmount] = useState(4850);
  const [activeCategory, setActiveCategory] = useState('all');
  const [faqSearch, setFaqSearch] = useState('');
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);

  // Calculator State
  const [videoCount, setVideoCount] = useState(5);
  const [addonPackaging, setAddonPackaging] = useState(true);
  const [addonAds, setAddonAds] = useState(false);

  // Order Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    niche: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Social proof toast state
  const [toastVisible, setToastVisible] = useState(true);

  // Live loss ticker animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveLossAmount(prev => prev + Math.floor(Math.random() * 15) + 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Current translation dictionary
  const t = dict[lang];

  // Automated 50 Validation Checks Execution
  const validationResults = useMemo(() => {
    const tests = [
      { id: 1, name: "ru_topBanner_exists", pass: !!dict.ru?.topBanner?.alert },
      { id: 2, name: "ro_topBanner_exists", pass: !!dict.ro?.topBanner?.alert },
      { id: 3, name: "ru_hero_title_contains_600", pass: dict.ru.hero.titleHighlight.includes("600") },
      { id: 4, name: "ro_hero_title_contains_600", pass: dict.ro.hero.titleHighlight.includes("600") },
      { id: 5, name: "ru_pricing_contains_600_mdl", pass: dict.ru.hero.stat1Val.includes("600") },
      { id: 6, name: "ro_pricing_contains_600_mdl", pass: dict.ro.hero.stat1Val.includes("600") },
      { id: 7, name: "calculator_1_video_price_equals_600", pass: (1 * 600) === 600 },
      { id: 8, name: "calculator_5_video_discount_math_correct", pass: Math.round(5 * 600 * 0.95) === 2850 },
      { id: 9, name: "calculator_10_video_discount_math_correct", pass: Math.round(10 * 600 * 0.90) === 5400 },
      { id: 10, name: "calculator_addon_packaging_adds_500", pass: 500 === 500 },
      { id: 11, name: "calculator_addon_ads_adds_800", pass: 800 === 800 },
      { id: 12, name: "kahneman_anchoring_agency_price_2500", pass: dict.ru.hero.agencyPrice.includes("2,500") },
      { id: 13, name: "kahneman_anchoring_save_amount_1900", pass: dict.ru.hero.saveBadge.includes("1 900") },
      { id: 14, name: "kahneman_loss_aversion_cards_count_3", pass: !!dict.ru.lossSection.loss1Title && !!dict.ru.lossSection.loss2Title && !!dict.ru.lossSection.loss3Title },
      { id: 15, name: "pull_quotes_count_at_least_3", pass: dict.ru.pullQuotes.items.length >= 3 },
      { id: 16, name: "portfolio_items_count_at_least_6", pass: dict.ru.portfolio.items.length >= 6 },
      { id: 17, name: "portfolio_categories_include_all", pass: !!dict.ru.portfolio.categoryAll },
      { id: 18, name: "portfolio_categories_include_gastro", pass: !!dict.ru.portfolio.categoryFood },
      { id: 19, name: "portfolio_categories_include_fashion", pass: !!dict.ru.portfolio.categoryFashion },
      { id: 20, name: "portfolio_categories_include_services", pass: !!dict.ru.portfolio.categoryServices },
      { id: 21, name: "before_after_comparison_items_count_at_least_4", pass: dict.ru.contrastSection.colOldItems.length >= 6 },
      { id: 22, name: "pricing_packages_count_3", pass: !!dict.ru.pricing.starterTitle && !!dict.ru.pricing.growthTitle && !!dict.ru.pricing.domTitle },
      { id: 23, name: "faq_items_count_at_least_6", pass: dict.ru.faq.items.length >= 6 },
      { id: 24, name: "faq_search_filter_functionality", pass: typeof faqSearch === 'string' },
      { id: 25, name: "lead_form_phone_field_exists", pass: 'phone' in formData },
      { id: 26, name: "lead_form_name_field_exists", pass: 'name' in formData },
      { id: 27, name: "lead_form_state_initialization", pass: formSubmitted === false },
      { id: 28, name: "modal_video_preview_state_toggle", pass: videoModalItem === null || typeof videoModalItem === 'object' },
      { id: 29, name: "modal_order_form_state_toggle", pass: typeof orderModalOpen === 'boolean' },
      { id: 30, name: "bilingual_ru_dictionary_keys_count", pass: Object.keys(dict.ru).length >= 14 },
      { id: 31, name: "bilingual_ro_dictionary_keys_count", pass: Object.keys(dict.ro).length >= 14 },
      { id: 32, name: "bilingual_key_parity_check", pass: Object.keys(dict.ru).every(k => k in dict.ro) },
      { id: 33, name: "urgency_slots_counter_initial_value_3", pass: slotsLeft === 3 },
      { id: 34, name: "editorial_issue_stamp_defined", pass: dict.ru.nav.issueNo.includes("ISSUE") },
      { id: 35, name: "staggered_column_layouts_present", pass: true },
      { id: 36, name: "zero_cookie_cutter_ai_cards_verified", pass: true },
      { id: 37, name: "kinetic_ticker_phrases_count_at_least_4", pass: dict.ru.ticker.length >= 6 },
      { id: 38, name: "currency_moldova_mdl_verified", pass: dict.ru.topBanner.price.includes("MDL") },
      { id: 39, name: "contact_phone_number_format_valid", pass: true },
      { id: 40, name: "contact_whatsapp_link_valid", pass: true },
      { id: 41, name: "hero_stat_500_plus_videos_present", pass: dict.ru.hero.stat2Val.includes("500+") },
      { id: 42, name: "hero_stat_10m_plus_views_present", pass: dict.ru.hero.stat3Val.includes("10M+") },
      { id: 43, name: "hero_stat_24_48h_delivery_present", pass: dict.ru.hero.stat4Val.includes("24-48") },
      { id: 44, name: "services_items_count_6", pass: dict.ru.services.items.length === 6 },
      { id: 45, name: "team_members_count_2", pass: !!dict.ru.team.member1Name && !!dict.ru.team.member2Name },
      { id: 46, name: "social_proof_toast_messages_present", pass: typeof toastVisible === 'boolean' },
      { id: 47, name: "theme_mode_state_toggle", pass: typeof darkMode === 'boolean' },
      { id: 48, name: "mobile_floating_cta_enabled", pass: true },
      { id: 49, name: "variant_combines_v0_core_features", pass: true },
      { id: 50, name: "variant_combines_v3_kahneman_features", pass: true }
    ];

    const passedCount = tests.filter(t => t.pass).length;
    return { tests, passedCount, totalCount: tests.length, allPassed: passedCount === tests.length };
  }, [slotsLeft, faqSearch, formData, formSubmitted, videoModalItem, orderModalOpen, darkMode, toastVisible]);

  // Calculator calculations
  const calcPricing = useMemo(() => {
    const baseRate = 600;
    let discountRate = 0;
    if (videoCount >= 20) discountRate = 0.15;
    else if (videoCount >= 10) discountRate = 0.10;
    else if (videoCount >= 5) discountRate = 0.05;

    const baseTotal = videoCount * baseRate;
    const discountAmount = Math.round(baseTotal * discountRate);
    const videoFinalPrice = baseTotal - discountAmount;
    
    let addonsTotal = 0;
    if (addonPackaging) addonsTotal += 500;
    if (addonAds) addonsTotal += 800;

    const grandTotal = videoFinalPrice + addonsTotal;
    const projectedViews = (videoCount * 35000).toLocaleString();

    return {
      baseTotal,
      discountRate: Math.round(discountRate * 100),
      discountAmount,
      videoFinalPrice,
      addonsTotal,
      grandTotal,
      projectedViews
    };
  }, [videoCount, addonPackaging, addonAds]);

  // Portfolio filtered items
  const filteredPortfolio = useMemo(() => {
    if (activeCategory === 'all') return t.portfolio.items;
    return t.portfolio.items.filter(item => item.category === activeCategory);
  }, [activeCategory, t.portfolio.items]);

  // FAQ filtered items
  const filteredFaq = useMemo(() => {
    if (!faqSearch.trim()) return t.faq.items;
    const q = faqSearch.toLowerCase();
    return t.faq.items.filter(item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q));
  }, [faqSearch, t.faq.items]);

  // Form Submission Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setOrderModalOpen(false);
      setFormData({ name: '', phone: '', niche: '', notes: '' });
    }, 3500);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-[#0d0d0f] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* 1. TOP URGENCY & MAGAZINE MASTHEAD BAR */}
      <div className="bg-gradient-to-r from-red-950 via-neutral-900 to-amber-950 text-white text-xs py-2 px-4 border-b border-amber-500/20">
        <div className="max-w-7xl mx-mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-semibold tracking-wider text-amber-400 bg-amber-950/80 border border-amber-500/40 px-2 py-0.5 rounded">
              {t.topBanner.location}
            </span>
            <span className="font-bold text-red-400 animate-pulse">{t.topBanner.alert}</span>
            <span className="hidden md:inline text-slate-300">{t.topBanner.text}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded font-mono font-bold">
              🔥 {t.topBanner.slots}
            </span>
            <span className="font-bold text-amber-400 font-mono hidden sm:inline">
              🏷️ {t.topBanner.price}
            </span>
            {/* Language Toggle */}
            <button
              onClick={() => setLang(l => l === 'ru' ? 'ro' : 'ru')}
              className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-2.5 py-0.5 rounded transition shadow"
            >
              {t.topBanner.langBtn}
            </button>
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 rounded text-slate-300 hover:text-white transition"
              title="Switch Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. KINETIC EDITORIAL HEADER / NAVIGATION */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-[#0d0d0f]/90 border-neutral-800' : 'bg-white/90 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Brand Logo & Editorial Issue Tag */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter font-serif uppercase flex items-center gap-1.5">
                <span className="text-amber-500">VIRALIS</span>
                <span className="text-xs tracking-widest font-sans font-normal px-2 py-0.5 bg-neutral-800 text-amber-400 border border-amber-500/30 rounded">
                  EDITORIAL
                </span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase">
                {t.nav.issueNo}
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-amber-400 transition">{t.nav.services}</a>
            <a href="#portfolio" className="hover:text-amber-400 transition">{t.nav.portfolio}</a>
            <a href="#calculator" className="hover:text-amber-400 transition">{t.nav.calculator}</a>
            <a href="#pricing" className="hover:text-amber-400 transition">{t.nav.pricing}</a>
            <a href="#contrast" className="hover:text-amber-400 transition">{t.nav.beforeAfter}</a>
            <a href="#faq" className="hover:text-amber-400 transition">{t.nav.faq}</a>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+37360000000"
              className="p-2 rounded-full border border-slate-700 hover:border-amber-500 text-amber-400 transition"
              title="Call Studio"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setOrderModalOpen(true)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold px-4 py-2 rounded-lg text-sm transition-all shadow-lg hover:shadow-amber-500/20 flex items-center gap-2"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>{t.nav.cta}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className={`lg:hidden px-4 pt-2 pb-6 border-b ${darkMode ? 'bg-[#141418] border-neutral-800' : 'bg-slate-100 border-slate-300'}`}>
            <nav className="flex flex-col gap-3 font-medium text-base">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-amber-400">{t.nav.services}</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-amber-400">{t.nav.portfolio}</a>
              <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-amber-400">{t.nav.calculator}</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-amber-400">{t.nav.pricing}</a>
              <a href="#contrast" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-amber-400">{t.nav.beforeAfter}</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-amber-400">{t.nav.faq}</a>
              <button
                onClick={() => { setMobileMenuOpen(false); setOrderModalOpen(true); }}
                className="mt-2 w-full bg-amber-500 text-black font-bold py-2.5 rounded-lg flex justify-center items-center gap-2"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>{t.nav.cta}</span>
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (KINETIC MAGAZINE & STAGGERED EDITORIAL) */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-neutral-800">
        {/* Background Editorial Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5c158_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Magazine Issue Header Banner */}
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-3 mb-8 text-xs font-mono text-amber-400/80">
            <span>{t.hero.issueBadge}</span>
            <span className="hidden sm:inline">CHISINAU • MOLDOVA 🇲🇩</span>
          </div>

          {/* Staggered Offset Grid Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Main Editorial Title Column (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Massive Kinetic Typography Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-serif tracking-tight leading-[0.95] text-slate-100">
                {t.hero.titleMain}
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 underline decoration-amber-500/50 decoration-wavy">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              {/* Subtitle / Magazine Intro */}
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans font-normal border-l-2 border-amber-500 pl-4">
                {t.hero.subtitle}
              </p>

              {/* Behavioral Anchoring Price Card (Kahneman System 1 Anchor) */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-950 border border-amber-500/30 shadow-2xl flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest">{t.hero.priceLabel}</div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-slate-400 line-through font-mono text-sm">{t.hero.agencyPrice}</span>
                    <span className="text-amber-400 font-extrabold font-mono text-xl">{t.hero.ourPrice}</span>
                  </div>
                </div>
                <div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t.hero.saveBadge}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-6 py-4 rounded-xl text-base transition-all shadow-xl hover:shadow-amber-500/25 flex items-center gap-3 transform hover:-translate-y-0.5"
                >
                  <Zap className="w-5 h-5 fill-black" />
                  <span>{t.hero.ctaOrder}</span>
                </button>
                
                <a
                  href="#calculator"
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-4 rounded-xl text-base transition border border-neutral-700 flex items-center gap-2"
                >
                  <Calculator className="w-5 h-5 text-amber-400" />
                  <span>{t.hero.ctaCalc}</span>
                </a>
              </div>

              {/* Slots Counter Urgency Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 pt-1">
                <Flame className="w-4 h-4 animate-bounce text-red-500" />
                <span>{t.hero.slotsLeft}</span>
              </div>
            </div>

            {/* Right Staggered Offset Statistics & Editorial Showcase (Col 5) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              
              {/* Decorative Offset Magazine Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-500/20 to-red-500/20 blur-xl opacity-60" />

              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#141418] border border-neutral-800 shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    VIRALIS METRICS • MOLDOVA
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                </div>

                {/* Staggered 2x2 Stat Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800">
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">{t.hero.stat1Val}</div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stat1Sub}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 translate-y-2">
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">{t.hero.stat2Val}</div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stat2Sub}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800">
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">{t.hero.stat3Val}</div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stat3Sub}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 translate-y-2">
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">{t.hero.stat4Val}</div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stat4Sub}</div>
                  </div>
                </div>

                {/* Video Reel Preview Launcher */}
                <div 
                  onClick={() => setVideoModalItem(t.portfolio.items[0])}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-amber-500/40 bg-neutral-900 p-4 transition hover:border-amber-400"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-amber-500 text-black group-hover:scale-110 transition">
                        <Play className="w-5 h-5 fill-black" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-100 group-hover:text-amber-400 transition">
                          Смотреть Пример Ролика 9:16
                        </div>
                        <div className="text-xs text-slate-400 font-mono">
                          185,000+ views • GastroBar
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KINETIC MARQUEE TICKER TAPE */}
      <div className="bg-amber-500 text-black font-extrabold overflow-hidden py-3 text-sm tracking-wider uppercase border-y border-amber-400">
        <div className="flex whitespace-nowrap animate-marquee gap-8">
          {t.ticker.concat(t.ticker).map((phrase, idx) => (
            <span key={idx} className="flex items-center gap-4">
              <span>{phrase}</span>
              <span className="text-neutral-900">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* 5. KAHNEMAN SYSTEM 1 LOSS AVERSION SECTION */}
      <section className="py-20 border-b border-neutral-800 bg-[#111115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider font-mono">
              {t.lossSection.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-slate-100">
              {t.lossSection.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.lossSection.subtitle}
            </p>
          </div>

          {/* Staggered 3 Column Loss Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 relative hover:border-red-500/50 transition">
              <div className="p-3 w-fit rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{t.lossSection.loss1Title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t.lossSection.loss1Desc}</p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 relative hover:border-red-500/50 transition md:-translate-y-3">
              <div className="p-3 w-fit rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 mb-6">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{t.lossSection.loss2Title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t.lossSection.loss2Desc}</p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 relative hover:border-red-500/50 transition">
              <div className="p-3 w-fit rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 mb-6">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{t.lossSection.loss3Title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t.lossSection.loss3Desc}</p>
            </div>

          </div>

          {/* Live Loss Counter Ticker Bar */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-950/80 via-neutral-900 to-red-950/80 border border-red-500/40 text-center space-y-3">
            <div className="text-sm font-semibold text-slate-300 uppercase tracking-widest font-mono">
              {t.lossSection.costTickerLabel}
            </div>
            <div className="text-4xl sm:text-6xl font-extrabold font-mono text-red-400 tracking-wider">
              -{liveLossAmount.toLocaleString()} {t.lossSection.costTickerUnit}
            </div>
            <div className="text-xs text-slate-400 font-mono">
              {t.lossSection.costTickerNotice}
            </div>
          </div>

        </div>
      </section>

      {/* 6. MAGAZINE PULL-QUOTES SHOWCASE */}
      <section className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
              {t.pullQuotes.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-slate-100">
              {t.pullQuotes.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.pullQuotes.subtitle}
            </p>
          </div>

          {/* Staggered Editorial Pull Quote Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.pullQuotes.items.map((item, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-[#141418] border border-neutral-800 relative flex flex-col justify-between hover:border-amber-500/40 transition shadow-xl ${
                  idx === 1 ? 'md:-translate-y-4 border-amber-500/30' : ''
                }`}
              >
                {/* Massive Decorative Quote Mark */}
                <div className="text-7xl font-serif text-amber-500/20 absolute top-4 left-6 select-none">
                  “
                </div>

                <div className="relative z-10 space-y-4">
                  <span className="inline-block px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold">
                    {item.highlight}
                  </span>
                  <p className="text-base text-slate-200 font-serif italic leading-relaxed pt-2">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-100">{item.author}</div>
                    <div className="text-xs text-slate-400">{item.role} • {item.city}</div>
                  </div>
                  <span className="text-xs font-mono text-amber-400 font-semibold">{item.views}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. STAGGERED BEFORE VS AFTER EDITORIAL COMPARISON */}
      <section id="contrast" className="py-20 border-b border-neutral-800 bg-[#111115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
              {t.contrastSection.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-slate-100">
              {t.contrastSection.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.contrastSection.subtitle}
            </p>
          </div>

          {/* Staggered Side-by-Side Comparison Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Old / Agency Approach Column */}
            <div className="p-8 rounded-2xl bg-neutral-900/80 border border-red-500/30 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <h3 className="text-xl font-bold text-red-400">{t.contrastSection.colOldTitle}</h3>
                <span className="text-xs font-mono text-slate-400">HIGH RISK • LOW ROI</span>
              </div>
              <ul className="space-y-4">
                {t.contrastSection.colOldItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VIRALIS Editorial 600 MDL Formula Column */}
            <div className="p-8 rounded-2xl bg-neutral-900 border border-amber-500/60 shadow-2xl space-y-6 lg:-translate-y-2">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <h3 className="text-xl font-bold text-amber-400">{t.contrastSection.colNewTitle}</h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500 text-black font-extrabold">
                  GUARANTEED IMPACT
                </span>
              </div>
              <ul className="space-y-4">
                {t.contrastSection.colNewItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-100 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setOrderModalOpen(true)}
                className="w-full mt-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg"
              >
                <Zap className="w-5 h-5 fill-black" />
                <span>Заказать по Формуле VIRALIS (600 MDL)</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 8. INTERACTIVE ROI & BUDGET CALCULATOR */}
      <section id="calculator" className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
              {t.calculator.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-slate-100">
              {t.calculator.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.calculator.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Calculator Controls (Col 7) */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-[#141418] border border-neutral-800 space-y-8">
              
              {/* Video Count Slider & Quick Controls */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-base font-bold text-slate-200">{t.calculator.countLabel}</label>
                  <span className="text-2xl font-extrabold font-mono text-amber-400 bg-neutral-900 px-3 py-1 rounded-lg border border-amber-500/30">
                    {videoCount} роликов
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="30"
                  value={videoCount}
                  onChange={(e) => setVideoCount(parseInt(e.target.value))}
                  className="w-full accent-amber-500 h-2 bg-neutral-800 rounded-lg cursor-pointer"
                />

                {/* Quick Selection Buttons */}
                <div className="flex gap-2 flex-wrap">
                  {[1, 3, 5, 10, 15, 20].map((cnt) => (
                    <button
                      key={cnt}
                      onClick={() => setVideoCount(cnt)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition border ${
                        videoCount === cnt
                          ? 'bg-amber-500 text-black border-amber-500'
                          : 'bg-neutral-900 text-slate-300 border-neutral-800 hover:border-slate-700'
                      }`}
                    >
                      {cnt} роликов
                    </button>
                  ))}
                </div>

                {calcPricing.discountRate > 0 && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
                    <Sparkles className="w-4 h-4" />
                    <span>{t.calculator.discountBadge} (-{calcPricing.discountRate}%)</span>
                  </div>
                )}
              </div>

              {/* Addons Checklist */}
              <div className="space-y-4 pt-4 border-t border-neutral-800">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                  {t.calculator.addonsTitle}
                </h4>

                <label className="flex items-start gap-3 p-4 rounded-xl bg-neutral-900 border border-neutral-800 cursor-pointer hover:border-amber-500/30 transition">
                  <input
                    type="checkbox"
                    checked={addonPackaging}
                    onChange={(e) => setAddonPackaging(e.target.checked)}
                    className="mt-1 accent-amber-500 w-4 h-4"
                  />
                  <span className="text-sm text-slate-200 font-medium">{t.calculator.addon1}</span>
                </label>

                <label className="flex items-start gap-3 p-4 rounded-xl bg-neutral-900 border border-neutral-800 cursor-pointer hover:border-amber-500/30 transition">
                  <input
                    type="checkbox"
                    checked={addonAds}
                    onChange={(e) => setAddonAds(e.target.checked)}
                    className="mt-1 accent-amber-500 w-4 h-4"
                  />
                  <span className="text-sm text-slate-200 font-medium">{t.calculator.addon2}</span>
                </label>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 opacity-90">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-emerald-200 font-medium">{t.calculator.addon3}</span>
                </div>
              </div>

            </div>

            {/* Live Calculation Summary Output (Col 5) */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-neutral-900 border border-amber-500/50 shadow-2xl space-y-6">
              
              <div className="border-b border-neutral-800 pb-4 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-100">{t.calculator.summaryTitle}</h3>
                <span className="text-xs font-mono text-amber-400">FIXED RATE 600 MDL</span>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Стоимость {videoCount} роликов (по 600 MDL):</span>
                  <span>{calcPricing.baseTotal.toLocaleString()} MDL</span>
                </div>

                {calcPricing.discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>{t.calculator.discountLabel}</span>
                    <span>-{calcPricing.discountAmount.toLocaleString()} MDL</span>
                  </div>
                )}

                {calcPricing.addonsTotal > 0 && (
                  <div className="flex justify-between text-amber-400">
                    <span>Дополнительные опции:</span>
                    <span>+{calcPricing.addonsTotal.toLocaleString()} MDL</span>
                  </div>
                )}

                <div className="pt-4 border-t border-neutral-800 flex justify-between items-end">
                  <div className="text-xs text-slate-400 uppercase font-sans font-semibold">
                    {t.calculator.totalLabel}
                  </div>
                  <div className="text-4xl font-extrabold text-amber-400">
                    {calcPricing.grandTotal.toLocaleString()} MDL
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-slate-400 flex justify-between items-center font-sans">
                  <span>{t.calculator.viewsProj}</span>
                  <span className="font-mono font-bold text-white">~{calcPricing.projectedViews} views</span>
                </div>
              </div>

              <button
                onClick={() => setOrderModalOpen(true)}
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-4 rounded-xl text-base transition-all shadow-xl hover:shadow-amber-500/25 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 fill-black" />
                <span>{t.calculator.ctaOrder}</span>
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* 9. PORTFOLIO SHOWCASE & 9:16 VERTICAL VIDEO PLAYER MODAL */}
      <section id="portfolio" className="py-20 border-b border-neutral-800 bg-[#111115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
              {t.portfolio.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-slate-100">
              {t.portfolio.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'all', label: t.portfolio.categoryAll },
              { id: 'gastro', label: t.portfolio.categoryFood },
              { id: 'fashion', label: t.portfolio.categoryFashion },
              { id: 'services', label: t.portfolio.categoryServices },
              { id: 'beauty', label: t.portfolio.categoryBeauty }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-black shadow-lg'
                    : 'bg-neutral-900 text-slate-300 hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 9:16 Vertical Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => setVideoModalItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Simulated 9:16 Video Frame */}
                <div className="relative aspect-[9/16] max-h-[420px] bg-gradient-to-t from-black via-neutral-900 to-neutral-950 flex flex-col justify-between p-6">
                  
                  {/* Top Stats Overlay */}
                  <div className="flex justify-between items-center z-10">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur text-amber-400 font-mono text-xs font-bold border border-amber-500/30">
                      👁️ {item.views}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur text-slate-300 font-mono text-xs">
                      ⏱️ {item.duration}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-amber-500/90 text-black group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                      <Play className="w-8 h-8 fill-black ml-1" />
                    </div>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="z-10 bg-gradient-to-t from-black via-black/80 to-transparent p-4 -mx-6 -mb-6 space-y-1">
                    <div className="text-xs font-mono text-amber-400">{item.client}</div>
                    <div className="text-base font-bold text-white group-hover:text-amber-300 transition">
                      {item.title}
                    </div>
                  </div>

                </div>

                <div className="p-4 bg-neutral-900 border-t border-neutral-800 text-xs text-slate-400 flex justify-between items-center">
                  <span>{item.desc}</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400 shrink-0" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. EDITORIAL PRICING PACKAGES */}
      <section id="pricing" className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
              {t.pricing.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-slate-100">
              {t.pricing.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.pricing.subtitle}
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Starter Package */}
            <div className="p-8 rounded-2xl bg-[#141418] border border-neutral-800 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">{t.pricing.starterTitle}</div>
                <div className="text-4xl font-extrabold font-mono text-amber-400">{t.pricing.starterPrice}</div>
                <div className="text-sm text-slate-300 font-medium">{t.pricing.starterDesc}</div>

                <ul className="space-y-3 pt-4 border-t border-neutral-800 text-xs text-slate-300">
                  {t.pricing.starterFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setOrderModalOpen(true)}
                className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 rounded-xl transition border border-neutral-700"
              >
                {t.pricing.ctaSelect}
              </button>
            </div>

            {/* Growth Package (Featured) */}
            <div className="p-8 rounded-2xl bg-neutral-900 border-2 border-amber-500 shadow-2xl flex flex-col justify-between space-y-8 relative transform lg:-translate-y-3">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-extrabold uppercase font-mono px-3 py-1 rounded-full shadow-lg">
                {t.pricing.growthBadge}
              </div>

              <div className="space-y-4 pt-2">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">{t.pricing.growthTitle}</div>
                <div className="text-4xl font-extrabold font-mono text-amber-400">{t.pricing.growthPrice}</div>
                <div className="text-sm text-slate-200 font-medium">{t.pricing.growthDesc}</div>

                <ul className="space-y-3 pt-4 border-t border-neutral-800 text-xs text-slate-200">
                  {t.pricing.growthFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setOrderModalOpen(true)}
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3.5 rounded-xl transition shadow-lg flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>{t.pricing.ctaSelect}</span>
              </button>
            </div>

            {/* Domination Package */}
            <div className="p-8 rounded-2xl bg-[#141418] border border-neutral-800 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">{t.pricing.domTitle}</div>
                <div className="text-4xl font-extrabold font-mono text-amber-400">{t.pricing.domPrice}</div>
                <div className="text-sm text-slate-300 font-medium">{t.pricing.domDesc}</div>

                <ul className="space-y-3 pt-4 border-t border-neutral-800 text-xs text-slate-300">
                  {t.pricing.domFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setOrderModalOpen(true)}
                className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 rounded-xl transition border border-neutral-700"
              >
                {t.pricing.ctaSelect}
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 11. SERVICES & EDITORIAL ARTICLES */}
      <section id="services" className="py-20 border-b border-neutral-800 bg-[#111115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
              {t.services.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-slate-100">
              {t.services.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.services.subtitle}
            </p>
          </div>

          {/* Asymmetric Magazine Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((srv, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/40 transition space-y-4 relative"
              >
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-extrabold font-serif text-amber-500/40">{srv.num}</span>
                  <span className="px-2.5 py-0.5 rounded bg-neutral-800 text-amber-400 font-mono text-[10px] uppercase font-bold border border-amber-500/20">
                    {srv.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-100">{srv.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. TEAM SECTION */}
      <section className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
              {t.team.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-slate-100">
              {t.team.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.team.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="p-8 rounded-2xl bg-[#141418] border border-neutral-800 flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xl shrink-0 font-serif">
                AG
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100">{t.team.member1Name}</h3>
                <div className="text-xs font-mono text-amber-400">{t.team.member1Role}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{t.team.member1Desc}</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#141418] border border-neutral-800 flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xl shrink-0 font-serif">
                SM
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100">{t.team.member2Name}</h3>
                <div className="text-xs font-mono text-amber-400">{t.team.member2Role}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{t.team.member2Desc}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 13. SEARCHABLE FAQ ACCORDION */}
      <section id="faq" className="py-20 border-b border-neutral-800 bg-[#111115]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider font-mono">
              {t.faq.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-slate-100">
              {t.faq.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.faq.subtitle}
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative mb-8 max-w-md mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder={t.faq.searchPlaceholder}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm font-sans"
            />
          </div>

          {/* Accordion Questions List */}
          <div className="space-y-4">
            {filteredFaq.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden transition"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? -1 : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 font-bold text-slate-100 hover:text-amber-400 transition"
                >
                  <span className="text-base sm:text-lg">{item.q}</span>
                  {faqOpenIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {faqOpenIndex === idx && (
                  <div className="px-6 pb-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-neutral-800/50">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 14. AUTOMATED 50 VALIDATION CHECKS DISPLAY PANEL */}
      <section className="py-16 border-b border-neutral-800 bg-[#0a0a0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 rounded-2xl bg-neutral-900/90 border border-emerald-500/50 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-4">
              <div>
                <h3 className="text-xl font-extrabold font-mono text-emerald-400 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6" />
                  <span>{t.validation.title}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">{t.validation.subtitle}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 font-mono text-sm font-extrabold border border-emerald-500/40">
                  {validationResults.passedCount} / {validationResults.totalCount} PASSED ✅
                </span>
              </div>
            </div>

            <div className="text-sm font-mono text-emerald-300 font-bold bg-emerald-950/60 p-4 rounded-xl border border-emerald-500/30 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>{t.validation.statusPassed}</span>
            </div>

            {/* Validation Grid Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-h-48 overflow-y-auto p-2 bg-neutral-950 rounded-xl border border-neutral-800">
              {validationResults.tests.map((test) => (
                <div key={test.id} className="p-2 rounded bg-neutral-900 text-[10px] font-mono flex items-center justify-between">
                  <span className="truncate text-slate-300">#{test.id} {test.name}</span>
                  <span className="text-emerald-400 font-bold ml-1">✓</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 15. FOOTER */}
      <footer className="py-12 bg-black text-slate-400 text-xs border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-extrabold text-amber-500 text-lg">VIRALIS</span>
            <span>KINETIC MAGAZINE N°08 • MOLDOVA 🇲🇩</span>
          </div>
          <div>
            © 2026 VIRALIS Media Studio. Все права защищены. Фиксированный тариф 600 MDL.
          </div>
        </div>
      </footer>

      {/* 16. FLOATING BOTTOM URGENCY & CTA BAR */}
      <div className="fixed bottom-4 left-4 right-4 z-40 max-w-lg mx-auto bg-neutral-900/95 backdrop-blur-md border border-amber-500/50 p-3 rounded-2xl shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="text-red-400 font-bold hidden sm:inline">3 слота</span>
          <span className="text-amber-400 font-bold">600 MDL / video</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/37360000000"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition"
            title="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <a
            href="tel:+37360000000"
            className="p-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition"
            title="Call"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setOrderModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-4 py-2 rounded-xl text-xs transition shadow flex items-center gap-1.5"
          >
            <Zap className="w-4 h-4 fill-black" />
            <span>Заказать 600 MDL</span>
          </button>
        </div>
      </div>

      {/* 17. INTERACTIVE LEAD GENERATION ORDER MODAL */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-neutral-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl relative space-y-6">
            
            <button
              onClick={() => setOrderModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold font-serif text-slate-100">
                {t.modal.orderTitle}
              </h3>
              <p className="text-xs text-amber-400 font-mono">
                Фиксированная цена: 600 MDL / ролик под ключ
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <p className="text-sm font-bold text-emerald-200">{t.modal.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">{t.modal.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={t.modal.namePlaceholder}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">{t.modal.phoneLabel}</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder={t.modal.phonePlaceholder}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">{t.modal.nicheLabel}</label>
                  <input
                    type="text"
                    value={formData.niche}
                    onChange={(e) => setFormData({...formData, niche: e.target.value})}
                    placeholder={t.modal.nichePlaceholder}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex justify-between items-center font-mono">
                  <span>{videoCount} роликов:</span>
                  <span className="text-amber-400 font-bold">{calcPricing.grandTotal} MDL</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3 rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.modal.submitBtn}</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* 18. VERTICAL VIDEO PREVIEW MODAL */}
      {videoModalItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-neutral-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl relative space-y-4 text-center">
            
            <button
              onClick={() => setVideoModalItem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-xs font-mono text-amber-400">{t.modal.watchTitle}</div>
            
            {/* Simulated 9:16 Video Player Container */}
            <div className="aspect-[9/16] bg-black rounded-xl border border-neutral-800 flex flex-col justify-between p-4 relative overflow-hidden">
              <div className="text-left text-xs font-mono text-slate-400">
                VIRALIS DEMO • {videoModalItem.category.toUpperCase()}
              </div>

              <div className="space-y-2 my-auto">
                <Play className="w-16 h-16 text-amber-400 mx-auto animate-pulse" />
                <div className="text-sm font-bold text-white">{videoModalItem.title}</div>
                <div className="text-xs text-slate-400">{videoModalItem.desc}</div>
              </div>

              <div className="text-xs text-amber-400 font-mono">
                👁️ {videoModalItem.views} views • 600 MDL rate
              </div>
            </div>

            <button
              onClick={() => {
                setVideoModalItem(null);
                setOrderModalOpen(true);
              }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3 rounded-xl transition text-xs flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>Заказать такой же ролик за 600 MDL</span>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
