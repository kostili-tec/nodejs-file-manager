import { open, stat } from 'fs/promises';
import path from 'path';

export const readFile = async (filePath) => {
  if (!filePath) {
    console.log('You must specify the path');
  } else {
    const resolvedPath = path.resolve(process.cwd(), filePath);
    try {
      const pathInfo = await stat(resolvedPath);
      if (pathInfo.isFile()) {
        await openReadFileHandle(resolvedPath);
      } else {
        console.log('This is not a file');
      }
    } catch {
      console.log('The file does not exist or the path is incorrect');
    }
  }
};

const openReadFileHandle = async (path) => {
  const fileHandle = await open(path);

  if (fileHandle) {
    const stream = fileHandle.createReadStream({ encoding: 'utf-8' });
    stream.on('data', (chunk) => console.log(chunk));
    stream.on('error', (error) => console.log('Error of reading file: ', error));
  }
};
