import path from 'path';

export const getSystemPath = () => {
  const systemDrive = process.env.SystemDrive;

  const username = process.env.USERNAME;

  const systemPath = path.join(systemDrive, 'Users', username);

  return systemPath;
};
