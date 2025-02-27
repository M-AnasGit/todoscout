import fs from 'fs';
import chalk from 'chalk';

import { DEFAULT_CONFIG, CONFIG_FILE } from '../constants';

export default function init() {
    if (fs.existsSync(CONFIG_FILE)) {
        console.log(
            chalk.yellow('⚠️ Config file already exists at .whatodorc.json'),
        );
        return;
    }

    fs.writeFileSync(CONFIG_FILE, JSON.stringify(DEFAULT_CONFIG, null, 2));
    console.log(chalk.green('✅ Config file created: .whatodorc.json'));
}
