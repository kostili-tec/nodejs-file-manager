import { upperPath } from '../navigation/upperPath.js';
import { changeDir } from '../navigation/changeDir.js';
import { listDir } from '../navigation/listDir.js';
import { readFile } from '../basic/readFile.js';

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
      cmd: 'add new_file_name',
      callback: () => null,
    },
    rename: {
      cmd: 'rn path_to_file new_filename',
      callback: () => null,
    },
    copy: {
      cmd: 'cp path_to_file path_to_new_directory',
      callback: () => null,
    },
    move: {
      cmd: 'mv path_to_file path_to_new_directory',
      callback: () => null,
    },
    delete: {
      cmd: 'rm path_to_file',
      callback: () => null,
    },
  },
  operating: {
    getEOL: {
      cmd: 'os --EOL',
      callback: () => null,
    },
    getCPU: {
      cmd: 'os --cpus',
      callback: () => null,
    },
    getHomeDir: {
      cmd: 'os --homedir',
      callback: () => null,
    },
    getCurrentUser: {
      cmd: 'os --username',
      callback: () => null,
    },
    getCPUArchitecture: {
      cmd: 'os --architecture',
      callback: () => null,
    },
  },
  hash: {
    calculate: {
      cmd: 'hash path_to_file',
      callback: () => null,
    },
  },
  compress: {
    compressFile: {
      cmd: 'compress path_to_file path_to_destination',
      callback: () => null,
    },
    decompressFile: {
      cmd: 'decompress path_to_file path_to_destination',
      callback: () => null,
    },
  },
};

export const freezingCommands = Object.freeze(commands);

// export default freezeCommands;
