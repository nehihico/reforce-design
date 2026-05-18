# Карта экранов — Reforce Маркет

> Источник: PRD v1.0, скриншоты shop.reforce.group (май 2026)  
> Платформа: Web (Chrome, Safari, Firefox), адаптив mobile-first

---

## Структура страниц

```mermaid
graph TD
  HOME[/ — Главная] --> QUIZ[/quiz — Квиз подбора]
  HOME --> CATALOG[/catalog — Каталог]
  HOME --> HOW[/how-it-works — Как это работает]
  HOME --> ABOUT[/about — О нас]
  HOME --> PARTNERS[/partners — Партнёрам]

  %% Квиз
  QUIZ --> QUIZ_STEP1[Шаг 1: Тип объекта]
  QUIZ_STEP1 --> QUIZ_STEP2[Шаг 2: Уточнение потребностей]
  QUIZ_STEP2 --> QUIZ_RESULT[Результат: подходящие комплекты]
  QUIZ_RESULT --> PRODUCT[/p/slug — Карточка товара]
  QUIZ_RESULT --> ORDER[/order — Форма заявки]

  %% Каталог
  CATALOG --> CAT_FLAT[Квартира]
  CATALOG --> CAT_HOUSE[Частный дом]
  CATALOG --> CAT_BIZ[Бизнес]
  CATALOG --> CAT_GARAGE[Гараж и дача]
  CAT_FLAT & CAT_HOUSE & CAT_BIZ & CAT_GARAGE --> PRODUCT

  %% Карточка товара (landing-style)
  PRODUCT --> PRODUCT_COMPARE[Сравнение комплектов]
  PRODUCT --> PRODUCT_FAQ[FAQ]
  PRODUCT --> PRODUCT_REVIEWS[Отзывы]
  PRODUCT --> ORDER
  PRODUCT --> CALLBACK[Модал: Обратный звонок]

  %% Форма заявки
  ORDER --> ORDER_AUTH{Авторизован?}
  ORDER_AUTH -->|Нет| ORDER_LOGIN[Авторизация OIDC]
  ORDER_LOGIN --> ORDER_FORM
  ORDER_AUTH -->|Да| ORDER_FORM

  ORDER_FORM[Шаги анкеты] --> ORDER_STEP1[Адрес объекта]
  ORDER_STEP1 --> ORDER_STEP2[Форма собственности]
  ORDER_STEP2 --> ORDER_STEP3[Контактные данные]
  ORDER_STEP3 --> ORDER_STEP4[Ответственные лица]
  ORDER_STEP4 --> ORDER_STEP5[Документы]
  ORDER_STEP5 --> ORDER_STEP6[Согласие и способ]
  ORDER_STEP6 --> ORDER_SELF[Оплата онлайн]
  ORDER_STEP6 --> ORDER_MANAGER[Менеджер перезвонит]
  ORDER_SELF & ORDER_MANAGER --> ORDER_SUCCESS[Заявка создана]

  %% Личный кабинет (заявки)
  ORDER_SUCCESS --> ORDERS[/orders — Мои заявки]
  ORDERS --> ORDER_DETAIL[/orders/id — Карточка заявки]
  ORDER_DETAIL --> ORDER_EDIT[Редактирование анкеты]
  ORDER_DETAIL --> ORDER_CANCEL[Отмена заявки]
```

---

## Навигация

### Хедер (все страницы)
- Логотип → `/`
- Выбор города
- «Подобрать комплект» → `/quiz`
- «Как это работает» → `/how-it-works`
- «О нас» → `/about`
- Телефон + «Заказать звонок»
- Иконка профиля → авторизация / личный кабинет

### Футер
- Ссылки: Для меня / Для бизнеса / Партнёрам / Карьера
- Контакты, реквизиты
- App Store + Google Play (QR + badges)

---

## Приоритет страниц

| Приоритет | Страница | Обоснование |
|---|---|---|
| P0 | `/` — Главная | Точка входа, конверсия в квиз |
| P0 | `/quiz` — Квиз | Основной путь подбора |
| P0 | `/p/slug` — Карточка товара | Последний шаг перед заявкой |
| P0 | `/order` — Форма заявки | Конверсионный финал |
| P1 | `/orders` — Мои заявки | Пост-конверсионный опыт |
| P1 | `/catalog` — Каталог | Альтернативный путь подбора |
| P2 | `/how-it-works` | Информационная |
| P2 | `/about` | Доверие |
| P2 | `/partners` | Отдельная аудитория |
