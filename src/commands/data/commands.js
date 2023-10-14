import os from 'os';
import { upperPath } from '../navigation/upperPath.js';
import { changeDir } from '../navigation/changeDir.js';
import { listDir } from '../navigation/listDir.js';
import { readFile } from '../basic/readFile.js';
import { createFile } from '../basic/createFile.js';
import { renameFile } from '../basic/renameFile.js';
import { copyFile } from '../basic/copyFile.js';
import { moveFile } from '../basic/moveFile.js';
import { deleteFile } from '../basic/deleteFile.js';
import { getCPUs } from '../system/getCpus.js';
import { calculateHash } from '../hash/calculateHash.js';
import { compressFile } from '../compressor/compressFile.js';
import { decompressFile } from '../compressor/decompressFile.js';

const commands = {
  navigation: {
    up: {
      cmd: 'up',
      callback: upperPath,
    },
    cd: {
      cmd: 'cd',
      callback: changeDir,
    },
    list: {
      cmd: 'ls',
      callback: listDir,
    },
  },
  basic: {
    read: {
      cmd: 'cat',
      callback: readFile,
    },
    create: {
      cmd: 'add',
      callback: createFile,
    },
    rename: {
      cmd: 'rn',
      callback: renameFile,
    },
    copy: {
      cmd: 'cp',
      callback: copyFile,
    },
    move: {
      cmd: 'mv',
      callback: moveFile,
    },
    delete: {
      cmd: 'rm',
      callback: deleteFile,
    },
  },
  operating: {
    getEOL: {
      cmd: '--EOL',
      callback: () => console.log(JSON.stringify(os.EOL)),
    },
    getCPU: {
      cmd: '--cpus',
      callback: () => getCPUs(),
    },
    getHomeDir: {
      cmd: '--homedir',
      callback: () => console.log('Home directory is: ', os.homedir()),
    },
    getCurrentUser: {
      cmd: '--username',
      callback: () => console.log('Current system name is: ', os.userInfo().username),
    },
    getCPUArchitecture: {
      cmd: '--architecture',
      callback: () => console.log('CPU architecture is: ', os.arch()),
    },
  },
  hash: {
    calculate: {
      cmd: 'hash',
      callback: calculateHash,
    },
  },
  compress: {
    compressFile: {
      cmd: 'compress',
      callback: compressFile,
    },
    decompressFile: {
      cmd: 'decompress',
      callback: decompressFile,
    },
  },
};

export const freezingCommands = Object.freeze(commands);
