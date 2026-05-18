# Карта экранов — Reforce

> Источник: Figma (REFORCE, обновлено 2026-05-15) + PRD v3.2  
> Платформы: мобильное приложение (Flutter), веб-ЛК, веб-магазин

---

## Мобильное приложение (Flutter, iOS + Android)

```mermaid
graph TD
  %% Авторизация
  AUTH[Авторизация] --> AUTH1[Ввод телефона]
  AUTH1 --> AUTH2[Ввод SMS-кода]
  AUTH2 --> AUTH3[Повторная отправка кода]
  AUTH2 --> AUTH4{Пользователь существует?}
  AUTH4 -->|Да| MAIN
  AUTH4 -->|Нет| AUTH5[Регистрация]
  AUTH5 --> MAIN
  AUTH2 --> AUTH_MIGRATE[Экран миграции из старого ЛК]
  AUTH_MIGRATE --> MAIN

  %% Главная
  MAIN[Главная — Мои объекты] --> OBJ[Карточка объекта]
  MAIN --> NOTIF[Уведомления]
  MAIN --> FILTER[Фильтр / Сортировка]

  %% Объект
  OBJ --> OBJ_DETAIL[Подробнее об объекте]
  OBJ --> OBJ_ARM[Постановка / Снятие]
  OBJ_ARM --> OBJ_CODE[Ввод кода]
  OBJ_CODE --> OBJ_ARMED[Код — на охране]
  OBJ_CODE --> OBJ_PARTIAL[Код — частичная охрана]
  OBJ_CODE --> OBJ_DISARMED[Код — снят]
  OBJ --> OBJ_SECTIONS[Разделы объекта]
  OBJ --> OBJ_EVENTS[Лента событий]
  OBJ --> OBJ_KTS[Проверка КТС]
  OBJ_KTS --> OBJ_KTS_OK[КТС — успешно]
  OBJ_KTS --> OBJ_KTS_ERR[КТС — ошибка]
  OBJ --> OBJ_GBR[Вызов ГБР / Тревожная кнопка]
  OBJ_GBR --> OBJ_GBR_NO[ГБР не куплена — заглушка]
  OBJ --> OBJ_RELAY_ON[Реле — вкл]
  OBJ --> OBJ_RELAY_OFF[Реле — выкл]
  OBJ --> OBJ_TEMP[Настройка температуры]
  OBJ --> OBJ_ACCU[Аккумулятор — статус]
  OBJ --> OBJ_EDIT[Редактирование объекта]
  OBJ_EDIT --> OBJ_EDIT_NOTIF[Уведомление об изменении]

  %% Права доступа
  OBJ --> OBJ_ACCESS[Права доступа]
  OBJ_ACCESS --> OBJ_ACCESS_INVITE[Приглашение пользователя]
  OBJ_ACCESS_INVITE --> OBJ_ACCESS_ACCEPT[Принятие приглашения]
  OBJ_ACCESS_ACCEPT --> OBJ_ACCESS_OK[Доступ предоставлен]
  OBJ_ACCESS --> OBJ_ACCESS_LK[Доступ к ЛК]
  OBJ_ACCESS --> OBJ_ACCESS_INFO[Общая информация]
  OBJ --> OBJ_NOACCESS[Нет прав — заглушка]

  %% Инцидент
  OBJ_EVENTS --> INC[Событие — детали]
  INC --> INC_GBR[Статус выезда ГБР + ETA]
  INC --> INC_REPORT[Отчёт ГБР с фото]
  INC --> INC_RATE[Оценка выезда]

  %% Платежи
  FIN[Финансы / Платежи] --> FIN_CONTRACTS[Список договоров]
  FIN_CONTRACTS --> FIN_ACTIVE[Договор — активный]
  FIN_CONTRACTS --> FIN_INACTIVE[Договор — неактивный]
  FIN_ACTIVE --> FIN_PAY[Оплата]
  FIN_PAY --> FIN_METHOD[Выбор способа оплаты]
  FIN_METHOD --> FIN_SUCCESS[Оплата — успешно]
  FIN_ACTIVE --> FIN_NEAR[Ближайший платёж]
  FIN_ACTIVE --> FIN_AFTER[Оплата после отключения]
  FIN_ACTIVE --> FIN_BEFORE[Оплата до отключения]

  %% Поддержка
  SUPPORT[Поддержка] --> CHAT[Чат]
  SUPPORT --> TICKETS[Мои обращения]

  %% Профиль
  PROFILE[Профиль] --> PROFILE_ME[Мои данные]
  PROFILE --> PROFILE_DATE[Дата рождения]
  PROFILE --> PROFILE_NOTIF[Настройки уведомлений]

  %% Табнавигация
  TAB1[Главная] & TAB2[Финансы] & TAB3[Поддержка] & TAB4[Профиль]
```

---

## Веб-ЛК (фокус B2B)

```mermaid
graph TD
  WEB_AUTH[Авторизация] --> WEB_AUTH1[Ввод телефона]
  WEB_AUTH1 --> WEB_AUTH2[SMS-код]
  WEB_AUTH2 --> WEB_AUTH_REG[Регистрация]
  WEB_AUTH2 --> WEB_MAIN

  WEB_MAIN[Дашборд — все объекты] --> WEB_OBJ[Объект]
  WEB_OBJ --> WEB_ARM[Постановка / Снятие]
  WEB_OBJ --> WEB_EVENTS[Лента событий]
  WEB_OBJ --> WEB_EDIT[Редактирование объекта]
  WEB_OBJ --> WEB_NOTIF_OBJ[Уведомление об изменении]
  WEB_MAIN --> WEB_BULK[Массовые операции]
  WEB_MAIN --> WEB_MAP[Карта объектов]

  WEB_ACCESS[Права доступа] --> WEB_ROLES[Роли и иерархия]
  WEB_ACCESS --> WEB_IMPORT[Импорт пользователей]

  WEB_FIN[Финансы] --> WEB_CONTRACTS[Договоры — список]
  WEB_CONTRACTS --> WEB_CONTRACT_ACTIVE[Договор — активный]
  WEB_CONTRACTS --> WEB_CONTRACT_INACTIVE[Договор — неактивный]
  WEB_CONTRACT_ACTIVE --> WEB_PAY[Оплата]
  WEB_FIN --> WEB_DOCS[Счета и акты]
  WEB_FIN --> WEB_DEBT[Дебиторская задолженность]

  WEB_SUP[Поддержка] --> WEB_CHAT[Чат]
  WEB_SUP --> WEB_TICKETS[Обращения]
  WEB_TICKETS --> WEB_TICKET_DETAIL[Обращение — детали]

  WEB_PROFILE[Профиль компании] --> WEB_CONTACTS[Контакты]
```

---

## Веб-магазин

```mermaid
graph TD
  SHOP_HOME[Главная магазина] --> SHOP_GEO[Определение геолокации]
  SHOP_GEO --> SHOP_GEO_MAP[Карта — выбор объекта]
  SHOP_HOME --> SHOP_TYPE[Выбор типа услуги]
  SHOP_HOME --> SHOP_COMPARE[Сравнение пакетов]
  SHOP_COMPARE --> SHOP_PKG_FLAT[Квартира]
  SHOP_COMPARE --> SHOP_PKG_HOUSE[Коттедж]
  SHOP_COMPARE --> SHOP_PKG_BIZ[Бизнес]
  SHOP_COMPARE --> SHOP_PKG_GARAGE[Гараж / Дача]

  SHOP_HOME --> SHOP_CAT[Каталог]
  SHOP_CAT --> SHOP_CARD[Карточка товара / услуги]
  SHOP_CARD --> SHOP_SHARE[Поделиться ссылкой]
  SHOP_CARD --> SHOP_CALLBACK[Обратный звонок]
  SHOP_CARD --> SHOP_REPLACE[Замена устройства]
  SHOP_CARD --> SHOP_ORDER[Оформление заявки]

  SHOP_ORDER --> ORDER_AUTH{Авторизован?}
  ORDER_AUTH -->|Нет| ORDER_LOGIN[Авторизация — телефон + код]
  ORDER_LOGIN --> ORDER_FORM
  ORDER_AUTH -->|Да| ORDER_FORM

  ORDER_FORM[Заполнение анкеты] --> ORDER_OBJ{Есть объект?}
  ORDER_OBJ -->|Да| ORDER_OBJ_SELECT[Выбор существующего объекта]
  ORDER_OBJ -->|Нет| ORDER_OBJ_NEW[Данные нового объекта]
  ORDER_OBJ_SELECT --> ORDER_OWNER[Форма собственности]
  ORDER_OBJ_NEW --> ORDER_OWNER
  ORDER_OWNER --> ORDER_CONTACTS[Контактные данные]
  ORDER_CONTACTS --> ORDER_PROMO[Промокод]
  ORDER_PROMO --> ORDER_PERSONS[Ответственные лица]
  ORDER_PERSONS --> ORDER_DOCS[Прикрепление документов]
  ORDER_DOCS --> ORDER_AGREE[Согласие на обработку данных]
  ORDER_AGREE --> ORDER_MANAGER[Заполнить через менеджера]
  ORDER_AGREE --> ORDER_PAY[Оплата заказа]
  ORDER_PAY --> ORDER_SUCCESS[Заявка создана]

  ORDER_SUCCESS --> ORDERS[Раздел Заявки]
  ORDERS --> ORDER_CARD[Карточка заявки — детали]
  ORDER_CARD --> ORDER_EDIT[Редактирование анкеты]
  ORDER_CARD --> ORDER_CANCEL[Отмена заказа]
  ORDER_CARD --> ORDER_DATE[Дата монтажа]
```

---

## Приоритет экранов — Этап 0

| Приоритет | Экран | Flow |
|---|---|---|
| 🔴 1 | Авторизация (телефон → код → вход/регистрация) | AUTH |
| 🔴 2 | Главная — список объектов со статусами | MAIN |
| 🔴 3 | Постановка/снятие (полная + раздельная + ввод кода) | OBJ_ARM |
| 🔴 4 | Проверка КТС (успех / ошибка) | OBJ_KTS |
| 🔴 5 | Push-уведомление об инциденте → статус ГБР | INC |
| 🟠 6 | Права доступа — приглашение и управление | OBJ_ACCESS |
| 🟠 7 | Оплата договора (3 сценария: ближайший / до / после) | FIN_PAY |
| 🟠 8 | Поддержка — чат | SUPPORT |
| 🟡 9 | Магазин — каталог + карточка товара | SHOP_CAT |
| 🟡 10 | Оформление заявки (полный flow) | ORDER_FORM |

---

## Открытые вопросы

- [ ] Тревожная кнопка (ГБР): хардкод в навбаре или только внутри объекта?
- [ ] Реле и температура: на каких тарифах доступны?
- [ ] Магазин и ЛК: единое приложение или отдельные точки входа?
- [ ] Замена устройства: инициируется из магазина или из ЛК?
