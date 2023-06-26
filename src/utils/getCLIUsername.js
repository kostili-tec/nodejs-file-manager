export const getCLIUserName = () => {
  const args = process.argv.slice(2);

  const parsedArgs = {};
  args.forEach((arg) => {
    const [key, value] = arg.split('=');
    parsedArgs[key.replace('--', '')] = value;
  });

  const username = parsedArgs.username || 'Guest';
  return username;
};
