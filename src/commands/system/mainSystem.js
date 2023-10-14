import { freezingCommands as commands } from '../data/commands.js';

export const mainSystem = (cmd) => {
  if (cmd.includes('--')) {
    switch (cmd) {
      case commands.operating.getEOL.cmd:
        commands.operating.getEOL.callback();
        break;

      case commands.operating.getCPU.cmd:
        commands.operating.getCPU.callback();
        break;

      case commands.operating.getHomeDir.cmd:
        commands.operating.getHomeDir.callback();
        break;

      case commands.operating.getCurrentUser.cmd:
        commands.operating.getCurrentUser.callback();
        break;

      case commands.operating.getCPUArchitecture.cmd:
        commands.operating.getCPUArchitecture.callback();
        break;

      default:
        console.log('Invalid input');
        break;
    }
  } else {
    console.log('Invalid input');
  }
};
