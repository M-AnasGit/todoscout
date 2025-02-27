import { Command } from 'commander';
import dotenv from 'dotenv';
dotenv.config();

import init from './actions/init';
import scan from './actions/scan';

const program = new Command();

program
    .name('whatodo')
    .description(
        'A CLI tool to keep track of unfinished tasks scattered across a codebase',
    );

program
    .command('init')
    .description(
        'Initialize a config file (.whatodorc.json) with default patterns',
    )
    .action(init);

program
    .command('scan')
    .description(
        'Scan the current directory for scattered tasks and generate a report',
    )
    .option('-d, --dir <dir>', 'Directory to scan for tasks')
    .action(scan);

program.parse(process.argv);
