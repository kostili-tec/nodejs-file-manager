import { rm, stat } from 'fs/promises';
import path from 'path';

export const deleteFile = async (pathToFile) => {
  const resolvedPath = path.resolve(process.cwd(), pathToFile);
  try {
    const checkFile = await stat(resolvedPath);
    if (checkFile.isFile()) {
      try {
        await rm(path.resolve(process.cwd(), pathToFile), { recursive: true, force: true });
      } catch (err) {
        console.error('Operation failed. ', err);
      }
    } else {
      console.log("Operation failed. File don't exist");
    }
  } catch (error) {
    console.error('Operation failed.', error);
  }
};
