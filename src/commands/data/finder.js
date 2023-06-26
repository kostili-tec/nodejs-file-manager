export const findObjectByCmd = (obj, searchValue) => {
  for (const prop in obj) {
    if (typeof obj[prop] === 'object') {
      const cmd = obj[prop].cmd;
      if (cmd && cmd.includes(searchValue)) {
        return obj[prop];
      }

      const foundObject = findObjectByCmd(obj[prop], searchValue);
      if (foundObject) {
        return foundObject;
      }
    }
  }

  return null;
};
