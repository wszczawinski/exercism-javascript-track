export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
      .split("\n")
      .map((row) => row.split(" ").map((item) => parseInt(item)));

    this.transposeMatrix = (matrix) => {
      return matrix[0].map((x, i) => matrix.map((x) => x[i]));
    };
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.transposeMatrix(this.matrix);
  }
}
