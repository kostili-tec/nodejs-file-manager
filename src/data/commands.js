const commands = {
  navigation: {
    up: 'up',
    cd: 'cd',
    list: 'ls',
  },
  basic: {
    read: 'cat path_to_file',
    create: 'add new_file_name',
    rename: 'rn path_to_file new_filename',
    copy: 'cp path_to_file path_to_new_directory',
    move: 'mv path_to_file path_to_new_directory',
    delete: 'rm path_to_file',
  },
  operating: {
    getEOL: 'os --EOL',
    getCPU: 'os --cpus',
    getHomeDir: 'os --homedir',
    getCurrentUser: 'os --username',
    getCPUArchitecture: 'os --architecture',
  },
  hash: {
    calculate: 'hash path_to_file',
  },
  compress: {
    compressFile: 'compress path_to_file path_to_destination',
    decompressFile: 'decompress path_to_file path_to_destination',
  },
};

export default commands;
