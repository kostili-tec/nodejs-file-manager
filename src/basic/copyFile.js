import { access, open, stat, mkdir } from 'fs/promises';
import { pipeline } from 'node:stream/promises';
import path from 'path';

export const copyFile = async (pathToFile, destPath) => {
  if (pathToFile && destPath) {
    const resolvedFilePath = path.resolve(process.cwd(), pathToFile);
    const fileName = path.basename(resolvedFilePath);
    const resolvedDestPath = path.resolve(process.cwd(), destPath, fileName);
    let readFileHandle, writeFileHandle, readableStream, writableStream;
    try {
      const fileStat = await stat(resolvedFilePath);

      if (fileStat && fileStat.isFile()) {
        await createFolder(path.dirname(resolvedDestPath));

        readFileHandle = await open(resolvedFilePath);
        writeFileHandle = await open(resolvedDestPath, 'w');

        readableStream = readFileHandle.createReadStream();
        writableStream = writeFileHandle.createWriteStream();

        await pipeline(readableStream, writableStream);
      }
    } catch (error) {
      console.error('Operation failed. ', error);
    } finally {
      readableStream?.close();
      readFileHandle?.close();
      writableStream?.close();
      writeFileHandle?.close();
    }
  } else {
    console.log('Invalid input. Incorrect paths');
  }
};

const createFolder = async (path) => {
  try {
    await access(path);
  } catch (error) {
    if (error.code === 'ENOENT') {
      try {
        await mkdir(path, { recursive: true });
      } catch (err) {
        console.error('Operation failed. ', err);
      }
    } else {
      console.error('Operation failed. ', error);
    }
  }
};
