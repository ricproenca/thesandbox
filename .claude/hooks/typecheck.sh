#!/bin/bash
# Stop: type-check when TS files have uncommitted changes; block stopping on errors.
input=$(cat)
[ "$(echo "$input" | jq -r '.stop_hook_active')" = "true" ] && exit 0
cd "$CLAUDE_PROJECT_DIR" || exit 0
[ -z "$(git status --porcelain -- '*.ts' '*.tsx')" ] && exit 0
out=$(npx --no-install tsc --noEmit 2>&1) && exit 0
echo "Type-check failed (npx tsc --noEmit):" >&2
echo "$out" | head -40 >&2
exit 2
