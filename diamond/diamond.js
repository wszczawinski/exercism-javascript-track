export const rows = (letter) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const n = letters.indexOf(letter);
  let diamond = ["A"];

  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      diamond = diamond.map((x) => " " + x + " ");
      diamond.push(letters[i] + " ".repeat(i * 2 - 1) + letters[i]);
    }
  }

  diamond = diamond.concat(diamond.slice().reverse().slice(1));
  return diamond;
};
