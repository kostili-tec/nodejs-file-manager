import { readdir } from 'fs/promises';

export const listDir = async () => {
  const currentWay = process.cwd();
  try {
    const dirInfo = await readdir(currentWay, { withFileTypes: true });
    const folders = dirInfo.filter((el) => el.isDirectory());
    const files = dirInfo.filter((el) => el.isFile());
    const sortedArr = [...folders, ...files];
    const sortedArrToTable = sortedArr.map((el) => {
      const name = el.name;
      const type = el.isDirectory() ? 'directory' : 'file';
      return {
        name,
        type,
      };
    });
    console.table(sortedArrToTable);
  } catch (error) {
    console.log(error);
  }
};
