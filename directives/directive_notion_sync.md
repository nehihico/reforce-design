# Directive: Настройка синхронизации с Notion и GitHub Pages

## Что нужно сделать один раз

### Шаг 1 — Новый Notion токен

Старый токен был скомпрометирован (попал в чат). Создай новый:

1. Перейди на [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Нажми **New integration**
3. Название: `design-workspace-sync`
4. Capabilities: Read content, Update content, Insert content
5. Скопируй токен → вставь в `.env` как `NOTION_TOKEN=ntn_...`

### Шаг 2 — Подключи интеграцию к странице Notion

1. Открой в Notion ту страницу, куда хочешь поместить workspace (или создай новую)
2. Нажми `•••` → **Connections** → найди `design-workspace-sync` → подключи
3. Скопируй ID страницы из URL: `notion.so/{workspace}/{PAGE_ID}?v=...`
4. Вставь в `.env` как `NOTION_PARENT_PAGE_ID=`

### Шаг 3 — Установи зависимости

```bash
cd /Users/angelinalopatina/design/sync
npm install
```

### Шаг 4 — Создай структуру баз данных в Notion

```bash
cd /Users/angelinalopatina/design/sync
node setup-notion.js
```

Скрипт выведет ID баз данных → скопируй их в `.env`.

### Шаг 5 — Создай GitHub репозиторий

1. Зайди на [github.com/new](https://github.com/new)
2. Repository name: `design` (или любое)
3. Public (нужно для бесплатного GitHub Pages)
4. Create repository

В терминале:
```bash
cd /Users/angelinalopatina/design
git init
git remote add origin https://github.com/{твой-username}/design.git
git add .
git commit -m "init: design workspace"
git push -u origin main
```

### Шаг 6 — Включи GitHub Pages

1. Открой репозиторий на GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` / `/ (root)`
5. Save

Через 1-2 минуты сайт будет доступен по адресу:  
`https://{username}.github.io/design/`

---

## Ежедневный workflow

### Обновить данные в Notion после работы в VS Code:
```bash
cd /Users/angelinalopatina/design/sync
node push.js reforce
```

### Задеплоить прототип и обновить ссылку в Notion:
```bash
cd /Users/angelinalopatina/design/sync
bash deploy-prototype.sh reforce
```

### Что попадает в Notion при пуше:

| Локальный файл | Notion база | Notion страница |
|---|---|---|
| `projects/reforce/brief.md` | Briefs | `reforce — Бриф` |
| `projects/reforce/personas.md` | Research | `reforce — Персоны` |
| `projects/reforce/jtbd.md` | Research | `reforce — JTBD` |
| `projects/reforce/research/competitive-analysis.md` | Research | `reforce — Конкурентный анализ` |
| `projects/reforce/ia/sitemap.md` | Research | `reforce — Карта экранов` |
| `projects/reforce/prototype/prototype.html` | → GitHub Pages → URL в Projects | `reforce` → поле Прототип |

---

## Структура Notion после настройки

```
🎨 Design Workspace
├── 📁 Projects          ← все проекты, со ссылками на прототипы
├── 📋 Briefs            ← брифы с привязкой к проекту
├── 🔬 Research          ← персоны, JTBD, интервью, конкурентный анализ
└── ✅ Audits            ← результаты аудитов
```

Каждая запись в Briefs и Research **связана** с проектом через relation → можно фильтровать.
