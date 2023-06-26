import { splitStringWithQuotes } from '../utils/checkCommand.js';
import { freezingCommands as commands } from './data/commands.js';
import { mainSystem } from './system/mainSystem.js';
import { getReadLineInterface } from '../store/readLineInterface/getReadLineInterface.js';
import { getPath } from '../store/path/getPath.js';

export const processCommand = async (command) => {
  const commandArray = splitStringWithQuotes(command);
  const [operation, firstArg, secondArg] = commandArray;

  const readlineInteface = getReadLineInterface();
  const currentPath = getPath();

  switch (operation) {
    case '.exit':
      readlineInteface.close();
      break;

    // navigation
    case commands.navigation.up.cmd:
      commands.navigation.up.callback(currentPath);
      break;

    case commands.navigation.cd.cmd:
      await commands.navigation.cd.callback(firstArg);
      break;

    case commands.navigation.list.cmd:
      await commands.navigation.list.callback();
      break;

    // basic
    case commands.basic.read.cmd:
      await commands.basic.read.callback(firstArg);
      break;

    case commands.basic.create.cmd:
      await commands.basic.create.callback(firstArg);
      break;

    case commands.basic.rename.cmd:
      await commands.basic.rename.callback(firstArg, secondArg);
      break;

    case commands.basic.copy.cmd:
      await commands.basic.copy.callback(firstArg, secondArg);
      break;

    case commands.basic.move.cmd:
      await commands.basic.move.callback(firstArg, secondArg);
      break;

    case commands.basic.delete.cmd:
      await commands.basic.delete.callback(firstArg);
      break;

    // operating
    case 'os':
      mainSystem(firstArg);
      break;

    // hash
    case commands.hash.calculate.cmd:
      await commands.hash.calculate.callback(firstArg);
      break;

    // compress
    case commands.compress.compressFile.cmd:
      await commands.compress.compressFile.callback(firstArg, secondArg);
      break;

    case commands.compress.decompressFile.cmd:
      await commands.compress.decompressFile.callback(firstArg, secondArg);
      break;

    default:
      console.log('Invalid input');
      break;
  }
};
