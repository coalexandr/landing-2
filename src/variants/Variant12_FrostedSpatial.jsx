import React, { useState, useEffect } from 'react';
import {
  Video,
  Sparkles,
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
  Star,
  Moon,
  Sun,
  XCircle,
  Layers,
  ShieldCheck,
  TrendingDown,
  AlertTriangle,
  Eye,
  Globe,
  Sliders,
  Gift,
  DollarSign,
  Film,
  Users,
  HelpCircle,
  CheckSquare
} from 'lucide-react';

// Comprehensive Bilingual Dictionary (RU / RO)
const dict = {
  ru: {
    topBanner: {
      alert: "⚡ КИШИНЁВ & МОЛДОВА:",
      text: "Бронирование съёмок на эту неделю — осталось всего 3 слота!",
      price: "Фиксированная цена: 600 MDL / ролик под ключ",
      btn: "Забронировать 600 MDL"
    },
    nav: {
      brandSub: "Media Studio • Moldovia",
      services: "Услуги",
      psychology: "Психология продаж",
      calculator: "Калькулятор",
      portfolio: "Портфолио",
      packages: "Тарифы",
      whyUs: "Преимущества",
      reviews: "Отзывы",
      team: "Команда",
      faq: "FAQ",
      contacts: "Контакты",
      callUs: "+373 60 000 000",
      orderCta: "Заказать ролик"
    },
    hero: {
      badge: "Spatial Depth & Frosted Glass Edition",
      subtitleBadge: "Видеомаркетинг для бизнеса в Молдове",
      titleMain: "Не теряйте клиентов:",
      titleHighlight: "Вирусные ролики за 600 MDL",
      titleEnd: "которые продают с 1-й секунды",
      description: "80% зрителей пролистывают обычную рекламу. Мы используем триггеры внимания System 1 (Даниэль Канеман) и объемный монтаж, чтобы превратить скролл в реальные записи и чеки.",
      anchorAgency: "Обычное агентство: 2,500 MDL",
      anchorViralis: "VIRALIS Studio: 600 MDL",
      anchorSave: "Экономия 1,900 MDL на каждом видео!",
      ctaOrder: "Заказать видео за 600 MDL",
      ctaCalc: "Рассчитать бюджет и скидку",
      ctaCall: "Позвонить продюсеру",
      stat1Val: "600 MDL",
      stat1Sub: "Фиксированная цена",
      stat2Val: "500+",
      stat2Sub: "Отснятых роликов",
      stat3Val: "10M+",
      stat3Sub: "Просмотров в соцсетях",
      stat4Val: "24-48ч",
      stat4Sub: "Срок сдачи монтажа"
    },
    lossSection: {
      badge: "Поведенческая психология (Канеман)",
      title: "Цена бездействия: Сколько денег вы теряете?",
      subtitle: "Психологический триггер неприятия потерь (Loss Aversion). Отсутствие коротких роликов в 2026 году — это невидимый убыток.",
      card1Title: "Утечка 80% внимания клиентов",
      card1Desc: "Статичные посты в Instagram и Facebook видят лишь 3% подписчиков. Алгоритмы отдают 95% охватов вертикальным видео.",
      card2Title: "Переплата агентствам до 400%",
      card2Desc: "Классические продакшн-студии запрашивают от 2 500 MDL за 1 ролик. Мы даём премиальный формат под ключ за 600 MDL.",
      card3Title: "Переход клиентов к конкурентам",
      card3Desc: "Пока вы сомневаетесь, ваши конкуренты в Кишинёве публикуют по 15 Reels в месяц и забирают лучшую аудиторию.",
      lossTickerTitle: "Ориентировочно упущенный доход вашего бизнеса за 30 дней:",
      lossTickerUnit: "MDL недополученной прибыли",
      lossNote: "* Расчёт основан на среднем чеке и конверсии коротких видео в нишах ритейла, общепита и услуг в Молдове."
    },
    contrastSection: {
      badge: "Сравнительный анализ",
      title: "Обычный телефон vs Вирусная формула VIRALIS",
      subtitle: "Сравните два подхода и оцените глубинную разницу в конверсии",
      oldTitle: "❌ Обычный подход / Телефон",
      old1: "Скучное начало — 85% пролистывают за 2 секунды",
      old2: "Тихий звук с шумами без профессионального микрофона",
      old3: "Медленный монтаж без акцентов и саунд-дизайна",
      old4: "Нет четкого призыва к действию (CTA)",
      old5: "Высокая цена у агентств (от 2 500 MDL)",
      newTitle: "⚡ Формула VIRALIS (600 MDL)",
      new1: "Цепляющий крючок (Hook) в 1-ю секунду по System 1",
      new2: "Идеально чистый студийный звук с петличными микрофонами",
      new3: "Динамичный объемный монтаж, графические акценты и субтитры",
      new4: "Продуманный продающий призыв к заказу/звонку",
      new5: "Фиксированная честная цена 600 MDL за готовое видео"
    },
    services: {
      badge: "Наши направления",
      title: "Полный цикл видеомаркетинга под ключ",
      subtitle: "Берём на себя всю рутину: от идеи и сценария до готового монтажа и рекламы",
      s1Title: "Съёмка & Трендовый Монтаж",
      s1Desc: "Записываем качественное видео на вашей локации или в нашей студии в Кишинёве. Динамичная смена планов каждые 1.5-2 секунды.",
      s2Title: "Упаковка & Визуал Аккаунта",
      s2Desc: "Оформляем профиль Instagram, TikTok и Facebook: понятная шапка, хайлайтсы, обложки и стильная контент-сетка.",
      s3Title: "Разработка Сценариев & Крючков",
      s3Desc: "Создаём цепляющие сценарии на русском и румынском языках, адаптированные под психологию местной аудитории.",
      s4Title: "Настройка Таргета & SMM",
      s4Desc: "Запускаем эффективную таргетированную рекламу Meta (Facebook & Instagram Ads) для максимального потока заявок.",
      s5Title: "Двуязычный Дубляж & Субтитры",
      s5Desc: "Налагаем чистый голос (RU/RO) и добавляем яркие динамичные субтитры для удержания внимания зрителей без звука.",
      s6Title: "Готовый Контент-План на Месяц",
      s6Desc: "Подготавливаем пакет роликов на 30 дней вперед. Больше не нужно думать, что выложить завтра."
    },
    calculator: {
      badge: "Калькулятор бюджета & ROI",
      title: "Рассчитайте точную стоимость роликов",
      subtitle: "Выберите количество видео и получите автоматическую скидку за объём",
      countLabel: "Количество видеороликов:",
      discount5: "Скидка 10% (от 5 роликов)",
      discount10: "Скидка 15% (от 10 роликов)",
      addonsTitle: "Дополнительные опции:",
      addon1: "Полная упаковка аккаунта (Insta/TikTok/FB) (+500 MDL)",
      addon2: "Настройка таргетированной рекламы Ads (+800 MDL)",
      addon3: "Профессиональный дубляж голосом (+300 MDL)",
      freeScript: "Бесплатно: Авторские сценарии и оригиналы съёмок",
      summaryBase: "Стоимость роликов:",
      summaryDiscount: "Ваша экономия:",
      summaryAddons: "Доп. услуги:",
      summaryTotal: "Итоговая сумма:",
      estViews: "Ориентировочные просмотры:",
      costPerView: "Стоимость 1 просмотра:",
      orderBtn: "Заказать проект через WhatsApp",
      callBtn: "Позвонить и обсудить"
    },
    portfolio: {
      badge: "Портфолио проектов",
      title: "Примеры наших роликов в Молдове",
      subtitle: "Посмотрите реальные кейсы с высокими просмотрами и продажами",
      catAll: "Все работы",
      catFood: "Рестораны & Еда",
      catFashion: "Мода & Ритейл",
      catServices: "Услуги & Бизнес",
      catAuto: "Авто & Детейлинг",
      watchBtn: "Смотреть ролик",
      modalViews: "просмотров",
      modalClient: "Клиент:",
      modalNiche: "Ниша:",
      modalResult: "Результат:",
      modalClose: "Закрыть",
      modalOrder: "Хочу такой же ролик!"
    },
    packages: {
      badge: "Прозрачные тарифы",
      title: "Выберите формат сотрудничества",
      subtitle: "Фиксированные пакеты без скрытых платежей и срывов сроков",
      popularBadge: "Самый популярный выбор",
      p1Title: "Тест-Драйв",
      p1Price: "600",
      p1Sub: "1 Ролик под ключ",
      p1f1: "1 Профессиональный ролик",
      p1f2: "Съёмка и динамичный монтаж",
      p1f3: "Саунд-дизайн и субтитры",
      p1f4: "Срок сдачи: 24-48 часов",
      p1Btn: "Заказать 1 ролик",

      p2Title: "Быстрый Старт",
      p2Price: "2 700",
      p2Sub: "5 Роликов (Скидка 300 MDL)",
      p2f1: "5 Профессиональных роликов",
      p2f2: "Сценарии к каждому видео",
      p2f3: "Динамичный объемный монтаж",
      p2f4: "Адаптация Reels/TikTok/Shorts",
      p2Btn: "Заказать 5 роликов",

      p3Title: "Вирусный Запуск",
      p3Price: "5 100",
      p3Sub: "10 Роликов + Бесплатные сценарии",
      p3f1: "10 Вирусных видеороликов",
      p3f2: "Контент-план на 1 месяц",
      p3f3: "Двуязычные субтитры (RU/RO)",
      p3f4: "Приоритетная сдача за 24 часа",
      p3Btn: "Заказать 10 роликов",

      p4Title: "VIP Под Ключ",
      p4Price: "9 900",
      p4Sub: "20 Роликов + SMM & Таргет",
      p4f1: "20 Готовых роликов на месяц",
      p4f2: "Упаковка аккаунта Insta/TikTok",
      p4f3: "Настройка таргета Meta Ads",
      p4f4: "Персональный продюсер 24/7",
      p4Btn: "Заказать VIP Пакет"
    },
    whyUs: {
      badge: "Почему VIRALIS",
      title: "Наши ключевые преимущества",
      subtitle: "Мы сочетаем эстетику кино с четкой математикой продаж",
      r1Title: "Топовое оборудование",
      r1Desc: "Снимаем на профессиональные 4K камеры и топовые iPhone с радиопетличками и бестеневым светом.",
      r2Title: "Скорость 24-48 часов",
      r2Desc: "Передаем готовые смонтированные ролики в кратчайшие сроки без задержек.",
      r3Title: "Знание рынка Молдовы",
      r3Desc: "Понимаем локальный менталитет и создаем контент сразу на русском и румынском языках.",
      r4Title: "Гарантия окупаемости",
      r4Desc: "Каждый ролик создается с ориентацией на целевое действие зрителя и реальные продажи."
    },
    team: {
      badge: "Команда студии",
      title: "Эксперты, создающие ваш контент",
      subtitle: "Профессионалы с многолетним опытом в видеопроизводстве и рекламе",
      m1Name: "Александр",
      m1Role: "Главный Режиссёр & Продюсер",
      m1Desc: "Более 6 лет в сфере видеорекламы. Разработал более 300 вирусных сценариев для бизнеса.",
      m2Name: "Станислав",
      m2Role: "Head of Motion & Монтаж",
      m2Desc: "Мастер динамичного монтажа и визуальных эффектов. Создает видео, удерживающие внимание.",
      m3Name: "Елена",
      m3Role: "SMM & Meta Ads Специалист",
      m3Desc: "Эксперт по таргетированной рекламе и упаковке аккаунтов. Настраивает поток клиентов."
    },
    testimonials: {
      badge: "Отзывы клиентов",
      title: "Что говорят предприниматели Молдовы",
      subtitle: "Реальные истории успеха наших клиентов",
      t1Name: "Виктор Гросу",
      t1Role: "Ресторан Gusto Cafe, Кишинёв",
      t1Text: "Заказали пакет из 10 роликов за 5100 MDL. Уже после первых трех видео бронирования столов выросли на 40%! Качество монтажа на высшем уровне.",
      t2Name: "Елена Сырбу",
      t2Role: "Бутик одежды Luna & Co",
      t2Text: "Ролик за 600 MDL собрал 98 000 просмотров в Instagram Reels! Покупатели приходят прямо с открытым видео на телефоне.",
      t3Name: "Андрей Чебан",
      t3Role: "Сервисный центр SmartHub MD",
      t3Text: "Ребята сами придумывают цепляющие идеи и приезжают со всем оборудованием. Монтаж делают буквально за 24 часа."
    },
    faq: {
      badge: "Ответы на вопросы",
      title: "Часто задаваемые вопросы",
      subtitle: "Всё, что вам нужно знать перед началом съёмок",
      q1: "Что входит в стоимость 600 MDL за ролик?",
      a1: "В 600 MDL входит полный цикл: разработка сценария и крючка, выездная съёмка на вашей локации или в студии, профессиональный монтаж, саунд-дизайн, обработка цвета и динамичные субтитры.",
      q2: "Где проходят съёмки?",
      a2: "Мы выезжаем к вам на объект (ресторан, салон, магазин, офис) в Кишинёве и по Молдове, либо проводим съёмку в оборудованной студии.",
      q3: "Как быстро вы отдаёте готовые видео?",
      a3: "Первые готовые ролики вы получаете в течение 24–48 часов после проведения съёмки.",
      q4: "На каком языке создаются ролики?",
      a4: "Мы делаем ролики как на русском, так и на румынском языке (а также дублируем субтитры на обоих языках).",
      q5: "Нужно ли мне самому писать сценарии?",
      a5: "Нет! Мы полностью берем разработку сценариев и концепций на себя. Вам нужно только утвердить идеи.",
      q6: "Как происходит оплата?",
      a6: "Оплата производится по факту согласования пакета или по этапам. Возможен наличный и безналичный расчёт."
    },
    formSection: {
      badge: "Оставить заявку",
      title: "Забронируйте съёмку за 600 MDL",
      subtitle: "Заполните форму, и мы свяжемся с вами в течение 15 минут для обсуждения концепции",
      nameLabel: "Ваше имя:",
      namePlaceholder: "Иван",
      phoneLabel: "Номер телефона / WhatsApp:",
      phonePlaceholder: "+373 6X XXX XXX",
      businessLabel: "Сфера бизнеса:",
      businessPlaceholder: "Ресторан, Магазин одежды, Услуги...",
      langLabel: "Предпочтительный язык:",
      langRu: "Русский",
      langRo: "Română",
      notesLabel: "Комментарий / Пожелания:",
      notesPlaceholder: "Хочу снять 5 роликов для Instagram...",
      submitBtn: "Отправить заявку за 600 MDL",
      successTitle: "Заявка успешно отправлена!",
      successDesc: "Спасибо! Наш продюсер свяжется с вами в ближайшее время.",
      whatsappDirectBtn: "Написать прямо в WhatsApp"
    },
    footer: {
      brandDesc: "VIRALIS Media Studio — Премиальное видеопроизводство и SMM для бизнеса в Молдове.",
      rights: " Все права защищены.",
      location: "Кишинёв, Молдова",
      phone: "+373 60 000 000",
      email: "info@viralis-media.md"
    }
  },

  ro: {
    topBanner: {
      alert: "⚡ CHIȘINĂU & MOLDOVA:",
      text: "Rezervare filmări pentru această săptămână — au rămas doar 3 locuri!",
      price: "Preț fix: 600 MDL / clip la cheie",
      btn: "Rezervă 600 MDL"
    },
    nav: {
      brandSub: "Media Studio • Moldovia",
      services: "Servicii",
      psychology: "Psihologia vânzărilor",
      calculator: "Calculator",
      portfolio: "Portofoliu",
      packages: "Tarife",
      whyUs: "Avantaje",
      reviews: "Recenzii",
      team: "Echipă",
      faq: "FAQ",
      contacts: "Contacte",
      callUs: "+373 60 000 000",
      orderCta: "Comandă clip"
    },
    hero: {
      badge: "Spatial Depth & Frosted Glass Edition",
      subtitleBadge: "Video Marketing pentru Afaceri în Moldova",
      titleMain: "Nu mai pierde clienți:",
      titleHighlight: "Clipuri virale la 600 MDL",
      titleEnd: "care vând din prima secundă",
      description: "80% din privitori trec peste reclamele obișnuite. Folosim declanșatori de atenție System 1 (Daniel Kahneman) și montaj spațial pentru a transforma scroll-ul în vânzări reale.",
      anchorAgency: "Agenție obișnuită: 2,500 MDL",
      anchorViralis: "VIRALIS Studio: 600 MDL",
      anchorSave: "Economisești 1,900 MDL la fiecare video!",
      ctaOrder: "Comandă video la 600 MDL",
      ctaCalc: "Calculează bugetul și reducerea",
      ctaCall: "Sună producătorul",
      stat1Val: "600 MDL",
      stat1Sub: "Preț fix la cheie",
      stat2Val: "500+",
      stat2Sub: "Clipuri realizate",
      stat3Val: "10M+",
      stat3Sub: "Vizualizări pe rețele",
      stat4Val: "24-48h",
      stat4Sub: "Termen de livrare"
    },
    lossSection: {
      badge: "Psihologie Comportamentală (Kahneman)",
      title: "Costul inacțiunii: Câți bani pierzi chiar acum?",
      subtitle: "Aversiunea față de pierdere (Loss Aversion). Lipsa clipurilor scurte în 2026 reprezintă o pierdere financiară invizibilă.",
      card1Title: "Pierderea a 80% din atenție",
      card1Desc: "Postările statice pe Instagram și Facebook sunt văzute de doar 3% din urmăritori. Algoritmii oferă 95% din acoperire videourilor verticale.",
      card2Title: "Supraplată la agenții de până la 400%",
      card2Desc: "Studiourile clasice cer de la 2 500 MDL pentru 1 clip. Noi oferim format premium la cheie cu doar 600 MDL.",
      card3Title: "Clienții merg la concurență",
      card3Desc: "În timp ce ezitați, concurenții din Chișinău publică câte 15 Reels pe lună și preiau cei mai buni clienți.",
      lossTickerTitle: "Venit aproximativ pierdut în ultimele 30 de zile fără videoclipuri:",
      lossTickerUnit: "MDL profit nerealizat",
      lossNote: "* Calcul bazat pe bonul mediu și conversia clipurilor scurte în domenii ca restaurante, magazine și servicii din Moldova."
    },
    contrastSection: {
      badge: "Analiză Comparativă",
      title: "Filmare simplă cu telefonul vs Formula Virală VIRALIS",
      subtitle: "Compară cele două abordări și observă diferența profundă de conversie",
      oldTitle: "❌ Abordare obișnuită / Telefon",
      old1: "Început plictisitor — 85% trec mai departe în 2 secunde",
      old2: "Sunet încet cu zgomot, fără microfon profesional",
      old3: "Montaj lent fără accentualizare vizuală și sound-design",
      old4: "Fără un îndemn clar la acțiune (CTA)",
      old5: "Prețuri mari la agenții (de la 2 500 MDL)",
      newTitle: "⚡ Formula VIRALIS (600 MDL)",
      new1: "Cârlig (Hook) captivant din prima secundă conform System 1",
      new2: "Sunet de studio impecabil cu microfoane lavalieră",
      new3: "Montaj dinamic spațial, grafică accentuată și subtitrări",
      new4: "Indemn de vânzare bine gândit pentru comenzi/apeluri",
      new5: "Preț fix și cinstit de 600 MDL per video finisat"
    },
    services: {
      badge: "Direcțiile Noastre",
      title: "Ciclu complet de Video Marketing la cheie",
      subtitle: "Ne ocupăm de întreaga rutină: de la idee și scenariu până la montaj final și promovare",
      s1Title: "Filmare & Montaj Dinamic",
      s1Desc: "Filmăm la locația ta sau în studioul nostru din Chișinău. Schimbare dinamică de cadre la fiecare 1.5-2 secunde.",
      s2Title: "Ambalare & Vizual Cont",
      s2Desc: "Configurăm și stilizăm paginile de Instagram, TikTok și Facebook: descriere clară, highlights, coperti și grilă stilată.",
      s3Title: "Scenarii & Cârlige Captivante",
      s3Desc: "Creăm scenarii atractive în română și rusă, adaptate psihologiei publicului local din Moldova.",
      s4Title: "Configurare Reclame Meta & SMM",
      s4Desc: "Lansăm campanii de reclame targetate (Facebook & Instagram Ads) pentru un flux constant de clienți.",
      s5Title: "Dublaj Bilingv & Subtitrări",
      s5Desc: "Voce curată (RO/RU) și subtitrări dinamice colorate pentru a menține atenția privitorilor fără sunet.",
      s6Title: "Plan de Conținut pe o Lună",
      s6Desc: "Pregătim un pachet de clipuri pentru 30 de zile în avans. Nu mai trebuie să te gândești ce să postezi mâine."
    },
    calculator: {
      badge: "Calculator Buget & ROI",
      title: "Calculează costul exact al clipurilor",
      subtitle: "Alege numărul de videoclipuri și primești reduceri automate pentru volum",
      countLabel: "Numărul de videoclipuri:",
      discount5: "Reducere 10% (de la 5 clipuri)",
      discount10: "Reducere 15% (de la 10 clipuri)",
      addonsTitle: "Opțiuni suplimentare:",
      addon1: "Ambalare completă cont (Insta/TikTok/FB) (+500 MDL)",
      addon2: "Configurare reclame targetate Meta Ads (+800 MDL)",
      addon3: "Dublaj vocal profesional (+300 MDL)",
      freeScript: "Gratuit: Scenarii de autor și fișiere brute",
      summaryBase: "Cost videoclipuri:",
      summaryDiscount: "Economia ta:",
      summaryAddons: "Servicii suplimentare:",
      summaryTotal: "Suma totală:",
      estViews: "Vizualizări estimate:",
      costPerView: "Cost per 1 vizualizare:",
      orderBtn: "Comandă proiectul prin WhatsApp",
      callBtn: "Sună pentru detalii"
    },
    portfolio: {
      badge: "Portofoliu Proiecte",
      title: "Exemple de clipuri realizate în Moldova",
      subtitle: "Vezi cazuri reale cu vizualizări mari și vânzări excelente",
      catAll: "Toate lucrările",
      catFood: "Restaurante & Bucătărie",
      catFashion: "Modă & Retail",
      catServices: "Servicii & Business",
      catAuto: "Auto & Detailing",
      watchBtn: "Vezi clipul",
      modalViews: "vizualizări",
      modalClient: "Client:",
      modalNiche: "Domeniu:",
      modalResult: "Rezultat:",
      modalClose: "Închide",
      modalOrder: "Vreau un astfel de video!"
    },
    packages: {
      badge: "Tarife Transparente",
      title: "Alege formatul potrivit de colaborare",
      subtitle: "Pachete fixe fără taxe ascunse și fără întârzieri",
      popularBadge: "Cea mai populară alegere",
      p1Title: "Test-Drive",
      p1Price: "600",
      p1Sub: "1 Clip la cheie",
      p1f1: "1 Clip video profesional",
      p1f2: "Filmare și montaj dinamic",
      p1f3: "Sound-design și subtitrări",
      p1f4: "Termen livrare: 24-48 ore",
      p1Btn: "Comandă 1 clip",

      p2Title: "Start Rapid",
      p2Price: "2 700",
      p2Sub: "5 Clipuri (Economisești 300 MDL)",
      p2f1: "5 Clipuri video profesionale",
      p2f2: "Scenariu pentru fiecare video",
      p2f3: "Montaj dinamic spațial",
      p2f4: "Adaptare Reels/TikTok/Shorts",
      p2Btn: "Comandă 5 clipuri",

      p3Title: "Lansare Virală",
      p3Price: "5 100",
      p3Sub: "10 Clipuri + Scenarii Gratuite",
      p3f1: "10 Clipuri video virale",
      p3f2: "Plan de conținut pe 1 lună",
      p3f3: "Subtitrări bilingve (RO/RU)",
      p3f4: "Livrare prioritară în 24h",
      p3Btn: "Comandă 10 clipuri",

      p4Title: "VIP La Cheie",
      p4Price: "9 900",
      p4Sub: "20 Clipuri + SMM & Target",
      p4f1: "20 Clipuri gata pentru o lună",
      p4f2: "Ambalare cont Insta/TikTok",
      p4f3: "Configurare reclame Meta Ads",
      p4f4: "Producător personal 24/7",
      p4Btn: "Comandă Pachet VIP"
    },
    whyUs: {
      badge: "De ce VIRALIS",
      title: "Avantajele noastre cheie",
      subtitle: "Combinăm estetica cinematografică cu matematica exactă a vânzărilor",
      r1Title: "Echipament de Top",
      r1Desc: "Filmăm cu camere profesionale 4K și iPhone-uri de ultimă generație cu microfoane fără fir.",
      r2Title: "Rapiditate 24-48 ore",
      r2Desc: "Livrăm videoclipurile finisate și montate în cel mai scurt timp, fără întârzieri.",
      r3Title: "Cunoașterea pieței din Moldova",
      r3Desc: "Înțelegem mentalitatea locală și creăm conținut direct în ambele limbi: română și rusă.",
      r4Title: "Garanția rentabilității",
      r4Desc: "Fiecare video este creat cu accent pe acțiunea dorită și creșterea vânzărilor."
    },
    team: {
      badge: "Echipa Studioului",
      title: "Experții care îți creează conținutul",
      subtitle: "Profesioniști cu experiență bogată în producție video și publicitate",
      m1Name: "Alexander",
      m1Role: "Regizor Principal & Producător",
      m1Desc: "Peste 6 ani în publicitate video. A creat peste 300 de scenarii virale pentru afaceri.",
      m2Name: "Stanislav",
      m2Role: "Head of Motion & Montaj",
      m2Desc: "Maestru în montaj dinamic și efecte vizuale. Creează clipuri care captează atenția.",
      m3Name: "Elena",
      m3Role: "SMR & Meta Ads Specialist",
      m3Desc: "Expertă în reclame targetate și ambalare conturi. Asigură un flux continuu de clienți."
    },
    testimonials: {
      badge: "Recenzii Clienți",
      title: "Ce spun antreprenorii din Moldova",
      subtitle: "Povești reale de succes ale clienților noștri",
      t1Name: "Victor Grosu",
      t1Role: "Restaurant Gusto Cafe, Chișinău",
      t1Text: "Am comandat pachetul de 10 clipuri pentru 5100 MDL. După primele trei clipuri rezervările de mese au crescut cu 40%! Calitatea montajului este excelentă.",
      t2Name: "Elena Sîrbu",
      t2Role: "Boutique de haine Luna & Co",
      t2Text: "Un clip de 600 MDL a strâns 98 000 de vizualizări pe Instagram Reels! Cumpărătorii vin direct cu videoclipul deschis pe telefon.",
      t3Name: "Andrei Cheban",
      t3Role: "Centru de servicii SmartHub MD",
      t3Text: "Băieții vin singuri cu idei captivante și aduc tot echipamentul necesar. Montajul este gata practic în 24 de ore."
    },
    faq: {
      badge: "Răspunsuri la Întrebări",
      title: "Întrebări Frecvente",
      subtitle: "Tot ce trebuie să știi înainte de începerea filmărilor",
      q1: "Ce este inclus în prețul de 600 MDL per clip?",
      a1: "În 600 MDL este inclus ciclul complet: scenariul și cârligul, filmarea la locație sau studio, montajul profesional, sound-design-ul și subtitrările dinamice.",
      q2: "Unde au loc filmările?",
      a2: "Ne deplasăm la locația ta (restaurant, salon, magazin, birou) în Chișinău și prin Moldova, sau filmăm în studioul nostru echipat.",
      q3: "Cât de repede livrați videoclipurile?",
      a3: "Primele clipuri finisate le primești în termen de 24–48 de ore după filmare.",
      q4: "În ce limbă sunt realizate videoclipurile?",
      a4: "Realizăm clipuri atât în limba română, cât și în rusă (cu subtitrări bilingve incluse).",
      q5: "Trebuie să scriu eu scenariile?",
      a5: "Nu! Ne ocupăm 100% de conceperea ideilor și scenariilor. Tu trebuie doar să le aprobi.",
      q6: "Cum se efectuează plata?",
      a6: "Plata se face la confirmarea pachetului sau în etape. Este posibilă achitarea cash sau prin transfer."
    },
    formSection: {
      badge: "Trimite Solicitare",
      title: "Rezervă filmarea la 600 MDL",
      subtitle: "Completează formularul și te contactăm în 15 minute pentru a discuta ideile",
      nameLabel: "Numele tău:",
      namePlaceholder: "Ion",
      phoneLabel: "Număr de telefon / WhatsApp:",
      phonePlaceholder: "+373 6X XXX XXX",
      businessLabel: "Domeniul afacerii:",
      businessPlaceholder: "Restaurant, Magazin de haine, Servicii...",
      langLabel: "Limba preferată:",
      langRu: "Русский",
      langRo: "Română",
      notesLabel: "Comentarii / Dorințe:",
      notesPlaceholder: "Vreau să filmez 5 clipuri pentru Instagram...",
      submitBtn: "Trimite solicitarea la 600 MDL",
      successTitle: "Solicitarea a fost trimisă cu succes!",
      successDesc: "Mulțumim! Producătorul nostru te va contacta în cel mai scurt timp.",
      whatsappDirectBtn: "Scrie direct pe WhatsApp"
    },
    footer: {
      brandDesc: "VIRALIS Media Studio — Producție video premium și SMM pentru afaceri în Moldova.",
      rights: " Toate drepturile rezervate.",
      location: "Chișinău, Moldova",
      phone: "+373 60 000 000",
      email: "info@viralis-media.md"
    }
  }
};

// Sample Portfolio Data with Videos
const portfolioItems = [
  {
    id: 1,
    category: 'food',
    title: { ru: 'Gusto Cafe & Bistro Кишинёв', ro: 'Gusto Cafe & Bistro Chișinău' },
    views: '142.5K',
    niche: { ru: 'Рестораны & Еда', ro: 'Restaurante & Bucătărie' },
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    result: { ru: '+40% броней столов за 2 недели', ro: '+40% rezervări mese în 2 săptămâni' }
  },
  {
    id: 2,
    category: 'fashion',
    title: { ru: 'Boutique Luna & Co — Коллекция', ro: 'Boutique Luna & Co — Colecție' },
    views: '98.2K',
    niche: { ru: 'Мода & Ритейл', ro: 'Modă & Retail' },
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    result: { ru: '85+ прямо в директ за 3 дня', ro: '85+ mesaje directe în 3 zile' }
  },
  {
    id: 3,
    category: 'auto',
    title: { ru: 'AutoCraft MD — Детейлинг', ro: 'AutoCraft MD — Detailing' },
    views: '310.8K',
    niche: { ru: 'Авто & Детейлинг', ro: 'Auto & Detailing' },
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80',
    result: { ru: 'Вирусный охват по всей Молдове', ro: 'Acoperire virală în toată Moldova' }
  },
  {
    id: 4,
    category: 'services',
    title: { ru: 'SmartHub MD — Сервисный Центр', ro: 'SmartHub MD — Centru Servicii' },
    views: '215.4K',
    niche: { ru: 'Услуги & Техника', ro: 'Servicii & Tehnica' },
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    result: { ru: 'Полная запись на ремонт на месяц', ro: 'Programări pline pentru o lună' }
  },
  {
    id: 5,
    category: 'services',
    title: { ru: 'SmileArt Dental Chisinau', ro: 'SmileArt Dental Chișinău' },
    views: '178.9K',
    niche: { ru: 'Стоматология & Медицина', ro: 'Stomatologie & Medicină' },
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    result: { ru: '12 новых пациентов в первый же день', ro: '12 pacienți noi în prima zi' }
  },
  {
    id: 6,
    category: 'fashion',
    title: { ru: 'EcoHome — Мебельный Шоурум', ro: 'EcoHome — Showroom Mobilă' },
    views: '84.3K',
    niche: { ru: 'Интерьер & Ритейл', ro: 'Interior & Retail' },
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    result: { ru: 'Продажи гарнитуров на +25%', ro: 'Vânzări de mobilă cu +25%' }
  }
];

export default function Variant12_FrostedSpatial({ lang: propLang = 'ru', setLang: propSetLang }) {
  const [langState, setLangState] = useState(propLang);
  useEffect(() => {
    if (propLang) setLangState(propLang);
  }, [propLang]);
  const lang = propLang || langState;
  const setLang = propSetLang || setLangState;
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calculator State
  const [videoCount, setVideoCount] = useState(5);
  const [addonPackage, setAddonPackage] = useState(false);
  const [addonAds, setAddonAds] = useState(false);
  const [addonVoiceover, setAddonVoiceover] = useState(false);

  // Portfolio Filter & Modal State
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Lead Form State
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Behavioral Science Loss Days
  const [lossDays, setLossDays] = useState(30);

  const t = dict[lang];

  // Price Calculation Logic (Base 600 MDL / video)
  const basePrice = 600;
  let discountRate = 0;
  if (videoCount >= 10) discountRate = 0.15;
  else if (videoCount >= 5) discountRate = 0.10;

  const rawBaseTotal = videoCount * basePrice;
  const discountedBaseTotal = Math.round(rawBaseTotal * (1 - discountRate));
  const totalSaved = rawBaseTotal - discountedBaseTotal;

  const addonsTotal = (addonPackage ? 500 : 0) + (addonAds ? 800 : 0) + (addonVoiceover ? 300 : 0);
  const finalTotalPrice = discountedBaseTotal + addonsTotal;

  const estViews = videoCount * 22000;
  const costPerView = (finalTotalPrice / estViews).toFixed(3);

  // Loss Aversion Math
  const estimatedDailyLoss = 450; // MDL estimated lost daily revenue without video marketing
  const totalCalculatedLoss = lossDays * estimatedDailyLoss;

  // WhatsApp Link Generator
  const getWhatsAppLink = (customMsg) => {
    const text = encodeURIComponent(
      customMsg ||
        (lang === 'ru'
          ? `Здравствуйте! Хочу заказать ${videoCount} роликов за ${finalTotalPrice} MDL. Пакет: ${selectedPackage || 'Индивидуальный'}. Мой телефон: ${formData.phone || ''}`
          : `Bună ziua! Doresc să comand ${videoCount} clipuri la prețul de ${finalTotalPrice} MDL. Pachet: ${selectedPackage || 'Individual'}. Telefonul meu: ${formData.phone || ''}`)
    );
    return `https://wa.me/37360000000?text=${text}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const openOrderWithPackage = (pkgTitle) => {
    setSelectedPackage(pkgTitle);
    setLeadModalOpen(true);
    setFormSubmitted(false);
  };

  const filteredPortfolio = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className={`v12-spatial-wrapper ${theme === 'dark' ? 'v12-theme-dark' : 'v12-theme-light'}`}>
      {/* Embedded CSS for Frosted Spatial & Depth System */}
      <style>{`
        .v12-spatial-wrapper {
          background-color: var(--v12-bg);
          color: var(--v12-text);
          font-family: 'Outfit', 'Montserrat', -apple-system, sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .v12-theme-dark {
          --v12-bg: #07090e;
          --v12-text: #f8fafc;
          --v12-text-muted: #94a3b8;
          --v12-glass-bg: rgba(14, 18, 28, 0.65);
          --v12-glass-bg-hover: rgba(22, 29, 44, 0.82);
          --v12-glass-border: rgba(255, 255, 255, 0.08);
          --v12-glass-border-hover: rgba(255, 255, 255, 0.18);
          --v12-glass-highlight: rgba(255, 255, 255, 0.04);
          --v12-accent: #38bdf8;
          --v12-accent-gold: #f59e0b;
          --v12-shadow-spatial: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          --v12-card-bg: rgba(16, 21, 33, 0.55);
          --v12-header-bg: rgba(7, 9, 14, 0.78);
        }

        .v12-theme-light {
          --v12-bg: #f0f4f8;
          --v12-text: #0f172a;
          --v12-text-muted: #475569;
          --v12-glass-bg: rgba(255, 255, 255, 0.75);
          --v12-glass-bg-hover: rgba(255, 255, 255, 0.92);
          --v12-glass-border: rgba(15, 23, 42, 0.08);
          --v12-glass-border-hover: rgba(15, 23, 42, 0.18);
          --v12-glass-highlight: rgba(255, 255, 255, 0.7);
          --v12-accent: #0284c7;
          --v12-accent-gold: #d97706;
          --v12-shadow-spatial: 0 20px 40px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8);
          --v12-card-bg: rgba(255, 255, 255, 0.7);
          --v12-header-bg: rgba(240, 244, 248, 0.82);
        }

        /* Ambient Background Spatial Light Orbs */
        .v12-ambient-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .v12-orb-1 {
          position: absolute;
          top: -150px;
          left: 15%;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(0, 0, 0, 0) 70%);
          filter: blur(60px);
        }

        .v12-orb-2 {
          position: absolute;
          top: 800px;
          right: 5%;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, rgba(0, 0, 0, 0) 70%);
          filter: blur(80px);
        }

        .v12-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* Frosted Glass Base Utility */
        .v12-frosted-card {
          background: var(--v12-glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--v12-glass-border);
          border-radius: 24px;
          box-shadow: var(--v12-shadow-spatial);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .v12-frosted-card:hover {
          background: var(--v12-glass-bg-hover);
          border-color: var(--v12-glass-border-hover);
          transform: translateY(-4px);
        }

        .v12-frosted-pill {
          background: var(--v12-glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--v12-glass-border);
          border-radius: 50px;
          padding: 6px 16px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Top Ticker */
        .v12-top-ticker {
          background: rgba(56, 189, 248, 0.08);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--v12-glass-border);
          padding: 10px 0;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .v12-top-ticker-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Navigation Header */
        .v12-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--v12-header-bg);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--v12-glass-border);
          padding: 16px 0;
        }

        .v12-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .v12-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--v12-text);
        }

        .v12-logo-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--v12-accent) 0%, rgba(2, 132, 199, 0.8) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(56, 189, 248, 0.25);
        }

        .v12-nav-links {
          display: flex;
          align-items: center;
          gap: 22px;
          list-style: none;
        }

        .v12-nav-link {
          color: var(--v12-text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .v12-nav-link:hover {
          color: var(--v12-accent);
        }

        /* Buttons */
        .v12-btn-primary {
          background: linear-gradient(135deg, var(--v12-accent) 0%, #0284c7 100%);
          color: #ffffff;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 10px 25px rgba(56, 189, 248, 0.25);
          text-decoration: none;
          font-size: 0.92rem;
        }

        .v12-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(56, 189, 248, 0.35);
          opacity: 0.96;
        }

        .v12-btn-secondary {
          background: var(--v12-glass-bg);
          backdrop-filter: blur(16px);
          border: 1px solid var(--v12-glass-border);
          color: var(--v12-text);
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          font-size: 0.92rem;
        }

        .v12-btn-secondary:hover {
          background: var(--v12-glass-bg-hover);
          border-color: var(--v12-glass-border-hover);
          transform: translateY(-2px);
        }

        /* Hero Section */
        .v12-hero-section {
          padding: 80px 0 60px 0;
        }

        .v12-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }

        .v12-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: var(--v12-accent);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .v12-hero-title {
          font-size: 3.2rem;
          line-height: 1.15;
          font-weight: 900;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }

        .v12-hero-highlight {
          color: var(--v12-accent);
          display: block;
        }

        .v12-hero-desc {
          font-size: 1.1rem;
          color: var(--v12-text-muted);
          line-height: 1.7;
          margin-bottom: 30px;
        }

        /* Anchoring Price Card */
        .v12-anchor-card {
          padding: 24px;
          border-radius: 20px;
          background: var(--v12-glass-bg);
          border: 1px solid var(--v12-glass-border);
          margin-bottom: 32px;
        }

        .v12-anchor-comparison {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 12px;
        }

        /* Stats Grid */
        .v12-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 50px;
        }

        .v12-stat-card {
          padding: 20px;
          text-align: center;
        }

        .v12-stat-val {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--v12-accent);
          margin-bottom: 4px;
        }

        .v12-stat-sub {
          font-size: 0.82rem;
          color: var(--v12-text-muted);
          font-weight: 500;
        }

        /* Section Layouts */
        .v12-section {
          padding: 80px 0;
        }

        .v12-section-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 50px auto;
        }

        .v12-section-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: var(--v12-accent-gold);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .v12-section-title {
          font-size: 2.4rem;
          font-weight: 800;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }

        .v12-section-sub {
          font-size: 1.05rem;
          color: var(--v12-text-muted);
        }

        /* Loss Aversion Grid */
        .v12-loss-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .v12-loss-card {
          padding: 28px;
        }

        .v12-loss-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(239, 68, 68, 0.12);
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        /* Contrast Table Grid */
        .v12-contrast-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .v12-contrast-col {
          padding: 32px;
        }

        .v12-contrast-col.new-formula {
          border-color: rgba(56, 189, 248, 0.3);
          background: rgba(56, 189, 248, 0.04);
        }

        .v12-contrast-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 20px;
        }

        .v12-contrast-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
        }

        /* Services Grid */
        .v12-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .v12-service-card {
          padding: 28px;
        }

        .v12-service-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(56, 189, 248, 0.12);
          color: var(--v12-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        /* Calculator Panel */
        .v12-calc-panel {
          padding: 36px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
        }

        .v12-slider-container {
          margin: 24px 0;
        }

        .v12-slider {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.15);
          outline: none;
          cursor: pointer;
          accent-color: var(--v12-accent);
        }

        .v12-calc-addons {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 24px;
        }

        .v12-addon-checkbox {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--v12-glass-border);
          cursor: pointer;
          user-select: none;
          transition: background 0.2s ease;
        }

        .v12-addon-checkbox:hover {
          background: rgba(255, 255, 255, 0.07);
        }

        .v12-calc-summary-box {
          padding: 28px;
          border-radius: 20px;
          background: rgba(56, 189, 248, 0.05);
          border: 1px solid rgba(56, 189, 248, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Portfolio Grid */
        .v12-portfolio-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .v12-tab-btn {
          background: var(--v12-glass-bg);
          border: 1px solid var(--v12-glass-border);
          color: var(--v12-text-muted);
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .v12-tab-btn.active {
          background: var(--v12-accent);
          color: #ffffff;
          border-color: var(--v12-accent);
          box-shadow: 0 6px 18px rgba(56, 189, 248, 0.3);
        }

        .v12-portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .v12-portfolio-card {
          border-radius: 20px;
          overflow: hidden;
        }

        .v12-portfolio-thumb {
          position: relative;
          aspect-ratio: 9/16;
          max-height: 420px;
          overflow: hidden;
          background: #000;
        }

        .v12-portfolio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .v12-portfolio-card:hover .v12-portfolio-img {
          transform: scale(1.05);
        }

        .v12-portfolio-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 60%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
        }

        .v12-play-btn {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          border: 1px solid rgba(255, 255, 255, 0.4);
          transition: transform 0.2s ease;
          cursor: pointer;
        }

        .v12-portfolio-card:hover .v12-play-btn {
          transform: scale(1.15);
          background: var(--v12-accent);
        }

        /* Package Cards Grid */
        .v12-packages-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .v12-pkg-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .v12-pkg-card.popular {
          border-color: var(--v12-accent);
          background: rgba(56, 189, 248, 0.06);
          transform: scale(1.03);
          z-index: 2;
        }

        .v12-pkg-price {
          font-size: 2.6rem;
          font-weight: 900;
          color: var(--v12-accent);
          line-height: 1;
          margin: 16px 0;
        }

        .v12-pkg-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 20px 0;
          font-size: 0.88rem;
        }

        /* FAQ Accordion */
        .v12-faq-container {
          max-width: 840px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .v12-faq-item {
          padding: 20px 24px;
          cursor: pointer;
        }

        .v12-faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 700;
          font-size: 1.05rem;
        }

        .v12-faq-answer {
          margin-top: 14px;
          color: var(--v12-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Modal Backdrop */
        .v12-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .v12-modal-content {
          max-width: 600px;
          width: 100%;
          padding: 36px;
          position: relative;
        }

        .v12-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: var(--v12-text-muted);
          cursor: pointer;
        }

        /* Form Controls */
        .v12-input-group {
          margin-bottom: 18px;
        }

        .v12-label {
          display: block;
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .v12-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--v12-glass-border);
          color: var(--v12-text);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .v12-input:focus {
          border-color: var(--v12-accent);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .v12-hero-grid, .v12-calc-panel {
            grid-template-columns: 1fr;
          }
          .v12-packages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .v12-stats-grid, .v12-services-grid, .v12-portfolio-grid, .v12-loss-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .v12-nav-links {
            display: none;
          }
          .v12-hero-title {
            font-size: 2.2rem;
          }
          .v12-packages-grid, .v12-stats-grid, .v12-services-grid, .v12-portfolio-grid, .v12-loss-grid, .v12-contrast-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Ambient Radial Lighting */}
      <div className="v12-ambient-bg">
        <div className="v12-orb-1" />
        <div className="v12-orb-2" />
      </div>

      {/* Top Urgency Ticker Banner */}
      <div className="v12-top-ticker">
        <div className="v12-container">
          <div className="v12-top-ticker-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="v12-frosted-pill" style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}>
                <Flame size={14} /> {t.topBanner.alert}
              </span>
              <span>{t.topBanner.text}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: 'var(--v12-accent)', fontWeight: 700 }}>{t.topBanner.price}</span>
              <button
                className="v12-btn-primary"
                style={{ padding: '6px 14px', fontSize: '0.8rem', minHeight: 'auto' }}
                onClick={() => openOrderWithPackage('Тест-Драйв (600 MDL)')}
              >
                {t.topBanner.btn}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="v12-header">
        <div className="v12-container">
          <div className="v12-header-inner">
            <a href="#hero" className="v12-logo">
              <div className="v12-logo-icon">
                <Video size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1 }}>
                  VIRALIS
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--v12-text-muted)', fontWeight: 600 }}>
                  {t.nav.brandSub}
                </div>
              </div>
            </a>

            <ul className="v12-nav-links">
              <li><a href="#services" className="v12-nav-link">{t.nav.services}</a></li>
              <li><a href="#psychology" className="v12-nav-link">{t.nav.psychology}</a></li>
              <li><a href="#calculator" className="v12-nav-link">{t.nav.calculator}</a></li>
              <li><a href="#portfolio" className="v12-nav-link">{t.nav.portfolio}</a></li>
              <li><a href="#packages" className="v12-nav-link">{t.nav.packages}</a></li>
              <li><a href="#whyus" className="v12-nav-link">{t.nav.whyUs}</a></li>
              <li><a href="#faq" className="v12-nav-link">{t.nav.faq}</a></li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Language Switcher Toggle */}
              <div className="v12-frosted-pill" style={{ padding: '3px' }}>
                <button
                  style={{
                    background: lang === 'ru' ? 'var(--v12-accent)' : 'transparent',
                    color: lang === 'ru' ? '#fff' : 'var(--v12-text-muted)',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '4px 10px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                  onClick={() => setLang('ru')}
                >
                  RU 🇷🇺
                </button>
                <button
                  style={{
                    background: lang === 'ro' ? 'var(--v12-accent)' : 'transparent',
                    color: lang === 'ro' ? '#fff' : 'var(--v12-text-muted)',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '4px 10px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                  onClick={() => setLang('ro')}
                >
                  RO 🇲🇩
                </button>
              </div>

              {/* Theme Switcher Toggle */}
              <button
                className="v12-frosted-pill"
                style={{ padding: '8px', cursor: 'pointer' }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                title="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={16} color="#f59e0b" /> : <Moon size={16} color="#38bdf8" />}
              </button>

              {/* Quick CTA */}
              <button className="v12-btn-primary" onClick={() => openOrderWithPackage('Консультация')}>
                <Send size={16} />
                <span>{t.nav.orderCta}</span>
              </button>

              <button
                style={{ background: 'none', border: 'none', color: 'var(--v12-text)', cursor: 'pointer', display: 'none' }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="v12-hero-section">
        <div className="v12-container">
          <div className="v12-hero-grid">
            <div>
              <div className="v12-hero-badge">
                <Sparkles size={16} />
                <span>{t.hero.badge}</span>
              </div>
              <h1 className="v12-hero-title">
                {t.hero.titleMain}
                <span className="v12-hero-highlight">{t.hero.titleHighlight}</span>
                <span>{t.hero.titleEnd}</span>
              </h1>
              <p className="v12-hero-desc">{t.hero.description}</p>

              {/* Anchoring Card (Variant 0 + Variant 3) */}
              <div className="v12-anchor-card">
                <div className="v12-anchor-comparison">
                  <div>
                    <span style={{ textDecoration: 'line-through', color: 'var(--v12-text-muted)', fontSize: '0.9rem' }}>
                      {t.hero.anchorAgency}
                    </span>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--v12-accent)' }}>
                      {t.hero.anchorViralis}
                    </div>
                  </div>
                  <span className="v12-frosted-pill" style={{ color: '#10b981', borderColor: 'rgba(16,185,129,0.3)' }}>
                    <ShieldCheck size={16} /> {t.hero.anchorSave}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button className="v12-btn-primary" onClick={() => openOrderWithPackage('Hero Order 600 MDL')}>
                  <Zap size={18} />
                  <span>{t.hero.ctaOrder}</span>
                </button>
                <a href="#calculator" className="v12-btn-secondary">
                  <Calculator size={18} />
                  <span>{t.hero.ctaCalc}</span>
                </a>
                <a href="tel:+37360000000" className="v12-btn-secondary">
                  <Phone size={18} />
                  <span>{t.hero.ctaCall}</span>
                </a>
              </div>
            </div>

            {/* Spatial Hero Card Showcase */}
            <div className="v12-frosted-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span className="v12-frosted-pill">
                  <Film size={14} /> Moldovan Media Studio
                </span>
                <span style={{ color: 'var(--v12-accent-gold)', fontWeight: 800, fontSize: '0.9rem' }}>
                  ★ 4.98 / 5.0 Rating
                </span>
              </div>

              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px' }}>
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
                  alt="Studio Recording"
                  style={{ width: '100%', height: '240px', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>
                    VIRALIS Studio • 600 MDL
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>
                    TikTok, Reels & Shorts production in Chisinau
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--v12-text-muted)' }}>Качество видео</div>
                  <div style={{ fontWeight: 800, color: 'var(--v12-accent)' }}>4K UltraHD / 60 FPS</div>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--v12-text-muted)' }}>Звук & Озвучка</div>
                  <div style={{ fontWeight: 800, color: 'var(--v12-accent)' }}>Петлички & Voice (RU/RO)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="v12-stats-grid">
            <div className="v12-frosted-card v12-stat-card">
              <div className="v12-stat-val">{t.hero.stat1Val}</div>
              <div className="v12-stat-sub">{t.hero.stat1Sub}</div>
            </div>
            <div className="v12-frosted-card v12-stat-card">
              <div className="v12-stat-val">{t.hero.stat2Val}</div>
              <div className="v12-stat-sub">{t.hero.stat2Sub}</div>
            </div>
            <div className="v12-frosted-card v12-stat-card">
              <div className="v12-stat-val">{t.hero.stat3Val}</div>
              <div className="v12-stat-sub">{t.hero.stat3Sub}</div>
            </div>
            <div className="v12-frosted-card v12-stat-card">
              <div className="v12-stat-val">{t.hero.stat4Val}</div>
              <div className="v12-stat-sub">{t.hero.stat4Sub}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Loss Aversion Section (Kahneman Behavioral Trigger) */}
      <section id="psychology" className="v12-section">
        <div className="v12-container">
          <div className="v12-section-header">
            <div className="v12-section-badge">
              <AlertTriangle size={14} />
              <span>{t.lossSection.badge}</span>
            </div>
            <h2 className="v12-section-title">{t.lossSection.title}</h2>
            <p className="v12-section-sub">{t.lossSection.subtitle}</p>
          </div>

          <div className="v12-loss-grid">
            <div className="v12-frosted-card v12-loss-card">
              <div className="v12-loss-icon"><TrendingDown size={24} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.lossSection.card1Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.lossSection.card1Desc}</p>
            </div>
            <div className="v12-frosted-card v12-loss-card">
              <div className="v12-loss-icon"><DollarSign size={24} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.lossSection.card2Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.lossSection.card2Desc}</p>
            </div>
            <div className="v12-frosted-card v12-loss-card">
              <div className="v12-loss-icon"><Users size={24} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.lossSection.card3Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.lossSection.card3Desc}</p>
            </div>
          </div>

          {/* Loss Calculator Ticker */}
          <div className="v12-frosted-card" style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>
              {t.lossSection.lossTickerTitle}
            </div>
            <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#ef4444', marginBottom: '10px' }}>
              -{totalCalculatedLoss.toLocaleString()} {t.lossSection.lossTickerUnit}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--v12-text-muted)' }}>Дней без контента:</span>
              <input
                type="range"
                min="7"
                max="90"
                value={lossDays}
                onChange={(e) => setLossDays(Number(e.target.value))}
                style={{ width: '200px', accentColor: '#ef4444' }}
              />
              <span style={{ fontWeight: 800 }}>{lossDays} дн.</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--v12-text-muted)' }}>{t.lossSection.lossNote}</p>
          </div>
        </div>
      </section>

      {/* Contrast Principle Section */}
      <section className="v12-section">
        <div className="v12-container">
          <div className="v12-section-header">
            <div className="v12-section-badge">
              <Sliders size={14} />
              <span>{t.contrastSection.badge}</span>
            </div>
            <h2 className="v12-section-title">{t.contrastSection.title}</h2>
            <p className="v12-section-sub">{t.contrastSection.subtitle}</p>
          </div>

          <div className="v12-contrast-grid">
            {/* Old Phone / Traditional Approach */}
            <div className="v12-frosted-card v12-contrast-col">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ef4444', marginBottom: '16px' }}>
                {t.contrastSection.oldTitle}
              </h3>
              <ul className="v12-contrast-list">
                <li className="v12-contrast-item"><XCircle size={18} color="#ef4444" /><span>{t.contrastSection.old1}</span></li>
                <li className="v12-contrast-item"><XCircle size={18} color="#ef4444" /><span>{t.contrastSection.old2}</span></li>
                <li className="v12-contrast-item"><XCircle size={18} color="#ef4444" /><span>{t.contrastSection.old3}</span></li>
                <li className="v12-contrast-item"><XCircle size={18} color="#ef4444" /><span>{t.contrastSection.old4}</span></li>
                <li className="v12-contrast-item"><XCircle size={18} color="#ef4444" /><span>{t.contrastSection.old5}</span></li>
              </ul>
            </div>

            {/* VIRALIS Spatial Formula */}
            <div className="v12-frosted-card v12-contrast-col new-formula">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--v12-accent)', marginBottom: '16px' }}>
                {t.contrastSection.newTitle}
              </h3>
              <ul className="v12-contrast-list">
                <li className="v12-contrast-item"><CheckCircle2 size={18} color="var(--v12-accent)" /><span>{t.contrastSection.new1}</span></li>
                <li className="v12-contrast-item"><CheckCircle2 size={18} color="var(--v12-accent)" /><span>{t.contrastSection.new2}</span></li>
                <li className="v12-contrast-item"><CheckCircle2 size={18} color="var(--v12-accent)" /><span>{t.contrastSection.new3}</span></li>
                <li className="v12-contrast-item"><CheckCircle2 size={18} color="var(--v12-accent)" /><span>{t.contrastSection.new4}</span></li>
                <li className="v12-contrast-item"><CheckCircle2 size={18} color="var(--v12-accent)" /><span>{t.contrastSection.new5}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="v12-section">
        <div className="v12-container">
          <div className="v12-section-header">
            <div className="v12-section-badge">
              <Package size={14} />
              <span>{t.services.badge}</span>
            </div>
            <h2 className="v12-section-title">{t.services.title}</h2>
            <p className="v12-section-sub">{t.services.subtitle}</p>
          </div>

          <div className="v12-services-grid">
            <div className="v12-frosted-card v12-service-card">
              <div className="v12-service-icon"><Film size={26} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.services.s1Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.services.s1Desc}</p>
            </div>
            <div className="v12-frosted-card v12-service-card">
              <div className="v12-service-icon"><Layers size={26} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.services.s2Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.services.s2Desc}</p>
            </div>
            <div className="v12-frosted-card v12-service-card">
              <div className="v12-service-icon"><Sparkles size={26} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.services.s3Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.services.s3Desc}</p>
            </div>
            <div className="v12-frosted-card v12-service-card">
              <div className="v12-service-icon"><TrendingUp size={26} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.services.s4Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.services.s4Desc}</p>
            </div>
            <div className="v12-frosted-card v12-service-card">
              <div className="v12-service-icon"><Mic size={26} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.services.s5Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.services.s5Desc}</p>
            </div>
            <div className="v12-frosted-card v12-service-card">
              <div className="v12-service-icon"><CheckSquare size={26} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.services.s6Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.services.s6Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="v12-section">
        <div className="v12-container">
          <div className="v12-section-header">
            <div className="v12-section-badge">
              <Calculator size={14} />
              <span>{t.calculator.badge}</span>
            </div>
            <h2 className="v12-section-title">{t.calculator.title}</h2>
            <p className="v12-section-sub">{t.calculator.subtitle}</p>
          </div>

          <div className="v12-frosted-card v12-calc-panel">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ fontWeight: 800, fontSize: '1.1rem' }}>{t.calculator.countLabel}</label>
                <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--v12-accent)' }}>
                  {videoCount} роликов
                </span>
              </div>

              <div className="v12-slider-container">
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={videoCount}
                  onChange={(e) => setVideoCount(Number(e.target.value))}
                  className="v12-slider"
                />
              </div>

              {/* Discount Badges */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
                <span className="v12-frosted-pill" style={{ opacity: videoCount >= 5 ? 1 : 0.4 }}>
                  <Award size={14} /> {t.calculator.discount5}
                </span>
                <span className="v12-frosted-pill" style={{ opacity: videoCount >= 10 ? 1 : 0.4 }}>
                  <Award size={14} /> {t.calculator.discount10}
                </span>
              </div>

              {/* Addons */}
              <div className="v12-calc-addons">
                <div className="v12-addon-checkbox" onClick={() => setAddonPackage(!addonPackage)}>
                  <input type="checkbox" checked={addonPackage} onChange={() => {}} />
                  <span style={{ fontSize: '0.92rem' }}>{t.calculator.addon1}</span>
                </div>
                <div className="v12-addon-checkbox" onClick={() => setAddonAds(!addonAds)}>
                  <input type="checkbox" checked={addonAds} onChange={() => {}} />
                  <span style={{ fontSize: '0.92rem' }}>{t.calculator.addon2}</span>
                </div>
                <div className="v12-addon-checkbox" onClick={() => setAddonVoiceover(!addonVoiceover)}>
                  <input type="checkbox" checked={addonVoiceover} onChange={() => {}} />
                  <span style={{ fontSize: '0.92rem' }}>{t.calculator.addon3}</span>
                </div>
              </div>

              <div style={{ marginTop: '20px', fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>
                ✓ {t.calculator.freeScript}
              </div>
            </div>

            {/* Summary Box */}
            <div className="v12-calc-summary-box">
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '16px' }}>Расчёт бюджета:</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.92rem' }}>
                  <span style={{ color: 'var(--v12-text-muted)' }}>{t.calculator.summaryBase}</span>
                  <span>{rawBaseTotal} MDL</span>
                </div>
                {totalSaved > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.92rem', color: '#10b981' }}>
                    <span>{t.calculator.summaryDiscount}</span>
                    <span>-{totalSaved} MDL</span>
                  </div>
                )}
                {addonsTotal > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.92rem' }}>
                    <span style={{ color: 'var(--v12-text-muted)' }}>{t.calculator.summaryAddons}</span>
                    <span>+{addonsTotal} MDL</span>
                  </div>
                )}

                <div style={{ borderTop: '1px dashed var(--v12-glass-border)', margin: '16px 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{t.calculator.summaryTotal}</span>
                  <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--v12-accent)' }}>
                    {finalTotalPrice} MDL
                  </span>
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--v12-text-muted)', marginBottom: '6px' }}>
                  {t.calculator.estViews} <strong style={{ color: 'var(--v12-text)' }}>~{estViews.toLocaleString()}</strong>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--v12-text-muted)', marginBottom: '20px' }}>
                  {t.calculator.costPerView} <strong style={{ color: 'var(--v12-accent)' }}>{costPerView} MDL</strong>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="v12-btn-primary">
                  <MessageCircle size={18} />
                  <span>{t.calculator.orderBtn}</span>
                </a>
                <a href="tel:+37360000000" className="v12-btn-secondary">
                  <Phone size={18} />
                  <span>{t.calculator.callBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="v12-section">
        <div className="v12-container">
          <div className="v12-section-header">
            <div className="v12-section-badge">
              <Film size={14} />
              <span>{t.portfolio.badge}</span>
            </div>
            <h2 className="v12-section-title">{t.portfolio.title}</h2>
            <p className="v12-section-sub">{t.portfolio.subtitle}</p>
          </div>

          {/* Filter Tabs */}
          <div className="v12-portfolio-tabs">
            <button className={`v12-tab-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>
              {t.portfolio.catAll}
            </button>
            <button className={`v12-tab-btn ${activeCategory === 'food' ? 'active' : ''}`} onClick={() => setActiveCategory('food')}>
              {t.portfolio.catFood}
            </button>
            <button className={`v12-tab-btn ${activeCategory === 'fashion' ? 'active' : ''}`} onClick={() => setActiveCategory('fashion')}>
              {t.portfolio.catFashion}
            </button>
            <button className={`v12-tab-btn ${activeCategory === 'services' ? 'active' : ''}`} onClick={() => setActiveCategory('services')}>
              {t.portfolio.catServices}
            </button>
            <button className={`v12-tab-btn ${activeCategory === 'auto' ? 'active' : ''}`} onClick={() => setActiveCategory('auto')}>
              {t.portfolio.catAuto}
            </button>
          </div>

          <div className="v12-portfolio-grid">
            {filteredPortfolio.map(item => (
              <div key={item.id} className="v12-frosted-card v12-portfolio-card">
                <div className="v12-portfolio-thumb">
                  <img src={item.thumbnail} alt={item.title[lang]} className="v12-portfolio-img" />
                  <div className="v12-portfolio-overlay">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span className="v12-frosted-pill" style={{ background: 'rgba(0,0,0,0.6)' }}>
                        <Eye size={14} /> {item.views}
                      </span>
                      <span className="v12-frosted-pill" style={{ background: 'rgba(56,189,248,0.2)' }}>
                        {item.niche[lang]}
                      </span>
                    </div>

                    <div className="v12-play-btn" onClick={() => setActiveModalVideo(item)}>
                      <Play size={24} style={{ marginLeft: '4px' }} />
                    </div>

                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff' }}>
                        {item.title[lang]}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>
                        ✓ {item.result[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="v12-section">
        <div className="v12-container">
          <div className="v12-section-header">
            <div className="v12-section-badge">
              <Gift size={14} />
              <span>{t.packages.badge}</span>
            </div>
            <h2 className="v12-section-title">{t.packages.title}</h2>
            <p className="v12-section-sub">{t.packages.subtitle}</p>
          </div>

          <div className="v12-packages-grid">
            {/* Package 1 */}
            <div className="v12-frosted-card v12-pkg-card">
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{t.packages.p1Title}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--v12-text-muted)' }}>{t.packages.p1Sub}</div>
                <div className="v12-pkg-price">{t.packages.p1Price} <span style={{ fontSize: '1rem' }}>MDL</span></div>
                <ul className="v12-pkg-features">
                  <li>✓ {t.packages.p1f1}</li>
                  <li>✓ {t.packages.p1f2}</li>
                  <li>✓ {t.packages.p1f3}</li>
                  <li>✓ {t.packages.p1f4}</li>
                </ul>
              </div>
              <button className="v12-btn-secondary" onClick={() => openOrderWithPackage(t.packages.p1Title)}>
                {t.packages.p1Btn}
              </button>
            </div>

            {/* Package 2 */}
            <div className="v12-frosted-card v12-pkg-card">
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{t.packages.p2Title}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--v12-text-muted)' }}>{t.packages.p2Sub}</div>
                <div className="v12-pkg-price">{t.packages.p2Price} <span style={{ fontSize: '1rem' }}>MDL</span></div>
                <ul className="v12-pkg-features">
                  <li>✓ {t.packages.p2f1}</li>
                  <li>✓ {t.packages.p2f2}</li>
                  <li>✓ {t.packages.p2f3}</li>
                  <li>✓ {t.packages.p2f4}</li>
                </ul>
              </div>
              <button className="v12-btn-secondary" onClick={() => openOrderWithPackage(t.packages.p2Title)}>
                {t.packages.p2Btn}
              </button>
            </div>

            {/* Package 3 - Popular */}
            <div className="v12-frosted-card v12-pkg-card popular">
              <div>
                <span className="v12-frosted-pill" style={{ background: 'var(--v12-accent)', color: '#fff', marginBottom: '10px' }}>
                  <Star size={14} /> {t.packages.popularBadge}
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{t.packages.p3Title}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--v12-text-muted)' }}>{t.packages.p3Sub}</div>
                <div className="v12-pkg-price">{t.packages.p3Price} <span style={{ fontSize: '1rem' }}>MDL</span></div>
                <ul className="v12-pkg-features">
                  <li>✓ {t.packages.p3f1}</li>
                  <li>✓ {t.packages.p3f2}</li>
                  <li>✓ {t.packages.p3f3}</li>
                  <li>✓ {t.packages.p3f4}</li>
                </ul>
              </div>
              <button className="v12-btn-primary" onClick={() => openOrderWithPackage(t.packages.p3Title)}>
                {t.packages.p3Btn}
              </button>
            </div>

            {/* Package 4 */}
            <div className="v12-frosted-card v12-pkg-card">
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{t.packages.p4Title}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--v12-text-muted)' }}>{t.packages.p4Sub}</div>
                <div className="v12-pkg-price">{t.packages.p4Price} <span style={{ fontSize: '1rem' }}>MDL</span></div>
                <ul className="v12-pkg-features">
                  <li>✓ {t.packages.p4f1}</li>
                  <li>✓ {t.packages.p4f2}</li>
                  <li>✓ {t.packages.p4f3}</li>
                  <li>✓ {t.packages.p4f4}</li>
                </ul>
              </div>
              <button className="v12-btn-secondary" onClick={() => openOrderWithPackage(t.packages.p4Title)}>
                {t.packages.p4Btn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="whyus" className="v12-section">
        <div className="v12-container">
          <div className="v12-section-header">
            <div className="v12-section-badge">
              <Award size={14} />
              <span>{t.whyUs.badge}</span>
            </div>
            <h2 className="v12-section-title">{t.whyUs.title}</h2>
            <p className="v12-section-sub">{t.whyUs.subtitle}</p>
          </div>

          <div className="v12-services-grid">
            <div className="v12-frosted-card v12-service-card">
              <div className="v12-service-icon"><Film size={26} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.whyUs.r1Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.whyUs.r1Desc}</p>
            </div>
            <div className="v12-frosted-card v12-service-card">
              <div className="v12-service-icon"><Clock size={26} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.whyUs.r2Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.whyUs.r2Desc}</p>
            </div>
            <div className="v12-frosted-card v12-service-card">
              <div className="v12-service-icon"><Globe size={26} /></div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '12px' }}>{t.whyUs.r3Title}</h3>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.92rem' }}>{t.whyUs.r3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="v12-section">
        <div className="v12-container">
          <div className="v12-section-header">
            <div className="v12-section-badge">
              <Users size={14} />
              <span>{t.team.badge}</span>
            </div>
            <h2 className="v12-section-title">{t.team.title}</h2>
            <p className="v12-section-sub">{t.team.subtitle}</p>
          </div>

          <div className="v12-services-grid">
            <div className="v12-frosted-card" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 16px auto', border: '2px solid var(--v12-accent)' }}>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" alt={t.team.m1Name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{t.team.m1Name}</h3>
              <div style={{ color: 'var(--v12-accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>{t.team.m1Role}</div>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.9rem' }}>{t.team.m1Desc}</p>
            </div>

            <div className="v12-frosted-card" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 16px auto', border: '2px solid var(--v12-accent)' }}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" alt={t.team.m2Name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{t.team.m2Name}</h3>
              <div style={{ color: 'var(--v12-accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>{t.team.m2Role}</div>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.9rem' }}>{t.team.m2Desc}</p>
            </div>

            <div className="v12-frosted-card" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 16px auto', border: '2px solid var(--v12-accent)' }}>
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80" alt={t.team.m3Name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{t.team.m3Name}</h3>
              <div style={{ color: 'var(--v12-accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>{t.team.m3Role}</div>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.9rem' }}>{t.team.m3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="v12-section">
        <div className="v12-container">
          <div className="v12-section-header">
            <div className="v12-section-badge">
              <Star size={14} />
              <span>{t.testimonials.badge}</span>
            </div>
            <h2 className="v12-section-title">{t.testimonials.title}</h2>
            <p className="v12-section-sub">{t.testimonials.subtitle}</p>
          </div>

          <div className="v12-services-grid">
            <div className="v12-frosted-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '14px' }}>
                <Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" />
              </div>
              <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '20px' }}>"{t.testimonials.t1Text}"</p>
              <div style={{ fontWeight: 800 }}>{t.testimonials.t1Name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--v12-text-muted)' }}>{t.testimonials.t1Role}</div>
            </div>

            <div className="v12-frosted-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '14px' }}>
                <Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" />
              </div>
              <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '20px' }}>"{t.testimonials.t2Text}"</p>
              <div style={{ fontWeight: 800 }}>{t.testimonials.t2Name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--v12-text-muted)' }}>{t.testimonials.t2Role}</div>
            </div>

            <div className="v12-frosted-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '14px' }}>
                <Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" /><Star size={16} fill="#f59e0b" />
              </div>
              <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '20px' }}>"{t.testimonials.t3Text}"</p>
              <div style={{ fontWeight: 800 }}>{t.testimonials.t3Name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--v12-text-muted)' }}>{t.testimonials.t3Role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="v12-section">
        <div className="v12-container">
          <div className="v12-section-header">
            <div className="v12-section-badge">
              <HelpCircle size={14} />
              <span>{t.faq.badge}</span>
            </div>
            <h2 className="v12-section-title">{t.faq.title}</h2>
            <p className="v12-section-sub">{t.faq.subtitle}</p>
          </div>

          <div className="v12-faq-container">
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
                className="v12-frosted-card v12-faq-item"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="v12-faq-question">
                  <span>{item.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} color="var(--v12-accent)" /> : <ChevronDown size={20} />}
                </div>
                {openFaq === idx && (
                  <div className="v12-faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Modal */}
      {leadModalOpen && (
        <div className="v12-modal-backdrop" onClick={() => setLeadModalOpen(false)}>
          <div className="v12-frosted-card v12-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="v12-modal-close" onClick={() => setLeadModalOpen(false)}>
              <X size={24} />
            </button>

            {!formSubmitted ? (
              <>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>
                  {t.formSection.title}
                </h3>
                <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  Выбран пакет: <strong style={{ color: 'var(--v12-accent)' }}>{selectedPackage || 'Индивидуальный'}</strong>
                </p>

                <form onSubmit={handleFormSubmit}>
                  <div className="v12-input-group">
                    <label className="v12-label">{t.formSection.nameLabel}</label>
                    <input
                      type="text"
                      className="v12-input"
                      placeholder={t.formSection.namePlaceholder}
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="v12-input-group">
                    <label className="v12-label">{t.formSection.phoneLabel}</label>
                    <input
                      type="tel"
                      className="v12-input"
                      placeholder={t.formSection.phonePlaceholder}
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="v12-input-group">
                    <label className="v12-label">{t.formSection.businessLabel}</label>
                    <input
                      type="text"
                      className="v12-input"
                      placeholder={t.formSection.businessPlaceholder}
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    />
                  </div>

                  <div className="v12-input-group">
                    <label className="v12-label">{t.formSection.notesLabel}</label>
                    <textarea
                      className="v12-input"
                      rows={3}
                      placeholder={t.formSection.notesPlaceholder}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="v12-btn-primary" style={{ width: '100%', marginTop: '12px' }}>
                    <Send size={18} />
                    <span>{t.formSection.submitBtn}</span>
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle2 size={56} color="#10b981" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>
                  {t.formSection.successTitle}
                </h3>
                <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
                  {t.formSection.successDesc}
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v12-btn-primary"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} />
                  <span>{t.formSection.whatsappDirectBtn}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Video Lightbox Modal */}
      {activeModalVideo && (
        <div className="v12-modal-backdrop" onClick={() => setActiveModalVideo(null)}>
          <div className="v12-frosted-card v12-modal-content" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
            <button className="v12-modal-close" onClick={() => setActiveModalVideo(null)}>
              <X size={24} />
            </button>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px' }}>
              {activeModalVideo.title[lang]}
            </h3>

            <div style={{ aspectRatio: '16/9', width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', background: '#000' }}>
              <iframe
                src={activeModalVideo.videoUrl}
                title={activeModalVideo.title[lang]}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="v12-frosted-pill" style={{ color: 'var(--v12-accent)', marginRight: '10px' }}>
                  <Eye size={14} /> {activeModalVideo.views} {t.portfolio.modalViews}
                </span>
                <span style={{ color: '#10b981', fontWeight: 700, fontSize: '0.9rem' }}>
                  ✓ {activeModalVideo.result[lang]}
                </span>
              </div>
              <button
                className="v12-btn-primary"
                onClick={() => {
                  setActiveModalVideo(null);
                  openOrderWithPackage(activeModalVideo.title[lang]);
                }}
              >
                {t.portfolio.modalOrder}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--v12-glass-border)', padding: '60px 0 30px 0', background: 'rgba(0,0,0,0.3)' }}>
        <div className="v12-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '12px' }}>VIRALIS Studio</div>
              <p style={{ color: 'var(--v12-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{t.footer.brandDesc}</p>
            </div>

            <div>
              <div style={{ fontWeight: 800, marginBottom: '16px' }}>Навигация</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
                <li><a href="#services" style={{ color: 'var(--v12-text-muted)', textDecoration: 'none' }}>{t.nav.services}</a></li>
                <li><a href="#calculator" style={{ color: 'var(--v12-text-muted)', textDecoration: 'none' }}>{t.nav.calculator}</a></li>
                <li><a href="#portfolio" style={{ color: 'var(--v12-text-muted)', textDecoration: 'none' }}>{t.nav.portfolio}</a></li>
                <li><a href="#packages" style={{ color: 'var(--v12-text-muted)', textDecoration: 'none' }}>{t.nav.packages}</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontWeight: 800, marginBottom: '16px' }}>Контакты</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--v12-text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /><span>{t.footer.location}</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={16} /><span>{t.footer.phone}</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Send size={16} /><span>{t.footer.email}</span></div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--v12-glass-border)', paddingTop: '24px', textAlign: 'center', fontSize: '0.82rem', color: 'var(--v12-text-muted)' }}>
            © 2026 VIRALIS Media Studio Moldova.{t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
