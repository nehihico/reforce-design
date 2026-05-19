# DS: Навигация — Reforce × Preline UI

> **[MOB]** = мобайл (reforce-lk) · **[WEB]** = веб 1440px · **[DSK]** = десктоп 1920px

---

## [MOB] Таббар (Bottom Navigation) — мобайл ЛК

```html
<div class="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F2F2F7] px-2 pb-[env(safe-area-inset-bottom)]">
  <div class="flex items-center justify-around h-[49px]">

    <!-- Таб активный -->
    <button class="flex flex-col items-center justify-center gap-0.5 flex-1 min-h-[44px] text-[#D42B2B]">
      <svg class="size-[25px]" viewBox="0 0 24 24" fill="currentColor"><!-- иконка --></svg>
      <span class="text-[10px] font-medium">Главная</span>
    </button>

    <!-- Таб неактивный -->
    <button class="flex flex-col items-center justify-center gap-0.5 flex-1 min-h-[44px] text-[#8E8E93]">
      <svg class="size-[25px]" viewBox="0 0 24 24" fill="currentColor"><!-- иконка --></svg>
      <span class="text-[10px] font-medium">Объекты</span>
    </button>

  </div>
</div>
```

## [MOB] Хедер страницы

```html
<div class="flex items-center justify-between px-4 h-[44px] bg-white border-b border-[#F2F2F7]">
  <!-- Назад -->
  <button class="inline-flex items-center gap-1 min-w-[44px] min-h-[44px] text-[#D42B2B] text-[17px]">
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
      <path d="M8 2L2 8L8 14" stroke="#D42B2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Назад
  </button>
  <!-- Заголовок -->
  <h1 class="text-[17px] font-semibold text-[#1C1C1E] absolute left-1/2 -translate-x-1/2">Название</h1>
  <!-- Действие справа -->
  <button class="min-w-[44px] min-h-[44px] flex items-center justify-end text-[#D42B2B] text-[17px]">
    Готово
  </button>
</div>
```

## [MOB] / [WEB] Сегментированный контрол (Tabs)

```html
<div class="flex bg-[#F2F2F7] rounded-xl p-1 gap-1">
  <!-- Активная вкладка -->
  <button class="flex-1 h-[32px] rounded-lg bg-white text-[13px] font-semibold text-[#1C1C1E] shadow-sm transition-all">
    Все
  </button>
  <!-- Неактивная вкладка -->
  <button class="flex-1 h-[32px] rounded-lg text-[13px] font-medium text-[#636366] hover:text-[#1C1C1E] transition-all">
    Активные
  </button>
  <button class="flex-1 h-[32px] rounded-lg text-[13px] font-medium text-[#636366] hover:text-[#1C1C1E] transition-all">
    Завершённые
  </button>
</div>
```

## [WEB] / [DSK] Топбар (Top Navigation)

```html
<!-- Топбар 64px — веб/десктоп -->
<header class="fixed top-0 left-0 right-0 z-20 h-[64px] bg-white border-b border-[#F2F2F7] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
  <div class="max-w-[1280px] mx-auto px-5 h-full flex items-center justify-between">

    <!-- Лого -->
    <a href="/" class="flex items-center shrink-0">
      <img src="/Logo.png" alt="Reforce" width="140" height="25" />
    </a>

    <!-- Навигация (центр) -->
    <nav class="hidden lg:flex items-center gap-1">
      <!-- Активная ссылка -->
      <a href="#" class="h-[36px] px-4 flex items-center rounded-lg text-[14px] font-semibold text-[#D42B2B] bg-[#FFF5F5] transition-colors">
        Главная
      </a>
      <!-- Обычная ссылка -->
      <a href="#" class="h-[36px] px-4 flex items-center rounded-lg text-[14px] font-medium text-[#636366] hover:text-[#1C1C1E] hover:bg-[#F2F2F7] transition-colors">
        Объекты
      </a>
      <a href="#" class="h-[36px] px-4 flex items-center rounded-lg text-[14px] font-medium text-[#636366] hover:text-[#1C1C1E] hover:bg-[#F2F2F7] transition-colors">
        Маркет
      </a>
      <a href="#" class="h-[36px] px-4 flex items-center rounded-lg text-[14px] font-medium text-[#636366] hover:text-[#1C1C1E] hover:bg-[#F2F2F7] transition-colors">
        Поддержка
      </a>
    </nav>

    <!-- Правая часть: действия -->
    <div class="flex items-center gap-2">
      <!-- Уведомления -->
      <button class="relative size-[40px] flex items-center justify-center rounded-xl text-[#636366] hover:bg-[#F2F2F7] transition-colors">
        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
        </svg>
        <!-- Бейдж -->
        <span class="absolute top-2 right-2 size-2 rounded-full bg-[#FF3B30]"></span>
      </button>
      <!-- Аватар / профиль -->
      <button class="size-[40px] rounded-full bg-[#D42B2B] flex items-center justify-center text-white text-[14px] font-semibold hover:bg-[#BC2525] transition-colors">
        АИ
      </button>
    </div>

  </div>
</header>

<!-- Отступ под фиксированный топбар -->
<div class="pt-[64px]"><!-- контент страницы --></div>
```

---

## [DSK] Sidebar (боковая навигация — панель управления)

```html
<!-- Обёртка: sidebar + контент -->
<div class="flex min-h-screen">

  <!-- Sidebar 240px (WEB) / 280px (DSK) -->
  <aside class="fixed top-0 left-0 h-full w-[240px] xl:w-[280px] bg-white border-r border-[#F2F2F7] flex flex-col z-20">

    <!-- Лого -->
    <div class="h-[64px] flex items-center px-6 border-b border-[#F2F2F7] shrink-0">
      <img src="/Logo.png" alt="Reforce" width="130" height="23" />
    </div>

    <!-- Навигация -->
    <nav class="flex-1 overflow-y-auto py-4 px-3">

      <!-- Группа -->
      <p class="px-3 mb-2 text-[11px] font-semibold text-[#C7C7CC] uppercase tracking-wider">Управление</p>

      <!-- Активный пункт -->
      <a href="#" class="flex items-center gap-3 h-[40px] px-3 rounded-xl bg-[#FFF5F5] text-[#D42B2B] text-[14px] font-semibold mb-1">
        <svg class="size-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        Главная
      </a>

      <!-- Обычный пункт -->
      <a href="#" class="flex items-center gap-3 h-[40px] px-3 rounded-xl text-[#636366] text-[14px] font-medium hover:bg-[#F2F2F7] hover:text-[#1C1C1E] transition-colors mb-1">
        <svg class="size-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        </svg>
        Объекты
      </a>

      <!-- Пункт с бейджем -->
      <a href="#" class="flex items-center gap-3 h-[40px] px-3 rounded-xl text-[#636366] text-[14px] font-medium hover:bg-[#F2F2F7] hover:text-[#1C1C1E] transition-colors mb-1">
        <svg class="size-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        </svg>
        <span class="flex-1">Уведомления</span>
        <span class="text-[11px] font-semibold bg-[#FF3B30] text-white rounded-full px-1.5 py-0.5">3</span>
      </a>

      <div class="my-3 border-t border-[#F2F2F7]"></div>

      <p class="px-3 mb-2 text-[11px] font-semibold text-[#C7C7CC] uppercase tracking-wider">Аккаунт</p>

      <a href="#" class="flex items-center gap-3 h-[40px] px-3 rounded-xl text-[#636366] text-[14px] font-medium hover:bg-[#F2F2F7] hover:text-[#1C1C1E] transition-colors">
        <svg class="size-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
        Профиль
      </a>
    </nav>

    <!-- Нижняя часть сайдбара -->
    <div class="p-3 border-t border-[#F2F2F7] shrink-0">
      <div class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F2F2F7] cursor-pointer transition-colors">
        <div class="size-8 rounded-full bg-[#D42B2B] flex items-center justify-center text-white text-[12px] font-semibold shrink-0">АИ</div>
        <div class="flex-1 min-w-0">
          <p class="text-[13px] font-medium text-[#1C1C1E] truncate">Анна Иванова</p>
          <p class="text-[11px] text-[#8E8E93] truncate">anna@mail.com</p>
        </div>
      </div>
    </div>
  </aside>

  <!-- Основной контент -->
  <main class="flex-1 ml-[240px] xl:ml-[280px] min-h-screen bg-[#F9F9FB]">
    <!-- Внутренний топбар рабочей области -->
    <div class="sticky top-0 z-10 h-[64px] bg-white border-b border-[#F2F2F7] flex items-center justify-between px-6">
      <h1 class="text-[17px] font-semibold text-[#1C1C1E]">Главная</h1>
      <button class="min-h-[40px] px-4 rounded-xl bg-[#D42B2B] text-white text-[14px] font-semibold hover:bg-[#BC2525] transition-colors">
        + Добавить объект
      </button>
    </div>
    <!-- Контент страницы -->
    <div class="p-6"><!-- контент --></div>
  </main>
</div>
```

---

## [WEB] / [DSK] Хлебные крошки

```html
<nav class="flex items-center gap-2 text-[13px] text-[#636366]">
  <a href="#" class="hover:text-[#1C1C1E] transition-colors">Главная</a>
  <svg class="size-3 text-[#C7C7CC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
  <a href="#" class="hover:text-[#1C1C1E] transition-colors">Объекты</a>
  <svg class="size-3 text-[#C7C7CC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
  <span class="text-[#1C1C1E] font-medium">Квартира</span>
</nav>
```

## [WEB] / [DSK] Пагинация

```html
<div class="flex items-center gap-1">
  <button class="size-[40px] flex items-center justify-center rounded-xl text-[#636366] hover:bg-[#F2F2F7] disabled:opacity-40">
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
  </button>
  <button class="size-[40px] flex items-center justify-center rounded-xl bg-[#D42B2B] text-white text-[14px] font-semibold">1</button>
  <button class="size-[40px] flex items-center justify-center rounded-xl text-[#636366] hover:bg-[#F2F2F7] text-[14px]">2</button>
  <button class="size-[40px] flex items-center justify-center rounded-xl text-[#636366] hover:bg-[#F2F2F7] text-[14px]">3</button>
  <button class="size-[40px] flex items-center justify-center rounded-xl text-[#636366] hover:bg-[#F2F2F7]">
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
  </button>
</div>
```

## [WEB] / [DSK] Степпер (форма заявки, маркет)

```html
<div class="flex items-center gap-0">
  <!-- Шаг выполнен -->
  <div class="flex items-center gap-2">
    <div class="size-7 rounded-full bg-[#D42B2B] flex items-center justify-center shrink-0">
      <svg class="size-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  </div>
  <div class="h-px w-8 bg-[#D42B2B]"></div>

  <!-- Шаг активный -->
  <div class="flex items-center gap-2">
    <div class="size-7 rounded-full bg-[#D42B2B] ring-4 ring-[#FFF0EF] flex items-center justify-center shrink-0">
      <span class="text-[12px] font-semibold text-white">2</span>
    </div>
  </div>
  <div class="h-px w-8 bg-[#C7C7CC]"></div>

  <!-- Шаг будущий -->
  <div class="flex items-center gap-2">
    <div class="size-7 rounded-full bg-[#F2F2F7] flex items-center justify-center shrink-0">
      <span class="text-[12px] font-medium text-[#C7C7CC]">3</span>
    </div>
  </div>
</div>
```
