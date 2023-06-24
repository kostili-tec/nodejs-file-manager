import { stat } from 'fs/promises';
import path from 'path';

export const changeDir = async (newPath) => {
  console.log('run change');
  if (newPath) {
    const currentPath = process.cwd();
    const resolvePath = path.resolve(currentPath, newPath);
    const isExistWay = await checkDir(resolvePath);
    if (isExistWay) {
      process.chdir(resolvePath);
    }
  } else {
    console.log('incorrect way');
  }
};

const checkDir = async (dirPath) => {
  try {
    return await stat(dirPath);
  } catch {
    console.log('incorrect way');
  }
};
