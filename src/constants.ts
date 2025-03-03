import path from 'path';
import { Config } from './types';

export const CONFIG_FILE = path.join(
    process.cwd(),
    process.env.CONFIG_FILENAME || '.todoscoutrc.json',
);

export const DEFAULT_CONFIG: Config = {
    patterns: [
        {
            name: 'TODO',
            priority: 'MEDIUM',
        },
        {
            name: 'FIXME',
            priority: 'HIGH',
        },
        {
            name: 'NOTE',
            priority: 'LOW',
        },
        {
            name: 'HACK',
            priority: 'HIGH',
        },
    ],
    metadata: [
        {
            name: 'users',
            prefix: '@users',
            seperator: '|',
        },
        {
            name: 'status',
            prefix: '@status',
            seperator: '|',
        },
        {
            name: 'due date',
            prefix: '@due',
            seperator: '|',
        },
    ],
    files: ['js', 'ts', 'jsx', 'tsx', 'py', 'sh', 'sql', 'java', 'go', 'cpp'],
    ignore: ['node_modules/**', 'dist/**', 'build/**'],
};
