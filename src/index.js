import { getsUsername } from './utils/getUsername.js';

const { stdout, stdin } = process;
const username = getsUsername();

console.log(`Welcome to the File Manager, ${username}!\n`);

stdin.on('data', (data) => {
  if (data.toString().trim() === '.exit') {
    stdout.write(`Thank you for using File Manager, ${username}, goodbye!\n`);
    process.exit();
  }
});

process.on('SIGINT', () => {
  stdout.write(`Thank you for using File Manager, ${username}, goodbye!\n`);
  process.exit();
});
