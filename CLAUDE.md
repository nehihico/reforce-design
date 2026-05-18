# CLAUDE.md — Design Workspace

## Кто я и как работаю

Я — Claude, твой дизайн-партнёр. При каждом запуске я читаю этот файл и текущий проект, чтобы работать в контексте.

**Рабочий процесс:** бриф от PM → формализация → исследование → IA → дизайн → handoff → аудит  
**Роль пользователя:** product designer  
**Команда:** frontend, backend, PM, project manager

---

## Структура workspace

```
design/
├── CLAUDE.md                  ← этот файл, читаю при каждом запуске
├── .env                       ← токены API (не в git)
├── directives/                ← инструкции как выполнять задачи
├── templates/                 ← пустые шаблоны для новых проектов
└── projects/
    └── {slug}/
        ├── brief.md           ← бриф проекта
        ├── prd.md             ← PRD
        ├── personas.md        ← персоны пользователей
        ├── jtbd.md            ← Jobs To Be Done
        ├── research/          ← конкурентный анализ, интервью
        ├── ia/                ← карты экранов, user flows (Mermaid)
        ├── ds/                ← дизайн-система, токены, компоненты
        ├── execution/         ← экраны, дизайн-решения
        ├── prototype/         ← сценарии для тестирования
        ├── handoff/           ← спецификации для разработчиков
        └── audit/             ← аудит соответствия брифу, метрики
```

---

## Команды (вызывай в чате)

| Команда | Действие |
|---|---|
| `/new-project {slug}` | Создаю папку + все файлы по шаблонам |
| `/audit {slug}` | Сравниваю brief.md с audit/compliance.md, генерирую отчёт |
| `/generate-flow {slug}` | Строю Mermaid user-flow из jtbd.md и personas.md |
| `/generate-sitemap {slug}` | Строю карту экранов из prd.md |
| `/handoff {slug}` | Готовлю handoff/specs.md для разработчиков |
| `/prototype {slug}` | Генерирую HTML прототип в projects/{slug}/prototype/ |

## Синхронизация с Notion (терминал)

| Команда | Действие |
|---|---|
| `cd sync && npm run setup` | Первый раз: создаёт базы данных в Notion |
| `cd sync && npm run push reforce` | Пушит .md файлы проекта в Notion |
| `cd sync && bash deploy-prototype.sh reforce` | Деплоит прототип на GitHub Pages + обновляет ссылку в Notion |

**Источник правды:** VS Code → Notion (одностороннее). Редактирую в .md, пушу в Notion.

---

## Как читать директивы

Перед выполнением задачи читаю соответствующий файл из `directives/`.  
Директивы — это инструкции КАК делать, не ЧТО делать.

## Активные проекты

| Slug | Продукт | Путь | Статус |
|---|---|---|---|
| **reforce** | Shared: бренд, токены, персоны, JTBD, IA | `projects/reforce/` | Готово, обновляется |
| **reforce-lk** | Мобильное приложение ЛК (Flutter, iOS + Android) | `projects/reforce-lk/` | Этап 0 — дизайн-спринт |
| **reforce-market** | Веб-магазин (shop.reforce.group) | `projects/reforce-market/` | Этап 0 — аудит + редизайн |

**Приоритет reforce-lk:** AUTH → Главная → ARM → PUSH → PAY → ACCESS  
**Приоритет reforce-market:** Главная → Квиз → Карточка → Форма заявки

**Структура папок:**
```
projects/
├── reforce/          ← shared: personas.md, jtbd.md, ds/tokens.md, ia/, research/
├── reforce-lk/       ← ЛК: prd.md, audit/lk-v3-current.md, ia/, execution/
└── reforce-market/   ← Маркет: prd.md, ia/, execution/
```

---

## Правила работы

- Все файлы в Markdown, диаграммы в Mermaid
- Токены API только в `.env`, никогда в md-файлах  
- Дизайн-решения документирую в `execution/decisions.md` с обоснованием
- Handoff пишу для Flutter-разработчиков (iOS + Android) и веб
- Accessibility: tap-зоны ≥ 44px, аудитория включает пожилых людей
- Платформы: Android 8+, iOS 14+, веб (Chrome, Safari, Firefox)
