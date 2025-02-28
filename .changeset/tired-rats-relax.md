---
'whatodo': major
---

# 🚀 whatodo v1.0.0 - First Major Release

## Main Features

- **Full project scanning**: Automatically detects scattered tasks (`TODO`, `FIXME`, `NOTE`, etc.) across all files.
- **Metadata extraction**: Supports extracting metadata like `@user(john)`, `@due(2024-05-01)`, and `@status(pending)`.
- **Customizable patterns**: Users can define their own task keywords and metadata formats in `.whatodorc.json`.
- **Recursive scanning**: Searches all project files while ignoring specified directories (e.g., `node_modules`, `dist`).
- **Structured report generation**: Outputs a clear, formatted summary of all detected tasks.
- **CLI commands**:
    - `whatodo init` → Initializes a configuration file.
    - `whatodo scan` → Scans the project and generates a report.

This marks the first stable release of **whatodo**, making it easier to track unfinished tasks directly from the command line! 🚀
