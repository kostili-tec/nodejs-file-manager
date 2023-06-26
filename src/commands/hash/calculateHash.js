import { open, stat } from 'fs/promises';
import { pipeline } from 'node:stream/promises';
import path from 'path';
const { createHash } = await import('node:crypto');

export const calculateHash = async (pathToFile) => {
  const resolvedPath = path.resolve(process.cwd(), pathToFile);
  let filehandle, readableStream;
  try {
    const fileInfo = await stat(resolvedPath);
    if (fileInfo.isFile()) {
      try {
        const hash = createHash('sha256');
        filehandle = await open(resolvedPath);
        readableStream = filehandle.createReadStream();

        await pipeline(readableStream, hash);
        console.log(`${hash.digest('hex')}`);
      } catch (err) {
        console.error('Operation failed. ', err);
      } finally {
        filehandle?.close();
        readableStream?.close();
      }
    }
  } catch (error) {
    console.error('Operation failed. ', error);
  }
};
