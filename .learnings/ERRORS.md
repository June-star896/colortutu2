## [ERR-20260803-001] bundled-pnpm-path

**Logged**: 2026-08-03T16:00:00+08:00
**Priority**: low
**Status**: resolved
**Area**: config

### Summary
The first dependency command used the bundled dependency root instead of the fallback binary path.

### Error
```text
pnpm.cmd is not recognized at dependencies/pnpm.cmd
```

### Context
- Task attempted: Install Next.js dependencies.
- Command/tool/API: bundled pnpm.
- Environment: Codex Desktop on Windows PowerShell.

### Suspected Cause
The workspace dependency loader exposes pnpm under `dependencies/bin/fallback/pnpm.cmd`.

### Suggested Fix
Use the exact loader-provided fallback path.

### Metadata
- Reproducible: yes
- Related files: package.json
- Tags: pnpm, windows, runtime

## [ERR-20260803-002] sandbox-registry-access

**Logged**: 2026-08-03T16:02:00+08:00
**Priority**: medium
**Status**: resolved
**Area**: infra

### Summary
pnpm could not fetch package metadata from the npm registry inside the default sandbox.

### Error
```text
[ERR_PNPM_META_FETCH_FAIL] GET https://registry.npmjs.org/@types%2Freact: fetch failed
```

### Context
- Task attempted: Install Next.js dependencies.
- Command/tool/API: pnpm install.
- Environment: workspace-write sandbox with restricted network.

### Suspected Cause
Outbound registry access is blocked inside the sandbox.

### Suggested Fix
Retry the same scoped install command with approved network escalation.

### Metadata
- Reproducible: yes
- Related files: package.json
- Tags: pnpm, network, sandbox

## [ERR-20260804-003] powershell-npm-script-policy

**Logged**: 2026-08-04T10:30:00+08:00
**Priority**: low
**Status**: resolved
**Area**: config

### Summary
PowerShell blocked the `npm.ps1` shim while running project validation.

### Error
```text
npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

### Context
- Task attempted: Run Next.js lint and production build.
- Command/tool/API: `npm run lint` and `npm run build`.
- Inputs: Existing npm project.
- Environment: Windows PowerShell with restricted execution policy.

### Suspected Cause
PowerShell selected the `.ps1` npm shim, which is disallowed by the host execution policy.

### Suggested Fix
Call `npm.cmd` explicitly for project scripts on this Windows workspace.

### Metadata
- Reproducible: yes
- Related files: package.json
- Tags: windows, powershell, npm, build
