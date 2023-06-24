import { rm } from 'fs/promises';
import path from 'path';

import { copyFile } from './copyFile.js';

export const moveFile = async (pathToFile, destPath) => {
  try {
    await copyFile(pathToFile, destPath);
    try {
      await rm(path.resolve(process.cwd(), pathToFile), { recursive: true, force: true });
    } catch (err) {
      console.error('Operation failed. ', err);
    }
  } catch (error) {
    console.error('Operation failed. ', error);
  }
};
