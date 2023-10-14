import { appendFile } from 'fs/promises';
import path from 'path';

export const createFile = async (fileName) => {
  const pathForFile = path.join(process.cwd(), fileName);
  await appendFile(pathForFile, '');
};
