# DS: Поля ввода — Reforce × Preline UI

> **[MOB]** = мобайл · **[WEB]** = веб 1440px · **[DSK]** = десктоп 1920px

---

## [MOB] Базовый инпут — 56px

```html
<div class="flex flex-col gap-1.5">
  <label class="text-[13px] font-medium text-[#636366]">Подпись поля</label>
  <input type="text" placeholder="Placeholder"
    class="w-full h-[56px] px-4 rounded-2xl border-[1.5px] border-[#C7C7CC] bg-white text-[17px] text-[#1C1C1E] placeholder:text-[#C7C7CC] focus:outline-none focus:border-[#D42B2B] transition-colors duration-150" />
</div>
```

## С префиксом (телефон)

```html
<div class="relative">
  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-[17px] text-[#1C1C1E] pointer-events-none">+7</span>
  <input type="tel" inputmode="numeric" placeholder="(900) 000-00-00"
    class="w-full h-[56px] pl-[42px] pr-4 rounded-2xl border-[1.5px] border-[#C7C7CC] bg-white text-[17px] text-[#1C1C1E] placeholder:text-[#C7C7CC] focus:outline-none focus:border-[#D42B2B] transition-colors" />
</div>
```

## С иконкой слева

```html
<div class="relative">
  <div class="absolute left-4 top-1/2 -translate-y-1/2 text-[#C7C7CC] pointer-events-none">
    <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <!-- иконка поиска или другая -->
    </svg>
  </div>
  <input type="text" placeholder="Поиск"
    class="w-full h-[56px] pl-11 pr-4 rounded-2xl border-[1.5px] border-[#C7C7CC] bg-white text-[17px] text-[#1C1C1E] placeholder:text-[#C7C7CC] focus:outline-none focus:border-[#D42B2B] transition-colors" />
</div>
```

## Состояние ошибки

```html
<div class="flex flex-col gap-1.5">
  <label class="text-[13px] font-medium text-[#636366]">Подпись</label>
  <input type="text" value="Неверное значение"
    class="w-full h-[56px] px-4 rounded-2xl border-[1.5px] border-[#FF3B30] bg-[#FFF5F5] text-[17px] text-[#1C1C1E] focus:outline-none focus:border-[#FF3B30] transition-colors" />
  <p class="text-[13px] text-[#FF3B30]">Сообщение об ошибке</p>
</div>
```

## Состояние успеха

```html
<div class="flex flex-col gap-1.5">
  <label class="text-[13px] font-medium text-[#636366]">Подпись</label>
  <input type="text" value="Верное значение"
    class="w-full h-[56px] px-4 rounded-2xl border-[1.5px] border-[#34C759] bg-white text-[17px] text-[#1C1C1E] focus:outline-none focus:border-[#34C759] transition-colors" />
  <p class="text-[13px] text-[#34C759]">Подтверждено</p>
</div>
```

## Disabled

```html
<input type="text" value="Недоступно" disabled
  class="w-full h-[56px] px-4 rounded-2xl border-[1.5px] border-[#C7C7CC] bg-[#F2F2F7] text-[17px] text-[#C7C7CC] cursor-not-allowed" />
```

## Textarea

```html
<div class="flex flex-col gap-1.5">
  <label class="text-[13px] font-medium text-[#636366]">Комментарий</label>
  <textarea rows="4" placeholder="Введите текст..."
    class="w-full px-4 py-3.5 rounded-2xl border-[1.5px] border-[#C7C7CC] bg-white text-[15px] text-[#1C1C1E] placeholder:text-[#C7C7CC] focus:outline-none focus:border-[#D42B2B] resize-none transition-colors"></textarea>
</div>
```

## PIN / код (6 цифр)

```html
<div class="flex gap-2 justify-center">
  <input class="w-[44px] h-[56px] rounded-xl border-[1.5px] border-[#C7C7CC] bg-white text-[24px] font-semibold text-center text-[#1C1C1E] focus:outline-none focus:border-[#D42B2B] transition-colors" type="text" inputmode="numeric" maxlength="1" />
  <!-- × 6 -->
</div>
```

---

## [WEB] / [DSK] Базовый инпут — 48px

```html
<!-- Веб: меньше высота, компактнее шрифт, меньше скругление -->
<div class="flex flex-col gap-1.5">
  <label class="text-[13px] font-medium text-[#636366]">Подпись поля</label>
  <input type="text" placeholder="Placeholder"
    class="w-full h-[48px] px-4 rounded-xl border-[1.5px] border-[#C7C7CC] bg-white text-[15px] text-[#1C1C1E] placeholder:text-[#C7C7CC] focus:outline-none focus:border-[#D42B2B] hover:border-[#8E8E93] transition-colors duration-150" />
</div>
```

## [WEB] / [DSK] Инпут с ошибкой

```html
<div class="flex flex-col gap-1.5">
  <label class="text-[13px] font-medium text-[#636366]">Подпись поля</label>
  <input type="text" value="неверное значение"
    class="w-full h-[48px] px-4 rounded-xl border-[1.5px] border-[#FF3B30] bg-[#FFF5F5] text-[15px] text-[#1C1C1E] focus:outline-none focus:border-[#FF3B30] transition-colors" />
  <p class="flex items-center gap-1.5 text-[13px] text-[#FF3B30]">
    <svg class="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
    Текст ошибки
  </p>
</div>
```

## [WEB] / [DSK] Select — 48px

```html
<div class="relative">
  <select class="w-full h-[48px] px-4 pr-10 rounded-xl border-[1.5px] border-[#C7C7CC] bg-white text-[15px] text-[#1C1C1E] appearance-none focus:outline-none focus:border-[#D42B2B] hover:border-[#8E8E93] cursor-pointer transition-colors">
    <option value="" disabled selected>Выберите вариант</option>
    <option>Квартира</option>
    <option>Офис</option>
  </select>
  <div class="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#8E8E93]">
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </div>
</div>
```

## [WEB] / [DSK] Textarea

```html
<div class="flex flex-col gap-1.5">
  <label class="text-[13px] font-medium text-[#636366]">Комментарий</label>
  <textarea rows="4" placeholder="Введите текст..."
    class="w-full px-4 py-3 rounded-xl border-[1.5px] border-[#C7C7CC] bg-white text-[15px] text-[#1C1C1E] placeholder:text-[#C7C7CC] focus:outline-none focus:border-[#D42B2B] hover:border-[#8E8E93] resize-y transition-colors"></textarea>
</div>
```

---

## Сводная таблица по платформам

| Параметр | [MOB] | [WEB] / [DSK] |
|---|---|---|
| Высота инпута | 56px | 48px |
| Высота select | 56px | 48px |
| Шрифт в инпуте | 17px | 15px |
| Скругление | 16px (`rounded-2xl`) | 12px (`rounded-xl`) |
| Hover на border | — | `#8E8E93` |
| Focus border | `#D42B2B` | `#D42B2B` |
| Ошибка: border | `#FF3B30` | `#FF3B30` |
| Ошибка: фон | `#FFF5F5` | `#FFF5F5` |
| Placeholder | `#C7C7CC` | `#C7C7CC` |
