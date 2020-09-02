export const getTitleCase = (str) =>
  str
    .split(" ")
    .map((str) => {
      const word = str.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
