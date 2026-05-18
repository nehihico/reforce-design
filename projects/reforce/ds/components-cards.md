# DS: Карточки — Reforce × Preline UI

---

## Базовая карточка

```html
<div class="flex flex-col bg-white border border-[#F2F2F7] shadow-sm rounded-2xl p-4">
  <h3 class="text-[17px] font-semibold text-[#1C1C1E]">Заголовок</h3>
  <p class="mt-1 text-[15px] text-[#636366]">Описание</p>
</div>
```

## Карточка объекта (главная ЛК)

```html
<div class="flex items-center gap-3 bg-white border border-[#F2F2F7] rounded-2xl p-4 min-h-[72px]">
  <!-- Статус-индикатор -->
  <div class="size-10 rounded-xl bg-[#F2F2F7] flex items-center justify-center shrink-0">
    <svg class="size-5 text-[#34C759]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <!-- иконка объекта -->
    </svg>
  </div>
  <!-- Контент -->
  <div class="flex flex-col flex-1 min-w-0">
    <p class="text-[15px] font-semibold text-[#1C1C1E] truncate">Квартира, ул. Ленина 5</p>
    <div class="flex items-center gap-1.5 mt-0.5">
      <span class="size-2 rounded-full bg-[#34C759]"></span>
      <span class="text-[13px] text-[#34C759]">Под охраной</span>
    </div>
  </div>
  <!-- Стрелка -->
  <svg class="size-4 text-[#C7C7CC] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>
```

## Карточка статуса (ARM)

```html
<!-- Под охраной -->
<div class="flex flex-col items-center justify-center bg-white border border-[#F2F2F7] rounded-3xl p-6 gap-3">
  <div class="size-20 rounded-full bg-[#E8FFF0] flex items-center justify-center">
    <svg class="size-9 text-[#34C759]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <!-- иконка щита/замка -->
    </svg>
  </div>
  <div class="text-center">
    <p class="text-[17px] font-semibold text-[#1C1C1E]">Под охраной</p>
    <p class="text-[13px] text-[#636366] mt-0.5">С 08:45, сегодня</p>
  </div>
</div>

<!-- Снят с охраны -->
<div class="flex flex-col items-center justify-center bg-white border border-[#F2F2F7] rounded-3xl p-6 gap-3">
  <div class="size-20 rounded-full bg-[#F2F2F7] flex items-center justify-center">
    <svg class="size-9 text-[#8E8E93]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <!-- иконка открытого щита -->
    </svg>
  </div>
  <div class="text-center">
    <p class="text-[17px] font-semibold text-[#1C1C1E]">Снят с охраны</p>
    <p class="text-[13px] text-[#636366] mt-0.5">С 19:20, вчера</p>
  </div>
</div>
```

## Карточка события (лента)

```html
<div class="flex items-start gap-3 py-3 border-b border-[#F2F2F7] last:border-0">
  <!-- Иконка события -->
  <div class="size-9 rounded-xl bg-[#F2F2F7] flex items-center justify-center shrink-0 mt-0.5">
    <svg class="size-4 text-[#636366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <!-- иконка -->
    </svg>
  </div>
  <!-- Описание -->
  <div class="flex flex-col flex-1 min-w-0">
    <p class="text-[15px] font-medium text-[#1C1C1E]">Постановка на охрану</p>
    <p class="text-[13px] text-[#636366] mt-0.5">Зона 1 — Дверь входная</p>
  </div>
  <!-- Время -->
  <span class="text-[12px] text-[#C7C7CC] shrink-0">08:45</span>
</div>
```

## Карточка пакета (маркет)

```html
<div class="flex flex-col bg-white border-2 border-[#F2F2F7] rounded-2xl p-5 gap-3 relative">
  <!-- Бейдж -->
  <span class="absolute -top-3 left-4 bg-[#D42B2B] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">Популярное</span>

  <div>
    <h3 class="text-[17px] font-bold text-[#1C1C1E]">Охрана + видеонаблюдение</h3>
    <p class="text-[13px] text-[#636366] mt-1">Для квартиры или офиса</p>
  </div>

  <div>
    <p class="text-[22px] font-bold text-[#1C1C1E]">от 800 <span class="text-[15px] font-normal">₽/мес</span></p>
    <p class="text-[13px] text-[#636366]">+ оборудование 12 500 ₽</p>
  </div>

  <ul class="flex flex-col gap-2">
    <li class="flex items-center gap-2 text-[14px] text-[#1C1C1E]">
      <svg class="size-4 text-[#34C759] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Мониторинг 24/7
    </li>
  </ul>

  <button class="w-full min-h-[48px] rounded-2xl bg-[#D42B2B] text-white text-[15px] font-semibold hover:bg-[#BC2525] transition-colors">
    Оформить
  </button>
</div>
```

## Карточка с хедером и футером

```html
<div class="flex flex-col bg-white border border-[#F2F2F7] rounded-2xl overflow-hidden">
  <div class="px-4 py-3 border-b border-[#F2F2F7] flex items-center justify-between">
    <h3 class="text-[15px] font-semibold text-[#1C1C1E]">Заголовок</h3>
    <button class="text-[13px] text-[#D42B2B]">Действие</button>
  </div>
  <div class="p-4">
    <!-- контент -->
  </div>
  <div class="px-4 py-3 border-t border-[#F2F2F7] bg-[#F9F9FB]">
    <!-- футер -->
  </div>
</div>
```

---

## Статусы в карточках (тройное кодирование)

| Статус | Цвет точки | Текст | Фон иконки |
|---|---|---|---|
| Под охраной | `#34C759` | `#34C759` | `#E8FFF0` |
| Снят с охраны | `#8E8E93` | `#8E8E93` | `#F2F2F7` |
| Тревога | `#FF3B30` | `#FF3B30` | `#FFF0EF` |
| ГБР направлена | `#007AFF` | `#007AFF` | `#EFF6FF` |
| Требует внимания | `#FF9500` | `#FF9500` | `#FFF8EC` |
