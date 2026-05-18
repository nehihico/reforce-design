# DS: Формы — Reforce × Preline UI

> Чекбоксы, радио, переключатели, селекты

---

## Чекбокс

```html
<!-- Базовый -->
<label class="flex items-start gap-3 cursor-pointer">
  <div class="relative mt-0.5">
    <input type="checkbox" class="sr-only peer" />
    <div class="size-[22px] rounded-md border-[1.5px] border-[#C7C7CC] bg-white peer-checked:bg-[#D42B2B] peer-checked:border-[#D42B2B] transition-all flex items-center justify-center">
      <svg class="size-3 text-white hidden peer-checked:block" viewBox="0 0 13 10" fill="none">
        <path d="M1.5 5L5 8.5L11.5 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
  <span class="text-[15px] text-[#1C1C1E] leading-relaxed">Текст согласия</span>
</label>
```

**Нативный вариант (проще, используется в прототипах):**

```html
<div class="flex items-start gap-3 cursor-pointer" onclick="this.querySelector('input').click()">
  <div id="cb" class="size-[22px] mt-0.5 rounded-md border-[1.5px] border-[#C7C7CC] bg-white flex items-center justify-center shrink-0 transition-all">
    <svg class="size-3 text-white hidden" viewBox="0 0 13 10" fill="none">
      <path d="M1.5 5L5 8.5L11.5 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <p class="text-[14px] text-[#636366] leading-relaxed">
    Согласен с <a href="#" class="text-[#1C1C1E] underline underline-offset-2">условиями</a>
  </p>
</div>

<script>
function toggleCheck(el) {
  el.classList.toggle('checked');
  el.classList.toggle('bg-[#D42B2B]');
  el.classList.toggle('border-[#D42B2B]');
  el.querySelector('svg').classList.toggle('hidden');
}
</script>
```

---

## Радио-кнопка

```html
<div class="flex flex-col gap-3">
  <!-- Опция -->
  <label class="flex items-center gap-3 cursor-pointer">
    <div class="size-[22px] rounded-full border-[1.5px] border-[#C7C7CC] flex items-center justify-center shrink-0 transition-all" data-radio>
      <div class="size-[10px] rounded-full bg-[#D42B2B] hidden"></div>
    </div>
    <span class="text-[15px] text-[#1C1C1E]">Вариант 1</span>
  </label>

  <!-- Опция активная -->
  <label class="flex items-center gap-3 cursor-pointer">
    <div class="size-[22px] rounded-full border-[1.5px] border-[#D42B2B] flex items-center justify-center shrink-0">
      <div class="size-[10px] rounded-full bg-[#D42B2B]"></div>
    </div>
    <span class="text-[15px] text-[#1C1C1E] font-medium">Вариант 2 (выбран)</span>
  </label>
</div>
```

---

## Тоггл (Switch)

```html
<!-- Выкл -->
<button role="switch" aria-checked="false"
  class="relative inline-flex h-[31px] w-[51px] rounded-full bg-[#E5E5EA] transition-colors duration-200 cursor-pointer"
  onclick="this.classList.toggle('bg-[#34C759]'); this.setAttribute('aria-checked', this.getAttribute('aria-checked') === 'false' ? 'true' : 'false'); this.querySelector('span').classList.toggle('translate-x-[20px]')">
  <span class="absolute top-[2px] left-[2px] size-[27px] bg-white rounded-full shadow-md transition-transform duration-200 translate-x-0"></span>
</button>

<!-- Вкл -->
<button role="switch" aria-checked="true"
  class="relative inline-flex h-[31px] w-[51px] rounded-full bg-[#34C759] transition-colors duration-200 cursor-pointer">
  <span class="absolute top-[2px] left-[2px] size-[27px] bg-white rounded-full shadow-md transition-transform duration-200 translate-x-[20px]"></span>
</button>
```

---

## Выпадающий список (Select)

```html
<div class="relative">
  <select class="w-full h-[56px] px-4 pr-10 rounded-2xl border-[1.5px] border-[#C7C7CC] bg-white text-[17px] text-[#1C1C1E] appearance-none focus:outline-none focus:border-[#D42B2B] cursor-pointer transition-colors">
    <option value="" disabled selected>Выберите тип объекта</option>
    <option>Квартира</option>
    <option>Офис</option>
    <option>Дом</option>
    <option>Склад</option>
  </select>
  <!-- Стрелка -->
  <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#636366]">
    <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</div>
```

---

## Прогресс-бар формы

```html
<!-- Шаг 2 из 6 -->
<div class="flex flex-col gap-1.5 px-4">
  <div class="flex justify-between text-[12px] text-[#636366]">
    <span>Шаг 2 из 6</span>
    <span>Адрес объекта</span>
  </div>
  <div class="w-full h-1 bg-[#F2F2F7] rounded-full overflow-hidden">
    <div class="h-full bg-[#D42B2B] rounded-full transition-all duration-500" style="width: 33%"></div>
  </div>
</div>
```

---

## Группа опций (выбор типа объекта — квиз)

```html
<div class="grid grid-cols-2 gap-3">
  <!-- Опция неактивная -->
  <button class="flex flex-col items-center justify-center gap-2 h-[88px] rounded-2xl border-[1.5px] border-[#F2F2F7] bg-white text-[#636366] hover:border-[#D42B2B] hover:text-[#D42B2B] transition-all">
    <svg class="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><!-- иконка --></svg>
    <span class="text-[13px] font-medium">Квартира</span>
  </button>

  <!-- Опция активная -->
  <button class="flex flex-col items-center justify-center gap-2 h-[88px] rounded-2xl border-[1.5px] border-[#D42B2B] bg-[#FFF5F5] text-[#D42B2B] transition-all">
    <svg class="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><!-- иконка --></svg>
    <span class="text-[13px] font-semibold">Офис</span>
  </button>
</div>
```
