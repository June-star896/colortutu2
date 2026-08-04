# Learnings

Use loader-provided runtime paths exactly and request scoped network escalation when the npm registry is blocked by the workspace sandbox. If an interrupted Windows package install leaves multiple child Node processes, stop the task-owned processes and use `npm ci` from the lockfile instead of repairing transitive packages individually.
