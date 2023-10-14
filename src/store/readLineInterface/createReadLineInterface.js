import * as readline from 'node:readline/promises';
import { store } from '../store.js';
import { stdin as input, stdout as output } from 'node:process';

export const createReadLineInterface = () => {
  store.readlineInterface = readline.createInterface({ input, output });
};
