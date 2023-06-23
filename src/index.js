import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { getsUsername } from './utils/getUsername.js';
import { getSystemPath } from './utils/systemPath.js';

const username = getsUsername();
console.log(`Welcome to the File Manager, ${username}!\n`);

const currentPath = getSystemPath();
const rl = readline.createInterface({ input, output });
rl.setPrompt(`You are currently in ${currentPath}>\n`);
rl.prompt();

const processCommand = (command) => {
  switch (command) {
    case 'hello':
      console.log('Hello, World!');
      break;
    case '.exit':
      console.log(`\nThank you for using File Manager, ${username}, goodbye!\n`);
      rl.close();
      break;
    default:
      console.log('Invalid input');
      break;
  }
}

rl.on('line', (input) => {
  const command = input.trim();
  processCommand(command);
  rl.prompt();
});

rl.on('close', () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!\n`);
  process.exit(0);
});
