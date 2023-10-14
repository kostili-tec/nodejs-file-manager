export const splitStringWithQuotes = (str) => {
  const regex = /[^\s']+|'([^']*)'/g;
  const matches = str.match(regex);
  const result = matches ? matches.map((match) => match.replace(/'/g, '')) : [];
  return result;
};
