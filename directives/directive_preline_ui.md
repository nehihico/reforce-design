# Directive: Preline UI — справочник компонентов

> Источник: preline.co/docs · v4.2.0  
> Используется во всех HTML-прототипах Reforce

---

## Подключение (CDN — только для прототипов)

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/preline/dist/preline.js"></script>
```

Preline требует `@tailwindcss/forms` для чекбоксов, инпутов и радио-кнопок.  
В CDN-режиме формы работают через кастомные классы (см. ниже).

---

## Цветовые токены Preline (семантика)

| Токен | Роль |
|---|---|
| `bg-card` | Фон карточки |
| `bg-layer` | Фон инпута |
| `bg-surface`, `bg-surface-1` | Вторичная поверхность |
| `bg-muted` | Приглушённый фон |
| `bg-primary` | Основной акцент |
| `text-foreground` | Основной текст |
| `text-muted-foreground-1` | Вторичный текст |
| `border-card-line` | Граница карточки |
| `border-layer-line` | Граница инпута |
| `border-line-3` | Граница чекбокса |

**В прототипах Reforce** заменяем на наши токены:  
`bg-primary` → `bg-brand-primary` (#D42B2B), `text-foreground` → `text-neutral-900` и т.д.

---

## Кнопки

```html
<!-- Основная (solid) -->
<button class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary-hover disabled:opacity-50 disabled:pointer-events-none">
  Кнопка
</button>

<!-- Outline -->
<button class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-layer-line text-foreground hover:bg-surface disabled:opacity-50">
  Кнопка
</button>

<!-- Ghost -->
<button class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg text-foreground hover:bg-surface">
  Кнопка
</button>

<!-- С загрузкой -->
<button class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary text-white" disabled>
  <span class="animate-spin inline-block size-4 border-3 border-current border-t-transparent rounded-full"></span>
  Загрузка...
</button>
```

**Размеры:** Small `py-2 px-3` / Default `py-3 px-4` / Large `p-4 sm:p-5`  
**Формы:** `rounded-lg` обычная / `rounded-full` pill  
**Full-width:** добавить `w-full justify-center`

---

## Инпуты

```html
<!-- Базовый -->
<input type="text" class="py-2.5 px-4 block w-full rounded-lg border border-layer-line bg-layer text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus text-sm disabled:opacity-50">

<!-- С иконкой слева -->
<div class="relative">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    <!-- иконка -->
  </div>
  <input class="py-2.5 ps-10 px-4 block w-full rounded-lg border ...">
</div>

<!-- Floating label -->
<div class="relative">
  <input type="email" id="email" placeholder=" "
    class="peer p-4 block w-full rounded-lg border bg-layer text-sm text-foreground placeholder:text-transparent focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2">
  <label for="email" class="absolute top-0 start-0 p-4 text-sm text-muted-foreground-1 peer-focus:scale-90 peer-focus:-translate-y-1.5 peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:-translate-y-1.5 transition-all">
    Email
  </label>
</div>
```

**Состояния:**
- Ошибка: `border-red-500 focus:border-red-500 focus:ring-red-500`
- Успех: `border-teal-500 focus:border-teal-500 focus:ring-teal-500`
- Disabled: `disabled:opacity-50 disabled:pointer-events-none`

**Вспомогательный текст:** `<p class="mt-2 text-sm text-muted-foreground-1">Текст</p>`

---

## Чекбоксы

```html
<div class="flex items-start gap-x-3">
  <input type="checkbox" id="cb1"
    class="shrink-0 size-4 mt-0.5 bg-transparent border-line-3 rounded-sm text-primary focus:ring-0 focus:ring-offset-0 checked:bg-primary checked:border-primary disabled:opacity-50">
  <label for="cb1" class="text-sm text-foreground">
    Текст согласия
  </label>
</div>
```

**Состояния:** checked / unchecked / indeterminate / disabled  
**Валидация:** `border-red-500 checked:bg-red-500` для ошибки

---

## Карточки

```html
<!-- Базовая карточка -->
<div class="flex flex-col bg-card border border-card-line shadow-2xs rounded-xl p-4 md:p-5">
  <h3 class="text-lg font-semibold text-foreground">Заголовок</h3>
  <p class="mt-1 text-sm text-muted-foreground-1">Описание</p>
</div>

<!-- С хедером и футером -->
<div class="flex flex-col bg-card border border-card-line shadow-2xs rounded-xl">
  <div class="px-4 py-3 border-b border-card-line">Заголовок</div>
  <div class="p-4">Контент</div>
  <div class="px-4 py-3 border-t border-card-line bg-muted rounded-b-xl">Футер</div>
</div>

<!-- Горизонтальная (изображение слева) -->
<div class="flex flex-col sm:flex-row bg-card border border-card-line shadow-2xs rounded-xl overflow-hidden">
  <img class="w-full sm:w-48 h-48 object-cover" src="..." />
  <div class="p-4">Контент</div>
</div>
```

---

## Модальное окно

```html
<!-- Триггер -->
<button data-hs-overlay="#modal-id">Открыть</button>

<!-- Модал -->
<div id="modal-id" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto">
  <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
    <div class="flex flex-col w-full bg-card border border-card-line shadow-2xs rounded-xl">
      <!-- Header -->
      <div class="flex justify-between items-center py-3 px-4 border-b border-card-line">
        <h3 class="text-lg font-semibold text-foreground">Заголовок</h3>
        <button data-hs-overlay="#modal-id" class="size-8 inline-flex items-center justify-center rounded-lg text-muted-foreground-1 hover:bg-surface">
          <svg class="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <!-- Body -->
      <div class="p-4">Контент</div>
      <!-- Footer -->
      <div class="flex justify-end gap-x-2 py-3 px-4 border-t border-card-line">
        <button data-hs-overlay="#modal-id" class="py-2 px-3 text-sm rounded-lg border border-layer-line">Отмена</button>
        <button class="py-2 px-3 text-sm rounded-lg bg-primary text-white">Сохранить</button>
      </div>
    </div>
  </div>
</div>
```

**Варианты анимации:** scale (по умолчанию) / slide-down / slide-up  
**Размеры:** `sm:max-w-sm` / `sm:max-w-lg` / `sm:max-w-2xl`  
**Статичный backdrop:** добавить `data-hs-overlay-options='{"isClosePrevented": true}'`

---

## Прогресс-бар загрузки файла

```html
<!-- Прогресс -->
<div class="flex items-center gap-x-3">
  <div class="flex w-full h-2 bg-surface-1 rounded-full overflow-hidden"
       role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="flex flex-col justify-center rounded-full bg-primary transition duration-500" style="width: 25%"></div>
  </div>
  <span class="text-sm text-foreground w-10 text-end">25%</span>
</div>
```

**Состояния цвета:** В процессе `bg-primary` / Успех `bg-teal-500` / Ошибка `bg-red-500`

---

## Утилиты Preline (data-атрибуты)

| Атрибут | Компонент | Описание |
|---|---|---|
| `data-hs-overlay="#id"` | Modal, Drawer | Открыть/закрыть оверлей |
| `data-hs-tab="#id"` | Tabs | Переключить вкладку |
| `data-hs-accordion` | Accordion | Аккордеон |
| `data-hs-dropdown` | Dropdown | Выпадающее меню |
| `data-hs-tooltip` | Tooltip | Подсказка |
| `data-hs-collapse` | Collapse | Свернуть/развернуть |

**Инициализация:** `HSOverlay.open('#modal-id')` / `HSOverlay.close('#modal-id')`

---

## Адаптация для Reforce

При использовании Preline-компонентов в прототипах:

1. Заменить `bg-primary` → `bg-brand-primary` (`#D42B2B`)
2. Заменить `text-foreground` → `text-neutral-900`
3. Заменить `bg-card` → `bg-white`
4. Заменить `border-card-line` → `border-neutral-100`
5. Заменить `text-muted-foreground-1` → `text-neutral-600`
6. Все `rounded-lg` → `rounded-2xl` (более мягкие углы в стиле iOS)
7. Минимальная высота кнопок и инпутов: `min-h-[44px]` (tap zones)
