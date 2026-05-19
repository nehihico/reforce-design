# DS: Анимация и переходы — Reforce

> Принципы: естественность, минимализм, оправданность.  
> Анимация объясняет изменения, а не украшает интерфейс.

---

## Длительности

| Токен | Время | Применение |
|---|---|---|
| `--duration-instant` | 0ms | Немедленный отклик (фокус инпута, active-состояние кнопки) |
| `--duration-fast` | 100ms | Микро-взаимодействия: hover, press, чекбокс |
| `--duration-base` | 200ms | Стандартные переходы: смена цвета, fade, scale |
| `--duration-enter` | 260ms | Появление элементов: тост, боттомшит slide-up |
| `--duration-exit` | 200ms | Исчезновение (всегда быстрее появления) |
| `--duration-page` | 300ms | Переход между экранами |
| `--duration-complex` | 400ms | Сложные анимации: раскрытие аккордеона, статус ARM |

**Правило:** исчезновение всегда быстрее появления. Пользователь ждёт нового контента, а не следит за уходящим.

---

## Кривые (Easing)

| Токен | CSS-значение | Применение |
|---|---|---|
| `--ease-linear` | `linear` | Прогресс-бары, лоадеры |
| `--ease-standard` | `cubic-bezier(.4, 0, .2, 1)` | Стандартный переход (Material стандарт) |
| `--ease-decelerate` | `cubic-bezier(0, 0, .2, 1)` | Появление элемента (входит быстро, тормозит) |
| `--ease-accelerate` | `cubic-bezier(.4, 0, 1, 1)` | Уход элемента (медленно стартует, ускоряется) |
| `--ease-spring` | `cubic-bezier(.34, 1.56, .64, 1)` | Упругий эффект: успех, подтверждение, тост |
| `--ease-ios` | `cubic-bezier(.25, .46, .45, .94)` | Нативные переходы iOS (страницы в ЛК) |

---

## Типы анимаций

### Переход между экранами (мобайл)
```css
/* Вход нового экрана справа */
.screen-enter    { transform: translateX(100%); opacity: 1; }
.screen-enter-to { transform: translateX(0);    transition: transform 300ms cubic-bezier(.25,.46,.45,.94); }

/* Уход текущего экрана влево */
.screen-exit    { transform: translateX(0); }
.screen-exit-to { transform: translateX(-30%); opacity: 0.6; transition: transform 300ms cubic-bezier(.25,.46,.45,.94); }
```

### Появление боттомшита / модала
```css
.sheet-enter    { transform: translateY(100%); }
.sheet-enter-to { transform: translateY(0); transition: transform 260ms cubic-bezier(0,0,.2,1); }

.sheet-exit    { transform: translateY(0); }
.sheet-exit-to { transform: translateY(100%); transition: transform 200ms cubic-bezier(.4,0,1,1); }
```

### Тост-уведомление
```css
.toast-enter    { transform: translateY(16px); opacity: 0; }
.toast-enter-to { transform: translateY(0); opacity: 1; transition: all 260ms cubic-bezier(.34,1.56,.64,1); }

.toast-exit-to  { opacity: 0; transform: translateY(8px); transition: all 200ms ease; }
```

### Смена статуса (Armed / Disarmed)
```css
/* Иконка пульсирует при смене статуса */
@keyframes status-pulse {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.15); }
  100% { transform: scale(1); }
}
.status-change { animation: status-pulse 400ms cubic-bezier(.34,1.56,.64,1); }
```

### Успешное действие (checkmark pop-in)
```css
@keyframes pop-in {
  0%   { transform: scale(0); opacity: 0; }
  60%  { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}
.success-icon { animation: pop-in 400ms cubic-bezier(.34,1.56,.64,1) forwards; }
```

### Ошибка (shake)
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-6px); }
  40%       { transform: translateX(6px); }
  60%       { transform: translateX(-4px); }
  80%       { transform: translateX(4px); }
}
.error-shake { animation: shake 320ms ease-out; }
```

### Fade элементов (появление/скрытие)
```css
.fade-enter    { opacity: 0; }
.fade-enter-to { opacity: 1; transition: opacity 200ms ease; }
.fade-exit-to  { opacity: 0; transition: opacity 150ms ease; }
```

---

## Когда использовать анимацию

| Ситуация | Анимация | Длительность |
|---|---|---|
| Переход между экранами | Slide (iOS-style) | 300ms |
| Открытие боттомшита | Slide up | 260ms |
| Закрытие боттомшита | Slide down | 200ms |
| Тост-уведомление | Slide up + spring | 260ms |
| Успешное действие | Pop-in (зелёный чек) | 400ms |
| Ошибка ввода | Shake | 320ms |
| Смена статуса охраны | Pulse | 400ms |
| Появление алерта inline | Fade + slide down 8px | 200ms |
| Кнопка active/pressed | Scale 0.97 | 100ms |
| Тоггл | Slide + color | 200ms |

---

## Запреты

| Нельзя | Почему |
|---|---|
| Анимировать каждый элемент | Создаёт визуальный шум, замедляет восприятие |
| Длительность > 400ms без необходимости | Пользователь чувствует задержку > 300ms |
| Анимировать только для красоты | Каждая анимация должна объяснять изменение |
| Блокировать взаимодействие на время анимации | Кнопка должна реагировать немедленно |
| Использовать `linear` для UI-переходов | Выглядит механически, без естественности |
