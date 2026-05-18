/**
 * add-screens-db.js
 * Добавляет базу данных Screens в существующий Design Workspace.
 * Запускать один раз: node add-screens-db.js
 * После запуска скопировать NOTION_DB_SCREENS в .env
 */

import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function addScreensDb() {
  const workspacePageId = process.env.NOTION_WORKSPACE_PAGE_ID;
  const projectsDbId    = process.env.NOTION_DB_PROJECTS;

  if (!workspacePageId || !projectsDbId) {
    console.error('Не найдены NOTION_WORKSPACE_PAGE_ID или NOTION_DB_PROJECTS в .env');
    process.exit(1);
  }

  const screensDb = await notion.databases.create({
    parent: { type: 'page_id', page_id: workspacePageId },
    title: [{ text: { content: 'Screens' } }],
    description: [{ text: { content: 'Экраны для согласования между дизайнером и разработчиками' } }],
    properties: {
      'Название': { title: {} },
      'Проект':   { relation: { database_id: projectsDbId, single_property: {} } },
      'Статус':   { select: { options: [
        { name: 'В работе',            color: 'blue'   },
        { name: 'Утверждено',          color: 'green'  },
        { name: 'Не утверждено',       color: 'red'    },
        { name: 'Требует обновления',  color: 'yellow' }
      ]}},
      'Figma':     { url: {} },
      'Прототип':  { url: {} },
      'Описание':  { rich_text: {} },
      'Дата':      { date: {} },
      'Последнее обновление': { last_edited_time: {} }
    }
  });

  console.log('Screens DB создана:', screensDb.id);
  console.log('\nДобавь в .env:');
  console.log(`NOTION_DB_SCREENS=${screensDb.id}`);
}

addScreensDb().catch(err => {
  console.error('Ошибка:', err.message);
  if (err.code === 'unauthorized')    console.error('Проверь NOTION_TOKEN в .env');
  if (err.code === 'object_not_found') console.error('Проверь NOTION_WORKSPACE_PAGE_ID в .env');
  process.exit(1);
});
