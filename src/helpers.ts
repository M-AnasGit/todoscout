import fs from 'fs';

import { DEFAULT_CONFIG, CONFIG_FILE } from './constants';
import { Config, Todos } from './types';

export function getConfig(): Config {
    if (fs.existsSync(CONFIG_FILE)) {
        return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
    }
    return DEFAULT_CONFIG;
}

export function parseFiles(
    files: string[],
    config_patterns: Config['patterns'],
): Todos[] {
    const patterns = config_patterns.map((pattern) => ({
        regex: new RegExp(`(//|#|/\\*|--)\\s*${pattern.name}:(.*)`, 'gi'),
        priority: pattern.priority,
    }));

    let foundTodos: Todos[] = [];

    files.forEach((file) => {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');

        lines.forEach((line, lineNumber) => {
            patterns.forEach((p) => {
                const match = p.regex.exec(line);
                if (match) {
                    foundTodos.push({
                        file,
                        line: lineNumber + 1,
                        text: match[2]?.trim() || '',
                        priority: p.priority,
                    });
                }
            });
        });
    });

    return foundTodos;
}

export function parseTodoMetaData(
    todoLine: string,
    metadataConfig: Config['metadata'],
): { metadata: Record<string, string>; cleanedText: string } {
    let cleanedText = todoLine;
    const metadata: Record<string, string> = {};

    metadataConfig.forEach(({ name, prefix, seperator }) => {
        const regex = new RegExp(`${prefix}\\(([^)]+)\\)`, 'g');
        let match;

        while ((match = regex.exec(todoLine)) !== null) {
            metadata[name] = (match[1] ?? '').split(seperator).join(', ') || '';
            cleanedText = cleanedText.replace(match[0], '').trim();
        }
    });

    return { metadata, cleanedText };
}
