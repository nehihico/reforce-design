# Directive: HTML-прототипы

## Стек

- **TailwindCSS CDN** — утилитарные классы
- **Preline UI CDN** — компоненты (модалы, аккордеоны, дропдауны)
- **Никаких сборщиков** — один .html файл, открывается в браузере

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/preline/dist/preline.js"></script>
```

## Токены бренда (tailwind.config)

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand:   { primary: '#D42B2B', dark: '#1A1A2E' },
        neutral: { 900: '#1C1C1E', 600: '#636366', 300: '#C7C7CC', 100: '#F2F2F7', 50: '#F9F9FB' },
        status:  { armed: '#34C759', disarmed: '#8E8E93', alarm: '#FF3B30', warning: '#FF9500', gbr: '#007AFF' }
      },
      fontFamily: { sans: ['-apple-system','BlinkMacSystemFont','SF Pro Text','Segoe UI','sans-serif'] }
    }
  }
}
```

## Логотип (использовать везде)

```html
<svg width="188" height="44" viewBox="0 0 188 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <polygon points="10,0 48,0 38,10 0,10" fill="#D42B2B"/>
  <polygon points="10,14 48,14 38,24 0,24" fill="#D42B2B"/>
  <polygon points="10,28 48,28 38,38 0,38" fill="#D42B2B"/>
  <text x="60" y="30" font-size="28" font-weight="900" fill="#1A1A2E" font-family="-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif" letter-spacing="0.5">REFORCE</text>
  <text x="61" y="42" font-size="7.5" font-weight="500" fill="#1A1A2E" font-family="-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif" letter-spacing="2.8">ПЛАТФОРМА БЕЗОПАСНОСТИ</text>
</svg>
```

На тёмном фоне заменить `fill="#1A1A2E"` у текста на `fill="#FFFFFF"`.

## Структура файла

```
projects/{slug}/prototype/{screen}.html
```

Каждый экран = отдельный файл. Переходы между экранами — JS-анимация внутри одного файла.

## Мобильный фрейм (reforce-lk)

```css
.phone-frame { width: 390px; min-height: 844px; border-radius: 44px; }
```

- Статусбар: 44px (иконки заряда, сигнала, wifi)
- Контент: padding 24px по горизонтали
- Навбар снизу: 83px (включая home indicator)

## Веб-фрейм (reforce-market)

- Desktop: max-width 1280px, grid 12 колонок
- Mobile breakpoint: 390px
- Header fixed: 64px

## Обязательные правила

- Tap-зоны ≥ 44px для любого интерактивного элемента
- Кнопка «Поставить/Снять с охраны»: 80×80px
- Тревожная кнопка: 64×64px + защита от случайного нажатия
- Минимальный размер шрифта: 14px
- Статус охраны — тройное кодирование: цвет + иконка + текст

## Интерактивность прототипа

Реализовывать:
- Переходы между экранами (анимация 280ms cubic-bezier)
- Состояния компонентов: default / loading / error / success
- Валидацию форм с сообщениями об ошибках
- Таймеры и счётчики если нужны по флоу

Не реализовывать:
- Реальные API-запросы
- Авторизацию (использовать hardcoded «123456» или демо-данные)
- Хранение данных (localStorage только для UX-демо сохранения прогресса)

## Подсказка для презентации

Всегда добавлять блок с инструкцией по взаимодействию (скрыт на мобайле):
```html
<div class="hidden lg:block ...">
  Прототип: введи 123456 для успешного входа
</div>
```

## Готовые прототипы

| Файл | Экран | Статус |
|---|---|---|
| `reforce-lk/prototype/auth.html` | Авторизация (телефон + SMS) | В работе |
