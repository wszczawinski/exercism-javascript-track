export const gigasecond = (inputDate) => {
  let newDate = new Date();
  let gigasecond = 10**12;

  newDate.setTime(inputDate.getTime() + gigasecond);

  return newDate;
};
