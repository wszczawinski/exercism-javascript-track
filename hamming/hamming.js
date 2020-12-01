const checkDifference = (strandOne, strandTwo) => {
  let difference = 0;
  for (let i = 0; i < strandOne.length; i++) {
    difference += strandOne[i] == strandTwo[i] ? 0 : 1;
  }

  return difference;
};

export const compute = (strandOne, strandTwo) => {
  if (strandOne.length == strandTwo.length) {
    return checkDifference(strandOne, strandTwo);
  } else if (strandOne.length == 0) {
    throw new Error("left strand must not be empty");
  } else if (strandTwo.length == 0) {
    throw new Error("right strand must not be empty");
  } else if (strandOne.length !== strandTwo.length) {
    throw new Error("left and right strands must be of equal length");
  }
};
