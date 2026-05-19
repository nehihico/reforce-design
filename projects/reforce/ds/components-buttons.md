# DS: Кнопки — Reforce × Preline UI

> Готовые HTML-сниппеты с токенами Reforce. Копировать напрямую в прототипы.  
> **[MOB]** = мобайл · **[WEB]** = веб 1440px · **[DSK]** = десктоп 1920px

---

## [MOB] Основная (Primary) — 56px

```html
<button type="button" class="w-full min-h-[56px] py-3 px-4 inline-flex items-center justify-center gap-x-2 text-[17px] font-semibold rounded-2xl bg-[#D42B2B] text-white hover:bg-[#BC2525] active:scale-[.98] active:opacity-90 disabled:bg-[#C7C7CC] disabled:cursor-not-allowed transition-all duration-150">
  Текст кнопки
</button>
```

## Вторичная (Outline)

```html
<button type="button" class="w-full min-h-[56px] py-3 px-4 inline-flex items-center justify-center gap-x-2 text-[17px] font-medium rounded-2xl border-[1.5px] border-[#C7C7CC] text-[#1C1C1E] bg-white hover:bg-[#F2F2F7] active:scale-[.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150">
  Текст кнопки
</button>
```

## Ghost (ссылка-кнопка)

```html
<button type="button" class="min-h-[44px] py-2 px-4 inline-flex items-center justify-center gap-x-2 text-[15px] font-medium rounded-xl text-[#D42B2B] hover:bg-[#FFF5F5] active:opacity-70 disabled:opacity-40 transition-all duration-150">
  Текст кнопки
</button>
```

## Деструктивная (Destructive)

```html
<button type="button" class="w-full min-h-[56px] py-3 px-4 inline-flex items-center justify-center gap-x-2 text-[17px] font-semibold rounded-2xl bg-[#FF3B30] text-white hover:bg-[#E0342A] active:scale-[.98] disabled:opacity-50 transition-all duration-150">
  Расторгнуть договор
</button>
```

## С иконкой

```html
<button type="button" class="w-full min-h-[56px] py-3 px-4 inline-flex items-center justify-center gap-x-2 text-[17px] font-semibold rounded-2xl bg-[#D42B2B] text-white hover:bg-[#BC2525] transition-all duration-150">
  <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- путь иконки -->
  </svg>
  Текст кнопки
</button>
```

## Загрузка (Loading state)

```html
<button type="button" class="w-full min-h-[56px] py-3 px-4 inline-flex items-center justify-center gap-x-2 text-[17px] font-semibold rounded-2xl bg-[#D42B2B] text-white opacity-80 cursor-wait" disabled>
  <span class="animate-spin inline-block size-5 border-[2.5px] border-white border-t-transparent rounded-full"></span>
  Отправляем...
</button>
```

## Иконка-кнопка (Icon only)

```html
<!-- 44×44 — минимум tap zone -->
<button type="button" class="size-[44px] inline-flex items-center justify-center rounded-xl text-[#636366] hover:bg-[#F2F2F7] active:opacity-70 transition-all">
  <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <!-- иконка -->
  </svg>
</button>
```

## Кнопка «Назад» (навигация)

```html
<button type="button" class="inline-flex items-center gap-x-1.5 min-h-[44px] px-0 text-[17px] text-[#D42B2B] hover:opacity-70 transition-opacity">
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
    <path d="M8 2L2 8L8 14" stroke="#D42B2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  Назад
</button>
```

---

## [WEB] / [DSK] Основная (Primary) — 48px

```html
<!-- Веб/Десктоп: меньше высота, компактнее шрифт, меньше скругление -->
<button type="button" class="min-h-[48px] py-2.5 px-6 inline-flex items-center justify-center gap-x-2 text-[15px] font-semibold rounded-xl bg-[#D42B2B] text-white hover:bg-[#BC2525] active:scale-[.98] disabled:bg-[#C7C7CC] disabled:cursor-not-allowed transition-all duration-150">
  Текст кнопки
</button>
```

## [WEB] / [DSK] Вторичная (Outline) — 48px

```html
<button type="button" class="min-h-[48px] py-2.5 px-6 inline-flex items-center justify-center gap-x-2 text-[15px] font-medium rounded-xl border-[1.5px] border-[#C7C7CC] text-[#1C1C1E] bg-white hover:bg-[#F2F2F7] hover:border-[#8E8E93] active:scale-[.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150">
  Текст кнопки
</button>
```

## [WEB] / [DSK] Secondary — 40px (компактная)

```html
<button type="button" class="min-h-[40px] py-2 px-4 inline-flex items-center justify-center gap-x-2 text-[14px] font-medium rounded-lg bg-[#F2F2F7] text-[#1C1C1E] hover:bg-[#E5E5EA] active:scale-[.98] transition-all duration-150">
  Действие
</button>
```

## [WEB] / [DSK] Иконка-кнопка (Icon only) — 40px

```html
<!-- Веб: 40×40px, курсор — click-зона меньше чем tap -->
<button type="button" class="size-[40px] inline-flex items-center justify-center rounded-lg text-[#636366] hover:bg-[#F2F2F7] hover:text-[#1C1C1E] active:bg-[#E5E5EA] transition-all">
  <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <!-- иконка -->
  </svg>
</button>
```

---

## Сводная таблица размеров по платформам

| Вариант | [MOB] | [WEB] 1440 | [DSK] 1920 | Текст | Скругление |
|---|---|---|---|---|---|
| Primary (CTA) | 56px | 48px | 48px | MOB 17px / WEB 15px | MOB 16px / WEB 12px |
| Secondary / Outline | 48px | 40px | 40px | MOB 15px / WEB 14px | MOB 16px / WEB 10px |
| Ghost / Link | 44px | 36px | 36px | 15px | 12px |
| Destructive | 56px | 48px | 48px | MOB 17px / WEB 15px | MOB 16px / WEB 12px |
| Icon only | 44×44px | 40×40px | 40×40px | — | 12px |
