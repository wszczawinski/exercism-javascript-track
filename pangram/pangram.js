const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

function checkPangram(pangram) {
  return alphabetArray.every((letter) =>
    pangram.toLowerCase().includes(letter)
  );
}

export const isPangram = (pangram) => {
  return checkPangram(pangram);
};
