import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { freezingCommands as commands } from './data/commands.js';

import { getsUsername } from './utils/getUsername.js';
import { getSystemPath } from './utils/systemPath.js';
import { changePath } from './navigation/changePath.js';
import { findObjectByCmd } from './data/finder.js';

let currentPath = getSystemPath();
process.chdir(currentPath);
const username = getsUsername();
console.log(`Welcome to the File Manager, ${username}!\n`);

const rl = readline.createInterface({ input, output });
rl.setPrompt(`You are currently in ${currentPath}>\n`);
rl.prompt();

const processCommand = (command) => {
  console.log(findObjectByCmd(commands, command));
  switch (command) {
    case 'hello':
      console.log('Hello, World!');
      break;
    case '.exit':
      console.log(`\nThank you for using File Manager, ${username}, goodbye!\n`);
      rl.close();
      break;
    case commands.navigation.up.cmd: {
      const newPath = commands.navigation.up.callback(currentPath);
      currentPath = newPath;
      changePath(rl, newPath);
      break;
    }
    default:
      console.log('Invalid input');
      break;
  }
};

rl.on('line', (input) => {
  const command = input.trim();
  processCommand(command);
  rl.prompt();
});

rl.on('close', () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!\n`);
  process.exit(0);
});
