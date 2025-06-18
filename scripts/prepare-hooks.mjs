import { chmodSync, mkdirSync, writeFileSync } from 'node:fs'

// Create husky folders
mkdirSync('.husky/_', { recursive: true })

// husky.sh
const huskyShim = `#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  readonly hook_name="$(basename "$0")"
  export readonly husky_skip_init=1
  sh -e "$0" "$@"
  exit $?
fi
`
writeFileSync('.husky/_/husky.sh', huskyShim)
chmodSync('.husky/_/husky.sh', 0o755)

// commit-msg
const commitMsg = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx commitlint --edit "$1"
`
writeFileSync('.husky/commit-msg', commitMsg)
chmodSync('.husky/commit-msg', 0o755)

// pre-commit
const preCommit = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn format
yarn lint

if ! git diff --quiet; then
  echo "🔁 Detected modified files after formatting. Staging them again..."
  git add .
fi
`
writeFileSync('.husky/pre-commit', preCommit)
chmodSync('.husky/pre-commit', 0o755)

// pre-push
const prePush = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn typecheck
yarn test
`
writeFileSync('.husky/pre-push', prePush)
chmodSync('.husky/pre-push', 0o755)

console.log('✅ Husky hooks installed and ready')
