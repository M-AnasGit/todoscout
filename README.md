# 📝 todoscout - A CLI for Tracking TODOs in Your Codebase

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**todoscout** is a CLI tool that scans your codebase for unfinished tasks (e.g., `// TODO:`, `// FIXME:`) and generates a structured report. It helps teams keep track of scattered tasks and metadata such as assigned users, due dates, and task priorities.

## ✨ Features

- **Scan your project** for `TODO`, `FIXME`, `NOTE`, and other custom patterns.
- **Extract metadata** (e.g., assigned users, due dates, status).
- **Ignore specific directories** (e.g., `node_modules`, `dist`).
- **Generate structured reports** for better task management (upcoming).

## 🚀 Installation

Install via **pnpm**:

```sh
pnpm add -g todoscout
```

Or using **npm**:

```sh
npm install -g todoscout
```

## 🔧 Usage

### 1️⃣ **Initialize Configuration**

```sh
todoscout init
```

This creates a `.todoscoutrc.json` config file where you can customize patterns, metadata, and ignored directories.

To ensure todoscout correctly detects and processes tasks, format your comments using the following structure:

```typescript
// KEYWORD: @metadata(value) @metadata(value) rest of the comment...
```

Example:

```typescript
// TODO: @users(jhon | jane) @due(2025-01-01) Connect to the database
```

### 2️⃣ **Scan Your Codebase**

```sh
todoscout scan
```

By default, it scans the current directory. You can specify a directory:

```sh
todoscout scan --dir src/
```

### 3️⃣ **Example Output**

```
🔍 Scanning directory: /path/to/project
✅ Found 3 tasks.

src/index.ts (12) user: joe due date: 2024-01-01 Fix the parsing logic
utils/helpers.ts (34) user: john status: pending Optimize this function
```

## 🛠 Configuration (`.todoscoutrc.json`)

Example config:

```json
{
    "patterns": [
        { "name": "TODO", "priority": "MEDIUM" },
        { "name": "FIXME", "priority": "HIGH" }
    ],
    "metadata": [
        { "name": "user", "prefix": "@user", "seperator": "|" },
        { "name": "due date", "prefix": "@due", "seperator": "|" }
    ],
    "files": ["js", "ts", "py", "java"],
    "ignore": ["node_modules/**", "dist/**"]
}
```

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to contribute! Open an issue or create a pull request.
