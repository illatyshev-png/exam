// ============================================
// LANDING PAGE CONTENT
// Edit this file to customize all text content.
// No component files need to be modified.
// ============================================

export const siteConfig = {
  name: "Материалы для самоподготовки к аттестационному экзамену в Минюсте",
  logo: null as string | null,
};

export const navLinks = [
  { label: "Что входит", href: "#solution" },
  { label: "Преимущества", href: "#details" },
  { label: "Об авторе", href: "#authority" },
  { label: "Цены", href: "#pricing" },
  { label: "ЧаВо", href: "#faq" },
];

export const heroContent = {
  headline:
    "Не попадите в 70% проваливших экзамен в Минюсте: подготовьтесь на результат в своем темпе.",
  subheadline:
    "Готовые конспекты по всем темам и симулятор тестирования от юриста-практика с 20-летним стажем. Сэкономьте 100+ часов на поиске НПА и структурировании хаоса.",
  ctaText: "Получить доступ и начать подготовку",
  ctaHref: "#pricing",
};

export const statsContent = {
  items: [
    { value: 2026, label: "года", suffix: "", prefix: "", sublabel: "программа" },
    { value: 350, label: "вопросам программы", suffix: "+", prefix: "", sublabel: "конспекты по" },
    { value: 650, label: "вопросов", suffix: "+", prefix: "", sublabel: "в боте" },
    { value: 100, label: "человек", suffix: "+", prefix: "", sublabel: "подготовились" },
  ],
};

export const painContent = {
  intro:
    "Не все юристы готовы привязываться к жёстким дедлайнам и готовиться в быстром темпе. Хаос самоподготовки знаком каждому.",
  struggles: [
    "Не знаете, с чего начать и что именно учить из огромного объёма НПА?",
    "Тратите десятки часов на поиск и структурирование информации?",
    "Готовитесь хаотично и не уверены, что учите нужное?",
    "Нет возможности проверить свой уровень знаний перед экзаменом?",
  ],
};

export const solutionContent = {
  headline: "Ваш «GPS для подготовки»: всё необходимое в одном месте.",
  description:
    "Я создал инструмент, который сам хотел бы иметь при подготовке. Это не просто текст, а выжимка опыта:",
  benefits: [
    {
      title: "Полные конспекты",
      description:
        "По всем вопросам программы. Только нужные статьи НПА, уже отфильтрованные, структурированные и с выделением основных моментов. В полном соответствии с программой 2026!",
      linkText: "Посмотрите пример",
      linkHref:
        "https://dogovor.by/wpm/otkrytye-uroki/7-ohranyaemye-rezultaty-intellektualnoj-deyatelnosti-neraskrytaya-informacziya-polnyj-konspekt-2/",
    },
    {
      title: "Краткие + аудио конспекты",
      description:
        "По вопросам, которые встречались на устном экзамене. Идеально для аудиалов и занятых юристов. Слушайте в машине, в спортзале или на прогулке.",
      linkText: "Посмотрите и послушайте",
      linkHref:
        "https://dogovor.by/wpm/otkrytye-uroki/7-neraskrytaya-informacziya-kratkij-konspekt-audio-2/",
    },
    {
      title: "Телеграм-бот с тестами",
      description:
        "Настоящий симулятор экзамена. Полностью воссоздаёт формат тестирования. Мгновенный анализ ошибок — сразу показывает правильный ответ и даёт ссылку на НПА. Ведёт статистику прогресса. 650+ вопросов в базе.",
      linkText: "Пройдите демо-тест",
      linkHref: "https://t.me/ilat_exambot",
    },
  ],
  highlightCard: {
    title: "Чем наши материалы лучше других?",
    items: [
      "у нас нет заумных лекций, которые вгоняют в сон",
      "наши материалы можно применять сразу, не надо ждать старта потока, сбора группы и т.д.",
      "это самый доступный по цене способ подготовки к экзамену",
    ],
  },
};

export const authorityContent = {
  headline: "Кто подготовил материалы? — Илья Латышев",
  groups: [
    {
      title: "Прямая экспертиза в подготовке",
      items: [
        "С 2022 веду группы подготовки юристов к экзамену в Минюсте, провел 16 групп, в которых готовились 90+ человек. Сейчас веду еще 2 группы (13 человек).",
        "60% участников моих групп, ходивших на экзамен, сдали его с первого раза.",
      ],
    },
    {
      title: "Фундамент юридического опыта",
      items: [
        "Юрист в третьем поколении, работаю в юр. сфере с 2001 года, с 2007 года возглавляю свой юр. бизнес.",
        "Написал 300+ статей юр. тематики, провел под сотню юр. семинаров, с 2002 активно занимаюсь маркетингом юруслуг.",
      ],
    },
    {
      title: "Навыки структурирования и упаковки информации",
      items: [
        "С 2020 года веду авторские онлайн-курсы: «Как юристу уйти из найма в свободное плавание», «Про договоры. Для юристов и не только», «Про цены».",
        "С 2021 года веду мастермайнд группы для юристов и предпринимателей.",
        "С 2022 года практикую как сертифицированный бизнес-коуч ICU.",
      ],
    },
  ],
  image: "/author.jpg",
};

export const detailsContent = {
  headline: "Почему наши материалы работают",
  features: [
    {
      name: "Начните прямо сейчас — доступ открывается сразу после оплаты",
      detail:
        "Никаких ожиданий формирования группы или старта потока. Оплатили — получили доступ — начали готовиться. Каждый день промедления — это еще один день, когда вы могли бы тренироваться, но не делаете этого. Времени до экзамена меньше, чем вы думаете.",
    },
    {
      name: "Снижение стресса — вы точно знаете, ЧТО учить и КАК это проверить",
      detail:
        "Больше никакой паники в стиле «а вдруг я не то учу?». У вас есть четкая карта: конспекты покрывают все темы программы, бот проверяет знания. Вы видите прогресс и понимаете, где еще нужно подтянуть. Это как GPS для подготовки — вы всегда знаете, где находитесь.",
    },
    {
      name: "Подготовка «как для себя» — я сделал то, что сам хотел бы иметь",
      detail:
        "Это не продукт ради продукта. Я уже 3 года вижу, как люди проходят ад подготовки к экзамену и создал еще один инструмент, который облегчил бы жизнь! Поэтому здесь нет воды и лишних заумностей. Только то, что реально нужно на экзамене, только хардкор, только результат. В декабре 2025 я сам готовился к экзамену по этим материалам и сдал его!",
    },
    {
      name: "Бонус: обновления и новые материалы — бесплатно на весь срок доступа",
      detail:
        "Программа меняется? Получаете обновленные конспекты автоматически. Нашлись новые вопросы? Добавляем их в бот без доплат. Вы платите один раз и получаете актуальную базу на весь период подготовки.",
    },
  ],
  bonus: {
    title: "Обновлено под программу 2026",
    description:
      "Новые конспекты! Ещё больше вопросов в боте! КГС, Закон об урегулировании неплатёжеспособности, новый Указ о проверках.",
  },
};

export const testimonialsContent = {
  headline: "Отзывы",
  images: [
    "/testimonials/1.PNG",
    "/testimonials/2.PNG",
    "/testimonials/3.PNG",
    "/testimonials/4.PNG",
    "/testimonials/5.PNG",
    "/testimonials/6.PNG",
    "/testimonials/7.PNG",
    "/testimonials/8.PNG",
    "/testimonials/10.PNG",
    "/testimonials/11.jpg",
  ],
  autoScrollInterval: 3000,
};

// -----------------------------------------------
// Pricing — multi-tier structure
// Each plan has multiple pricing tiers with their
// own payment links.
// -----------------------------------------------

export interface PricingTier {
  label: string;
  price: string;
  oldPrice?: string;
  note?: string;
  ctaText: string;
  ctaHref: string;
  badge?: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  features: string[];
  tiers: PricingTier[];
  highlighted: boolean;
}

export interface TopicItem {
  name: string;
  features: string[];
  price: string;
  ctaHref: string;
  badge?: string;
}

export const pricingContent = {
  headline: "Стоимость и оплата",
  footnote:
    "* При подписке с ежемесячной автооплатой платежи списываются с карты ежемесячно до отмены подписки через личный кабинет на сайте.",
  periodLabels: ["1 месяц", "3 месяца", "6 месяцев"],
  plans: [
    {
      name: "Конспекты",
      description: "Полные и краткие конспекты + аудио",
      highlighted: false,
      features: [
        "Полные конспекты по всем вопросам программы",
        "Краткие конспекты для устного экзамена",
        "Аудио конспекты для изучения на ходу",
        "Бесплатные обновления",
      ],
      tiers: [
        {
          label: "Подписка с ежемесячной автооплатой*",
          price: "120 руб./мес.",
          note: "первый месяц — 179 руб.",
          ctaText: "Оплатить",
          ctaHref:
            "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-myu-rb-podpiska-s-ezhemesyachnoj-avtooplatoj/?add-to-cart=3029",
        },
        {
          label: "Доступ на 3 месяца",
          price: "300 руб.",
          oldPrice: "419 руб.",
          ctaText: "Оплатить",
          ctaHref:
            "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-myu-rb-dostup-3-mes/?add-to-cart=2982",
        },
        {
          label: "Доступ на 6 месяцев",
          price: "480 руб.",
          oldPrice: "779 руб.",
          ctaText: "Оплатить",
          ctaHref:
            "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-myu-rb-dostup-6-mes/?add-to-cart=2983",
        },
      ],
    },
    {
      name: "Бот",
      description: "Симулятор тестирования в Телеграм",
      highlighted: false,
      features: [
        "650+ вопросов в базе",
        "Формат реального экзамена",
        "Мгновенный анализ ошибок",
        "Ссылка на НПА в ответе",
        "Статистика прогресса",
      ],
      tiers: [
        {
          label: "1 месяц (без автооплаты)",
          price: "99 руб.",
          ctaText: "Оплатить",
          ctaHref: "https://api.bepaid.by/products/prd_01a2a70447ae4ec4/pay",
        },
        {
          label: "Доступ на 3 месяца",
          price: "199 руб.",
          oldPrice: "297 руб.",
          ctaText: "Оплатить",
          ctaHref: "https://api.bepaid.by/products/prd_400ff9d5f9e83682/pay",
        },
        {
          label: "Доступ на 6 месяцев",
          price: "399 руб.",
          oldPrice: "594 руб.",
          ctaText: "Оплатить",
          ctaHref: "https://api.bepaid.by/products/prd_e145efebf09091e1/pay",
        },
      ],
    },
    {
      name: "Конспекты + бот",
      description: "Полный комплект для подготовки",
      highlighted: true,
      features: [
        "Всё из тарифа «Конспекты»",
        "Всё из тарифа «Бот»",
        "Максимальная экономия",
        "Бесплатные обновления",
      ],
      tiers: [
        {
          label: "Подписка с ежемесячной автооплатой*",
          price: "170 руб./мес.",
          oldPrice: "278 руб.",
          note: "первый месяц — 229 руб.",
          ctaText: "Оплатить",
          ctaHref:
            "https://dogovor.by/product/konspekty-bot-s-testami-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-myu-rb-podpiska-s-ezhemesyachnoj-avtooplatoj/?add-to-cart=3030",
        },
        {
          label: "Доступ на 3 месяца",
          price: "480 руб.",
          oldPrice: "667 руб.",
          ctaText: "Оплатить",
          ctaHref:
            "https://dogovor.by/product/konspekty-bot-s-testami-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-myu-rb-dostup-3-mes/?add-to-cart=3027",
        },
        {
          label: "Доступ на 6 месяцев",
          price: "850 руб.",
          oldPrice: "1324 руб.",
          ctaText: "Оплатить",
          ctaHref:
            "https://dogovor.by/product/konspekty-bot-s-testami-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-myu-rb-dostup-6-mes/?add-to-cart=3028",
          badge: "Выгодно",
        },
      ],
    },
  ] as PricingPlan[],
  topics: [
    {
      name: "Гражданское законодательство",
      features: [
        "Полные и краткие/аудио конспекты по вопросам блока «Гражданское законодательство»",
        "Доступ на 3 мес.",
      ],
      price: "75 руб.",
      ctaHref:
        "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-minyust-grazhdanskoe-zakonodatelstvo/?add-to-cart=3375",
    },
    {
      name: "Трудовое законодательство",
      features: [
        "Полные и краткие/аудио конспекты по вопросам блока «Трудовое законодательство»",
        "Доступ на 3 мес.",
      ],
      price: "50 руб.",
      ctaHref:
        "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-minyust-trudovoe-zakonodatelstvo/?add-to-cart=3376",
    },
    {
      name: "Законодательство о гражданском судопроизводстве",
      badge: "Новые материалы",
      features: [
        "Полные конспекты по вопросам блока «Законодательство о гражданском судопроизводстве»",
        "Доступ на 3 мес.",
      ],
      price: "75 руб.",
      ctaHref:
        "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-minyust-grazhdanskoe-sudoproizvodstvo/?add-to-cart=3377",
    },
    {
      name: "Закон об исполнительном производстве",
      features: [
        "Полные и краткие/аудио конспекты по вопросам блока «Закон об исполнительном производстве»",
        "Доступ на 3 мес.",
      ],
      price: "50 руб.",
      ctaHref:
        "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-minyust-ispolnitelnoe-proizvodstvo/?add-to-cart=3378",
    },
    {
      name: "Закон об урегулировании неплатежеспособности",
      badge: "Новые материалы",
      features: [
        "Полные и краткие/аудио конспекты по вопросам блока «Закон об урегулировании неплатежеспособности»",
        "Доступ на 3 мес.",
      ],
      price: "75 руб.",
      ctaHref:
        "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-minyust-zakon-ob-uregulirovanii-neplatezhesposobnosti/?add-to-cart=3379",
    },
    {
      name: "Закон о хозяйственных обществах",
      features: [
        "Полные и краткие/аудио конспекты по всем вопросам блока «Закон о хозяйственных обществах»",
        "Доступ на 3 мес.",
      ],
      price: "50 руб.",
      ctaHref:
        "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-minyust-zakon-o-hozyajstvennyh-obshhestvah/?add-to-cart=3380",
    },
    {
      name: "Инвестиции и концессии",
      features: [
        "Полные и краткие/аудио конспекты по вопросам блоков «Инвестиции и концессии»",
        "Доступ на 3 мес.",
      ],
      price: "50 руб.",
      ctaHref:
        "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-minyust-investiczii-i-konczessii/?add-to-cart=3381",
    },
    {
      name: "Уголовное и административное право",
      features: [
        "Полные и краткие/аудио конспекты по вопросам блоков «Уголовное и административное право»",
        "Доступ на 3 мес.",
      ],
      price: "50 руб.",
      ctaHref:
        "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-minyust-ugolovnoe-i-administrativnoe-pravo/?add-to-cart=3382",
    },
    {
      name: "Легализация доходов и лицензирование",
      features: [
        "Полные и краткие/аудио конспекты по вопросам блоков «Легализация доходов и лицензирование»",
        "Доступ на 3 мес.",
      ],
      price: "50 руб.",
      ctaHref:
        "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-minyust-legalizacziya-dohodov-i-liczenzirovanie/?add-to-cart=3383",
    },
    {
      name: "Прочие темы",
      badge: "Концентрат информации",
      features: [
        "Полные и краткие/аудио конспекты по вопросам блоков: «Налоговое право», «Конституционное право», «Правила оказания юридических услуг», «Правила профессиональной этики», «Указ о повышении эффективности контрольной (надзорной) деятельности»",
        "Доступ на 3 мес.",
      ],
      price: "75 руб.",
      ctaHref:
        "https://dogovor.by/product/konspekty-dlya-podgotovki-k-attestaczionnomu-ekzamenu-v-minyust-prochie-temy/?add-to-cart=3384",
    },
  ] as TopicItem[],
};

export const faqContent = {
  headline: "Остались вопросы?",
  items: [
    {
      question: "По какой программе подготовлены материалы?",
      answer:
        "Материалы подготовлены исходя из Программы подготовки к аттестационному экзамену, утверждённой 5 января 2026. Мы будем актуализировать их по мере изменений в программе подготовки. Сроки актуализации зависят от объёма изменений.",
    },
    {
      question: "Как работает подписка с ежемесячной автооплатой?",
      answer:
        "Платежи будут списываться с вашей карты ежемесячно в автоматическом режиме вплоть до момента отмены подписки через личный кабинет на сайте. На бота нет подписки с ежемесячной автооплатой — при оплате на 1 месяц доступ необходимо будет каждый месяц оплачивать вручную.",
    },
    {
      question: "Как подключить бота после оплаты?",
      answer:
        "Наш бот работает в тестовом режиме, не все функции автоматизированы. После оплаты напишите в Телеграм https://t.me/IlyaLatyshev ваше имя пользователя для подключения полного функционала.",
    },
    {
      question: "Гарантируете ли вы сдачу экзамена?",
      answer:
        "Мы предоставляем материалы для подготовки и инструмент для самопроверки. Приобретение данного комплекта не гарантирует успешную сдачу аттестационного экзамена в Минюсте. Результат зависит исключительно от индивидуальных усилий, уровня подготовки и знаний пользователя.",
    },
    {
      question: "Являются ли материалы юридической консультацией?",
      answer:
        "Конспекты и тесты предназначены исключительно для целей подготовки к экзамену. Они не являются официальным источником права, юридической консультацией или руководством к действию в профессиональной деятельности. Мы не несём ответственности за последствия использования материалов в практической деятельности юриста.",
    },
    {
      question: "А если программа изменится?",
      answer:
        "Вы получите обновления автоматически на весь срок приобретенного вами доступа к материалам.",
    },
    {
      question: "Как быстро я получу доступ?",
      answer: "Сразу после оплаты.",
    },
  ],
  finalCta: {
    headline: "Готовы начать подготовку?",
    description:
      "Пока вы думаете, другие юристы уже прорешали 100 вопросов в боте. Не дайте им обойти себя на экзамене.",
    ctaText: "Оплатить и получить доступ",
    ctaHref: "#pricing",
  },
};

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} ЧУП «Юридическая компания Ильи Латышева». УНП 192023334`,
  links: [
    {
      label: "Оферта на конспекты",
      href: "https://www.ilat.info/wp-content/uploads/2025/11/%D0%9F%D1%83%D0%B1%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%BE%D1%84%D0%B5%D1%80%D1%82%D0%B0-%D0%AE%D0%9A%D0%98%D0%9B-%D0%BD%D0%B0-%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B-dogovorby-01-11-2025.pdf",
    },
    {
      label: "Оферта на бота",
      href: "https://www.ilat.info/wp-content/uploads/2025/11/%D0%9E%D1%84%D0%B5%D1%80%D1%82%D0%B0_%D0%B1%D0%BE%D1%82_2025.pdf",
    },
    { label: "Телеграм", href: "https://t.me/IlyaLatyshev" },
  ],
  contact: {
    email: "il.latyshev@gmail.com",
  },
};
