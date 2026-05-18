/**
 * setup-notion.js
 * Создаёт структуру баз данных в Notion один раз.
 * Запускать: node setup-notion.js
 * После запуска скопировать ID баз в .env
 */

import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function setup() {
  console.log('🚀 Создаю структуру Design Workspace в Notion...\n');

  // 1. Создаём корневую страницу workspace
  const workspace = await notion.pages.create({
    parent: { type: 'page_id', page_id: process.env.NOTION_PARENT_PAGE_ID },
    icon: { type: 'emoji', emoji: '🎨' },
    properties: {
      title: { title: [{ text: { content: 'Design Workspace' } }] }
    },
    children: [
      {
        type: 'callout',
        callout: {
          rich_text: [{ text: { content: 'Рабочая среда продуктового дизайнера. Синхронизируется с VS Code через Claude.' } }],
          icon: { type: 'emoji', emoji: '⚡' },
          color: 'blue_background'
        }
      }
    ]
  });
  console.log('✅ Корневая страница:', workspace.id);

  // 2. База данных Projects
  const projectsDb = await notion.databases.create({
    parent: { type: 'page_id', page_id: workspace.id },
    icon: { type: 'emoji', emoji: '📁' },
    title: [{ text: { content: 'Projects' } }],
    properties: {
      'Название':  { title: {} },
      'Статус':    { select: { options: [
        { name: 'Этап 0 — Дизайн-спринт', color: 'purple' },
        { name: 'Этап 1 — Разработка',    color: 'blue'   },
        { name: 'Этап 2 — Рост',          color: 'green'  },
        { name: 'Этап 3 — Расширение',    color: 'yellow' },
        { name: 'Завершён',               color: 'gray'   }
      ]}},
      'PM':        { rich_text: {} },
      'Дедлайн':   { date: {} },
      'Платформы': { multi_select: { options: [
        { name: 'iOS',       color: 'blue'   },
        { name: 'Android',   color: 'green'  },
        { name: 'Веб-ЛК',   color: 'yellow' },
        { name: 'Магазин',   color: 'orange' }
      ]}},
      'Прототип':  { url: {} },
      'Figma':     { url: {} }
    }
  });
  console.log('✅ Projects DB:', projectsDb.id);

  // 3. База данных Briefs
  const briefsDb = await notion.databases.create({
    parent: { type: 'page_id', page_id: workspace.id },
    icon: { type: 'emoji', emoji: '📋' },
    title: [{ text: { content: 'Briefs' } }],
    properties: {
      'Название':        { title: {} },
      'Проект':          { relation: { database_id: projectsDb.id, single_property: {} } },
      'Статус':          { select: { options: [
        { name: 'Черновик',   color: 'gray'   },
        { name: 'Согласован', color: 'green'  },
        { name: 'В работе',   color: 'blue'   },
        { name: 'Завершён',   color: 'yellow' }
      ]}},
      'PM':             { rich_text: {} },
      'Дедлайн':        { date: {} },
      'Последнее обновление': { last_edited_time: {} }
    }
  });
  console.log('✅ Briefs DB:', briefsDb.id);

  // 4. База данных Research
  const researchDb = await notion.databases.create({
    parent: { type: 'page_id', page_id: workspace.id },
    icon: { type: 'emoji', emoji: '🔬' },
    title: [{ text: { content: 'Research' } }],
    properties: {
      'Название': { title: {} },
      'Проект':   { relation: { database_id: projectsDb.id, single_property: {} } },
      'Тип':      { select: { options: [
        { name: 'Персоны',              color: 'purple' },
        { name: 'JTBD',                 color: 'blue'   },
        { name: 'Конкурентный анализ',  color: 'orange' },
        { name: 'Интервью',             color: 'green'  },
        { name: 'UX-аудит',             color: 'red'    },
        { name: 'Количественные данные',color: 'yellow' }
      ]}},
      'Инсайты': { rich_text: {} },
      'Последнее обновление': { last_edited_time: {} }
    }
  });
  console.log('✅ Research DB:', researchDb.id);

  // 5. База данных Audits
  const auditsDb = await notion.databases.create({
    parent: { type: 'page_id', page_id: workspace.id },
    icon: { type: 'emoji', emoji: '✅' },
    title: [{ text: { content: 'Audits' } }],
    properties: {
      'Название': { title: {} },
      'Проект':   { relation: { database_id: projectsDb.id, single_property: {} } },
      'Этап':     { select: { options: [
        { name: 'Бриф → Дизайн',       color: 'blue'   },
        { name: 'Дизайн → Реализация', color: 'green'  }
      ]}},
      'Балл':     { number: { format: 'number' } },
      'Дата':     { date: {} }
    }
  });
  console.log('✅ Audits DB:', auditsDb.id);

  // Выводим ID для .env
  console.log('\n📋 Скопируй в .env:\n');
  console.log(`NOTION_WORKSPACE_PAGE_ID=${workspace.id}`);
  console.log(`NOTION_DB_PROJECTS=${projectsDb.id}`);
  console.log(`NOTION_DB_BRIEFS=${briefsDb.id}`);
  console.log(`NOTION_DB_RESEARCH=${researchDb.id}`);
  console.log(`NOTION_DB_AUDITS=${auditsDb.id}`);
  console.log('\n✅ Готово! Теперь запусти: node push.js reforce');
}

setup().catch(err => {
  console.error('❌ Ошибка:', err.message);
  process.exit(1);
});
