const DNA = ["G", "C", "T", "A"];
const RNA = ["C", "G", "A", "U"];

export const toRna = (inputDNA) => {
  let outputRNA = "";

  inputDNA.split("").forEach((input) => {
    outputRNA = outputRNA + RNA[DNA.indexOf(input)];
  });

  return outputRNA;
};
