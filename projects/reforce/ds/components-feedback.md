# DS: Обратная связь — Reforce × Preline UI

> Алерты, тосты, баджи, статусы, модалы подтверждения

---

## Бейдж / Статус-чип

```html
<!-- Под охраной -->
<span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[12px] font-medium bg-[#E8FFF0] text-[#248A3D]">
  <span class="size-1.5 rounded-full bg-[#34C759]"></span>
  Под охраной
</span>

<!-- Снят с охраны -->
<span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[12px] font-medium bg-[#F2F2F7] text-[#8E8E93]">
  <span class="size-1.5 rounded-full bg-[#8E8E93]"></span>
  Снят с охраны
</span>

<!-- Тревога -->
<span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[12px] font-medium bg-[#FFF0EF] text-[#D70015]">
  <span class="size-1.5 rounded-full bg-[#FF3B30]"></span>
  Тревога
</span>

<!-- ГБР направлена -->
<span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[12px] font-medium bg-[#EFF6FF] text-[#0040DD]">
  <span class="size-1.5 rounded-full bg-[#007AFF]"></span>
  ГБР направлена
</span>

<!-- Требует внимания -->
<span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[12px] font-medium bg-[#FFF8EC] text-[#AD5700]">
  <span class="size-1.5 rounded-full bg-[#FF9500]"></span>
  Задолженность
</span>
```

## Инлайн-алерт (под полем или в форме)

```html
<!-- Ошибка -->
<div class="flex items-start gap-2.5 rounded-xl bg-[#FFF0EF] border border-[#FFCDD2] px-4 py-3">
  <svg class="size-4 text-[#FF3B30] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>
  </svg>
  <p class="text-[14px] text-[#D70015]">Текст ошибки</p>
</div>

<!-- Предупреждение -->
<div class="flex items-start gap-2.5 rounded-xl bg-[#FFF8EC] border border-[#FFE4AD] px-4 py-3">
  <svg class="size-4 text-[#FF9500] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4m0 4h.01"/>
  </svg>
  <p class="text-[14px] text-[#AD5700]">Текст предупреждения</p>
</div>

<!-- Информация -->
<div class="flex items-start gap-2.5 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] px-4 py-3">
  <svg class="size-4 text-[#007AFF] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/>
  </svg>
  <p class="text-[14px] text-[#0040DD]">Текст информации</p>
</div>

<!-- Успех -->
<div class="flex items-start gap-2.5 rounded-xl bg-[#E8FFF0] border border-[#BBF7D0] px-4 py-3">
  <svg class="size-4 text-[#34C759] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <p class="text-[14px] text-[#248A3D]">Текст успеха</p>
</div>
```

## Тост-уведомление (снизу экрана)

```html
<div class="fixed bottom-[90px] left-4 right-4 z-50">
  <div class="flex items-center gap-3 bg-[#1C1C1E] rounded-2xl px-4 py-3.5 shadow-lg">
    <svg class="size-5 text-[#34C759] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <p class="text-[14px] text-white font-medium flex-1">Объект поставлен на охрану</p>
    <button class="text-[#636366] min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2">
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>
</div>
```

## Модал подтверждения

```html
<!-- Оверлей -->
<div class="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0">
  <!-- Шит (action sheet — мобайл стиль) -->
  <div class="w-full max-w-sm bg-white rounded-3xl overflow-hidden">
    <div class="p-6 text-center">
      <!-- Иконка -->
      <div class="size-14 rounded-full bg-[#FFF0EF] flex items-center justify-center mx-auto mb-4">
        <svg class="size-7 text-[#FF3B30]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
        </svg>
      </div>
      <h3 class="text-[17px] font-bold text-[#1C1C1E] mb-2">Снять с охраны?</h3>
      <p class="text-[15px] text-[#636366]">Объект будет снят. Вы уверены?</p>
    </div>
    <div class="flex flex-col gap-2 px-4 pb-4">
      <button class="w-full min-h-[52px] rounded-2xl bg-[#FF3B30] text-white text-[17px] font-semibold">
        Снять с охраны
      </button>
      <button class="w-full min-h-[52px] rounded-2xl bg-[#F2F2F7] text-[#1C1C1E] text-[17px] font-medium">
        Отмена
      </button>
    </div>
  </div>
</div>
```

## Пустое состояние (Empty state)

```html
<div class="flex flex-col items-center justify-center py-16 px-6 text-center">
  <div class="size-16 rounded-2xl bg-[#F2F2F7] flex items-center justify-center mb-4">
    <svg class="size-8 text-[#C7C7CC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <!-- иконка -->
    </svg>
  </div>
  <h3 class="text-[17px] font-semibold text-[#1C1C1E] mb-1">Объектов нет</h3>
  <p class="text-[15px] text-[#636366] mb-6">Добавьте первый объект, чтобы начать</p>
  <button class="min-h-[48px] px-6 rounded-2xl bg-[#D42B2B] text-white text-[15px] font-semibold">
    Добавить объект
  </button>
</div>
```

## Скелетон-загрузка

```html
<div class="animate-pulse flex items-center gap-3 p-4">
  <div class="size-10 rounded-xl bg-[#F2F2F7]"></div>
  <div class="flex flex-col gap-2 flex-1">
    <div class="h-4 bg-[#F2F2F7] rounded-lg w-3/4"></div>
    <div class="h-3 bg-[#F2F2F7] rounded-lg w-1/2"></div>
  </div>
</div>
```
