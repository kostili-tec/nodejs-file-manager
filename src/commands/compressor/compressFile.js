import { compressDecompressFile } from './mainCompressor.js';

export const compressFile = async (pathToFile, destPath) =>
  await compressDecompressFile(pathToFile, destPath, true);
