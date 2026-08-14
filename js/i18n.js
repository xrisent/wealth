const TRANSLATIONS = {
  ru: {
    meta: {
      title: "Wealth Auto — премиальные трансферы в Кыргызстане"
    },
    nav: {
      home: "Главная",
      services: "Услуги",
      cars: "Авто",
      about: "О компании",
      prices: "Цены",
      book: "Забронировать"
    },
    header: { tagline: "Premium Transfer Service" },
    hero: {
      eyebrow: "Трансферы бизнес-класса по Кыргызстану",
      title: "Дорога, достойная вашего <em>времени</em>",
      lede: "Wealth Auto — частные трансферы на автомобилях представительского класса. Аэропорт Манас, Иссык-Куль, Алматы и любой город страны — точно в срок и без компромиссов.",
      cta: "Забронировать трансфер",
      ctaSecondary: "Смотреть автопарк",
      routeFrom: "Бишкек",
      routeTo: "Пункт назначения"
    },
    advantages: {
      eyebrow: "Почему Wealth Auto",
      title: "Сервис, на который можно положиться",
      lede: "Каждая деталь маршрута продумана заранее — от подачи машины до встречи в аэропорту.",
      items: [
        { title: "Фиксированная цена", text: "Стоимость поездки известна заранее и не меняется в пути — без счётчиков и наценок." },
        { title: "Русскоязычные водители", text: "Все водители свободно говорят по-русски, знают маршруты и таможенные процедуры." },
        { title: "Подача за 15 минут", text: "Автомобиль прибывает к указанному адресу точно в согласованное время." },
        { title: "Чистота салона", text: "Каждый автомобиль проходит детейлинг перед подачей — салон и кузов в идеальном состоянии." },
        { title: "Страхование поездки", text: "Все трансферы застрахованы, поездка проходит под полным контролем диспетчерской." },
        { title: "Работаем 24/7", text: "Принимаем заявки и выполняем трансферы в любое время суток, включая ночные рейсы." }
      ]
    },
    directions: {
      eyebrow: "Маршруты",
      title: "Основные направления",
      lede: "Выберите маршрут — остальное возьмём на себя.",
      items: [
        { title: "Аэропорт Манас", desc: "Встреча с табличкой у выхода, отслеживание рейса, помощь с багажом." },
        { title: "Иссык-Куль", desc: "Комфортный трансфер к озеру — Чолпон-Ата, Бостери, Каракол и южный берег." },
        { title: "Алматы", desc: "Межгородний трансфер в Казахстан с оформлением на границе без задержек." },
        { title: "Межгород по КР", desc: "Ош, Каракол, Джалал-Абад и другие города — в любую точку страны." }
      ]
    },
    faq: {
      eyebrow: "Вопросы и ответы",
      title: "Часто задаваемые вопросы",
      items: [
        { q: "Как формируется стоимость поездки?", a: "Цена зависит от направления, класса автомобиля и времени подачи. Итоговая сумма фиксируется заранее и подтверждается в WhatsApp — доплат в пути не бывает." },
        { q: "За сколько минут подаётся автомобиль?", a: "Стандартное время подачи — 15 минут по городу. Для трансферов из аэропорта водитель прибывает заранее и отслеживает статус рейса." },
        { q: "Какие способы оплаты доступны?", a: "Принимаем наличные в сомах, банковские переводы и оплату картой по ссылке. Для юридических лиц доступен безналичный расчёт." },
        { q: "Как проходит встреча в аэропорту?", a: "Водитель встречает пассажира в зоне выдачи багажа с именной табличкой и помогает с вещами до автомобиля." },
        { q: "Можно ли заказать детское автокресло?", a: "Да, при бронировании укажите возраст ребёнка — подберём подходящее кресло без дополнительной платы." }
      ]
    },
    form: {
      eyebrow: "Бронирование",
      title: "Оставьте заявку на трансфер",
      lede: "Заполните форму — мы подтвердим маршрут и стоимость в WhatsApp в течение нескольких минут.",
      name: "Имя",
      namePh: "Как к вам обращаться",
      phone: "Телефон",
      phonePh: "+996 700 000 000",
      route: "Маршрут",
      routePh: "Откуда и куда",
      datetime: "Дата и время",
      datetimePh: "Например, 24 июня, 14:00",
      comment: "Комментарий",
      commentPh: "Класс авто, количество пассажиров, детское кресло и т.д.",
      submit: "Отправить в WhatsApp",
      note: "Нажимая кнопку, вы перейдёте в WhatsApp с заполненным сообщением для менеджера Wealth Auto.",
      contactTitle: "Контакты",
      contactLede: "Свяжитесь с нами напрямую — отвечаем в течение нескольких минут.",
      phoneLabel: "Телефон",
      instagramLabel: "Instagram",
      whatsappLabel: "WhatsApp",
      hoursLabel: "Режим работы",
      hoursValue: "Круглосуточно, без выходных"
    },
    footer: {
      lede: "Премиальные трансферы по Кыргызстану и сопредельным странам. Точность, комфорт и безопасность в каждой поездке.",
      navTitle: "Навигация",
      contactTitle: "Контакты",
      rights: "Все права защищены.",
      credit: "Частная транспортная компания, Кыргызстан"
    },
    servicesPage: {
      eyebrow: "Услуги",
      title: "Виды трансфера Wealth Auto",
      lede: "От поездки в аэропорт до сопровождения на деловой встрече — подбираем формат под вашу задачу.",
      items: [
        {
          num: "01",
          title: "Трансфер аэропорт",
          desc: "Встреча и проводы в аэропорту Манас с отслеживанием рейса и табличкой у выхода.",
          points: ["Бесплатное ожидание до 60 минут", "Помощь с багажом", "Табличка с именем пассажира"]
        },
        {
          num: "02",
          title: "Межгородний трансфер",
          desc: "Поездки между городами Кыргызстана и в Алматы с комфортными остановками в пути.",
          points: ["Иссык-Куль, Ош, Каракол, Алматы", "Остановки по запросу", "Кондиционер и wi-fi в салоне"]
        },
        {
          num: "03",
          title: "Почасовая аренда",
          desc: "Автомобиль с водителем в полном распоряжении на несколько часов или на весь день.",
          points: ["Гибкий маршрут в течение дня", "Ожидание включено в тариф", "Смена точек без ограничений"]
        },
        {
          num: "04",
          title: "VIP-сопровождение",
          desc: "Деловые поездки, встречи делегаций и сопровождение первых лиц компаний.",
          points: ["Конфиденциальность маршрута", "Резервный автомобиль", "Персональный координатор"]
        },
        {
          num: "05",
          title: "Трансфер на мероприятия",
          desc: "Свадьбы, торжества, деловые форумы и другие события — подача точно к началу.",
          points: ["Оформление автомобиля по запросу", "Согласованный тайминг подачи", "Несколько машин для гостей"]
        }
      ],
      ctaTitle: "Не нашли подходящий формат?",
      ctaText: "Опишите задачу в WhatsApp — подберём автомобиль и маршрут индивидуально.",
      ctaBtn: "Написать в WhatsApp"
    },
    carsPage: {
      eyebrow: "Автопарк",
      title: "Автомобили Wealth Auto",
      lede: "Три класса автомобилей для любой задачи — от аэропортового трансфера до поездки большой группой.",
      items: [
        {
          tag: "Бизнес-класс",
          title: "Седаны представительского класса",
          models: "Mercedes-Benz S-Class · BMW 7 Series",
          capacity: "1–3 пассажира",
          luggage: "2–3 чемодана",
          features: ["Кожаный салон", "Климат-контроль", "Wi-Fi в салоне", "Вода и пресса"]
        },
        {
          tag: "Внедорожник",
          title: "Премиальные внедорожники",
          models: "Lexus LX · Land Cruiser",
          capacity: "1–4 пассажира",
          luggage: "3–4 чемодана",
          features: ["Полный привод", "Высокая посадка", "Комфорт на горных дорогах", "Панорамная крыша"]
        },
        {
          tag: "Минивэн",
          title: "Минивэны для группы",
          models: "Mercedes-Benz V-Class",
          capacity: "5–7 пассажиров",
          luggage: "6–8 чемоданов",
          features: ["Отдельные капитанские кресла", "Просторный багажник", "Розетки для зарядки", "Раздельный климат-контроль"]
        }
      ],
      note: "Точная модель автомобиля подтверждается при бронировании в зависимости от доступности парка.",
      ctaTitle: "Подберём автомобиль под вашу поездку",
      ctaText: "Укажите количество пассажиров и багажа — предложим подходящий класс.",
      ctaBtn: "Подобрать автомобиль"
    },
    aboutPage: {
      eyebrow: "О компании",
      title: "Wealth Auto — стандарт частных трансферов в Кыргызстане",
      lede: "Мы начинали с одного автомобиля и простого правила: подача вовремя и без исключений. Сегодня это принцип, на котором строится вся компания.",
      missionEyebrow: "Миссия",
      missionTitle: "Дорога без неопределённости",
      missionText: "Мы убеждены, что трансфер — это не просто поездка из точки А в точку Б, а часть впечатления от путешествия или деловой поездки. Наша задача — снять с клиента любые сомнения: водитель приедет вовремя, маршрут будет безопасным, а цена — именно той, что была согласована.",
      stats: [
        { num: "9", label: "лет на рынке" },
        { num: "24 000+", label: "выполненных поездок" },
        { num: "1 200+", label: "постоянных клиентов" },
        { num: "24/7", label: "круглосуточная работа" }
      ],
      valuesEyebrow: "Принципы работы",
      valuesTitle: "На чём строится доверие клиентов",
      values: [
        { title: "Прозрачность", text: "Стоимость и маршрут согласовываются заранее — никаких скрытых доплат." },
        { title: "Дисциплина водителей", text: "Каждый водитель проходит отбор и регулярную проверку знаний маршрутов и этикета." },
        { title: "Контроль качества", text: "Диспетчерская отслеживает каждую поездку от подачи до завершения маршрута." },
        { title: "Постоянное развитие парка", text: "Автомобили обновляются регулярно, чтобы соответствовать стандарту премиального сервиса." }
      ],
      ctaTitle: "Доверьте следующую поездку профессионалам",
      ctaText: "Свяжитесь с нами, чтобы обсудить маршрут и удобное время подачи.",
      ctaBtn: "Связаться с нами"
    },
    pricesPage: {
      eyebrow: "Цены",
      title: "Тарифы Wealth Auto",
      lede: "Стоимость трансфера зависит от направления и класса автомобиля. Итоговая сумма всегда подтверждается заранее.",
      tabs: ["Бизнес-класс", "Внедорожник", "Минивэн"],
      tableHead: ["Направление", "Бизнес-класс", "Внедорожник", "Минивэн"],
      rows: [
        ["Аэропорт Манас — Бишкек", "от 1 200 сом", "от 1 500 сом", "от 1 800 сом"],
        ["Бишкек — Чолпон-Ата", "от 6 500 сом", "от 7 800 сом", "от 9 000 сом"],
        ["Бишкек — Каракол", "от 9 500 сом", "от 11 500 сом", "от 13 000 сом"],
        ["Бишкек — Алматы", "от 12 000 сом", "от 14 500 сом", "от 17 000 сом"],
        ["Почасовая аренда (1 час)", "от 900 сом", "от 1 100 сом", "от 1 400 сом"]
      ],
      note: "Цены указаны от базового тарифа и могут отличаться в зависимости от времени суток, ожидания и дополнительных остановок. Точная стоимость подтверждается при бронировании.",
      cardsEyebrow: "Пакеты",
      cardsTitle: "Готовые решения для частых маршрутов",
      cards: [
        {
          title: "Аэропорт в одну сторону",
          price: "от 1 200 сом",
          priceNote: "за поездку",
          features: ["Встреча с табличкой", "Отслеживание рейса", "60 минут ожидания включено"]
        },
        {
          featured: true,
          title: "Иссык-Куль туда-обратно",
          price: "от 12 500 сом",
          priceNote: "за поездку",
          features: ["Фиксированная цена в обе стороны", "Остановки в пути по запросу", "Выбор даты обратного трансфера"]
        },
        {
          title: "Целый день в распоряжении",
          price: "от 7 500 сом",
          priceNote: "за 8 часов",
          features: ["Свободный маршрут по городу", "Водитель на связи весь день", "Ожидание включено в тариф"]
        }
      ],
      ctaTitle: "Хотите точный расчёт для вашего маршрута?",
      ctaText: "Напишите направление и дату — рассчитаем стоимость за несколько минут.",
      ctaBtn: "Рассчитать стоимость"
    },
    common: {
      whatsappTemplate: "Здравствуйте! Хочу забронировать трансфер Wealth Auto.\nИмя: {name}\nТелефон: {phone}\nМаршрут: {route}\nДата и время: {datetime}\nКомментарий: {comment}"
    }
  },

  en: {
    meta: {
      title: "Wealth Auto — premium transfers in Kyrgyzstan"
    },
    nav: {
      home: "Home",
      services: "Services",
      cars: "Fleet",
      about: "About",
      prices: "Prices",
      book: "Book Now"
    },
    header: { tagline: "Premium Transfer Service" },
    hero: {
      eyebrow: "Business-class transfers across Kyrgyzstan",
      title: "A journey worthy of your <em>time</em>",
      lede: "Wealth Auto provides private chauffeur transfers in executive-class vehicles. Manas Airport, Issyk-Kul, Almaty and any city in the country — always on time, without compromise.",
      cta: "Book a Transfer",
      ctaSecondary: "View the Fleet",
      routeFrom: "Bishkek",
      routeTo: "Your Destination"
    },
    advantages: {
      eyebrow: "Why Wealth Auto",
      title: "A service you can rely on",
      lede: "Every stage of the route is planned in advance — from pick-up to the airport meeting.",
      items: [
        { title: "Fixed pricing", text: "The trip cost is agreed in advance and never changes on the road — no meters, no surprise fees." },
        { title: "Russian-speaking drivers", text: "Every driver speaks fluent Russian and knows the routes and border procedures." },
        { title: "15-minute pick-up", text: "The car arrives at your address exactly at the agreed time." },
        { title: "Spotless interior", text: "Every vehicle is detailed before each ride — interior and exterior kept immaculate." },
        { title: "Insured journeys", text: "Every transfer is insured and monitored by our dispatch team from start to finish." },
        { title: "Available 24/7", text: "We take bookings and run transfers around the clock, including late-night flights." }
      ]
    },
    directions: {
      eyebrow: "Routes",
      title: "Popular Destinations",
      lede: "Choose your route — we take care of the rest.",
      items: [
        { title: "Manas Airport", desc: "Meeting with a name sign at arrivals, flight tracking, help with luggage." },
        { title: "Issyk-Kul Lake", desc: "A comfortable ride to the lake — Cholpon-Ata, Bosteri, Karakol and the southern shore." },
        { title: "Almaty", desc: "Cross-border transfer to Kazakhstan with smooth, unhurried border processing." },
        { title: "Intercity KG", desc: "Osh, Karakol, Jalal-Abad and beyond — anywhere in the country." }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        { q: "How is the trip price calculated?", a: "The price depends on the route, vehicle class and pick-up time. The final amount is fixed in advance and confirmed via WhatsApp — no extra charges on the road." },
        { q: "How quickly does the car arrive?", a: "Standard pick-up time within the city is 15 minutes. For airport transfers the driver arrives early and tracks your flight status." },
        { q: "What payment methods are available?", a: "We accept cash in som, bank transfers and card payment via link. Invoicing is available for corporate clients." },
        { q: "How does the airport meeting work?", a: "The driver meets you at the baggage claim area holding a name sign and helps carry your luggage to the car." },
        { q: "Can I request a child car seat?", a: "Yes — mention your child's age when booking and we will provide a suitable seat at no extra charge." }
      ]
    },
    form: {
      eyebrow: "Booking",
      title: "Request a transfer",
      lede: "Fill in the form and we will confirm your route and price on WhatsApp within minutes.",
      name: "Name",
      namePh: "How should we address you",
      phone: "Phone",
      phonePh: "+996 700 000 000",
      route: "Route",
      routePh: "From and to",
      datetime: "Date and time",
      datetimePh: "e.g. June 24, 14:00",
      comment: "Comment",
      commentPh: "Vehicle class, number of passengers, child seat, etc.",
      submit: "Send via WhatsApp",
      note: "Pressing the button opens WhatsApp with a pre-filled message to the Wealth Auto team.",
      contactTitle: "Contacts",
      contactLede: "Reach us directly — we usually reply within a few minutes.",
      phoneLabel: "Phone",
      instagramLabel: "Instagram",
      whatsappLabel: "WhatsApp",
      hoursLabel: "Working hours",
      hoursValue: "24 hours a day, every day"
    },
    footer: {
      lede: "Premium transfers across Kyrgyzstan and neighbouring countries. Precision, comfort and safety in every ride.",
      navTitle: "Navigation",
      contactTitle: "Contacts",
      rights: "All rights reserved.",
      credit: "Private transportation company, Kyrgyzstan"
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Wealth Auto transfer formats",
      lede: "From an airport pick-up to accompanying a business meeting — we match the format to your task.",
      items: [
        {
          num: "01",
          title: "Airport Transfer",
          desc: "Meet and greet at Manas Airport with flight tracking and a name sign at arrivals.",
          points: ["Free waiting time up to 60 minutes", "Luggage assistance", "Name sign at the gate"]
        },
        {
          num: "02",
          title: "Intercity Transfer",
          desc: "Travel between cities in Kyrgyzstan and to Almaty with comfortable stops along the way.",
          points: ["Issyk-Kul, Osh, Karakol, Almaty", "Stops on request", "Air conditioning and wi-fi on board"]
        },
        {
          num: "03",
          title: "Hourly Rental",
          desc: "A chauffeured car at your full disposal for a few hours or a whole day.",
          points: ["Flexible route through the day", "Waiting time included", "Unlimited stops"]
        },
        {
          num: "04",
          title: "VIP Escort",
          desc: "Business trips, delegation meetings and executive travel support.",
          points: ["Confidential routing", "Backup vehicle on standby", "Personal coordinator"]
        },
        {
          num: "05",
          title: "Event Transfer",
          desc: "Weddings, celebrations, business forums and other events — arriving exactly on time.",
          points: ["Vehicle decoration on request", "Pre-agreed arrival timing", "Multiple cars for guests"]
        }
      ],
      ctaTitle: "Not the right format?",
      ctaText: "Describe your task on WhatsApp — we will tailor the car and route individually.",
      ctaBtn: "Message on WhatsApp"
    },
    carsPage: {
      eyebrow: "Fleet",
      title: "The Wealth Auto Fleet",
      lede: "Three classes of vehicle for every occasion — from an airport run to travelling with a larger group.",
      items: [
        {
          tag: "Business Class",
          title: "Executive Sedans",
          models: "Mercedes-Benz S-Class · BMW 7 Series",
          capacity: "1–3 passengers",
          luggage: "2–3 suitcases",
          features: ["Leather interior", "Climate control", "In-car wi-fi", "Water and press"]
        },
        {
          tag: "SUV",
          title: "Premium SUVs",
          models: "Lexus LX · Land Cruiser",
          capacity: "1–4 passengers",
          luggage: "3–4 suitcases",
          features: ["All-wheel drive", "Higher ground clearance", "Comfort on mountain roads", "Panoramic roof"]
        },
        {
          tag: "Minivan",
          title: "Group Minivans",
          models: "Mercedes-Benz V-Class",
          capacity: "5–7 passengers",
          luggage: "6–8 suitcases",
          features: ["Individual captain seats", "Spacious luggage area", "Charging outlets", "Dual-zone climate control"]
        }
      ],
      note: "The exact vehicle model is confirmed at booking, depending on fleet availability.",
      ctaTitle: "Let us match a car to your trip",
      ctaText: "Tell us the number of passengers and luggage — we will suggest the right class.",
      ctaBtn: "Find my vehicle"
    },
    aboutPage: {
      eyebrow: "About Us",
      title: "Wealth Auto — the standard of private transfers in Kyrgyzstan",
      lede: "We started with a single car and one simple rule: on-time pick-up, no exceptions. Today that rule shapes the entire company.",
      missionEyebrow: "Mission",
      missionTitle: "A journey without uncertainty",
      missionText: "We believe a transfer is more than a ride from point A to point B — it is part of the impression a trip or a business journey leaves behind. Our task is to remove any doubt: the driver will arrive on time, the route will be safe, and the price will be exactly what was agreed.",
      stats: [
        { num: "9", label: "years in business" },
        { num: "24,000+", label: "completed transfers" },
        { num: "1,200+", label: "returning clients" },
        { num: "24/7", label: "around-the-clock service" }
      ],
      valuesEyebrow: "Our Principles",
      valuesTitle: "What our clients' trust is built on",
      values: [
        { title: "Transparency", text: "Price and route are agreed in advance — no hidden surcharges." },
        { title: "Driver discipline", text: "Every driver is selected and regularly assessed on route knowledge and etiquette." },
        { title: "Quality control", text: "Dispatch monitors every ride from pick-up to the end of the route." },
        { title: "Fleet renewal", text: "Vehicles are updated regularly to keep pace with a premium service standard." }
      ],
      ctaTitle: "Trust your next trip to professionals",
      ctaText: "Get in touch to discuss the route and a convenient pick-up time.",
      ctaBtn: "Contact us"
    },
    pricesPage: {
      eyebrow: "Prices",
      title: "Wealth Auto Rates",
      lede: "Transfer cost depends on the route and vehicle class. The final amount is always confirmed in advance.",
      tabs: ["Business Class", "SUV", "Minivan"],
      tableHead: ["Route", "Business Class", "SUV", "Minivan"],
      rows: [
        ["Manas Airport — Bishkek", "from 1,200 KGS", "from 1,500 KGS", "from 1,800 KGS"],
        ["Bishkek — Cholpon-Ata", "from 6,500 KGS", "from 7,800 KGS", "from 9,000 KGS"],
        ["Bishkek — Karakol", "from 9,500 KGS", "from 11,500 KGS", "from 13,000 KGS"],
        ["Bishkek — Almaty", "from 12,000 KGS", "from 14,500 KGS", "from 17,000 KGS"],
        ["Hourly rental (1 hour)", "from 900 KGS", "from 1,100 KGS", "from 1,400 KGS"]
      ],
      note: "Prices are starting rates and may vary depending on time of day, waiting time and additional stops. The exact cost is confirmed at booking.",
      cardsEyebrow: "Packages",
      cardsTitle: "Ready-made options for popular routes",
      cards: [
        {
          title: "Airport One-Way",
          price: "from 1,200 KGS",
          priceNote: "per ride",
          features: ["Meeting with a name sign", "Flight tracking", "60 minutes of waiting included"]
        },
        {
          featured: true,
          title: "Issyk-Kul Round Trip",
          price: "from 12,500 KGS",
          priceNote: "per ride",
          features: ["Fixed price both ways", "Stops on request", "Choose the return date"]
        },
        {
          title: "Full Day at Your Disposal",
          price: "from 7,500 KGS",
          priceNote: "for 8 hours",
          features: ["Free route around the city", "Driver available all day", "Waiting included in the rate"]
        }
      ],
      ctaTitle: "Want an exact quote for your route?",
      ctaText: "Send the direction and date — we will calculate the cost within minutes.",
      ctaBtn: "Get a quote"
    },
    common: {
      whatsappTemplate: "Hello! I'd like to book a Wealth Auto transfer.\nName: {name}\nPhone: {phone}\nRoute: {route}\nDate and time: {datetime}\nComment: {comment}"
    }
  },

  ky: {
    meta: {
      title: "Wealth Auto — Кыргызстандагы премиум трансферлер"
    },
    nav: {
      home: "Башкы бет",
      services: "Кызматтар",
      cars: "Автопарк",
      about: "Компания жөнүндө",
      prices: "Баалар",
      book: "Брондоо"
    },
    header: { tagline: "Premium Transfer Service" },
    hero: {
      eyebrow: "Кыргызстан боюнча бизнес-класс трансферлер",
      title: "Сиздин <em>убактыңызга</em> татыктуу жол",
      lede: "Wealth Auto — өкүлдүк класстагы автомобилдерде жеке трансферлер. Манас аэропорту, Ысык-Көл, Алматы жана өлкөнүн каалаган шаары — так убагында, компромисссиз.",
      cta: "Трансфер брондоо",
      ctaSecondary: "Автопаркты көрүү",
      routeFrom: "Бишкек",
      routeTo: "Максаттуу пункт"
    },
    advantages: {
      eyebrow: "Эмне үчүн Wealth Auto",
      title: "Ишенимдүү кызмат көрсөтүү",
      lede: "Маршруттун ар бир этабы алдын ала ойлонулган — унаанын келишинен аэропорттогу жолугушууга чейин.",
      items: [
        { title: "Так баа", text: "Сапардын баасы алдын ала белгилүү жана жолдо өзгөрбөйт — эсептегич жана кошумча төлөм жок." },
        { title: "Орусча сүйлөгөн айдоочулар", text: "Бардык айдоочулар орус тилинде эркин сүйлөшөт, маршруттарды жана бажы жол-жоболорун билишет." },
        { title: "15 мүнөттө келүү", text: "Автомобиль көрсөтүлгөн дарекке макулдашылган убакытта так келет." },
        { title: "Тазалык", text: "Ар бир автомобиль берилүүдөн мурун детейлингден өтөт — салон менен кузов идеалдуу абалда." },
        { title: "Сапарды камсыздандыруу", text: "Бардык трансферлер камсыздандырылган жана диспетчердик кызмат тарабынан толук көзөмөлдөнөт." },
        { title: "Күн бою, жума бою иштейбиз", text: "Түнкү рейстерди кошо алганда, буйрутмаларды каалаган убакта кабыл алабыз." }
      ]
    },
    directions: {
      eyebrow: "Маршруттар",
      title: "Негизги багыттар",
      lede: "Маршрутту тандаңыз — калганын биз аткарабыз.",
      items: [
        { title: "Манас аэропорту", desc: "Чыгуу эшигинде атыңыз жазылган такта менен тосуп алуу, рейсти көзөмөлдөө, жүк ташуу." },
        { title: "Ысык-Көл", desc: "Көлгө ыңгайлуу трансфер — Чолпон-Ата, Бостери, Каракол жана түштүк жээк." },
        { title: "Алматы", desc: "Казакстанга чек арадан тез өтүү менен шаарлар аралык трансфер." },
        { title: "КР боюнча шаарлар аралык", desc: "Ош, Каракол, Жалал-Абад жана башка шаарлар — өлкөнүн каалаган чекитине." }
      ]
    },
    faq: {
      eyebrow: "Суроо-жооптор",
      title: "Көп берилүүчү суроолор",
      items: [
        { q: "Сапардын баасы кантип түзүлөт?", a: "Баа багытка, автомобиль класына жана берилүү убактысына жараша аныкталат. Акыркы сумма алдын ала бекитилип, WhatsApp аркылуу тастыкталат — жолдо кошумча төлөм болбойт." },
        { q: "Автомобиль канча мүнөттө келет?", a: "Шаар боюнча стандарттуу берилүү убактысы — 15 мүнөт. Аэропорттон трансфер үчүн айдоочу алдын ала келип, рейстин статусун көзөмөлдөйт." },
        { q: "Кандай төлөм ыкмалары бар?", a: "Сомдо накталай, банктык которуулар жана шилтеме аркылуу карта менен төлөмдөрдү кабыл алабыз. Юридикалык жактар үчүн накталай эмес эсептешүү жеткиликтүү." },
        { q: "Аэропортто жолугушуу кантип өтөт?", a: "Айдоочу жүк алуу зонасында атыңыз жазылган такта менен тосуп алат жана буюмдарды унаага ташууга жардам берет." },
        { q: "Балдар креслосун буйрутма кылса болобу?", a: "Ооба, брондоодо баланын жашын көрсөтүңүз — кошумча төлөмсүз ылайыктуу креслону тандап беребиз." }
      ]
    },
    form: {
      eyebrow: "Брондоо",
      title: "Трансферге өтүнмө калтырыңыз",
      lede: "Форманы толтуруңуз — биз бир нече мүнөттүн ичинде WhatsApp аркылуу маршрут менен баасын тастыктайбыз.",
      name: "Атыңыз",
      namePh: "Сизге кантип кайрылалы",
      phone: "Телефон",
      phonePh: "+996 700 000 000",
      route: "Маршрут",
      routePh: "Кайдан жана кайда",
      datetime: "Дата жана убакыт",
      datetimePh: "Мисалы, 24-июнь, 14:00",
      comment: "Комментарий",
      commentPh: "Автомобиль классы, жүргүнчүлөрдүн саны, балдар креслосу ж.б.",
      submit: "WhatsApp аркылуу жөнөтүү",
      note: "Баскычты басканда, Wealth Auto менеджерине толтурулган билдирүү менен WhatsApp ачылат.",
      contactTitle: "Байланыш",
      contactLede: "Бизге түз кайрылыңыз — бир нече мүнөттүн ичинде жооп беребиз.",
      phoneLabel: "Телефон",
      instagramLabel: "Instagram",
      whatsappLabel: "WhatsApp",
      hoursLabel: "Иш убактысы",
      hoursValue: "Күн бою, эс алуу күндөрүсүз"
    },
    footer: {
      lede: "Кыргызстан жана коңшу өлкөлөр боюнча премиум трансферлер. Ар бир сапарда тактык, ыңгайлуулук жана коопсуздук.",
      navTitle: "Навигация",
      contactTitle: "Байланыш",
      rights: "Бардык укуктар корголгон.",
      credit: "Жеке транспорт компаниясы, Кыргызстан"
    },
    servicesPage: {
      eyebrow: "Кызматтар",
      title: "Wealth Auto трансфер түрлөрү",
      lede: "Аэропортко баруудан бизнес-жолугушууга коштоп баруу — тапшырмаңызга ылайык форматты тандайбыз.",
      items: [
        {
          num: "01",
          title: "Аэропорт трансфери",
          desc: "Манас аэропортунда тосуп алуу жана узатуу, рейсти көзөмөлдөө жана атыңыз жазылган такта.",
          points: ["60 мүнөткө чейин акысыз күтүү", "Жүк ташууга жардам", "Чыгуу эшигинде ат-жөн жазылган такта"]
        },
        {
          num: "02",
          title: "Шаарлар аралык трансфер",
          desc: "Кыргызстандын шаарлары жана Алматы аралык сапарлар, жолдо ыңгайлуу токтоолор менен.",
          points: ["Ысык-Көл, Ош, Каракол, Алматы", "Суранык боюнча токтоолор", "Салондо кондиционер жана wi-fi"]
        },
        {
          num: "03",
          title: "Саат боюнча ижара",
          desc: "Айдоочу менен автомобиль бир нече саатка же бүтүндөй күнгө сиздин ыктыярыңызда.",
          points: ["Күн ичинде ийкемдүү маршрут", "Күтүү тарифке кирет", "Чекиттерди чектөөсүз алмаштыруу"]
        },
        {
          num: "04",
          title: "VIP коштоо",
          desc: "Бизнес сапарлар, делегацияларды тосуп алуу жана компаниянын жетекчилерин коштоо.",
          points: ["Маршруттун купуялуулугу", "Резервдик автомобиль", "Жеке координатор"]
        },
        {
          num: "05",
          title: "Иш-чараларга трансфер",
          desc: "Үйлөнүү тойлору, майрамдар, бизнес-форумдар жана башка иш-чаралар — так убагында келүү.",
          points: ["Суранык боюнча автомобилди кооздоо", "Макулдашылган берилүү убактысы", "Коноктор үчүн бир нече унаа"]
        }
      ],
      ctaTitle: "Ылайыктуу форматты таппадыңызбы?",
      ctaText: "Тапшырманы WhatsApp'та жазыңыз — автомобиль менен маршрутту жекече тандайбыз.",
      ctaBtn: "WhatsApp'ка жазуу"
    },
    carsPage: {
      eyebrow: "Автопарк",
      title: "Wealth Auto автомобилдери",
      lede: "Ар кандай тапшырма үчүн үч класс автомобиль — аэропорт трансферинен чоң топ менен сапарга чейин.",
      items: [
        {
          tag: "Бизнес-класс",
          title: "Өкүлдүк класстагы седандар",
          models: "Mercedes-Benz S-Class · BMW 7 Series",
          capacity: "1–3 жүргүнчү",
          luggage: "2–3 чемодан",
          features: ["Булгаары салон", "Климат-контроль", "Салондо wi-fi", "Суу жана басма сөз"]
        },
        {
          tag: "Внедорожник",
          title: "Премиум внедорожниктер",
          models: "Lexus LX · Land Cruiser",
          capacity: "1–4 жүргүнчү",
          luggage: "3–4 чемодан",
          features: ["Толук привод", "Бийик отуруу", "Тоо жолдорундагы ыңгайлуулук", "Панорамалык чатыр"]
        },
        {
          tag: "Минивэн",
          title: "Топ үчүн минивэндер",
          models: "Mercedes-Benz V-Class",
          capacity: "5–7 жүргүнчү",
          luggage: "6–8 чемодан",
          features: ["Өзүнчө капитан креслолору", "Кенен жүк бөлүмү", "Заряддоо розеткалары", "Бөлүнгөн климат-контроль"]
        }
      ],
      note: "Автомобилдин так модели брондоодо парктын жеткиликтүүлүгүнө жараша тастыкталат.",
      ctaTitle: "Сапарыңызга автомобиль тандайбыз",
      ctaText: "Жүргүнчүлөрдүн жана жүктүн санын көрсөтүңүз — ылайыктуу классты сунуштайбыз.",
      ctaBtn: "Автомобиль тандоо"
    },
    aboutPage: {
      eyebrow: "Компания жөнүндө",
      title: "Wealth Auto — Кыргызстандагы жеке трансферлердин стандарты",
      lede: "Биз бир автомобилден жана жөнөкөй эрежеден баштаганбыз: убагында келүү, эч кандай өзгөчөлүксүз. Бүгүн бул эреже бүт компаниянын негизи болуп саналат.",
      missionEyebrow: "Миссия",
      missionTitle: "Белгисиздиксиз жол",
      missionText: "Биз трансфер жөн гана А чекитинен Б чекитине сапар эмес, саякаттын же бизнес-сапардын таасиринин бир бөлүгү деп эсептейбиз. Биздин милдет — кардардын бардык күмөндөрүн жоюу: айдоочу убагында келет, маршрут коопсуз болот, ал эми баа так макулдашылгандай болот.",
      stats: [
        { num: "9", label: "жыл рыногунда" },
        { num: "24 000+", label: "аткарылган сапар" },
        { num: "1 200+", label: "туруктуу кардар" },
        { num: "24/7", label: "күн бою иштейбиз" }
      ],
      valuesEyebrow: "Иштин принциптери",
      valuesTitle: "Кардарлардын ишенимин эмне негиздейт",
      values: [
        { title: "Ачыктык", text: "Баа жана маршрут алдын ала макулдашылат — жашыруун кошумча төлөмдөр жок." },
        { title: "Айдоочулардын тартиби", text: "Ар бир айдоочу тандоодон өтөт жана маршруттарды билүү менен адеп боюнча дайыма текшерилет." },
        { title: "Сапатты көзөмөлдөө", text: "Диспетчердик кызмат ар бир сапарды берилүүдөн маршруттун аягына чейин көзөмөлдөйт." },
        { title: "Парктын үзгүлтүксүз жаңырышы", text: "Автомобилдер премиум кызматтын стандартына дал келиши үчүн дайыма жаңыртылып турат." }
      ],
      ctaTitle: "Кийинки сапарыңызды кесипкөйлөргө ишениңиз",
      ctaText: "Маршрутту жана ыңгайлуу берилүү убактысын талкуулоо үчүн байланышыңыз.",
      ctaBtn: "Биз менен байланышуу"
    },
    pricesPage: {
      eyebrow: "Баалар",
      title: "Wealth Auto тарифтери",
      lede: "Трансфердин баасы багытка жана автомобиль класына жараша болот. Акыркы сумма ар дайым алдын ала тастыкталат.",
      tabs: ["Бизнес-класс", "Внедорожник", "Минивэн"],
      tableHead: ["Багыт", "Бизнес-класс", "Внедорожник", "Минивэн"],
      rows: [
        ["Манас аэропорту — Бишкек", "1 200 сомдон", "1 500 сомдон", "1 800 сомдон"],
        ["Бишкек — Чолпон-Ата", "6 500 сомдон", "7 800 сомдон", "9 000 сомдон"],
        ["Бишкек — Каракол", "9 500 сомдон", "11 500 сомдон", "13 000 сомдон"],
        ["Бишкек — Алматы", "12 000 сомдон", "14 500 сомдон", "17 000 сомдон"],
        ["Саат боюнча ижара (1 саат)", "900 сомдон", "1 100 сомдон", "1 400 сомдон"]
      ],
      note: "Баалар негизги тарифтен көрсөтүлгөн жана күндүн убактысына, күтүүгө жана кошумча токтоолорго жараша өзгөрүшү мүмкүн. Так баа брондоодо тастыкталат.",
      cardsEyebrow: "Пакеттер",
      cardsTitle: "Көп сурала турган багыттар үчүн даяр чечимдер",
      cards: [
        {
          title: "Аэропортко бир жолку",
          price: "1 200 сомдон",
          priceNote: "сапар үчүн",
          features: ["Ат-жөн жазылган такта менен тосуп алуу", "Рейсти көзөмөлдөө", "60 мүнөт күтүү кирет"]
        },
        {
          featured: true,
          title: "Ысык-Көлгө бара-кел",
          price: "12 500 сомдон",
          priceNote: "сапар үчүн",
          features: ["Эки тарапка тең так баа", "Суранык боюнча токтоолор", "Кайра кайтуу датасын тандоо"]
        },
        {
          title: "Бүтүндөй күн ыктыярыңызда",
          price: "7 500 сомдон",
          priceNote: "8 саатка",
          features: ["Шаар боюнча эркин маршрут", "Айдоочу күн бою байланышта", "Күтүү тарифке кирет"]
        }
      ],
      ctaTitle: "Маршрутуңуз үчүн так эсеп каалайсызбы?",
      ctaText: "Багыт менен датаны жазыңыз — бир нече мүнөттүн ичинде баасын эсептеп беребиз.",
      ctaBtn: "Баасын эсептөө"
    },
    common: {
      whatsappTemplate: "Салам! Wealth Auto трансферин брондогум келет.\nАты: {name}\nТелефон: {phone}\nМаршрут: {route}\nДата жана убакыт: {datetime}\nКомментарий: {comment}"
    }
  }
};
