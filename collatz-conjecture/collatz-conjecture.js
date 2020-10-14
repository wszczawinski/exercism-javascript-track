export const steps = (initial) => {
  let steps = 0;
  if (initial <= 0) throw new Error("Only positive numbers are allowed");

  while (initial !== 1) {
    initial % 2 == 0 ? (initial = initial / 2) : (initial = initial * 3 + 1);
    steps++;
  }
  return steps;
};
