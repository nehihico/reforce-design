# DS: Навигация — Reforce × Preline UI

---

## Таббар (Bottom Navigation) — мобайл ЛК

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

## Хедер страницы (мобайл)

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

## Сегментированный контрол (Tabs)

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

## Хлебные крошки (веб)

```html
<nav class="flex items-center gap-2 text-[13px] text-[#636366]">
  <a href="#" class="hover:text-[#1C1C1E] transition-colors">Главная</a>
  <svg class="size-3 text-[#C7C7CC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
  <a href="#" class="hover:text-[#1C1C1E] transition-colors">Объекты</a>
  <svg class="size-3 text-[#C7C7CC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
  <span class="text-[#1C1C1E] font-medium">Квартира</span>
</nav>
```

## Пагинация (веб)

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

## Степпер (форма заявки, маркет)

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
