#!/bin/bash
# deploy-prototype.sh
# Деплоит HTML прототип на GitHub Pages и обновляет URL в Notion
# Использование: ./deploy-prototype.sh reforce
# Требует: git remote настроен, GitHub Pages включён

SLUG=$1
if [ -z "$SLUG" ]; then
  echo "❌ Укажи slug: ./deploy-prototype.sh reforce"
  exit 1
fi

PROTO_DIR="../projects/$SLUG/prototype"
CONFIG_FILE="$PROTO_DIR/.config.json"

if [ ! -f "$PROTO_DIR/prototype.html" ]; then
  echo "❌ Прототип не найден: $PROTO_DIR/prototype.html"
  exit 1
fi

echo "📦 Деплоим прототип $SLUG на GitHub Pages..."

# Коммитим и пушим
cd "$(dirname "$0")/.."
git add "projects/$SLUG/prototype/prototype.html"
git commit -m "deploy: прототип $SLUG"
git push origin main

# Получаем GitHub username и repo из remote
REMOTE=$(git remote get-url origin)
# Формат: https://github.com/username/repo.git
GITHUB_USER=$(echo $REMOTE | sed 's/.*github.com[:/]\([^/]*\)\/.*/\1/')
GITHUB_REPO=$(echo $REMOTE | sed 's/.*\/\([^.]*\).*/\1/')

PROTO_URL="https://$GITHUB_USER.github.io/$GITHUB_REPO/projects/$SLUG/prototype/prototype.html"

# Сохраняем URL в config
echo "{\"url\": \"$PROTO_URL\", \"deployed\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}" > "$CONFIG_FILE"

echo "✅ Прототип задеплоен:"
echo "   $PROTO_URL"
echo ""
echo "📤 Обновляем ссылку в Notion..."
cd sync && node push.js "$SLUG"
