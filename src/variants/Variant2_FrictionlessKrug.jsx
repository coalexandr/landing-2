import React, { useState, useEffect, useMemo } from 'react';
import {
  Video,
  Sparkles,
  Play,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Award,
  TrendingUp,
  Zap,
  Star,
  Moon,
  Sun,
  Globe,
  Layers,
  Eye,
  X,
  Menu
} from 'lucide-react';

// BILINGUAL DICTIONARY (100% Zero English UI Text)
const translations = {
  ru: {
    brandName: "VIRALIS Studio",
    topBanner: "🔥 Свободно 3 слота на съёмку в Кишинёве на этой неделе • Фиксированная цена 600 MDL / ролик",
    nav: {
      services: "Услуги",
      pricing: "Тариф 600 MDL",
      calculator: "Калькулятор",
      comparison: "Сравнение",
      portfolio: "Портфолио",
      process: "Как работаем",
      faq: "Вопросы",
      contacts: "Контакты",
      orderBtn: "Заказать за 600 MDL",
      phone: "+373 78 337 228",
    },
    hero: {
      badge: "⚡ ВИДЕОПРОИЗВОДСТВО В МОЛДОВЕ • 600 MDL / РОЛИК",
      titleLine1: "Продающие видеоролики под ключ",
      titleLine2: "без лишней бюрократии",
      subtitle: "Сценарий, съёмка в Кишинёве, профессиональный монтаж, озвучка и субтитры для Reels, TikTok и Shorts. Готовый ролик за 24–48 часов по прозрачной цене.",
      priceTag: "600 MDL",
      priceSub: "за 1 готовый видеоролик",
      ctaPrimary: "⚡ Заказать ролик за 600 MDL",
      ctaSecondary: "🧮 Рассчитать скидку",
      ctaWhatsapp: "💬 Написать в WhatsApp",
      pillar1Title: "01. Без скрытых наценок",
      pillar1Desc: "Фиксированная цена 600 MDL за 1 готовый профессиональный видеоролик.",
      pillar2Title: "02. Сдача за 24–48 часов",
      pillar2Desc: "Первые готовые ролики у вас на руках уже через 1–2 дня после съёмки.",
      pillar3Title: "03. Полный цикл под ключ",
      pillar3Desc: "Мы сами приедем, напишем сценарий, снимем, смонтируем и наложим субтитры.",
      stat1Num: "500+",
      stat1Label: "Отснятых роликов",
      stat2Num: "10M+",
      stat2Label: "Просмотров у клиентов",
      stat3Num: "24–48ч",
      stat3Label: "Срок сдачи монтажа",
      stat4Num: "600 MDL",
      stat4Label: "Фиксированная цена",
    },
    pricing: {
      badge: "Прозрачный тариф",
      title: "Один честный тариф для любого бизнеса",
      subtitle: "Мы убрали сложные сметы и комиссии. Вы точно знаете, за что платите.",
      cardTitle: "Пакет «Вирусный Ролик»",
      price: "600 MDL",
      priceUnit: "за 1 готовое видео",
      discountNotice: "🎉 При заказе от 5 роликов скидка до 15%!",
      feature1: "Разработка авторского вирусного сценария и цепляющего крючка (Hook)",
      feature2: "Выездная съёмка в Кишинёве и Молдове (на вашей локации или в студии)",
      feature3: "Динамичный монтаж с цветокоррекцией и переходами",
      feature4: "Чистая запись звука на петличные микрофоны",
      feature5: "Трендовая музыка и звуковые эффекты (SFX)",
      feature6: "Анимированные субтитры на русском или румынском языке",
      cta: "Забронировать съёмку за 600 MDL",
    },
    calculator: {
      badge: "Интерактивный расчёт",
      title: "Быстрый калькулятор бюджета",
      subtitle: "Выберите количество роликов и опции — посмотрите итоговую сумму со скидкой",
      countLabel: "Количество видеороликов:",
      discountBadge: "Скидка за объём:",
      addonTitle: "Дополнительные услуги (по желанию):",
      addon1Title: "Упаковка и оформление аккаунта (Instagram / TikTok / FB)",
      addon1Price: "+500 MDL",
      addon2Title: "Настройка таргетированной рекламы (Facebook & Instagram Ads)",
      addon2Price: "+800 MDL",
      summaryBase: "Базовая цена:",
      summaryDiscount: "Ваша скидка:",
      summaryAddons: "Доп. услуги:",
      summaryTotal: "ИТОГО К ОПЛАТЕ:",
      summarySavings: "Вы экономите:",
      perVideoCost: "Цена за 1 ролик со скидкой:",
      cta: "Оформить заказ по этой счете",
    },
    comparison: {
      badge: "Сравнение подходов",
      title: "Почему ролики VIRALIS приносят продажи",
      subtitle: "Принципы Fitts & Krug: максимум внимания зрителя и 0 лишних шагов к покупке",
      badTitle: "❌ Обычная съёмка на смартфон",
      bad1: "Скучное начало — 85% зрителей пролистывают в первую секунду",
      bad2: "Тихий звук с эхом и сторонним шумом",
      bad3: "Затянутый монотонный монтаж без акцентов",
      bad4: "Нет четкого призыва к действию — 0 клиентов",
      goodTitle: "✅ Вирусный ролик VIRALIS (600 MDL)",
      good1: "Цепляющий Hook с 1-й секунды для удержания внимания",
      good2: "Кристально чистый студийный звук с микрофона",
      good3: "Динамичная смена планов каждые 1.5 сек и яркая графика",
      good4: "Понятный продающий призыв заказать или написать",
    },
    services: {
      badge: "Решения для бизнеса",
      title: "Что мы делаем под ключ",
      subtitle: "Всё необходимый видеоконтент для роста ваших соцсетей и продаж",
      item1Title: "Съёмка & Динамичный Монтаж",
      item1Desc: "Записываем качественный видеоряд и монтируем в трендовом стиле соцсетей.",
      item2Title: "Сценарии & Вирусные Hooks",
      item2Desc: "Разрабатываем завлекающие завязки, удерживающие внимание до конца.",
      item3Title: "Упаковка Аккаунтов",
      item3Desc: "Оформляем профиль в Instagram и TikTok: хайлайтсы, обложки и описания.",
      item4Title: "Таргетированная Реклама",
      item4Desc: "Настраиваем рекламные кампании Facebook Ads для привлечения клиентов.",
      item5Title: "Дубляж & Субтитры (RU/RO)",
      item5Desc: "Профессиональная озвучка и стильные анимированные субтитры на 2 языках.",
      item6Title: "Контент-План на 30 дней",
      item6Desc: "Готовим пошаговую стратегию публикаций, чтобы соцсети работали ежедневно.",
    },
    portfolio: {
      badge: "Примеры работ",
      title: "Портфолио роликов за 600 MDL",
      subtitle: "Нажмите на ролик, чтобы оценить качество съёмки и монтажа",
      catAll: "Все ролики",
      catResto: "Рестораны",
      catServices: "Услуги",
      catProducts: "Товары",
      catBeauty: "Бьюти",
      viewsLabel: "просмотров",
      playBtn: "Смотреть ролик",
    },
    process: {
      badge: "Простой процесс",
      title: "Как получить готовые ролики за 3 шага",
      subtitle: "Минимум вашего времени — максимум результата",
      step1Num: "01",
      step1Title: "1. Заявка и Сценарий",
      step1Desc: "Вы оставляете заявку. За 1 час мы согласуем темы и готовим сценарии.",
      step2Num: "02",
      step2Title: "2. Выездная съёмка",
      step2Desc: "Приезжаем на вашу локацию в Кишинёве. Съёмка занимает 1.5–2 часа.",
      step3Num: "03",
      step3Title: "3. Готовый монтаж",
      step3Desc: "Через 24–48 часов вы получаете готовые видео, готовые к публикации.",
    },
    testimonials: {
      badge: "Отзывы клиентов",
      title: "Что говорят предприниматели Молдовы",
      subtitle: "Реальные результаты от клиентов VIRALIS Studio",
    },
    faq: {
      badge: "Ответы на вопросы",
      title: "Часто задаваемые вопросы",
      subtitle: "Всё, что вам нужно знать перед заказом",
      q1: "Что входит в стоимость 600 MDL за ролик?",
      a1: "В стоимость 600 MDL входит выезд оператора с оборудованием, разработка сценария, съёмка, динамичный монтаж, цветкоррекция, очистка звука, наложение музыки и субтитров.",
      q2: "Сколько времени занимает съёмка?",
      a2: "Съёмка пакета из 5–10 видеороликов обычно занимает всего 1.5–2 часа вашего времени. Мы работаем максимально оперативно.",
      q3: "На каких языках вы делаете видео?",
      a3: "Мы свободно создаём контент на русском и румынском (молдавском) языках, включая озвучку и анимированные субтитры.",
      q4: "Где проходит съёмка?",
      a4: "Мы выезжаем прямо на вашу локацию (заведение, салон, офис, магазин) в Кишинёве и по Молдове, либо снимаем в нашей студии.",
      q5: "Как быстро вы сдаете готовый результат?",
      a5: "Первые готовые ролики вы получаете через 24–48 часов после завершения съёмки.",
    },
    contact: {
      badge: "Быстрая связь",
      title: "Закажите съёмку прямо сейчас",
      subtitle: "Заполните 2 поля или свяжитесь с нами в мессенджере в один клик",
      nameLabel: "Ваше имя:",
      namePlaceholder: "Иван Петров",
      phoneLabel: "Номер телефона:",
      phonePlaceholder: "+373 78 337 228",
      businessLabel: "Ваш бизнес / Ниша:",
      businessPlaceholder: "Ресторан, Бьюти-салон, Магазин одежды...",
      langLabel: "Предпочитаемый язык общения:",
      submitBtn: "⚡ Отправить заявку",
      successMsg: "✅ Ваша заявка успешно отправлена! Мы перезвоним вам в течение 10 минут.",
      directMsgTitle: "Или напишите нам напрямую:",
      waBtn: "Написать в WhatsApp",
      tgBtn: "Написать в Telegram",
      callBtn: "Позвонить +373 78 337 228",
    },
    mobileBar: {
      call: "📞 Позвонить",
      order: "⚡ Заказать 600 MDL",
      wa: "💬 WhatsApp",
    },
    modal: {
      title: "Быстрый заказ ролика",
      subtitle: "Заполните форму или напишите в WhatsApp для бронирования съёмки",
      videoCountLabel: "Количество видео:",
      nameLabel: "Ваше имя:",
      phoneLabel: "Телефон (+373...):",
      notesLabel: "Комментарий (необязательно):",
      submitBtn: "Подтвердить заказ",
      waBtn: "Оформить через WhatsApp",
      closeBtn: "Закрыть",
    },
    videoModal: {
      title: "Просмотр примера видео",
      close: "Закрыть",
    },
    footer: {
      copy: "© 2026 VIRALIS Media Studio. Все права защищены. Молдова, Кишинёв.",
      address: "г. Кишинёв, ул. Штефан чел Маре, 132",
      phone: "+373 78 337 228",
      email: "info@viralis-studio.md",
    }
  },
  ro: {
    brandName: "VIRALIS Studio",
    topBanner: "🔥 Doar 3 locuri libere pentru filmări în Chișinău săptămâna aceasta • Preț fix 600 MDL / clip",
    nav: {
      services: "Servicii",
      pricing: "Preț 600 MDL",
      calculator: "Calculator",
      comparison: "Comparație",
      portfolio: "Portofoliu",
      process: "Cum lucrăm",
      faq: "Întrebări",
      contacts: "Contacte",
      orderBtn: "Comandă cu 600 MDL",
      phone: "+373 78 337 228",
    },
    hero: {
      badge: "⚡ PRODUCȚIE VIDEO ÎN MOLDOVA • 600 MDL / CLIP",
      titleLine1: "Videoclipuri publicitare la cheie",
      titleLine2: "fără birocrație inutilă",
      subtitle: "Scenariu, filmare în Chișinău, montaj profesional, sonorizare și subtitrare pentru Reels, TikTok și Shorts. Clip gata în 24–48 ore la preț transparent.",
      priceTag: "600 MDL",
      priceSub: "pentru 1 clip finisat",
      ctaPrimary: "⚡ Comandă clip cu 600 MDL",
      ctaSecondary: "🧮 Calculează reducerea",
      ctaWhatsapp: "💬 Scrie pe WhatsApp",
      pillar1Title: "01. Fără taxe ascunse",
      pillar1Desc: "Preț fix de 600 MDL pentru 1 videoclip profesional finisat.",
      pillar2Title: "02. Predare în 24–48 ore",
      pillar2Desc: "Primele clipuri gata le primești în doar 1–2 zile de la filmare.",
      pillar3Title: "03. Serviciu complet la cheie",
      pillar3Desc: "Venim la locație, scriem scenariul, filmăm, montăm și adăugăm subtitrări.",
      stat1Num: "500+",
      stat1Label: "Clipuri filmate",
      stat2Num: "10M+",
      stat2Label: "Vizualizări clienți",
      stat3Num: "24–48h",
      stat3Label: "Timp predare montaj",
      stat4Num: "600 MDL",
      stat4Label: "Preț fix garantat",
    },
    pricing: {
      badge: "Tarif Transparent",
      title: "Un singur tarif cinstit pentru orice afacere",
      subtitle: "Am eliminat devizele complicate și comisioanele. Știi exact ce plătești.",
      cardTitle: "Pachet «Clip Viral»",
      price: "600 MDL",
      priceUnit: "pentru 1 clip finisat",
      discountNotice: "🎉 La comanda a peste 5 clipuri ai reducere de până la 15%!",
      feature1: "Dezvoltare scenariu viral și cârlig de atenție (Hook)",
      feature2: "Filmare pe teren în Chișinău și Moldova (la locația ta sau în studio)",
      feature3: "Montaj dinamic cu corecție de culoare și tranziții",
      feature4: "Înregistrare audio profesională cu microfoane lavalieră",
      feature5: "Muzică în trend și efecte sonore (SFX)",
      feature6: "Subtitrări animate în limba română sau rusă",
      cta: "Rezervă filmarea cu 600 MDL",
    },
    calculator: {
      badge: "Calcul Interactiv",
      title: "Calculator rapid de buget",
      subtitle: "Alege numărul de videoclipuri și opțiunile — vezi suma finală cu reducere",
      countLabel: "Număr de videoclipuri:",
      discountBadge: "Reducere de volum:",
      addonTitle: "Servicii suplimentare (opțional):",
      addon1Title: "Amenajare și design cont (Instagram / TikTok / FB)",
      addon1Price: "+500 MDL",
      addon2Title: "Setare reclamă targetată (Facebook & Instagram Ads)",
      addon2Price: "+800 MDL",
      summaryBase: "Preț de bază:",
      summaryDiscount: "Reducerea ta:",
      summaryAddons: "Servicii suplim.:",
      summaryTotal: "TOTAL DE PLATĂ:",
      summarySavings: "Economisești:",
      perVideoCost: "Preț per 1 clip cu reducere:",
      cta: "Plasiază comanda după acest calcul",
    },
    comparison: {
      badge: "Comparație Abordări",
      title: "De ce clipurile VIRALIS aduc vânzări",
      subtitle: "Principiile Fitts & Krug: atenție maximă de la privitor și 0 pași inutili către cumpărare",
      badTitle: "❌ Filmare obișnuită pe telefon",
      bad1: "Început plictisitor — 85% din privitori trec mai departe în prima secundă",
      bad2: "Sunet slab cu ecou și zgomot ambiental",
      bad3: "Montaj monoton și lent fără accentuări vizuale",
      bad4: "Fără îndemn clar la acțiune — 0 clienți",
      goodTitle: "✅ Clip viral VIRALIS (600 MDL)",
      good1: "Cârlig (Hook) captivant din 1-a secundă pentru menținerea atenției",
      good2: "Sunet de studio impecabil cu microfon profesional",
      good3: "Schimbare dinamică de cadre la 1.5 sec și grafică modernă",
      good4: "Îndemn clar de cumpărare — conversie ridicată",
    },
    services: {
      badge: "Soluții pentru Afacere",
      title: "Ce facem la cheie",
      subtitle: "Tot conținutul video necesar pentru creșterea rețelelor sociale și vânzărilor",
      item1Title: "Filmare & Montaj Dinamic",
      item1Desc: "Înregistrăm imagini de înaltă calitate și le montăm în stilul modern al rețelelor.",
      item2Title: "Scenarii & Cârlige Virale",
      item2Desc: "Creăm introduceri captivante care mențin atenția până la final.",
      item3Title: "Ambalare Conturi Sociale",
      item3Desc: "Amenajăm profilul pe Instagram și TikTok: highlights, coperți și descrieri.",
      item4Title: "Reclamă Targetată",
      item4Desc: "Setăm campanii publicitare Facebook Ads pentru atragerea clienților noi.",
      item5Title: "Dublaj & Subtitrări (RU/RO)",
      item5Desc: "Voce profesională și subtitrări animate moderne în 2 limbi.",
      item6Title: "Plan de Conținut 30 zile",
      item6Desc: "Pregătim o strategie pas cu pas pentru ca canalele tale să funcționeze zilnic.",
    },
    portfolio: {
      badge: "Exemple de lucrări",
      title: "Portofoliu clipuri la 600 MDL",
      subtitle: "Apasă pe clip pentru a evalua calitatea filmării și a montajului",
      catAll: "Toate clipurile",
      catResto: "Restaurante",
      catServices: "Servicii",
      catProducts: "Produse",
      catBeauty: "Beauty",
      viewsLabel: "vizualizări",
      playBtn: "Vezi clipul",
    },
    process: {
      badge: "Proces Simplu",
      title: "Cum obții clipurile în 3 pași",
      subtitle: "Timp minim din partea ta — rezultat maxim",
      step1Num: "01",
      step1Title: "1. Cerere și Scenariu",
      step1Desc: "Lași o cerere. În 1 oră convenim temele și pregătim scenariile.",
      step2Num: "02",
      step2Title: "2. Filmarea pe teren",
      step2Desc: "Venim la locația ta din Chișinău. Filmarea durează 1.5–2 ore.",
      step3Num: "03",
      step3Title: "3. Clipuri gata",
      step3Desc: "În 24–48 ore primești videoclipurile finisate, gata de postare.",
    },
    testimonials: {
      badge: "Recenzii Clienți",
      title: "Ce spun antreprenorii din Moldova",
      subtitle: "Rezultate reale obținute de clienții VIRALIS Studio",
    },
    faq: {
      badge: "Răspunsuri la întrebări",
      title: "Întrebări frecvente",
      subtitle: "Tot ce trebuie să știi înainte de a comanda",
      q1: "Ce este inclus în prețul de 600 MDL per clip?",
      a1: "Prețul de 600 MDL include deplasarea operatorului cu echipament, scenariul, filmarea, montajul dinamic, corecția culorilor, procesarea sunetului, adăugarea muzicii și a subtitrărilor.",
      q2: "Cât timp durează filmarea?",
      a2: "Filmarea unui pachet de 5-10 clipuri durează de obicei doar 1.5–2 ore din timpul tău. Lucrăm extrem de operativ.",
      q3: "În ce limbi realizați videoclipurile?",
      a3: "Producem conținut cu ușurință în română și rusă, inclusiv dublaj vocal și subtitrări animate.",
      q4: "Unde are loc filmarea?",
      a4: "Ne deplasăm direct la locația ta (restaurant, salon, birou, magazin) în Chișinău și Moldova, sau filmăm în studioul nostru.",
      q5: "Cât de repede livrați rezultatul finisat?",
      a5: "Primele clipuri gata le primești în 24–48 de ore după încheierea filmării.",
    },
    contact: {
      badge: "Contact Rapid",
      title: "Comandă filmarea chiar acum",
      subtitle: "Completează 2 câmpuri sau scrie-ne pe mesagerie într-un singur click",
      nameLabel: "Numele tău:",
      namePlaceholder: "Ion Popescu",
      phoneLabel: "Număr de telefon:",
      phonePlaceholder: "+373 78 337 228",
      businessLabel: "Afacerea ta / Nișa:",
      businessPlaceholder: "Restaurant, Salon Beauty, Magazin Haine...",
      langLabel: "Limba preferată de comunicare:",
      submitBtn: "⚡ Trimite cererea",
      successMsg: "✅ Cererea ta a fost trimisă cu succes! Te vom suna în maxim 10 minute.",
      directMsgTitle: "Sau scrie-ne direct pe mesagerii:",
      waBtn: "Scrie pe WhatsApp",
      tgBtn: "Scrie pe Telegram",
      callBtn: "Sună la +373 78 337 228",
    },
    mobileBar: {
      call: "📞 Apel",
      order: "⚡ Comandă 600 MDL",
      wa: "💬 WhatsApp",
    },
    modal: {
      title: "Comandă rapidă clip",
      subtitle: "Completează formularul sau scrie pe WhatsApp pentru a rezerva filmarea",
      videoCountLabel: "Număr videoclipuri:",
      nameLabel: "Numele tău:",
      phoneLabel: "Telefon (+373...):",
      notesLabel: "Comentariu (opțional):",
      submitBtn: "Confirmă comanda",
      waBtn: "Plasează prin WhatsApp",
      closeBtn: "Închide",
    },
    videoModal: {
      title: "Vizionare exemplu clip",
      close: "Închide",
    },
    footer: {
      copy: "© 2026 VIRALIS Media Studio. Toate drepturile rezervate. Moldova, Chișinău.",
      address: "or. Chișinău, bd. Ștefan cel Mare, 132",
      phone: "+373 78 337 228",
      email: "info@viralis-studio.md",
    }
  }
};

// PORTFOLIO SAMPLE DATA
const portfolioItems = [
  {
    id: 1,
    category: 'resto',
    title: { ru: "Рекламный видеоролик для ресторана KISU", ro: "Clip publicitar pentru restaurantul KISU" },
    views: "142,500",
    tag: "Reels / TikTok",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    duration: "0:35"
  },
  {
    id: 2,
    category: 'beauty',
    title: { ru: "Презентация услуг бьюти-салона GLAM", ro: "Prezentare servicii salon de frumusețe GLAM" },
    views: "98,400",
    tag: "Instagram Reels",
    thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    duration: "0:42"
  },
  {
    id: 3,
    category: 'products',
    title: { ru: "Обзор брендовой одежды в бутике", ro: "Review haine de brand în boutique" },
    views: "215,100",
    tag: "TikTok / Shorts",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    duration: "0:28"
  },
  {
    id: 4,
    category: 'services',
    title: { ru: "Продающий ролик для автосервиса", ro: "Clip de vânzare pentru autoservice" },
    views: "87,300",
    tag: "Facebook Ads",
    thumbnail: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80",
    duration: "0:45"
  },
  {
    id: 5,
    category: 'resto',
    title: { ru: "Обзор нового меню кофейни", ro: "Review meniu nou cafenea" },
    views: "176,900",
    tag: "Reels Viral",
    thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
    duration: "0:30"
  },
  {
    id: 6,
    category: 'beauty',
    title: { ru: "Процедура ухода за кожей лица", ro: "Procedură îngrijire ten facial" },
    views: "124,000",
    tag: "Instagram Stories",
    thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    duration: "0:38"
  }
];

// TESTIMONIALS SAMPLE DATA
const testimonialsData = [
  {
    id: 1,
    name: "Анатолий М.",
    role: { ru: "Владелец сети кофеен Кишинёв", ro: "Proprietar rețea cafenele Chișinău" },
    text: {
      ru: "Заказали пакет из 10 роликов за 600 MDL каждый. Съёмка прошла за 2 часа! Охваты в Instagram выросли в 4 раза, пришли десятки новых клиентов.",
      ro: "Am comandat un pachet de 10 clipuri la 600 MDL fiecare. Filmarea a durat doar 2 ore! Impactul pe Instagram a crescut de 4 ori."
    },
    rating: 5,
    metric: "+320% продаж"
  },
  {
    id: 2,
    name: "Елена С.",
    role: { ru: "Основатель бьюти-студии", ro: "Fondatoare studio beauty" },
    text: {
      ru: "Очень крутые завлекающие сценарии и профессиональный монтаж со звуком. Субтитры на двух языках сделаны идеально!",
      ro: "Scenarii captivante și montaj profesional cu sunet impecabil. Subtitrările în ambele limbi sunt făcute ideal!"
    },
    rating: 5,
    metric: "150K+ просмотров"
  },
  {
    id: 3,
    name: "Дмитрий К.",
    role: { ru: "Директор магазина электроники", ro: "Director magazin electronică" },
    text: {
      ru: "Без лишней болтовни и скрытых доплат. Ровно 600 MDL за ролик под ключ. Через 24 часа первые видео уже стояли в таргете.",
      ro: "Fără vorbe inutile și taxe ascunse. Exact 600 MDL per clip la cheie. În 24 de ore primele clipuri rulau deja în reclame."
    },
    rating: 5,
    metric: "24-48ч сдача"
  }
];

export default function Variant2_FrictionlessKrug({ lang: propLang = 'ru', setLang: propSetLang }) {
  const [langState, setLangState] = useState(propLang);
  useEffect(() => {
    if (propLang) setLangState(propLang);
  }, [propLang]);
  const lang = propLang || langState;
  const setLang = propSetLang || setLangState;
  const [theme, setTheme] = useState('light'); // 'light' (Crisp Studio White) or 'dark'
  const t = translations[lang] || translations['ru'];

  // Mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modal order state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalVideoCount, setModalVideoCount] = useState(5);

  // Video preview modal state
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  // Portfolio active category
  const [activeCategory, setActiveCategory] = useState('all');

  // Interactive Calculator state
  const [calcCount, setCalcCount] = useState(5);
  const [calcAddon1, setCalcAddon1] = useState(false);
  const [calcAddon2, setCalcAddon2] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Lead form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    prefLang: lang === 'ru' ? 'Русский' : 'Română'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Update theme data attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Sync form default language
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      prefLang: lang === 'ru' ? 'Русский' : 'Română'
    }));
  }, [lang]);

  // Calculator price logic
  const basePricePerVideo = 600;
  const calcDiscount = useMemo(() => {
    if (calcCount >= 10) return 0.15; // 15% discount for 10+
    if (calcCount >= 5) return 0.10;  // 10% discount for 5+
    return 0;
  }, [calcCount]);

  const rawBaseTotal = calcCount * basePricePerVideo;
  const discountedBaseTotal = Math.round(rawBaseTotal * (1 - calcDiscount));
  const addonsTotal = (calcAddon1 ? 500 : 0) + (calcAddon2 ? 800 : 0);
  const finalTotal = discountedBaseTotal + addonsTotal;
  const totalSavings = rawBaseTotal - discountedBaseTotal;
  const pricePerVideoEffective = Math.round(discountedBaseTotal / calcCount);

  // WhatsApp link generator
  const getWhatsAppUrl = (customMsg) => {
    const defaultMsg = lang === 'ru'
      ? `Здравствуйте VIRALIS Studio! Хочу заказать ${calcCount} роликов по 600 MDL. Пожалуйста, проконсультируйте.`
      : `Bună ziua VIRALIS Studio! Doresc să comand ${calcCount} clipuri cu 600 MDL. Vă rog să mă consultați.`;
    const text = encodeURIComponent(customMsg || defaultMsg);
    return `https://wa.me/37378337228?text=${text}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const filteredPortfolio = useMemo(() => {
    if (activeCategory === 'all') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className={`krug-root ${theme === 'dark' ? 'krug-dark' : 'krug-light'}`}>
      {/* SCOPED CRISP STUDIO WHITE & FITTS' LAW STYLES */}
      <style>{`
        /* CRISP STUDIO WHITE DESIGN SYSTEM (WCAG AA COMPLIANT) */
        .krug-root {
          --krug-bg: #ffffff;
          --krug-surface: #f8fafc;
          --krug-surface-card: #ffffff;
          --krug-text-main: #0f172a;        /* Luminance contrast > 15:1 */
          --krug-text-muted: #475569;       /* Luminance contrast > 5.5:1 WCAG AA */
          --krug-border: #e2e8f0;
          --krug-accent-dark: #0f172a;
          --krug-accent-brand: #2563eb;     /* High contrast electric blue */
          --krug-accent-gold: #d97706;      /* High contrast amber gold */
          --krug-btn-primary-bg: #0f172a;   /* High contrast studio charcoal */
          --krug-btn-primary-text: #ffffff;
          --krug-btn-primary-hover: #1e293b;
          --krug-shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.05);
          --krug-shadow-md: 0 10px 30px rgba(15, 23, 42, 0.08);
          --krug-shadow-lg: 0 20px 45px rgba(15, 23, 42, 0.12);
          --krug-whatsapp-green: #16a34a;   /* WCAG compliant green text/btn */
          --krug-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.4);
          font-family: 'Outfit', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: var(--krug-bg);
          color: var(--krug-text-main);
          line-height: 1.6;
          min-height: 100vh;
          width: 100%;
          box-sizing: border-box;
        }

        .krug-dark {
          --krug-bg: #0b0c10;
          --krug-surface: #13161c;
          --krug-surface-card: #1a1d26;
          --krug-text-main: #f8fafc;
          --krug-text-muted: #94a3b8;
          --krug-border: #2e3545;
          --krug-accent-dark: #f8fafc;
          --krug-accent-brand: #3b82f6;
          --krug-accent-gold: #f59e0b;
          --krug-btn-primary-bg: #3b82f6;
          --krug-btn-primary-text: #ffffff;
          --krug-btn-primary-hover: #2563eb;
          --krug-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
          --krug-shadow-md: 0 10px 30px rgba(0, 0, 0, 0.5);
          --krug-shadow-lg: 0 20px 45px rgba(0, 0, 0, 0.6);
        }

        /* FITTS' LAW FIT TOUCH TARGETS (Minimum 48px to 56px) */
        .krug-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 52px;
          padding: 14px 28px;
          border-radius: 14px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, background-color 0.2s ease;
          border: 1px solid transparent;
          text-decoration: none;
          max-width: 100%;
          outline: none;
        }

        .krug-btn:focus-visible {
          box-shadow: var(--krug-focus-ring);
        }

        .krug-btn-primary {
          background-color: var(--krug-btn-primary-bg);
          color: var(--krug-btn-primary-text);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.18);
        }

        .krug-btn-primary:hover {
          transform: translateY(-2px);
          background-color: var(--krug-btn-primary-hover);
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.25);
        }

        .krug-btn-primary:active {
          transform: translateY(0);
        }

        .krug-btn-secondary {
          background-color: var(--krug-surface);
          color: var(--krug-text-main);
          border: 1px solid var(--krug-border);
        }

        .krug-btn-secondary:hover {
          background-color: var(--krug-border);
          transform: translateY(-2px);
        }

        .krug-btn-wa {
          background-color: #16a34a;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(22, 163, 74, 0.25);
        }

        .krug-btn-wa:hover {
          background-color: #15803d;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(22, 163, 74, 0.35);
        }

        /* HEADER & TOP BAR */
        .krug-top-banner {
          background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%);
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 10px 16px;
          text-align: center;
        }

        .krug-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--krug-border);
          padding: 14px 24px;
        }

        .krug-dark .krug-header {
          background: rgba(11, 12, 16, 0.95);
        }

        .krug-header-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .krug-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--krug-text-main);
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.03em;
        }

        .krug-logo-badge {
          background: #2563eb;
          color: #ffffff;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .krug-nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
          list-style: none;
        }

        .krug-nav-link {
          color: var(--krug-text-muted);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .krug-nav-link:hover {
          color: var(--krug-text-main);
        }

        .krug-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .krug-lang-switch {
          display: flex;
          align-items: center;
          background: var(--krug-surface);
          border: 1px solid var(--krug-border);
          border-radius: 30px;
          padding: 3px;
        }

        .krug-lang-btn {
          border: none;
          background: transparent;
          color: var(--krug-text-muted);
          font-weight: 700;
          font-size: 0.8rem;
          padding: 6px 12px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .krug-lang-btn.active {
          background: var(--krug-btn-primary-bg);
          color: var(--krug-btn-primary-text);
        }

        .krug-theme-btn {
          border: 1px solid var(--krug-border);
          background: var(--krug-surface);
          color: var(--krug-text-main);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .krug-mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--krug-text-main);
          cursor: pointer;
          padding: 8px;
        }

        /* HERO SECTION */
        .krug-hero {
          padding: 70px 24px 80px;
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
        }

        .krug-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 30px;
          background: var(--krug-surface);
          border: 1px solid var(--krug-border);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--krug-accent-brand);
          margin-bottom: 24px;
        }

        .krug-hero-title {
          font-size: 3.25rem;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .krug-hero-title-highlight {
          color: var(--krug-accent-brand);
          display: block;
        }

        .krug-hero-sub {
          font-size: 1.2rem;
          color: var(--krug-text-muted);
          max-width: 760px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        .krug-price-hero-tag {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #eff6ff;
          border: 2px solid #bfdbfe;
          padding: 16px 32px;
          border-radius: 20px;
          margin-bottom: 36px;
        }

        .krug-dark .krug-price-hero-tag {
          background: rgba(37, 99, 235, 0.15);
          border-color: rgba(59, 130, 246, 0.4);
        }

        .krug-price-hero-num {
          font-size: 2.75rem;
          font-weight: 900;
          color: #1e40af;
          line-height: 1;
        }

        .krug-dark .krug-price-hero-num {
          color: #60a5fa;
        }

        .krug-price-hero-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--krug-text-muted);
          margin-top: 4px;
        }

        .krug-hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        /* THREE PILLARS - ZERO FRICTION PROMISES */
        .krug-pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 50px;
          text-align: left;
        }

        .krug-pillar-card {
          background: var(--krug-surface);
          border: 1px solid var(--krug-border);
          border-radius: 20px;
          padding: 28px;
          box-shadow: var(--krug-shadow-sm);
        }

        .krug-pillar-title {
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 10px;
          color: var(--krug-text-main);
        }

        .krug-pillar-desc {
          font-size: 0.95rem;
          color: var(--krug-text-muted);
        }

        /* STATS BAR */
        .krug-stats-bar {
          background: var(--krug-surface);
          border-top: 1px solid var(--krug-border);
          border-bottom: 1px solid var(--krug-border);
          padding: 36px 24px;
        }

        .krug-stats-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          text-align: center;
        }

        .krug-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .krug-stat-num {
          font-size: 2.25rem;
          font-weight: 900;
          color: var(--krug-accent-dark);
          line-height: 1.2;
        }

        .krug-stat-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--krug-text-muted);
        }

        /* SECTION BASE */
        .krug-section {
          padding: 90px 24px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .krug-section-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }

        .krug-section-badge {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--krug-accent-brand);
          margin-bottom: 12px;
        }

        .krug-section-title {
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .krug-section-sub {
          font-size: 1.1rem;
          color: var(--krug-text-muted);
        }

        /* PRICING SHOWCASE */
        .krug-pricing-card-wrapper {
          max-width: 700px;
          margin: 0 auto;
          background: var(--krug-surface-card);
          border: 2px solid var(--krug-accent-brand);
          border-radius: 28px;
          padding: 44px;
          box-shadow: var(--krug-shadow-lg);
          position: relative;
        }

        .krug-pricing-badge {
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--krug-accent-brand);
          color: #ffffff;
          padding: 6px 20px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 800;
        }

        .krug-pricing-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .krug-pricing-title {
          font-size: 1.75rem;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .krug-pricing-amount {
          font-size: 3.5rem;
          font-weight: 900;
          color: var(--krug-accent-dark);
          line-height: 1;
        }

        .krug-pricing-unit {
          font-size: 1rem;
          color: var(--krug-text-muted);
          font-weight: 600;
        }

        .krug-pricing-discount-banner {
          background: #fef3c7;
          border: 1px solid #fde68a;
          color: #92400e;
          padding: 12px;
          border-radius: 12px;
          text-align: center;
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 32px;
        }

        .krug-dark .krug-pricing-discount-banner {
          background: rgba(245, 158, 11, 0.15);
          border-color: rgba(245, 158, 11, 0.3);
          color: #fbbf24;
        }

        .krug-pricing-features {
          list-style: none;
          margin-bottom: 36px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .krug-pricing-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 1.05rem;
          font-weight: 600;
        }

        .krug-feature-icon {
          color: #16a34a;
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* CALCULATOR */
        .krug-calc-box {
          background: var(--krug-surface);
          border: 1px solid var(--krug-border);
          border-radius: 28px;
          padding: 40px;
          box-shadow: var(--krug-shadow-md);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .krug-calc-control-group {
          margin-bottom: 32px;
        }

        .krug-calc-label {
          font-weight: 800;
          font-size: 1.1rem;
          margin-bottom: 14px;
          display: block;
        }

        .krug-calc-presets {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .krug-calc-preset-btn {
          min-height: 48px;
          padding: 10px 18px;
          border-radius: 12px;
          border: 1px solid var(--krug-border);
          background: var(--krug-surface-card);
          color: var(--krug-text-main);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .krug-calc-preset-btn.active {
          background: var(--krug-btn-primary-bg);
          color: var(--krug-btn-primary-text);
          border-color: var(--krug-btn-primary-bg);
        }

        .krug-calc-checkbox-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          background: var(--krug-surface-card);
          border: 1px solid var(--krug-border);
          border-radius: 14px;
          cursor: pointer;
          margin-bottom: 12px;
          min-height: 52px;
          user-select: none;
        }

        .krug-calc-checkbox-item input {
          width: 22px;
          height: 22px;
          cursor: pointer;
          accent-color: var(--krug-accent-brand);
        }

        .krug-calc-summary-card {
          background: var(--krug-surface-card);
          border: 1px solid var(--krug-border);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .krug-calc-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px dashed var(--krug-border);
          font-size: 1rem;
        }

        .krug-calc-row-total {
          border-bottom: none;
          padding-top: 20px;
          font-size: 1.35rem;
          font-weight: 900;
        }

        .krug-calc-total-amount {
          color: var(--krug-accent-brand);
          font-size: 2.25rem;
          font-weight: 900;
        }

        /* BEFORE / AFTER COMPARISON */
        .krug-comp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .krug-comp-card {
          border-radius: 24px;
          padding: 36px;
          border: 1px solid var(--krug-border);
        }

        .krug-comp-bad {
          background: rgba(239, 68, 68, 0.04);
          border-color: rgba(239, 68, 68, 0.2);
        }

        .krug-comp-good {
          background: rgba(34, 197, 94, 0.04);
          border-color: rgba(34, 197, 94, 0.3);
          box-shadow: var(--krug-shadow-md);
        }

        .krug-comp-title {
          font-size: 1.4rem;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .krug-comp-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .krug-comp-item {
          font-size: 1.05rem;
          font-weight: 600;
          line-height: 1.5;
        }

        /* SERVICES GRID */
        .krug-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .krug-service-card {
          background: var(--krug-surface);
          border: 1px solid var(--krug-border);
          border-radius: 24px;
          padding: 32px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .krug-service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--krug-shadow-md);
        }

        .krug-service-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--krug-accent-dark);
          color: var(--krug-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .krug-service-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .krug-service-desc {
          color: var(--krug-text-muted);
          font-size: 0.98rem;
        }

        /* PORTFOLIO GRID & MODAL */
        .krug-portfolio-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .krug-tab-btn {
          border: 1px solid var(--krug-border);
          background: var(--krug-surface);
          color: var(--krug-text-muted);
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 30px;
          min-height: 48px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .krug-tab-btn.active {
          background: var(--krug-btn-primary-bg);
          color: var(--krug-btn-primary-text);
          border-color: var(--krug-btn-primary-bg);
        }

        .krug-portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 28px;
        }

        .krug-portfolio-card {
          background: var(--krug-surface-card);
          border: 1px solid var(--krug-border);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--krug-shadow-sm);
          transition: transform 0.25s ease;
          cursor: pointer;
        }

        .krug-portfolio-card:hover {
          transform: translateY(-4px);
        }

        .krug-portfolio-thumb {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .krug-portfolio-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .krug-portfolio-card:hover .krug-portfolio-thumb img {
          transform: scale(1.05);
        }

        .krug-portfolio-play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .krug-play-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #ffffff;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .krug-portfolio-body {
          padding: 20px;
        }

        .krug-portfolio-title {
          font-weight: 800;
          font-size: 1.05rem;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .krug-portfolio-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--krug-text-muted);
          font-weight: 600;
        }

        /* PROCESS TIMELINE */
        .krug-process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          position: relative;
        }

        .krug-process-card {
          background: var(--krug-surface);
          border: 1px solid var(--krug-border);
          border-radius: 24px;
          padding: 36px 28px;
          position: relative;
        }

        .krug-process-num {
          font-size: 3rem;
          font-weight: 900;
          color: var(--krug-accent-brand);
          opacity: 0.3;
          line-height: 1;
          margin-bottom: 16px;
        }

        .krug-process-title {
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .krug-process-desc {
          color: var(--krug-text-muted);
          font-size: 0.98rem;
        }

        /* TESTIMONIALS */
        .krug-testi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .krug-testi-card {
          background: var(--krug-surface);
          border: 1px solid var(--krug-border);
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .krug-testi-stars {
          display: flex;
          gap: 4px;
          color: #f59e0b;
          margin-bottom: 16px;
        }

        .krug-testi-text {
          font-size: 1.05rem;
          margin-bottom: 24px;
          font-style: italic;
        }

        .krug-testi-author {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .krug-testi-name {
          font-weight: 800;
          font-size: 1.05rem;
        }

        .krug-testi-role {
          font-size: 0.85rem;
          color: var(--krug-text-muted);
        }

        .krug-testi-metric {
          background: #dcfce7;
          color: #15803d;
          font-weight: 800;
          font-size: 0.8rem;
          padding: 4px 10px;
          border-radius: 12px;
        }

        /* FAQ ACCORDION */
        .krug-faq-container {
          max-width: 840px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .krug-faq-item {
          background: var(--krug-surface);
          border: 1px solid var(--krug-border);
          border-radius: 18px;
          overflow: hidden;
        }

        .krug-faq-btn {
          width: 100%;
          text-align: left;
          padding: 22px 28px;
          background: transparent;
          border: none;
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--krug-text-main);
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          min-height: 56px;
        }

        .krug-faq-content {
          padding: 0 28px 24px;
          color: var(--krug-text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* CONTACT FORM */
        .krug-contact-box {
          background: var(--krug-surface);
          border: 1px solid var(--krug-border);
          border-radius: 28px;
          padding: 48px;
          box-shadow: var(--krug-shadow-lg);
          max-width: 860px;
          margin: 0 auto;
        }

        .krug-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }

        .krug-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .krug-form-group-full {
          grid-column: span 2;
        }

        .krug-input-label {
          font-weight: 700;
          font-size: 0.95rem;
        }

        .krug-input {
          min-height: 52px;
          padding: 12px 18px;
          border-radius: 12px;
          border: 1px solid var(--krug-border);
          background: var(--krug-surface-card);
          color: var(--krug-text-main);
          font-size: 1rem;
          outline: none;
          width: 100%;
          box-sizing: border-box;
        }

        .krug-input:focus {
          border-color: var(--krug-accent-brand);
          box-shadow: var(--krug-focus-ring);
        }

        /* STICKY MOBILE BAR */
        .krug-mobile-bar {
          display: none;
        }

        @media (max-width: 768px) {
          .krug-hero-title { font-size: 2.25rem; }
          .krug-section-title { font-size: 1.85rem; }
          .krug-nav-links { display: none; }
          .krug-mobile-toggle { display: block; }
          .krug-stats-container { grid-template-columns: repeat(2, 1fr); }
          .krug-calc-box { grid-template-columns: 1fr; }
          .krug-comp-grid { grid-template-columns: 1fr; }
          .krug-process-grid { grid-template-columns: 1fr; }
          .krug-form-grid { grid-template-columns: 1fr; }
          .krug-form-group-full { grid-column: span 1; }
          
          .krug-mobile-bar {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 999;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(12px);
            border-top: 1px solid var(--krug-border);
            padding: 10px 14px;
            gap: 10px;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
          }

          .krug-dark .krug-mobile-bar {
            background: rgba(11, 12, 16, 0.98);
          }

          .krug-mobile-bar .krug-btn {
            flex: 1;
            padding: 10px 6px;
            font-size: 0.825rem;
            min-height: 48px;
          }
        }

        /* MODAL OVERLAY */
        .krug-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .krug-modal-card {
          background: var(--krug-surface-card);
          border: 1px solid var(--krug-border);
          border-radius: 28px;
          padding: 36px;
          width: 100%;
          max-width: 540px;
          box-shadow: var(--krug-shadow-lg);
          position: relative;
        }

        .krug-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: var(--krug-text-muted);
          cursor: pointer;
          padding: 8px;
        }
      `}</style>

      {/* TOP URGENCY BANNER */}
      <div className="krug-top-banner" role="region" aria-label="Urgency announcement">
        {t.topBanner}
      </div>

      {/* HEADER & NAV */}
      <header className="krug-header">
        <div className="krug-header-container">
          <a href="#" className="krug-logo" aria-label="VIRALIS Studio Home">
            <Video size={28} className="text-blue-600" />
            <span>VIRALIS</span>
            <span className="krug-logo-badge">600 MDL</span>
          </a>

          <nav>
            <ul className="krug-nav-links">
              <li><a href="#pricing" className="krug-nav-link">{t.nav.pricing}</a></li>
              <li><a href="#calculator" className="krug-nav-link">{t.nav.calculator}</a></li>
              <li><a href="#portfolio" className="krug-nav-link">{t.nav.portfolio}</a></li>
              <li><a href="#services" className="krug-nav-link">{t.nav.services}</a></li>
              <li><a href="#faq" className="krug-nav-link">{t.nav.faq}</a></li>
              <li><a href="#contact" className="krug-nav-link">{t.nav.contacts}</a></li>
            </ul>
          </nav>

          <div className="krug-header-actions">
            {/* Language switch */}
            <div className="krug-lang-switch" role="group" aria-label="Language selection">
              <button
                type="button"
                className={`krug-lang-btn ${lang === 'ru' ? 'active' : ''}`}
                onClick={() => setLang('ru')}
                aria-label="Переключить на русский"
              >
                RU
              </button>
              <button
                type="button"
                className={`krug-lang-btn ${lang === 'ro' ? 'active' : ''}`}
                onClick={() => setLang('ro')}
                aria-label="Comută pe română"
              >
                RO
              </button>
            </div>

            {/* Theme switch */}
            <button
              type="button"
              className="krug-theme-btn"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              className="krug-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Header CTA */}
            <button
              type="button"
              className="krug-btn krug-btn-primary"
              onClick={() => setIsOrderModalOpen(true)}
              style={{ display: 'inline-flex' }}
            >
              {t.nav.orderBtn}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{ padding: '16px 0', borderTop: '1px solid var(--krug-border)', marginTop: '12px' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li><a href="#pricing" className="krug-nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.pricing}</a></li>
              <li><a href="#calculator" className="krug-nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.calculator}</a></li>
              <li><a href="#portfolio" className="krug-nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.portfolio}</a></li>
              <li><a href="#services" className="krug-nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a></li>
              <li><a href="#faq" className="krug-nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.faq}</a></li>
              <li><a href="#contact" className="krug-nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.contacts}</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="krug-hero">
        <div className="krug-hero-badge">
          <Zap size={18} />
          <span>{t.hero.badge}</span>
        </div>

        <h1 className="krug-hero-title">
          {t.hero.titleLine1}{' '}
          <span className="krug-hero-title-highlight">{t.hero.titleLine2}</span>
        </h1>

        <p className="krug-hero-sub">{t.hero.subtitle}</p>

        {/* Big Crisp Price Tag */}
        <div className="krug-price-hero-tag">
          <span className="krug-price-hero-num">{t.hero.priceTag}</span>
          <span className="krug-price-hero-label">{t.hero.priceSub}</span>
        </div>

        {/* Fitts' Law Action Triggers */}
        <div className="krug-hero-cta-group">
          <button
            type="button"
            className="krug-btn krug-btn-primary"
            onClick={() => setIsOrderModalOpen(true)}
          >
            {t.hero.ctaPrimary}
          </button>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="krug-btn krug-btn-wa"
          >
            {t.hero.ctaWhatsapp}
          </a>
          <a href="#calculator" className="krug-btn krug-btn-secondary">
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Three Pillars (Krug Frictionless Guarantees) */}
        <div className="krug-pillars-grid">
          <div className="krug-pillar-card">
            <h3 className="krug-pillar-title">{t.hero.pillar1Title}</h3>
            <p className="krug-pillar-desc">{t.hero.pillar1Desc}</p>
          </div>
          <div className="krug-pillar-card">
            <h3 className="krug-pillar-title">{t.hero.pillar2Title}</h3>
            <p className="krug-pillar-desc">{t.hero.pillar2Desc}</p>
          </div>
          <div className="krug-pillar-card">
            <h3 className="krug-pillar-title">{t.hero.pillar3Title}</h3>
            <p className="krug-pillar-desc">{t.hero.pillar3Desc}</p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="krug-stats-bar">
        <div className="krug-stats-container">
          <div className="krug-stat-item">
            <span className="krug-stat-num">{t.hero.stat1Num}</span>
            <span className="krug-stat-label">{t.hero.stat1Label}</span>
          </div>
          <div className="krug-stat-item">
            <span className="krug-stat-num">{t.hero.stat2Num}</span>
            <span className="krug-stat-label">{t.hero.stat2Label}</span>
          </div>
          <div className="krug-stat-item">
            <span className="krug-stat-num">{t.hero.stat3Num}</span>
            <span className="krug-stat-label">{t.hero.stat3Label}</span>
          </div>
          <div className="krug-stat-item">
            <span className="krug-stat-num">{t.hero.stat4Num}</span>
            <span className="krug-stat-label">{t.hero.stat4Label}</span>
          </div>
        </div>
      </div>

      {/* PRICING SHOWCASE SECTION */}
      <section id="pricing" className="krug-section">
        <div className="krug-section-header">
          <span className="krug-section-badge">{t.pricing.badge}</span>
          <h2 className="krug-section-title">{t.pricing.title}</h2>
          <p className="krug-section-sub">{t.pricing.subtitle}</p>
        </div>

        <div className="krug-pricing-card-wrapper">
          <div className="krug-pricing-badge">BEST VALUE</div>
          <div className="krug-pricing-header">
            <h3 className="krug-pricing-title">{t.pricing.cardTitle}</h3>
            <div className="krug-pricing-amount">{t.pricing.price}</div>
            <div className="krug-pricing-unit">{t.pricing.priceUnit}</div>
          </div>

          <div className="krug-pricing-discount-banner">
            {t.pricing.discountNotice}
          </div>

          <ul className="krug-pricing-features">
            <li className="krug-pricing-feature-item">
              <CheckCircle2 className="krug-feature-icon" size={22} />
              <span>{t.pricing.feature1}</span>
            </li>
            <li className="krug-pricing-feature-item">
              <CheckCircle2 className="krug-feature-icon" size={22} />
              <span>{t.pricing.feature2}</span>
            </li>
            <li className="krug-pricing-feature-item">
              <CheckCircle2 className="krug-feature-icon" size={22} />
              <span>{t.pricing.feature3}</span>
            </li>
            <li className="krug-pricing-feature-item">
              <CheckCircle2 className="krug-feature-icon" size={22} />
              <span>{t.pricing.feature4}</span>
            </li>
            <li className="krug-pricing-feature-item">
              <CheckCircle2 className="krug-feature-icon" size={22} />
              <span>{t.pricing.feature5}</span>
            </li>
            <li className="krug-pricing-feature-item">
              <CheckCircle2 className="krug-feature-icon" size={22} />
              <span>{t.pricing.feature6}</span>
            </li>
          </ul>

          <button
            type="button"
            className="krug-btn krug-btn-primary"
            style={{ width: '100%' }}
            onClick={() => setIsOrderModalOpen(true)}
          >
            {t.pricing.cta}
          </button>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section id="calculator" className="krug-section" style={{ background: 'var(--krug-surface)' }}>
        <div className="krug-section-header">
          <span className="krug-section-badge">{t.calculator.badge}</span>
          <h2 className="krug-section-title">{t.calculator.title}</h2>
          <p className="krug-section-sub">{t.calculator.subtitle}</p>
        </div>

        <div className="krug-calc-box">
          <div className="krug-calc-controls">
            <div className="krug-calc-control-group">
              <label className="krug-calc-label">{t.calculator.countLabel}</label>
              <div className="krug-calc-presets">
                {[1, 3, 5, 10, 15].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    className={`krug-calc-preset-btn ${calcCount === cnt ? 'active' : ''}`}
                    onClick={() => setCalcCount(cnt)}
                  >
                    {cnt} {lang === 'ru' ? (cnt === 1 ? 'ролик' : cnt < 5 ? 'ролика' : 'роликов') : (cnt === 1 ? 'clip' : 'clipuri')}
                    {cnt === 5 ? ' (-10%)' : cnt >= 10 ? ' (-15%)' : ''}
                  </button>
                ))}
              </div>
            </div>

            <div className="krug-calc-control-group">
              <label className="krug-calc-label">{t.calculator.addonTitle}</label>
              
              <label className="krug-calc-checkbox-item">
                <input
                  type="checkbox"
                  checked={calcAddon1}
                  onChange={(e) => setCalcAddon1(e.target.checked)}
                />
                <div>
                  <strong>{t.calculator.addon1Title}</strong>
                  <span style={{ display: 'block', color: 'var(--krug-accent-brand)', fontSize: '0.9rem' }}>
                    {t.calculator.addon1Price}
                  </span>
                </div>
              </label>

              <label className="krug-calc-checkbox-item">
                <input
                  type="checkbox"
                  checked={calcAddon2}
                  onChange={(e) => setCalcAddon2(e.target.checked)}
                />
                <div>
                  <strong>{t.calculator.addon2Title}</strong>
                  <span style={{ display: 'block', color: 'var(--krug-accent-brand)', fontSize: '0.9rem' }}>
                    {t.calculator.addon2Price}
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div className="krug-calc-summary-card">
            <div>
              <div className="krug-calc-row">
                <span>{t.calculator.summaryBase}</span>
                <span>{rawBaseTotal} MDL</span>
              </div>
              
              {calcDiscount > 0 && (
                <div className="krug-calc-row" style={{ color: '#16a34a', fontWeight: 700 }}>
                  <span>{t.calculator.summaryDiscount} ({calcDiscount * 100}%)</span>
                  <span>-{totalSavings} MDL</span>
                </div>
              )}

              {addonsTotal > 0 && (
                <div className="krug-calc-row">
                  <span>{t.calculator.summaryAddons}</span>
                  <span>+{addonsTotal} MDL</span>
                </div>
              )}

              <div className="krug-calc-row">
                <span>{t.calculator.perVideoCost}</span>
                <strong style={{ color: 'var(--krug-accent-brand)' }}>{pricePerVideoEffective} MDL</strong>
              </div>

              <div className="krug-calc-row krug-calc-row-total">
                <span>{t.calculator.summaryTotal}</span>
                <span className="krug-calc-total-amount">{finalTotal} MDL</span>
              </div>
            </div>

            <button
              type="button"
              className="krug-btn krug-btn-primary"
              style={{ width: '100%', marginTop: '24px' }}
              onClick={() => {
                setModalVideoCount(calcCount);
                setIsOrderModalOpen(true);
              }}
            >
              {t.calculator.cta}
            </button>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER COMPARISON SECTION */}
      <section className="krug-section">
        <div className="krug-section-header">
          <span className="krug-section-badge">{t.comparison.badge}</span>
          <h2 className="krug-section-title">{t.comparison.title}</h2>
          <p className="krug-section-sub">{t.comparison.subtitle}</p>
        </div>

        <div className="krug-comp-grid">
          <div className="krug-comp-card krug-comp-bad">
            <h3 className="krug-comp-title" style={{ color: '#dc2626' }}>{t.comparison.badTitle}</h3>
            <ul className="krug-comp-list">
              <li className="krug-comp-item">{t.comparison.bad1}</li>
              <li className="krug-comp-item">{t.comparison.bad2}</li>
              <li className="krug-comp-item">{t.comparison.bad3}</li>
              <li className="krug-comp-item">{t.comparison.bad4}</li>
            </ul>
          </div>

          <div className="krug-comp-card krug-comp-good">
            <h3 className="krug-comp-title" style={{ color: '#16a34a' }}>{t.comparison.goodTitle}</h3>
            <ul className="krug-comp-list">
              <li className="krug-comp-item">{t.comparison.good1}</li>
              <li className="krug-comp-item">{t.comparison.good2}</li>
              <li className="krug-comp-item">{t.comparison.good3}</li>
              <li className="krug-comp-item">{t.comparison.good4}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="krug-section" style={{ background: 'var(--krug-surface)' }}>
        <div className="krug-section-header">
          <span className="krug-section-badge">{t.services.badge}</span>
          <h2 className="krug-section-title">{t.services.title}</h2>
          <p className="krug-section-sub">{t.services.subtitle}</p>
        </div>

        <div className="krug-services-grid">
          <div className="krug-service-card">
            <div className="krug-service-icon"><Video size={26} /></div>
            <h3 className="krug-service-title">{t.services.item1Title}</h3>
            <p className="krug-service-desc">{t.services.item1Desc}</p>
          </div>

          <div className="krug-service-card">
            <div className="krug-service-icon"><Sparkles size={26} /></div>
            <h3 className="krug-service-title">{t.services.item2Title}</h3>
            <p className="krug-service-desc">{t.services.item2Desc}</p>
          </div>

          <div className="krug-service-card">
            <div className="krug-service-icon"><Layers size={26} /></div>
            <h3 className="krug-service-title">{t.services.item3Title}</h3>
            <p className="krug-service-desc">{t.services.item3Desc}</p>
          </div>

          <div className="krug-service-card">
            <div className="krug-service-icon"><TrendingUp size={26} /></div>
            <h3 className="krug-service-title">{t.services.item4Title}</h3>
            <p className="krug-service-desc">{t.services.item4Desc}</p>
          </div>

          <div className="krug-service-card">
            <div className="krug-service-icon"><Globe size={26} /></div>
            <h3 className="krug-service-title">{t.services.item5Title}</h3>
            <p className="krug-service-desc">{t.services.item5Desc}</p>
          </div>

          <div className="krug-service-card">
            <div className="krug-service-icon"><Award size={26} /></div>
            <h3 className="krug-service-title">{t.services.item6Title}</h3>
            <p className="krug-service-desc">{t.services.item6Desc}</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="krug-section">
        <div className="krug-section-header">
          <span className="krug-section-badge">{t.portfolio.badge}</span>
          <h2 className="krug-section-title">{t.portfolio.title}</h2>
          <p className="krug-section-sub">{t.portfolio.subtitle}</p>
        </div>

        {/* Portfolio Tabs */}
        <div className="krug-portfolio-tabs">
          <button
            type="button"
            className={`krug-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            {t.portfolio.catAll}
          </button>
          <button
            type="button"
            className={`krug-tab-btn ${activeCategory === 'resto' ? 'active' : ''}`}
            onClick={() => setActiveCategory('resto')}
          >
            {t.portfolio.catResto}
          </button>
          <button
            type="button"
            className={`krug-tab-btn ${activeCategory === 'services' ? 'active' : ''}`}
            onClick={() => setActiveCategory('services')}
          >
            {t.portfolio.catServices}
          </button>
          <button
            type="button"
            className={`krug-tab-btn ${activeCategory === 'products' ? 'active' : ''}`}
            onClick={() => setActiveCategory('products')}
          >
            {t.portfolio.catProducts}
          </button>
          <button
            type="button"
            className={`krug-tab-btn ${activeCategory === 'beauty' ? 'active' : ''}`}
            onClick={() => setActiveCategory('beauty')}
          >
            {t.portfolio.catBeauty}
          </button>
        </div>

        <div className="krug-portfolio-grid">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="krug-portfolio-card"
              onClick={() => setActiveVideoModal(item)}
            >
              <div className="krug-portfolio-thumb">
                <img src={item.thumbnail} alt={item.title[lang]} />
                <div className="krug-portfolio-play-overlay">
                  <div className="krug-play-circle">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="krug-portfolio-body">
                <h3 className="krug-portfolio-title">{item.title[lang]}</h3>
                <div className="krug-portfolio-meta">
                  <span>{item.tag}</span>
                  <span><Eye size={14} style={{ display: 'inline', marginRight: 4 }} /> {item.views} {t.portfolio.viewsLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS TIMELINE SECTION */}
      <section className="krug-section" style={{ background: 'var(--krug-surface)' }}>
        <div className="krug-section-header">
          <span className="krug-section-badge">{t.process.badge}</span>
          <h2 className="krug-section-title">{t.process.title}</h2>
          <p className="krug-section-sub">{t.process.subtitle}</p>
        </div>

        <div className="krug-process-grid">
          <div className="krug-process-card">
            <div className="krug-process-num">{t.process.step1Num}</div>
            <h3 className="krug-process-title">{t.process.step1Title}</h3>
            <p className="krug-process-desc">{t.process.step1Desc}</p>
          </div>

          <div className="krug-process-card">
            <div className="krug-process-num">{t.process.step2Num}</div>
            <h3 className="krug-process-title">{t.process.step2Title}</h3>
            <p className="krug-process-desc">{t.process.step2Desc}</p>
          </div>

          <div className="krug-process-card">
            <div className="krug-process-num">{t.process.step3Num}</div>
            <h3 className="krug-process-title">{t.process.step3Title}</h3>
            <p className="krug-process-desc">{t.process.step3Desc}</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="krug-section">
        <div className="krug-section-header">
          <span className="krug-section-badge">{t.testimonials.badge}</span>
          <h2 className="krug-section-title">{t.testimonials.title}</h2>
          <p className="krug-section-sub">{t.testimonials.subtitle}</p>
        </div>

        <div className="krug-testi-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="krug-testi-card">
              <div>
                <div className="krug-testi-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="krug-testi-text">"{item.text[lang]}"</p>
              </div>

              <div className="krug-testi-author">
                <div>
                  <div className="krug-testi-name">{item.name}</div>
                  <div className="krug-testi-role">{item.role[lang]}</div>
                </div>
                <span className="krug-testi-metric">{item.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="krug-section" style={{ background: 'var(--krug-surface)' }}>
        <div className="krug-section-header">
          <span className="krug-section-badge">{t.faq.badge}</span>
          <h2 className="krug-section-title">{t.faq.title}</h2>
          <p className="krug-section-sub">{t.faq.subtitle}</p>
        </div>

        <div className="krug-faq-container">
          {[
            { q: t.faq.q1, a: t.faq.a1 },
            { q: t.faq.q2, a: t.faq.a2 },
            { q: t.faq.q3, a: t.faq.a3 },
            { q: t.faq.q4, a: t.faq.a4 },
            { q: t.faq.q5, a: t.faq.a5 }
          ].map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="krug-faq-item">
                <button
                  type="button"
                  className="krug-faq-btn"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {isOpen && (
                  <div className="krug-faq-content">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT / LEAD FORM SECTION */}
      <section id="contact" className="krug-section">
        <div className="krug-section-header">
          <span className="krug-section-badge">{t.contact.badge}</span>
          <h2 className="krug-section-title">{t.contact.title}</h2>
          <p className="krug-section-sub">{t.contact.subtitle}</p>
        </div>

        <div className="krug-contact-box">
          {formSubmitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <CheckCircle2 size={64} style={{ color: '#16a34a', margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '12px' }}>
                {lang === 'ru' ? 'Заявка принята!' : 'Cerere acceptată!'}
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--krug-text-muted)', marginBottom: '24px' }}>
                {t.contact.successMsg}
              </p>
              <button
                type="button"
                className="krug-btn krug-btn-primary"
                onClick={() => setFormSubmitted(false)}
              >
                {lang === 'ru' ? 'Отправить ещё одну заявку' : 'Trimite o altă cerere'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="krug-form-grid">
                <div className="krug-form-group">
                  <label className="krug-input-label">{t.contact.nameLabel}</label>
                  <input
                    type="text"
                    required
                    className="krug-input"
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="krug-form-group">
                  <label className="krug-input-label">{t.contact.phoneLabel}</label>
                  <input
                    type="tel"
                    required
                    className="krug-input"
                    placeholder={t.contact.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="krug-form-group krug-form-group-full">
                  <label className="krug-input-label">{t.contact.businessLabel}</label>
                  <input
                    type="text"
                    className="krug-input"
                    placeholder={t.contact.businessPlaceholder}
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="krug-btn krug-btn-primary"
                style={{ width: '100%', marginBottom: '32px' }}
              >
                {t.contact.submitBtn}
              </button>

              <div style={{ textAlign: 'center', borderTop: '1px solid var(--krug-border)', paddingTop: '28px' }}>
                <p style={{ fontWeight: 700, marginBottom: '16px', fontSize: '0.95rem' }}>
                  {t.contact.directMsgTitle}
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="krug-btn krug-btn-wa"
                  >
                    {t.contact.waBtn}
                  </a>
                  <a
                    href="https://t.me/viralis_studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="krug-btn krug-btn-secondary"
                  >
                    {t.contact.tgBtn}
                  </a>
                  <a
                    href="tel:+37378337228"
                    className="krug-btn krug-btn-secondary"
                  >
                    {t.contact.callBtn}
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--krug-surface)', borderTop: '1px solid var(--krug-border)', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="krug-logo" style={{ marginBottom: '8px' }}>
              <Video size={24} className="text-blue-600" />
              <span>VIRALIS</span>
              <span className="krug-logo-badge">600 MDL</span>
            </div>
            <p style={{ color: 'var(--krug-text-muted)', fontSize: '0.9rem' }}>{t.footer.copy}</p>
          </div>

          <div style={{ color: 'var(--krug-text-muted)', fontSize: '0.95rem', fontWeight: 600 }}>
            <div>📍 {t.footer.address}</div>
            <div>📞 {t.footer.phone}</div>
          </div>
        </div>
      </footer>

      {/* FITTS' LAW FIXED MOBILE BOTTOM ACTION BAR */}
      <div className="krug-mobile-bar" role="region" aria-label="Mobile quick actions">
        <a href="tel:+37378337228" className="krug-btn krug-btn-secondary">
          {t.mobileBar.call}
        </a>
        <button
          type="button"
          className="krug-btn krug-btn-primary"
          onClick={() => setIsOrderModalOpen(true)}
        >
          {t.mobileBar.order}
        </button>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="krug-btn krug-btn-wa"
        >
          {t.mobileBar.wa}
        </a>
      </div>

      {/* FAST ORDER MODAL */}
      {isOrderModalOpen && (
        <div className="krug-modal-overlay" role="dialog" aria-modal="true">
          <div className="krug-modal-card">
            <button
              type="button"
              className="krug-modal-close"
              onClick={() => setIsOrderModalOpen(false)}
              aria-label={t.modal.closeBtn}
            >
              <X size={24} />
            </button>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '8px' }}>
              {t.modal.title}
            </h3>
            <p style={{ color: 'var(--krug-text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
              {t.modal.subtitle}
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert(lang === 'ru' ? 'Спасибо! Заказ оформлен. Мы с вами свяжемся!' : 'Mulțumim! Comanda a fost plasată. Te vom contacta!');
              setIsOrderModalOpen(false);
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <label className="krug-input-label">{t.modal.videoCountLabel}</label>
                  <select
                    className="krug-input"
                    value={modalVideoCount}
                    onChange={(e) => setModalVideoCount(Number(e.target.value))}
                  >
                    <option value={1}>1 {lang === 'ru' ? 'ролик (600 MDL)' : 'clip (600 MDL)'}</option>
                    <option value={3}>3 {lang === 'ru' ? 'ролика (1800 MDL)' : 'clipuri (1800 MDL)'}</option>
                    <option value={5}>5 {lang === 'ru' ? 'роликов (2700 MDL со скидкой)' : 'clipuri (2700 MDL cu reducere)'}</option>
                    <option value={10}>10 {lang === 'ru' ? 'роликов (5100 MDL со скидкой)' : 'clipuri (5100 MDL cu reducere)'}</option>
                  </select>
                </div>

                <div>
                  <label className="krug-input-label">{t.modal.nameLabel}</label>
                  <input type="text" required className="krug-input" placeholder="Имя / Nume" />
                </div>

                <div>
                  <label className="krug-input-label">{t.modal.phoneLabel}</label>
                  <input type="tel" required className="krug-input" placeholder="+373..." />
                </div>
              </div>

              <button type="submit" className="krug-btn krug-btn-primary" style={{ width: '100%', marginBottom: '12px' }}>
                {t.modal.submitBtn}
              </button>

              <a
                href={getWhatsAppUrl(`Здравствуйте! Хочу быстро заказать ${modalVideoCount} роликов.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="krug-btn krug-btn-wa"
                style={{ width: '100%' }}
              >
                {t.modal.waBtn}
              </a>
            </form>
          </div>
        </div>
      )}

      {/* VIDEO PREVIEW MODAL */}
      {activeVideoModal && (
        <div className="krug-modal-overlay" role="dialog" aria-modal="true">
          <div className="krug-modal-card" style={{ maxWidth: '720px' }}>
            <button
              type="button"
              className="krug-modal-close"
              onClick={() => setActiveVideoModal(null)}
              aria-label={t.videoModal.close}
            >
              <X size={24} />
            </button>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '16px' }}>
              {activeVideoModal.title[lang]}
            </h3>

            <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', background: '#000', height: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={activeVideoModal.thumbnail}
                alt={activeVideoModal.title[lang]}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
              />
              <div style={{ position: 'absolute', textAlign: 'center', color: '#fff', padding: '20px' }}>
                <Play size={64} style={{ margin: '0 auto 12px' }} />
                <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                  {lang === 'ru' ? 'Демонстрационный видеоролик VIRALIS (600 MDL)' : 'Clip video demonstrativ VIRALIS (600 MDL)'}
                </p>
                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{activeVideoModal.duration} • {activeVideoModal.views} {t.portfolio.viewsLabel}</span>
              </div>
            </div>

            <button
              type="button"
              className="krug-btn krug-btn-primary"
              style={{ width: '100%', marginTop: '20px' }}
              onClick={() => {
                setActiveVideoModal(null);
                setIsOrderModalOpen(true);
              }}
            >
              {t.hero.ctaPrimary}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
