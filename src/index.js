import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { freezingCommands as commands } from './data/commands.js';

import { getsUsername } from './utils/getUsername.js';
import { getSystemPath } from './utils/systemPath.js';
import { changePath } from './navigation/changePath.js';
import { mainSystem } from './system/mainSystem.js';
import { findObjectByCmd } from './data/finder.js';
import { splitStringWithQuotes } from './utils/checkCommand.js';

let currentPath = getSystemPath();
process.chdir(currentPath);
const username = getsUsername();
console.log(`Welcome to the File Manager, ${username}!\n`);

const rl = readline.createInterface({ input, output });
rl.setPrompt(`You are currently in ${currentPath}>\n`);
rl.prompt();

const processCommand = async (command) => {
  const commandArray = splitStringWithQuotes(command);
  const [operation, firstArg, secondArg] = commandArray;

  // console.log('commandArray ', commandArray);
  // console.log('operation', operation);

  // const commandInfo = findObjectByCmd(commands, operation);

  switch (operation) {
    case 'hello':
      console.log('Hello, World!');
      break;
    case '.exit':
      console.log(`\nThank you for using File Manager, ${username}, goodbye!\n`);
      rl.close();
      break;

    // navigation
    case commands.navigation.up.cmd: {
      const newPath = commands.navigation.up.callback(currentPath);
      currentPath = newPath;
      changePath(rl, newPath);
      break;
    }
    case commands.navigation.cd.cmd: {
      await commands.navigation.cd.callback(firstArg);
      break;
    }
    case commands.navigation.list.cmd: {
      await commands.navigation.list.callback();
      break;
    }

    // basic
    case commands.basic.read.cmd: {
      await commands.basic.read.callback(firstArg);
      break;
    }
    case commands.basic.create.cmd: {
      await commands.basic.create.callback(firstArg);
      break;
    }
    case commands.basic.rename.cmd: {
      await commands.basic.rename.callback(firstArg, secondArg);
      break;
    }
    case commands.basic.copy.cmd: {
      await commands.basic.copy.callback(firstArg, secondArg);
      break;
    }
    case commands.basic.move.cmd: {
      await commands.basic.move.callback(firstArg, secondArg);
      break;
    }
    case commands.basic.delete.cmd: {
      await commands.basic.delete.callback(firstArg);
      break;
    }
    // operating
    case 'os':
      mainSystem(firstArg);
      break;
    // hash
    case commands.hash.calculate.cmd: {
      await commands.hash.calculate.callback(firstArg);
      break;
    }
    // compress
    case commands.compress.compressFile.cmd: {
      await commands.compress.compressFile.callback(firstArg, secondArg);
      break;
    }
    case commands.compress.decompressFile.cmd: {
      await commands.compress.decompressFile.callback(firstArg, secondArg);
      break;
    }
    default:
      console.log('Invalid input');
      break;
  }
};

rl.on('line', async (input) => {
  const command = input.trim();
  await processCommand(command);
  currentPath = process.cwd();
  rl.setPrompt(`You are currently in ${currentPath}>\n`);
  rl.prompt();
});

rl.on('close', () => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!\n`);
  process.exit(0);
});
