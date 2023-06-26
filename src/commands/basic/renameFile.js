import { rename, stat } from 'fs/promises';
import path from 'path';

export const renameFile = async (pathToFile, name) => {
  if (pathToFile && name) {
    const resolvedPath = path.resolve(process.cwd(), pathToFile);
    const newName = path.resolve(path.dirname(resolvedPath), name);

    try {
      const checkFile = await stat(resolvedPath);
      if (checkFile && checkFile.isFile()) {
        try {
          await rename(resolvedPath, newName);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log("Operation failed. Incorrect path or it's not a file");
      }
    } catch (error) {
      console.error('Operation failed', error);
    }
  } else {
    console.log('Invalid input. Incorrect arguments');
  }
};
