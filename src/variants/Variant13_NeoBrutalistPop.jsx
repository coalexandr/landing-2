import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Heart,
  MessageCircle,
  Share2,
  Sparkles,
  Zap,
  Flame,
  CheckCircle2,
  XCircle,
  Calculator,
  ChevronDown,
  ChevronUp,
  X,
  Check,
  ArrowRight,
  Clock,
  ShieldCheck,
  DollarSign,
  Star,
  Globe,
  AlertTriangle
} from 'lucide-react';

// Comprehensive Bilingual Dictionary (RU / RO)
const dict = {
  ru: {
    topTicker: {
      alert: "⚡ НЕО-БРУТАЛЬНЫЙ ВИДЕО-МАРКЕТИНГ B КИШИНЁВЕ",
      price: "ФИКСИРОВАННАЯ ЦЕНА: 600 MDL / РОЛИК",
      slots: "ОСТАЛОСЬ 3 МЕСТА НА ЭТУ НЕДЕЛЮ",
      langSwitch: "Сменить на RO 🇲🇩"
    },
    nav: {
      brandSub: "Media Studio Moldova",
      whyUs: "Почему 600 MDL",
      reels: "Демо Ролики",
      calculator: "Калькулятор",
      contrast: "До / После",
      process: "Как работаем",
      reviews: "Кейсы & Отзывы",
      faq: "Вопросы",
      cta: "Заказать за 600 MDL"
    },
    stickers: {
      viralViews: "🔥 10M+ Просмотров",
      fastDelivery: "⚡ Монтаж 24-48ч",
      moldovaLocal: "🇲🇩 Кишинёв & Молдова",
      fixedPrice: "💸 600 MDL / ролик",
      zeroBoring: "🎯 0% Скучного Контента",
      humanHook: "🎭 Живые Крючки Внимания",
      highRoi: "🚀 Рост Заявок в 3.5x",
      noHidden: "🔒 Без Скрытых Доплат"
    },
    hero: {
      badge: "Убойный Видеоконтент для TikTok, Instagram Reels & Facebook",
      titlePrefix: "ВАШУ РЕКЛАМУ ПРОЛИСТЫВАЮТ?",
      titleHighlight: "МЫ ДЕЛАЕМ ВИРУСНЫЕ РОЛИКИ",
      titleSuffix: "КОТОРЫЕ ПРОДАЮТ!",
      subtitle: "Полный цикл видеопроизводства в Молдове: от вирусного сценария до идеального монтажа с саунд-дизайном и субтитрами. Всего 600 MDL за готовое видео под ключ.",
      btnOrder: "🔥 Заказать ролик за 600 MDL",
      btnCalc: "🧮 Рассчитать бюджет",
      btnCall: "📞 Позвонить в студию",
      trust1: "✅ Сценарий входит в стоимость",
      trust2: "⚡ Сдача за 24-48 часов",
      trust3: "🇲🇩 Выезд по Кишинёву и Молдове",
      stat1Number: "600 MDL",
      stat1Label: "Честная цена за ролик",
      stat2Number: "24-48h",
      stat2Label: "Скорость отдачи монтажа",
      stat3Number: "10M+",
      stat3Label: "Суммарно просмотров",
      stat4Number: "98.4%",
      stat4Label: "Удержание внимания"
    },
    kahneman: {
      badge: "🧠 ПСИХОЛОГИЯ ПРИНЯТИЯ РЕШЕНИЙ (KAHNEMAN SYSTEM 1)",
      title: "Почему 600 MDL — это лёгкое и 100% выгодное решение",
      subtitle: "Мозг покупателя принимает решение за 0.5 секунды. Мы создаём видео с визуальным крючком (Hook), которое заставляет остановиться и купить.",
      card1Title: "⚡ Быстрое мыслительное решение (System 1)",
      card1Desc: "Вам не нужно нанимать дорогую продакшн-студию за $1000. Вы получаете готовый рекламный ролик высшего качества за символические 600 MDL.",
      card2Title: "⚠️ Психология Потерь (Loss Aversion)",
      card2Desc: "Каждый день без вирусных Reels вы теряете от 15 до 40 потенциальных клиентов в Кишинёве, которые уходят к более заметным конкурентам.",
      card3Title: "🔒 0% Риска & Прозрачность",
      card3Desc: "Никаких почасовых сомнительных отплат или скрытых услуг. Всё включено: сценарий, съёмка, саунд-дизайн, субтитры и цвет.",
      sliderTitle: "Оцените ваши потери без вирусного контента в месяц:",
      sliderDaysLabel: "Дней без рекламы:",
      lostLeads: "Потеряно клиентов:",
      lostRevenue: "Упущенный доход:",
      calcWarning: "💡 Закажите пакет из 5 роликов за 2,800 MDL и закройте контент на весь месяц!"
    },
    showcase: {
      badge: "📸 ИНТЕРАКТИВНЫЙ 9:16 СИМУЛЯТОР",
      title: "Посмотрите, как выглядят наши ролики в действии",
      subtitle: "Переключайте ниши бизнеса и проверяйте структуру вирусного видео",
      tabFood: "🍕 Общепит & Кафе",
      tabBeauty: "💄 Салоны & Косметология",
      tabRealty: "🏠 Недвижимость & Ремонт",
      tabEcom: "🛍️ Магазины & Одежда",
      tabServices: "🚗 Авто & Услуги",
      hookScore: "Оценка вирусности:",
      viewsCount: "142.5K просмотров",
      likesCount: "12.8K",
      commentsCount: "482",
      sharesCount: "1.2K",
      ctaInVideo: "👉 Хочу такой же ролик за 600 MDL",
      nicheFoodDesc: "Вкусная динамичная съёмка блюд, крупный план, звуки хруста (ASMR) и сочная цветокоррекция.",
      nicheBeautyDesc: "Эстетичные кадры до/после, трендовые переходы, мягкий свет и вовлекающий голос.",
      nicheRealtyDesc: "Динамичный обзор объекта за 30 секунд: локация, планировка, фишки и цена.",
      nicheEcomDesc: "Демонстрация товара в движении, примерка, стильный монтаж и призыв к заказу.",
      nicheServicesDesc: "Решение проблемы клиента, экспертный совет, демонстрация процесса и доверие."
    },
    calculator: {
      badge: "🧮 ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР БЮДЖЕТА",
      title: "Рассчитайте выгоду и пакет роликов",
      subtitle: "Чем больше роликов в заказе, тем выше скидка и полезные бонусы в подарок",
      videoCountLabel: "Выберите количество видеороликов:",
      v1: "1 Ролик (600 MDL)",
      v3: "3 Ролика (1,700 MDL)",
      v5: "5 Роликов (2,800 MDL) 🔥",
      v10: "10 Роликов (5,200 MDL) 🚀",
      v20: "20 Роликов (9,600 MDL) 👑",
      addonsTitle: "Дополнительные опции:",
      addon1: "Озвучка и дубляж на 2 языках (RU + RO) (+350 MDL)",
      addon2: "Полная упаковка аккаунта Instagram/TikTok (+500 MDL)",
      addon3: "Настройка таргетированной рекламы Meta Ads (+800 MDL)",
      addon4: "Выездная съёмка за пределы Кишинёва (+300 MDL)",
      summaryTitle: "Итоговый расчёт бюджета:",
      videosTotal: "Стоимость роликов:",
      addonsTotal: "Дополнительные опции:",
      discountLabel: "Ваша экономия:",
      finalPrice: "ИТОГО К ОПЛАТЕ:",
      perVideoPrice: "Цена за 1 ролик:",
      bonusTitle: "🎁 Подарок к вашему заказу:",
      bonusText: "Бесплатный разбор профиля + 5 вирусных идей для сценариев!",
      btnOrderCalc: "🔥 Забронировать этот пакет"
    },
    contrast: {
      badge: "⚖️ СРАВНИТЕЛЬНАЯ МАТРИЦА СТИЛЯ",
      title: "Обычное унылое видео VS Нео-Брутальный Ролик VIRALIS",
      subtitle: "Почему обычная съёмка сливает бюджет, а наши ролики приносят постоянные заказы",
      oldTitle: "❌ Обычное унылое видео",
      old1: "Скучное начало — 85% уходят в первые 2 секунды",
      old2: "Тихий глухой звук без саунд-дизайна",
      old3: "Медленный монтаж, отсутствие графики и субтитров",
      old4: "Размытое предложение без призыва к действию",
      old5: "Высокая цена ($150-300 за ролик) без гарантий",
      newTitle: "🔥 Нео-Брутальный Ролик (600 MDL)",
      new1: "Цепляющий хук с 1-й секунды (удержание 98%)",
      new2: "Идеально чистый звук, диктор и динамичная музыка",
      new3: "Сочный нео-брутальный монтаж с яркими субтитрами",
      new4: "Чёткий призыв написать в директ или позвонить",
      new5: "Фиксированная честная цена 600 MDL под ключ"
    },
    process: {
      badge: "🛠️ ПРОСТОЙ ПРОЦЕСС ЗА 4 ШАГА",
      title: "Как мы создаём вирусные ролики для вашего бизнеса",
      subtitle: "Минимум вашего времени — максимум готового результата",
      step1Num: "01",
      step1Title: "Креативный Бриф & Хуки",
      step1Desc: "Изучаем ваш продукт, аудиторию и составляем 3-5 цепляющих сценариев с вирусными завязками.",
      step2Num: "02",
      step2Title: "Быстрая Съёмка в Кишинёве",
      step2Desc: "Приезжаем с профессиональным светом и микрофонами. Съёмка занимает всего 1-2 часа.",
      step3Num: "03",
      step3Title: "Нео-Брутальный Монтаж",
      step3Desc: "Делаем динамичный нарез, накладываем трендовую музыку, субтитры, эффекты и саунд-дизайн.",
      step4Num: "04",
      step4Title: "Готовый Контент & Продажи",
      step4Desc: "Вы получаете готовые 9:16 ролики в формате 4K, готовые к публикации в TikTok, Reels & Shorts."
    },
    reviews: {
      badge: "⭐ ОТЗЫВЫ КЛИЕНТОВ B МОЛДОВЕ",
      title: "Предприниматели уже получают клиенты за 600 MDL",
      subtitle: "Реальные результаты бизнеса в Кишинёве и по всей Молдове",
      r1Name: "Ион Чебану",
      r1Role: "Владелец ресторана 'La Pop' (Кишинёв)",
      r1Text: "Заказали пакет из 5 роликов за 2,800 MDL. Один из роликов про сочные бургеры набрал 84,000 просмотров в Instagram! Бронирование столиков выросло на 40%.",
      r1Badge: "🍔 +84K Просмотров",
      r2Name: "Елена Смирнова",
      r2Role: "Основатель салон красоты 'Estetika'",
      r2Text: "Раньше снимали сами — просмотров было 200 штук. VIRALIS сделали 3 ролика по 600 MDL, и записи на процедуры заполнились на 2 недели вперёд!",
      r2Badge: "💄 Запись на 2 недели",
      r3Name: "Андрей Русу",
      r3Role: "Агент по недвижимости в Кишинёве",
      r3Text: "Динамичные обзоры квартир за 600 MDL — это находка! Клиенты смотрят до конца и сразу пиут в WhatsApp. Продали 2 квартиры за месяц через Reels.",
      r3Badge: "🏠 2 Проданные квартиры"
    },
    faq: {
      badge: "❓ ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
      title: "Отвечаем на все ваши сомнения",
      subtitle: "Всё прозрачно, честно и без подвохов",
      q1: "Что именно входит в ролик за 600 MDL?",
      a1: "В 600 MDL входит полный цикл: разработка сценария с хуком, съёмка на локации в Кишинёве, динамичный монтаж, саунд-дизайн, яркие субтитры и финальная цветокоррекция.",
      q2: "Сколько времени занимает съёмка и монтаж?",
      a2: "Съёмка занимает 1-2 часа. Готовый смонтированный ролик мы сдаём через 24-48 часов после съёмок.",
      q3: "Вы снимаете только в Кишинёве?",
      a3: "Основная съёмка проходит в Кишинёве и пригородах. Также возможен выезд по всей Молдове (Бельцы, Оргеев, Кагул, Унгены) по договоренности.",
      q4: "Нужно ли мне самому быть в кадре?",
      a4: "Не обязательно! Мы можем снять ролики с эстетичной демонстрацией товара, процесса работы, или пригласить нашего профессионального актера/модель.",
      q5: "На каком языке создаются ролики?",
      a5: "Мы создаём ролики на русском и румынском языках (RU / RO). Можем сделать дублированную версию на двух языках.",
      q6: "Как происходит оплата?",
      a6: "Оплата производится удобным для вас способом: наличными, переводом на карту или по безналичному расчету для юридических лиц."
    },
    finalCta: {
      badge: "🔥 ГОТОВЫ ВЗОРВАТЬ СОЦСЕТИ?",
      title: "Забронируйте съёмку прямо сейчас за 600 MDL",
      subtitle: "Осталось всего 3 свободных слота на этой неделе. Зафиксируйте цену и получите сценарий бесплатно!",
      btnModal: "⚡ Забронировать съёмку за 600 MDL",
      phoneDirect: "Или позвоните нам: +373 60 123 456"
    },
    modal: {
      title: "🚀 Бронирование видеосъёмки (600 MDL)",
      subtitle: "Заполните форму, и мы свяжемся с вами в течение 15 минут!",
      nameLabel: "Ваше имя:",
      namePlaceholder: "Например: Александр",
      phoneLabel: "Телефон / WhatsApp:",
      phonePlaceholder: "+373 68 XXXXXX",
      nicheLabel: "Ваша ниша бизнеса:",
      nichePlaceholder: "Ресторан, Салон красоты, Недвижимость...",
      countLabel: "Количество роликов:",
      langLabel: "Предпочтительный язык ролика:",
      langRu: "Русский (RU)",
      langRo: "Румынский (RO)",
      langBoth: "Два языка (RU + RO)",
      btnSubmit: "💥 Отправить заявку за 600 MDL",
      successMsg: "🎉 Заявка успешно отправлена! Мы перезвоним вам через 15 минут!"
    },
    footer: {
      brand: "VIRALIS MEDIA STUDIO MOLDOVA",
      desc: "Нео-брутальный видеомаркетинг и создание вирусных роликов для бизнеса. Кишинёв, Молдова.",
      address: "📍 Кишинёв, ул. Штефан чел Маре 130",
      phone: "📞 +373 60 123 456",
      rights: "© 2026 VIRALIS Studio. Все права защищены. Фиксированная цена 600 MDL."
    }
  },
  ro: {
    topTicker: {
      alert: "⚡ VIDEO MARKETING NEO-BRUTALIST ÎN CHIȘINĂU",
      price: "PREȚ FIX: 600 MDL / VIDEO",
      slots: "AU RĂMAS 3 LOCURI PENTRU ACEASTĂ SĂPTĂMÂNĂ",
      langSwitch: "Schimbă în RU 🇷🇺"
    },
    nav: {
      brandSub: "Media Studio Moldova",
      whyUs: "De ce 600 MDL",
      reels: "Demo Video",
      calculator: "Calculator",
      contrast: "Înainte / După",
      process: "Cum lucrăm",
      reviews: "Cazuri & Recenzii",
      faq: "Întrebări",
      cta: "Comandă cu 600 MDL"
    },
    stickers: {
      viralViews: "🔥 10M+ Vizualizări",
      fastDelivery: "⚡ Montaj 24-48 ore",
      moldovaLocal: "🇲🇩 Chișinău & Moldova",
      fixedPrice: "💸 600 MDL / video",
      zeroBoring: "🎯 0% Conținut Plictisitor",
      humanHook: "🎭 Cârlige Vizuale Live",
      highRoi: "🚀 Creștere Vânzări 3.5x",
      noHidden: "🔒 Fără Taxe Ascunse"
    },
    hero: {
      badge: "Video Marketing Viral pentru TikTok, Instagram Reels & Facebook",
      titlePrefix: "RECLAMA TA ESTE DERULATĂ?",
      titleHighlight: "CREĂM VIDEO-URI VIRALE",
      titleSuffix: "CARE VÂND REAL!",
      subtitle: "Ciclu complet de producție video în Moldova: de la scenariu viral până la montaj dinamic cu sound design și subtitrări. Doar 600 MDL per video cheie în mână.",
      btnOrder: "🔥 Comandă video cu 600 MDL",
      btnCalc: "🧮 Calculează bugetul",
      btnCall: "📞 Sună la studio",
      trust1: "✅ Scenariul este inclus în preț",
      trust2: "⚡ Predare în 24-48 de ore",
      trust3: "🇲🇩 Deplasare în Chișinău și Moldova",
      stat1Number: "600 MDL",
      stat1Label: "Preț fix per video",
      stat2Number: "24-48h",
      stat2Label: "Viteza de montaj",
      stat3Number: "10M+",
      stat3Label: "Vizualizări totale",
      stat4Number: "98.4%",
      stat4Label: "Retenția atenției"
    },
    kahneman: {
      badge: "🧠 PSIHOLOGIA DECIZIEI (KAHNEMAN SYSTEM 1)",
      title: "De ce 600 MDL este o decizie simplă și 100% profitabilă",
      subtitle: "Creierul cumpărătorului ia o decizie în 0.5 secunde. Creăm videoclipuri cu un cârlig vizual (Hook) care îi face să se oprească și să cumpere.",
      card1Title: "⚡ Decizie rapidă de gândire (System 1)",
      card1Desc: "Nu trebuie să angajezi o agenție scumpă cu $1000. Primești un video publicitar de calitate superioară pentru 600 MDL.",
      card2Title: "⚠️ Psihologia Pierderilor (Loss Aversion)",
      card2Desc: "În fiecare zi fără Reels virale pierzi între 15 și 40 de clienți potențiali în Chișinău care merg la concurenți mai vizibili.",
      card3Title: "🔒 0% Risc & Transparență",
      card3Desc: "Fără plăți orare dubioase sau servicii ascunse. Totul este inclus: scenariu, filmare, sound design, subtitrări și culoare.",
      sliderTitle: "Evaluează pierderile tale fără conținut viral pe lună:",
      sliderDaysLabel: "Zile fără reclame:",
      lostLeads: "Clienți pierduți:",
      lostRevenue: "Venit pierdut:",
      calcWarning: "💡 Comandă pachetul de 5 video-uri la 2,800 MDL și acoperă tot conținutul pe o lună!"
    },
    showcase: {
      badge: "📸 SIMULATOR INTERACTIV 9:16",
      title: "Vezi cum arată videoclipurile noastre în acțiune",
      subtitle: "Schimbă nișa de afaceri și verifică structura unui video viral",
      tabFood: "🍕 Horeca & Restaurant",
      tabBeauty: "💄 Saloane & Cosmetologie",
      tabRealty: "🏠 Imobiliare & Reparații",
      tabEcom: "🛍️ Magazine & Haine",
      tabServices: "🚗 Auto & Servicii",
      hookScore: "Scor de viralitate:",
      viewsCount: "142.5K vizualizări",
      likesCount: "12.8K",
      commentsCount: "482",
      sharesCount: "1.2K",
      ctaInVideo: "👉 Vreau un astfel de video cu 600 MDL",
      nicheFoodDesc: "Filmare gustoasă și dinamică a bucatelor, prim-planuri, sunete ASMR și corecție de culoare apetisantă.",
      nicheBeautyDesc: "Cadre estetice înainte/după, tranziții de top, lumină caldă și voce captivantă.",
      nicheRealtyDesc: "Prezentare dinamică a imobilului în 30 secunde: locație, planificare, avantaje și preț.",
      nicheEcomDesc: "Demonstrarea produsului în mișcare, probare, montaj stilat și apel direct la comandă.",
      nicheServicesDesc: "Rezolvarea problemei clientului, sfat de la expert, proces de lucru și încredere."
    },
    calculator: {
      badge: "🧮 CALCULATOR INTERACTIV DE BUGET",
      title: "Calculează economia și pachetul de video-uri",
      subtitle: "Cu cât comanzi mai multe video-uri, cu atât reducerea și bonusurile sunt mai mari",
      videoCountLabel: "Alege numărul de videoclipuri:",
      v1: "1 Video (600 MDL)",
      v3: "3 Video-uri (1,700 MDL)",
      v5: "5 Video-uri (2,800 MDL) 🔥",
      v10: "10 Video-uri (5,200 MDL) 🚀",
      v20: "20 Video-uri (9,600 MDL) 👑",
      addonsTitle: "Opțiuni suplimentare:",
      addon1: "Voce și dublaj în 2 limbi (RU + RO) (+350 MDL)",
      addon2: "Ambalare completă profil Instagram/TikTok (+500 MDL)",
      addon3: "Setare reclame targetate Meta Ads (+800 MDL)",
      addon4: "Deplasare în afara Chișinăului (+300 MDL)",
      summaryTitle: "Calculul final al bugetului:",
      videosTotal: "Costul videoclipurilor:",
      addonsTotal: "Opțiuni suplimentare:",
      discountLabel: "Economia ta:",
      finalPrice: "TOTAL DE PLATĂ:",
      perVideoPrice: "Preț per 1 video:",
      bonusTitle: "🎁 Cadou la comanda ta:",
      bonusText: "Audit gratuit de profil + 5 idei virale de scenariu!",
      btnOrderCalc: "🔥 Rezervă acest pachet"
    },
    contrast: {
      badge: "⚖️ MATRICE COMPARATIVĂ DE STIL",
      title: "Video banal plictisitor VS Video Neo-Brutalist VIRALIS",
      subtitle: "De ce filmările obișnuite pierd bugetul, iar clipurile noastre aduc comenzi constante",
      oldTitle: "❌ Video banal plictisitor",
      old1: "Început plictisitor — 85% renunță în primele 2 secunde",
      old2: "Sunet slab și înfundat fără sound design",
      old3: "Montaj lent, lipsă de grafică și subtitrări",
      old4: "Ofertă confuză fără îndemn clar la acțiune",
      old5: "Preț mare ($150-300 per clip) fără garanții",
      newTitle: "🔥 Video Neo-Brutalist (600 MDL)",
      new1: "Cârlig vizual din prima secundă (retenție 98%)",
      new2: "Sunet cristal curat, crainic și muzică dinamică",
      new3: "Montaj neo-brutalist cu subtitrări colorate",
      new4: "Indemn clar de a scrie în direct sau a suna",
      new5: "Preț fix și cinstit de 600 MDL la cheie"
    },
    process: {
      badge: "🛠️ PROCES SIMPLU ÎN 4 PAȘI",
      title: "Cum creăm videoclipuri virale pentru afacerea ta",
      subtitle: "Minim din timpul tău — maxim de rezultat garantat",
      step1Num: "01",
      step1Title: "Brief Creativ & Cârlige",
      step1Desc: "Studiem produsul, publicul și creăm 3-5 scenarii captivante cu cârlige virale.",
      step2Num: "02",
      step2Title: "Filmare Rapidă în Chișinău",
      step2Desc: "Venim cu echipament profesional de lumină și microfoane. Filmarea durează 1-2 ore.",
      step3Num: "03",
      step3Title: "Montaj Neo-Brutalist",
      step3Desc: "Facem un montaj dinamic, adăugăm muzică de top, subtitrări, efecte și sound design.",
      step4Num: "04",
      step4Title: "Conținut Gata & Vânzări",
      step4Desc: "Primești clipuri 9:16 în format 4K, gata de publicat pe TikTok, Reels & Shorts."
    },
    reviews: {
      badge: "⭐ RECENZII CLIENTĂ ÎN MOLDOVA",
      title: "Antreprenorii primesc deja clienți cu 600 MDL",
      subtitle: "Rezultate reale din Chișinău și din toată Moldova",
      r1Name: "Ion Ceban",
      r1Role: "Proprietar restaurant 'La Pop' (Chișinău)",
      r1Text: "Am comandat un pachet de 5 clipuri cu 2,800 MDL. Un video cu burgeri a strâns 84,000 de vizualizări pe Instagram! Rezervările au crescut cu 40%.",
      r1Badge: "🍔 +84K Vizualizări",
      r2Name: "Elena Smirnova",
      r2Role: "Fondatoare salon 'Estetika'",
      r2Text: "Înainte filmam singuri — aveam doar 200 de vizualizări. VIRALIS a făcut 3 clipuri cu 600 MDL și ne-am umplut programările pe 2 săptămâni!",
      r2Badge: "💄 Programări pe 2 săptămâni",
      r3Name: "Andrei Rusu",
      r3Role: "Agent imobiliar în Chișinău",
      r3Text: "Prezentările dinamice de apartamente cu 600 MDL sunt fantastice! Clienții privesc până la capăt și scriu pe WhatsApp. Am vândut 2 apartamente.",
      r3Badge: "🏠 2 Apartamente Vândute"
    },
    faq: {
      badge: "❓ ÎNTREBĂRI FRECVENTE",
      title: "Răspundem la toate îndoielile tale",
      subtitle: "Totul este transparent, cinstit și fără taxe ascunse",
      q1: "Ce este inclus exact în clipul de 600 MDL?",
      a1: "În 600 MDL se include totul: scenariu cu cârlig, filmare la locație în Chișinău, montaj dinamic, sound design, subtitrări și corecție de culoare.",
      q2: "Cât timp durează filmarea și montajul?",
      a2: "Filmarea durează 1-2 ore. Videoclipul montat este gata în 24-48 de ore de la filmare.",
      q3: "Filmați doar în Chișinău?",
      a3: "Filmarea principală are loc în Chișinău și suburbii. De asemenea, ne deplasăm în toată Moldova (Bălți, Orhei, Cahul, Ungheni).",
      q4: "Trebuie să apar eu personal în cadru?",
      a4: "Nu este obligatoriu! Putem filma doar produsul, procesul de lucru sau putem invita un actor/model din echipa noastră.",
      q5: "În ce limbă sunt create videoclipurile?",
      a5: "Creăm clipuri în română și rusă (RO / RU). Putem realiza versiuni dublate în ambele limbi.",
      q6: "Cum se efectuează plata?",
      a6: "Plata se face convenabil: numerar, transfer pe card sau prin cont bancar pentru persoane juridice."
    },
    finalCta: {
      badge: "🔥 EȘTI GATA SĂ EXPLODEZI PE REȚELE?",
      title: "Rezervă filmarea chiar acum cu 600 MDL",
      subtitle: "Au rămas doar 3 locuri libere în această săptămână. Fixează prețul și primește scenariul gratuit!",
      btnModal: "⚡ Rezervă filmare cu 600 MDL",
      phoneDirect: "Sau sună-ne direct: +373 60 123 456"
    },
    modal: {
      title: "🚀 Rezervare Filmare Video (600 MDL)",
      subtitle: "Completează formularul și te contactăm în 15 minute!",
      nameLabel: "Numele tău:",
      namePlaceholder: "De exemplu: Alexandru",
      phoneLabel: "Telefon / WhatsApp:",
      phonePlaceholder: "+373 68 XXXXXX",
      nicheLabel: "Nișa ta de afaceri:",
      nichePlaceholder: "Restaurant, Salon, Imobiliare...",
      countLabel: "Numărul de clipuri:",
      langLabel: "Limba preferată a clipului:",
      langRu: "Rusă (RU)",
      langRo: "Română (RO)",
      langBoth: "Ambele limbi (RU + RO)",
      btnSubmit: "💥 Trimite cererea cu 600 MDL",
      successMsg: "🎉 Cererea a fost trimisă cu succes! Te sunăm în 15 minute!"
    },
    footer: {
      brand: "VIRALIS MEDIA STUDIO MOLDOVA",
      desc: "Video marketing neo-brutalist și producție de videoclipuri virale pentru afaceri. Chișinău, Moldova.",
      address: "📍 Chișinău, bd. Ștefan cel Mare 130",
      phone: "📞 +373 60 123 456",
      rights: "© 2026 VIRALIS Studio. Toate drepturile rezervate. Preț fix 600 MDL."
    }
  }
};

export default function Variant13_NeoBrutalistPop({ lang: propLang = 'ru', setLang: propSetLang }) {
  const [langState, setLangState] = useState(propLang);
  useEffect(() => {
    if (propLang) setLangState(propLang);
  }, [propLang]);
  const lang = propLang || langState;
  const setLang = propSetLang || setLangState;
  const [activeNiche, setActiveNiche] = useState('food');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  
  // Kahneman Loss Slider
  const [daysWithoutReels, setDaysWithoutReels] = useState(14);
  
  // Calculator state
  const [videoQty, setVideoQty] = useState(5);
  const [addonVoice, setAddonVoice] = useState(false);
  const [addonPackaging, setAddonPackaging] = useState(true);
  const [addonTarget, setAddonTarget] = useState(false);
  const [addonTravel, setAddonTravel] = useState(false);

  // Accordion FAQ state
  const [openFaq, setOpenFaq] = useState(0);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    niche: '',
    videos: '5',
    prefLang: 'both'
  });

  const t = dict[lang];

  // Helper toggle language
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ru' ? 'ro' : 'ru'));
  };

  // Calculator computations
  const getBasePrice = (qty) => {
    switch (qty) {
      case 1: return 600;
      case 3: return 1700;
      case 5: return 2800;
      case 10: return 5200;
      case 20: return 9600;
      default: return qty * 550;
    }
  };

  const basePrice = getBasePrice(videoQty);
  const fullPriceWithoutDiscount = videoQty * 600;
  const discountAmount = fullPriceWithoutDiscount - basePrice;

  let addonsPrice = 0;
  if (addonVoice) addonsPrice += 350;
  if (addonPackaging) addonsPrice += 500;
  if (addonTarget) addonsPrice += 800;
  if (addonTravel) addonsPrice += 300;

  const totalPrice = basePrice + addonsPrice;
  const pricePerVideoEffective = Math.round(totalPrice / videoQty);

  // Handle Form Submit
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF0] text-black font-sans selection:bg-[#FF3EA5] selection:text-white">
      
      {/* Top Neo-Brutalist Ticker Bar */}
      <div className="bg-[#FFE600] border-b-4 border-black py-2.5 px-4 overflow-hidden relative font-black tracking-wider text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-black text-white px-2.5 py-0.5 rounded shadow-[2px_2px_0px_0px_#000] uppercase text-[11px]">
              {t.topTicker.alert}
            </span>
            <span className="hidden sm:inline-block font-extrabold">{t.topTicker.price}</span>
            <span className="hidden md:inline-block text-[#FF2E93] font-black">{t.topTicker.slots}</span>
          </div>

          <button
            onClick={toggleLanguage}
            className="bg-[#FF2E93] hover:bg-[#ff1683] text-white px-3 py-1 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] transition-all flex items-center gap-1.5 font-bold cursor-pointer ml-auto"
          >
            <Globe className="w-4 h-4" />
            <span>{t.topTicker.langSwitch}</span>
          </button>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#FFFDF0]/95 backdrop-blur-md border-b-4 border-black py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo Neo-Brutalist Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-[#FF2E93] text-white font-black text-xl md:text-2xl px-3 py-1.5 border-3 border-black shadow-[4px_4px_0px_0px_#000] group-hover:rotate-[-2deg] transition-transform">
              VIRALIS<span className="text-[#FFE600] ml-1">600</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-black text-xs tracking-widest uppercase bg-[#00F0FF] px-1.5 border border-black shadow-[2px_2px_0px_0px_#000]">
                {t.nav.brandSub}
              </span>
              <span className="text-[10px] font-bold text-gray-700">600 MDL / video</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 font-extrabold text-sm">
            <a href="#kahneman" className="hover:bg-[#FFE600] px-2 py-1 border border-transparent hover:border-black rounded transition-all">{t.nav.whyUs}</a>
            <a href="#showcase" className="hover:bg-[#00F0FF] px-2 py-1 border border-transparent hover:border-black rounded transition-all">{t.nav.reels}</a>
            <a href="#calculator" className="hover:bg-[#00E676] px-2 py-1 border border-transparent hover:border-black rounded transition-all">{t.nav.calculator}</a>
            <a href="#contrast" className="hover:bg-[#FF2E93] hover:text-white px-2 py-1 border border-transparent hover:border-black rounded transition-all">{t.nav.contrast}</a>
            <a href="#reviews" className="hover:bg-[#9D4EDD] hover:text-white px-2 py-1 border border-transparent hover:border-black rounded transition-all">{t.nav.reviews}</a>
            <a href="#faq" className="hover:bg-[#FFE600] px-2 py-1 border border-transparent hover:border-black rounded transition-all">{t.nav.faq}</a>
          </nav>

          {/* CTA Header Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#00E676] hover:bg-[#00c865] text-black font-black px-4 py-2 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>{t.nav.cta}</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden bg-[#FFFDF0]">
        
        {/* Floating Human Stickers (Neo-Brutalist Accent Cards) */}
        <div className="absolute top-6 left-4 md:left-12 rotate-[-5deg] z-10 hidden sm:block">
          <div className="bg-[#FFE600] text-black font-black text-xs md:text-sm px-3 py-1.5 border-3 border-black shadow-[5px_5px_0px_0px_#000] flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-[#FF2E93] fill-[#FF2E93]" />
            <span>{t.stickers.viralViews}</span>
          </div>
        </div>

        <div className="absolute top-10 right-4 md:right-16 rotate-[4deg] z-10 hidden sm:block">
          <div className="bg-[#00F0FF] text-black font-black text-xs md:text-sm px-3 py-1.5 border-3 border-black shadow-[5px_5px_0px_0px_#000] flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-black" />
            <span>{t.stickers.fastDelivery}</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 rotate-[3deg] z-10 hidden md:block">
          <div className="bg-[#00E676] text-black font-black text-xs md:text-sm px-3 py-1.5 border-3 border-black shadow-[5px_5px_0px_0px_#000] flex items-center gap-1.5">
            <span>{t.stickers.moldovaLocal}</span>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 rotate-[-4deg] z-10 hidden md:block">
          <div className="bg-[#FF2E93] text-white font-black text-xs md:text-sm px-3 py-1.5 border-3 border-black shadow-[5px_5px_0px_0px_#000] flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-[#FFE600]" />
            <span>{t.stickers.fixedPrice}</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-20">
          {/* Top Hero Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white text-black font-extrabold text-xs md:text-sm px-4 py-2 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_#000] mb-6">
            <Sparkles className="w-4 h-4 text-[#FF2E93]" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Massive Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight uppercase mb-6">
            <span className="block text-black">{t.hero.titlePrefix}</span>
            <span className="inline-block bg-[#FF2E93] text-white px-3 sm:px-5 py-1 my-2 border-4 border-black shadow-[6px_6px_0px_0px_#000] rotate-[-1deg]">
              {t.hero.titleHighlight}
            </span>
            <br />
            <span className="inline-block bg-[#FFE600] text-black px-3 sm:px-4 py-0.5 border-4 border-black shadow-[5px_5px_0px_0px_#000] rotate-[1deg]">
              {t.hero.titleSuffix}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl font-bold text-gray-900 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#FF2E93] hover:bg-[#e02580] text-white font-black text-lg px-8 py-4 rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[9px_9px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0px_0px_#000] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>{t.hero.btnOrder}</span>
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </button>

            <a
              href="#calculator"
              className="w-full sm:w-auto bg-[#00F0FF] hover:bg-[#00d6e5] text-black font-black text-lg px-8 py-4 rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[9px_9px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0px_0px_#000] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <Calculator className="w-6 h-6" />
              <span>{t.hero.btnCalc}</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-extrabold text-black">
            <span className="bg-white px-3 py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] rounded-lg">{t.hero.trust1}</span>
            <span className="bg-[#FFE600] px-3 py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] rounded-lg">{t.hero.trust2}</span>
            <span className="bg-[#00E676] px-3 py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] rounded-lg">{t.hero.trust3}</span>
          </div>

          {/* Big Stat Counter Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white p-4 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl text-center transform hover:rotate-[-1deg] transition-transform">
              <div className="text-2xl sm:text-4xl font-black text-[#FF2E93]">{t.hero.stat1Number}</div>
              <div className="text-xs sm:text-sm font-black uppercase text-gray-800 mt-1">{t.hero.stat1Label}</div>
            </div>
            <div className="bg-[#FFE600] p-4 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl text-center transform hover:rotate-[1deg] transition-transform">
              <div className="text-2xl sm:text-4xl font-black text-black">{t.hero.stat2Number}</div>
              <div className="text-xs sm:text-sm font-black uppercase text-gray-900 mt-1">{t.hero.stat2Label}</div>
            </div>
            <div className="bg-[#00F0FF] p-4 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl text-center transform hover:rotate-[-1deg] transition-transform">
              <div className="text-2xl sm:text-4xl font-black text-black">{t.hero.stat3Number}</div>
              <div className="text-xs sm:text-sm font-black uppercase text-gray-900 mt-1">{t.hero.stat3Label}</div>
            </div>
            <div className="bg-[#00E676] p-4 border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl text-center transform hover:rotate-[1deg] transition-transform">
              <div className="text-2xl sm:text-4xl font-black text-black">{t.hero.stat4Number}</div>
              <div className="text-xs sm:text-sm font-black uppercase text-gray-900 mt-1">{t.hero.stat4Label}</div>
            </div>
          </div>

        </div>
      </section>

      {/* KAHNEMAN BEHAVIORAL PSYCHOLOGY & LOSS AVERSION SECTION */}
      <section id="kahneman" className="py-16 px-4 md:px-8 bg-[#FFE600] border-y-4 border-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="inline-block bg-black text-[#FFE600] font-black text-xs md:text-sm px-4 py-1.5 rounded-full shadow-[3px_3px_0px_0px_#fff] mb-4 uppercase">
              {t.kahneman.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black mb-4 tracking-tight">
              {t.kahneman.title}
            </h2>
            <p className="text-base sm:text-lg font-bold text-gray-900 max-w-2xl mx-auto">
              {t.kahneman.subtitle}
            </p>
          </div>

          {/* 3 Cognitive Trigger Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            <div className="bg-white p-6 rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_#000] hover:translate-y-[-4px] transition-transform">
              <div className="bg-[#00F0FF] w-12 h-12 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-black fill-black" />
              </div>
              <h3 className="text-xl font-black uppercase mb-2 text-black">{t.kahneman.card1Title}</h3>
              <p className="text-sm font-bold text-gray-800 leading-relaxed">{t.kahneman.card1Desc}</p>
            </div>

            <div className="bg-[#FF2E93] text-white p-6 rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_#000] hover:translate-y-[-4px] transition-transform">
              <div className="bg-[#FFE600] w-12 h-12 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-black uppercase mb-2 text-white">{t.kahneman.card2Title}</h3>
              <p className="text-sm font-extrabold text-white/95 leading-relaxed">{t.kahneman.card2Desc}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_#000] hover:translate-y-[-4px] transition-transform">
              <div className="bg-[#00E676] w-12 h-12 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-black uppercase mb-2 text-black">{t.kahneman.card3Title}</h3>
              <p className="text-sm font-bold text-gray-800 leading-relaxed">{t.kahneman.card3Desc}</p>
            </div>

          </div>

          {/* Interactive Loss Calculator Slider */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_#000]">
            <h3 className="text-2xl font-black uppercase text-center mb-6">{t.kahneman.sliderTitle}</h3>
            
            <div className="max-w-xl mx-auto mb-8">
              <div className="flex justify-between items-center font-black text-sm mb-2">
                <span>{t.kahneman.sliderDaysLabel}</span>
                <span className="bg-[#FF2E93] text-white px-3 py-1 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                  {daysWithoutReels} {lang === 'ru' ? 'дней' : 'zile'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={daysWithoutReels}
                onChange={(e) => setDaysWithoutReels(parseInt(e.target.value))}
                className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF2E93] border-2 border-black"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
              <div className="bg-[#FFFDF0] p-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] text-center">
                <span className="text-xs font-black uppercase text-gray-600 block">{t.kahneman.lostLeads}</span>
                <span className="text-3xl font-black text-[#FF2E93]">~{daysWithoutReels * 2} - {daysWithoutReels * 4}</span>
              </div>
              <div className="bg-[#FFFDF0] p-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] text-center">
                <span className="text-xs font-black uppercase text-gray-600 block">{t.kahneman.lostRevenue}</span>
                <span className="text-3xl font-black text-black">~{daysWithoutReels * 300} - {daysWithoutReels * 600} MDL</span>
              </div>
            </div>

            <p className="text-center font-extrabold text-sm text-gray-900 bg-[#00F0FF] p-3 rounded-xl border-2 border-black max-w-xl mx-auto">
              {t.kahneman.calcWarning}
            </p>
          </div>

        </div>
      </section>

      {/* INTERACTIVE 9:16 REEL SHOWCASE / SIMULATOR */}
      <section id="showcase" className="py-16 px-4 md:px-8 bg-[#FFFDF0]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="inline-block bg-[#00F0FF] text-black font-black text-xs md:text-sm px-4 py-1.5 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000] mb-4 uppercase">
              {t.showcase.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black mb-3">
              {t.showcase.title}
            </h2>
            <p className="text-base sm:text-lg font-bold text-gray-800">
              {t.showcase.subtitle}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { id: 'food', label: t.showcase.tabFood, color: '#FFE600' },
              { id: 'beauty', label: t.showcase.tabBeauty, color: '#FF2E93' },
              { id: 'realty', label: t.showcase.tabRealty, color: '#00F0FF' },
              { id: 'ecom', label: t.showcase.tabEcom, color: '#00E676' },
              { id: 'services', label: t.showcase.tabServices, color: '#9D4EDD' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveNiche(tab.id)}
                style={{ backgroundColor: activeNiche === tab.id ? tab.color : '#FFFFFF' }}
                className={`font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] transition-all cursor-pointer ${
                  activeNiche === tab.id ? 'translate-x-[-1px] translate-y-[-1px] shadow-[6px_6px_0px_0px_#000]' : 'hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 9:16 Phone Player Mockup & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Left/Center: Phone Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[290px] sm:w-[320px] h-[540px] bg-black rounded-[40px] border-4 border-black shadow-[12px_12px_0px_0px_#000] relative overflow-hidden flex flex-col justify-between p-4 text-white select-none">
                
                {/* Background Image / Overlay Simulation */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/40 to-black/90 z-0">
                  {/* Visual Niche Theme Decorative Graphics */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    {activeNiche === 'food' && <div className="text-8xl">🍕</div>}
                    {activeNiche === 'beauty' && <div className="text-8xl">💄</div>}
                    {activeNiche === 'realty' && <div className="text-8xl">🏠</div>}
                    {activeNiche === 'ecom' && <div className="text-8xl">🛍️</div>}
                    {activeNiche === 'services' && <div className="text-8xl">🚗</div>}
                  </div>
                </div>

                {/* Top Bar inside Phone */}
                <div className="relative z-10 flex justify-between items-center font-black text-xs bg-black/50 p-2 rounded-xl backdrop-blur-md border border-white/20">
                  <span className="flex items-center gap-1.5 text-[#FFE600]">
                    <Flame className="w-4 h-4 fill-[#FFE600]" />
                    <span>{t.showcase.hookScore} 98.6/100</span>
                  </span>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 bg-white/20 rounded-lg hover:bg-white/40 cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Center Play Button Overlay */}
                <div className="relative z-10 self-center my-auto text-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 bg-[#FF2E93] text-white rounded-full border-3 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center mx-auto hover:scale-105 transition-transform cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white ml-1" />}
                  </button>
                  <span className="inline-block mt-3 bg-black/80 text-white font-extrabold text-xs px-3 py-1 rounded-full border border-white/30">
                    {isPlaying ? '▶️ Playing Hook' : '⏸️ Paused'}
                  </span>
                </div>

                {/* Right Action Icons inside Reel */}
                <div className="absolute right-4 bottom-24 z-10 flex flex-col items-center gap-4">
                  <div className="flex flex-col items-center">
                    <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40">
                      <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                    </button>
                    <span className="text-[10px] font-bold mt-1">{t.showcase.likesCount}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </button>
                    <span className="text-[10px] font-bold mt-1">{t.showcase.commentsCount}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40">
                      <Share2 className="w-6 h-6 text-white" />
                    </button>
                    <span className="text-[10px] font-bold mt-1">{t.showcase.sharesCount}</span>
                  </div>
                </div>

                {/* Bottom info inside Reel */}
                <div className="relative z-10 bg-black/70 p-3 rounded-2xl backdrop-blur-md border border-white/20 text-left">
                  <div className="font-extrabold text-xs text-[#FFE600] mb-1">@viralis.moldova • 600 MDL Reel</div>
                  <p className="text-[11px] font-medium leading-snug line-clamp-2 text-white/90">
                    {activeNiche === 'food' && t.showcase.nicheFoodDesc}
                    {activeNiche === 'beauty' && t.showcase.nicheBeautyDesc}
                    {activeNiche === 'realty' && t.showcase.nicheRealtyDesc}
                    {activeNiche === 'ecom' && t.showcase.nicheEcomDesc}
                    {activeNiche === 'services' && t.showcase.nicheServicesDesc}
                  </p>
                </div>

              </div>
            </div>

            {/* Right: Description & Order trigger */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000]">
                <div className="inline-block bg-[#FFE600] text-black font-black text-xs px-3 py-1 rounded-md border border-black mb-3">
                  {t.showcase.viewsCount}
                </div>
                <h3 className="text-2xl font-black uppercase text-black mb-3">
                  {activeNiche === 'food' && t.showcase.tabFood}
                  {activeNiche === 'beauty' && t.showcase.tabBeauty}
                  {activeNiche === 'realty' && t.showcase.tabRealty}
                  {activeNiche === 'ecom' && t.showcase.tabEcom}
                  {activeNiche === 'services' && t.showcase.tabServices}
                </h3>
                <p className="text-base font-bold text-gray-800 mb-4 leading-relaxed">
                  {activeNiche === 'food' && t.showcase.nicheFoodDesc}
                  {activeNiche === 'beauty' && t.showcase.nicheBeautyDesc}
                  {activeNiche === 'realty' && t.showcase.nicheRealtyDesc}
                  {activeNiche === 'ecom' && t.showcase.nicheEcomDesc}
                  {activeNiche === 'services' && t.showcase.nicheServicesDesc}
                </p>

                <ul className="space-y-2 font-extrabold text-xs sm:text-sm text-black mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#00E676] fill-black" />
                    <span>Сценарий с удержанием внимания 98%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#00E676] fill-black" />
                    <span>Профессиональный студийный звук и свет</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#00E676] fill-black" />
                    <span>Монтаж под формат TikTok / Instagram Reels / Shorts</span>
                  </li>
                </ul>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#00E676] hover:bg-[#00c564] text-black font-black text-base py-3.5 px-6 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_#000] transition-all cursor-pointer"
                >
                  {t.showcase.ctaInVideo}
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* DYNAMIC CALCULATOR SECTION */}
      <section id="calculator" className="py-16 px-4 md:px-8 bg-[#00F0FF] border-y-4 border-black">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="inline-block bg-white text-black font-black text-xs md:text-sm px-4 py-1.5 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000] mb-4 uppercase">
              {t.calculator.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black mb-3">
              {t.calculator.title}
            </h2>
            <p className="text-base sm:text-lg font-bold text-black/90">
              {t.calculator.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Controls */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000]">
              
              {/* Quantity selector */}
              <div className="mb-6">
                <label className="block font-black text-sm uppercase mb-3 text-black">
                  {t.calculator.videoCountLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { qty: 1, label: t.calculator.v1 },
                    { qty: 3, label: t.calculator.v3 },
                    { qty: 5, label: t.calculator.v5 },
                    { qty: 10, label: t.calculator.v10 },
                    { qty: 20, label: t.calculator.v20 }
                  ].map((item) => (
                    <button
                      key={item.qty}
                      type="button"
                      onClick={() => setVideoQty(item.qty)}
                      className={`p-3 text-left font-black text-xs sm:text-sm rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] transition-all cursor-pointer ${
                        videoQty === item.qty
                          ? 'bg-[#FFE600] translate-x-[-1px] translate-y-[-1px] shadow-[5px_5px_0px_0px_#000]'
                          : 'bg-[#FFFDF0] hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons Checkboxes */}
              <div className="space-y-3">
                <label className="block font-black text-sm uppercase text-black">
                  {t.calculator.addonsTitle}
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#FFFDF0] rounded-xl border-2 border-black cursor-pointer font-bold text-xs sm:text-sm">
                  <input
                    type="checkbox"
                    checked={addonVoice}
                    onChange={(e) => setAddonVoice(e.target.checked)}
                    className="w-5 h-5 accent-[#FF2E93] border-2 border-black rounded"
                  />
                  <span>{t.calculator.addon1}</span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#FFFDF0] rounded-xl border-2 border-black cursor-pointer font-bold text-xs sm:text-sm">
                  <input
                    type="checkbox"
                    checked={addonPackaging}
                    onChange={(e) => setAddonPackaging(e.target.checked)}
                    className="w-5 h-5 accent-[#FF2E93] border-2 border-black rounded"
                  />
                  <span>{t.calculator.addon2}</span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#FFFDF0] rounded-xl border-2 border-black cursor-pointer font-bold text-xs sm:text-sm">
                  <input
                    type="checkbox"
                    checked={addonTarget}
                    onChange={(e) => setAddonTarget(e.target.checked)}
                    className="w-5 h-5 accent-[#FF2E93] border-2 border-black rounded"
                  />
                  <span>{t.calculator.addon3}</span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#FFFDF0] rounded-xl border-2 border-black cursor-pointer font-bold text-xs sm:text-sm">
                  <input
                    type="checkbox"
                    checked={addonTravel}
                    onChange={(e) => setAddonTravel(e.target.checked)}
                    className="w-5 h-5 accent-[#FF2E93] border-2 border-black rounded"
                  />
                  <span>{t.calculator.addon4}</span>
                </label>
              </div>

            </div>

            {/* Right 5 cols: Calculation Summary Box */}
            <div className="lg:col-span-5 bg-[#FF2E93] text-white p-6 sm:p-8 rounded-3xl border-4 border-black shadow-[10px_10px_0px_0px_#000]">
              <h3 className="text-xl font-black uppercase text-[#FFE600] mb-4">
                {t.calculator.summaryTitle}
              </h3>

              <div className="space-y-3 font-extrabold text-sm border-b-3 border-black pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-white/90">{t.calculator.videosTotal}</span>
                  <span>{basePrice} MDL</span>
                </div>
                {addonsPrice > 0 && (
                  <div className="flex justify-between text-[#FFE600]">
                    <span>{t.calculator.addonsTotal}</span>
                    <span>+{addonsPrice} MDL</span>
                  </div>
                )}
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#00E676]">
                    <span>{t.calculator.discountLabel}</span>
                    <span>-{discountAmount} MDL</span>
                  </div>
                )}
              </div>

              {/* Total Banner */}
              <div className="bg-[#FFE600] text-black p-4 rounded-2xl border-3 border-black shadow-[4px_4px_0px_0px_#000] mb-6 text-center">
                <div className="text-xs font-black uppercase text-gray-800">{t.calculator.finalPrice}</div>
                <div className="text-4xl font-black">{totalPrice} MDL</div>
                <div className="text-xs font-extrabold text-gray-900 mt-1">
                  {t.calculator.perVideoPrice} <span className="underline">{pricePerVideoEffective} MDL</span>
                </div>
              </div>

              {/* Bonus Card */}
              <div className="bg-white/20 p-3 rounded-xl border border-white/40 mb-6 text-xs font-bold">
                <div className="text-[#FFE600] font-black">{t.calculator.bonusTitle}</div>
                <div>{t.calculator.bonusText}</div>
              </div>

              <button
                onClick={() => {
                  setFormData({ ...formData, videos: videoQty.toString() });
                  setIsModalOpen(true);
                }}
                className="w-full bg-[#00E676] hover:bg-[#00c764] text-black font-black py-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_#000] transition-all text-base cursor-pointer uppercase"
              >
                {t.calculator.btnOrderCalc}
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* CONTRAST MATRIX: OLD vs NEW NEO-BRUTALIST REEL */}
      <section id="contrast" className="py-16 px-4 md:px-8 bg-[#FFFDF0]">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="inline-block bg-[#FF2E93] text-white font-black text-xs md:text-sm px-4 py-1.5 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000] mb-4 uppercase">
              {t.contrast.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black mb-3">
              {t.contrast.title}
            </h2>
            <p className="text-base sm:text-lg font-bold text-gray-800">
              {t.contrast.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Old Boring Card */}
            <div className="bg-gray-100 p-6 sm:p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000]">
              <div className="bg-red-500 text-white font-black text-lg px-4 py-2 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] inline-block mb-6">
                {t.contrast.oldTitle}
              </div>
              <ul className="space-y-4 font-bold text-sm text-gray-800">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{t.contrast.old1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{t.contrast.old2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{t.contrast.old3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{t.contrast.old4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{t.contrast.old5}</span>
                </li>
              </ul>
            </div>

            {/* New Neo-Brutalist Card */}
            <div className="bg-[#FFE600] p-6 sm:p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_#000] rotate-[0.5deg]">
              <div className="bg-[#FF2E93] text-white font-black text-lg px-4 py-2 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_#000] inline-block mb-6">
                {t.contrast.newTitle}
              </div>
              <ul className="space-y-4 font-black text-sm text-black">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676] fill-black shrink-0 mt-0.5" />
                  <span>{t.contrast.new1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676] fill-black shrink-0 mt-0.5" />
                  <span>{t.contrast.new2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676] fill-black shrink-0 mt-0.5" />
                  <span>{t.contrast.new3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676] fill-black shrink-0 mt-0.5" />
                  <span>{t.contrast.new4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00E676] fill-black shrink-0 mt-0.5" />
                  <span>{t.contrast.new5}</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4-STEP PRODUCTION PROCESS */}
      <section className="py-16 px-4 md:px-8 bg-[#00E676] border-y-4 border-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="inline-block bg-black text-[#00E676] font-black text-xs md:text-sm px-4 py-1.5 rounded-full shadow-[3px_3px_0px_0px_#fff] mb-4 uppercase">
              {t.process.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black mb-3">
              {t.process.title}
            </h2>
            <p className="text-base sm:text-lg font-bold text-black/90">
              {t.process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-[6px_6px_0px_0px_#000] relative">
              <span className="text-4xl font-black text-[#FF2E93] block mb-2">{t.process.step1Num}</span>
              <h3 className="text-lg font-black uppercase text-black mb-2">{t.process.step1Title}</h3>
              <p className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">{t.process.step1Desc}</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-[6px_6px_0px_0px_#000] relative">
              <span className="text-4xl font-black text-[#00F0FF] block mb-2">{t.process.step2Num}</span>
              <h3 className="text-lg font-black uppercase text-black mb-2">{t.process.step2Title}</h3>
              <p className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">{t.process.step2Desc}</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-[6px_6px_0px_0px_#000] relative">
              <span className="text-4xl font-black text-[#FFE600] block mb-2">{t.process.step3Num}</span>
              <h3 className="text-lg font-black uppercase text-black mb-2">{t.process.step3Title}</h3>
              <p className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">{t.process.step3Desc}</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-[6px_6px_0px_0px_#000] relative">
              <span className="text-4xl font-black text-[#9D4EDD] block mb-2">{t.process.step4Num}</span>
              <h3 className="text-lg font-black uppercase text-black mb-2">{t.process.step4Title}</h3>
              <p className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">{t.process.step4Desc}</p>
            </div>

          </div>

        </div>
      </section>

      {/* TESTIMONIALS & CASE STUDIES */}
      <section id="reviews" className="py-16 px-4 md:px-8 bg-[#FFFDF0]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="inline-block bg-[#9D4EDD] text-white font-black text-xs md:text-sm px-4 py-1.5 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_#000] mb-4 uppercase">
              {t.reviews.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black mb-3">
              {t.reviews.title}
            </h2>
            <p className="text-base sm:text-lg font-bold text-gray-800">
              {t.reviews.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-[7px_7px_0px_0px_#000]">
              <div className="bg-[#FFE600] text-black font-black text-xs px-3 py-1 rounded-md border border-black inline-block mb-3">
                {t.reviews.r1Badge}
              </div>
              <div className="flex text-[#FF2E93] mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-bold text-gray-800 mb-4 leading-relaxed font-sans">
                "{t.reviews.r1Text}"
              </p>
              <div className="border-t-2 border-black pt-3">
                <div className="font-black text-sm">{t.reviews.r1Name}</div>
                <div className="text-xs font-bold text-gray-600">{t.reviews.r1Role}</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-[7px_7px_0px_0px_#000]">
              <div className="bg-[#FF2E93] text-white font-black text-xs px-3 py-1 rounded-md border border-black inline-block mb-3">
                {t.reviews.r2Badge}
              </div>
              <div className="flex text-[#FF2E93] mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-bold text-gray-800 mb-4 leading-relaxed font-sans">
                "{t.reviews.r2Text}"
              </p>
              <div className="border-t-2 border-black pt-3">
                <div className="font-black text-sm">{t.reviews.r2Name}</div>
                <div className="text-xs font-bold text-gray-600">{t.reviews.r2Role}</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border-4 border-black shadow-[7px_7px_0px_0px_#000]">
              <div className="bg-[#00F0FF] text-black font-black text-xs px-3 py-1 rounded-md border border-black inline-block mb-3">
                {t.reviews.r3Badge}
              </div>
              <div className="flex text-[#FF2E93] mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-bold text-gray-800 mb-4 leading-relaxed font-sans">
                "{t.reviews.r3Text}"
              </p>
              <div className="border-t-2 border-black pt-3">
                <div className="font-black text-sm">{t.reviews.r3Name}</div>
                <div className="text-xs font-bold text-gray-600">{t.reviews.r3Role}</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ACCORDION FAQ SECTION */}
      <section id="faq" className="py-16 px-4 md:px-8 bg-[#FFE600] border-t-4 border-black">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="inline-block bg-black text-[#FFE600] font-black text-xs md:text-sm px-4 py-1.5 rounded-full shadow-[3px_3px_0px_0px_#fff] mb-4 uppercase">
              {t.faq.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black mb-3">
              {t.faq.title}
            </h2>
            <p className="text-base sm:text-lg font-bold text-black/90">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
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
                className="bg-white rounded-2xl border-4 border-black shadow-[5px_5px_0px_0px_#000] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left font-black text-base sm:text-lg flex justify-between items-center gap-4 cursor-pointer hover:bg-gray-50"
                >
                  <span className="text-black">{item.q}</span>
                  <div className="bg-[#FF2E93] text-white p-1 rounded-lg border-2 border-black shrink-0">
                    {openFaq === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                
                {openFaq === idx && (
                  <div className="p-5 pt-0 font-bold text-sm text-gray-800 border-t-2 border-gray-100 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL HIGH-IMPACT CTA BANNER */}
      <section className="py-16 px-4 md:px-8 bg-[#FF2E93] text-white border-t-4 border-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-block bg-[#FFE600] text-black font-black text-xs md:text-sm px-4 py-1.5 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_#000] mb-6 uppercase">
            {t.finalCta.badge}
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white mb-6 tracking-tight leading-tight">
            {t.finalCta.title}
          </h2>

          <p className="text-lg sm:text-xl font-extrabold text-[#FFE600] max-w-2xl mx-auto mb-8">
            {t.finalCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#00E676] hover:bg-[#00c564] text-black font-black text-lg px-8 py-4 rounded-2xl border-4 border-black shadow-[7px_7px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[9px_9px_0px_0px_#000] transition-all cursor-pointer uppercase"
            >
              {t.finalCta.btnModal}
            </button>
          </div>

          <div className="mt-6 text-sm font-black text-white/90">
            {t.finalCta.phoneDirect}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 px-4 md:px-8 border-t-4 border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          <div>
            <div className="bg-[#FF2E93] text-white font-black text-xl px-3 py-1 inline-block border-2 border-white mb-2">
              VIRALIS 600
            </div>
            <p className="text-xs font-bold text-gray-400 max-w-md">
              {t.footer.desc}
            </p>
          </div>

          <div className="text-xs font-bold space-y-1 text-gray-300">
            <div>{t.footer.address}</div>
            <div>{t.footer.phone}</div>
            <div className="text-gray-500 pt-2">{t.footer.rights}</div>
          </div>

        </div>
      </footer>

      {/* STICKY BOTTOM ACTION BAR */}
      <div className="fixed bottom-4 left-4 right-4 z-40 max-w-xl mx-auto bg-black text-white p-3 rounded-2xl border-3 border-white shadow-[6px_6px_0px_0px_#000] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-black text-xs sm:text-sm">
          <span className="bg-[#FFE600] text-black px-2 py-0.5 rounded border border-black">600 MDL</span>
          <span className="hidden sm:inline-block text-white/90">Кишинёв & Молдова</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="bg-[#00F0FF] text-black text-xs font-black px-2.5 py-1.5 rounded-lg border border-black cursor-pointer"
          >
            {lang === 'ru' ? 'RO 🇲🇩' : 'RU 🇷🇺'}
          </button>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#FF2E93] hover:bg-[#e02580] text-white font-black text-xs sm:text-sm px-4 py-1.5 rounded-lg border border-white shadow-[2px_2px_0px_0px_#fff] cursor-pointer"
          >
            {t.nav.cta}
          </button>
        </div>
      </div>

      {/* BOOKING MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFDF0] w-full max-w-lg rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_#000] p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-[#FF2E93] text-white p-2 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] cursor-pointer hover:bg-black"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#00E676] rounded-full border-3 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-black stroke-[3]" />
                </div>
                <h3 className="text-2xl font-black uppercase mb-2">{t.modal.successMsg}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmitOrder} className="space-y-4">
                
                <h3 className="text-2xl font-black uppercase text-black">{t.modal.title}</h3>
                <p className="text-xs font-bold text-gray-700">{t.modal.subtitle}</p>

                <div>
                  <label className="block text-xs font-black uppercase mb-1">{t.modal.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.modal.namePlaceholder}
                    className="w-full p-3 rounded-xl border-3 border-black font-bold text-sm bg-white focus:outline-none focus:bg-[#FFE600]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase mb-1">{t.modal.phoneLabel}</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.modal.phonePlaceholder}
                    className="w-full p-3 rounded-xl border-3 border-black font-bold text-sm bg-white focus:outline-none focus:bg-[#FFE600]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase mb-1">{t.modal.nicheLabel}</label>
                  <input
                    type="text"
                    value={formData.niche}
                    onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                    placeholder={t.modal.nichePlaceholder}
                    className="w-full p-3 rounded-xl border-3 border-black font-bold text-sm bg-white focus:outline-none focus:bg-[#FFE600]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase mb-1">{t.modal.countLabel}</label>
                  <select
                    value={formData.videos}
                    onChange={(e) => setFormData({ ...formData, videos: e.target.value })}
                    className="w-full p-3 rounded-xl border-3 border-black font-bold text-sm bg-white focus:outline-none"
                  >
                    <option value="1">1 {lang === 'ru' ? 'ролик (600 MDL)' : 'video (600 MDL)'}</option>
                    <option value="3">3 {lang === 'ru' ? 'ролика (1,700 MDL)' : 'video-uri (1,700 MDL)'}</option>
                    <option value="5">5 {lang === 'ru' ? 'роликов (2,800 MDL)' : 'video-uri (2,800 MDL)'}</option>
                    <option value="10">10 {lang === 'ru' ? 'роликов (5,200 MDL)' : 'video-uri (5,200 MDL)'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase mb-1">{t.modal.langLabel}</label>
                  <select
                    value={formData.prefLang}
                    onChange={(e) => setFormData({ ...formData, prefLang: e.target.value })}
                    className="w-full p-3 rounded-xl border-3 border-black font-bold text-sm bg-white focus:outline-none"
                  >
                    <option value="ru">{t.modal.langRu}</option>
                    <option value="ro">{t.modal.langRo}</option>
                    <option value="both">{t.modal.langBoth}</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF2E93] hover:bg-[#e02580] text-white font-black text-base py-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_#000] transition-all cursor-pointer uppercase mt-4"
                >
                  {t.modal.btnSubmit}
                </button>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
