import { getSystemPath } from '../utils/getSystemPath.js';
import { getCLIUserName } from '../utils/getCLIUserName.js';
import { processCommand } from '../commands/comandsHandler.js';

import { updatePath } from '../store/path/updatePath.js';
import { getPath } from '../store/path/getPath.js';
import { saveUserName } from '../store/userName/saveUserName.js';
import { getUserName } from '../store/userName/getUserName.js';
import { createReadLineInterface } from '../store/readLineInterface/createReadLineInterface.js';
import { getReadLineInterface } from '../store/readLineInterface/getReadLineInterface.js';

export const startApp = () => {
  updatePath(getSystemPath());
  process.chdir(getPath());
  saveUserName(getCLIUserName());
  const userName = getUserName();
  console.log(`Welcome to the File Manager, ${userName}!\n`);

  createReadLineInterface();
  const rl = getReadLineInterface();

  rl.setPrompt(`You are currently in ${getPath()}>\n`);
  rl.prompt();

  rl.on('line', async (input) => {
    const command = input.trim();
    await processCommand(command);
    updatePath(process.cwd());
    rl.setPrompt(`You are currently in ${getPath()}>\n`);
    rl.prompt();
  });

  rl.on('close', () => {
    console.log(`\nThank you for using File Manager, ${userName}, goodbye!\n`);
    process.exit(0);
  });
};
