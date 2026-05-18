/**
 * push.js — отправляет локальные .md файлы в Notion
 * Использование: node push.js reforce | node push.js reforce-lk | node push.js reforce-market
 */

import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const slug = process.argv[2];
if (!slug) {
  console.error('Укажи slug: node push.js reforce | reforce-lk | reforce-market');
  process.exit(1);
}

const PROJECT_DIR = path.join(__dirname, '../projects', slug);
if (!fs.existsSync(PROJECT_DIR)) {
  console.error(`Проект не найден: projects/${slug}/`);
  process.exit(1);
}

const CONFIG_PATH = path.join(PROJECT_DIR, '.notion-config.json');
let config = fs.existsSync(CONFIG_PATH) ? JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8')) : {};

// ─── Markdown → Notion blocks ───────────────────────────────────────────────

function stripEmoji(text) {
  return text.replace(/[\u{1F300}-\u{1FFFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim();
}

function parseInline(text) {
  text = stripEmoji(text);
  const segments = [];
  let remaining = text;

  while (remaining.length > 0) {
    const boldMatch   = remaining.match(/^(.*?)\*\*(.*?)\*\*(.*)/s);
    const codeMatch   = remaining.match(/^(.*?)`([^`]+)`(.*)/s);
    const linkMatch   = remaining.match(/^(.*?)\[([^\]]+)\]\(([^)]+)\)(.*)/s);
    const italicMatch = remaining.match(/^(.*?)_(.*?)_(.*)/s);

    const candidates = [boldMatch, codeMatch, linkMatch, italicMatch].filter(Boolean);
    if (!candidates.length) {
      if (remaining) segments.push({ type: 'text', text: { content: remaining } });
      break;
    }

    const earliest = candidates.sort((a, b) => a[1].length - b[1].length)[0];
    if (earliest[1]) segments.push({ type: 'text', text: { content: earliest[1] } });

    if (earliest === boldMatch) {
      segments.push({ type: 'text', text: { content: earliest[2] }, annotations: { bold: true } });
      remaining = earliest[3];
    } else if (earliest === codeMatch) {
      segments.push({ type: 'text', text: { content: earliest[2] }, annotations: { code: true } });
      remaining = earliest[3];
    } else if (earliest === linkMatch) {
      const url = earliest[3];
      const isHttp = url.startsWith('http://') || url.startsWith('https://');
      segments.push({ type: 'text', text: isHttp
        ? { content: earliest[2], link: { url } }
        : { content: earliest[2] }
      });
      remaining = earliest[4];
    } else if (earliest === italicMatch) {
      segments.push({ type: 'text', text: { content: earliest[2] }, annotations: { italic: true } });
      remaining = earliest[3];
    }
  }

  return segments.length ? segments : [{ type: 'text', text: { content: text } }];
}

function heading(text, level) {
  const type = ['heading_1', 'heading_2', 'heading_3'][level - 1];
  return { type, [type]: { rich_text: parseInline(stripEmoji(text)) } };
}

function mdToBlocks(md) {
  const lines = md.split('\n');
  const blocks = [];
  let inCodeBlock = false;
  let codeLines = [];
  let codeLang = '';
  let tableBuffer = [];   // буфер строк таблицы

  const flushTable = () => {
    if (tableBuffer.length === 0) return;
    const numCols = Math.max(...tableBuffer.map(r => r.length));
    // нормализуем строки до одинаковой ширины
    const normalised = tableBuffer.map(row => {
      while (row.length < numCols) row.push('');
      return row;
    });
    blocks.push({
      type: 'table',
      table: {
        table_width: numCols,
        has_column_header: true,
        has_row_header: false,
        children: normalised.map(row => ({
          type: 'table_row',
          table_row: { cells: row.map(cell => parseInline(cell)) }
        }))
      }
    });
    tableBuffer = [];
  };

  for (const line of lines) {
    // Code block
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        flushTable();
        inCodeBlock = true;
        codeLang = line.replace('```', '').trim() || 'plain text';
        codeLines = [];
      } else {
        inCodeBlock = false;
        const lang = codeLang === 'mermaid' ? 'plain text' : (codeLang || 'plain text');
        const content = codeLines.join('\n');
        for (let s = 0; s < content.length; s += 1900) {
          blocks.push({
            type: 'code',
            code: {
              rich_text: [{ type: 'text', text: { content: content.slice(s, s + 1900) } }],
              language: lang
            }
          });
        }
        codeLines = [];
      }
      continue;
    }
    if (inCodeBlock) { codeLines.push(line); continue; }

    // Headings
    if (line.startsWith('### ')) { flushTable(); blocks.push(heading(line.slice(4), 3)); continue; }
    if (line.startsWith('## '))  { flushTable(); blocks.push(heading(line.slice(3), 2)); continue; }
    if (line.startsWith('# '))   { flushTable(); blocks.push(heading(line.slice(2), 1)); continue; }

    // Divider
    if (line.match(/^---+$/)) { flushTable(); blocks.push({ type: 'divider', divider: {} }); continue; }

    // Table
    if (line.startsWith('|')) {
      if (line.match(/^\|[-| :]+\|$/)) continue; // пропустить разделитель
      const cells = line.split('|')
        .slice(1, -1)
        .map(c => c.trim());
      tableBuffer.push(cells);
      continue;
    } else {
      flushTable();
    }

    // Bullet list
    if (line.match(/^[-*] /)) {
      blocks.push({
        type: 'bulleted_list_item',
        bulleted_list_item: { rich_text: parseInline(line.slice(2)) }
      });
      continue;
    }

    // Numbered list
    if (line.match(/^\d+\. /)) {
      blocks.push({
        type: 'numbered_list_item',
        numbered_list_item: { rich_text: parseInline(line.replace(/^\d+\. /, '')) }
      });
      continue;
    }

    // Checkbox
    if (line.match(/^- \[[ x]\] /)) {
      const checked = line.includes('- [x]');
      blocks.push({
        type: 'to_do',
        to_do: { rich_text: parseInline(line.replace(/^- \[[ x]\] /, '')), checked }
      });
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      blocks.push({ type: 'quote', quote: { rich_text: parseInline(line.slice(2)) } });
      continue;
    }

    // Пустая строка — пропустить
    if (!line.trim()) continue;

    // Параграф
    blocks.push({ type: 'paragraph', paragraph: { rich_text: parseInline(line) } });
  }

  flushTable();
  return blocks; // без лимита — updatePageContent сам порежет на чанки
}

// ─── Notion API helpers ──────────────────────────────────────────────────────

async function findOrCreatePage(dbId, title, extraProps = {}) {
  const res = await notion.databases.query({
    database_id: dbId,
    filter: { property: 'Название', title: { equals: title } }
  });
  if (res.results.length > 0) return res.results[0].id;

  const page = await notion.pages.create({
    parent: { database_id: dbId },
    properties: {
      'Название': { title: [{ text: { content: title } }] },
      ...extraProps
    }
  });
  return page.id;
}

async function updatePageContent(pageId, blocks) {
  const existing = await notion.blocks.children.list({ block_id: pageId });
  for (const b of existing.results) {
    await notion.blocks.delete({ block_id: b.id });
  }

  // Добавляем чанками по 100. Таблицы — как один блок с children.
  for (let i = 0; i < blocks.length; i += 100) {
    await notion.blocks.children.append({
      block_id: pageId,
      children: blocks.slice(i, i + 100)
    });
  }
}

function readFile(p) {
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
}

function readDir(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => ({ name: f, content: fs.readFileSync(path.join(dir, f), 'utf8') }));
}

function prettyLabel(filename) {
  return filename
    .replace('.md', '')
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

// ─── Карта файлов по проекту ─────────────────────────────────────────────────

function getFilesMap(slug, dir) {
  const briefs   = [];
  const research = [];
  const audits   = [];

  // brief.md
  const brief = readFile(path.join(dir, 'brief.md'));
  if (brief) briefs.push({ label: `${slug} — Бриф`, content: brief });

  // problems.md и prd.md → в Research
  for (const [file, label] of [
    ['problems.md', 'Проблемы и метрики'],
    ['prd.md',      'Требования (PRD)'],
  ]) {
    const content = readFile(path.join(dir, file));
    if (content) research.push({ label: `${slug} — ${label}`, content, type: 'Требования' });
  }

  // ia/ → в Research
  for (const { name, content } of readDir(path.join(dir, 'ia'))) {
    const label = name.includes('sitemap') ? 'Карта экранов'
                : name.includes('user-flow') ? 'User Flows'
                : prettyLabel(name);
    research.push({ label: `${slug} — ${label}`, content, type: 'IA' });
  }

  // research/ → в Research
  for (const { name, content } of readDir(path.join(dir, 'research'))) {
    const label = name.includes('competitive') ? 'Конкурентный анализ'
                : name.includes('web-ux') ? 'Веб UX-паттерны'
                : prettyLabel(name);
    research.push({ label: `${slug} — ${label}`, content, type: 'Исследование' });
  }

  // execution/ → в Research (только файлы в корне execution/, не в подпапках)
  for (const { name, content } of readDir(path.join(dir, 'execution'))) {
    const label = name.includes('decision') ? 'Дизайн-решения' : prettyLabel(name);
    research.push({ label: `${slug} — ${label}`, content, type: 'Дизайн' });
  }

  // audit/ → в Audits
  for (const { name, content } of readDir(path.join(dir, 'audit'))) {
    const label = name.includes('current') || name.includes('v3') ? 'Аудит текущей версии'
                : prettyLabel(name);
    audits.push({ label: `${slug} — ${label}`, content });
  }

  // execution/screens/ → в Screens (если есть)
  const screens = [];
  const screensDir = path.join(dir, 'execution', 'screens');
  for (const { name, content } of readDir(screensDir)) {
    screens.push({ label: `${slug} — ${prettyLabel(name)}`, content });
  }

  return { briefs, research, audits, screens };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function push() {
  console.log(`\nПушим проект "${slug}" в Notion...\n`);

  const protoConfig = readFile(path.join(PROJECT_DIR, 'prototype/.config.json'));
  const protoUrl = protoConfig ? JSON.parse(protoConfig).url : null;

  // 1. Проект
  const projectTitle = slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const projectId = await findOrCreatePage(
    process.env.NOTION_DB_PROJECTS,
    projectTitle,
    {
      'Статус': { select: { name: 'Этап 0 — Дизайн-спринт' } },
      ...(protoUrl ? { 'Прототип': { url: protoUrl } } : {})
    }
  );
  config.projectPageId = projectId;
  console.log(`Проект: ${projectTitle}`);

  const { briefs, research, audits, screens } = getFilesMap(slug, PROJECT_DIR);

  // 2. Briefs
  for (const { label, content } of briefs) {
    const pageId = await findOrCreatePage(
      process.env.NOTION_DB_BRIEFS,
      label,
      { 'Проект': { relation: [{ id: projectId }] } }
    );
    await updatePageContent(pageId, mdToBlocks(content));
    console.log(`Обновлено: ${label}`);
  }

  // 3. Research
  for (const { label, content, type } of research) {
    const pageId = await findOrCreatePage(
      process.env.NOTION_DB_RESEARCH,
      label,
      {
        'Проект': { relation: [{ id: projectId }] },
        'Тип': { select: { name: type } }
      }
    );
    await updatePageContent(pageId, mdToBlocks(content));
    console.log(`Обновлено: ${label}`);
  }

  // 4. Audits
  for (const { label, content } of audits) {
    const pageId = await findOrCreatePage(
      process.env.NOTION_DB_AUDITS,
      label,
      { 'Проект': { relation: [{ id: projectId }] } }
    );
    await updatePageContent(pageId, mdToBlocks(content));
    console.log(`Обновлено: ${label}`);
  }

  // 5. Screens (если есть execution/screens/*.md и NOTION_DB_SCREENS задан)
  if (screens.length > 0 && process.env.NOTION_DB_SCREENS) {
    for (const { label, content } of screens) {
      const pageId = await findOrCreatePage(
        process.env.NOTION_DB_SCREENS,
        label,
        {
          'Проект':  { relation: [{ id: projectId }] },
          'Статус':  { select: { name: 'В работе' } },
          'Дата':    { date: { start: new Date().toISOString().slice(0, 10) } }
        }
      );
      await updatePageContent(pageId, mdToBlocks(content));
      console.log(`Обновлено: ${label}`);
    }
  }

  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
  console.log(`\nГотово.`);
}

push().catch(err => {
  console.error('Ошибка:', err.message);
  if (err.code === 'unauthorized')    console.error('Проверь NOTION_TOKEN в .env');
  if (err.code === 'object_not_found') console.error('Проверь NOTION_DB_* в .env');
  process.exit(1);
});
