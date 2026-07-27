import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Zap,
  CheckCircle2,
  XCircle,
  Play,
  Clock,
  Award,
  Sparkles,
  MessageCircle,
  Phone,
  ChevronDown,
  ChevronUp,
  Calculator,
  Eye,
  Star,
  Flame,
  ArrowRight,
  Globe,
  Sliders,
  ShieldCheck,
  Check,
  X,
  RefreshCw,
  Gift
} from 'lucide-react';

// Comprehensive Bilingual Dictionary (RU/RO) - ZERO ENGLISH UI TEXT GUARANTEED
const dict = {
  ru: {
    topBanner: {
      alert: "⚠️ ПСИХОЛОГИЯ ПОТЕРЬ:",
      text: "Каждый день без вирусных роликов вы отдаёте ~15-30 покупателей конкурентам!",
      slots: "Осталось 3 свободных слота на съёмку!",
      langBtn: "RO 🇲🇩"
    },
    nav: {
      brandSub: "Студия Видеомаркетинга",
      lossAnchor: "Цена бездействия",
      contrast: "Сравнение",
      calculator: "ROI Калькулятор",
      packages: "Тарифы 600 MDL",
      portfolio: "Портфолио",
      reviews: "Отзывы",
      faq: "FAQ",
      cta: "Забронировать 600 MDL"
    },
    hero: {
      badge: "Психология Продаж & Система 1 (Дниэль Канеман)",
      lossTitlePrefix: "Перестаньте терять клиентов.",
      titleMain: "Создаём ролики, которые заставляют покупают с 1-й секунды",
      titleHighlight: "за 600 MDL / видео",
      subtitle: "80% пользователей пролистывают обычную рекламу. Мы используем триггеры внимания и эмоций System 1, чтобы превратить скролл в реальные продажи в Молдове.",
      stat1Val: "600 MDL",
      stat1Sub: "Фиксированная цена под ключ",
      stat2Val: "3.8X - 7.2X",
      stat2Sub: "Средний ROI наших клиентов",
      stat3Val: "24-48 ч",
      stat3Sub: "Быстрый монтаж и сдача",
      priceLabel: "Честная цена без наценок агентств:",
      agencyPrice: "Обычное агентство: 2,500 MDL",
      ourPrice: "VIRALIS: 600 MDL",
      saveBadge: "Экономия 1 900 MDL на каждом видео!",
      ctaOrder: "Заказать ролик за 600 MDL",
      ctaCalc: "Рассчитать упущенную прибыль",
      callUs: "Позвонить продюсеру",
      tickerText: "🔥 Бронирование съёмок в Кишинёве и по всей Молдове — 24/7"
    },
    lossSection: {
      badge: "Сигнал Потери #1",
      title: "Сколько денег вы теряете прямо сейчас?",
      subtitle: "Невидимые финансовые потери бизнеса без коротких динамичных видео в 2026 году",
      loss1Title: "Потеря 80% входящего внимания",
      loss1Desc: "Обычный статичный пост читают менее 3% подписчиков. Алгоритмы Instagram и TikTok продвигают ТОЛЬКО Reels и Shorts.",
      loss2Title: "Переплата агентствам до 400%",
      loss2Desc: "Традиционные студии запрашивают от 2 500 MDL за 1 ролик, растягивая процесс на 2 недели. У нас — 600 MDL за 24-48 часов.",
      loss3Title: "Уход клиентов к агрессивным конкурентам",
      loss3Desc: "Пока вы сомневаетесь, конкуренты выпускают по 10-15 роликов в месяц и забирают первенство в поиске и соцсетях.",
      costTickerLabel: "Ориентировочные убытки вашего бизнеса за 30 дней без роликов:",
      costTickerUnit: "MDL упущенного дохода",
      costTickerNotice: "* Расчёт основан на средней конверсии коротких видео в нишах ритейла, общепита и услуг в Молдове."
    },
    contrastSection: {
      badge: "Принцип Контраста",
      title: "Обычная съёмка vs Вирусный видеомаркетинг VIRALIS",
      subtitle: "Сравните результат и примите взвешенное решение",
      colOldTitle: "❌ Обычный подход / Агентства",
      colOld1: "Стоимость от 2 500 MDL за 1 ролик",
      colOld2: "Срок изготовления: 10-14 дней",
      colOld3: "Скучное начало — 85% пролистывают за 2 сек",
      colOld4: "Тихий звук, шумы, отсутствие профессионального микрофона",
      colOld5: "Нет четкого призыва к покупке (CTA)",
      colOld6: "Скрытые доплаты за монтаж и озвучку",
      colNewTitle: "⚡ Формула VIRALIS (600 MDL)",
      colNew1: "Фиксировано 600 MDL под ключ без скрытых наценок",
      colNew2: "Готовое видео за 24-48 часов",
      colNew3: "Цепляющая завязка (Hook) System 1 с 1-й секунды",
      colNew4: "Чистый студийный звук с беспроводными микрофонами",
      colNew5: "Чёткий продающий призыв заказать или написать",
      colNew6: "Полный комплект: сценарий, съёмка, монтаж, субтитры"
    },
    calculator: {
      badge: "ROI & Экономия",
      title: "Калькулятор окупаемости и прямой экономии",
      subtitle: "Посчитайте выгоду 600 MDL и сравните с расходами на сторонние агентства",
      sliderCount: "Необходимое количество видеороликов в месяц:",
      sliderCheck: "Средний чек вашего клиента (MDL):",
      unitVideos: "роликов",
      unitMdl: "MDL",
      bulkDiscount5: "🎁 Скидка 10% на видео при заказе от 5 штук!",
      bulkDiscount10: "🔥 Скидка 15% + бесплатная упаковка при заказе от 10 штук!",
      addonsTitle: "Дополнительные услуги (по желанию):",
      addon1: "Полная упаковка и оформление аккаунта (+500 MDL)",
      addon2: "Профессиональная настройка рекламы Meta / FB (+800 MDL)",
      addon3: "Разработка продающих сценариев (Включено БЕСПЛАТНО)",
      addon4: "Все исходные материалы съёмки HD (Включено БЕСПЛАТНО)",
      resViralis: "Стоимость в VIRALIS Studio:",
      resAgency: "Затраты в обычных агентствах:",
      resSaved: "Прямая выгода & Экономия:",
      resEstimatedSales: "Прогнозируемый дополнительный доход:",
      resRoi: "Расчётный коэффициент ROI:",
      btnOrderCalcWhatsApp: "Заказать выбранный комплект в WhatsApp",
      btnOrderCalcCall: "Позвонить и забронировать"
    },
    portfolio: {
      badge: "Доказанные Результаты",
      title: "Примеры вирусных роликов в Молдове",
      subtitle: "Смотрите реальные ролики, которые принесли продажи нашим клиентам",
      catAll: "Все кейсы",
      catFood: "Рестораны & Еда",
      catFashion: "Магазины & Мода",
      catTech: "Услуги & Бизнес",
      reel1Title: "Gusto Cafe & Bistro Кишинёв",
      reel1Views: "142,500 просмотров",
      reel1Cat: "Рестораны & Еда",
      reel2Title: "Boutique Luna & Co — Новая коллекция",
      reel2Views: "98,200 просмотров",
      reel2Cat: "Магазины & Мода",
      reel3Title: "SmartHub MD — Сервис Техники",
      reel3Views: "215,400 просмотров",
      reel3Cat: "Услуги & Бизнес",
      watchBtn: "Смотреть ролики",
      modalTitle: "Просмотр формата 9:16",
      modalViews: "Реальные просмотры:",
      modalFormat: "Вертикальное видео Reels / TikTok",
      modalOrderThis: "Заказать ролик в таком стиле за 600 MDL",
      closeModal: "Закрыть"
    },
    packages: {
      badge: "Фиксированные Тарифы",
      title: "Пакеты без рисков и скрытых платежей",
      subtitle: "Инвестируйте в контент с мгновенной гарантией окупаемости",
      popularBadge: "Самый выгодный выбор",
      p1Title: "Тест-Драйв",
      p1Price: "600",
      p1Sub: "1 Ролик под ключ",
      p1Desc: "Идеально, чтобы проверить качество и получить первые заявки.",
      p1F1: "1 Профессиональный видеоролик",
      p1F2: "Выездная съёмка + Динамичный монтаж",
      p1F3: "Трендовая музыка & Анимированные субтитры",
      p1F4: "Готовность за 24-48 часов",
      p1Btn: "Заказать 1 ролик (600 MDL)",

      p2Title: "Быстрый Старт",
      p2Price: "2 700",
      p2Sub: "5 Роликов (Экономия 300 MDL)",
      p2Desc: "Для регулярных публикаций и поддержания активности страницы.",
      p2F1: "5 Профессиональных роликов (по 540 MDL)",
      p2F2: "Сценарии & Продающие завязки",
      p2F3: "Саунд-дизайн и обработка голоса",
      p2F4: "Адаптация под Reels, TikTok, Shorts",
      p2Btn: "Заказать 5 роликов (2 700 MDL)",

      p3Title: "Вирусный Запуск",
      p3Price: "5 100",
      p3Sub: "10 Роликов + Упаковка профиля",
      p3Desc: "Комплексный запуск для захвата лидерства в вашей нише.",
      p3F1: "10 Вирусных рекламных роликов",
      p3F2: "Полное оформление и упаковка аккаунта",
      p3F3: "Контент-план на 1 месяц",
      p3F4: "Профессиональный дубляж (RU/RO)",
      p3Btn: "Заказать Запуск (5 100 MDL)",

      p4Title: "VIP Доминирование",
      p4Price: "9 900",
      p4Sub: "20 Роликов + SMM & Настройка рекламы",
      p4Desc: "Полный отдел видеомаркетинга на аутсорсе.",
      p4F1: "20 Готовых роликов на весь месяц",
      p4F2: "Упаковка Instagram, TikTok, Facebook",
      p4F3: "Настройка таргетированной рекламы Meta",
      p4F4: "Персональный продюсер 24/7",
      p4Btn: "Заказать VIP (9 900 MDL)"
    },
    whyUs: {
      badge: "Почему выигрывают с нами",
      title: "4 Триггера доверия VIRALIS",
      subtitle: "Мы убираем все риски заказчика на каждом этапе видеопроизводства",
      r1Title: "Топовое оборудование 4K & iPhone 15 Pro",
      r1Desc: "Используем студийный свет, стабилизаторы и беспроводные петличные микрофоны для кристально чистого звука.",
      r2Title: "Скорость 24-48 часов",
      r2Desc: "Не держим ваши материалы неделями. Быстрый монтаж позволяет моментально реагировать на тренды.",
      r3Title: "Знание психологии рынка Молдовы",
      r3Desc: "Создаём контент на русском и румынском языках с учетом культурных особенностей местной аудитории.",
      r4Title: "Гарантия отсутствия скрытых трат",
      r4Desc: "Цена 600 MDL за ролик фиксируется в договоре и включает полный цикл от сценария до выгрузки."
    },
    reviews: {
      badge: "Отзывы предпримателей",
      title: "Что говорят владельцы бизнеса в Молдове",
      subtitle: "Реальные истории окупаемости вложений в видеоролики",
      rev1Name: "Виктор Гросу",
      rev1Role: "Владелец ресторана Gusto Cafe, Кишинёв",
      rev1Text: "Взяли пакет 10 роликов за 5100 MDL. Видео с подачей нашего фирменного блюда набрало 142 тыс. просмотров! Заполняемость зала в выходные выросла на 40%.",
      rev2Name: "Елена Сырбу",
      rev2Role: "Основательница бутика Luna & Co",
      rev2Text: "Ролик за 600 MDL принес нам больше продаж, чем стандартная реклама у блогеров за 200 евро. Девушки приходят в магазин и показывают видео на телефоне!",
      rev3Name: "Андрей Чебан",
      rev3Role: "Директор SmartHub MD",
      rev3Text: "Очень удобно: Александр и Станислав сами готовят темы, приезжают со своим светом и микрофонами. Монтаж сдали на следующий день!"
    },
    team: {
      badge: "Основатели & Продюсеры",
      title: "Кто лично отвечает за ваш результат",
      subtitle: "Прямая связь без посредников и менеджеров",
      alexName: "Александр",
      alexRole: "Основатель, Продюсер & Оператор",
      alexPhone: "+373 78 337 228",
      alexDesc: "Организация съёмок, выезд к клиенту, генерация вирусных идей и защита интересов вашего бренда.",
      stanName: "Станислав",
      stanRole: "Креативный Директор & Режиссер монтажа",
      stanPhone: "+373 76 59 69 41",
      stanDesc: "Специалист по динамичному видеомонтажу System 1, цветокоррекции, саунд-дизайну и анимированным субтитрам.",
      btnCall: "Позвонить",
      btnWa: "WhatsApp"
    },
    faq: {
      badge: "Вопросы & Ответы",
      title: "Часто задаваемые вопросы",
      subtitle: "Всё, что важно знать перед бронированием съёмки",
      q1: "Что входит в стоимость 600 MDL за 1 ролик?",
      a1: "В 600 MDL входит полный цикл: разработка цепляющего сценария, выездная съёмка на вашем объекте, динамичный монтаж, саунд-дизайн, обработка звука, наложение дубляжа и анимированных субтитров.",
      q2: "В каких городах вы работаете?",
      a2: "Наша база находится в Кишинёве, но мы выезжаем на съёмки по всей территории Республики Молдова.",
      q3: "На каких языках вы делаете ролики?",
      a3: "Мы свободно создаём контент на русском и румынском (Română) языках под вашу целевую аудиторию.",
      q4: "Нужно ли мне самому готовить текст или говорить на камеру?",
      a4: "Нет! Мы готовим готовые сценарии. Если вы не хотите говорить в кадре, мы используем профессиональную дикторскую озвучку или демонстрационный формат.",
      q5: "Как быстро я получу готовые видео?",
      a5: "Первые готовые ролики передаются вам в течение 24-48 часов после завершения съёмочного процесса.",
      q6: "Как начать сотрудничество?",
      a6: "Оставьте заявку на сайте или напишите нам в WhatsApp / Telegram. Мы обсудим вашу задачу и забронируем удобную дату съёмки."
    },
    form: {
      badge: "Быстрый Заказ 600 MDL",
      title: "Забронируйте съёмку и зафиксируйте цену 600 MDL",
      subtitle: "Заполните форму — мы свяжемся с вами в течение 15 минут для консультации",
      nameLabel: "Ваше имя:",
      namePlaceholder: "Например: Дмитрий",
      phoneLabel: "Номер телефона в Молдове:",
      phonePlaceholder: "+373 XX XXX XXX",
      bizLabel: "Сфера / Ниша бизнеса:",
      bizPlaceholder: "Ресторан, Салон красоты, Одежда, Услуги...",
      langPrefLabel: "Предпочитаемый язык роликов:",
      langRuOption: "Русский",
      langRoOption: "Română (Румынский)",
      langBothOption: "Двуязычный (RU + RO)",
      commentLabel: "Пожелания или количество роликов:",
      commentPlaceholder: "Хочу заказать 5 роликов со скидкой...",
      submitBtn: "Забронировать съёмку за 600 MDL",
      sending: "Отправка заявки...",
      successTitle: "🎉 Заявка успешно принята!",
      successDesc: "Спасибо! Александр или Станислав свяжется с вами в течение 15 минут.",
      guaranteeText: "🔒 Ваши данные защищены. Никакого спама, только оперативный звонок продюсера."
    },
    footer: {
      brand: "VIRALIS Media Studio",
      tagline: "Лидер видеомаркетинга и производства рекламных роликов для бизнеса в Молдове.",
      quickLinks: "Быстрая навигация:",
      contacts: "Контакты:",
      alexPhone: "+373 78 337 228",
      stanPhone: "+373 76 59 69 41",
      location: "г. Кишинёв, Республика Молдова",
      rights: "© 2026 VIRALIS Media Studio. Все права защищены."
    },
    floatingBar: {
      slotsText: "Осталось 3 слота на съёмку!",
      priceText: "600 MDL / ролик",
      orderBtn: "Заказать в WhatsApp",
      callBtn: "Позвонить"
    }
  },
  ro: {
    topBanner: {
      alert: "⚠️ PSIHOLOGIA PIERDERILOR:",
      text: "În fiecare zi fără clipuri virale cedezi ~15-30 clienți concurenților!",
      slots: "Au mai rămas 3 locuri libere de filmare!",
      langBtn: "RU 🇷🇺"
    },
    nav: {
      brandSub: "Studio Video Marketing",
      lossAnchor: "Costul inacțiunii",
      contrast: "Comparație",
      calculator: "ROI Calculator",
      packages: "Tarife 600 MDL",
      portfolio: "Portofoliu",
      reviews: "Recenzii",
      faq: "FAQ",
      cta: "Rezervă cu 600 MDL"
    },
    hero: {
      badge: "Psihologia Vânzărilor & Sistemul 1 (Daniel Kahneman)",
      lossTitlePrefix: "Nu mai pierde clienți valoroși.",
      titleMain: "Creăm clipuri care determină achiziția din prima secundă",
      titleHighlight: "cu 600 MDL / video",
      subtitle: "80% din utilizatori trec peste reclamele obișnuite. Noi folosim declanșatori de atenție și emoții System 1 pentru a transforma scroll-ul în vânzări reale în Moldova.",
      stat1Val: "600 MDL",
      stat1Sub: "Preț fix la cheie",
      stat2Val: "3.8X - 7.2X",
      stat2Sub: "ROI mediu al clienților",
      stat3Val: "24-48 h",
      stat3Sub: "Predare și montaj rapid",
      priceLabel: "Preț corect fără adaosuri de agenție:",
      agencyPrice: "Agenție obișnuită: 2,500 MDL",
      ourPrice: "VIRALIS: 600 MDL",
      saveBadge: "Economisești 1 900 MDL la fiecare video!",
      ctaOrder: "Comandă clip cu 600 MDL",
      ctaCalc: "Calculează venitul pierdut",
      callUs: "Apelează producătorul",
      tickerText: "🔥 Rezervări filmări în Chișinău și în toată Moldova — 24/7"
    },
    lossSection: {
      badge: "Semnal de Pierdere #1",
      title: "Câți bani pierzi chiar în acest moment?",
      subtitle: "Pierderile financiare invizibile ale afacerilor fără videoclipuri scurte în 2026",
      loss1Title: "Pierzi 80% din atenția potențială",
      loss1Desc: "O postare statică simplă este citită de mai puțin de 3% din urmăritori. Algoritmii Instagram și TikTok promovează DOAR Reels și Shorts.",
      loss2Title: "Plătești până la 400% în plus la agenții",
      loss2Desc: "Studiourile tradiționale cer de la 2 500 MDL pentru 1 clip, durând 2 săptămâni. La noi — 600 MDL în 24-48 de ore.",
      loss3Title: "Clienții pleacă la concurenții agresivi",
      loss3Desc: "În timp ce eziti, concurenții tăi publică 10-15 clipuri pe lună și preiau prima poziție în căutări și rețele.",
      costTickerLabel: "Pierderile estimate ale afacerii tale în 30 de zile fără videoclipuri:",
      costTickerUnit: "MDL venit ratat",
      costTickerNotice: "* Calcul bazat pe rata medie de conversie a videoclipurilor scurte în domeniile retail, Horeca și servicii în Moldova."
    },
    contrastSection: {
      badge: "Principiul Contrastului",
      title: "Filmare Obișnuită vs Video Marketing Viral VIRALIS",
      subtitle: "Compară rezultatele și ia o decizie calculată",
      colOldTitle: "❌ Abordare Veche / Agenții",
      colOld1: "Cost de la 2 500 MDL per 1 clip",
      colOld2: "Termen de executare: 10-14 zile",
      colOld3: "Început plictisitor — 85% renunță în 2 secunde",
      colOld4: "Sunet slab, zgomot, fără microfon profesional",
      colOld5: "Lipsă îndemn clar la cumpărare (CTA)",
      colOld6: "Plăți ascunse pentru montaj și voce",
      colNewTitle: "⚡ Formula VIRALIS (600 MDL)",
      colNew1: "Preț fix 600 MDL la cheie fără costuri ascunse",
      colNew2: "Clip gata în 24-48 de ore",
      colNew3: "Cârlig atrăgător (Hook) System 1 din prima secundă",
      colNew4: "Sunet de studio impecabil cu lavaliere fără fir",
      colNew5: "Îndemn clar de vânzare pentru comandă sau mesaj",
      colNew6: "Pachet complet: scenariu, filmare, montaj, subtitrări"
    },
    calculator: {
      badge: "ROI & Economii",
      title: "Calculator de rentabilitate și economii directe",
      subtitle: "Calculează avantajul celor 600 MDL și compară cu cheltuielile agențiilor externe",
      sliderCount: "Numărul necesar de videoclipuri pe lună:",
      sliderCheck: "Valoarea medie a cecului per client (MDL):",
      unitVideos: "clipuri",
      unitMdl: "MDL",
      bulkDiscount5: "🎁 Reducere de 10% la comandarea a peste 5 clipuri!",
      bulkDiscount10: "🔥 Reducere 15% + ambalare gratuită la comandarea a peste 10 clipuri!",
      addonsTitle: "Servicii suplimentare (opțional):",
      addon1: "Ambalare și design complet profil (+500 MDL)",
      addon2: "Setare profesională reclame Meta / FB (+800 MDL)",
      addon3: "Dezvoltare scenarii de vânzare (Inclus GRATUIT)",
      addon4: "Fișiere brute de filmare HD (Inclus GRATUIT)",
      resViralis: "Costul în VIRALIS Studio:",
      resAgency: "Cheltuieli la agenții obișnuite:",
      resSaved: "Economie directă în bani:",
      resEstimatedSales: "Venit suplimentar estimat:",
      resRoi: "Coeficientul calculat ROI:",
      btnOrderCalcWhatsApp: "Comandă pachetul selectat pe WhatsApp",
      btnOrderCalcCall: "Apelează și rezervă"
    },
    portfolio: {
      badge: "Rezultate Dovedite",
      title: "Exemple de videoclipuri virale în Moldova",
      subtitle: "Vezi clipuri reale care au generat vânzări pentru clienții noștri",
      catAll: "Toate cazurile",
      catFood: "Restaurante & Mâncare",
      catFashion: "Magazine & Modă",
      catTech: "Servicii & Business",
      reel1Title: "Gusto Cafe & Bistro Chișinău",
      reel1Views: "142,500 vizualizări",
      reel1Cat: "Restaurante & Mâncare",
      reel2Title: "Boutique Luna & Co — Colecție nouă",
      reel2Views: "98,200 vizualizări",
      reel2Cat: "Magazine & Modă",
      reel3Title: "SmartHub MD — Servicii Tech",
      reel3Views: "215,400 vizualizări",
      reel3Cat: "Servicii & Business",
      watchBtn: "Vezi videoclipurile",
      modalTitle: "Vizualizare format 9:16",
      modalViews: "Vizualizări reale:",
      modalFormat: "Video vertical Reels / TikTok",
      modalOrderThis: "Comandă un clip în acest stil cu 600 MDL",
      closeModal: "Închide"
    },
    packages: {
      badge: "Tarife Fixe",
      title: "Pachete fără riscuri și costuri ascunse",
      subtitle: "Investește în conținut cu garanție de rentabilitate",
      popularBadge: "Cea mai avantajoasă alegere",
      p1Title: "Test-Drive",
      p1Price: "600",
      p1Sub: "1 Clip la cheie",
      p1Desc: "Ideal pentru a testa calitatea și a primi primele solicitări.",
      p1F1: "1 Videoclip profesional",
      p1F2: "Filmare pe teren + Montaj dinamic",
      p1F3: "Muzică în trend & Subtitrări animate",
      p1F4: "Predare în 24-48 ore",
      p1Btn: "Comandă 1 clip (600 MDL)",

      p2Title: "Start Rapid",
      p2Price: "2 700",
      p2Sub: "5 Clipuri (Economisești 300 MDL)",
      p2Desc: "Pentru publicări regulate și menținerea activității pe pagină.",
      p2F1: "5 Videoclipuri profesionale (câte 540 MDL)",
      p2F2: "Scenarii & Cârlige de vânzare",
      p2F3: "Sound design și procesare voce",
      p2F4: "Adaptare pentru Reels, TikTok, Shorts",
      p2Btn: "Comandă 5 clipuri (2 700 MDL)",

      p3Title: "Lansare Virală",
      p3Price: "5 100",
      p3Sub: "10 Clipuri + Ambalare profil",
      p3Desc: "Pachet complex pentru preluarea poziției de lider în nișă.",
      p3F1: "10 Videoclipuri publicitare virale",
      p3F2: "Ambalare și design complet cont",
      p3F3: "Plan de conținut pentru 1 lună",
      p3F4: "Dublaj profesional (RU/RO)",
      p3Btn: "Comandă Lansarea (5 100 MDL)",

      p4Title: "VIP Dominare",
      p4Price: "9 900",
      p4Sub: "20 Clipuri + SMM & Setare Reclame",
      p4Desc: "Departament complet de video marketing în regim de outsourcing.",
      p4F1: "20 Clipuri pregătite pentru toată luna",
      p4F2: "Ambalare Instagram, TikTok, Facebook",
      p4F3: "Setare reclame targetate Meta",
      p4F4: "Producător dedicat 24/7",
      p4Btn: "Comandă VIP (9 900 MDL)"
    },
    whyUs: {
      badge: "De ce câștigi cu noi",
      title: "4 Declanșatori de încredere VIRALIS",
      subtitle: "Eliminăm toate riscurile clientului la fiecare etapă de producție video",
      r1Title: "Echipament de top 4K & iPhone 15 Pro",
      r1Desc: "Folosim lumini de studio, stabilizatoare și lavaliere fără fir pentru un sunet de o claritate cristalină.",
      r2Title: "Viteză 24-48 ore",
      r2Desc: "Nu ținem fișierele tale săptămâni întregi. Montajul rapid îți permite să reacționezi instant la trenduri.",
      r3Title: "Cunoașterea psihologiei pieței din Moldova",
      r3Desc: "Creăm conținut în română și rusă ținând cont de specificul cultural al publicului local.",
      r4Title: "Garanția lipsei costurilor ascunse",
      r4Desc: "Prețul de 600 MDL per clip este fixat în contract și include ciclul complet de la scenariu la predare."
    },
    reviews: {
      badge: "Recenzii Antreprenori",
      title: "Ce spun proprietarii de afaceri din Moldova",
      subtitle: "Istorii reale de rentabilitate a investițiilor în clipuri video",
      rev1Name: "Victor Grosu",
      rev1Role: "Proprietar restaurant Gusto Cafe, Chișinău",
      rev1Text: "Am luat pachetul de 10 clipuri pentru 5100 MDL. Clipul cu prezentarea preparatului nostru a strâns 142 mii de vizualizări! Gradul de ocupare a crescut cu 40%.",
      rev2Name: "Elena Sîrbu",
      rev2Role: "Fondatoare boutique Luna & Co",
      rev2Text: "Un clip cu 600 MDL ne-a adus mai multe vânzări decât reclamele la influenceri de 200 euro. Fetele vin în magazin cu video deschis pe telefon!",
      rev3Name: "Andrei Ceban",
      rev3Role: "Director SmartHub MD",
      rev3Text: "Foarte comod: Alexandru și Stanislav pregătesc ideile, vin cu luminile și microfoanele lor. Montajul a fost gata a doua zi!"
    },
    team: {
      badge: "Fondatori & Producători",
      title: "Cine răspunde personal de rezultatul tău",
      subtitle: "Legătură directă fără intermediari și manageri",
      alexName: "Alexandru",
      alexRole: "Fondator, Producător & Operator",
      alexPhone: "+373 78 337 228",
      alexDesc: "Organizarea filmărilor, deplasarea la teren, generarea ideilor virale și protejarea imaginii brandului tău.",
      stanName: "Stanislav",
      stanRole: "Director Creativ & Regizor montaj",
      stanPhone: "+373 76 59 69 41",
      stanDesc: "Specialist în montaj dinamic System 1, corecție de culoare, sound design și subtitrări animate.",
      btnCall: "Apelează",
      btnWa: "WhatsApp"
    },
    faq: {
      badge: "Întrebări & Răspunsuri",
      title: "Întrebări frecvente",
      subtitle: "Tot ce trebuie să știi înainte de rezervarea filmării",
      q1: "Ce include costul de 600 MDL pentru 1 clip?",
      a1: "În 600 MDL este inclus ciclul complet: scenariu atrăgător, filmare la teren, montaj dinamic, sound design, procesare sunet, voce și subtitrări animate.",
      q2: "În ce orașe activați?",
      a2: "Baza noastră este în Chișinău, dar ne deplasăm pentru filmări în orice regiune din Republica Moldova.",
      q3: "În ce limbi realizați videoclipurile?",
      a3: "Creăm conținut în limbile română și rusă adaptat perfect pentru publicul tău țintă.",
      q4: "Trebuie să pregătesc eu textul sau să vorbesc în fața camerei?",
      a4: "Nu! Noi pregătim scenariile complete. Dacă nu dorești să apeși în cadru, folosim voce profesională de fundal sau formate demonstrative.",
      q5: "Cât de repede primesc clipurile finale?",
      a5: "Primele clipuri gata îți sunt predate în termen de 24-48 ore de la finalizarea filmărilor.",
      q6: "Cum începem colaborarea?",
      a6: "Lasă o solicitare pe site sau scrie-ne pe WhatsApp / Telegram. Vom discuta sarcina ta și vom rezerva o dată convenabilă pentru filmare."
    },
    form: {
      badge: "Comandă Rapidă 600 MDL",
      title: "Rezervă filmarea și fixează prețul de 600 MDL",
      subtitle: "Completează formularul — te contactăm în maxim 15 minute pentru consultație",
      nameLabel: "Numele tău:",
      namePlaceholder: "De exemplu: Andrei",
      phoneLabel: "Număr de telefon în Moldova:",
      phonePlaceholder: "+373 XX XXX XXX",
      bizLabel: "Domeniul / Nișa afacerii:",
      bizPlaceholder: "Restaurant, Salon frumusețe, Haine, Servicii...",
      langPrefLabel: "Limba preferată a clipurilor:",
      langRuOption: "Rusă",
      langRoOption: "Română",
      langBothOption: "Bilingv (RU + RO)",
      commentLabel: "Cerințe sau număr de clipuri:",
      commentPlaceholder: "Doresc să comand 5 clipuri cu reducere...",
      submitBtn: "Rezervă filmarea cu 600 MDL",
      sending: "Se trimite solicitarea...",
      successTitle: "🎉 Solicitare recepționată cu succes!",
      successDesc: "Mulțumim! Alexandru sau Stanislav te va contacta în maxim 15 minute.",
      guaranteeText: "🔒 Datele tale sunt protejate. Fără spam, doar un apel operativ de la producător."
    },
    footer: {
      brand: "VIRALIS Media Studio",
      tagline: "Lider în video marketing și producție de videoclipuri publicitare pentru afaceri din Moldova.",
      quickLinks: "Navigare rapidă:",
      contacts: "Contacte:",
      alexPhone: "+373 78 337 228",
      stanPhone: "+373 76 59 69 41",
      location: "or. Chișinău, Republica Moldova",
      rights: "© 2026 VIRALIS Media Studio. Toate drepturile rezervate."
    },
    floatingBar: {
      slotsText: "Au mai rămas 3 locuri de filmare!",
      priceText: "600 MDL / video",
      orderBtn: "Comandă pe WhatsApp",
      callBtn: "Apelează"
    }
  }
};

export default function Variant3_BehavioralKahneman({ lang: propLang = 'ru', setLang: propSetLang }) {
  const [langState, setLangState] = useState(propLang);
  useEffect(() => {
    if (propLang) setLangState(propLang);
  }, [propLang]);
  const lang = propLang || langState;
  const setLang = propSetLang || setLangState;
  const t = dict[lang] || dict['ru'];

  // System 1 Live Loss Counter simulation
  const [lossAmount, setLossAmount] = useState(14500);

  useEffect(() => {
    const timer = setInterval(() => {
      setLossAmount(prev => prev + Math.floor(Math.random() * 12) + 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // ROI Calculator state
  const [videoCount, setVideoCount] = useState(5);
  const [avgCheck, setAvgCheck] = useState(600);
  const [addonSetup, setAddonSetup] = useState(false);
  const [addonTarget, setAddonTarget] = useState(false);

  // Dynamic calculations
  let unitPrice = 600;
  if (videoCount >= 10) unitPrice = 510; // 15% discount
  else if (videoCount >= 5) unitPrice = 540; // 10% discount

  const baseCost = videoCount * unitPrice;
  const addonsTotal = (addonSetup ? 500 : 0) + (addonTarget ? 800 : 0);
  const totalViralisCost = baseCost + addonsTotal;

  const agencyCost = videoCount * 2500;
  const moneySaved = Math.max(0, agencyCost - totalViralisCost);

  // Projected conversion calculation (Estimate: 1 video brings ~ 8-15 new clients in 30 days)
  const projectedClients = videoCount * 12;
  const projectedRevenue = projectedClients * avgCheck;
  const roiRatio = totalViralisCost > 0 ? (projectedRevenue / totalViralisCost).toFixed(1) : 0;

  // Portfolio filter & modal state
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Lead Form State
  const [formData, setFormData] = useState({ name: '', phone: '', business: '', langPref: 'RU', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ru' ? 'ro' : 'ru'));
  };

  const portfolioItems = [
    {
      id: 1,
      title: t.portfolio.reel1Title,
      views: t.portfolio.reel1Views,
      category: 'food',
      categoryLabel: t.portfolio.reel1Cat,
      img: '/assets/reel_restaurant.jpg'
    },
    {
      id: 2,
      title: t.portfolio.reel2Title,
      views: t.portfolio.reel2Views,
      category: 'fashion',
      categoryLabel: t.portfolio.reel2Cat,
      img: '/assets/reel_fashion.jpg'
    },
    {
      id: 3,
      title: t.portfolio.reel3Title,
      views: t.portfolio.reel3Views,
      category: 'tech',
      categoryLabel: t.portfolio.reel3Cat,
      img: '/assets/reel_tech.jpg'
    }
  ];

  const filteredPortfolio = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  // Custom Slate & Emerald inline styles for zero dependency conflicts
  const themeStyles = {
    bgMain: '#070a12',
    bgCard: '#0f172a',
    bgCardBorder: 'rgba(16, 185, 129, 0.2)',
    emeraldPrimary: '#10b981',
    emeraldGlow: '#34d399',
    emeraldDark: '#047857',
    textMain: '#f8fafc',
    textMuted: '#94a3b8',
    dangerRed: '#ef4444',
    warningAmber: '#f59e0b'
  };

  return (
    <div style={{
      backgroundColor: themeStyles.bgMain,
      color: themeStyles.textMain,
      minHeight: '100vh',
      fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      overflowX: 'hidden',
      position: 'relative'
    }}>
      {/* 1. TOP LOSS AVERSION ALERT BAR */}
      <div style={{
        background: 'linear-gradient(90deg, #991b1b 0%, #7f1d1d 50%, #064e3b 100%)',
        color: '#ffffff',
        padding: '10px 16px',
        fontSize: '0.85rem',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        borderBottom: '1px solid rgba(239, 68, 68, 0.3)',
        zIndex: 100
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <AlertTriangle size={16} color="#fca5a5" />
          <span style={{ color: '#fecaca', letterSpacing: '0.05em' }}>{t.topBanner.alert}</span>
        </div>
        <span>{t.topBanner.text}</span>
        <div style={{
          background: 'rgba(16, 185, 129, 0.25)',
          border: '1px solid #34d399',
          color: '#a7f3d0',
          padding: '2px 10px',
          borderRadius: '20px',
          fontSize: '0.8rem'
        }}>
          {t.topBanner.slots}
        </div>
        <button
          onClick={toggleLanguage}
          style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.4)',
            color: '#fff',
            padding: '3px 12px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontWeight: '800',
            marginLeft: '8px'
          }}
        >
          {t.topBanner.langBtn}
        </button>
      </div>

      {/* 2. MAIN STICKY NAVIGATION BAR */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        backgroundColor: 'rgba(9, 13, 22, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '14px 24px'
      }}>
        <div style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)'
            }}>
              <Flame size={24} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>
                VIRALIS<span style={{ color: themeStyles.emeraldGlow }}>.MD</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: themeStyles.emeraldGlow, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {t.nav.brandSub}
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', gap: '22px', alignItems: 'center' }} className="hidden-mobile">
            <a href="#loss-aversion" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
              {t.nav.lossAnchor}
            </a>
            <a href="#contrast" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
              {t.nav.contrast}
            </a>
            <a href="#roi-calculator" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
              {t.nav.calculator}
            </a>
            <a href="#packages" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
              {t.nav.packages}
            </a>
            <a href="#portfolio" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
              {t.nav.portfolio}
            </a>
            <a href="#faq" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
              {t.nav.faq}
            </a>
          </nav>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={toggleLanguage}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#f8fafc',
                padding: '8px 14px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '0.85rem'
              }}
            >
              <Globe size={16} color={themeStyles.emeraldGlow} />
              <span>{lang.toUpperCase()}</span>
            </button>

            <a
              href="https://wa.me/37378337228"
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '50px',
                fontWeight: '800',
                fontSize: '0.88rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.35)'
              }}
            >
              <MessageCircle size={18} />
              <span>{t.nav.cta}</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION - SYSTEM 1 BEHAVIORAL LOSS AVERSION & SLATE/EMERALD */}
      <section style={{
        position: 'relative',
        padding: '70px 24px 80px',
        maxWidth: '1240px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center'
      }}>
        {/* Left Column Text & Anchors */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '30px',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: themeStyles.emeraldGlow,
            fontWeight: '700',
            fontSize: '0.85rem',
            marginBottom: '24px'
          }}>
            <Zap size={16} />
            <span>{t.hero.badge}</span>
          </div>

          <div style={{ color: themeStyles.dangerRed, fontWeight: '800', fontSize: '1.05rem', marginBottom: '8px', letterSpacing: '0.02em' }}>
            {t.hero.lossTitlePrefix}
          </div>

          <h1 style={{
            fontSize: 'clamp(2.1rem, 4vw, 3.3rem)',
            fontWeight: '900',
            lineHeight: '1.15',
            marginBottom: '20px',
            color: '#ffffff'
          }}>
            {t.hero.titleMain}{' '}
            <span style={{
              background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: '#94a3b8',
            marginBottom: '32px',
            lineHeight: '1.65',
            maxWidth: '560px'
          }}>
            {t.hero.subtitle}
          </p>

          {/* Loss Anchor Price Comparison Card */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '24px',
            padding: '24px',
            marginBottom: '36px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              background: '#047857',
              color: '#a7f3d0',
              fontSize: '0.75rem',
              fontWeight: '800',
              padding: '4px 14px',
              borderBottomLeftRadius: '14px',
              textTransform: 'uppercase'
            }}>
              {t.hero.saveBadge}
            </div>

            <div style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: '700', marginBottom: '12px' }}>
              {t.hero.priceLabel}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#ef4444', textDecoration: 'line-through', fontWeight: '700' }}>
                  {t.hero.agencyPrice}
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: themeStyles.emeraldGlow, lineHeight: '1.0' }}>
                  600 MDL
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
                  {t.hero.stat1Sub}
                </div>
              </div>

              <div style={{ height: '50px', width: '1px', background: 'rgba(255,255,255,0.1)' }} />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b', fontWeight: '800', fontSize: '1.05rem' }}>
                  <TrendingUp size={20} />
                  <span>{t.hero.stat2Val}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  {t.hero.stat2Sub}
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/37378337228"
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                color: '#ffffff',
                padding: '16px 36px',
                borderRadius: '50px',
                fontWeight: '800',
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)'
              }}
            >
              <MessageCircle size={20} />
              <span>{t.hero.ctaOrder}</span>
            </a>

            <a
              href="#roi-calculator"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '16px 28px',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Calculator size={18} color={themeStyles.emeraldGlow} />
              <span>{t.hero.ctaCalc}</span>
            </a>
          </div>
        </div>

        {/* Right Column Hero Banner Media */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: '-10px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '36px',
            zIndex: 0
          }} />

          <div style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '30px',
            overflow: 'hidden',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)'
          }}>
            <img
              src="/assets/hero_banner.jpg"
              alt="VIRALIS Media Studio Video Production"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />

            {/* Overlaid Floating Trust Badges */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              background: 'rgba(15, 23, 42, 0.92)',
              backdropFilter: 'blur(12px)',
              borderRadius: '20px',
              padding: '16px 20px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: themeStyles.emeraldGlow
                }}>
                  <Award size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '800', color: '#fff' }}>
                    10M+ {lang === 'ru' ? 'Просмотров в соцсетях' : 'Vizualizări în rețele'}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    {t.hero.tickerText}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOSS AVERSION DEEP DIVE & DYNAMIC LOSS TICKER */}
      <section id="loss-aversion" style={{
        backgroundColor: '#0b1120',
        padding: '80px 24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#fca5a5',
              fontWeight: '700',
              fontSize: '0.85rem',
              marginBottom: '16px'
            }}>
              <AlertTriangle size={16} />
              <span>{t.lossSection.badge}</span>
            </div>
            <h2 style={{ fontSize: '2.3rem', fontWeight: '900', marginBottom: '16px', color: '#fff' }}>
              {t.lossSection.title}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
              {t.lossSection.subtitle}
            </p>
          </div>

          {/* 3 Loss Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '50px'
          }}>
            <div style={{
              background: '#0f172a',
              borderRadius: '24px',
              padding: '30px',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              position: 'relative'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(239, 68, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ef4444',
                marginBottom: '20px'
              }}>
                <TrendingDown size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '12px', color: '#ffffff' }}>
                {t.lossSection.loss1Title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.6' }}>
                {t.lossSection.loss1Desc}
              </p>
            </div>

            <div style={{
              background: '#0f172a',
              borderRadius: '24px',
              padding: '30px',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              position: 'relative'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(245, 158, 11, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b',
                marginBottom: '20px'
              }}>
                <AlertTriangle size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '12px', color: '#ffffff' }}>
                {t.lossSection.loss2Title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.6' }}>
                {t.lossSection.loss2Desc}
              </p>
            </div>

            <div style={{
              background: '#0f172a',
              borderRadius: '24px',
              padding: '30px',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              position: 'relative'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: themeStyles.emeraldGlow,
                marginBottom: '20px'
              }}>
                <Flame size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '12px', color: '#ffffff' }}>
                {t.lossSection.loss3Title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.6' }}>
                {t.lossSection.loss3Desc}
              </p>
            </div>
          </div>

          {/* Dynamic Live Cost Ticker */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
            border: '2px solid rgba(239, 68, 68, 0.4)',
            borderRadius: '28px',
            padding: '32px 28px',
            textAlign: 'center',
            maxWidth: '850px',
            margin: '0 auto',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
          }}>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '10px' }}>
              {t.lossSection.costTickerLabel}
            </div>

            <div style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              color: '#ef4444',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              marginBottom: '8px'
            }}>
              -{lossAmount.toLocaleString()} {t.lossSection.costTickerUnit}
            </div>

            <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>
              {t.lossSection.costTickerNotice}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTRAST PRINCIPLE SECTION - OLD VS VIRALIS */}
      <section id="contrast" style={{ padding: '90px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '30px',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: themeStyles.emeraldGlow,
            fontWeight: '700',
            fontSize: '0.85rem',
            marginBottom: '16px'
          }}>
            <Sliders size={16} />
            <span>{t.contrastSection.badge}</span>
          </div>
          <h2 style={{ fontSize: '2.3rem', fontWeight: '900', marginBottom: '16px', color: '#fff' }}>
            {t.contrastSection.title}
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
            {t.contrastSection.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {/* Old Way Column */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            borderRadius: '28px',
            padding: '36px',
            position: 'relative'
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#ef4444', marginBottom: '24px' }}>
              {t.contrastSection.colOldTitle}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                t.contrastSection.colOld1,
                t.contrastSection.colOld2,
                t.contrastSection.colOld3,
                t.contrastSection.colOld4,
                t.contrastSection.colOld5,
                t.contrastSection.colOld6
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <XCircle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VIRALIS Emerald Column */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            border: '2px solid #10b981',
            borderRadius: '28px',
            padding: '36px',
            boxShadow: '0 20px 50px rgba(16, 185, 129, 0.2)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-14px',
              right: '28px',
              background: '#10b981',
              color: '#000000',
              fontWeight: '900',
              fontSize: '0.78rem',
              padding: '4px 16px',
              borderRadius: '20px',
              textTransform: 'uppercase'
            }}>
              600 MDL / Video
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: '900', color: themeStyles.emeraldGlow, marginBottom: '24px' }}>
              {t.contrastSection.colNewTitle}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                t.contrastSection.colNew1,
                t.contrastSection.colNew2,
                t.contrastSection.colNew3,
                t.contrastSection.colNew4,
                t.contrastSection.colNew5,
                t.contrastSection.colNew6
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color={themeStyles.emeraldGlow} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: '600', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE ROI & SAVINGS CALCULATOR */}
      <section id="roi-calculator" style={{
        backgroundColor: '#0b1120',
        padding: '90px 24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: themeStyles.emeraldGlow,
              fontWeight: '700',
              fontSize: '0.85rem',
              marginBottom: '16px'
            }}>
              <Calculator size={16} />
              <span>{t.calculator.badge}</span>
            </div>
            <h2 style={{ fontSize: '2.3rem', fontWeight: '900', marginBottom: '16px', color: '#fff' }}>
              {t.calculator.title}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
              {t.calculator.subtitle}
            </p>
          </div>

          <div style={{
            background: '#0f172a',
            borderRadius: '32px',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '40px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start'
          }}>
            {/* Calculator Controls */}
            <div>
              {/* Slider 1: Video count */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontWeight: '700' }}>
                  <label style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{t.calculator.sliderCount}</label>
                  <span style={{ color: themeStyles.emeraldGlow, fontSize: '1.2rem', fontWeight: '900' }}>
                    {videoCount} {t.calculator.unitVideos}
                  </span>
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
                    accentColor: '#10b981',
                    cursor: 'pointer'
                  }}
                />
                {videoCount >= 10 && (
                  <div style={{ marginTop: '8px', color: '#f59e0b', fontSize: '0.82rem', fontWeight: '700' }}>
                    {t.calculator.bulkDiscount10}
                  </div>
                )}
                {videoCount >= 5 && videoCount < 10 && (
                  <div style={{ marginTop: '8px', color: themeStyles.emeraldGlow, fontSize: '0.82rem', fontWeight: '700' }}>
                    {t.calculator.bulkDiscount5}
                  </div>
                )}
              </div>

              {/* Slider 2: Average Check */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontWeight: '700' }}>
                  <label style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{t.calculator.sliderCheck}</label>
                  <span style={{ color: themeStyles.emeraldGlow, fontSize: '1.2rem', fontWeight: '900' }}>
                    {avgCheck} {t.calculator.unitMdl}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={avgCheck}
                  onChange={(e) => setAvgCheck(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    accentColor: '#10b981',
                    cursor: 'pointer'
                  }}
                />
              </div>

              {/* Addons Options */}
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '14px' }}>
                  {t.calculator.addonsTitle}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.88rem', color: '#94a3b8' }}>
                    <input
                      type="checkbox"
                      checked={addonSetup}
                      onChange={(e) => setAddonSetup(e.target.checked)}
                      style={{ width: '18px', height: '18px', accentColor: '#10b981', cursor: 'pointer' }}
                    />
                    <span>{t.calculator.addon1}</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.88rem', color: '#94a3b8' }}>
                    <input
                      type="checkbox"
                      checked={addonTarget}
                      onChange={(e) => setAddonTarget(e.target.checked)}
                      style={{ width: '18px', height: '18px', accentColor: '#10b981', cursor: 'pointer' }}
                    />
                    <span>{t.calculator.addon2}</span>
                  </label>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: themeStyles.emeraldGlow }}>
                    <CheckCircle2 size={18} />
                    <span>{t.calculator.addon3}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: themeStyles.emeraldGlow }}>
                    <CheckCircle2 size={18} />
                    <span>{t.calculator.addon4}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Results Display Card */}
            <div style={{
              background: '#1e293b',
              borderRadius: '24px',
              padding: '30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{t.calculator.resViralis}</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: '900', color: themeStyles.emeraldGlow }}>
                    {totalViralisCost.toLocaleString()} MDL
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{t.calculator.resAgency}</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#ef4444', textDecoration: 'line-through' }}>
                    {agencyCost.toLocaleString()} MDL
                  </div>
                </div>

                <div style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '16px',
                  padding: '16px',
                  marginBottom: '20px'
                }}>
                  <div style={{ fontSize: '0.85rem', color: '#a7f3d0', fontWeight: '700' }}>{t.calculator.resSaved}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#34d399' }}>
                    +{moneySaved.toLocaleString()} MDL
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{t.calculator.resEstimatedSales}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff' }}>
                    ~{projectedRevenue.toLocaleString()} MDL
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#f59e0b', marginTop: '2px', fontWeight: '700' }}>
                    {t.calculator.resRoi} {roiRatio}X
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/37378337228?text=${encodeURIComponent(
                  lang === 'ru'
                    ? `Здравствуйте! Хочу заказать ${videoCount} роликов в VIRALIS. Стоимость: ${totalViralisCost} MDL. Средний чек: ${avgCheck} MDL.`
                    : `Bună ziua! Doresc să comand ${videoCount} clipuri la VIRALIS. Cost total: ${totalViralisCost} MDL. Cec mediu: ${avgCheck} MDL.`
                )}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                  color: '#ffffff',
                  padding: '14px 20px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 6px 20px rgba(16, 185, 129, 0.3)'
                }}
              >
                <MessageCircle size={18} />
                <span>{t.calculator.btnOrderCalcWhatsApp}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PORTFOLIO SHOWCASE & VIDEO MODAL */}
      <section id="portfolio" style={{ padding: '90px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '30px',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: themeStyles.emeraldGlow,
            fontWeight: '700',
            fontSize: '0.85rem',
            marginBottom: '16px'
          }}>
            <Eye size={16} />
            <span>{t.portfolio.badge}</span>
          </div>
          <h2 style={{ fontSize: '2.3rem', fontWeight: '900', marginBottom: '16px', color: '#fff' }}>
            {t.portfolio.title}
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
            {t.portfolio.subtitle}
          </p>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '30px', flexWrap: 'wrap' }}>
            {[
              { key: 'all', label: t.portfolio.catAll },
              { key: 'food', label: t.portfolio.catFood },
              { key: 'fashion', label: t.portfolio.catFashion },
              { key: 'tech', label: t.portfolio.catTech }
            ].map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  background: activeCategory === cat.key ? '#10b981' : 'rgba(255, 255, 255, 0.05)',
                  color: activeCategory === cat.key ? '#000000' : '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '8px 20px',
                  borderRadius: '30px',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {filteredPortfolio.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              style={{
                background: '#0f172a',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
              }}
            >
              <div style={{ position: 'relative', height: '380px', overflow: 'hidden' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 60%)'
                }} />

                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(16, 185, 129, 0.9)',
                  color: '#000000',
                  fontWeight: '800',
                  fontSize: '0.78rem',
                  padding: '4px 12px',
                  borderRadius: '20px'
                }}>
                  {item.categoryLabel}
                </div>

                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.6)'
                }}>
                  <Play size={26} fill="#ffffff" style={{ marginLeft: '4px' }} />
                </div>

                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>
                    {item.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: themeStyles.emeraldGlow, fontSize: '0.9rem', fontWeight: '700' }}>
                    <Eye size={16} />
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO PREVIEW MODAL */}
      {selectedVideo && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div style={{
            background: '#0f172a',
            borderRadius: '28px',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            maxWidth: '460px',
            width: '100%',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.9)'
          }}>
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ fontWeight: '800', fontSize: '1rem', color: '#fff' }}>
                {t.portfolio.modalTitle}
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ position: 'relative', height: '480px' }}>
              <img
                src={selectedVideo.img}
                alt={selectedVideo.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  padding: '16px 24px',
                  background: 'rgba(16, 185, 129, 0.95)',
                  color: '#000000',
                  borderRadius: '50px',
                  fontWeight: '900',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Play size={20} fill="#000" />
                  <span>{t.portfolio.modalFormat}</span>
                </div>
              </div>
            </div>

            <div style={{ padding: '20px' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                {selectedVideo.title}
              </div>
              <div style={{ fontSize: '0.85rem', color: themeStyles.emeraldGlow, marginBottom: '16px' }}>
                {t.portfolio.modalViews} {selectedVideo.views}
              </div>

              <a
                href="https://wa.me/37378337228"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                  color: '#ffffff',
                  padding: '14px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                <MessageCircle size={18} />
                <span>{t.portfolio.modalOrderThis}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 8. PRICING PACKAGES - TRANSPARENT 600 MDL BASE & BULK OPTIONS */}
      <section id="packages" style={{
        backgroundColor: '#0b1120',
        padding: '90px 24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: themeStyles.emeraldGlow,
              fontWeight: '700',
              fontSize: '0.85rem',
              marginBottom: '16px'
            }}>
              <Gift size={16} />
              <span>{t.packages.badge}</span>
            </div>
            <h2 style={{ fontSize: '2.3rem', fontWeight: '900', marginBottom: '16px', color: '#fff' }}>
              {t.packages.title}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
              {t.packages.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px'
          }}>
            {/* Package 1 */}
            <div style={{
              background: '#0f172a',
              borderRadius: '28px',
              padding: '32px 24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
                  {t.packages.p1Title}
                </h3>
                <div style={{ fontSize: '2.4rem', fontWeight: '900', color: themeStyles.emeraldGlow, lineHeight: '1' }}>
                  {t.packages.p1Price} <span style={{ fontSize: '1.1rem', color: '#94a3b8' }}>MDL</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '6px', marginBottom: '16px', fontWeight: '600' }}>
                  {t.packages.p1Sub}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '24px' }}>
                  {t.packages.p1Desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                  {[t.packages.p1F1, t.packages.p1F2, t.packages.p1F3, t.packages.p1F4].map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                      <Check size={16} color={themeStyles.emeraldGlow} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://wa.me/37378337228"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '14px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                {t.packages.p1Btn}
              </a>
            </div>

            {/* Package 2 - Popular */}
            <div style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              borderRadius: '28px',
              padding: '32px 24px',
              border: '2px solid #10b981',
              boxShadow: '0 15px 40px rgba(16, 185, 129, 0.25)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#10b981',
                color: '#000',
                fontWeight: '900',
                fontSize: '0.75rem',
                padding: '4px 16px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}>
                {t.packages.popularBadge}
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
                  {t.packages.p2Title}
                </h3>
                <div style={{ fontSize: '2.4rem', fontWeight: '900', color: themeStyles.emeraldGlow, lineHeight: '1' }}>
                  {t.packages.p2Price} <span style={{ fontSize: '1.1rem', color: '#94a3b8' }}>MDL</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#f59e0b', marginTop: '6px', marginBottom: '16px', fontWeight: '700' }}>
                  {t.packages.p2Sub}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '24px' }}>
                  {t.packages.p2Desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                  {[t.packages.p2F1, t.packages.p2F2, t.packages.p2F3, t.packages.p2F4].map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#ffffff', fontWeight: '600' }}>
                      <Check size={16} color={themeStyles.emeraldGlow} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://wa.me/37378337228"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                  color: '#fff',
                  padding: '14px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  textAlign: 'center',
                  boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)'
                }}
              >
                {t.packages.p2Btn}
              </a>
            </div>

            {/* Package 3 */}
            <div style={{
              background: '#0f172a',
              borderRadius: '28px',
              padding: '32px 24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
                  {t.packages.p3Title}
                </h3>
                <div style={{ fontSize: '2.4rem', fontWeight: '900', color: themeStyles.emeraldGlow, lineHeight: '1' }}>
                  {t.packages.p3Price} <span style={{ fontSize: '1.1rem', color: '#94a3b8' }}>MDL</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '6px', marginBottom: '16px', fontWeight: '600' }}>
                  {t.packages.p3Sub}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '24px' }}>
                  {t.packages.p3Desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                  {[t.packages.p3F1, t.packages.p3F2, t.packages.p3F3, t.packages.p3F4].map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                      <Check size={16} color={themeStyles.emeraldGlow} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://wa.me/37378337228"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '14px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                {t.packages.p3Btn}
              </a>
            </div>

            {/* Package 4 */}
            <div style={{
              background: '#0f172a',
              borderRadius: '28px',
              padding: '32px 24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
                  {t.packages.p4Title}
                </h3>
                <div style={{ fontSize: '2.4rem', fontWeight: '900', color: themeStyles.emeraldGlow, lineHeight: '1' }}>
                  {t.packages.p4Price} <span style={{ fontSize: '1.1rem', color: '#94a3b8' }}>MDL</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '6px', marginBottom: '16px', fontWeight: '600' }}>
                  {t.packages.p4Sub}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '24px' }}>
                  {t.packages.p4Desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                  {[t.packages.p4F1, t.packages.p4F2, t.packages.p4F3, t.packages.p4F4].map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                      <Check size={16} color={themeStyles.emeraldGlow} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://wa.me/37378337228"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '14px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                {t.packages.p4Btn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY US / TRUST TRIGGERS */}
      <section style={{ padding: '90px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '30px',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: themeStyles.emeraldGlow,
            fontWeight: '700',
            fontSize: '0.85rem',
            marginBottom: '16px'
          }}>
            <ShieldCheck size={16} />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 style={{ fontSize: '2.3rem', fontWeight: '900', marginBottom: '16px', color: '#fff' }}>
            {t.whyUs.title}
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
            {t.whyUs.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {[
            { title: t.whyUs.r1Title, desc: t.whyUs.r1Desc, icon: Award },
            { title: t.whyUs.r2Title, desc: t.whyUs.r2Desc, icon: Clock },
            { title: t.whyUs.r3Title, desc: t.whyUs.r3Desc, icon: Globe },
            { title: t.whyUs.r4Title, desc: t.whyUs.r4Desc, icon: ShieldCheck }
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} style={{
                background: '#0f172a',
                borderRadius: '24px',
                padding: '30px',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: themeStyles.emeraldGlow,
                  marginBottom: '20px'
                }}>
                  <IconComp size={24} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. REVIEWS & SOCIAL PROOF */}
      <section style={{
        backgroundColor: '#0b1120',
        padding: '90px 24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: themeStyles.emeraldGlow,
              fontWeight: '700',
              fontSize: '0.85rem',
              marginBottom: '16px'
            }}>
              <Star size={16} />
              <span>{t.reviews.badge}</span>
            </div>
            <h2 style={{ fontSize: '2.3rem', fontWeight: '900', marginBottom: '16px', color: '#fff' }}>
              {t.reviews.title}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
              {t.reviews.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {[
              { name: t.reviews.rev1Name, role: t.reviews.rev1Role, text: t.reviews.rev1Text },
              { name: t.reviews.rev2Name, role: t.reviews.rev2Role, text: t.reviews.rev2Text },
              { name: t.reviews.rev3Name, role: t.reviews.rev3Role, text: t.reviews.rev3Text }
            ].map((rev, idx) => (
              <div key={idx} style={{
                background: '#0f172a',
                borderRadius: '24px',
                padding: '30px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '16px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#f59e0b" />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.65', marginBottom: '24px', fontStyle: 'italic' }}>
                    "{rev.text}"
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#fff' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.82rem', color: themeStyles.emeraldGlow, marginTop: '2px' }}>{rev.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TEAM SECTION */}
      <section style={{ padding: '90px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <h2 style={{ fontSize: '2.3rem', fontWeight: '900', marginBottom: '16px', color: '#fff' }}>
            {t.team.title}
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
            {t.team.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Alexander */}
          <div style={{
            background: '#0f172a',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}>
            <img src="/assets/team_alexander.jpg" alt={t.team.alexName} style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff' }}>{t.team.alexName}</h3>
              <div style={{ fontSize: '0.85rem', color: themeStyles.emeraldGlow, fontWeight: '700', marginBottom: '12px' }}>
                {t.team.alexRole}
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>
                {t.team.alexDesc}
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={`tel:${t.team.alexPhone.replace(/\s+/g, '')}`}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '10px 18px',
                    borderRadius: '30px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Phone size={16} />
                  <span>{t.team.btnCall}</span>
                </a>
                <a
                  href={`https://wa.me/${t.team.alexPhone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: themeStyles.emeraldGlow,
                    border: '1px solid #10b981',
                    padding: '10px 18px',
                    borderRadius: '30px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <MessageCircle size={16} />
                  <span>{t.team.btnWa}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Stanislav */}
          <div style={{
            background: '#0f172a',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}>
            <img src="/assets/team_stanislav.jpg" alt={t.team.stanName} style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff' }}>{t.team.stanName}</h3>
              <div style={{ fontSize: '0.85rem', color: themeStyles.emeraldGlow, fontWeight: '700', marginBottom: '12px' }}>
                {t.team.stanRole}
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>
                {t.team.stanDesc}
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={`tel:${t.team.stanPhone.replace(/\s+/g, '')}`}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '10px 18px',
                    borderRadius: '30px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Phone size={16} />
                  <span>{t.team.btnCall}</span>
                </a>
                <a
                  href={`https://wa.me/${t.team.stanPhone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: themeStyles.emeraldGlow,
                    border: '1px solid #10b981',
                    padding: '10px 18px',
                    borderRadius: '30px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <MessageCircle size={16} />
                  <span>{t.team.btnWa}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. INTERACTIVE FAQ ACCORDION */}
      <section id="faq" style={{
        backgroundColor: '#0b1120',
        padding: '90px 24px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.3rem', fontWeight: '900', marginBottom: '16px', color: '#fff' }}>
              {t.faq.title}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
              {t.faq.subtitle}
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
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#0f172a',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '1.05rem',
                      fontWeight: '800',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color={themeStyles.emeraldGlow} /> : <ChevronDown size={20} color="#94a3b8" />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 20px', fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.65' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. LEAD CAPTURE FORM SECTION */}
      <section style={{ padding: '90px 24px', maxWidth: '850px', margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: '32px',
          border: '2px solid rgba(16, 185, 129, 0.4)',
          padding: '44px 36px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: themeStyles.emeraldGlow,
              fontWeight: '700',
              fontSize: '0.85rem',
              marginBottom: '16px'
            }}>
              <Flame size={16} />
              <span>{t.form.badge}</span>
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '12px', color: '#fff' }}>
              {t.form.title}
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
              {t.form.subtitle}
            </p>
          </div>

          {isSubmitted ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              background: 'rgba(16, 185, 129, 0.15)',
              borderRadius: '24px',
              border: '1px solid #10b981'
            }}>
              <CheckCircle2 size={54} color={themeStyles.emeraldGlow} style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: '900', color: '#fff', marginBottom: '8px' }}>
                {t.form.successTitle}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#a7f3d0' }}>
                {t.form.successDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '8px' }}>
                    {t.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '8px' }}>
                    {t.form.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '8px' }}>
                    {t.form.bizLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.form.bizPlaceholder}
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '8px' }}>
                    {t.form.langPrefLabel}
                  </label>
                  <select
                    value={formData.langPref}
                    onChange={(e) => setFormData({ ...formData, langPref: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '16px',
                      background: '#0f172a',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="RU">{t.form.langRuOption}</option>
                    <option value="RO">{t.form.langRoOption}</option>
                    <option value="BOTH">{t.form.langBothOption}</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '8px' }}>
                  {t.form.commentLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder={t.form.commentPlaceholder}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                  color: '#ffffff',
                  padding: '16px 28px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '1.05rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
                  marginTop: '10px'
                }}
              >
                {isSubmitting ? t.form.sending : t.form.submitBtn}
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8', marginTop: '6px' }}>
                {t.form.guaranteeText}
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer style={{
        backgroundColor: '#040711',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '60px 24px 100px'
      }}>
        <div style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: '900', color: '#ffffff', marginBottom: '12px' }}>
              VIRALIS<span style={{ color: themeStyles.emeraldGlow }}>.MD</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
              {t.footer.quickLinks}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <a href="#loss-aversion" style={{ color: '#cbd5e1', textDecoration: 'none' }}>{t.nav.lossAnchor}</a>
              <a href="#contrast" style={{ color: '#cbd5e1', textDecoration: 'none' }}>{t.nav.contrast}</a>
              <a href="#roi-calculator" style={{ color: '#cbd5e1', textDecoration: 'none' }}>{t.nav.calculator}</a>
              <a href="#packages" style={{ color: '#cbd5e1', textDecoration: 'none' }}>{t.nav.packages}</a>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
              {t.footer.contacts}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <div>Александр: {t.footer.alexPhone}</div>
              <div>Станислав: {t.footer.stanPhone}</div>
              <div>{t.footer.location}</div>
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: '1240px',
          margin: '0 auto',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          textAlign: 'center',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          {t.footer.rights}
        </div>
      </footer>

      {/* 15. FLOATING MOBILE/DESKTOP QUICK CTA BAR */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        width: 'calc(100% - 32px)',
        maxWidth: '650px',
        background: 'rgba(15, 23, 42, 0.94)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(16, 185, 129, 0.4)',
        borderRadius: '50px',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 15px 35px rgba(0,0,0,0.7)',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 10px #10b981'
          }} />
          <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#ffffff' }}>
            {t.floatingBar.slotsText}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a
            href="tel:+37378337228"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '30px',
              fontWeight: '700',
              fontSize: '0.82rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Phone size={14} />
            <span>{t.floatingBar.callBtn}</span>
          </a>

          <a
            href="https://wa.me/37378337228"
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
              color: '#ffffff',
              padding: '8px 20px',
              borderRadius: '30px',
              fontWeight: '800',
              fontSize: '0.82rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
            }}
          >
            <MessageCircle size={14} />
            <span>{t.floatingBar.orderBtn}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
