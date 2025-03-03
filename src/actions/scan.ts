import path from 'path';
import chalk from 'chalk';
import { glob } from 'glob';

import { getConfig, parseFiles, parseTodoMetaData } from '../helpers';
import { ScanOptions, Todos } from '../types';

export default function scan({ dir }: ScanOptions) {
    const config = getConfig();
    const directory = path.resolve(dir || '.');

    console.log(chalk.blue(`🔍 Scanning directory: ${directory}`));

    const files = glob.sync(`${directory}/**/*.{${config.files.join(',')}}`, {
        ignore: config.ignore,
    });
    const foundTodos: Todos[] = parseFiles(files, config.patterns);

    if (foundTodos.length > 0) {
        console.log(chalk.green(`✅ Found ${foundTodos.length} tasks.`));

        console.log();
        foundTodos.forEach((todo) => {
            const { metadata, cleanedText } = parseTodoMetaData(
                todo.text,
                config.metadata,
            );
            const metadataOutput = Object.entries(metadata)
                .map(
                    ([key, value]) =>
                        `${chalk.cyan(key)}: ${chalk.yellow(value)}`,
                )
                .join(' | ');
            const textOutput =
                todo.priority === 'LOW'
                    ? chalk.gray(cleanedText)
                    : todo.priority === 'MEDIUM'
                      ? chalk.hex('#FFA500')(cleanedText)
                      : chalk.red(cleanedText);

            console.log(
                chalk.blue(todo.file),
                chalk.gray(`(${todo.line})`),
                metadataOutput,
                textOutput,
            );
        });
        console.log();
    } else {
        console.log(chalk.gray('No tasks found.'));
    }
}
