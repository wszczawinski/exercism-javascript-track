function divideRna(rnaSequence) {
  let codons = [];
  codons = rnaSequence.match(/.{1,3}/g);

  return codons;
}

const proteinsPattern = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

export const translate = (rnaSequence) => {
  let proteins = [];

  if (rnaSequence && rnaSequence.length % 3 !== 0) {
    throw new Error("Invalid codon");
  }

  if (rnaSequence) {
    let codons = divideRna(rnaSequence);

    proteins = codons.map((codon) => {
      if (proteinsPattern[codon] === undefined) {
        throw new Error("Invalid codon");
      }
      return proteinsPattern[codon];
    });

    if (proteins.includes("STOP")) {
      let n = proteins.indexOf("STOP");
      proteins = proteins.slice(0, n);
    }
  }

  return proteins;
};
