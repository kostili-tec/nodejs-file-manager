import path from 'path';

export const upperPath = () => {
  process.chdir(path.dirname(process.cwd()));
};
