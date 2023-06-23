export const changePath = (readline, newPath) => {
  readline.setPrompt(`You are currently in ${newPath}>\n`);
};
