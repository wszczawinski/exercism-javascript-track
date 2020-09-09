const colors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedValue = (encodedResistor) => {
  let decodedResistor = 0;

  for (let i = 0; i < 2; i++) {
    let multiplier = i ? 1 : 10;
    decodedResistor += colors.indexOf(encodedResistor[i]) * multiplier;
  }

  return decodedResistor;
};
