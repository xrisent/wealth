(function () {
  'use strict';

  const STORAGE_KEY = 'wealthauto_lang';
  const DEFAULT_LANG = 'ru';
  const WHATSAPP_PHONE = '996221108000';

  function getByPath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function currentLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function svgCheck() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
  }

  function applyStaticTranslations(lang) {
    const dict = TRANSLATIONS[lang];
    document.documentElement.lang = lang === 'ky' ? 'ky' : lang;
    if (dict.meta && dict.meta.title) document.title = dict.meta.title;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const value = getByPath(dict, el.getAttribute('data-i18n'));
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const value = getByPath(dict, el.getAttribute('data-i18n-html'));
      if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const value = getByPath(dict, el.getAttribute('data-i18n-placeholder'));
      if (value !== undefined) el.setAttribute('placeholder', value);
    });
  }

  function clearAndRender(container, items, renderFn) {
    if (!container) return;
    container.innerHTML = '';
    items.forEach(function (item, index) {
      container.appendChild(renderFn(item, index));
    });
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  const ICONS = {
    price: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v18M17 7.5c0-1.93-2.24-3.5-5-3.5s-5 1.57-5 3.5 2.24 3.5 5 3.5 5 1.57 5 3.5-2.24 3.5-5 3.5-5-1.57-5-3.5"/></svg>',
    driver: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M4.5 20c1.4-4 4-6 7.5-6s6.1 2 7.5 6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/></svg>',
    hours: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>'
  };
  const ADVANTAGE_ICON_ORDER = ['price', 'driver', 'clock', 'sparkle', 'shield', 'hours'];

  const DIRECTION_IMAGES = [
    'https://images.unsplash.com/photo-1769662457308-12b10fec55af?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1551189783-e226306fd8a1?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1667816159412-1cfd4979da8e?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1675157935570-e04938711f1e?auto=format&fit=crop&w=900&q=80'
  ];
  const DIRECTION_ALT = {
    ru: ['Терминал аэропорта Манас', 'Озеро Иссык-Куль в горах', 'Горная дорога в Кыргызстане', 'Панорама озера с горами'],
    en: ['Manas Airport terminal', 'Lake Issyk-Kul in the mountains', 'Mountain road in Kyrgyzstan', 'Lake panorama with mountains'],
    ky: ['Манас аэропортунун терминалы', 'Тоолордогу Ысык-Көл', 'Кыргызстандагы тоо жолу', 'Тоолор менен көлдүн панорамасы']
  };

  function renderHome(lang) {
    const dict = TRANSLATIONS[lang];
    const advGrid = document.querySelector('[data-render="advantages"]');
    clearAndRender(advGrid, dict.advantages.items, function (item, i) {
      const card = el('div', 'card reveal');
      card.appendChild(el('div', 'card-icon', ICONS[ADVANTAGE_ICON_ORDER[i]] || ICONS.sparkle));
      card.appendChild(el('h3', null, item.title));
      card.appendChild(el('p', null, item.text));
      return card;
    });

    const dirGrid = document.querySelector('[data-render="directions"]');
    clearAndRender(dirGrid, dict.directions.items, function (item, i) {
      const card = el('div', 'direction-card reveal');
      const img = document.createElement('img');
      img.src = DIRECTION_IMAGES[i % DIRECTION_IMAGES.length];
      img.alt = (DIRECTION_ALT[lang] && DIRECTION_ALT[lang][i]) || item.title;
      img.loading = 'lazy';
      card.appendChild(img);
      const content = el('div', 'direction-card-content');
      content.appendChild(el('h3', null, item.title));
      const labels = el('div', 'route-labels', '<span>' + dict.hero.routeFrom + '</span><span>' + item.title + '</span>');
      content.appendChild(labels);
      const route = el('div', 'route');
      route.innerHTML = '<span class="route-point"></span><span class="route-line"></span><span class="route-pin"></span>';
      content.appendChild(route);
      const desc = el('p', null, item.desc);
      desc.style.marginTop = '14px';
      desc.style.fontSize = '13.5px';
      desc.style.color = 'var(--color-muted)';
      content.appendChild(desc);
      card.appendChild(content);
      return card;
    });

    const faqList = document.querySelector('[data-render="faq"]');
    clearAndRender(faqList, dict.faq.items, function (item) {
      const wrap = el('div', 'faq-item');
      const btn = document.createElement('button');
      btn.className = 'faq-question';
      btn.type = 'button';
      btn.innerHTML = '<span>' + item.q + '</span><span class="plus"></span>';
      const answer = el('div', 'faq-answer');
      answer.appendChild(el('p', null, item.a));
      btn.addEventListener('click', function () {
        const isOpen = wrap.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
          if (openItem !== wrap) {
            openItem.classList.remove('open');
            openItem.querySelector('.faq-answer').style.maxHeight = null;
          }
        });
        if (isOpen) {
          wrap.classList.remove('open');
          answer.style.maxHeight = null;
        } else {
          wrap.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
      wrap.appendChild(btn);
      wrap.appendChild(answer);
      return wrap;
    });

    observeReveal();
  }

  function renderServices(lang) {
    const dict = TRANSLATIONS[lang];
    const grid = document.querySelector('[data-render="services"]');
    if (!grid) return;
    clearAndRender(grid, dict.servicesPage.items, function (item) {
      const card = el('div', 'card service-card reveal');
      card.appendChild(el('div', 'num', item.num));
      card.appendChild(el('h3', null, item.title));
      card.appendChild(el('p', null, item.desc));
      const ul = document.createElement('ul');
      item.points.forEach(function (point) {
        const li = document.createElement('li');
        li.innerHTML = ICONS.sparkle.replace('viewBox', 'style="flex-shrink:0" viewBox') + '<span>' + point + '</span>';
        ul.appendChild(li);
      });
      card.appendChild(ul);
      return card;
    });
    observeReveal();
  }

  const CAR_IMAGES = [
    { src: 'https://images.unsplash.com/photo-1544567430-6b7131655bb1?auto=format&fit=crop&w=1000&q=80', alt: { ru: 'Чёрный Mercedes-Benz бизнес-класса', en: 'Black Mercedes-Benz business sedan', ky: 'Кара түстөгү Mercedes-Benz бизнес-класс' } },
    { src: 'https://images.unsplash.com/photo-1756443773455-22e4f3d8d823?auto=format&fit=crop&w=1000&q=80', alt: { ru: 'Чёрный внедорожник премиум-класса', en: 'Black premium SUV', ky: 'Кара түстөгү премиум внедорожник' } },
    { src: 'https://images.unsplash.com/photo-1601548994922-d68e38896a2d?auto=format&fit=crop&w=1000&q=80', alt: { ru: 'Чёрный минивэн на улице города', en: 'Black minivan parked on a city street', ky: 'Шаар көчөсүндөгү кара минивэн' } }
  ];

  function renderCars(lang) {
    const dict = TRANSLATIONS[lang];
    const grid = document.querySelector('[data-render="cars"]');
    if (!grid) return;
    clearAndRender(grid, dict.carsPage.items, function (item, i) {
      const card = el('div', 'car-card reveal');
      const media = el('div', 'car-media');
      const img = document.createElement('img');
      img.src = CAR_IMAGES[i].src;
      img.alt = CAR_IMAGES[i].alt[lang] || item.title;
      img.loading = 'lazy';
      media.appendChild(img);
      media.appendChild(el('span', 'car-class-tag', item.tag));
      card.appendChild(media);

      const body = el('div', 'car-body');
      body.appendChild(el('h3', null, item.title));
      body.appendChild(el('div', 'car-models', item.models));

      const specs = el('div', 'car-specs');
      const spec1 = el('div', 'car-spec');
      spec1.appendChild(el('span', null, lang === 'ru' ? 'Пассажиры' : lang === 'en' ? 'Passengers' : 'Жүргүнчүлөр'));
      spec1.appendChild(el('strong', null, item.capacity));
      const spec2 = el('div', 'car-spec');
      spec2.appendChild(el('span', null, lang === 'ru' ? 'Багаж' : lang === 'en' ? 'Luggage' : 'Жүк'));
      spec2.appendChild(el('strong', null, item.luggage));
      specs.appendChild(spec1);
      specs.appendChild(spec2);
      body.appendChild(specs);

      const featList = el('ul', 'car-features');
      item.features.forEach(function (f) {
        featList.appendChild(el('li', null, f));
      });
      body.appendChild(featList);

      card.appendChild(body);
      return card;
    });
    observeReveal();
  }

  function renderAbout(lang) {
    const dict = TRANSLATIONS[lang];
    const statsGrid = document.querySelector('[data-render="stats"]');
    clearAndRender(statsGrid, dict.aboutPage.stats, function (item) {
      const card = el('div', 'stat-card reveal');
      card.appendChild(el('div', 'stat-num', item.num));
      card.appendChild(el('div', 'stat-label', item.label));
      return card;
    });

    const valuesList = document.querySelector('[data-render="values"]');
    clearAndRender(valuesList, dict.aboutPage.values, function (item, i) {
      const li = document.createElement('li');
      li.appendChild(el('span', 'idx', String(i + 1).padStart(2, '0')));
      const box = document.createElement('div');
      box.appendChild(el('h4', null, item.title));
      box.appendChild(el('p', null, item.text));
      li.appendChild(box);
      return li;
    });
    if (valuesList) valuesList.classList.add('reveal');

    observeReveal();
  }

  function renderPrices(lang) {
    const dict = TRANSLATIONS[lang];
    const tabsWrap = document.querySelector('[data-render="price-tabs"]');
    if (tabsWrap) {
      clearAndRender(tabsWrap, dict.pricesPage.tabs, function (label, i) {
        const btn = document.createElement('button');
        btn.className = 'prices-tab' + (i === 0 ? ' active' : '');
        btn.type = 'button';
        btn.textContent = label;
        btn.addEventListener('click', function () {
          tabsWrap.querySelectorAll('.prices-tab').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          highlightColumn(i);
        });
        return btn;
      });
    }

    const thead = document.querySelector('[data-render="price-head"]');
    if (thead) {
      thead.innerHTML = '';
      dict.pricesPage.tableHead.forEach(function (label) {
        thead.appendChild(el('th', null, label));
      });
    }

    const tbody = document.querySelector('[data-render="price-rows"]');
    clearAndRender(tbody, dict.pricesPage.rows, function (row) {
      const tr = document.createElement('tr');
      row.forEach(function (cell, i) {
        const td = el('td', i === 0 ? '' : 'muted', cell);
        tr.appendChild(td);
      });
      return tr;
    });

    const cardsGrid = document.querySelector('[data-render="price-cards"]');
    clearAndRender(cardsGrid, dict.pricesPage.cards, function (item) {
      const card = el('div', 'price-card reveal' + (item.featured ? ' featured' : ''));
      card.appendChild(el('h3', null, item.title));
      card.appendChild(el('div', 'price-tag', item.price + ' <small>' + item.priceNote + '</small>'));
      const ul = document.createElement('ul');
      item.features.forEach(function (f) {
        const li = document.createElement('li');
        li.innerHTML = svgCheck() + '<span>' + f + '</span>';
        ul.appendChild(li);
      });
      card.appendChild(ul);
      return card;
    });

    observeReveal();
  }

  function highlightColumn(index) {
    document.querySelectorAll('.price-table thead th').forEach(function (th, i) {
      th.style.color = (i === index + 1) ? 'var(--color-white)' : '';
    });
  }

  function renderAll(lang) {
    applyStaticTranslations(lang);
    renderHome(lang);
    renderServices(lang);
    renderCars(lang);
    renderAbout(lang);
    renderPrices(lang);
  }

  function setLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    renderAll(lang);
  }

  function observeReveal() {
    const items = document.querySelectorAll('.reveal:not(.in-view)');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (item) { item.classList.add('in-view'); });
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (item) { observer.observe(item); });
  }

  function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const panel = document.querySelector('.mobile-panel');
    if (toggle && panel) {
      toggle.addEventListener('click', function () {
        const isOpen = panel.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
      });
      panel.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          panel.classList.remove('open');
          toggle.classList.remove('open');
        });
      });
    }
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        const targetId = link.getAttribute('href');
        if (targetId.length > 1) {
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  function initLangButtons() {
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  function initForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const lang = currentLang();
      const dict = TRANSLATIONS[lang];
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const route = (data.get('route') || '').toString().trim();
      const datetime = (data.get('datetime') || '').toString().trim();
      const comment = (data.get('comment') || '').toString().trim();

      const message = dict.common.whatsappTemplate
        .replace('{name}', name || '—')
        .replace('{phone}', phone || '—')
        .replace('{route}', route || '—')
        .replace('{datetime}', datetime || '—')
        .replace('{comment}', comment || '—');

      const url = 'https://api.whatsapp.com/send/?phone=%2B' + WHATSAPP_PHONE + '&text=' + encodeURIComponent(message) + '&type=phone_number&app_absent=0&utm_source=ig';
      window.open(url, '_blank', 'noopener');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initSmoothScroll();
    initLangButtons();
    initForm();
    setLanguage(currentLang());
  });
})();
