#!/bin/bash
# PostToolUse(Edit|Write): auto-fix the edited file, then report anything left so Claude fixes it.
f=$(jq -r '.tool_input.file_path // .tool_response.filePath // empty')
case "$f" in *.ts|*.tsx|*.js|*.jsx|*.mjs) ;; *) exit 0 ;; esac
[ -f "$f" ] || exit 0
cd "$CLAUDE_PROJECT_DIR" || exit 0
out=$(npx --no-install eslint --fix "$f" 2>&1) && exit 0
echo "ESLint errors remain in $f after --fix:" >&2
echo "$out" >&2
exit 2
