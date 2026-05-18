# DS: Поля ввода — Reforce × Preline UI

---

## Базовый инпут

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

## Правила

- Минимальная высота инпута: **56px** (tap zone)
- Радиус скругления: **16px** (`rounded-2xl`)
- Граница в фокусе: **#D42B2B** (brand primary)
- Ошибка: граница + фон `#FFF5F5` + текст `#FF3B30`
- Placeholder: `#C7C7CC`
