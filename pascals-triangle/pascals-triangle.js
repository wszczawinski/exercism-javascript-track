export const rows = (height) => {
  let pascalsTriangle = [];

  if (height) {
    pascalsTriangle = [[1]];

    for (let i = 1; i < height; ++i) {
      let row = [1];
      for (let j = 1; j < i; ++j) {
        row.push(pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j]);
      }
      row.push(1);
      pascalsTriangle.push(row);
    }
  }
  return pascalsTriangle;
};
