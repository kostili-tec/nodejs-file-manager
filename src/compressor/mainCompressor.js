import { open, stat } from 'fs/promises';
import { pipeline } from 'node:stream/promises';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import path from 'path';

export const compressDecompressFile = async (pathToFile, destPath, isCompress) => {
  if (pathToFile) {
    let resolvedFilePath = '',
      resolvedDestPath = '',
      fileName = '',
      message = '';
    resolvedFilePath = path.resolve(process.cwd(), pathToFile);
    let readFileHandle, writeFileHandle, readableStream, writableStream, brotli;

    if (isCompress) {
      fileName = path.basename(resolvedFilePath) + '.br';
      brotli = createBrotliCompress();
      message = 'Done compressing';
    } else {
      fileName = path.basename(resolvedFilePath, '.br');
      brotli = createBrotliDecompress();
      message = 'Done decompressing';
    }

    if (destPath) {
      resolvedDestPath = path.resolve(process.cwd(), destPath, fileName);
    } else {
      resolvedDestPath = path.join(path.dirname(resolvedFilePath), fileName);
    }
    try {
      const fileInfo = await stat(resolvedFilePath);
      if (fileInfo.isFile()) {
        try {
          readFileHandle = await open(resolvedFilePath);
          writeFileHandle = await open(resolvedDestPath, 'w');

          readableStream = readFileHandle.createReadStream();
          writableStream = writeFileHandle.createWriteStream();

          await pipeline(readableStream, brotli, writableStream);
          console.log(message);
        } catch (err) {
          console.error('Operation failed. ', err);
        } finally {
          readFileHandle?.close();
          writeFileHandle?.close();
          readableStream?.close();
          writableStream?.close();
        }
      }
    } catch (error) {
      console.error('Operation failed. ', error);
    }
  } else {
    console.log('Invalid input. Incorrect paths');
  }
};
