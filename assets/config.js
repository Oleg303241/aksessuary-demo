// Настройки этого магазина: название, тексты, доставка и стартовый каталог.
// Остальной код (витрина, корзина, панель продавца) общий для всех магазинов.
var SITE = {
  key: 'zaryad-demo',
  titleSuffix: 'аксессуары для телефонов',
  giftWrap: false,
  commentHint: 'Например: модель телефона — Samsung Galaxy S24',
  logo: '<svg viewBox="0 0 32 32" width="34" height="34" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#2d5bff"/><path d="M17.5 5 9 18h6l-1.5 9L23 14h-6z" fill="#c8f560"/></svg>',

  defaults: {
    nextOrderNo: 1001,
    settings: {
      shopName: 'Заряд',
      tagline: 'Чехлы, стёкла и зарядки для вашего телефона',
      lead: 'Курьер по городу на следующий день, самовывоз из ТЦ или отправка по России. Не уверены в модели — напишите её в комментарии, проверим совместимость.',
      phone: '+7 (900) 000-00-00',
      email: 'zakaz@example.ru',
      freeDeliveryFrom: 3000,
      minOrder: 0,
      giftWrapPrice: 0,
      giftWrapNote: '',
      adminPassword: '1234',
      delivery: {
        courier: { on: true, price: 300, note: 'На следующий день, с 10:00 до 21:00' },
        pickup: { on: true, price: 0, note: 'ТЦ «Пример», ул. Примерная, 1, 1 этаж. Ежедневно 10:00–21:00' },
        russia: { on: true, price: 350, note: 'СДЭК или Почта России, 2–7 дней' }
      }
    },
    products: [
      { id: 'a1', name: 'Чехол силиконовый Soft Touch', note: 'Для Samsung Galaxy S24, шалфейный, мягкая подкладка', category: 'Чехлы', price: 1290, oldPrice: 1590, unit: 'шт', img: 'img/a1.jpg', inStock: true },
      { id: 'a2', name: 'Чехол прозрачный противоударный', note: 'Для iPhone 16, усиленные углы, не желтеет', category: 'Чехлы', price: 790, oldPrice: 0, unit: 'шт', img: 'img/a2.jpg', inStock: true },
      { id: 'a3', name: 'Чехол-книжка из экокожи', note: 'Для Xiaomi Redmi Note 13, отделение для карт', category: 'Чехлы', price: 1190, oldPrice: 0, unit: 'шт', img: 'img/a3.jpg', inStock: true },
      { id: 'a4', name: 'Защитное стекло 9H', note: 'Для iPhone 16, рамка для поклейки в комплекте', category: 'Защита экрана', price: 590, oldPrice: 0, unit: 'шт', img: 'img/a4.jpg', inStock: true },
      { id: 'a5', name: 'Защитное стекло 9H, полный клей', note: 'Для Samsung Galaxy A55, чёрная рамка', category: 'Защита экрана', price: 490, oldPrice: 0, unit: 'шт', img: 'img/a5.jpg', inStock: true },
      { id: 'a6', name: 'Зарядное устройство USB-C, 20 Вт', note: 'Быстрая зарядка Power Delivery', category: 'Зарядки и кабели', price: 1490, oldPrice: 1890, unit: 'шт', img: 'img/a6.jpg', inStock: true },
      { id: 'a7', name: 'Кабель USB — USB-C, 1 м', note: 'Нейлоновая оплётка, ток до 3 А', category: 'Зарядки и кабели', price: 490, oldPrice: 0, unit: 'шт', img: 'img/a7.jpg', inStock: true },
      { id: 'a8', name: 'Кабель USB — Lightning, 1 м', note: 'Для iPhone до 14-й модели', category: 'Зарядки и кабели', price: 590, oldPrice: 0, unit: 'шт', img: 'img/a8.jpg', inStock: true },
      { id: 'a9', name: 'Беспроводные наушники TWS', note: 'До 6 часов работы, кейс с зарядкой', category: 'Наушники', price: 2490, oldPrice: 3290, unit: 'шт', img: 'img/a9.jpg', inStock: true },
      { id: 'a10', name: 'Пауэрбанк 10 000 мА·ч', note: 'Тонкий, вход и выход USB-C', category: 'Зарядки и кабели', price: 1990, oldPrice: 0, unit: 'шт', img: 'img/a10.jpg', inStock: true },
      { id: 'a11', name: 'Магнитный держатель в авто', note: 'Крепление на воздуховод, поворот 360°', category: 'Держатели', price: 890, oldPrice: 0, unit: 'шт', img: 'img/a11.jpg', inStock: true },
      { id: 'a12', name: 'Беспроводная зарядка 15 Вт', note: 'Магнитная, для телефонов с поддержкой Qi', category: 'Зарядки и кабели', price: 1690, oldPrice: 0, unit: 'шт', img: 'img/a12.jpg', inStock: false }
    ],
    orders: []
  }
};
