export class NucleotideCounts {
  static parse(dna) {
    let numberOfA = (dna.match(/A/g) || []).length;
    let numberOfC = (dna.match(/C/g) || []).length;
    let numberOfG = (dna.match(/G/g) || []).length;
    let numberOfT = (dna.match(/T/g) || []).length;

    if (dna.length === numberOfA + numberOfC + numberOfG + numberOfT) {
      return numberOfA + " " + numberOfC + " " + numberOfG + " " + numberOfT;
    } else {
      throw new Error("Invalid nucleotide in strand");
    }
  }
}
