import React, { useState, useEffect, useMemo } from 'react';
import {
  Video,
  Sparkles,
  Share2,
  Mic,
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
  TrendingDown,
  Send,
  Menu,
  X,
  Zap,
  Flame,
  Check,
  Star,
  XCircle,
  Layers,
  AlertTriangle,
  Eye,
  ArrowRight,
  Globe,
  Sliders,
  ShieldCheck,
  RefreshCw,
  Gift,
  ArrowUpRight,
  FileText,
  Activity,
  CheckCircle
} from 'lucide-react';

// Comprehensive Bilingual Dictionary (RU / RO) - Architectural Dark Edition
const dict = {
  ru: {
    header: {
      status: "СЛОТЫ НА СЪЁМКУ В КИШИНЁВЕ",
      slots: "Осталось 3 свободных слота",
      langBtn: "RO 🇲🇩",
      navSystem: "01 / СИСТЕМА",
      navContrast: "02 / СРАВНЕНИЕ",
      navAudit: "03 / АУДИТ",
      navCalc: "04 / КАЛЬКУЛЯТОР",
      navArchive: "05 / ПОРТФОЛИО",
      navTariffs: "06 / ТАРИФЫ",
      navFaq: "07 / FAQ",
      bookBtn: "Забронировать 600 MDL"
    },
    hero: {
      badge: "ARCHITECTURAL DARK MINIMALISM • BEHAVIORAL VIDEO MARKETING",
      titleLine1: "АРХИТЕКТУРА ВИРУСНОГО",
      titleLine2: "ВИДЕОКОНТЕНТА В МОЛДОВЕ",
      titleHighlight: "600 MDL / РОЛИК",
      subtitle: "Создаём короткие вертикальные видео (Reels, TikTok, Shorts), которые захватывают внимание с 1-й секунды по принципам когнитивной психологии System 1. Производство под ключ в Кишинёве и по всей Молдове.",
      stat1Val: "600 MDL",
      stat1Sub: "Фиксированная цена под ключ",
      stat2Val: "3.8X - 7.2X",
      stat2Sub: "Средний ROI клиентов",
      stat3Val: "24-48 Ч",
      stat3Sub: "Быстрая сдача монтажа",
      priceBadge: "АНКОРИНГ СТОИМОСТИ:",
      agencyPrice: "Агентства Молдовы: 2 500 MDL",
      ourPrice: "VIRALIS Studio: 600 MDL",
      saveBadge: "Экономия 1 900 MDL за ролик",
      ctaPrimary: "Заказать видео за 600 MDL",
      ctaSecondary: "Рассчитать ROI & Скидку",
      callDirect: "Прямой звонок продюсеру",
      liveTicker: "🔥 Съёмки в Кишинёве, Бельцах и по всей Молдове • Прямая связь без посредников"
    },
    behavioralMatrix: {
      badge: "01 / СИСТЕМА ПРИНЯТИЯ РЕШЕНИЙ (DANIEL KAHNEMAN)",
      title: "Когнитивная Механика Внимания",
      subtitle: "Почему 80% обычной рекламы пролистывают, а видео VIRALIS генерируют постоянный поток заявок",
      sys1Title: "System 1 — Эмоциональный Хук (0-3 сек)",
      sys1Desc: "Быстрое, подсознательное восприятие. Первые 3 секунды определяют, останется ли зритель. Мы задействуем визуальный и звуковой триггер, останавливая скролл на 94%.",
      sys2Title: "System 2 — Рациональный ROI (3-30 сек)",
      sys2Desc: "Медленное, логическое обоснование покупки. Демонстрация ценности продукта, снятие возражений и чёткий призыв к действию (CTA), превращающий зрителя в лид.",
      lossAlertTitle: "⚠️ ПСИХОЛОГИЯ УПУЩЕННОЙ ВЫГОДЫ (LOSS AVERSION)",
      lossAlertDesc: "Каждый день без динамичных Reels/TikTok ваш бизнес теряет целевых клиентов, уходящих к более активным конкурентам.",
      lossCalcLabel: "Ориентировочные упущенные продажи за 30 дней без роликов:",
      lossCalcValue: "MDL недополученной выручки",
      lossCalcNote: "* Основано на медианной конверсии коротких видео в нишах ритейла, услуг и общепита в Молдове."
    },
    anchoringContrast: {
      badge: "02 / ПРИНЦИП КОНТРАСТА И СРАВНЕНИЯ",
      title: "Сравнение Моделей Производства",
      subtitle: "Прозрачная архитектура затрат: традиционные агентства vs метод VIRALIS Studio",
      colAgencyTitle: "❌ Традиционное Агентство",
      colAgency1: "Высокая цена от 2 500 MDL за 1 короткий ролик",
      colAgency2: "Долгое согласование: 10–14 дней на 1 видео",
      colAgency3: "Скучное начало — 85% пролистывают в первые 2 секунды",
      colAgency4: "Скрытые доплаты за выезд, звук и монтажные правки",
      colAgency5: "Нет понимания специфики аудитории Республики Молдова",
      colViralisTitle: "⚡ Формула VIRALIS Studio",
      colViralis1: "Фиксировано 600 MDL под ключ без скрытых наценок",
      colViralis2: "Готовый результат за 24–48 часов после съёмки",
      colViralis3: "Цепляющий Hook System 1 с 1-й секунды",
      colViralis4: "Всё включено: сценарий, 4K съёмка, микрофоны, монтаж, субтитры",
      colViralis5: "Полная двуязычная адаптация (RU / RO) под местный рынок"
    },
    auditTool: {
      badge: "03 / КОГНИТИВНЫЙ АУДИТ КОНТЕНТА",
      title: "Экспресс-Диагностика Вашего Видеомаркетинга",
      subtitle: "Ответьте на 3 вопроса и получите индивидуальную рекомендацию по масштабированию",
      q1Title: "1. Какова ваша ниша бизнеса в Молдове?",
      q1O1: "Услуги / Салон / Клиника",
      q1O2: "Ресторан / Кафе / HoReCa",
      q1O3: "Недвижимость / Строительство",
      q1O4: "E-Commerce / Магазин",
      q2Title: "2. Как часто вы публикуете короткие видео?",
      q2O1: "Редко / Почти никогда",
      q2O2: "1-3 ролика в месяц",
      q2O3: "4-8 роликов в месяц",
      q2O4: "Более 10 роликов в месяц",
      q3Title: "3. Какая основная цель вашего видеоконтента?",
      q3O1: "Получать больше прямых заявок",
      q3O2: "Повысить узнаваемость бренда",
      q3O3: "Заменить дорогой таргетинг органика",
      q3O4: "Обогнать прямых конкурентов",
      resultBadge: "РЕЗУЛЬТАТ АУДИТА:",
      resultTitle: "Рекомендуемая Стратегия Видеомаркетинга",
      resultStrategy: "Для вашей ниши оптимален пакет из 5–10 роликов с фокусом на эмоциональные Hook-сценарии в первые 3 секунды. Это позволит снизить стоимость привлечения клиента до 3.5 раз.",
      resultRoi: "Прогнозируемый охват: 25 000 — 120 000 просмотров в месяц",
      auditCta: "Запросить персональный медиаплан (600 MDL/ролик)"
    },
    calculator: {
      badge: "04 / ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР СТОИМОСТИ",
      title: "Рассчитайте Стоимость и Персональную Скидку",
      subtitle: "Гибкая система ценообразования: от 1 ролика до комплексного видео-продакшна",
      countLabel: "Количество видеороликов под ключ:",
      videosUnit: "роликов",
      checkLabel: "Средний чек вашего продукта/услуги (MDL):",
      mdlUnit: "MDL",
      discount5: "🎁 Скидка 10% при заказе от 5 роликов!",
      discount10: "🔥 Скидка 15% + бесплатная упаковка аккаунта при заказе от 10 роликов!",
      addonsTitle: "Дополнительные опции:",
      addon1: "Оформление & Упаковка аккаунта Instagram (+500 MDL)",
      addon2: "Настройка таргетированной рекламы Meta / FB (+800 MDL)",
      addon3: "Разработка продающих сценариев (Включено БЕСПЛАТНО)",
      addon4: "Все исходники в 4K качестве (Включено БЕСПЛАТНО)",
      rawTotalLabel: "Базовая стоимость:",
      discountLabel: "Скидка за объём:",
      savedLabel: "Вы экономите:",
      addonTotalLabel: "Доп. опции:",
      finalTotalLabel: "ИТОГОВАЯ СТОИМОСТЬ:",
      avgPerVideoLabel: "Средняя цена за 1 ролик:",
      orderBtn: "Оформить заказ на ролики"
    },
    portfolio: {
      badge: "05 / АРХИВ ВЫПОЛНЕННЫХ ПРОЕКТОВ",
      title: "Портфолио & Кейсы в Молдове",
      subtitle: "Реальные примеры видеороликов с показателями просмотров и конверсий",
      tabAll: "Все проекты",
      tabReels: "Reels & Shorts",
      tabCommercials: "Промо & Реклама",
      tabTiktok: "TikTok Вирусы",
      tabPodcasts: "Подкасты & Интервью",
      card1Title: "Пзентация фирменного блюда",
      card1Niche: "Ресторан Gusto Cafe, Кишинёв",
      card1Views: "142 000 просмотров",
      card1Hook: "Хук: 'Единственное место в Кишинёве, где...'",
      card1Platform: "Reels / TikTok",
      card2Title: "Обзор премиальной квартиры",
      card2Niche: "Недвижимость / Rieltor MD",
      card2Views: "89 000 просмотров",
      card2Hook: "Хук: 'Сколько стоит квартира с террасой в Центре?'",
      card2Platform: "Reels / YouTube",
      card3Title: "До / После в косметологии",
      card3Niche: "Клиника эстетики Estet",
      card3Views: "64 000 просмотров",
      card3Hook: "Хук: '3 ошибки ухода за кожей летом...'",
      card3Platform: "Reels / Instagram",
      card4Title: "Распаковка трендовой коллекции",
      card4Niche: "Бутик женской одежды Luna",
      card4Views: "115 000 просмотров",
      card4Hook: "Хук: 'Образ за 5 минут для встречи...'",
      card4Platform: "TikTok / Reels",
      card5Title: "Интервью с экспертом",
      card5Niche: "Юридическая компания Lex",
      card5Views: "47 000 просмотров",
      card5Hook: "Хук: 'Как защитить бизнес от штрафов в 2026...'",
      card5Platform: "YouTube Shorts / Reels",
      card6Title: "Промо автосервиса",
      card6Niche: "AutoStudio Chisinau",
      card6Views: "78 000 просмотров",
      card6Hook: "Хук: 'Почему 90% водителей переплачивают за ТО...'",
      card6Platform: "TikTok / Commercial",
      modalTitle: "Предпросмотр проекта",
      modalClose: "Закрыть",
      modalOrder: "Хочу похожий ролик за 600 MDL"
    },
    packages: {
      badge: "06 / ПАКЕТЫ И ТАРИФНЫЕ ПЛАНЫ",
      title: "Фиксированные Пакеты Производства",
      subtitle: "Без скрытых платежей, без мелкого шрифта, со строгим соблюдением сроков",
      popularBadge: "НАИБОЛЕЕ ПОПУЛЯРНЫЙ",
      p1Title: "Тест-Драйв",
      p1Price: "600",
      p1Sub: "1 Ролик под ключ",
      p1Desc: "Идеальный старт для проверки качества и реакции вашей аудитории.",
      p1F1: "1 Профессиональный видеоролик",
      p1F2: "Выездная съёмка в Кишинёве",
      p1F3: "Динамичный монтаж & Субтитры",
      p1F4: "Готовность за 24-48 часов",
      p1Btn: "Заказать 1 ролик (600 MDL)",

      p2Title: "Быстрый Старт",
      p2Price: "2 700",
      p2Sub: "5 Роликов (Скидка 10%)",
      p2Desc: "Для регулярного ведения аккаунта и поддержания постоянных охватов.",
      p2F1: "5 Профессиональных роликов (по 540 MDL)",
      p2F2: "Разработка цепляющих сценариев",
      p2F3: "Профессиональная обработка звука",
      p2F4: "Адаптация под Reels, TikTok, Shorts",
      p2Btn: "Заказать 5 роликов (2 700 MDL)",

      p3Title: "Вирусный Запуск",
      p3Price: "5 100",
      p3Sub: "10 Роликов + Бесплатная упаковка",
      p3Desc: "Комплексный видеомаркетинг для захвата лидерства в вашей нише.",
      p3F1: "10 Вирусных рекламных роликов (по 510 MDL)",
      p3F2: "Полная упаковка аккаунта в подарок",
      p3F3: "Двуязычная озвучка/субтитры (RU/RO)",
      p3F4: "Приоритетная сдача за 24 часа",
      p3Btn: "Заказать Запуск (5 100 MDL)",

      p4Title: "VIP Доминирование",
      p4Price: "9 900",
      p4Sub: "20 Роликов + SMM & Настройка рекламы",
      p4Desc: "Полный отдел видеомаркетинга на аутсорсе для максимальных продаж.",
      p4F1: "20 Готовых роликов на весь месяц",
      p4F2: "Полное оформление Instagram & TikTok",
      p4F3: "Настройка таргетированной рекламы Meta",
      p4F4: "Персональный продюсер 24/7",
      p4Btn: "Заказать VIP (9 900 MDL)"
    },
    process: {
      badge: "07 / АРХИТЕКТУРА ПРОЦЕССА",
      title: "4 Шага от Заявки до Первых Продаж",
      subtitle: "Системный технологический процесс без хаоса и задержек",
      s1Title: "1. Сценарий & Хук",
      s1Desc: "Разрабатываем продающие сценарии с нейрофизиологическими завязками System 1 под ваш продукт.",
      s2Title: "2. Профессиональная Съёмка",
      s2Desc: "Приезжаем со своим 4K оборудованием, студийным светом и беспроводными петличными микрофонами.",
      s3Title: "3. Динамичный Монтаж",
      s3Desc: "Наккладываем анимированные субтитры, цветокоррекцию, саунд-дизайн и визуальные эффекты.",
      s4Title: "4. Публикация & Рост",
      s4Desc: "Вы получаете готовые ролики, адаптированные под форматы Reels, TikTok и Shorts."
    },
    testimonials: {
      badge: "08 / СОЦИАЛЬНОЕ ПОДТВЕРЖДЕНИЕ",
      title: "Отзывы Предпринимателей Молдовы",
      subtitle: "Реальные результаты внедрения вирусных видеороликов VIRALIS Studio",
      r1Name: "Виктор Гросу",
      r1Role: "Владелец ресторана Gusto Cafe, Кишинёв",
      r1Text: "Заказали пакет из 10 роликов за 5100 MDL. Видео с презентацией нашего фирменного блюда набрало 142 тыс. просмотров! Заполняемость зала в выходные выросла на 40%.",
      r1Metric: "+40% броней",
      r2Name: "Елена Сырбу",
      r2Role: "Основательница бутика Luna & Co",
      r2Text: "Ролик за 600 MDL принес больше продаж, чем стандартная реклама у блогеров за 200 евро. Девушки приходят в магазин и показывают видео прямо на телефоне!",
      r2Metric: "ROI > 500%",
      r3Name: "Андрей Чебан",
      r3Role: "Директор SmartHub MD",
      r3Text: "Команда VIRALIS работает четко и быстро. Александр и Станислав приехали со своим светом и микрофонами, сдали готовые ролики уже на следующий день.",
      r3Metric: "Сдача за 24 ч",
      r4Name: "Дмитрий Морарь",
      r4Role: "Агент по недвижимости Rieltor MD",
      r4Text: "Благодаря видеообзору за 600 MDL мы продали двухкомнатную квартиру в центре за 4 дня. Клиент увидал Reels в Instagram и сразу записался на просмотр.",
      r4Metric: "Сделка за 4 дня"
    },
    founders: {
      badge: "09 / ОСНОВАТЕЛИ СТУДИИ",
      title: "Прямая Связь с Продюсерами",
      subtitle: "Личная ответственность за качество каждого кадра и конечный результат",
      alexName: "Александр",
      alexRole: "Основатель & Продюсер Съёмок",
      alexPhone: "+373 78 337 228",
      alexDesc: "Организация съёмочного процесса, генерация вирусных концепций, операторская работа и контроль сроков.",
      stanName: "Станислав",
      stanRole: "Креативный Директор & Режиссер Монтажа",
      stanPhone: "+373 76 59 69 41",
      stanDesc: "Специалист по когнитивному монтажу System 1, цветокоррекции, саунд-дизайну и анимированной графике.",
      directCall: "Позвонить",
      waBtn: "WhatsApp"
    },
    faq: {
      badge: "10 / ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
      title: "Ответы на Вопросы и Снятие Сомнений",
      subtitle: "Всё, что важно знать перед бронированием съёмочной даты",
      q1: "Что входит в стоимость 600 MDL за 1 ролик?",
      a1: "В 600 MDL входит полный цикл под ключ: разработка сценария с хуком, выездная съёмка в Кишинёве, профессиональный свет и микрофоны, динамичный монтаж, субтитры и обработка звука.",
      q2: "В каких городах вы проводите съёмки?",
      a2: "Наша студия базируется в Кишинёве, но мы выезжаем на съёмки по всей территории Республики Молдова.",
      q3: "На каких языках вы создаёте контент?",
      a3: "Мы создаём ролики на русском и румынском (Română) языках с учетом этнокультурных особенностей аудитории Молдовы.",
      q4: "Нужно ли мне самому говорить на камеру?",
      a4: "Не обязательно! Мы готовим сценарии под любой формат: экспертный в кадре, закадровый голос диктора, либо демонстрационный формат продукта.",
      q5: "Каковы точные сроки сдачи готовых роликов?",
      a5: "Первые готовые ролики вы получаете в течение 24–48 часов после завершения съёмочного дня.",
      q6: "Как происходит оплата?",
      a6: "Работаем официально. Возможна оплата наличными или безналичным расчётом для юридических лиц в Молдове."
    },
    leadForm: {
      badge: "11 / ПРЯМОЕ БРОНИРОВАНИЕ СЪЁМКИ",
      title: "Забронируйте Дату Съёмки за 600 MDL",
      subtitle: "Заполните форму или напишите нам прямо в мессенджер для моментального ответа",
      namePlaceholder: "Ваше имя*",
      phonePlaceholder: "Ваш телефон (+373...)*",
      businessPlaceholder: "Ниша или назв. компании*",
      notesPlaceholder: "Пожелания или количество роликов...",
      langSelectLabel: "Предпочитаемый язык контента:",
      langRu: "Русский язык",
      langRo: "Limba Română",
      submitBtn: "Забронировать съёмку (600 MDL)",
      successTitle: "Заявка успешно принята!",
      successDesc: "Продюсер свяжется с вами в течение 15 минут для согласования даты съёмки.",
      closeBtn: "Закрыть"
    },
    footer: {
      brand: "VIRALIS MEDIA STUDIO",
      desc: "Архитектурный видеомаркетинг и создание вирусного контента под ключ в Республике Молдова.",
      rights: "© 2026 VIRALIS Media Studio. Все права защищены.",
      phone: "Телефон: +373 78 337 228 / +373 76 59 69 41",
      address: "г. Кишинёв, Республика Молдова",
      moldovaNotice: "🇲🇩 Качественное видеопроизводство по фиксированной цене 600 MDL"
    }
  },
  ro: {
    header: {
      status: "SLOTURI DE FILMARE ÎN CHIȘINĂU",
      slots: "Au rămas 3 sloturi libere",
      langBtn: "RU 🇷🇺",
      navSystem: "01 / SISTEM",
      navContrast: "02 / COMPARAȚIE",
      navAudit: "03 / AUDIT",
      navCalc: "04 / CALCULATOR",
      navArchive: "05 / PORTOFOLIU",
      navTariffs: "06 / TARIFE",
      navFaq: "07 / FAQ",
      bookBtn: "Rezervă cu 600 MDL"
    },
    hero: {
      badge: "ARCHITECTURAL DARK MINIMALISM • BEHAVIORAL VIDEO MARKETING",
      titleLine1: "ARHITECTURA CONȚINUTULUI",
      titleLine2: "VIDEO VIRAL ÎN MOLDOVA",
      titleHighlight: "600 MDL / CLIP",
      subtitle: "Creăm videoclipuri verticale scurte (Reels, TikTok, Shorts) care captează atenția din prima secundă conform principiilor psihologiei cognitive System 1. Producție la cheie în Chișinău și toată Moldova.",
      stat1Val: "600 MDL",
      stat1Sub: "Preț fix la cheie",
      stat2Val: "3.8X - 7.2X",
      stat2Sub: "ROI mediu al clienților",
      stat3Val: "24-48 Ore",
      stat3Sub: "Livrare rapidă a montajului",
      priceBadge: "ANCHORING DE PREȚ:",
      agencyPrice: "Agenții Moldova: 2 500 MDL",
      ourPrice: "VIRALIS Studio: 600 MDL",
      saveBadge: "Economisești 1 900 MDL per clip",
      ctaPrimary: "Comandă videoclip la 600 MDL",
      ctaSecondary: "Calculează ROI & Reducerea",
      callDirect: "Apel direct către producător",
      liveTicker: "🔥 Filmări în Chișinău, Bălți și în toată Moldova • Legătură directă fără intermediari"
    },
    behavioralMatrix: {
      badge: "01 / SISTEMUL DE DECIZIE (DANIEL KAHNEMAN)",
      title: "Mecanica Cognitivă a Atenției",
      subtitle: "De ce 80% din reclamele obișnuite sunt ignorate, iar videoclipurile VIRALIS generează vânzări constante",
      sys1Title: "System 1 — Hook Emoțional (0-3 sec)",
      sys1Desc: "Percepție rapidă, subconștientă. Primele 3 secunde determină dacă privitorul rămâne. Folosim declanșatori vizuali și sonori, oprind scroll-ul în 94% din cazuri.",
      sys2Title: "System 2 — ROI Rațional (3-30 sec)",
      sys2Desc: "Justificare logică a achiziției. Demonstrarea valorii produsului, eliminarea obiecțiilor și un apel clar la acțiune (CTA) care transformă privitorul în client.",
      lossAlertTitle: "⚠️ PSIHOLOGIA PIERDERILOR (LOSS AVERSION)",
      lossAlertDesc: "În fiecare zi fără Reels/TikTok dinamice, afacerea ta pierde clienți potențiali în favoarea concurenților mai activi.",
      lossCalcLabel: "Vânzări estimate pierdute în 30 de zile fără clipuri:",
      lossCalcValue: "MDL venit ratat",
      lossCalcNote: "* Bazat pe rata medie de conversie a clipurilor scurte în retail, servicii și HoReCa din Moldova."
    },
    anchoringContrast: {
      badge: "02 / PRINCIPIUL CONTRASTULUI ȘI COMPARAȚIEI",
      title: "Comparația Modelelor de Producție",
      subtitle: "Arhitectură transparentă a costurilor: agenții tradiționale vs metoda VIRALIS Studio",
      colAgencyTitle: "❌ Agenție Tradițională",
      colAgency1: "Preț ridicat de la 2 500 MDL per clip scurt",
      colAgency2: "Aprobare lentă: 10–14 zile pentru un singur video",
      colAgency3: "Început plictisitor — 85% trec mai departe în primele 2 secunde",
      colAgency4: "Costuri ascunse pentru deplasare, sunet și modificări",
      colAgency5: "Lipsă de înțelegere a specificului publicului din Moldova",
      colViralisTitle: "⚡ Formula VIRALIS Studio",
      colViralis1: "Preț fix 600 MDL la cheie fără taxe ascunse",
      colViralis2: "Rezultat gata în 24–48 ore după filmare",
      colViralis3: "Hook captivant System 1 din prima secundă",
      colViralis4: "Totul inclus: scenariu, filmare 4K, microfoane, montaj, subtitrări",
      colViralis5: "Adaptare bilingvă completă (RU / RO) pentru piața locală"
    },
    auditTool: {
      badge: "03 / AUDIT COGNITIV AL CONȚINUTULUI",
      title: "Diagnoza Rapidă a Video Marketingului Tău",
      subtitle: "Răspunde la 3 întrebări și primește o recomandare personalizată de scalare",
      q1Title: "1. Care este nișa afacerii tale în Moldova?",
      q1O1: "Servicii / Salon / Clinică",
      q1O2: "Restaurant / Cafe / HoReCa",
      q1O3: "Imobiliare / Construcții",
      q1O4: "E-Commerce / Magazin",
      q2Title: "2. Cât de des publici videoclipuri scurte?",
      q2O1: "Rareori / Aproape niciodată",
      q2O2: "1-3 clipuri pe lună",
      q2O3: "4-8 clipuri pe lună",
      q2O4: "Peste 10 clipuri pe lună",
      q3Title: "3. Care este obiectivul principal al videoclipurilor?",
      q3O1: "Obținerea de cereri directe",
      q3O2: "Căștigarea notorietății de brand",
      q3O3: "Înlocuirea reclamelor scumpe cu organic",
      q3O4: "Depășirea concurenților direcți",
      resultBadge: "REZULTAT AUDIT:",
      resultTitle: "Strategia Recomandată de Video Marketing",
      resultStrategy: "Pentru nișa ta este optim un pachet de 5–10 clipuri concentrate pe scenarii emoționale de Hook în primele 3 secunde. Aceasta va reduce costul de achiziție al clientului de până la 3.5 ori.",
      resultRoi: "Acoperire prognozată: 25 000 — 120 000 vizualizări pe lună",
      auditCta: "Solicită plan media personalizat (600 MDL/clip)"
    },
    calculator: {
      badge: "04 / CALCULATOR INTERACTIV DE COSTURI",
      title: "Calculează Costul și Reducerea Ta",
      subtitle: "Sistem flexibil de prețuri: de la 1 clip până la producție video complexă",
      countLabel: "Numărul de videoclipuri la cheie:",
      videosUnit: "clipuri",
      checkLabel: "Bonul mediu al produsului/serviciului tău (MDL):",
      mdlUnit: "MDL",
      discount5: "🎁 Reducere de 10% la comenzi de minim 5 clipuri!",
      discount10: "🔥 Reducere de 15% + împachetarea gratuită a profilului la minim 10 clipuri!",
      addonsTitle: "Opțiuni suplimentare:",
      addon1: "Branding & Împachetarea contului Instagram (+500 MDL)",
      addon2: "Setarea reclamei targetate Meta / FB (+800 MDL)",
      addon3: "Elaborarea scenariilor de vânzare (Inclus GRATUIT)",
      addon4: "Toate fișierele brute în calitate 4K (Inclus GRATUIT)",
      rawTotalLabel: "Cost de bază:",
      discountLabel: "Reducere de volum:",
      savedLabel: "Economisești:",
      addonTotalLabel: "Opțiuni suplimentare:",
      finalTotalLabel: "COST TOTAL:",
      avgPerVideoLabel: "Preț mediu per 1 clip:",
      orderBtn: "Plasază comanda de clipuri"
    },
    portfolio: {
      badge: "05 / ARHIVA PROIECTELOR REALIZATE",
      title: "Portofoliu & Cazuri Reale în Moldova",
      subtitle: "Exemple reale de videoclipuri cu indicatori de vizualizări și conversii",
      tabAll: "Toate proiectele",
      tabReels: "Reels & Shorts",
      tabCommercials: "Promo & Reclamă",
      tabTiktok: "TikTok Virale",
      tabPodcasts: "Podcasturi & Interviuri",
      card1Title: "Prezentare preparat vedetă",
      card1Niche: "Restaurant Gusto Cafe, Chișinău",
      card1Views: "142 000 vizualizări",
      card1Hook: "Hook: 'Singurul loc din Chișinău unde...'",
      card1Platform: "Reels / TikTok",
      card2Title: "Tur apartament de lux",
      card2Niche: "Imobiliare / Rieltor MD",
      card2Views: "89 000 vizualizări",
      card2Hook: "Hook: 'Cât costă un apartament cu terasă în Centru?'",
      card2Platform: "Reels / YouTube",
      card3Title: "Înainte / După în cosmetologie",
      card3Niche: "Clinica de estetică Estet",
      card3Views: "64 000 vizualizări",
      card3Hook: "Hook: '3 greșeli de îngrijire a pielii vara...'",
      card3Platform: "Reels / Instagram",
      card4Title: "Unboxing colecție nouă",
      card4Niche: "Butic haine dame Luna",
      card4Views: "115 000 vizualizări",
      card4Hook: "Hook: 'Ținută în 5 minute pentru o întâlnire...'",
      card4Platform: "TikTok / Reels",
      card5Title: "Interviu cu un expert",
      card5Niche: "Companie juridică Lex",
      card5Views: "47 000 vizualizări",
      card5Hook: "Hook: 'Cum să-ți protejezi afacerea de amenzi...'",
      card5Platform: "YouTube Shorts / Reels",
      card6Title: "Promo autoservice",
      card6Niche: "AutoStudio Chisinau",
      card6Views: "78 000 vizualizări",
      card6Hook: "Hook: 'De ce 90% din șoferi plătesc prea mult...'",
      card6Platform: "TikTok / Commercial",
      modalTitle: "Previzualizare proiect",
      modalClose: "Închide",
      modalOrder: "Vreau un clip similar la 600 MDL"
    },
    packages: {
      badge: "06 / PACHETE ȘI PLANURI TARIFARE",
      title: "Pachete Fixe de Producție",
      subtitle: "Fără taxe ascunse, fără scris mărunt, cu respectarea strictă a termenelor",
      popularBadge: "CEL MAI POPULAR",
      p1Title: "Test-Drive",
      p1Price: "600",
      p1Sub: "1 Clip la cheie",
      p1Desc: "Startul ideal pentru a testa calitatea și reacția publicului tău.",
      p1F1: "1 Videoclip profesional",
      p1F2: "Filmare pe teren în Chișinău",
      p1F3: "Montaj dinamic & Subtitrări",
      p1F4: "Gata în 24-48 ore",
      p1Btn: "Comandă 1 clip (600 MDL)",

      p2Title: "Start Rapid",
      p2Price: "2 700",
      p2Sub: "5 Clipuri (Reducere 10%)",
      p2Desc: "Pentru gestionarea regulată a contului și menținerea acoperirii constante.",
      p2F1: "5 Clipuri profesionale (câte 540 MDL)",
      p2F2: "Elaborare scenarii captivante",
      p2F3: "Procesare profesională sunet",
      p2F4: "Adaptare pentru Reels, TikTok, Shorts",
      p2Btn: "Comandă 5 clipuri (2 700 MDL)",

      p3Title: "Lansare Virală",
      p3Price: "5 100",
      p3Sub: "10 Clipuri + Împachetare gratuită",
      p3Desc: "Video marketing complex pentru preluarea lideratului în nișa ta.",
      p3F1: "10 Clipuri video virale (câte 510 MDL)",
      p3F2: "Împachetarea completă a contului cadou",
      p3F3: "Dublaj/subtitrări bilingve (RU/RO)",
      p3F4: "Livrare prioritară în 24 ore",
      p3Btn: "Comandă Lansarea (5 100 MDL)",

      p4Title: "VIP Dominare",
      p4Price: "9 900",
      p4Sub: "20 Clipuri + SMM & Reclamă Targetat",
      p4Desc: "Departament complet de video marketing în outsource pentru vânzări maxime.",
      p4F1: "20 Clipuri gata pentru toată luna",
      p4F2: "Design complet Instagram & TikTok",
      p4F3: "Setarea reclamei targetate Meta",
      p4F4: "Producător personal 24/7",
      p4Btn: "Comandă VIP (9 900 MDL)"
    },
    process: {
      badge: "07 / ARHITECTURA PROCESULUI",
      title: "4 Pași de la Cerere la Primele Vânzări",
      subtitle: "Proces tehnologic sistemic fără haos și fără întârzieri",
      s1Title: "1. Scenariu & Hook",
      s1Desc: "Elaborăm scenarii de vânzare cu carlige neurofiziologice System 1 adaptate produsului tău.",
      s2Title: "2. Filmare Profesională",
      s2Desc: "Venim cu echipamentul nostru 4K, lumină de studio și microfoane lavalieră fără fir.",
      s3Title: "3. Montaj Dinamic",
      s3Desc: "Adăugăm subtitrări animate, corecție de culoare, sound design și efecte vizuale.",
      s4Title: "4. Publicare & Creștere",
      s4Desc: "Primești videoclipurile gata adaptate pentru formatele Reels, TikTok și Shorts."
    },
    testimonials: {
      badge: "08 / CONFIRMARE SOCIALĂ",
      title: "Recenzii ale Antreprenorilor din Moldova",
      subtitle: "Rezultate reale în urma implementării videoclipurilor virale VIRALIS Studio",
      r1Name: "Victor Grosu",
      r1Role: "Proprietar restaurant Gusto Cafe, Chișinău",
      r1Text: "Am comandat pachetul de 10 clipuri cu 5100 MDL. Clipul cu prezentarea preparatului nostru a strâns 142 mii de vizualizări! Gradul de ocupare a sălii în weekend a crescut cu 40%.",
      r1Metric: "+40% rezervări",
      r2Name: "Elena Sîrbu",
      r2Role: "Fondatoare butic Luna & Co",
      r2Text: "Un clip de 600 MDL ne-a adus mai multe vânzări decât o reclamă standard la bloggeri de 200 euro. Fetele vin în magazin și ne arată videoclipul pe telefon!",
      r2Metric: "ROI > 500%",
      r3Name: "Andrei Ceban",
      r3Role: "Director SmartHub MD",
      r3Text: "Echipa VIRALIS lucrează rapid și profesionist. Alexandr și Stanislav au venit cu lumina și microfoanele lor, predând clipurile gata chiar a doua zi.",
      r3Metric: "Predare în 24h",
      r4Name: "Dumitru Morari",
      r4Role: "Agent imobiliar Rieltor MD",
      r4Text: "Datorită turului video de 600 MDL am vândut un apartament cu 2 camere în centru în 4 zile. Clientul a văzut Reels pe Instagram și s-a înscris imediat la vizionare.",
      r4Metric: "Tranzacție în 4 zile"
    },
    founders: {
      badge: "09 / FONDATORII STUDIOULUI",
      title: "Contact Direct cu Producătorii",
      subtitle: "Responsabilitate personală pentru calitatea fiecărui cadru și rezultat final",
      alexName: "Alexandr",
      alexRole: "Fondator & Producător Filmări",
      alexPhone: "+373 78 337 228",
      alexDesc: "Organizarea procesului de filmare, generarea conceptelor virale, muncă de operator și control al termenelor.",
      stanName: "Stanislav",
      stanRole: "Director Creativ & Regizor Montaj",
      stanPhone: "+373 76 59 69 41",
      stanDesc: "Specialist în montaj cognitiv System 1, corecție de culoare, sound design și grafică animată.",
      directCall: "Apelează",
      waBtn: "WhatsApp"
    },
    faq: {
      badge: "10 / ÎNTREBĂRI FRECVENTE",
      title: "Răspunsuri la Întrebări și Eliminarea Dubiilor",
      subtitle: "Tot ce este important de știut înainte de a rezerva o zi de filmare",
      q1: "Ce este inclus în costul de 600 MDL per 1 clip?",
      a1: "În 600 MDL este inclus tot ciclul la cheie: scenariu cu hook, filmare pe teren în Chișinău, lumină și microfoane profesionale, montaj dinamic, subtitrări și procesare sunet.",
      q2: "În ce orașe realizați filmările?",
      a2: "Studioul nostru se află în Chișinău, dar ne deplasăm pentru filmări pe întreg teritoriul Republicii Moldova.",
      q3: "În ce limbi creați conținutul?",
      a3: "Creăm videoclipuri în limbile română și rusă, ținând cont de specificul etnocultural al publicului din Moldova.",
      q4: "Trebuie să vorbesc eu în fața camerei?",
      a4: "Nu este obligatoriu! Pregătim scenarii pentru orice format: expert în cadru, voce din fundal (voiceover) sau format de demonstrație produs.",
      q5: "Care sunt termenele exacte de predare?",
      a5: "Primele videoclipuri gata le primești în termen de 24–48 ore după finalizarea zilei de filmare.",
      q6: "Cum se efectuează plata?",
      a6: "Lucrăm oficial. Este posibilă plata în numerar sau prin transfer bancar pentru persoane juridice din Moldova."
    },
    leadForm: {
      badge: "11 / REZERVARE DIRECTĂ A FILMĂRII",
      title: "Rezervă Data Filmării pentru 600 MDL",
      subtitle: "Completează formularul sau scrie-ne direct pe messenger pentru un răspuns instant",
      namePlaceholder: "Numele tău*",
      phonePlaceholder: "Telefonul tău (+373...)*",
      businessPlaceholder: "Nișa sau numele companiei*",
      notesPlaceholder: "Dorințe sau numărul de clipuri...",
      langSelectLabel: "Limba preferată pentru conținut:",
      langRu: "Limba Rusă",
      langRo: "Limba Română",
      submitBtn: "Rezervă filmarea (600 MDL)",
      successTitle: "Cererea a fost acceptată cu succes!",
      successDesc: "Producătorul te va contacta în 15 minute pentru a stabili data filmării.",
      closeBtn: "Închide"
    },
    footer: {
      brand: "VIRALIS MEDIA STUDIO",
      desc: "Video marketing arhitectural și creare de conținut viral la cheie în Republica Moldova.",
      rights: "© 2026 VIRALIS Media Studio. Toate drepturile rezervate.",
      phone: "Telefon: +373 78 337 228 / +373 76 59 69 41",
      address: "or. Chișinău, Republica Moldova",
      moldovaNotice: "🇲🇩 Producție video de calitate la preț fix de 600 MDL"
    }
  }
};

export default function Variant9_ArchitecturalDark({ lang: propLang = 'ru', setLang: propSetLang }) {
  const [langState, setLangState] = useState(propLang);
  useEffect(() => {
    if (propLang) setLangState(propLang);
  }, [propLang]);
  const lang = propLang || langState;
  const setLang = propSetLang || setLangState;
  const t = dict[lang] || dict['ru'];

  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Behavioral Matrix: Loss Aversion ticker / calculation
  const [dailyClientVal, setDailyClientVal] = useState(3);
  const [avgTicketVal, setAvgTicketVal] = useState(400);

  const estimatedMonthlyLoss = useMemo(() => {
    return dailyClientVal * avgTicketVal * 30;
  }, [dailyClientVal, avgTicketVal]);

  // Cognitive Audit State
  const [auditStep1, setAuditStep1] = useState('q1O1');
  const [auditStep2, setAuditStep2] = useState('q2O1');
  const [auditStep3, setAuditStep3] = useState('q3O1');

  // Calculator State
  const [videoCount, setVideoCount] = useState(5);
  const [avgTicket, setAvgTicket] = useState(500);
  const [addonBranding, setAddonBranding] = useState(false);
  const [addonTargetAds, setAddonTargetAds] = useState(false);

  // Pricing Logic
  const basePricePerVideo = 600;
  let discountRate = 0;
  if (videoCount >= 10) discountRate = 0.15; // 15% off for 10+
  else if (videoCount >= 5) discountRate = 0.10; // 10% off for 5+

  const rawTotal = videoCount * basePricePerVideo;
  const discountedBase = Math.round(rawTotal * (1 - discountRate));
  const totalSaved = rawTotal - discountedBase;
  const addonsTotal = (addonBranding ? 500 : 0) + (addonTargetAds ? 800 : 0);
  const finalPrice = discountedBase + addonsTotal;
  const effectivePricePerVideo = Math.round(discountedBase / videoCount);

  // Portfolio category filter
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Lead Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    language: lang === 'ru' ? 'Русский' : 'Română',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      language: lang === 'ru' ? 'Русский' : 'Română'
    }));
  }, [lang]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  // Pre-filled WhatsApp Link
  const getWhatsAppLink = (customText) => {
    const defaultMsg =
      lang === 'ru'
        ? `Здравствуйте! Хочу заказать ${videoCount} роликов за ${finalPrice} MDL. Мой телефон: ${formData.phone || ''}`
        : `Bună ziua! Doresc să comand ${videoCount} clipuri la ${finalPrice} MDL. Telefonul meu: ${formData.phone || ''}`;
    const text = encodeURIComponent(customText || defaultMsg);
    return `https://wa.me/37378337228?text=${text}`;
  };

  const getTelegramLink = () => {
    const text = encodeURIComponent(
      lang === 'ru'
        ? `Здравствуйте! Интересует пакет роликов за ${finalPrice} MDL.`
        : `Bună ziua! Sunt interesat de pachetul de clipuri la ${finalPrice} MDL.`
    );
    return `https://t.me/viralis_media?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-[#07080B] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black relative overflow-x-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* TOP ARCHITECTURAL STATUS BAR */}
      <div className="bg-[#0B0D14] border-b border-white/[0.08] text-xs font-mono py-2.5 px-4 md:px-8 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-400 tracking-wider hidden sm:inline">
              {t.header.status}:
            </span>
            <span className="text-emerald-400 font-semibold tracking-wider">
              {t.header.slots}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400 hidden md:inline tracking-widest uppercase text-[11px]">
              Chisinau • Balti • All Moldova
            </span>
            <button
              onClick={() => setLang(lang === 'ru' ? 'ro' : 'ru')}
              className="flex items-center gap-2 px-3 py-1 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-none text-white tracking-widest text-xs transition"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.header.langBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#07080B]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 text-lg">
              V
            </div>
            <div>
              <div className="font-mono text-base tracking-[0.2em] font-bold text-white uppercase">
                VIRALIS
              </div>
              <div className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-mono">
                Architectural Studio • 600 MDL
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-widest text-slate-300">
            <a href="#system" className="hover:text-emerald-400 transition">
              {t.header.navSystem}
            </a>
            <a href="#contrast" className="hover:text-emerald-400 transition">
              {t.header.navContrast}
            </a>
            <a href="#audit" className="hover:text-emerald-400 transition">
              {t.header.navAudit}
            </a>
            <a href="#calculator" className="hover:text-emerald-400 transition">
              {t.header.navCalc}
            </a>
            <a href="#portfolio" className="hover:text-emerald-400 transition">
              {t.header.navArchive}
            </a>
            <a href="#tariffs" className="hover:text-emerald-400 transition">
              {t.header.navTariffs}
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition">
              {t.header.navFaq}
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#lead-form"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs tracking-wider uppercase transition border border-emerald-400 flex items-center gap-2"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>{t.header.bookBtn}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0D14] border-b border-white/10 px-6 py-6 font-mono text-xs tracking-widest flex flex-col gap-4">
            <a
              href="#system"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 text-slate-300"
            >
              {t.header.navSystem}
            </a>
            <a
              href="#contrast"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 text-slate-300"
            >
              {t.header.navContrast}
            </a>
            <a
              href="#audit"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 text-slate-300"
            >
              {t.header.navAudit}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 text-slate-300"
            >
              {t.header.navCalc}
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 text-slate-300"
            >
              {t.header.navArchive}
            </a>
            <a
              href="#tariffs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 text-slate-300"
            >
              {t.header.navTariffs}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 text-slate-300"
            >
              {t.header.navFaq}
            </a>
            <a
              href="#lead-form"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-3 text-center bg-emerald-500 text-black font-bold uppercase tracking-widest"
            >
              {t.header.bookBtn}
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION - ARCHITECTURAL DARK MINIMALISM */}
      <section className="relative pt-16 pb-24 md:pt-28 md:pb-36 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 font-mono text-[11px] tracking-[0.2em] text-emerald-400 uppercase mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.hero.badge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white leading-[1.08] uppercase mb-8">
                {t.hero.titleLine1} <br />
                <span className="font-bold text-white">{t.hero.titleLine2}</span> <br />
                <span className="text-emerald-400 font-mono font-normal">
                  [{t.hero.titleHighlight}]
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-10">
                {t.hero.subtitle}
              </p>

              {/* Price Anchoring Minimalist Bar */}
              <div className="p-6 bg-white/[0.02] border border-white/10 mb-10 max-w-2xl">
                <div className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-4">
                  {t.hero.priceBadge}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-rose-400/80 line-through font-mono">
                      {t.hero.agencyPrice}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white font-mono">
                      {t.hero.ourPrice}
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs tracking-wider">
                    {t.hero.saveBadge}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#lead-form"
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs tracking-widest uppercase transition border border-emerald-400 flex items-center gap-3 shadow-lg shadow-emerald-500/10"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#calculator"
                  className="px-8 py-4 bg-white/[0.03] hover:bg-white/[0.08] text-white font-mono text-xs tracking-widest uppercase transition border border-white/15 flex items-center gap-3"
                >
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  <span>{t.hero.ctaSecondary}</span>
                </a>
              </div>
            </div>

            {/* Right Column Metrics Blueprint Card */}
            <div className="lg:col-span-4 bg-[#0B0D14] border border-white/15 p-8 relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-white/5 border-b border-l border-white/10 font-mono text-[10px] text-slate-400">
                SPEC-001 / VIRALIS
              </div>

              <div className="space-y-8 mt-2">
                <div className="pb-6 border-b border-white/10">
                  <div className="text-4xl font-extralight text-white font-mono tracking-tight mb-1">
                    {t.hero.stat1Val}
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    {t.hero.stat1Sub}
                  </div>
                </div>

                <div className="pb-6 border-b border-white/10">
                  <div className="text-4xl font-extralight text-emerald-400 font-mono tracking-tight mb-1">
                    {t.hero.stat2Val}
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    {t.hero.stat2Sub}
                  </div>
                </div>

                <div>
                  <div className="text-4xl font-extralight text-white font-mono tracking-tight mb-1">
                    {t.hero.stat3Val}
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    {t.hero.stat3Sub}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="tel:+37378337228"
                  className="w-full py-3.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-mono text-xs tracking-wider uppercase transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.hero.callDirect}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER BANNER */}
      <div className="bg-[#0A0C12] border-b border-white/[0.08] py-3 font-mono text-xs tracking-widest text-slate-400 overflow-hidden">
        <div className="whitespace-nowrap animate-pulse text-center">
          {t.hero.liveTicker}
        </div>
      </div>

      {/* SECTION 01: BEHAVIORAL MATRIX & LOSS AVERSION */}
      <section id="system" className="py-24 md:py-32 border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase mb-3">
            {t.behavioralMatrix.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extralight text-white uppercase tracking-tight mb-4">
            {t.behavioralMatrix.title}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mb-16 font-light">
            {t.behavioralMatrix.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* System 1 Card */}
            <div className="bg-[#0B0D14] border border-emerald-500/30 p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center font-mono font-bold text-emerald-400">
                  S1
                </div>
                <h3 className="text-xl font-bold text-white uppercase font-mono">
                  {t.behavioralMatrix.sys1Title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {t.behavioralMatrix.sys1Desc}
              </p>
            </div>

            {/* System 2 Card */}
            <div className="bg-[#0B0D14] border border-white/15 p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-white/10 border border-white/20 flex items-center justify-center font-mono font-bold text-white">
                  S2
                </div>
                <h3 className="text-xl font-bold text-white uppercase font-mono">
                  {t.behavioralMatrix.sys2Title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {t.behavioralMatrix.sys2Desc}
              </p>
            </div>
          </div>

          {/* Loss Aversion Interactive Calculator */}
          <div className="bg-[#0F121C] border border-rose-500/30 p-8 md:p-12 relative">
            <div className="text-xs font-mono tracking-widest text-rose-400 uppercase mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>{t.behavioralMatrix.lossAlertTitle}</span>
            </div>
            <p className="text-slate-300 text-sm md:text-base max-w-3xl mb-8 font-light">
              {t.behavioralMatrix.lossAlertDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-6 border-t border-white/10">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">
                  Упущенные клиенты в день: <span className="text-white font-bold">{dailyClientVal} чел</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={dailyClientVal}
                  onChange={(e) => setDailyClientVal(Number(e.target.value))}
                  className="w-full accent-rose-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-2">
                  Средний чек клиента: <span className="text-white font-bold">{avgTicketVal} MDL</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="50"
                  value={avgTicketVal}
                  onChange={(e) => setAvgTicketVal(Number(e.target.value))}
                  className="w-full accent-rose-500"
                />
              </div>

              <div className="bg-black/40 border border-rose-500/40 p-6 text-center">
                <div className="text-xs font-mono text-slate-400 uppercase mb-1">
                  {t.behavioralMatrix.lossCalcLabel}
                </div>
                <div className="text-3xl font-extralight font-mono text-rose-400">
                  {estimatedMonthlyLoss.toLocaleString('ro-MD')} MDL
                </div>
              </div>
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-4 text-center">
              {t.behavioralMatrix.lossCalcNote}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: ANCHORING & CONTRAST MATRIX */}
      <section id="contrast" className="py-24 md:py-32 border-b border-white/[0.08] bg-[#090B10]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase mb-3">
            {t.anchoringContrast.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extralight text-white uppercase tracking-tight mb-4">
            {t.anchoringContrast.title}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mb-16 font-light">
            {t.anchoringContrast.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Old Agency Column */}
            <div className="bg-[#0D0F17] border border-rose-500/20 p-8 md:p-10">
              <h3 className="text-xl font-bold text-rose-400 font-mono uppercase mb-8 pb-4 border-b border-white/10">
                {t.anchoringContrast.colAgencyTitle}
              </h3>
              <ul className="space-y-5 text-sm font-light text-slate-300">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{t.anchoringContrast.colAgency1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{t.anchoringContrast.colAgency2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{t.anchoringContrast.colAgency3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{t.anchoringContrast.colAgency4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{t.anchoringContrast.colAgency5}</span>
                </li>
              </ul>
            </div>

            {/* VIRALIS Formula Column */}
            <div className="bg-[#0B0D14] border border-emerald-500/40 p-8 md:p-10 relative">
              <div className="absolute -top-3 right-8 px-3 py-1 bg-emerald-500 text-black font-mono font-bold text-[10px] uppercase">
                RECOMMENDED ARCHITECTURE
              </div>
              <h3 className="text-xl font-bold text-emerald-400 font-mono uppercase mb-8 pb-4 border-b border-white/10">
                {t.anchoringContrast.colViralisTitle}
              </h3>
              <ul className="space-y-5 text-sm font-light text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.anchoringContrast.colViralis1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.anchoringContrast.colViralis2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.anchoringContrast.colViralis3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.anchoringContrast.colViralis4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.anchoringContrast.colViralis5}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: COGNITIVE AUDIT DIAGNOSTIC TOOL */}
      <section id="audit" className="py-24 md:py-32 border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase mb-3">
            {t.auditTool.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extralight text-white uppercase tracking-tight mb-4">
            {t.auditTool.title}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mb-16 font-light">
            {t.auditTool.subtitle}
          </p>

          <div className="bg-[#0B0D14] border border-white/15 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Question 1 */}
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-4">
                  {t.auditTool.q1Title}
                </label>
                <div className="space-y-2 font-mono text-xs">
                  {[
                    { id: 'q1O1', label: t.auditTool.q1O1 },
                    { id: 'q1O2', label: t.auditTool.q1O2 },
                    { id: 'q1O3', label: t.auditTool.q1O3 },
                    { id: 'q1O4', label: t.auditTool.q1O4 }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setAuditStep1(opt.id)}
                      className={`w-full text-left p-3 border transition ${
                        auditStep1 === opt.id
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-4">
                  {t.auditTool.q2Title}
                </label>
                <div className="space-y-2 font-mono text-xs">
                  {[
                    { id: 'q2O1', label: t.auditTool.q2O1 },
                    { id: 'q2O2', label: t.auditTool.q2O2 },
                    { id: 'q2O3', label: t.auditTool.q2O3 },
                    { id: 'q2O4', label: t.auditTool.q2O4 }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setAuditStep2(opt.id)}
                      className={`w-full text-left p-3 border transition ${
                        auditStep2 === opt.id
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3 */}
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-4">
                  {t.auditTool.q3Title}
                </label>
                <div className="space-y-2 font-mono text-xs">
                  {[
                    { id: 'q3O1', label: t.auditTool.q3O1 },
                    { id: 'q3O2', label: t.auditTool.q3O2 },
                    { id: 'q3O3', label: t.auditTool.q3O3 },
                    { id: 'q3O4', label: t.auditTool.q3O4 }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setAuditStep3(opt.id)}
                      className={`w-full text-left p-3 border transition ${
                        auditStep3 === opt.id
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Diagnostic Result Box */}
            <div className="p-8 bg-[#07080B] border border-emerald-500/40">
              <div className="text-xs font-mono tracking-widest text-emerald-400 mb-2">
                {t.auditTool.resultBadge}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase font-mono">
                {t.auditTool.resultTitle}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
                {t.auditTool.resultStrategy}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-emerald-300">
                  {t.auditTool.resultRoi}
                </div>
                <a
                  href="#lead-form"
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs tracking-wider uppercase transition"
                >
                  {t.auditTool.auditCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: DYNAMIC PRICING & ROI CALCULATOR */}
      <section id="calculator" className="py-24 md:py-32 border-b border-white/[0.08] bg-[#090B10]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase mb-3">
            {t.calculator.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extralight text-white uppercase tracking-tight mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mb-16 font-light">
            {t.calculator.subtitle}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sliders & Toggles */}
            <div className="lg:col-span-7 bg-[#0B0D14] border border-white/15 p-8 md:p-10 space-y-8">
              {/* Video Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono text-slate-300 uppercase">
                    {t.calculator.countLabel}
                  </label>
                  <span className="text-2xl font-mono font-bold text-emerald-400">
                    {videoCount} {t.calculator.videosUnit}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={videoCount}
                  onChange={(e) => setVideoCount(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
                <div className="mt-3">
                  {videoCount >= 10 ? (
                    <span className="text-xs font-mono text-emerald-400">
                      {t.calculator.discount10}
                    </span>
                  ) : videoCount >= 5 ? (
                    <span className="text-xs font-mono text-emerald-300">
                      {t.calculator.discount5}
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">
                      Закажите от 5 роликов для получения скидки 10%!
                    </span>
                  )}
                </div>
              </div>

              {/* Addons Checklist */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  {t.calculator.addonsTitle}
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <label className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/10 cursor-pointer hover:border-white/20">
                    <input
                      type="checkbox"
                      checked={addonBranding}
                      onChange={(e) => setAddonBranding(e.target.checked)}
                      className="accent-emerald-500 w-4 h-4"
                    />
                    <span className="text-slate-200">{t.calculator.addon1}</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/10 cursor-pointer hover:border-white/20">
                    <input
                      type="checkbox"
                      checked={addonTargetAds}
                      onChange={(e) => setAddonTargetAds(e.target.checked)}
                      className="accent-emerald-500 w-4 h-4"
                    />
                    <span className="text-slate-200">{t.calculator.addon2}</span>
                  </label>

                  <div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Check className="w-4 h-4" />
                    <span>{t.calculator.addon3}</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Check className="w-4 h-4" />
                    <span>{t.calculator.addon4}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Receipt Summary Box */}
            <div className="lg:col-span-5 bg-[#07080B] border border-emerald-500/40 p-8 relative">
              <div className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-6 pb-4 border-b border-white/10 flex justify-between">
                <span>RECEIPT #VIRALIS</span>
                <span className="text-emerald-400">MDL / CHISINAU</span>
              </div>

              <div className="space-y-4 text-xs font-mono mb-8">
                <div className="flex justify-between text-slate-400">
                  <span>{t.calculator.rawTotalLabel}</span>
                  <span>{rawTotal.toLocaleString('ro-MD')} MDL</span>
                </div>

                {totalSaved > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>{t.calculator.savedLabel}</span>
                    <span>-{totalSaved.toLocaleString('ro-MD')} MDL</span>
                  </div>
                )}

                {addonsTotal > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>{t.calculator.addonTotalLabel}</span>
                    <span>+{addonsTotal.toLocaleString('ro-MD')} MDL</span>
                  </div>
                )}

                <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-slate-300 uppercase tracking-widest">
                    {t.calculator.finalTotalLabel}
                  </span>
                  <span className="text-3xl font-extralight text-white font-mono">
                    {finalPrice.toLocaleString('ro-MD')} MDL
                  </span>
                </div>

                <div className="text-[11px] text-emerald-300 text-right">
                  {t.calculator.avgPerVideoLabel} {effectivePricePerVideo} MDL
                </div>
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs tracking-widest uppercase transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>{t.calculator.orderBtn} ({finalPrice} MDL)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: PORTFOLIO & CASE ARCHIVE */}
      <section id="portfolio" className="py-24 md:py-32 border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase mb-3">
            {t.portfolio.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extralight text-white uppercase tracking-tight mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mb-12 font-light">
            {t.portfolio.subtitle}
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 font-mono text-xs">
            {[
              { id: 'all', label: t.portfolio.tabAll },
              { id: 'reels', label: t.portfolio.tabReels },
              { id: 'commercials', label: t.portfolio.tabCommercials },
              { id: 'tiktok', label: t.portfolio.tabTiktok },
              { id: 'podcasts', label: t.portfolio.tabPodcasts }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 border transition ${
                  activeCategory === tab.id
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                cat: 'reels',
                title: t.portfolio.card1Title,
                niche: t.portfolio.card1Niche,
                views: t.portfolio.card1Views,
                hook: t.portfolio.card1Hook,
                platform: t.portfolio.card1Platform
              },
              {
                id: 2,
                cat: 'reels',
                title: t.portfolio.card2Title,
                niche: t.portfolio.card2Niche,
                views: t.portfolio.card2Views,
                hook: t.portfolio.card2Hook,
                platform: t.portfolio.card2Platform
              },
              {
                id: 3,
                cat: 'commercials',
                title: t.portfolio.card3Title,
                niche: t.portfolio.card3Niche,
                views: t.portfolio.card3Views,
                hook: t.portfolio.card3Hook,
                platform: t.portfolio.card3Platform
              },
              {
                id: 4,
                cat: 'tiktok',
                title: t.portfolio.card4Title,
                niche: t.portfolio.card4Niche,
                views: t.portfolio.card4Views,
                hook: t.portfolio.card4Hook,
                platform: t.portfolio.card4Platform
              },
              {
                id: 5,
                cat: 'podcasts',
                title: t.portfolio.card5Title,
                niche: t.portfolio.card5Niche,
                views: t.portfolio.card5Views,
                hook: t.portfolio.card5Hook,
                platform: t.portfolio.card5Platform
              },
              {
                id: 6,
                cat: 'commercials',
                title: t.portfolio.card6Title,
                niche: t.portfolio.card6Niche,
                views: t.portfolio.card6Views,
                hook: t.portfolio.card6Hook,
                platform: t.portfolio.card6Platform
              }
            ]
              .filter((item) => activeCategory === 'all' || item.cat === activeCategory)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveModalVideo(item)}
                  className="bg-[#0B0D14] border border-white/15 p-6 group cursor-pointer hover:border-emerald-500/50 transition"
                >
                  <div className="aspect-video bg-black/60 border border-white/10 mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center group-hover:scale-110 transition">
                      <Play className="w-5 h-5 text-emerald-400 fill-emerald-400 ml-0.5" />
                    </div>
                    <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 border border-white/10 font-mono text-[10px] text-emerald-400">
                      {item.platform}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400 mb-1">
                    {item.niche}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-300 mb-2">
                    {item.views}
                  </div>
                  <div className="text-xs font-light text-slate-400 italic">
                    {item.hook}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO MODAL PREVIEW */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B0D14] border border-emerald-500/40 max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setActiveModalVideo(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-xs font-mono text-emerald-400 mb-2">
              {activeModalVideo.platform} • {activeModalVideo.niche}
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 uppercase font-mono">
              {activeModalVideo.title}
            </h3>

            <div className="aspect-video bg-black border border-white/15 mb-6 flex flex-col items-center justify-center text-center p-6">
              <Play className="w-16 h-16 text-emerald-400 animate-pulse mb-4" />
              <div className="text-xs font-mono text-slate-300">
                [SIMULATED 4K PLAYBACK • HOOK RETENTION 94%]
              </div>
              <div className="text-xs font-mono text-emerald-400 mt-2">
                {activeModalVideo.views}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveModalVideo(null)}
                className="px-6 py-3 bg-white/5 border border-white/15 text-slate-300 hover:text-white text-xs font-mono uppercase"
              >
                {t.portfolio.modalClose}
              </button>
              <a
                href="#lead-form"
                onClick={() => setActiveModalVideo(null)}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase"
              >
                {t.portfolio.modalOrder}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 06: PACKAGES & TARIFFS */}
      <section id="tariffs" className="py-24 md:py-32 border-b border-white/[0.08] bg-[#090B10]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase mb-3">
            {t.packages.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extralight text-white uppercase tracking-tight mb-4">
            {t.packages.title}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mb-16 font-light">
            {t.packages.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* P1 */}
            <div className="bg-[#0B0D14] border border-white/15 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white uppercase font-mono mb-2">
                  {t.packages.p1Title}
                </h3>
                <div className="text-4xl font-extralight font-mono text-white mb-2">
                  {t.packages.p1Price} <span className="text-xs text-slate-400">MDL</span>
                </div>
                <div className="text-xs font-mono text-emerald-400 mb-6">
                  {t.packages.p1Sub}
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                  {t.packages.p1Desc}
                </p>
                <ul className="space-y-3 text-xs font-mono text-slate-300 mb-8 border-t border-white/10 pt-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p1F1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p1F2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p1F3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p1F4}</span>
                  </li>
                </ul>
              </div>
              <a
                href="#lead-form"
                className="w-full py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs uppercase text-center tracking-wider"
              >
                {t.packages.p1Btn}
              </a>
            </div>

            {/* P2 */}
            <div className="bg-[#0B0D14] border border-white/15 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white uppercase font-mono mb-2">
                  {t.packages.p2Title}
                </h3>
                <div className="text-4xl font-extralight font-mono text-white mb-2">
                  {t.packages.p2Price} <span className="text-xs text-slate-400">MDL</span>
                </div>
                <div className="text-xs font-mono text-emerald-400 mb-6">
                  {t.packages.p2Sub}
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                  {t.packages.p2Desc}
                </p>
                <ul className="space-y-3 text-xs font-mono text-slate-300 mb-8 border-t border-white/10 pt-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p2F1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p2F2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p2F3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p2F4}</span>
                  </li>
                </ul>
              </div>
              <a
                href="#lead-form"
                className="w-full py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs uppercase text-center tracking-wider"
              >
                {t.packages.p2Btn}
              </a>
            </div>

            {/* P3 - Highlighted */}
            <div className="bg-[#0B0D14] border border-emerald-500/60 p-8 flex flex-col justify-between relative shadow-xl shadow-emerald-500/5">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-black font-mono font-bold text-[10px] uppercase">
                {t.packages.popularBadge}
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-400 uppercase font-mono mb-2">
                  {t.packages.p3Title}
                </h3>
                <div className="text-4xl font-extralight font-mono text-white mb-2">
                  {t.packages.p3Price} <span className="text-xs text-slate-400">MDL</span>
                </div>
                <div className="text-xs font-mono text-emerald-300 mb-6">
                  {t.packages.p3Sub}
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                  {t.packages.p3Desc}
                </p>
                <ul className="space-y-3 text-xs font-mono text-slate-200 mb-8 border-t border-white/10 pt-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p3F1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p3F2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p3F3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p3F4}</span>
                  </li>
                </ul>
              </div>
              <a
                href="#lead-form"
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase text-center tracking-wider"
              >
                {t.packages.p3Btn}
              </a>
            </div>

            {/* P4 */}
            <div className="bg-[#0B0D14] border border-white/15 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white uppercase font-mono mb-2">
                  {t.packages.p4Title}
                </h3>
                <div className="text-4xl font-extralight font-mono text-white mb-2">
                  {t.packages.p4Price} <span className="text-xs text-slate-400">MDL</span>
                </div>
                <div className="text-xs font-mono text-emerald-400 mb-6">
                  {t.packages.p4Sub}
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                  {t.packages.p4Desc}
                </p>
                <ul className="space-y-3 text-xs font-mono text-slate-300 mb-8 border-t border-white/10 pt-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p4F1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p4F2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p4F3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.packages.p4F4}</span>
                  </li>
                </ul>
              </div>
              <a
                href="#lead-form"
                className="w-full py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs uppercase text-center tracking-wider"
              >
                {t.packages.p4Btn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: PROCESS & BLUEPRINT */}
      <section className="py-24 md:py-32 border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase mb-3">
            {t.process.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extralight text-white uppercase tracking-tight mb-4">
            {t.process.title}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mb-16 font-light">
            {t.process.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { id: '01', title: t.process.s1Title, desc: t.process.s1Desc },
              { id: '02', title: t.process.s2Title, desc: t.process.s2Desc },
              { id: '03', title: t.process.s3Title, desc: t.process.s3Desc },
              { id: '04', title: t.process.s4Title, desc: t.process.s4Desc }
            ].map((step) => (
              <div key={step.id} className="bg-[#0B0D14] border border-white/15 p-8 relative">
                <div className="text-4xl font-extralight font-mono text-emerald-400/40 mb-6">
                  {step.id}
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-mono mb-4">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08: TESTIMONIALS & PROOF */}
      <section className="py-24 md:py-32 border-b border-white/[0.08] bg-[#090B10]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase mb-3">
            {t.testimonials.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extralight text-white uppercase tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mb-16 font-light">
            {t.testimonials.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: t.testimonials.r1Name,
                role: t.testimonials.r1Role,
                text: t.testimonials.r1Text,
                metric: t.testimonials.r1Metric
              },
              {
                name: t.testimonials.r2Name,
                role: t.testimonials.r2Role,
                text: t.testimonials.r2Text,
                metric: t.testimonials.r2Metric
              },
              {
                name: t.testimonials.r3Name,
                role: t.testimonials.r3Role,
                text: t.testimonials.r3Text,
                metric: t.testimonials.r3Metric
              },
              {
                name: t.testimonials.r4Name,
                role: t.testimonials.r4Role,
                text: t.testimonials.r4Text,
                metric: t.testimonials.r4Metric
              }
            ].map((rev, idx) => (
              <div key={idx} className="bg-[#0B0D14] border border-white/15 p-8 relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-base font-bold text-white">{rev.name}</div>
                    <div className="text-xs font-mono text-slate-400">{rev.role}</div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                    {rev.metric}
                  </div>
                </div>
                <p className="text-xs font-light text-slate-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09: FOUNDERS & DIRECT CONTACTS */}
      <section className="py-24 md:py-32 border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase mb-3">
            {t.founders.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extralight text-white uppercase tracking-tight mb-4">
            {t.founders.title}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mb-16 font-light">
            {t.founders.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Alexander */}
            <div className="bg-[#0B0D14] border border-white/15 p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center font-mono text-emerald-400 text-xl font-bold mb-6">
                  A
                </div>
                <h3 className="text-xl font-bold text-white uppercase font-mono mb-1">
                  {t.founders.alexName}
                </h3>
                <div className="text-xs font-mono text-emerald-400 mb-4">
                  {t.founders.alexRole} ({t.founders.alexPhone})
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                  {t.founders.alexDesc}
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={`tel:${t.founders.alexPhone.replace(/\s+/g, '')}`}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs uppercase text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.founders.directCall}</span>
                </a>
                <a
                  href={`https://wa.me/${t.founders.alexPhone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-black" />
                  <span>{t.founders.waBtn}</span>
                </a>
              </div>
            </div>

            {/* Stanislav */}
            <div className="bg-[#0B0D14] border border-white/15 p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center font-mono text-emerald-400 text-xl font-bold mb-6">
                  S
                </div>
                <h3 className="text-xl font-bold text-white uppercase font-mono mb-1">
                  {t.founders.stanName}
                </h3>
                <div className="text-xs font-mono text-emerald-400 mb-4">
                  {t.founders.stanRole} (37376596941 / {t.founders.stanPhone})
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                  {t.founders.stanDesc}
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={`tel:${t.founders.stanPhone.replace(/\s+/g, '')}`}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs uppercase text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.founders.directCall}</span>
                </a>
                <a
                  href={`https://wa.me/${t.founders.stanPhone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-black" />
                  <span>{t.founders.waBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ ACCORDION */}
      <section id="faq" className="py-24 md:py-32 border-b border-white/[0.08] bg-[#090B10]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase mb-3 text-center">
            {t.faq.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extralight text-white uppercase tracking-tight mb-4 text-center">
            {t.faq.title}
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto mb-16 font-light text-center">
            {t.faq.subtitle}
          </p>

          <div className="space-y-4">
            {[
              { q: t.faq.q1, a: t.faq.a1 },
              { q: t.faq.q2, a: t.faq.a2 },
              { q: t.faq.q3, a: t.faq.a3 },
              { q: t.faq.q4, a: t.faq.a4 },
              { q: t.faq.q5, a: t.faq.a5 },
              { q: t.faq.q6, a: t.faq.a6 }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#0B0D14] border border-white/15 overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-white/[0.02]"
                >
                  <span className="text-base font-bold text-white font-mono uppercase">
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs text-slate-300 font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: DIRECT LEAD BOOKING FORM */}
      <section id="lead-form" className="py-24 md:py-32 border-b border-white/[0.08] relative">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-[#0B0D14] border border-emerald-500/50 p-8 md:p-14 relative">
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase mb-3">
              {t.leadForm.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extralight text-white uppercase tracking-tight mb-3">
              {t.leadForm.title}
            </h2>
            <p className="text-slate-400 text-sm font-light mb-10">
              {t.leadForm.subtitle}
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-emerald-500/20 border border-emerald-500 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2 font-mono uppercase">
                  {t.leadForm.successTitle}
                </h3>
                <p className="text-xs font-mono text-emerald-200 mb-6">
                  {t.leadForm.successDesc}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-emerald-500 text-black font-mono font-bold text-xs uppercase"
                >
                  {t.leadForm.closeBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={t.leadForm.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4 bg-[#07080B] border border-white/15 text-white text-xs font-mono focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder={t.leadForm.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-4 bg-[#07080B] border border-white/15 text-white text-xs font-mono focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={t.leadForm.businessPlaceholder}
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full p-4 bg-[#07080B] border border-white/15 text-white text-xs font-mono focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <select
                      value={formData.language}
                      onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                      className="w-full p-4 bg-[#07080B] border border-white/15 text-white text-xs font-mono focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="Русский">{t.leadForm.langRu}</option>
                      <option value="Română">{t.leadForm.langRo}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder={t.leadForm.notesPlaceholder}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-4 bg-[#07080B] border border-white/15 text-white text-xs font-mono focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs tracking-widest uppercase transition flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>{t.leadForm.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050609] py-16 border-t border-white/[0.08] font-mono text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-white font-bold text-base tracking-[0.2em] mb-2 uppercase">
              {t.footer.brand}
            </div>
            <p className="text-slate-300 max-w-sm text-xs font-light mb-4">
              {t.footer.desc}
            </p>
            <div className="text-[11px] text-emerald-400">
              {t.footer.moldovaNotice}
            </div>
          </div>

          <div className="text-center md:text-right space-y-2">
            <div>{t.footer.phone}</div>
            <div>{t.footer.address}</div>
            <div className="text-[11px] text-slate-400 pt-4">
              {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
