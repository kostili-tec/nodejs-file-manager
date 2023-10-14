import { compressDecompressFile } from './mainCompressor.js';

export const decompressFile = async (pathToFile, destPath) =>
  await compressDecompressFile(pathToFile, destPath, false);
