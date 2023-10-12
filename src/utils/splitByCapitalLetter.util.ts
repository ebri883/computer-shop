const splitByCapitalLetter = (text: string) => {
  const matches = text.match(/([a-z]+|[A-Z][a-z]*)/g) || [];
  return matches.filter(Boolean);
};

export default splitByCapitalLetter;
