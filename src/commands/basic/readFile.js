import { open, stat } from 'fs/promises';
import path from 'path';

export const readFile = async (filePath) => {
  if (!filePath) {
    console.log('Invalid input. You must specify the path');
  } else {
    const resolvedPath = path.resolve(process.cwd(), filePath);
    try {
      const pathInfo = await stat(resolvedPath);
      if (pathInfo.isFile()) {
        await openReadFileHandle(resolvedPath);
      } else {
        console.log('Invalid input. This is not a file');
      }
    } catch {
      console.log('Invalid input. The file does not exist or the path is incorrect');
    }
  }
};

const openReadFileHandle = async (path) => {
  try {
    const fileHandle = await open(path);
    const stream = fileHandle.createReadStream({ encoding: 'utf-8' });
    for await (const chunk of stream) {
      console.log(chunk);
    }
    stream.on('error', (error) => console.log('Error of reading file: ', error));
  } catch (error) {
    console.error('Operation failed ', error);
  }
};
